import axios from 'axios';
import config from '../config.json';
import { showNotification } from '../lib/util';
import { trackCrmLogin, trackCrmLogout } from '../lib/analytics'
import pipedriveModule from '../platformModules/pipedrive.js';
import insightlyModule from '../platformModules/insightly.js';
import clioModule from '../platformModules/clio.js';
import redtailModule from '../platformModules/redtail';
import bullhornModule from '../platformModules/bullhorn';

async function submitPlatformSelection(platform) {
    await chrome.storage.local.set({
        ['platform-info']: platform
    })
}

// apiUrl: Insightly
// username, password: Redtail
async function apiKeyLogin({ apiKey, apiUrl, username, password }) {
    try {
        const platformInfo = await chrome.storage.local.get('platform-info');
        const platformName = platformInfo['platform-info'].platformName;
        const hostname = platformInfo['platform-info'].hostname;
        const { rcUserInfo } = await chrome.storage.local.get('rcUserInfo');
        const rcUserNumber = rcUserInfo.rcUserNumber;
        const res = await axios.post(`${config.serverUrl}/apiKeyLoginV2?state=platform=${platformName}`, {
            apiKey,
            platform: platformName,
            hostname,
            rcUserNumber,
            additionalInfo: {
                apiUrl,
                username,
                password
            }
        });
        setAuth(true);
        showNotification({ level: 'success', message: 'Successfully authorized.', ttl: 3000 });
        await chrome.storage.local.set({
            ['rcUnifiedCrmExtJwt']: res.data.jwtToken
        });
        const crmUserInfo = { name: res.data.name };
        await chrome.storage.local.set({ crmUserInfo });
        setAuth(true, crmUserInfo.name);
        trackCrmLogin();
        return res.data.jwtToken;
    }
    catch (e) {
        console.log(e);
        showNotification({ level: 'warning', message: 'Failed to register api key.', ttl: 3000 });
    }
}

function sendMessageAsync(tabId, message) {
    return new Promise((resolve, reject) => {
        chrome.tabs.sendMessage(tabId, message, response => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    });
}

async function onAuthCallback(callbackUri) {
    const { rcUserInfo } = await chrome.storage.local.get('rcUserInfo');
    const rcUserNumber = rcUserInfo.rcUserNumber;
    const platformInfo = await chrome.storage.local.get('platform-info');
    const hostname = platformInfo['platform-info'].hostname;
    let oauthCallbackUrl = '';
    if (platformInfo['platform-info'].platformName === 'bullhorn') {
        let { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
        let { crm_extension_bullhornUsername } = await chrome.storage.local.get({ crm_extension_bullhornUsername: null });
        if (crm_extension_bullhornUsername == null) {
            const activeTab = await new Promise(resolve => chrome.tabs.query({ active: true }, tabs => resolve(tabs.find(t => t.url.includes('https://app.bullhornstaffing.com/')))));
            const bullhornUsernameResponse = await sendMessageAsync(activeTab.id, { action: "fetchBullhornUsername" });
            const { data: crm_extension_bullhorn_user_urls } = await axios.get(`https://rest.bullhornstaffing.com/rest-services/loginInfo?username=${bullhornUsernameResponse.bullhornUsername}`);
            await chrome.storage.local.set({ crm_extension_bullhorn_user_urls });
            oauthCallbackUrl = `${config.serverUrl}/oauth-callbackV2?callbackUri=${callbackUri}&rcUserNumber=${rcUserNumber}&hostname=${hostname}&tokenUrl=${crm_extension_bullhorn_user_urls.oauthUrl}/token&apiUrl=${crm_extension_bullhorn_user_urls.restUrl}&username=${bullhornUsernameResponse.bullhornUsername}`;
        }
        else {
            oauthCallbackUrl = `${config.serverUrl}/oauth-callbackV2?callbackUri=${callbackUri}&rcUserNumber=${rcUserNumber}&hostname=${hostname}&tokenUrl=${crm_extension_bullhorn_user_urls.oauthUrl}/token&apiUrl=${crm_extension_bullhorn_user_urls.restUrl}&username=${crm_extension_bullhornUsername}`;
        }
    }
    else {
        oauthCallbackUrl = `${config.serverUrl}/oauth-callbackV2?callbackUri=${callbackUri}&rcUserNumber=${rcUserNumber}&hostname=${hostname}`;
    }
    const res = await axios.get(oauthCallbackUrl);
    const crmUserInfo = { name: res.data.name };
    await chrome.storage.local.set({ crmUserInfo });
    setAuth(true, crmUserInfo.name);
    showNotification({ level: 'success', message: 'Successfully authorized.', ttl: 3000 });
    await chrome.storage.local.set({
        ['rcUnifiedCrmExtJwt']: res.data.jwtToken
    });
    trackCrmLogin();
    return res.data.jwtToken;
}

async function unAuthorize(rcUnifiedCrmExtJwt) {
    try {
        await axios.post(`${config.serverUrl}/unAuthorize?jwtToken=${rcUnifiedCrmExtJwt}`);
        const platformModule = await getModule();
        await platformModule.onUnauthorize();
        trackCrmLogout()
    }
    catch (e) {
        console.log(e);
    }
    await chrome.storage.local.remove('rcUnifiedCrmExtJwt');
    setAuth(false);
}

async function checkAuth() {
    const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get('rcUnifiedCrmExtJwt');
    // get crm user info
    const { crmUserInfo } = (await chrome.storage.local.get({ crmUserInfo: null }));
    setAuth(!!rcUnifiedCrmExtJwt, crmUserInfo?.name);
    return !!rcUnifiedCrmExtJwt;
}

function setAuth(auth, accountName) {
    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-adapter-update-authorization-status',
        authorized: auth,
        authorizedAccount: accountName ?? ''
    });
}

async function getModule() {
    const platformInfo = await chrome.storage.local.get('platform-info');
    switch (platformInfo['platform-info'].platformName) {
        case 'pipedrive':
            return pipedriveModule;
        case 'insightly':
            return insightlyModule;
        case 'clio':
            return clioModule;
        case 'redtail':
            return redtailModule;
        case 'bullhorn':
            return bullhornModule;
    }
}

exports.submitPlatformSelection = submitPlatformSelection;
exports.apiKeyLogin = apiKeyLogin;
exports.onAuthCallback = onAuthCallback;
exports.unAuthorize = unAuthorize;
exports.checkAuth = checkAuth;
exports.setAuth = setAuth;