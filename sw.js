(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/lib/util.js
  var require_util = __commonJS({
    "src/lib/util.js"(exports) {
      function secondsToHourMinuteSecondString(totalSeconds) {
        const hours = parseInt(totalSeconds / 3600);
        const minutes = parseInt((totalSeconds - 3600 * hours) / 60);
        const seconds = parseInt(totalSeconds - 3600 * hours - 60 * minutes);
        return `${hours}h${minutes}m${seconds}s`;
      }
      function showNotification({ level, message, ttl }) {
        if (!level || !message || isObjectEmpty2(message)) {
          return;
        }
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-message-request",
          requestId: Date.now().toString(),
          path: "/custom-alert-message",
          alertMessage: message,
          alertLevel: level,
          ttl
        }, "*");
      }
      function responseMessage(responseId, response) {
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-post-message-response",
          responseId,
          response
        }, "*");
      }
      function isObjectEmpty2(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
      }
      exports.secondsToHourMinuteSecondString = secondsToHourMinuteSecondString;
      exports.showNotification = showNotification;
      exports.responseMessage = responseMessage;
      exports.isObjectEmpty = isObjectEmpty2;
    }
  });

  // src/manifest.json
  var require_manifest = __commonJS({
    "src/manifest.json"(exports, module) {
      module.exports = {
        defaultCrmManifestUrl: "https://lite-http-tunnel-s52m.onrender.com/crmManifest",
        mixpanelToken: "04acd7cb2e1867dcf98b6e8cf5ee1e1c",
        version: "0.8.14"
      };
    }
  });

  // package.json
  var require_package = __commonJS({
    "package.json"(exports, module) {
      module.exports = {
        name: "rc-unified-crm-extension-client",
        version: "0.8.13",
        description: "![image](https://user-images.githubusercontent.com/7036536/190325756-35ef367d-1557-4833-84aa-b09f5d6717ab.png)",
        main: "background.js",
        scripts: {
          build: "node ./build.js"
        },
        repository: {
          type: "git",
          url: "git+https://github.com/DaKingKong/rc-unified-crm-extension.git"
        },
        author: "",
        license: "ISC",
        bugs: {
          url: "https://github.com/DaKingKong/rc-unified-crm-extension/issues"
        },
        homepage: "./",
        dependencies: {
          "@ringcentral/juno": "^2.35.0",
          "@ringcentral/juno-icon": "^1.15.0",
          "@segment/analytics-next": "^1.49.1",
          axios: "^1.1.2",
          "crypto-js": "^4.1.1",
          idb: "^8.0.0",
          "mixpanel-browser": "^2.49.0",
          moment: "^2.29.4",
          react: "^17.0.2",
          "react-dom": "^17.0.2",
          "react-draggable": "^4.4.5",
          "styled-components": "^5.3.3"
        },
        devDependencies: {
          esbuild: "^0.20.2",
          "esbuild-copy-static-files": "^0.1.0",
          "esbuild-plugin-svgr": "^1.1.0"
        }
      };
    }
  });

  // src/sw.js
  var { isObjectEmpty } = require_util();
  var baseManifest = require_manifest();
  var packageJson = require_package();
  var manifest;
  var pipedriveInstallationTabId;
  var pipedriveCallbackUri;
  var cachedClickToXRequest;
  async function openPopupWindow() {
    console.log("open popup");
    const { popupWindowId } = await chrome.storage.local.get("popupWindowId");
    if (popupWindowId) {
      try {
        await chrome.windows.update(popupWindowId, { focused: true });
        return true;
      } catch (e) {
      }
    }
    const { extensionWindowStatus } = await chrome.storage.local.get({ extensionWindowStatus: null });
    const popupUri = `popup.html?multipleTabsSupport=1&disableLoginPopup=1&appServer=https://platform.ringcentral.com&redirectUri=https://ringcentral.github.io/ringcentral-embeddable/redirect.html&enableAnalytics=1&showSignUpButton=1&clientId=3rJq9BxcTCm-I7CFcY19ew&appVersion=${packageJson.version}&userAgent=RingCentral CRM Extension&disableNoiseReduction=false`;
    let popup;
    if (!!extensionWindowStatus?.state && (extensionWindowStatus.state === "maximized" || extensionWindowStatus.state === "fullscreen")) {
      popup = await chrome.windows.create({
        url: popupUri,
        type: "popup",
        focused: true,
        state: extensionWindowStatus.state
      });
    } else {
      popup = await chrome.windows.create({
        url: popupUri,
        type: "popup",
        focused: true,
        width: extensionWindowStatus?.width ?? 315,
        height: extensionWindowStatus?.height ?? 566,
        left: extensionWindowStatus?.left ?? 50,
        top: extensionWindowStatus?.top ?? 50
      });
    }
    await chrome.storage.local.set({
      popupWindowId: popup.id
    });
    try {
      let { customCrmManifestUrl } = await chrome.storage.local.get({ customCrmManifestUrl: null });
      if (!!!customCrmManifestUrl || customCrmManifestUrl === "") {
        customCrmManifestUrl = baseManifest.defaultCrmManifestUrl;
        await chrome.storage.local.set({ customCrmManifestUrl });
      }
      const customCrmManifestJson = await (await fetch(customCrmManifestUrl)).json();
      if (customCrmManifestJson) {
        await chrome.storage.local.set({ customCrmManifest: customCrmManifestJson });
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }
  async function registerPlatform(tabUrl) {
    const url = new URL(tabUrl);
    let hostname = url.hostname;
    const { customCrmManifest } = await chrome.storage.local.get({ customCrmManifest: null });
    if (!!customCrmManifest) {
      manifest = customCrmManifest;
    }
    let platformName = "";
    const platforms = Object.keys(manifest.platforms);
    for (const p of platforms) {
      const urlRegex = new RegExp(manifest.platforms[p].urlIdentifier.replace("*", ".*"));
      if (urlRegex.test(url.href)) {
        platformName = p;
        break;
      }
    }
    if (platformName === "") {
      if ((hostname.includes("ngrok") || hostname.includes("labs.ringcentral")) && url.pathname === "/pipedrive-redirect") {
        platformName = "pipedrive";
        hostname = "temp";
        chrome.tabs.sendMessage(tab.id, { action: "needCallbackUri" });
      } else {
        return false;
      }
    }
    await chrome.storage.local.set({
      ["platform-info"]: { platformName, hostname }
    });
    return true;
  }
  chrome.action.onClicked.addListener(async function(tab2) {
    const platformInfo = await chrome.storage.local.get("platform-info");
    if (isObjectEmpty(platformInfo)) {
      const registered = await registerPlatform(tab2.url);
      if (registered) {
        await openPopupWindow();
      } else {
        chrome.notifications.create({
          type: "basic",
          iconUrl: "/images/logo32.png",
          title: `Please open the extension from a CRM page`,
          message: "For first time setup, please open it from a CRM page. RingCentral CRM Extension requires initial setup and match to your CRM platform.",
          priority: 1
        });
      }
    } else {
      openPopupWindow();
    }
  });
  chrome.windows.onRemoved.addListener(async (windowId) => {
    const { popupWindowId } = await chrome.storage.local.get("popupWindowId");
    if (popupWindowId === windowId) {
      console.log("close popup");
      await chrome.storage.local.remove("popupWindowId");
    }
  });
  chrome.windows.onBoundsChanged.addListener(async (window) => {
    const { popupWindowId } = await chrome.storage.local.get("popupWindowId");
    if (popupWindowId === window.id) {
      const extensionWindowStatus = window;
      await chrome.storage.local.set({ extensionWindowStatus });
    }
  });
  chrome.alarms.onAlarm.addListener(async () => {
    const { customCrmManifest } = await chrome.storage.local.get({ customCrmManifest: null });
    manifest = customCrmManifest;
    const { loginWindowInfo } = await chrome.storage.local.get("loginWindowInfo");
    if (!loginWindowInfo) {
      return;
    }
    const tabs = await chrome.tabs.query({ windowId: loginWindowInfo.id });
    if (tabs.length === 0) {
      return;
    }
    const loginWindowUrl = tabs[0].url;
    console.log("loginWindowUrl", loginWindowUrl);
    if (loginWindowUrl.indexOf(manifest.redirectUri) !== 0) {
      chrome.alarms.create("oauthCheck", { when: Date.now() + 3e3 });
      return;
    }
    console.log("login success", loginWindowUrl);
    chrome.runtime.sendMessage({
      type: "oauthCallBack",
      platform: loginWindowInfo.platform,
      callbackUri: loginWindowUrl
    });
    await chrome.windows.remove(loginWindowInfo.id);
    await chrome.storage.local.remove("loginWindowInfo");
  });
  chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.type === "openPopupWindow") {
      registerPlatform(sender.tab.url);
      await openPopupWindow();
      if (request.navigationPath) {
        chrome.runtime.sendMessage({
          type: "navigate",
          path: request.navigationPath
        });
      }
      sendResponse({ result: "ok" });
      return;
    }
    if (request.type === "openPopupWindowOnPipedriveDirectPage") {
      await openPopupWindow();
      chrome.tabs.sendMessage(sender.tab.id, { action: "needCallbackUri" });
      pipedriveInstallationTabId = sender.tab.id;
      await chrome.storage.local.set({
        ["platform-info"]: { platformName: request.platform, hostname: request.hostname }
      });
      sendResponse({ result: "ok" });
      return;
    }
    if (request.type === "popupWindowRequestPipedriveCallbackUri") {
      chrome.runtime.sendMessage({
        type: "pipedriveCallbackUri",
        pipedriveCallbackUri
      });
    }
    if (request.type === "pipedriveAltAuthDone") {
      chrome.tabs.sendMessage(pipedriveInstallationTabId, { action: "pipedriveAltAuthDone" });
      console.log("pipedriveAltAuthDone");
      sendResponse({ result: "ok" });
      return;
    }
    if (request.type === "openRCOAuthWindow" && request.oAuthUri) {
      const loginWindow = await chrome.windows.create({
        url: request.oAuthUri,
        type: "popup",
        width: 600,
        height: 600
      });
      await chrome.storage.local.set({
        loginWindowInfo: {
          platform: "rc",
          id: loginWindow.id
        }
      });
      chrome.alarms.create("oauthCheck", { when: Date.now() + 3e3 });
      sendResponse({ result: "ok" });
      return;
    }
    if (request.type === "openThirdPartyAuthWindow" && request.oAuthUri) {
      const loginWindow = await chrome.windows.create({
        url: request.oAuthUri,
        type: "popup",
        width: 600,
        height: 600
      });
      await chrome.storage.local.set({
        loginWindowInfo: {
          platform: "thirdParty",
          id: loginWindow.id
        }
      });
      chrome.alarms.create("oauthCheck", { when: Date.now() + 3e3 });
      sendResponse({ result: "ok" });
      return;
    }
    if (request.type === "c2d" || request.type === "c2sms") {
      const isPopupExist = await openPopupWindow();
      if (!isPopupExist) {
        cachedClickToXRequest = {
          type: request.type,
          phoneNumber: request.phoneNumber
        };
      }
    }
    if (request.type === "checkForClickToXCache") {
      sendResponse(cachedClickToXRequest);
      cachedClickToXRequest = null;
    }
    if (request.type === "pipedriveCallbackUri") {
      pipedriveCallbackUri = request.callbackUri;
      console.log("pipedrive callback uri: ", request.callbackUri);
      chrome.runtime.sendMessage({
        type: "pipedriveCallbackUri",
        pipedriveCallbackUri
      });
    }
    if (request.type === "notifyToReconnectCRM") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "/images/logo32.png",
        title: `Please re-login with your CRM account`,
        message: "There might be a change to your CRM login, please go to setting page and Logout then Connect your CRM account again. Sorry for the inconvenience.",
        priority: 1
      });
    }
  });
})();
