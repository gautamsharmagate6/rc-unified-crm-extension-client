(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all2) => {
    for (var name in all2)
      __defProp(target, name, { get: all2[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap2() {
      return fn.apply(thisArg, arguments);
    };
  }
  var init_bind = __esm({
    "node_modules/axios/lib/helpers/bind.js"() {
      "use strict";
    }
  });

  // node_modules/axios/lib/utils.js
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function merge() {
    const result = {};
    const assignValue = (val, key) => {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var toString, getPrototypeOf, kindOf, kindOfTest, typeOfTest, isArray, isUndefined, isArrayBuffer, isString, isFunction, isNumber, isObject, isBoolean, isPlainObject, isDate, isFile, isBlob, isFileList, isStream, isFormData, isURLSearchParams, trim, extend, stripBOM, inherits, toFlatObject, endsWith, toArray, isTypedArray, forEachEntry, matchAll, isHTMLForm, toCamelCase, hasOwnProperty, isRegExp, reduceDescriptors, freezeMethods, toObjectSet, noop, toFiniteNumber, utils_default;
  var init_utils = __esm({
    "node_modules/axios/lib/utils.js"() {
      "use strict";
      init_bind();
      ({ toString } = Object.prototype);
      ({ getPrototypeOf } = Object);
      kindOf = /* @__PURE__ */ ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      typeOfTest = (type) => (thing) => typeof thing === type;
      ({ isArray } = Array);
      isUndefined = typeOfTest("undefined");
      isArrayBuffer = kindOfTest("ArrayBuffer");
      isString = typeOfTest("string");
      isFunction = typeOfTest("function");
      isNumber = typeOfTest("number");
      isObject = (thing) => thing !== null && typeof thing === "object";
      isBoolean = (thing) => thing === true || thing === false;
      isPlainObject = (val) => {
        if (kindOf(val) !== "object") {
          return false;
        }
        const prototype3 = getPrototypeOf(val);
        return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
      };
      isDate = kindOfTest("Date");
      isFile = kindOfTest("File");
      isBlob = kindOfTest("Blob");
      isFileList = kindOfTest("FileList");
      isStream = (val) => isObject(val) && isFunction(val.pipe);
      isFormData = (thing) => {
        const pattern = "[object FormData]";
        return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
      };
      isURLSearchParams = kindOfTest("URLSearchParams");
      trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(b, (val, key) => {
          if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        }, { allOwnKeys });
        return a;
      };
      stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      inherits = (constructor, superConstructor, props, descriptors2) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, "super", {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null)
          return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      toArray = (thing) => {
        if (!thing)
          return null;
        if (isArray(thing))
          return thing;
        let i = thing.length;
        if (!isNumber(i))
          return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      isTypedArray = /* @__PURE__ */ ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;
        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      isHTMLForm = kindOfTest("HTMLFormElement");
      toCamelCase = (str) => {
        return str.toLowerCase().replace(
          /[_-\s]([a-z\d])(\w*)/g,
          function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          }
        );
      };
      hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      isRegExp = kindOfTest("RegExp");
      reduceDescriptors = (obj, reducer) => {
        const descriptors2 = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors2, (descriptor, name) => {
          if (reducer(descriptor, name, obj) !== false) {
            reducedDescriptors[name] = descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          const value = obj[name];
          if (!isFunction(value))
            return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not read-only method '" + name + "'");
            };
          }
        });
      };
      toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define2 = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
        return obj;
      };
      noop = () => {
      };
      toFiniteNumber = (value, defaultValue) => {
        value = +value;
        return Number.isFinite(value) ? value : defaultValue;
      };
      utils_default = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber
      };
    }
  });

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  var prototype, descriptors, AxiosError_default;
  var init_AxiosError = __esm({
    "node_modules/axios/lib/core/AxiosError.js"() {
      "use strict";
      init_utils();
      utils_default.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      prototype = AxiosError.prototype;
      descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config, request, response, customProps) => {
        const axiosError = Object.create(prototype);
        utils_default.toFlatObject(error, axiosError, function filter2(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      AxiosError_default = AxiosError;
    }
  });

  // node_modules/form-data/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/form-data/lib/browser.js"(exports, module) {
      module.exports = typeof self == "object" ? self.FormData : window.FormData;
    }
  });

  // node_modules/axios/lib/env/classes/FormData.js
  var import_form_data, FormData_default;
  var init_FormData = __esm({
    "node_modules/axios/lib/env/classes/FormData.js"() {
      import_form_data = __toESM(require_browser(), 1);
      FormData_default = import_form_data.default;
    }
  });

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  function isSpecCompliant(thing) {
    return thing && utils_default.isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator];
  }
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (FormData_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && isSpecCompliant(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]") && (arr = utils_default.toArray(value)))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !utils_default.isUndefined(el) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !utils_default.isUndefined(el) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var predicates, toFormData_default;
  var init_toFormData = __esm({
    "node_modules/axios/lib/helpers/toFormData.js"() {
      "use strict";
      init_utils();
      init_AxiosError();
      init_FormData();
      predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      toFormData_default = toFormData;
    }
  });

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2, AxiosURLSearchParams_default;
  var init_AxiosURLSearchParams = __esm({
    "node_modules/axios/lib/helpers/AxiosURLSearchParams.js"() {
      "use strict";
      init_toFormData();
      prototype2 = AxiosURLSearchParams.prototype;
      prototype2.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype2.toString = function toString2(encoder) {
        const _encode = encoder ? function(value) {
          return encoder.call(this, value, encode);
        } : encode;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      AxiosURLSearchParams_default = AxiosURLSearchParams;
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    const _encode = options && options.encode || encode2;
    const serializerParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    if (serializerParams) {
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializerParams;
    }
    return url;
  }
  var init_buildURL = __esm({
    "node_modules/axios/lib/helpers/buildURL.js"() {
      "use strict";
      init_utils();
      init_AxiosURLSearchParams();
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager, InterceptorManager_default;
  var init_InterceptorManager = __esm({
    "node_modules/axios/lib/core/InterceptorManager.js"() {
      "use strict";
      init_utils();
      InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils_default.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        }
      };
      InterceptorManager_default = InterceptorManager;
    }
  });

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default;
  var init_transitional = __esm({
    "node_modules/axios/lib/defaults/transitional.js"() {
      "use strict";
      transitional_default = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
    }
  });

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default;
  var init_URLSearchParams = __esm({
    "node_modules/axios/lib/platform/browser/classes/URLSearchParams.js"() {
      "use strict";
      init_AxiosURLSearchParams();
      URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;
    }
  });

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default2;
  var init_FormData2 = __esm({
    "node_modules/axios/lib/platform/browser/classes/FormData.js"() {
      "use strict";
      FormData_default2 = FormData;
    }
  });

  // node_modules/axios/lib/platform/browser/index.js
  var isStandardBrowserEnv, browser_default;
  var init_browser = __esm({
    "node_modules/axios/lib/platform/browser/index.js"() {
      init_URLSearchParams();
      init_FormData2();
      isStandardBrowserEnv = (() => {
        let product;
        if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      })();
      browser_default = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams_default,
          FormData: FormData_default2,
          Blob
        },
        isStandardBrowserEnv,
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
    }
  });

  // node_modules/axios/lib/platform/index.js
  var init_platform = __esm({
    "node_modules/axios/lib/platform/index.js"() {
      init_browser();
    }
  });

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (browser_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  var init_toURLEncodedForm = __esm({
    "node_modules/axios/lib/helpers/toURLEncodedForm.js"() {
      "use strict";
      init_utils();
      init_toFormData();
      init_platform();
    }
  });

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default;
  var init_formDataToJSON = __esm({
    "node_modules/axios/lib/helpers/formDataToJSON.js"() {
      "use strict";
      init_utils();
      formDataToJSON_default = formDataToJSON;
    }
  });

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  var init_settle = __esm({
    "node_modules/axios/lib/core/settle.js"() {
      "use strict";
      init_AxiosError();
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default;
  var init_cookies = __esm({
    "node_modules/axios/lib/helpers/cookies.js"() {
      "use strict";
      init_utils();
      init_platform();
      cookies_default = browser_default.isStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        /* @__PURE__ */ function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              const cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils_default.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils_default.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils_default.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, "", Date.now() - 864e5);
            }
          };
        }()
      ) : (
        // Non standard browser env (web workers, react-native) lack needed support.
        /* @__PURE__ */ function nonStandardBrowserEnv() {
          return {
            write: function write() {
            },
            read: function read() {
              return null;
            },
            remove: function remove() {
            }
          };
        }()
      );
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  var init_isAbsoluteURL = __esm({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"() {
      "use strict";
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  var init_combineURLs = __esm({
    "node_modules/axios/lib/helpers/combineURLs.js"() {
      "use strict";
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  var init_buildFullPath = __esm({
    "node_modules/axios/lib/core/buildFullPath.js"() {
      "use strict";
      init_isAbsoluteURL();
      init_combineURLs();
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default;
  var init_isURLSameOrigin = __esm({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"() {
      "use strict";
      init_utils();
      init_platform();
      isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv2() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement("a");
          let originURL;
          function resolveURL(url) {
            let href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin(requestURL) {
            const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        /* @__PURE__ */ function nonStandardBrowserEnv2() {
          return function isURLSameOrigin() {
            return true;
          };
        }()
      );
    }
  });

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  var CanceledError_default;
  var init_CanceledError = __esm({
    "node_modules/axios/lib/cancel/CanceledError.js"() {
      "use strict";
      init_AxiosError();
      init_utils();
      utils_default.inherits(CanceledError, AxiosError_default, {
        __CANCEL__: true
      });
      CanceledError_default = CanceledError;
    }
  });

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  var init_parseProtocol = __esm({
    "node_modules/axios/lib/helpers/parseProtocol.js"() {
      "use strict";
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf, parseHeaders_default;
  var init_parseHeaders = __esm({
    "node_modules/axios/lib/helpers/parseHeaders.js"() {
      "use strict";
      init_utils();
      ignoreDuplicateOf = utils_default.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      parseHeaders_default = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/core/AxiosHeaders.js
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  function matchHeaderValue(context, value, header, filter2) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  function AxiosHeaders(headers, defaults2) {
    headers && this.set(headers);
    this[$defaults] = defaults2 || null;
  }
  var $internals, $defaults, AxiosHeaders_default;
  var init_AxiosHeaders = __esm({
    "node_modules/axios/lib/core/AxiosHeaders.js"() {
      "use strict";
      init_utils();
      init_parseHeaders();
      $internals = Symbol("internals");
      $defaults = Symbol("defaults");
      Object.assign(AxiosHeaders.prototype, {
        set: function(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = findKey(self2, lHeader);
            if (key && _rewrite !== true && (self2[key] === false || _rewrite === false)) {
              return;
            }
            if (utils_default.isArray(_value)) {
              _value = _value.map(normalizeValue);
            } else {
              _value = normalizeValue(_value);
            }
            self2[key || _header] = _value;
          }
          if (utils_default.isPlainObject(header)) {
            utils_default.forEach(header, (_value, _header) => {
              setHeader(_value, _header, valueOrRewrite);
            });
          } else {
            setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        },
        get: function(header, parser) {
          header = normalizeHeader(header);
          if (!header)
            return void 0;
          const key = findKey(this, header);
          if (key) {
            const value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils_default.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils_default.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError("parser must be boolean|regexp|function");
          }
        },
        has: function(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = findKey(this, header);
            return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        },
        delete: function(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils_default.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        },
        clear: function() {
          return Object.keys(this).forEach(this.delete.bind(this));
        },
        normalize: function(format) {
          const self2 = this;
          const headers = {};
          utils_default.forEach(this, (value, header) => {
            const key = findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        },
        toJSON: function() {
          const obj = /* @__PURE__ */ Object.create(null);
          utils_default.forEach(
            Object.assign({}, this[$defaults] || null, this),
            (value, header) => {
              if (value == null || value === false)
                return;
              obj[header] = utils_default.isArray(value) ? value.join(", ") : value;
            }
          );
          return obj;
        }
      });
      Object.assign(AxiosHeaders, {
        from: function(thing) {
          if (utils_default.isString(thing)) {
            return new this(parseHeaders_default(thing));
          }
          return thing instanceof this ? thing : new this(thing);
        },
        accessor: function(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype3 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype3, _header);
              accessors[lHeader] = true;
            }
          }
          utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      });
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
      utils_default.freezeMethods(AxiosHeaders.prototype);
      utils_default.freezeMethods(AxiosHeaders);
      AxiosHeaders_default = AxiosHeaders;
    }
  });

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default;
  var init_speedometer = __esm({
    "node_modules/axios/lib/helpers/speedometer.js"() {
      "use strict";
      speedometer_default = speedometer;
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils_default.isFormData(requestData) && browser_default.isStandardBrowserEnv) {
        requestHeaders.setContentType(false);
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (browser_default.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  }
  var init_xhr = __esm({
    "node_modules/axios/lib/adapters/xhr.js"() {
      "use strict";
      init_utils();
      init_settle();
      init_cookies();
      init_buildURL();
      init_buildFullPath();
      init_isURLSameOrigin();
      init_transitional();
      init_AxiosError();
      init_CanceledError();
      init_parseProtocol();
      init_platform();
      init_AxiosHeaders();
      init_speedometer();
    }
  });

  // node_modules/axios/lib/adapters/index.js
  var adapters, adapters_default;
  var init_adapters = __esm({
    "node_modules/axios/lib/adapters/index.js"() {
      init_utils();
      init_xhr();
      init_xhr();
      adapters = {
        http: xhrAdapter,
        xhr: xhrAdapter
      };
      adapters_default = {
        getAdapter: (nameOrAdapter) => {
          if (utils_default.isString(nameOrAdapter)) {
            const adapter = adapters[nameOrAdapter];
            if (!nameOrAdapter) {
              throw Error(
                utils_default.hasOwnProp(nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Can not resolve adapter '${nameOrAdapter}'`
              );
            }
            return adapter;
          }
          if (!utils_default.isFunction(nameOrAdapter)) {
            throw new TypeError("adapter is not a function");
          }
          return nameOrAdapter;
        },
        adapters
      };
    }
  });

  // node_modules/axios/lib/defaults/index.js
  function getDefaultAdapter() {
    let adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = adapters_default.getAdapter("xhr");
    } else if (typeof process !== "undefined" && utils_default.kindOf(process) === "process") {
      adapter = adapters_default.getAdapter("http");
    }
    return adapter;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var DEFAULT_CONTENT_TYPE, defaults, defaults_default;
  var init_defaults = __esm({
    "node_modules/axios/lib/defaults/index.js"() {
      "use strict";
      init_utils();
      init_AxiosError();
      init_transitional();
      init_toFormData();
      init_toURLEncodedForm();
      init_platform();
      init_formDataToJSON();
      init_adapters();
      DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      defaults = {
        transitional: transitional_default,
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils_default.isObject(data);
          if (isObjectPayload && utils_default.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils_default.isFormData(data);
          if (isFormData2) {
            if (!hasJSONContentType) {
              return data;
            }
            return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
          }
          if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
            return data;
          }
          if (utils_default.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils_default.isURLSearchParams(data)) {
            headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return data.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }
            if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
              const _FormData = this.env && this.env.FormData;
              return toFormData_default(
                isFileList2 ? { "files[]": data } : data,
                _FormData && new _FormData(),
                this.formSerializer
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          const transitional2 = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: browser_default.classes.FormData,
          Blob: browser_default.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils_default.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
      });
      defaults_default = defaults;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  var init_transformData = __esm({
    "node_modules/axios/lib/core/transformData.js"() {
      "use strict";
      init_utils();
      init_defaults();
      init_AxiosHeaders();
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  var init_isCancel = __esm({
    "node_modules/axios/lib/cancel/isCancel.js"() {
      "use strict";
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default();
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    const adapter = config.adapter || defaults_default.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  var init_dispatchRequest = __esm({
    "node_modules/axios/lib/core/dispatchRequest.js"() {
      "use strict";
      init_transformData();
      init_isCancel();
      init_defaults();
      init_CanceledError();
      init_AxiosHeaders();
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge(target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils_default.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils_default.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function valueFromConfig2(prop) {
      if (!utils_default.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      }
    }
    function defaultToConfig2(prop) {
      if (!utils_default.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      } else if (!utils_default.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    const mergeMap = {
      "url": valueFromConfig2,
      "method": valueFromConfig2,
      "data": valueFromConfig2,
      "baseURL": defaultToConfig2,
      "transformRequest": defaultToConfig2,
      "transformResponse": defaultToConfig2,
      "paramsSerializer": defaultToConfig2,
      "timeout": defaultToConfig2,
      "timeoutMessage": defaultToConfig2,
      "withCredentials": defaultToConfig2,
      "adapter": defaultToConfig2,
      "responseType": defaultToConfig2,
      "xsrfCookieName": defaultToConfig2,
      "xsrfHeaderName": defaultToConfig2,
      "onUploadProgress": defaultToConfig2,
      "onDownloadProgress": defaultToConfig2,
      "decompress": defaultToConfig2,
      "maxContentLength": defaultToConfig2,
      "maxBodyLength": defaultToConfig2,
      "beforeRedirect": defaultToConfig2,
      "transport": defaultToConfig2,
      "httpAgent": defaultToConfig2,
      "httpsAgent": defaultToConfig2,
      "cancelToken": defaultToConfig2,
      "socketPath": defaultToConfig2,
      "responseEncoding": defaultToConfig2,
      "validateStatus": mergeDirectKeys
    };
    utils_default.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  var init_mergeConfig = __esm({
    "node_modules/axios/lib/core/mergeConfig.js"() {
      "use strict";
      init_utils();
    }
  });

  // node_modules/axios/lib/env/data.js
  var VERSION;
  var init_data = __esm({
    "node_modules/axios/lib/env/data.js"() {
      VERSION = "1.1.2";
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validators, deprecatedWarnings, validator_default;
  var init_validator = __esm({
    "node_modules/axios/lib/helpers/validator.js"() {
      "use strict";
      init_data();
      init_AxiosError();
      validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator === false) {
            throw new AxiosError_default(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError_default.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      validator_default = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var validators2, Axios, Axios_default;
  var init_Axios = __esm({
    "node_modules/axios/lib/core/Axios.js"() {
      "use strict";
      init_utils();
      init_buildURL();
      init_InterceptorManager();
      init_dispatchRequest();
      init_mergeConfig();
      init_buildFullPath();
      init_validator();
      init_AxiosHeaders();
      validators2 = validator_default.validators;
      Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager_default(),
            response: new InterceptorManager_default()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const transitional2 = config.transitional;
          if (transitional2 !== void 0) {
            validator_default.assertOptions(transitional2, {
              silentJSONParsing: validators2.transitional(validators2.boolean),
              forcedJSONParsing: validators2.transitional(validators2.boolean),
              clarifyTimeoutError: validators2.transitional(validators2.boolean)
            }, false);
          }
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          const defaultHeaders = config.headers && utils_default.merge(
            config.headers.common,
            config.headers[config.method]
          );
          defaultHeaders && utils_default.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function cleanHeaderConfig(method) {
              delete config.headers[method];
            }
          );
          config.headers = new AxiosHeaders_default(config.headers, defaultHeaders);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          i = 0;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      Axios_default = Axios;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken, CancelToken_default;
  var init_CancelToken = __esm({
    "node_modules/axios/lib/cancel/CancelToken.js"() {
      "use strict";
      init_CanceledError();
      CancelToken = class _CancelToken {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners)
              return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError_default(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new _CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      CancelToken_default = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap2(arr) {
      return callback.apply(null, arr);
    };
  }
  var init_spread = __esm({
    "node_modules/axios/lib/helpers/spread.js"() {
      "use strict";
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }
  var init_isAxiosError = __esm({
    "node_modules/axios/lib/helpers/isAxiosError.js"() {
      "use strict";
      init_utils();
    }
  });

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios, axios_default;
  var init_axios = __esm({
    "node_modules/axios/lib/axios.js"() {
      "use strict";
      init_utils();
      init_bind();
      init_Axios();
      init_mergeConfig();
      init_defaults();
      init_formDataToJSON();
      init_CanceledError();
      init_CancelToken();
      init_isCancel();
      init_data();
      init_toFormData();
      init_AxiosError();
      init_spread();
      init_isAxiosError();
      axios = createInstance(defaults_default);
      axios.Axios = Axios_default;
      axios.CanceledError = CanceledError_default;
      axios.CancelToken = CancelToken_default;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData_default;
      axios.AxiosError = AxiosError_default;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.formToJSON = (thing) => {
        return formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
      };
      axios_default = axios;
    }
  });

  // node_modules/axios/index.js
  var axios_default2;
  var init_axios2 = __esm({
    "node_modules/axios/index.js"() {
      init_axios();
      axios_default2 = axios_default;
    }
  });

  // src/lib/util.js
  var require_util = __commonJS({
    "src/lib/util.js"(exports) {
      function secondsToHourMinuteSecondString(totalSeconds) {
        const hours = parseInt(totalSeconds / 3600);
        const minutes = parseInt((totalSeconds - 3600 * hours) / 60);
        const seconds = parseInt(totalSeconds - 3600 * hours - 60 * minutes);
        return `${hours}h${minutes}m${seconds}s`;
      }
      function showNotification2({ level, message, ttl }) {
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
      function responseMessage2(responseId, response) {
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
      exports.showNotification = showNotification2;
      exports.responseMessage = responseMessage2;
      exports.isObjectEmpty = isObjectEmpty2;
    }
  });

  // src/manifest.json
  var manifest_default;
  var init_manifest = __esm({
    "src/manifest.json"() {
      manifest_default = {
        defaultCrmManifestUrl: "https://unified-crm-extension-test.labs.ringcentral.com/crmManifest",
        mixpanelToken: "0c3618bcd33665a15a979a972bac380f",
        version: "0.8.14"
      };
    }
  });

  // node_modules/mixpanel-browser/dist/mixpanel.cjs.js
  var require_mixpanel_cjs = __commonJS({
    "node_modules/mixpanel-browser/dist/mixpanel.cjs.js"(exports, module) {
      "use strict";
      var Config = {
        DEBUG: false,
        LIB_VERSION: "2.49.0"
      };
      var window$1;
      if (typeof window === "undefined") {
        loc = {
          hostname: ""
        };
        window$1 = {
          navigator: { userAgent: "" },
          document: {
            location: loc,
            referrer: ""
          },
          screen: { width: 0, height: 0 },
          location: loc
        };
      } else {
        window$1 = window;
      }
      var loc;
      var ArrayProto = Array.prototype;
      var FuncProto = Function.prototype;
      var ObjProto = Object.prototype;
      var slice = ArrayProto.slice;
      var toString3 = ObjProto.toString;
      var hasOwnProperty2 = ObjProto.hasOwnProperty;
      var windowConsole = window$1.console;
      var navigator2 = window$1.navigator;
      var document$1 = window$1.document;
      var windowOpera = window$1.opera;
      var screen = window$1.screen;
      var userAgent = navigator2.userAgent;
      var nativeBind = FuncProto.bind;
      var nativeForEach = ArrayProto.forEach;
      var nativeIndexOf = ArrayProto.indexOf;
      var nativeMap = ArrayProto.map;
      var nativeIsArray = Array.isArray;
      var breaker = {};
      var _ = {
        trim: function(str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }
      };
      var console2 = {
        /** @type {function(...*)} */
        log: function() {
          if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            try {
              windowConsole.log.apply(windowConsole, arguments);
            } catch (err) {
              _.each(arguments, function(arg) {
                windowConsole.log(arg);
              });
            }
          }
        },
        /** @type {function(...*)} */
        warn: function() {
          if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            var args = ["Mixpanel warning:"].concat(_.toArray(arguments));
            try {
              windowConsole.warn.apply(windowConsole, args);
            } catch (err) {
              _.each(args, function(arg) {
                windowConsole.warn(arg);
              });
            }
          }
        },
        /** @type {function(...*)} */
        error: function() {
          if (Config.DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
            var args = ["Mixpanel error:"].concat(_.toArray(arguments));
            try {
              windowConsole.error.apply(windowConsole, args);
            } catch (err) {
              _.each(args, function(arg) {
                windowConsole.error(arg);
              });
            }
          }
        },
        /** @type {function(...*)} */
        critical: function() {
          if (!_.isUndefined(windowConsole) && windowConsole) {
            var args = ["Mixpanel error:"].concat(_.toArray(arguments));
            try {
              windowConsole.error.apply(windowConsole, args);
            } catch (err) {
              _.each(args, function(arg) {
                windowConsole.error(arg);
              });
            }
          }
        }
      };
      var log_func_with_prefix = function(func, prefix) {
        return function() {
          arguments[0] = "[" + prefix + "] " + arguments[0];
          return func.apply(console2, arguments);
        };
      };
      var console_with_prefix = function(prefix) {
        return {
          log: log_func_with_prefix(console2.log, prefix),
          error: log_func_with_prefix(console2.error, prefix),
          critical: log_func_with_prefix(console2.critical, prefix)
        };
      };
      _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) {
          return nativeBind.apply(func, slice.call(arguments, 1));
        }
        if (!_.isFunction(func)) {
          throw new TypeError();
        }
        args = slice.call(arguments, 2);
        bound = function() {
          if (!(this instanceof bound)) {
            return func.apply(context, args.concat(slice.call(arguments)));
          }
          var ctor = {};
          ctor.prototype = func.prototype;
          var self2 = new ctor();
          ctor.prototype = null;
          var result = func.apply(self2, args.concat(slice.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return self2;
        };
        return bound;
      };
      _.each = function(obj, iterator, context) {
        if (obj === null || obj === void 0) {
          return;
        }
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
          for (var i = 0, l = obj.length; i < l; i++) {
            if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
              return;
            }
          }
        } else {
          for (var key in obj) {
            if (hasOwnProperty2.call(obj, key)) {
              if (iterator.call(context, obj[key], key, obj) === breaker) {
                return;
              }
            }
          }
        }
      };
      _.extend = function(obj) {
        _.each(slice.call(arguments, 1), function(source) {
          for (var prop in source) {
            if (source[prop] !== void 0) {
              obj[prop] = source[prop];
            }
          }
        });
        return obj;
      };
      _.isArray = nativeIsArray || function(obj) {
        return toString3.call(obj) === "[object Array]";
      };
      _.isFunction = function(f) {
        try {
          return /^\s*\bfunction\b/.test(f);
        } catch (x) {
          return false;
        }
      };
      _.isArguments = function(obj) {
        return !!(obj && hasOwnProperty2.call(obj, "callee"));
      };
      _.toArray = function(iterable) {
        if (!iterable) {
          return [];
        }
        if (iterable.toArray) {
          return iterable.toArray();
        }
        if (_.isArray(iterable)) {
          return slice.call(iterable);
        }
        if (_.isArguments(iterable)) {
          return slice.call(iterable);
        }
        return _.values(iterable);
      };
      _.map = function(arr, callback, context) {
        if (nativeMap && arr.map === nativeMap) {
          return arr.map(callback, context);
        } else {
          var results = [];
          _.each(arr, function(item) {
            results.push(callback.call(context, item));
          });
          return results;
        }
      };
      _.keys = function(obj) {
        var results = [];
        if (obj === null) {
          return results;
        }
        _.each(obj, function(value, key) {
          results[results.length] = key;
        });
        return results;
      };
      _.values = function(obj) {
        var results = [];
        if (obj === null) {
          return results;
        }
        _.each(obj, function(value) {
          results[results.length] = value;
        });
        return results;
      };
      _.include = function(obj, target) {
        var found = false;
        if (obj === null) {
          return found;
        }
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
          return obj.indexOf(target) != -1;
        }
        _.each(obj, function(value) {
          if (found || (found = value === target)) {
            return breaker;
          }
        });
        return found;
      };
      _.includes = function(str, needle) {
        return str.indexOf(needle) !== -1;
      };
      _.inherit = function(subclass, superclass) {
        subclass.prototype = new superclass();
        subclass.prototype.constructor = subclass;
        subclass.superclass = superclass.prototype;
        return subclass;
      };
      _.isObject = function(obj) {
        return obj === Object(obj) && !_.isArray(obj);
      };
      _.isEmptyObject = function(obj) {
        if (_.isObject(obj)) {
          for (var key in obj) {
            if (hasOwnProperty2.call(obj, key)) {
              return false;
            }
          }
          return true;
        }
        return false;
      };
      _.isUndefined = function(obj) {
        return obj === void 0;
      };
      _.isString = function(obj) {
        return toString3.call(obj) == "[object String]";
      };
      _.isDate = function(obj) {
        return toString3.call(obj) == "[object Date]";
      };
      _.isNumber = function(obj) {
        return toString3.call(obj) == "[object Number]";
      };
      _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
      };
      _.encodeDates = function(obj) {
        _.each(obj, function(v, k) {
          if (_.isDate(v)) {
            obj[k] = _.formatDate(v);
          } else if (_.isObject(v)) {
            obj[k] = _.encodeDates(v);
          }
        });
        return obj;
      };
      _.timestamp = function() {
        Date.now = Date.now || function() {
          return +/* @__PURE__ */ new Date();
        };
        return Date.now();
      };
      _.formatDate = function(d) {
        function pad(n) {
          return n < 10 ? "0" + n : n;
        }
        return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds());
      };
      _.strip_empty_properties = function(p) {
        var ret = {};
        _.each(p, function(v, k) {
          if (_.isString(v) && v.length > 0) {
            ret[k] = v;
          }
        });
        return ret;
      };
      _.truncate = function(obj, length) {
        var ret;
        if (typeof obj === "string") {
          ret = obj.slice(0, length);
        } else if (_.isArray(obj)) {
          ret = [];
          _.each(obj, function(val) {
            ret.push(_.truncate(val, length));
          });
        } else if (_.isObject(obj)) {
          ret = {};
          _.each(obj, function(val, key) {
            ret[key] = _.truncate(val, length);
          });
        } else {
          ret = obj;
        }
        return ret;
      };
      _.JSONEncode = /* @__PURE__ */ function() {
        return function(mixed_val) {
          var value = mixed_val;
          var quote = function(string) {
            var escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var meta = {
              // table of character substitutions
              "\b": "\\b",
              "	": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\"
            };
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
              var c = meta[a];
              return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
          };
          var str = function(key, holder) {
            var gap = "";
            var indent = "    ";
            var i = 0;
            var k = "";
            var v = "";
            var length = 0;
            var mind = gap;
            var partial = [];
            var value2 = holder[key];
            if (value2 && typeof value2 === "object" && typeof value2.toJSON === "function") {
              value2 = value2.toJSON(key);
            }
            switch (typeof value2) {
              case "string":
                return quote(value2);
              case "number":
                return isFinite(value2) ? String(value2) : "null";
              case "boolean":
              case "null":
                return String(value2);
              case "object":
                if (!value2) {
                  return "null";
                }
                gap += indent;
                partial = [];
                if (toString3.apply(value2) === "[object Array]") {
                  length = value2.length;
                  for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value2) || "null";
                  }
                  v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                  gap = mind;
                  return v;
                }
                for (k in value2) {
                  if (hasOwnProperty2.call(value2, k)) {
                    v = str(k, value2);
                    if (v) {
                      partial.push(quote(k) + (gap ? ": " : ":") + v);
                    }
                  }
                }
                v = partial.length === 0 ? "{}" : gap ? "{" + partial.join(",") + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
            }
          };
          return str("", {
            "": value
          });
        };
      }();
      _.JSONDecode = function() {
        var at, ch, escapee = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          "b": "\b",
          "f": "\f",
          "n": "\n",
          "r": "\r",
          "t": "	"
        }, text, error = function(m) {
          var e = new SyntaxError(m);
          e.at = at;
          e.text = text;
          throw e;
        }, next = function(c) {
          if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
          }
          ch = text.charAt(at);
          at += 1;
          return ch;
        }, number = function() {
          var number2, string2 = "";
          if (ch === "-") {
            string2 = "-";
            next("-");
          }
          while (ch >= "0" && ch <= "9") {
            string2 += ch;
            next();
          }
          if (ch === ".") {
            string2 += ".";
            while (next() && ch >= "0" && ch <= "9") {
              string2 += ch;
            }
          }
          if (ch === "e" || ch === "E") {
            string2 += ch;
            next();
            if (ch === "-" || ch === "+") {
              string2 += ch;
              next();
            }
            while (ch >= "0" && ch <= "9") {
              string2 += ch;
              next();
            }
          }
          number2 = +string2;
          if (!isFinite(number2)) {
            error("Bad number");
          } else {
            return number2;
          }
        }, string = function() {
          var hex, i, string2 = "", uffff;
          if (ch === '"') {
            while (next()) {
              if (ch === '"') {
                next();
                return string2;
              }
              if (ch === "\\") {
                next();
                if (ch === "u") {
                  uffff = 0;
                  for (i = 0; i < 4; i += 1) {
                    hex = parseInt(next(), 16);
                    if (!isFinite(hex)) {
                      break;
                    }
                    uffff = uffff * 16 + hex;
                  }
                  string2 += String.fromCharCode(uffff);
                } else if (typeof escapee[ch] === "string") {
                  string2 += escapee[ch];
                } else {
                  break;
                }
              } else {
                string2 += ch;
              }
            }
          }
          error("Bad string");
        }, white = function() {
          while (ch && ch <= " ") {
            next();
          }
        }, word = function() {
          switch (ch) {
            case "t":
              next("t");
              next("r");
              next("u");
              next("e");
              return true;
            case "f":
              next("f");
              next("a");
              next("l");
              next("s");
              next("e");
              return false;
            case "n":
              next("n");
              next("u");
              next("l");
              next("l");
              return null;
          }
          error('Unexpected "' + ch + '"');
        }, value, array = function() {
          var array2 = [];
          if (ch === "[") {
            next("[");
            white();
            if (ch === "]") {
              next("]");
              return array2;
            }
            while (ch) {
              array2.push(value());
              white();
              if (ch === "]") {
                next("]");
                return array2;
              }
              next(",");
              white();
            }
          }
          error("Bad array");
        }, object = function() {
          var key, object2 = {};
          if (ch === "{") {
            next("{");
            white();
            if (ch === "}") {
              next("}");
              return object2;
            }
            while (ch) {
              key = string();
              white();
              next(":");
              if (Object.hasOwnProperty.call(object2, key)) {
                error('Duplicate key "' + key + '"');
              }
              object2[key] = value();
              white();
              if (ch === "}") {
                next("}");
                return object2;
              }
              next(",");
              white();
            }
          }
          error("Bad object");
        };
        value = function() {
          white();
          switch (ch) {
            case "{":
              return object();
            case "[":
              return array();
            case '"':
              return string();
            case "-":
              return number();
            default:
              return ch >= "0" && ch <= "9" ? number() : word();
          }
        };
        return function(source) {
          var result;
          text = source;
          at = 0;
          ch = " ";
          result = value();
          white();
          if (ch) {
            error("Syntax error");
          }
          return result;
        };
      }();
      _.base64Encode = function(data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = "", tmp_arr = [];
        if (!data) {
          return data;
        }
        data = _.utf8Encode(data);
        do {
          o1 = data.charCodeAt(i++);
          o2 = data.charCodeAt(i++);
          o3 = data.charCodeAt(i++);
          bits = o1 << 16 | o2 << 8 | o3;
          h1 = bits >> 18 & 63;
          h2 = bits >> 12 & 63;
          h3 = bits >> 6 & 63;
          h4 = bits & 63;
          tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);
        enc = tmp_arr.join("");
        switch (data.length % 3) {
          case 1:
            enc = enc.slice(0, -2) + "==";
            break;
          case 2:
            enc = enc.slice(0, -1) + "=";
            break;
        }
        return enc;
      };
      _.utf8Encode = function(string) {
        string = (string + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var utftext = "", start, end;
        var stringl = 0, n;
        start = end = 0;
        stringl = string.length;
        for (n = 0; n < stringl; n++) {
          var c1 = string.charCodeAt(n);
          var enc = null;
          if (c1 < 128) {
            end++;
          } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
          } else {
            enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
          }
          if (enc !== null) {
            if (end > start) {
              utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n + 1;
          }
        }
        if (end > start) {
          utftext += string.substring(start, string.length);
        }
        return utftext;
      };
      _.UUID = /* @__PURE__ */ function() {
        var T = function() {
          var time = 1 * /* @__PURE__ */ new Date();
          var ticks;
          if (window$1.performance && window$1.performance.now) {
            ticks = window$1.performance.now();
          } else {
            ticks = 0;
            while (time == 1 * /* @__PURE__ */ new Date()) {
              ticks++;
            }
          }
          return time.toString(16) + Math.floor(ticks).toString(16);
        };
        var R = function() {
          return Math.random().toString(16).replace(".", "");
        };
        var UA = function() {
          var ua = userAgent, i, ch, buffer = [], ret = 0;
          function xor(result, byte_array) {
            var j, tmp = 0;
            for (j = 0; j < byte_array.length; j++) {
              tmp |= buffer[j] << j * 8;
            }
            return result ^ tmp;
          }
          for (i = 0; i < ua.length; i++) {
            ch = ua.charCodeAt(i);
            buffer.unshift(ch & 255);
            if (buffer.length >= 4) {
              ret = xor(ret, buffer);
              buffer = [];
            }
          }
          if (buffer.length > 0) {
            ret = xor(ret, buffer);
          }
          return ret.toString(16);
        };
        return function() {
          var se = (screen.height * screen.width).toString(16);
          return T() + "-" + R() + "-" + UA() + "-" + se + "-" + T();
        };
      }();
      var BLOCKED_UA_STRS = [
        "ahrefsbot",
        "ahrefssiteaudit",
        "baiduspider",
        "bingbot",
        "bingpreview",
        "chrome-lighthouse",
        "facebookexternal",
        "petalbot",
        "pinterest",
        "screaming frog",
        "yahoo! slurp",
        "yandexbot",
        // a whole bunch of goog-specific crawlers
        // https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers
        "adsbot-google",
        "apis-google",
        "duplexweb-google",
        "feedfetcher-google",
        "google favicon",
        "google web preview",
        "google-read-aloud",
        "googlebot",
        "googleweblight",
        "mediapartners-google",
        "storebot-google"
      ];
      _.isBlockedUA = function(ua) {
        var i;
        ua = ua.toLowerCase();
        for (i = 0; i < BLOCKED_UA_STRS.length; i++) {
          if (ua.indexOf(BLOCKED_UA_STRS[i]) !== -1) {
            return true;
          }
        }
        return false;
      };
      _.HTTPBuildQuery = function(formdata, arg_separator) {
        var use_val, use_key, tmp_arr = [];
        if (_.isUndefined(arg_separator)) {
          arg_separator = "&";
        }
        _.each(formdata, function(val, key) {
          use_val = encodeURIComponent(val.toString());
          use_key = encodeURIComponent(key);
          tmp_arr[tmp_arr.length] = use_key + "=" + use_val;
        });
        return tmp_arr.join(arg_separator);
      };
      _.getQueryParam = function(url, param) {
        param = param.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + param + "=([^&#]*)", regex = new RegExp(regexS), results = regex.exec(url);
        if (results === null || results && typeof results[1] !== "string" && results[1].length) {
          return "";
        } else {
          var result = results[1];
          try {
            result = decodeURIComponent(result);
          } catch (err) {
            console2.error("Skipping decoding for malformed query param: " + result);
          }
          return result.replace(/\+/g, " ");
        }
      };
      _.cookie = {
        get: function(name) {
          var nameEQ = name + "=";
          var ca = document$1.cookie.split(";");
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
              c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
              return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
          }
          return null;
        },
        parse: function(name) {
          var cookie;
          try {
            cookie = _.JSONDecode(_.cookie.get(name)) || {};
          } catch (err) {
          }
          return cookie;
        },
        set_seconds: function(name, value, seconds, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
          var cdomain = "", expires = "", secure = "";
          if (domain_override) {
            cdomain = "; domain=" + domain_override;
          } else if (is_cross_subdomain) {
            var domain = extract_domain(document$1.location.hostname);
            cdomain = domain ? "; domain=." + domain : "";
          }
          if (seconds) {
            var date = /* @__PURE__ */ new Date();
            date.setTime(date.getTime() + seconds * 1e3);
            expires = "; expires=" + date.toGMTString();
          }
          if (is_cross_site) {
            is_secure = true;
            secure = "; SameSite=None";
          }
          if (is_secure) {
            secure += "; secure";
          }
          document$1.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure;
        },
        set: function(name, value, days, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
          var cdomain = "", expires = "", secure = "";
          if (domain_override) {
            cdomain = "; domain=" + domain_override;
          } else if (is_cross_subdomain) {
            var domain = extract_domain(document$1.location.hostname);
            cdomain = domain ? "; domain=." + domain : "";
          }
          if (days) {
            var date = /* @__PURE__ */ new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
            expires = "; expires=" + date.toGMTString();
          }
          if (is_cross_site) {
            is_secure = true;
            secure = "; SameSite=None";
          }
          if (is_secure) {
            secure += "; secure";
          }
          var new_cookie_val = name + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure;
          document$1.cookie = new_cookie_val;
          return new_cookie_val;
        },
        remove: function(name, is_cross_subdomain, domain_override) {
          _.cookie.set(name, "", -1, is_cross_subdomain, false, false, domain_override);
        }
      };
      var _localStorageSupported = null;
      var localStorageSupported = function(storage, forceCheck) {
        if (_localStorageSupported !== null && !forceCheck) {
          return _localStorageSupported;
        }
        var supported = true;
        try {
          storage = storage || window.localStorage;
          var key = "__mplss_" + cheap_guid(8), val = "xyz";
          storage.setItem(key, val);
          if (storage.getItem(key) !== val) {
            supported = false;
          }
          storage.removeItem(key);
        } catch (err) {
          supported = false;
        }
        _localStorageSupported = supported;
        return supported;
      };
      _.localStorage = {
        is_supported: function(force_check) {
          var supported = localStorageSupported(null, force_check);
          if (!supported) {
            console2.error("localStorage unsupported; falling back to cookie store");
          }
          return supported;
        },
        error: function(msg) {
          console2.error("localStorage error: " + msg);
        },
        get: function(name) {
          try {
            return window.localStorage.getItem(name);
          } catch (err) {
            _.localStorage.error(err);
          }
          return null;
        },
        parse: function(name) {
          try {
            return _.JSONDecode(_.localStorage.get(name)) || {};
          } catch (err) {
          }
          return null;
        },
        set: function(name, value) {
          try {
            window.localStorage.setItem(name, value);
          } catch (err) {
            _.localStorage.error(err);
          }
        },
        remove: function(name) {
          try {
            window.localStorage.removeItem(name);
          } catch (err) {
            _.localStorage.error(err);
          }
        }
      };
      _.register_event = function() {
        var register_event = function(element, type, handler, oldSchool, useCapture) {
          if (!element) {
            console2.error("No valid element provided to register_event");
            return;
          }
          if (element.addEventListener && !oldSchool) {
            element.addEventListener(type, handler, !!useCapture);
          } else {
            var ontype = "on" + type;
            var old_handler = element[ontype];
            element[ontype] = makeHandler(element, handler, old_handler);
          }
        };
        function makeHandler(element, new_handler, old_handlers) {
          var handler = function(event) {
            event = event || fixEvent(window.event);
            if (!event) {
              return void 0;
            }
            var ret = true;
            var old_result, new_result;
            if (_.isFunction(old_handlers)) {
              old_result = old_handlers(event);
            }
            new_result = new_handler.call(element, event);
            if (false === old_result || false === new_result) {
              ret = false;
            }
            return ret;
          };
          return handler;
        }
        function fixEvent(event) {
          if (event) {
            event.preventDefault = fixEvent.preventDefault;
            event.stopPropagation = fixEvent.stopPropagation;
          }
          return event;
        }
        fixEvent.preventDefault = function() {
          this.returnValue = false;
        };
        fixEvent.stopPropagation = function() {
          this.cancelBubble = true;
        };
        return register_event;
      }();
      var TOKEN_MATCH_REGEX = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
      _.dom_query = /* @__PURE__ */ function() {
        function getAllChildren(e) {
          return e.all ? e.all : e.getElementsByTagName("*");
        }
        var bad_whitespace = /[\t\r\n]/g;
        function hasClass(elem, selector) {
          var className = " " + selector + " ";
          return (" " + elem.className + " ").replace(bad_whitespace, " ").indexOf(className) >= 0;
        }
        function getElementsBySelector(selector) {
          if (!document$1.getElementsByTagName) {
            return [];
          }
          var tokens = selector.split(" ");
          var token, bits, tagName, found, foundCount, i, j, k, elements, currentContextIndex;
          var currentContext = [document$1];
          for (i = 0; i < tokens.length; i++) {
            token = tokens[i].replace(/^\s+/, "").replace(/\s+$/, "");
            if (token.indexOf("#") > -1) {
              bits = token.split("#");
              tagName = bits[0];
              var id = bits[1];
              var element = document$1.getElementById(id);
              if (!element || tagName && element.nodeName.toLowerCase() != tagName) {
                return [];
              }
              currentContext = [element];
              continue;
            }
            if (token.indexOf(".") > -1) {
              bits = token.split(".");
              tagName = bits[0];
              var className = bits[1];
              if (!tagName) {
                tagName = "*";
              }
              found = [];
              foundCount = 0;
              for (j = 0; j < currentContext.length; j++) {
                if (tagName == "*") {
                  elements = getAllChildren(currentContext[j]);
                } else {
                  elements = currentContext[j].getElementsByTagName(tagName);
                }
                for (k = 0; k < elements.length; k++) {
                  found[foundCount++] = elements[k];
                }
              }
              currentContext = [];
              currentContextIndex = 0;
              for (j = 0; j < found.length; j++) {
                if (found[j].className && _.isString(found[j].className) && // some SVG elements have classNames which are not strings
                hasClass(found[j], className)) {
                  currentContext[currentContextIndex++] = found[j];
                }
              }
              continue;
            }
            var token_match = token.match(TOKEN_MATCH_REGEX);
            if (token_match) {
              tagName = token_match[1];
              var attrName = token_match[2];
              var attrOperator = token_match[3];
              var attrValue = token_match[4];
              if (!tagName) {
                tagName = "*";
              }
              found = [];
              foundCount = 0;
              for (j = 0; j < currentContext.length; j++) {
                if (tagName == "*") {
                  elements = getAllChildren(currentContext[j]);
                } else {
                  elements = currentContext[j].getElementsByTagName(tagName);
                }
                for (k = 0; k < elements.length; k++) {
                  found[foundCount++] = elements[k];
                }
              }
              currentContext = [];
              currentContextIndex = 0;
              var checkFunction;
              switch (attrOperator) {
                case "=":
                  checkFunction = function(e) {
                    return e.getAttribute(attrName) == attrValue;
                  };
                  break;
                case "~":
                  checkFunction = function(e) {
                    return e.getAttribute(attrName).match(new RegExp("\\b" + attrValue + "\\b"));
                  };
                  break;
                case "|":
                  checkFunction = function(e) {
                    return e.getAttribute(attrName).match(new RegExp("^" + attrValue + "-?"));
                  };
                  break;
                case "^":
                  checkFunction = function(e) {
                    return e.getAttribute(attrName).indexOf(attrValue) === 0;
                  };
                  break;
                case "$":
                  checkFunction = function(e) {
                    return e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length;
                  };
                  break;
                case "*":
                  checkFunction = function(e) {
                    return e.getAttribute(attrName).indexOf(attrValue) > -1;
                  };
                  break;
                default:
                  checkFunction = function(e) {
                    return e.getAttribute(attrName);
                  };
              }
              currentContext = [];
              currentContextIndex = 0;
              for (j = 0; j < found.length; j++) {
                if (checkFunction(found[j])) {
                  currentContext[currentContextIndex++] = found[j];
                }
              }
              continue;
            }
            tagName = token;
            found = [];
            foundCount = 0;
            for (j = 0; j < currentContext.length; j++) {
              elements = currentContext[j].getElementsByTagName(tagName);
              for (k = 0; k < elements.length; k++) {
                found[foundCount++] = elements[k];
              }
            }
            currentContext = found;
          }
          return currentContext;
        }
        return function(query) {
          if (_.isElement(query)) {
            return [query];
          } else if (_.isObject(query) && !_.isUndefined(query.length)) {
            return query;
          } else {
            return getElementsBySelector.call(this, query);
          }
        };
      }();
      var CAMPAIGN_KEYWORDS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      var CLICK_IDS = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "ttclid", "twclid", "wbraid"];
      _.info = {
        campaignParams: function(default_value) {
          var kw = "", params = {};
          _.each(CAMPAIGN_KEYWORDS, function(kwkey) {
            kw = _.getQueryParam(document$1.URL, kwkey);
            if (kw.length) {
              params[kwkey] = kw;
            } else if (default_value !== void 0) {
              params[kwkey] = default_value;
            }
          });
          return params;
        },
        clickParams: function() {
          var id = "", params = {};
          _.each(CLICK_IDS, function(idkey) {
            id = _.getQueryParam(document$1.URL, idkey);
            if (id.length) {
              params[idkey] = id;
            }
          });
          return params;
        },
        marketingParams: function() {
          return _.extend(_.info.campaignParams(), _.info.clickParams());
        },
        searchEngine: function(referrer) {
          if (referrer.search("https?://(.*)google.([^/?]*)") === 0) {
            return "google";
          } else if (referrer.search("https?://(.*)bing.com") === 0) {
            return "bing";
          } else if (referrer.search("https?://(.*)yahoo.com") === 0) {
            return "yahoo";
          } else if (referrer.search("https?://(.*)duckduckgo.com") === 0) {
            return "duckduckgo";
          } else {
            return null;
          }
        },
        searchInfo: function(referrer) {
          var search = _.info.searchEngine(referrer), param = search != "yahoo" ? "q" : "p", ret = {};
          if (search !== null) {
            ret["$search_engine"] = search;
            var keyword = _.getQueryParam(referrer, param);
            if (keyword.length) {
              ret["mp_keyword"] = keyword;
            }
          }
          return ret;
        },
        /**
         * This function detects which browser is running this script.
         * The order of the checks are important since many user agents
         * include key words used in later checks.
         */
        browser: function(user_agent, vendor, opera) {
          vendor = vendor || "";
          if (opera || _.includes(user_agent, " OPR/")) {
            if (_.includes(user_agent, "Mini")) {
              return "Opera Mini";
            }
            return "Opera";
          } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
            return "BlackBerry";
          } else if (_.includes(user_agent, "IEMobile") || _.includes(user_agent, "WPDesktop")) {
            return "Internet Explorer Mobile";
          } else if (_.includes(user_agent, "SamsungBrowser/")) {
            return "Samsung Internet";
          } else if (_.includes(user_agent, "Edge") || _.includes(user_agent, "Edg/")) {
            return "Microsoft Edge";
          } else if (_.includes(user_agent, "FBIOS")) {
            return "Facebook Mobile";
          } else if (_.includes(user_agent, "Chrome")) {
            return "Chrome";
          } else if (_.includes(user_agent, "CriOS")) {
            return "Chrome iOS";
          } else if (_.includes(user_agent, "UCWEB") || _.includes(user_agent, "UCBrowser")) {
            return "UC Browser";
          } else if (_.includes(user_agent, "FxiOS")) {
            return "Firefox iOS";
          } else if (_.includes(vendor, "Apple")) {
            if (_.includes(user_agent, "Mobile")) {
              return "Mobile Safari";
            }
            return "Safari";
          } else if (_.includes(user_agent, "Android")) {
            return "Android Mobile";
          } else if (_.includes(user_agent, "Konqueror")) {
            return "Konqueror";
          } else if (_.includes(user_agent, "Firefox")) {
            return "Firefox";
          } else if (_.includes(user_agent, "MSIE") || _.includes(user_agent, "Trident/")) {
            return "Internet Explorer";
          } else if (_.includes(user_agent, "Gecko")) {
            return "Mozilla";
          } else {
            return "";
          }
        },
        /**
         * This function detects which browser version is running this script,
         * parsing major and minor version (e.g., 42.1). User agent strings from:
         * http://www.useragentstring.com/pages/useragentstring.php
         */
        browserVersion: function(userAgent2, vendor, opera) {
          var browser = _.info.browser(userAgent2, vendor, opera);
          var versionRegexs = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            "Chrome": /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            "Safari": /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            "Opera": /(Opera|OPR)\/(\d+(\.\d+)?)/,
            "Firefox": /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            "Konqueror": /Konqueror:(\d+(\.\d+)?)/,
            "BlackBerry": /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            "Mozilla": /rv:(\d+(\.\d+)?)/
          };
          var regex = versionRegexs[browser];
          if (regex === void 0) {
            return null;
          }
          var matches = userAgent2.match(regex);
          if (!matches) {
            return null;
          }
          return parseFloat(matches[matches.length - 2]);
        },
        os: function() {
          var a = userAgent;
          if (/Windows/i.test(a)) {
            if (/Phone/.test(a) || /WPDesktop/.test(a)) {
              return "Windows Phone";
            }
            return "Windows";
          } else if (/(iPhone|iPad|iPod)/.test(a)) {
            return "iOS";
          } else if (/Android/.test(a)) {
            return "Android";
          } else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) {
            return "BlackBerry";
          } else if (/Mac/i.test(a)) {
            return "Mac OS X";
          } else if (/Linux/.test(a)) {
            return "Linux";
          } else if (/CrOS/.test(a)) {
            return "Chrome OS";
          } else {
            return "";
          }
        },
        device: function(user_agent) {
          if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) {
            return "Windows Phone";
          } else if (/iPad/.test(user_agent)) {
            return "iPad";
          } else if (/iPod/.test(user_agent)) {
            return "iPod Touch";
          } else if (/iPhone/.test(user_agent)) {
            return "iPhone";
          } else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) {
            return "BlackBerry";
          } else if (/Android/.test(user_agent)) {
            return "Android";
          } else {
            return "";
          }
        },
        referringDomain: function(referrer) {
          var split = referrer.split("/");
          if (split.length >= 3) {
            return split[2];
          }
          return "";
        },
        currentUrl: function() {
          return window$1.location.href;
        },
        properties: function(extra_props) {
          if (typeof extra_props !== "object") {
            extra_props = {};
          }
          return _.extend(_.strip_empty_properties({
            "$os": _.info.os(),
            "$browser": _.info.browser(userAgent, navigator2.vendor, windowOpera),
            "$referrer": document$1.referrer,
            "$referring_domain": _.info.referringDomain(document$1.referrer),
            "$device": _.info.device(userAgent)
          }), {
            "$current_url": _.info.currentUrl(),
            "$browser_version": _.info.browserVersion(userAgent, navigator2.vendor, windowOpera),
            "$screen_height": screen.height,
            "$screen_width": screen.width,
            "mp_lib": "web",
            "$lib_version": Config.LIB_VERSION,
            "$insert_id": cheap_guid(),
            "time": _.timestamp() / 1e3
            // epoch time in seconds
          }, _.strip_empty_properties(extra_props));
        },
        people_properties: function() {
          return _.extend(_.strip_empty_properties({
            "$os": _.info.os(),
            "$browser": _.info.browser(userAgent, navigator2.vendor, windowOpera)
          }), {
            "$browser_version": _.info.browserVersion(userAgent, navigator2.vendor, windowOpera)
          });
        },
        mpPageViewProperties: function() {
          return _.strip_empty_properties({
            "current_page_title": document$1.title,
            "current_domain": window$1.location.hostname,
            "current_url_path": window$1.location.pathname,
            "current_url_protocol": window$1.location.protocol,
            "current_url_search": window$1.location.search
          });
        }
      };
      var cheap_guid = function(maxlen) {
        var guid = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
        return maxlen ? guid.substring(0, maxlen) : guid;
      };
      var SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
      var DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;
      var extract_domain = function(hostname) {
        var domain_regex = DOMAIN_MATCH_REGEX;
        var parts = hostname.split(".");
        var tld = parts[parts.length - 1];
        if (tld.length > 4 || tld === "com" || tld === "org") {
          domain_regex = SIMPLE_DOMAIN_MATCH_REGEX;
        }
        var matches = hostname.match(domain_regex);
        return matches ? matches[0] : "";
      };
      var JSONStringify = null;
      var JSONParse = null;
      if (typeof JSON !== "undefined") {
        JSONStringify = JSON.stringify;
        JSONParse = JSON.parse;
      }
      JSONStringify = JSONStringify || _.JSONEncode;
      JSONParse = JSONParse || _.JSONDecode;
      _["toArray"] = _.toArray;
      _["isObject"] = _.isObject;
      _["JSONEncode"] = _.JSONEncode;
      _["JSONDecode"] = _.JSONDecode;
      _["isBlockedUA"] = _.isBlockedUA;
      _["isEmptyObject"] = _.isEmptyObject;
      _["info"] = _.info;
      _["info"]["device"] = _.info.device;
      _["info"]["browser"] = _.info.browser;
      _["info"]["browserVersion"] = _.info.browserVersion;
      _["info"]["properties"] = _.info.properties;
      var DomTracker = function() {
      };
      DomTracker.prototype.create_properties = function() {
      };
      DomTracker.prototype.event_handler = function() {
      };
      DomTracker.prototype.after_track_handler = function() {
      };
      DomTracker.prototype.init = function(mixpanel_instance) {
        this.mp = mixpanel_instance;
        return this;
      };
      DomTracker.prototype.track = function(query, event_name, properties, user_callback) {
        var that = this;
        var elements = _.dom_query(query);
        if (elements.length === 0) {
          console2.error("The DOM query (" + query + ") returned 0 elements");
          return;
        }
        _.each(elements, function(element) {
          _.register_event(element, this.override_event, function(e) {
            var options = {};
            var props = that.create_properties(properties, this);
            var timeout = that.mp.get_config("track_links_timeout");
            that.event_handler(e, this, options);
            window.setTimeout(that.track_callback(user_callback, props, options, true), timeout);
            that.mp.track(event_name, props, that.track_callback(user_callback, props, options));
          });
        }, this);
        return true;
      };
      DomTracker.prototype.track_callback = function(user_callback, props, options, timeout_occured) {
        timeout_occured = timeout_occured || false;
        var that = this;
        return function() {
          if (options.callback_fired) {
            return;
          }
          options.callback_fired = true;
          if (user_callback && user_callback(timeout_occured, props) === false) {
            return;
          }
          that.after_track_handler(props, options, timeout_occured);
        };
      };
      DomTracker.prototype.create_properties = function(properties, element) {
        var props;
        if (typeof properties === "function") {
          props = properties(element);
        } else {
          props = _.extend({}, properties);
        }
        return props;
      };
      var LinkTracker = function() {
        this.override_event = "click";
      };
      _.inherit(LinkTracker, DomTracker);
      LinkTracker.prototype.create_properties = function(properties, element) {
        var props = LinkTracker.superclass.create_properties.apply(this, arguments);
        if (element.href) {
          props["url"] = element.href;
        }
        return props;
      };
      LinkTracker.prototype.event_handler = function(evt, element, options) {
        options.new_tab = evt.which === 2 || evt.metaKey || evt.ctrlKey || element.target === "_blank";
        options.href = element.href;
        if (!options.new_tab) {
          evt.preventDefault();
        }
      };
      LinkTracker.prototype.after_track_handler = function(props, options) {
        if (options.new_tab) {
          return;
        }
        setTimeout(function() {
          window.location = options.href;
        }, 0);
      };
      var FormTracker = function() {
        this.override_event = "submit";
      };
      _.inherit(FormTracker, DomTracker);
      FormTracker.prototype.event_handler = function(evt, element, options) {
        options.element = element;
        evt.preventDefault();
      };
      FormTracker.prototype.after_track_handler = function(props, options) {
        setTimeout(function() {
          options.element.submit();
        }, 0);
      };
      var logger$2 = console_with_prefix("lock");
      var SharedLock = function(key, options) {
        options = options || {};
        this.storageKey = key;
        this.storage = options.storage || window.localStorage;
        this.pollIntervalMS = options.pollIntervalMS || 100;
        this.timeoutMS = options.timeoutMS || 2e3;
      };
      SharedLock.prototype.withLock = function(lockedCB, errorCB, pid) {
        if (!pid && typeof errorCB !== "function") {
          pid = errorCB;
          errorCB = null;
        }
        var i = pid || (/* @__PURE__ */ new Date()).getTime() + "|" + Math.random();
        var startTime = (/* @__PURE__ */ new Date()).getTime();
        var key = this.storageKey;
        var pollIntervalMS = this.pollIntervalMS;
        var timeoutMS = this.timeoutMS;
        var storage = this.storage;
        var keyX = key + ":X";
        var keyY = key + ":Y";
        var keyZ = key + ":Z";
        var reportError = function(err) {
          errorCB && errorCB(err);
        };
        var delay = function(cb) {
          if ((/* @__PURE__ */ new Date()).getTime() - startTime > timeoutMS) {
            logger$2.error("Timeout waiting for mutex on " + key + "; clearing lock. [" + i + "]");
            storage.removeItem(keyZ);
            storage.removeItem(keyY);
            loop();
            return;
          }
          setTimeout(function() {
            try {
              cb();
            } catch (err) {
              reportError(err);
            }
          }, pollIntervalMS * (Math.random() + 0.1));
        };
        var waitFor = function(predicate, cb) {
          if (predicate()) {
            cb();
          } else {
            delay(function() {
              waitFor(predicate, cb);
            });
          }
        };
        var getSetY = function() {
          var valY = storage.getItem(keyY);
          if (valY && valY !== i) {
            return false;
          } else {
            storage.setItem(keyY, i);
            if (storage.getItem(keyY) === i) {
              return true;
            } else {
              if (!localStorageSupported(storage, true)) {
                throw new Error("localStorage support dropped while acquiring lock");
              }
              return false;
            }
          }
        };
        var loop = function() {
          storage.setItem(keyX, i);
          waitFor(getSetY, function() {
            if (storage.getItem(keyX) === i) {
              criticalSection();
              return;
            }
            delay(function() {
              if (storage.getItem(keyY) !== i) {
                loop();
                return;
              }
              waitFor(function() {
                return !storage.getItem(keyZ);
              }, criticalSection);
            });
          });
        };
        var criticalSection = function() {
          storage.setItem(keyZ, "1");
          try {
            lockedCB();
          } finally {
            storage.removeItem(keyZ);
            if (storage.getItem(keyY) === i) {
              storage.removeItem(keyY);
            }
            if (storage.getItem(keyX) === i) {
              storage.removeItem(keyX);
            }
          }
        };
        try {
          if (localStorageSupported(storage, true)) {
            loop();
          } else {
            throw new Error("localStorage support check failed");
          }
        } catch (err) {
          reportError(err);
        }
      };
      var logger$1 = console_with_prefix("batch");
      var RequestQueue = function(storageKey, options) {
        options = options || {};
        this.storageKey = storageKey;
        this.storage = options.storage || window.localStorage;
        this.reportError = options.errorReporter || _.bind(logger$1.error, logger$1);
        this.lock = new SharedLock(storageKey, { storage: this.storage });
        this.pid = options.pid || null;
        this.memQueue = [];
      };
      RequestQueue.prototype.enqueue = function(item, flushInterval, cb) {
        var queueEntry = {
          "id": cheap_guid(),
          "flushAfter": (/* @__PURE__ */ new Date()).getTime() + flushInterval * 2,
          "payload": item
        };
        this.lock.withLock(_.bind(function lockAcquired() {
          var succeeded;
          try {
            var storedQueue = this.readFromStorage();
            storedQueue.push(queueEntry);
            succeeded = this.saveToStorage(storedQueue);
            if (succeeded) {
              this.memQueue.push(queueEntry);
            }
          } catch (err) {
            this.reportError("Error enqueueing item", item);
            succeeded = false;
          }
          if (cb) {
            cb(succeeded);
          }
        }, this), _.bind(function lockFailure(err) {
          this.reportError("Error acquiring storage lock", err);
          if (cb) {
            cb(false);
          }
        }, this), this.pid);
      };
      RequestQueue.prototype.fillBatch = function(batchSize) {
        var batch = this.memQueue.slice(0, batchSize);
        if (batch.length < batchSize) {
          var storedQueue = this.readFromStorage();
          if (storedQueue.length) {
            var idsInBatch = {};
            _.each(batch, function(item2) {
              idsInBatch[item2["id"]] = true;
            });
            for (var i = 0; i < storedQueue.length; i++) {
              var item = storedQueue[i];
              if ((/* @__PURE__ */ new Date()).getTime() > item["flushAfter"] && !idsInBatch[item["id"]]) {
                item.orphaned = true;
                batch.push(item);
                if (batch.length >= batchSize) {
                  break;
                }
              }
            }
          }
        }
        return batch;
      };
      var filterOutIDsAndInvalid = function(items, idSet) {
        var filteredItems = [];
        _.each(items, function(item) {
          if (item["id"] && !idSet[item["id"]]) {
            filteredItems.push(item);
          }
        });
        return filteredItems;
      };
      RequestQueue.prototype.removeItemsByID = function(ids, cb) {
        var idSet = {};
        _.each(ids, function(id) {
          idSet[id] = true;
        });
        this.memQueue = filterOutIDsAndInvalid(this.memQueue, idSet);
        var removeFromStorage = _.bind(function() {
          var succeeded;
          try {
            var storedQueue = this.readFromStorage();
            storedQueue = filterOutIDsAndInvalid(storedQueue, idSet);
            succeeded = this.saveToStorage(storedQueue);
            if (succeeded) {
              storedQueue = this.readFromStorage();
              for (var i = 0; i < storedQueue.length; i++) {
                var item = storedQueue[i];
                if (item["id"] && !!idSet[item["id"]]) {
                  this.reportError("Item not removed from storage");
                  return false;
                }
              }
            }
          } catch (err) {
            this.reportError("Error removing items", ids);
            succeeded = false;
          }
          return succeeded;
        }, this);
        this.lock.withLock(function lockAcquired() {
          var succeeded = removeFromStorage();
          if (cb) {
            cb(succeeded);
          }
        }, _.bind(function lockFailure(err) {
          var succeeded = false;
          this.reportError("Error acquiring storage lock", err);
          if (!localStorageSupported(this.storage, true)) {
            succeeded = removeFromStorage();
            if (!succeeded) {
              try {
                this.storage.removeItem(this.storageKey);
              } catch (err2) {
                this.reportError("Error clearing queue", err2);
              }
            }
          }
          if (cb) {
            cb(succeeded);
          }
        }, this), this.pid);
      };
      var updatePayloads = function(existingItems, itemsToUpdate) {
        var newItems = [];
        _.each(existingItems, function(item) {
          var id = item["id"];
          if (id in itemsToUpdate) {
            var newPayload = itemsToUpdate[id];
            if (newPayload !== null) {
              item["payload"] = newPayload;
              newItems.push(item);
            }
          } else {
            newItems.push(item);
          }
        });
        return newItems;
      };
      RequestQueue.prototype.updatePayloads = function(itemsToUpdate, cb) {
        this.memQueue = updatePayloads(this.memQueue, itemsToUpdate);
        this.lock.withLock(_.bind(function lockAcquired() {
          var succeeded;
          try {
            var storedQueue = this.readFromStorage();
            storedQueue = updatePayloads(storedQueue, itemsToUpdate);
            succeeded = this.saveToStorage(storedQueue);
          } catch (err) {
            this.reportError("Error updating items", itemsToUpdate);
            succeeded = false;
          }
          if (cb) {
            cb(succeeded);
          }
        }, this), _.bind(function lockFailure(err) {
          this.reportError("Error acquiring storage lock", err);
          if (cb) {
            cb(false);
          }
        }, this), this.pid);
      };
      RequestQueue.prototype.readFromStorage = function() {
        var storageEntry;
        try {
          storageEntry = this.storage.getItem(this.storageKey);
          if (storageEntry) {
            storageEntry = JSONParse(storageEntry);
            if (!_.isArray(storageEntry)) {
              this.reportError("Invalid storage entry:", storageEntry);
              storageEntry = null;
            }
          }
        } catch (err) {
          this.reportError("Error retrieving queue", err);
          storageEntry = null;
        }
        return storageEntry || [];
      };
      RequestQueue.prototype.saveToStorage = function(queue) {
        try {
          this.storage.setItem(this.storageKey, JSONStringify(queue));
          return true;
        } catch (err) {
          this.reportError("Error saving queue", err);
          return false;
        }
      };
      RequestQueue.prototype.clear = function() {
        this.memQueue = [];
        this.storage.removeItem(this.storageKey);
      };
      var MAX_RETRY_INTERVAL_MS = 10 * 60 * 1e3;
      var logger = console_with_prefix("batch");
      var RequestBatcher = function(storageKey, options) {
        this.errorReporter = options.errorReporter;
        this.queue = new RequestQueue(storageKey, {
          errorReporter: _.bind(this.reportError, this),
          storage: options.storage
        });
        this.libConfig = options.libConfig;
        this.sendRequest = options.sendRequestFunc;
        this.beforeSendHook = options.beforeSendHook;
        this.stopAllBatching = options.stopAllBatchingFunc;
        this.batchSize = this.libConfig["batch_size"];
        this.flushInterval = this.libConfig["batch_flush_interval_ms"];
        this.stopped = !this.libConfig["batch_autostart"];
        this.consecutiveRemovalFailures = 0;
        this.itemIdsSentSuccessfully = {};
      };
      RequestBatcher.prototype.enqueue = function(item, cb) {
        this.queue.enqueue(item, this.flushInterval, cb);
      };
      RequestBatcher.prototype.start = function() {
        this.stopped = false;
        this.consecutiveRemovalFailures = 0;
        this.flush();
      };
      RequestBatcher.prototype.stop = function() {
        this.stopped = true;
        if (this.timeoutID) {
          clearTimeout(this.timeoutID);
          this.timeoutID = null;
        }
      };
      RequestBatcher.prototype.clear = function() {
        this.queue.clear();
      };
      RequestBatcher.prototype.resetBatchSize = function() {
        this.batchSize = this.libConfig["batch_size"];
      };
      RequestBatcher.prototype.resetFlush = function() {
        this.scheduleFlush(this.libConfig["batch_flush_interval_ms"]);
      };
      RequestBatcher.prototype.scheduleFlush = function(flushMS) {
        this.flushInterval = flushMS;
        if (!this.stopped) {
          this.timeoutID = setTimeout(_.bind(this.flush, this), this.flushInterval);
        }
      };
      RequestBatcher.prototype.flush = function(options) {
        try {
          if (this.requestInProgress) {
            logger.log("Flush: Request already in progress");
            return;
          }
          options = options || {};
          var timeoutMS = this.libConfig["batch_request_timeout_ms"];
          var startTime = (/* @__PURE__ */ new Date()).getTime();
          var currentBatchSize = this.batchSize;
          var batch = this.queue.fillBatch(currentBatchSize);
          var dataForRequest = [];
          var transformedItems = {};
          _.each(batch, function(item) {
            var payload = item["payload"];
            if (this.beforeSendHook && !item.orphaned) {
              payload = this.beforeSendHook(payload);
            }
            if (payload) {
              if (payload["event"] && payload["properties"]) {
                payload["properties"] = _.extend(
                  {},
                  payload["properties"],
                  { "mp_sent_by_lib_version": Config.LIB_VERSION }
                );
              }
              var addPayload = true;
              var itemId = item["id"];
              if (itemId) {
                if ((this.itemIdsSentSuccessfully[itemId] || 0) > 5) {
                  this.reportError("[dupe] item ID sent too many times, not sending", {
                    item,
                    batchSize: batch.length,
                    timesSent: this.itemIdsSentSuccessfully[itemId]
                  });
                  addPayload = false;
                }
              } else {
                this.reportError("[dupe] found item with no ID", { item });
              }
              if (addPayload) {
                dataForRequest.push(payload);
              }
            }
            transformedItems[item["id"]] = payload;
          }, this);
          if (dataForRequest.length < 1) {
            this.resetFlush();
            return;
          }
          this.requestInProgress = true;
          var batchSendCallback = _.bind(function(res) {
            this.requestInProgress = false;
            try {
              var removeItemsFromQueue = false;
              if (options.unloading) {
                this.queue.updatePayloads(transformedItems);
              } else if (_.isObject(res) && res.error === "timeout" && (/* @__PURE__ */ new Date()).getTime() - startTime >= timeoutMS) {
                this.reportError("Network timeout; retrying");
                this.flush();
              } else if (_.isObject(res) && res.xhr_req && (res.xhr_req["status"] >= 500 || res.xhr_req["status"] === 429 || res.error === "timeout")) {
                var retryMS = this.flushInterval * 2;
                var headers = res.xhr_req["responseHeaders"];
                if (headers) {
                  var retryAfter = headers["Retry-After"];
                  if (retryAfter) {
                    retryMS = parseInt(retryAfter, 10) * 1e3 || retryMS;
                  }
                }
                retryMS = Math.min(MAX_RETRY_INTERVAL_MS, retryMS);
                this.reportError("Error; retry in " + retryMS + " ms");
                this.scheduleFlush(retryMS);
              } else if (_.isObject(res) && res.xhr_req && res.xhr_req["status"] === 413) {
                if (batch.length > 1) {
                  var halvedBatchSize = Math.max(1, Math.floor(currentBatchSize / 2));
                  this.batchSize = Math.min(this.batchSize, halvedBatchSize, batch.length - 1);
                  this.reportError("413 response; reducing batch size to " + this.batchSize);
                  this.resetFlush();
                } else {
                  this.reportError("Single-event request too large; dropping", batch);
                  this.resetBatchSize();
                  removeItemsFromQueue = true;
                }
              } else {
                removeItemsFromQueue = true;
              }
              if (removeItemsFromQueue) {
                this.queue.removeItemsByID(
                  _.map(batch, function(item) {
                    return item["id"];
                  }),
                  _.bind(function(succeeded) {
                    if (succeeded) {
                      this.consecutiveRemovalFailures = 0;
                      this.flush();
                    } else {
                      this.reportError("Failed to remove items from queue");
                      if (++this.consecutiveRemovalFailures > 5) {
                        this.reportError("Too many queue failures; disabling batching system.");
                        this.stopAllBatching();
                      } else {
                        this.resetFlush();
                      }
                    }
                  }, this)
                );
                _.each(batch, _.bind(function(item) {
                  var itemId = item["id"];
                  if (itemId) {
                    this.itemIdsSentSuccessfully[itemId] = this.itemIdsSentSuccessfully[itemId] || 0;
                    this.itemIdsSentSuccessfully[itemId]++;
                    if (this.itemIdsSentSuccessfully[itemId] > 5) {
                      this.reportError("[dupe] item ID sent too many times", {
                        item,
                        batchSize: batch.length,
                        timesSent: this.itemIdsSentSuccessfully[itemId]
                      });
                    }
                  } else {
                    this.reportError("[dupe] found item with no ID while removing", { item });
                  }
                }, this));
              }
            } catch (err) {
              this.reportError("Error handling API response", err);
              this.resetFlush();
            }
          }, this);
          var requestOptions = {
            method: "POST",
            verbose: true,
            ignore_json_errors: true,
            // eslint-disable-line camelcase
            timeout_ms: timeoutMS
            // eslint-disable-line camelcase
          };
          if (options.unloading) {
            requestOptions.transport = "sendBeacon";
          }
          logger.log("MIXPANEL REQUEST:", dataForRequest);
          this.sendRequest(dataForRequest, requestOptions, batchSendCallback);
        } catch (err) {
          this.reportError("Error flushing request queue", err);
          this.resetFlush();
        }
      };
      RequestBatcher.prototype.reportError = function(msg, err) {
        logger.error.apply(logger.error, arguments);
        if (this.errorReporter) {
          try {
            if (!(err instanceof Error)) {
              err = new Error(msg);
            }
            this.errorReporter(msg, err);
          } catch (err2) {
            logger.error(err2);
          }
        }
      };
      var GDPR_DEFAULT_PERSISTENCE_PREFIX = "__mp_opt_in_out_";
      function optIn(token, options) {
        _optInOut(true, token, options);
      }
      function optOut(token, options) {
        _optInOut(false, token, options);
      }
      function hasOptedIn(token, options) {
        return _getStorageValue(token, options) === "1";
      }
      function hasOptedOut(token, options) {
        if (_hasDoNotTrackFlagOn(options)) {
          console2.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"');
          return true;
        }
        var optedOut = _getStorageValue(token, options) === "0";
        if (optedOut) {
          console2.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.");
        }
        return optedOut;
      }
      function addOptOutCheckMixpanelLib(method) {
        return _addOptOutCheck(method, function(name) {
          return this.get_config(name);
        });
      }
      function addOptOutCheckMixpanelPeople(method) {
        return _addOptOutCheck(method, function(name) {
          return this._get_config(name);
        });
      }
      function addOptOutCheckMixpanelGroup(method) {
        return _addOptOutCheck(method, function(name) {
          return this._get_config(name);
        });
      }
      function clearOptInOut(token, options) {
        options = options || {};
        _getStorage(options).remove(
          _getStorageKey(token, options),
          !!options.crossSubdomainCookie,
          options.cookieDomain
        );
      }
      function _getStorage(options) {
        options = options || {};
        return options.persistenceType === "localStorage" ? _.localStorage : _.cookie;
      }
      function _getStorageKey(token, options) {
        options = options || {};
        return (options.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + token;
      }
      function _getStorageValue(token, options) {
        return _getStorage(options).get(_getStorageKey(token, options));
      }
      function _hasDoNotTrackFlagOn(options) {
        if (options && options.ignoreDnt) {
          return false;
        }
        var win = options && options.window || window$1;
        var nav = win["navigator"] || {};
        var hasDntOn = false;
        _.each([
          nav["doNotTrack"],
          // standard
          nav["msDoNotTrack"],
          win["doNotTrack"]
        ], function(dntValue) {
          if (_.includes([true, 1, "1", "yes"], dntValue)) {
            hasDntOn = true;
          }
        });
        return hasDntOn;
      }
      function _optInOut(optValue, token, options) {
        if (!_.isString(token) || !token.length) {
          console2.error("gdpr." + (optValue ? "optIn" : "optOut") + " called with an invalid token");
          return;
        }
        options = options || {};
        _getStorage(options).set(
          _getStorageKey(token, options),
          optValue ? 1 : 0,
          _.isNumber(options.cookieExpiration) ? options.cookieExpiration : null,
          !!options.crossSubdomainCookie,
          !!options.secureCookie,
          !!options.crossSiteCookie,
          options.cookieDomain
        );
        if (options.track && optValue) {
          options.track(options.trackEventName || "$opt_in", options.trackProperties, {
            "send_immediately": true
          });
        }
      }
      function _addOptOutCheck(method, getConfigValue) {
        return function() {
          var optedOut = false;
          try {
            var token = getConfigValue.call(this, "token");
            var ignoreDnt = getConfigValue.call(this, "ignore_dnt");
            var persistenceType = getConfigValue.call(this, "opt_out_tracking_persistence_type");
            var persistencePrefix = getConfigValue.call(this, "opt_out_tracking_cookie_prefix");
            var win = getConfigValue.call(this, "window");
            if (token) {
              optedOut = hasOptedOut(token, {
                ignoreDnt,
                persistenceType,
                persistencePrefix,
                window: win
              });
            }
          } catch (err) {
            console2.error("Unexpected error when checking tracking opt-out status: " + err);
          }
          if (!optedOut) {
            return method.apply(this, arguments);
          }
          var callback = arguments[arguments.length - 1];
          if (typeof callback === "function") {
            callback(0);
          }
          return;
        };
      }
      var SET_ACTION = "$set";
      var SET_ONCE_ACTION = "$set_once";
      var UNSET_ACTION = "$unset";
      var ADD_ACTION = "$add";
      var APPEND_ACTION = "$append";
      var UNION_ACTION = "$union";
      var REMOVE_ACTION = "$remove";
      var DELETE_ACTION = "$delete";
      var apiActions = {
        set_action: function(prop, to) {
          var data = {};
          var $set = {};
          if (_.isObject(prop)) {
            _.each(prop, function(v, k) {
              if (!this._is_reserved_property(k)) {
                $set[k] = v;
              }
            }, this);
          } else {
            $set[prop] = to;
          }
          data[SET_ACTION] = $set;
          return data;
        },
        unset_action: function(prop) {
          var data = {};
          var $unset = [];
          if (!_.isArray(prop)) {
            prop = [prop];
          }
          _.each(prop, function(k) {
            if (!this._is_reserved_property(k)) {
              $unset.push(k);
            }
          }, this);
          data[UNSET_ACTION] = $unset;
          return data;
        },
        set_once_action: function(prop, to) {
          var data = {};
          var $set_once = {};
          if (_.isObject(prop)) {
            _.each(prop, function(v, k) {
              if (!this._is_reserved_property(k)) {
                $set_once[k] = v;
              }
            }, this);
          } else {
            $set_once[prop] = to;
          }
          data[SET_ONCE_ACTION] = $set_once;
          return data;
        },
        union_action: function(list_name, values) {
          var data = {};
          var $union = {};
          if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
              if (!this._is_reserved_property(k)) {
                $union[k] = _.isArray(v) ? v : [v];
              }
            }, this);
          } else {
            $union[list_name] = _.isArray(values) ? values : [values];
          }
          data[UNION_ACTION] = $union;
          return data;
        },
        append_action: function(list_name, value) {
          var data = {};
          var $append = {};
          if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
              if (!this._is_reserved_property(k)) {
                $append[k] = v;
              }
            }, this);
          } else {
            $append[list_name] = value;
          }
          data[APPEND_ACTION] = $append;
          return data;
        },
        remove_action: function(list_name, value) {
          var data = {};
          var $remove = {};
          if (_.isObject(list_name)) {
            _.each(list_name, function(v, k) {
              if (!this._is_reserved_property(k)) {
                $remove[k] = v;
              }
            }, this);
          } else {
            $remove[list_name] = value;
          }
          data[REMOVE_ACTION] = $remove;
          return data;
        },
        delete_action: function() {
          var data = {};
          data[DELETE_ACTION] = "";
          return data;
        }
      };
      var MixpanelGroup = function() {
      };
      _.extend(MixpanelGroup.prototype, apiActions);
      MixpanelGroup.prototype._init = function(mixpanel_instance, group_key, group_id) {
        this._mixpanel = mixpanel_instance;
        this._group_key = group_key;
        this._group_id = group_id;
      };
      MixpanelGroup.prototype.set = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
        var data = this.set_action(prop, to);
        if (_.isObject(prop)) {
          callback = to;
        }
        return this._send_request(data, callback);
      });
      MixpanelGroup.prototype.set_once = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
        var data = this.set_once_action(prop, to);
        if (_.isObject(prop)) {
          callback = to;
        }
        return this._send_request(data, callback);
      });
      MixpanelGroup.prototype.unset = addOptOutCheckMixpanelGroup(function(prop, callback) {
        var data = this.unset_action(prop);
        return this._send_request(data, callback);
      });
      MixpanelGroup.prototype.union = addOptOutCheckMixpanelGroup(function(list_name, values, callback) {
        if (_.isObject(list_name)) {
          callback = values;
        }
        var data = this.union_action(list_name, values);
        return this._send_request(data, callback);
      });
      MixpanelGroup.prototype["delete"] = addOptOutCheckMixpanelGroup(function(callback) {
        var data = this.delete_action();
        return this._send_request(data, callback);
      });
      MixpanelGroup.prototype.remove = addOptOutCheckMixpanelGroup(function(list_name, value, callback) {
        var data = this.remove_action(list_name, value);
        return this._send_request(data, callback);
      });
      MixpanelGroup.prototype._send_request = function(data, callback) {
        data["$group_key"] = this._group_key;
        data["$group_id"] = this._group_id;
        data["$token"] = this._get_config("token");
        var date_encoded_data = _.encodeDates(data);
        return this._mixpanel._track_or_batch({
          type: "groups",
          data: date_encoded_data,
          endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes")["groups"],
          batcher: this._mixpanel.request_batchers.groups
        }, callback);
      };
      MixpanelGroup.prototype._is_reserved_property = function(prop) {
        return prop === "$group_key" || prop === "$group_id";
      };
      MixpanelGroup.prototype._get_config = function(conf) {
        return this._mixpanel.get_config(conf);
      };
      MixpanelGroup.prototype.toString = function() {
        return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id;
      };
      MixpanelGroup.prototype["remove"] = MixpanelGroup.prototype.remove;
      MixpanelGroup.prototype["set"] = MixpanelGroup.prototype.set;
      MixpanelGroup.prototype["set_once"] = MixpanelGroup.prototype.set_once;
      MixpanelGroup.prototype["union"] = MixpanelGroup.prototype.union;
      MixpanelGroup.prototype["unset"] = MixpanelGroup.prototype.unset;
      MixpanelGroup.prototype["toString"] = MixpanelGroup.prototype.toString;
      var MixpanelPeople = function() {
      };
      _.extend(MixpanelPeople.prototype, apiActions);
      MixpanelPeople.prototype._init = function(mixpanel_instance) {
        this._mixpanel = mixpanel_instance;
      };
      MixpanelPeople.prototype.set = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
        var data = this.set_action(prop, to);
        if (_.isObject(prop)) {
          callback = to;
        }
        if (this._get_config("save_referrer")) {
          this._mixpanel["persistence"].update_referrer_info(document.referrer);
        }
        data[SET_ACTION] = _.extend(
          {},
          _.info.people_properties(),
          data[SET_ACTION]
        );
        return this._send_request(data, callback);
      });
      MixpanelPeople.prototype.set_once = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
        var data = this.set_once_action(prop, to);
        if (_.isObject(prop)) {
          callback = to;
        }
        return this._send_request(data, callback);
      });
      MixpanelPeople.prototype.unset = addOptOutCheckMixpanelPeople(function(prop, callback) {
        var data = this.unset_action(prop);
        return this._send_request(data, callback);
      });
      MixpanelPeople.prototype.increment = addOptOutCheckMixpanelPeople(function(prop, by, callback) {
        var data = {};
        var $add = {};
        if (_.isObject(prop)) {
          _.each(prop, function(v, k) {
            if (!this._is_reserved_property(k)) {
              if (isNaN(parseFloat(v))) {
                console2.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                return;
              } else {
                $add[k] = v;
              }
            }
          }, this);
          callback = by;
        } else {
          if (_.isUndefined(by)) {
            by = 1;
          }
          $add[prop] = by;
        }
        data[ADD_ACTION] = $add;
        return this._send_request(data, callback);
      });
      MixpanelPeople.prototype.append = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
        if (_.isObject(list_name)) {
          callback = value;
        }
        var data = this.append_action(list_name, value);
        return this._send_request(data, callback);
      });
      MixpanelPeople.prototype.remove = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
        if (_.isObject(list_name)) {
          callback = value;
        }
        var data = this.remove_action(list_name, value);
        return this._send_request(data, callback);
      });
      MixpanelPeople.prototype.union = addOptOutCheckMixpanelPeople(function(list_name, values, callback) {
        if (_.isObject(list_name)) {
          callback = values;
        }
        var data = this.union_action(list_name, values);
        return this._send_request(data, callback);
      });
      MixpanelPeople.prototype.track_charge = addOptOutCheckMixpanelPeople(function(amount, properties, callback) {
        if (!_.isNumber(amount)) {
          amount = parseFloat(amount);
          if (isNaN(amount)) {
            console2.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return;
          }
        }
        return this.append("$transactions", _.extend({
          "$amount": amount
        }, properties), callback);
      });
      MixpanelPeople.prototype.clear_charges = function(callback) {
        return this.set("$transactions", [], callback);
      };
      MixpanelPeople.prototype.delete_user = function() {
        if (!this._identify_called()) {
          console2.error("mixpanel.people.delete_user() requires you to call identify() first");
          return;
        }
        var data = { "$delete": this._mixpanel.get_distinct_id() };
        return this._send_request(data);
      };
      MixpanelPeople.prototype.toString = function() {
        return this._mixpanel.toString() + ".people";
      };
      MixpanelPeople.prototype._send_request = function(data, callback) {
        data["$token"] = this._get_config("token");
        data["$distinct_id"] = this._mixpanel.get_distinct_id();
        var device_id = this._mixpanel.get_property("$device_id");
        var user_id = this._mixpanel.get_property("$user_id");
        var had_persisted_distinct_id = this._mixpanel.get_property("$had_persisted_distinct_id");
        if (device_id) {
          data["$device_id"] = device_id;
        }
        if (user_id) {
          data["$user_id"] = user_id;
        }
        if (had_persisted_distinct_id) {
          data["$had_persisted_distinct_id"] = had_persisted_distinct_id;
        }
        var date_encoded_data = _.encodeDates(data);
        if (!this._identify_called()) {
          this._enqueue(data);
          if (!_.isUndefined(callback)) {
            if (this._get_config("verbose")) {
              callback({ status: -1, error: null });
            } else {
              callback(-1);
            }
          }
          return _.truncate(date_encoded_data, 255);
        }
        return this._mixpanel._track_or_batch({
          type: "people",
          data: date_encoded_data,
          endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes")["engage"],
          batcher: this._mixpanel.request_batchers.people
        }, callback);
      };
      MixpanelPeople.prototype._get_config = function(conf_var) {
        return this._mixpanel.get_config(conf_var);
      };
      MixpanelPeople.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === true;
      };
      MixpanelPeople.prototype._enqueue = function(data) {
        if (SET_ACTION in data) {
          this._mixpanel["persistence"]._add_to_people_queue(SET_ACTION, data);
        } else if (SET_ONCE_ACTION in data) {
          this._mixpanel["persistence"]._add_to_people_queue(SET_ONCE_ACTION, data);
        } else if (UNSET_ACTION in data) {
          this._mixpanel["persistence"]._add_to_people_queue(UNSET_ACTION, data);
        } else if (ADD_ACTION in data) {
          this._mixpanel["persistence"]._add_to_people_queue(ADD_ACTION, data);
        } else if (APPEND_ACTION in data) {
          this._mixpanel["persistence"]._add_to_people_queue(APPEND_ACTION, data);
        } else if (REMOVE_ACTION in data) {
          this._mixpanel["persistence"]._add_to_people_queue(REMOVE_ACTION, data);
        } else if (UNION_ACTION in data) {
          this._mixpanel["persistence"]._add_to_people_queue(UNION_ACTION, data);
        } else {
          console2.error("Invalid call to _enqueue():", data);
        }
      };
      MixpanelPeople.prototype._flush_one_queue = function(action, action_method, callback, queue_to_params_fn) {
        var _this = this;
        var queued_data = _.extend({}, this._mixpanel["persistence"].load_queue(action));
        var action_params = queued_data;
        if (!_.isUndefined(queued_data) && _.isObject(queued_data) && !_.isEmptyObject(queued_data)) {
          _this._mixpanel["persistence"]._pop_from_people_queue(action, queued_data);
          _this._mixpanel["persistence"].save();
          if (queue_to_params_fn) {
            action_params = queue_to_params_fn(queued_data);
          }
          action_method.call(_this, action_params, function(response, data) {
            if (response === 0) {
              _this._mixpanel["persistence"]._add_to_people_queue(action, queued_data);
            }
            if (!_.isUndefined(callback)) {
              callback(response, data);
            }
          });
        }
      };
      MixpanelPeople.prototype._flush = function(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
        var _this = this;
        this._flush_one_queue(SET_ACTION, this.set, _set_callback);
        this._flush_one_queue(SET_ONCE_ACTION, this.set_once, _set_once_callback);
        this._flush_one_queue(UNSET_ACTION, this.unset, _unset_callback, function(queue) {
          return _.keys(queue);
        });
        this._flush_one_queue(ADD_ACTION, this.increment, _add_callback);
        this._flush_one_queue(UNION_ACTION, this.union, _union_callback);
        var $append_queue = this._mixpanel["persistence"].load_queue(APPEND_ACTION);
        if (!_.isUndefined($append_queue) && _.isArray($append_queue) && $append_queue.length) {
          var $append_item;
          var append_callback = function(response, data) {
            if (response === 0) {
              _this._mixpanel["persistence"]._add_to_people_queue(APPEND_ACTION, $append_item);
            }
            if (!_.isUndefined(_append_callback)) {
              _append_callback(response, data);
            }
          };
          for (var i = $append_queue.length - 1; i >= 0; i--) {
            $append_queue = this._mixpanel["persistence"].load_queue(APPEND_ACTION);
            $append_item = $append_queue.pop();
            _this._mixpanel["persistence"].save();
            if (!_.isEmptyObject($append_item)) {
              _this.append($append_item, append_callback);
            }
          }
        }
        var $remove_queue = this._mixpanel["persistence"].load_queue(REMOVE_ACTION);
        if (!_.isUndefined($remove_queue) && _.isArray($remove_queue) && $remove_queue.length) {
          var $remove_item;
          var remove_callback = function(response, data) {
            if (response === 0) {
              _this._mixpanel["persistence"]._add_to_people_queue(REMOVE_ACTION, $remove_item);
            }
            if (!_.isUndefined(_remove_callback)) {
              _remove_callback(response, data);
            }
          };
          for (var j = $remove_queue.length - 1; j >= 0; j--) {
            $remove_queue = this._mixpanel["persistence"].load_queue(REMOVE_ACTION);
            $remove_item = $remove_queue.pop();
            _this._mixpanel["persistence"].save();
            if (!_.isEmptyObject($remove_item)) {
              _this.remove($remove_item, remove_callback);
            }
          }
        }
      };
      MixpanelPeople.prototype._is_reserved_property = function(prop) {
        return prop === "$distinct_id" || prop === "$token" || prop === "$device_id" || prop === "$user_id" || prop === "$had_persisted_distinct_id";
      };
      MixpanelPeople.prototype["set"] = MixpanelPeople.prototype.set;
      MixpanelPeople.prototype["set_once"] = MixpanelPeople.prototype.set_once;
      MixpanelPeople.prototype["unset"] = MixpanelPeople.prototype.unset;
      MixpanelPeople.prototype["increment"] = MixpanelPeople.prototype.increment;
      MixpanelPeople.prototype["append"] = MixpanelPeople.prototype.append;
      MixpanelPeople.prototype["remove"] = MixpanelPeople.prototype.remove;
      MixpanelPeople.prototype["union"] = MixpanelPeople.prototype.union;
      MixpanelPeople.prototype["track_charge"] = MixpanelPeople.prototype.track_charge;
      MixpanelPeople.prototype["clear_charges"] = MixpanelPeople.prototype.clear_charges;
      MixpanelPeople.prototype["delete_user"] = MixpanelPeople.prototype.delete_user;
      MixpanelPeople.prototype["toString"] = MixpanelPeople.prototype.toString;
      var SET_QUEUE_KEY = "__mps";
      var SET_ONCE_QUEUE_KEY = "__mpso";
      var UNSET_QUEUE_KEY = "__mpus";
      var ADD_QUEUE_KEY = "__mpa";
      var APPEND_QUEUE_KEY = "__mpap";
      var REMOVE_QUEUE_KEY = "__mpr";
      var UNION_QUEUE_KEY = "__mpu";
      var PEOPLE_DISTINCT_ID_KEY = "$people_distinct_id";
      var ALIAS_ID_KEY = "__alias";
      var EVENT_TIMERS_KEY = "__timers";
      var RESERVED_PROPERTIES = [
        SET_QUEUE_KEY,
        SET_ONCE_QUEUE_KEY,
        UNSET_QUEUE_KEY,
        ADD_QUEUE_KEY,
        APPEND_QUEUE_KEY,
        REMOVE_QUEUE_KEY,
        UNION_QUEUE_KEY,
        PEOPLE_DISTINCT_ID_KEY,
        ALIAS_ID_KEY,
        EVENT_TIMERS_KEY
      ];
      var MixpanelPersistence = function(config) {
        this["props"] = {};
        this.campaign_params_saved = false;
        if (config["persistence_name"]) {
          this.name = "mp_" + config["persistence_name"];
        } else {
          this.name = "mp_" + config["token"] + "_mixpanel";
        }
        var storage_type = config["persistence"];
        if (storage_type !== "cookie" && storage_type !== "localStorage") {
          console2.critical("Unknown persistence type " + storage_type + "; falling back to cookie");
          storage_type = config["persistence"] = "cookie";
        }
        if (storage_type === "localStorage" && _.localStorage.is_supported()) {
          this.storage = _.localStorage;
        } else {
          this.storage = _.cookie;
        }
        this.load();
        this.update_config(config);
        this.upgrade(config);
        this.save();
      };
      MixpanelPersistence.prototype.properties = function() {
        var p = {};
        this.load();
        _.each(this["props"], function(v, k) {
          if (!_.include(RESERVED_PROPERTIES, k)) {
            p[k] = v;
          }
        });
        return p;
      };
      MixpanelPersistence.prototype.load = function() {
        if (this.disabled) {
          return;
        }
        var entry = this.storage.parse(this.name);
        if (entry) {
          this["props"] = _.extend({}, entry);
        }
      };
      MixpanelPersistence.prototype.upgrade = function(config) {
        var upgrade_from_old_lib = config["upgrade"], old_cookie_name, old_cookie;
        if (upgrade_from_old_lib) {
          old_cookie_name = "mp_super_properties";
          if (typeof upgrade_from_old_lib === "string") {
            old_cookie_name = upgrade_from_old_lib;
          }
          old_cookie = this.storage.parse(old_cookie_name);
          this.storage.remove(old_cookie_name);
          this.storage.remove(old_cookie_name, true);
          if (old_cookie) {
            this["props"] = _.extend(
              this["props"],
              old_cookie["all"],
              old_cookie["events"]
            );
          }
        }
        if (!config["cookie_name"] && config["name"] !== "mixpanel") {
          old_cookie_name = "mp_" + config["token"] + "_" + config["name"];
          old_cookie = this.storage.parse(old_cookie_name);
          if (old_cookie) {
            this.storage.remove(old_cookie_name);
            this.storage.remove(old_cookie_name, true);
            this.register_once(old_cookie);
          }
        }
        if (this.storage === _.localStorage) {
          old_cookie = _.cookie.parse(this.name);
          _.cookie.remove(this.name);
          _.cookie.remove(this.name, true);
          if (old_cookie) {
            this.register_once(old_cookie);
          }
        }
      };
      MixpanelPersistence.prototype.save = function() {
        if (this.disabled) {
          return;
        }
        this.storage.set(
          this.name,
          _.JSONEncode(this["props"]),
          this.expire_days,
          this.cross_subdomain,
          this.secure,
          this.cross_site,
          this.cookie_domain
        );
      };
      MixpanelPersistence.prototype.load_prop = function(key) {
        this.load();
        return this["props"][key];
      };
      MixpanelPersistence.prototype.remove = function() {
        this.storage.remove(this.name, false, this.cookie_domain);
        this.storage.remove(this.name, true, this.cookie_domain);
      };
      MixpanelPersistence.prototype.clear = function() {
        this.remove();
        this["props"] = {};
      };
      MixpanelPersistence.prototype.register_once = function(props, default_value, days) {
        if (_.isObject(props)) {
          if (typeof default_value === "undefined") {
            default_value = "None";
          }
          this.expire_days = typeof days === "undefined" ? this.default_expiry : days;
          this.load();
          _.each(props, function(val, prop) {
            if (!this["props"].hasOwnProperty(prop) || this["props"][prop] === default_value) {
              this["props"][prop] = val;
            }
          }, this);
          this.save();
          return true;
        }
        return false;
      };
      MixpanelPersistence.prototype.register = function(props, days) {
        if (_.isObject(props)) {
          this.expire_days = typeof days === "undefined" ? this.default_expiry : days;
          this.load();
          _.extend(this["props"], props);
          this.save();
          return true;
        }
        return false;
      };
      MixpanelPersistence.prototype.unregister = function(prop) {
        this.load();
        if (prop in this["props"]) {
          delete this["props"][prop];
          this.save();
        }
      };
      MixpanelPersistence.prototype.update_search_keyword = function(referrer) {
        this.register(_.info.searchInfo(referrer));
      };
      MixpanelPersistence.prototype.update_referrer_info = function(referrer) {
        this.register_once({
          "$initial_referrer": referrer || "$direct",
          "$initial_referring_domain": _.info.referringDomain(referrer) || "$direct"
        }, "");
      };
      MixpanelPersistence.prototype.get_referrer_info = function() {
        return _.strip_empty_properties({
          "$initial_referrer": this["props"]["$initial_referrer"],
          "$initial_referring_domain": this["props"]["$initial_referring_domain"]
        });
      };
      MixpanelPersistence.prototype.update_config = function(config) {
        this.default_expiry = this.expire_days = config["cookie_expiration"];
        this.set_disabled(config["disable_persistence"]);
        this.set_cookie_domain(config["cookie_domain"]);
        this.set_cross_site(config["cross_site_cookie"]);
        this.set_cross_subdomain(config["cross_subdomain_cookie"]);
        this.set_secure(config["secure_cookie"]);
      };
      MixpanelPersistence.prototype.set_disabled = function(disabled) {
        this.disabled = disabled;
        if (this.disabled) {
          this.remove();
        } else {
          this.save();
        }
      };
      MixpanelPersistence.prototype.set_cookie_domain = function(cookie_domain) {
        if (cookie_domain !== this.cookie_domain) {
          this.remove();
          this.cookie_domain = cookie_domain;
          this.save();
        }
      };
      MixpanelPersistence.prototype.set_cross_site = function(cross_site) {
        if (cross_site !== this.cross_site) {
          this.cross_site = cross_site;
          this.remove();
          this.save();
        }
      };
      MixpanelPersistence.prototype.set_cross_subdomain = function(cross_subdomain) {
        if (cross_subdomain !== this.cross_subdomain) {
          this.cross_subdomain = cross_subdomain;
          this.remove();
          this.save();
        }
      };
      MixpanelPersistence.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain;
      };
      MixpanelPersistence.prototype.set_secure = function(secure) {
        if (secure !== this.secure) {
          this.secure = secure ? true : false;
          this.remove();
          this.save();
        }
      };
      MixpanelPersistence.prototype._add_to_people_queue = function(queue, data) {
        var q_key = this._get_queue_key(queue), q_data = data[queue], set_q = this._get_or_create_queue(SET_ACTION), set_once_q = this._get_or_create_queue(SET_ONCE_ACTION), unset_q = this._get_or_create_queue(UNSET_ACTION), add_q = this._get_or_create_queue(ADD_ACTION), union_q = this._get_or_create_queue(UNION_ACTION), remove_q = this._get_or_create_queue(REMOVE_ACTION, []), append_q = this._get_or_create_queue(APPEND_ACTION, []);
        if (q_key === SET_QUEUE_KEY) {
          _.extend(set_q, q_data);
          this._pop_from_people_queue(ADD_ACTION, q_data);
          this._pop_from_people_queue(UNION_ACTION, q_data);
          this._pop_from_people_queue(UNSET_ACTION, q_data);
        } else if (q_key === SET_ONCE_QUEUE_KEY) {
          _.each(q_data, function(v, k) {
            if (!(k in set_once_q)) {
              set_once_q[k] = v;
            }
          });
          this._pop_from_people_queue(UNSET_ACTION, q_data);
        } else if (q_key === UNSET_QUEUE_KEY) {
          _.each(q_data, function(prop) {
            _.each([set_q, set_once_q, add_q, union_q], function(enqueued_obj) {
              if (prop in enqueued_obj) {
                delete enqueued_obj[prop];
              }
            });
            _.each(append_q, function(append_obj) {
              if (prop in append_obj) {
                delete append_obj[prop];
              }
            });
            unset_q[prop] = true;
          });
        } else if (q_key === ADD_QUEUE_KEY) {
          _.each(q_data, function(v, k) {
            if (k in set_q) {
              set_q[k] += v;
            } else {
              if (!(k in add_q)) {
                add_q[k] = 0;
              }
              add_q[k] += v;
            }
          }, this);
          this._pop_from_people_queue(UNSET_ACTION, q_data);
        } else if (q_key === UNION_QUEUE_KEY) {
          _.each(q_data, function(v, k) {
            if (_.isArray(v)) {
              if (!(k in union_q)) {
                union_q[k] = [];
              }
              union_q[k] = union_q[k].concat(v);
            }
          });
          this._pop_from_people_queue(UNSET_ACTION, q_data);
        } else if (q_key === REMOVE_QUEUE_KEY) {
          remove_q.push(q_data);
          this._pop_from_people_queue(APPEND_ACTION, q_data);
        } else if (q_key === APPEND_QUEUE_KEY) {
          append_q.push(q_data);
          this._pop_from_people_queue(UNSET_ACTION, q_data);
        }
        console2.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
        console2.log(data);
        this.save();
      };
      MixpanelPersistence.prototype._pop_from_people_queue = function(queue, data) {
        var q = this["props"][this._get_queue_key(queue)];
        if (!_.isUndefined(q)) {
          _.each(data, function(v, k) {
            if (queue === APPEND_ACTION || queue === REMOVE_ACTION) {
              _.each(q, function(queued_action) {
                if (queued_action[k] === v) {
                  delete queued_action[k];
                }
              });
            } else {
              delete q[k];
            }
          }, this);
        }
      };
      MixpanelPersistence.prototype.load_queue = function(queue) {
        return this.load_prop(this._get_queue_key(queue));
      };
      MixpanelPersistence.prototype._get_queue_key = function(queue) {
        if (queue === SET_ACTION) {
          return SET_QUEUE_KEY;
        } else if (queue === SET_ONCE_ACTION) {
          return SET_ONCE_QUEUE_KEY;
        } else if (queue === UNSET_ACTION) {
          return UNSET_QUEUE_KEY;
        } else if (queue === ADD_ACTION) {
          return ADD_QUEUE_KEY;
        } else if (queue === APPEND_ACTION) {
          return APPEND_QUEUE_KEY;
        } else if (queue === REMOVE_ACTION) {
          return REMOVE_QUEUE_KEY;
        } else if (queue === UNION_ACTION) {
          return UNION_QUEUE_KEY;
        } else {
          console2.error("Invalid queue:", queue);
        }
      };
      MixpanelPersistence.prototype._get_or_create_queue = function(queue, default_val) {
        var key = this._get_queue_key(queue);
        default_val = _.isUndefined(default_val) ? {} : default_val;
        return this["props"][key] || (this["props"][key] = default_val);
      };
      MixpanelPersistence.prototype.set_event_timer = function(event_name, timestamp) {
        var timers = this.load_prop(EVENT_TIMERS_KEY) || {};
        timers[event_name] = timestamp;
        this["props"][EVENT_TIMERS_KEY] = timers;
        this.save();
      };
      MixpanelPersistence.prototype.remove_event_timer = function(event_name) {
        var timers = this.load_prop(EVENT_TIMERS_KEY) || {};
        var timestamp = timers[event_name];
        if (!_.isUndefined(timestamp)) {
          delete this["props"][EVENT_TIMERS_KEY][event_name];
          this.save();
        }
        return timestamp;
      };
      var init_type;
      var mixpanel_master;
      var INIT_MODULE = 0;
      var INIT_SNIPPET = 1;
      var IDENTITY_FUNC = function(x) {
        return x;
      };
      var NOOP_FUNC = function() {
      };
      var PRIMARY_INSTANCE_NAME = "mixpanel";
      var PAYLOAD_TYPE_BASE64 = "base64";
      var PAYLOAD_TYPE_JSON = "json";
      var DEVICE_ID_PREFIX = "$device:";
      var USE_XHR = window$1.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
      var ENQUEUE_REQUESTS = !USE_XHR && userAgent.indexOf("MSIE") === -1 && userAgent.indexOf("Mozilla") === -1;
      var sendBeacon = null;
      if (navigator2["sendBeacon"]) {
        sendBeacon = function() {
          return navigator2["sendBeacon"].apply(navigator2, arguments);
        };
      }
      var DEFAULT_API_ROUTES = {
        "track": "track/",
        "engage": "engage/",
        "groups": "groups/"
      };
      var DEFAULT_CONFIG = {
        "api_host": "https://api-js.mixpanel.com",
        "api_routes": DEFAULT_API_ROUTES,
        "api_method": "POST",
        "api_transport": "XHR",
        "api_payload_format": PAYLOAD_TYPE_BASE64,
        "app_host": "https://mixpanel.com",
        "cdn": "https://cdn.mxpnl.com",
        "cross_site_cookie": false,
        "cross_subdomain_cookie": true,
        "error_reporter": NOOP_FUNC,
        "persistence": "cookie",
        "persistence_name": "",
        "cookie_domain": "",
        "cookie_name": "",
        "loaded": NOOP_FUNC,
        "mp_loader": null,
        "track_marketing": true,
        "track_pageview": false,
        "skip_first_touch_marketing": false,
        "store_google": true,
        "stop_utm_persistence": false,
        "save_referrer": true,
        "test": false,
        "verbose": false,
        "img": false,
        "debug": false,
        "track_links_timeout": 300,
        "cookie_expiration": 365,
        "upgrade": false,
        "disable_persistence": false,
        "disable_cookie": false,
        "secure_cookie": false,
        "ip": true,
        "opt_out_tracking_by_default": false,
        "opt_out_persistence_by_default": false,
        "opt_out_tracking_persistence_type": "localStorage",
        "opt_out_tracking_cookie_prefix": null,
        "property_blacklist": [],
        "xhr_headers": {},
        // { header: value, header2: value }
        "ignore_dnt": false,
        "batch_requests": true,
        "batch_size": 50,
        "batch_flush_interval_ms": 5e3,
        "batch_request_timeout_ms": 9e4,
        "batch_autostart": true,
        "hooks": {}
      };
      var DOM_LOADED = false;
      var MixpanelLib = function() {
      };
      var create_mplib = function(token, config, name) {
        var instance, target = name === PRIMARY_INSTANCE_NAME ? mixpanel_master : mixpanel_master[name];
        if (target && init_type === INIT_MODULE) {
          instance = target;
        } else {
          if (target && !_.isArray(target)) {
            console2.error("You have already initialized " + name);
            return;
          }
          instance = new MixpanelLib();
        }
        instance._cached_groups = {};
        instance._init(token, config, name);
        instance["people"] = new MixpanelPeople();
        instance["people"]._init(instance);
        if (!instance.get_config("skip_first_touch_marketing")) {
          var utm_params = _.info.campaignParams(null);
          var initial_utm_params = {};
          var has_utm = false;
          _.each(utm_params, function(utm_value, utm_key) {
            initial_utm_params["initial_" + utm_key] = utm_value;
            if (utm_value) {
              has_utm = true;
            }
          });
          if (has_utm) {
            instance["people"].set_once(initial_utm_params);
          }
        }
        Config.DEBUG = Config.DEBUG || instance.get_config("debug");
        if (!_.isUndefined(target) && _.isArray(target)) {
          instance._execute_array.call(instance["people"], target["people"]);
          instance._execute_array(target);
        }
        return instance;
      };
      MixpanelLib.prototype.init = function(token, config, name) {
        if (_.isUndefined(name)) {
          this.report_error("You must name your new library: init(token, config, name)");
          return;
        }
        if (name === PRIMARY_INSTANCE_NAME) {
          this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
          return;
        }
        var instance = create_mplib(token, config, name);
        mixpanel_master[name] = instance;
        instance._loaded();
        return instance;
      };
      MixpanelLib.prototype._init = function(token, config, name) {
        config = config || {};
        this["__loaded"] = true;
        this["config"] = {};
        var variable_features = {};
        if (!("api_payload_format" in config)) {
          var api_host = config["api_host"] || DEFAULT_CONFIG["api_host"];
          if (api_host.match(/\.mixpanel\.com/)) {
            variable_features["api_payload_format"] = PAYLOAD_TYPE_JSON;
          }
        }
        this.set_config(_.extend({}, DEFAULT_CONFIG, variable_features, config, {
          "name": name,
          "token": token,
          "callback_fn": (name === PRIMARY_INSTANCE_NAME ? name : PRIMARY_INSTANCE_NAME + "." + name) + "._jsc"
        }));
        this["_jsc"] = NOOP_FUNC;
        this.__dom_loaded_queue = [];
        this.__request_queue = [];
        this.__disabled_events = [];
        this._flags = {
          "disable_all_events": false,
          "identify_called": false
        };
        this.request_batchers = {};
        this._batch_requests = this.get_config("batch_requests");
        if (this._batch_requests) {
          if (!_.localStorage.is_supported(true) || !USE_XHR) {
            this._batch_requests = false;
            console2.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
            _.each(this.get_batcher_configs(), function(batcher_config) {
              console2.log("Clearing batch queue " + batcher_config.queue_key);
              _.localStorage.remove(batcher_config.queue_key);
            });
          } else {
            this.init_batchers();
            if (sendBeacon && window$1.addEventListener) {
              var flush_on_unload = _.bind(function() {
                if (!this.request_batchers.events.stopped) {
                  this.request_batchers.events.flush({ unloading: true });
                }
              }, this);
              window$1.addEventListener("pagehide", function(ev) {
                if (ev["persisted"]) {
                  flush_on_unload();
                }
              });
              window$1.addEventListener("visibilitychange", function() {
                if (document$1["visibilityState"] === "hidden") {
                  flush_on_unload();
                }
              });
            }
          }
        }
        this["persistence"] = this["cookie"] = new MixpanelPersistence(this["config"]);
        this.unpersisted_superprops = {};
        this._gdpr_init();
        var uuid = _.UUID();
        if (!this.get_distinct_id()) {
          this.register_once({
            "distinct_id": DEVICE_ID_PREFIX + uuid,
            "$device_id": uuid
          }, "");
        }
        var track_pageview_option = this.get_config("track_pageview");
        if (track_pageview_option) {
          this._init_url_change_tracking(track_pageview_option);
        }
      };
      MixpanelLib.prototype._loaded = function() {
        this.get_config("loaded")(this);
        this._set_default_superprops();
        this["people"].set_once(this["persistence"].get_referrer_info());
        if (this.get_config("store_google") && this.get_config("stop_utm_persistence")) {
          var utm_params = _.info.campaignParams(null);
          _.each(utm_params, function(_utm_value, utm_key) {
            this.unregister(utm_key);
          }.bind(this));
        }
      };
      MixpanelLib.prototype._set_default_superprops = function() {
        this["persistence"].update_search_keyword(document$1.referrer);
        if (this.get_config("store_google") && !this.get_config("stop_utm_persistence")) {
          this.register(_.info.campaignParams());
        }
        if (this.get_config("save_referrer")) {
          this["persistence"].update_referrer_info(document$1.referrer);
        }
      };
      MixpanelLib.prototype._dom_loaded = function() {
        _.each(this.__dom_loaded_queue, function(item) {
          this._track_dom.apply(this, item);
        }, this);
        if (!this.has_opted_out_tracking()) {
          _.each(this.__request_queue, function(item) {
            this._send_request.apply(this, item);
          }, this);
        }
        delete this.__dom_loaded_queue;
        delete this.__request_queue;
      };
      MixpanelLib.prototype._track_dom = function(DomClass, args) {
        if (this.get_config("img")) {
          this.report_error("You can't use DOM tracking functions with img = true.");
          return false;
        }
        if (!DOM_LOADED) {
          this.__dom_loaded_queue.push([DomClass, args]);
          return false;
        }
        var dt = new DomClass().init(this);
        return dt.track.apply(dt, args);
      };
      MixpanelLib.prototype._init_url_change_tracking = function(track_pageview_option) {
        var previous_tracked_url = "";
        var tracked = this.track_pageview();
        if (tracked) {
          previous_tracked_url = _.info.currentUrl();
        }
        if (_.include(["full-url", "url-with-path-and-query-string", "url-with-path"], track_pageview_option)) {
          window$1.addEventListener("popstate", function() {
            window$1.dispatchEvent(new Event("mp_locationchange"));
          });
          window$1.addEventListener("hashchange", function() {
            window$1.dispatchEvent(new Event("mp_locationchange"));
          });
          var nativePushState = window$1.history.pushState;
          if (typeof nativePushState === "function") {
            window$1.history.pushState = function(state, unused, url) {
              nativePushState.call(window$1.history, state, unused, url);
              window$1.dispatchEvent(new Event("mp_locationchange"));
            };
          }
          var nativeReplaceState = window$1.history.replaceState;
          if (typeof nativeReplaceState === "function") {
            window$1.history.replaceState = function(state, unused, url) {
              nativeReplaceState.call(window$1.history, state, unused, url);
              window$1.dispatchEvent(new Event("mp_locationchange"));
            };
          }
          window$1.addEventListener("mp_locationchange", function() {
            var current_url = _.info.currentUrl();
            var should_track = false;
            if (track_pageview_option === "full-url") {
              should_track = current_url !== previous_tracked_url;
            } else if (track_pageview_option === "url-with-path-and-query-string") {
              should_track = current_url.split("#")[0] !== previous_tracked_url.split("#")[0];
            } else if (track_pageview_option === "url-with-path") {
              should_track = current_url.split("#")[0].split("?")[0] !== previous_tracked_url.split("#")[0].split("?")[0];
            }
            if (should_track) {
              var tracked2 = this.track_pageview();
              if (tracked2) {
                previous_tracked_url = current_url;
              }
            }
          }.bind(this));
        }
      };
      MixpanelLib.prototype._prepare_callback = function(callback, data) {
        if (_.isUndefined(callback)) {
          return null;
        }
        if (USE_XHR) {
          var callback_function = function(response) {
            callback(response, data);
          };
          return callback_function;
        } else {
          var jsc = this["_jsc"];
          var randomized_cb = "" + Math.floor(Math.random() * 1e8);
          var callback_string = this.get_config("callback_fn") + "[" + randomized_cb + "]";
          jsc[randomized_cb] = function(response) {
            delete jsc[randomized_cb];
            callback(response, data);
          };
          return callback_string;
        }
      };
      MixpanelLib.prototype._send_request = function(url, data, options, callback) {
        var succeeded = true;
        if (ENQUEUE_REQUESTS) {
          this.__request_queue.push(arguments);
          return succeeded;
        }
        var DEFAULT_OPTIONS = {
          method: this.get_config("api_method"),
          transport: this.get_config("api_transport"),
          verbose: this.get_config("verbose")
        };
        var body_data = null;
        if (!callback && (_.isFunction(options) || typeof options === "string")) {
          callback = options;
          options = null;
        }
        options = _.extend(DEFAULT_OPTIONS, options || {});
        if (!USE_XHR) {
          options.method = "GET";
        }
        var use_post = options.method === "POST";
        var use_sendBeacon = sendBeacon && use_post && options.transport.toLowerCase() === "sendbeacon";
        var verbose_mode = options.verbose;
        if (data["verbose"]) {
          verbose_mode = true;
        }
        if (this.get_config("test")) {
          data["test"] = 1;
        }
        if (verbose_mode) {
          data["verbose"] = 1;
        }
        if (this.get_config("img")) {
          data["img"] = 1;
        }
        if (!USE_XHR) {
          if (callback) {
            data["callback"] = callback;
          } else if (verbose_mode || this.get_config("test")) {
            data["callback"] = "(function(){})";
          }
        }
        data["ip"] = this.get_config("ip") ? 1 : 0;
        data["_"] = (/* @__PURE__ */ new Date()).getTime().toString();
        if (use_post) {
          body_data = "data=" + encodeURIComponent(data["data"]);
          delete data["data"];
        }
        url += "?" + _.HTTPBuildQuery(data);
        var lib = this;
        if ("img" in data) {
          var img = document$1.createElement("img");
          img.src = url;
          document$1.body.appendChild(img);
        } else if (use_sendBeacon) {
          try {
            succeeded = sendBeacon(url, body_data);
          } catch (e) {
            lib.report_error(e);
            succeeded = false;
          }
          try {
            if (callback) {
              callback(succeeded ? 1 : 0);
            }
          } catch (e) {
            lib.report_error(e);
          }
        } else if (USE_XHR) {
          try {
            var req = new XMLHttpRequest();
            req.open(options.method, url, true);
            var headers = this.get_config("xhr_headers");
            if (use_post) {
              headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            _.each(headers, function(headerValue, headerName) {
              req.setRequestHeader(headerName, headerValue);
            });
            if (options.timeout_ms && typeof req.timeout !== "undefined") {
              req.timeout = options.timeout_ms;
              var start_time = (/* @__PURE__ */ new Date()).getTime();
            }
            req.withCredentials = true;
            req.onreadystatechange = function() {
              if (req.readyState === 4) {
                if (req.status === 200) {
                  if (callback) {
                    if (verbose_mode) {
                      var response;
                      try {
                        response = _.JSONDecode(req.responseText);
                      } catch (e) {
                        lib.report_error(e);
                        if (options.ignore_json_errors) {
                          response = req.responseText;
                        } else {
                          return;
                        }
                      }
                      callback(response);
                    } else {
                      callback(Number(req.responseText));
                    }
                  }
                } else {
                  var error;
                  if (req.timeout && !req.status && (/* @__PURE__ */ new Date()).getTime() - start_time >= req.timeout) {
                    error = "timeout";
                  } else {
                    error = "Bad HTTP status: " + req.status + " " + req.statusText;
                  }
                  lib.report_error(error);
                  if (callback) {
                    if (verbose_mode) {
                      callback({ status: 0, error, xhr_req: req });
                    } else {
                      callback(0);
                    }
                  }
                }
              }
            };
            req.send(body_data);
          } catch (e) {
            lib.report_error(e);
            succeeded = false;
          }
        } else {
          var script = document$1.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.defer = true;
          script.src = url;
          var s = document$1.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(script, s);
        }
        return succeeded;
      };
      MixpanelLib.prototype._execute_array = function(array) {
        var fn_name, alias_calls = [], other_calls = [], tracking_calls = [];
        _.each(array, function(item) {
          if (item) {
            fn_name = item[0];
            if (_.isArray(fn_name)) {
              tracking_calls.push(item);
            } else if (typeof item === "function") {
              item.call(this);
            } else if (_.isArray(item) && fn_name === "alias") {
              alias_calls.push(item);
            } else if (_.isArray(item) && fn_name.indexOf("track") !== -1 && typeof this[fn_name] === "function") {
              tracking_calls.push(item);
            } else {
              other_calls.push(item);
            }
          }
        }, this);
        var execute = function(calls, context) {
          _.each(calls, function(item) {
            if (_.isArray(item[0])) {
              var caller = context;
              _.each(item, function(call) {
                caller = caller[call[0]].apply(caller, call.slice(1));
              });
            } else {
              this[item[0]].apply(this, item.slice(1));
            }
          }, context);
        };
        execute(alias_calls, this);
        execute(other_calls, this);
        execute(tracking_calls, this);
      };
      MixpanelLib.prototype.are_batchers_initialized = function() {
        return !!this.request_batchers.events;
      };
      MixpanelLib.prototype.get_batcher_configs = function() {
        var queue_prefix = "__mpq_" + this.get_config("token");
        var api_routes = this.get_config("api_routes");
        this._batcher_configs = this._batcher_configs || {
          events: { type: "events", endpoint: "/" + api_routes["track"], queue_key: queue_prefix + "_ev" },
          people: { type: "people", endpoint: "/" + api_routes["engage"], queue_key: queue_prefix + "_pp" },
          groups: { type: "groups", endpoint: "/" + api_routes["groups"], queue_key: queue_prefix + "_gr" }
        };
        return this._batcher_configs;
      };
      MixpanelLib.prototype.init_batchers = function() {
        if (!this.are_batchers_initialized()) {
          var batcher_for = _.bind(function(attrs) {
            return new RequestBatcher(
              attrs.queue_key,
              {
                libConfig: this["config"],
                sendRequestFunc: _.bind(function(data, options, cb) {
                  this._send_request(
                    this.get_config("api_host") + attrs.endpoint,
                    this._encode_data_for_request(data),
                    options,
                    this._prepare_callback(cb, data)
                  );
                }, this),
                beforeSendHook: _.bind(function(item) {
                  return this._run_hook("before_send_" + attrs.type, item);
                }, this),
                errorReporter: this.get_config("error_reporter"),
                stopAllBatchingFunc: _.bind(this.stop_batch_senders, this)
              }
            );
          }, this);
          var batcher_configs = this.get_batcher_configs();
          this.request_batchers = {
            events: batcher_for(batcher_configs.events),
            people: batcher_for(batcher_configs.people),
            groups: batcher_for(batcher_configs.groups)
          };
        }
        if (this.get_config("batch_autostart")) {
          this.start_batch_senders();
        }
      };
      MixpanelLib.prototype.start_batch_senders = function() {
        this._batchers_were_started = true;
        if (this.are_batchers_initialized()) {
          this._batch_requests = true;
          _.each(this.request_batchers, function(batcher) {
            batcher.start();
          });
        }
      };
      MixpanelLib.prototype.stop_batch_senders = function() {
        this._batch_requests = false;
        _.each(this.request_batchers, function(batcher) {
          batcher.stop();
          batcher.clear();
        });
      };
      MixpanelLib.prototype.push = function(item) {
        this._execute_array([item]);
      };
      MixpanelLib.prototype.disable = function(events) {
        if (typeof events === "undefined") {
          this._flags.disable_all_events = true;
        } else {
          this.__disabled_events = this.__disabled_events.concat(events);
        }
      };
      MixpanelLib.prototype._encode_data_for_request = function(data) {
        var encoded_data = _.JSONEncode(data);
        if (this.get_config("api_payload_format") === PAYLOAD_TYPE_BASE64) {
          encoded_data = _.base64Encode(encoded_data);
        }
        return { "data": encoded_data };
      };
      MixpanelLib.prototype._track_or_batch = function(options, callback) {
        var truncated_data = _.truncate(options.data, 255);
        var endpoint = options.endpoint;
        var batcher = options.batcher;
        var should_send_immediately = options.should_send_immediately;
        var send_request_options = options.send_request_options || {};
        callback = callback || NOOP_FUNC;
        var request_enqueued_or_initiated = true;
        var send_request_immediately = _.bind(function() {
          if (!send_request_options.skip_hooks) {
            truncated_data = this._run_hook("before_send_" + options.type, truncated_data);
          }
          if (truncated_data) {
            console2.log("MIXPANEL REQUEST:");
            console2.log(truncated_data);
            return this._send_request(
              endpoint,
              this._encode_data_for_request(truncated_data),
              send_request_options,
              this._prepare_callback(callback, truncated_data)
            );
          } else {
            return null;
          }
        }, this);
        if (this._batch_requests && !should_send_immediately) {
          batcher.enqueue(truncated_data, function(succeeded) {
            if (succeeded) {
              callback(1, truncated_data);
            } else {
              send_request_immediately();
            }
          });
        } else {
          request_enqueued_or_initiated = send_request_immediately();
        }
        return request_enqueued_or_initiated && truncated_data;
      };
      MixpanelLib.prototype.track = addOptOutCheckMixpanelLib(function(event_name, properties, options, callback) {
        if (!callback && typeof options === "function") {
          callback = options;
          options = null;
        }
        options = options || {};
        var transport = options["transport"];
        if (transport) {
          options.transport = transport;
        }
        var should_send_immediately = options["send_immediately"];
        if (typeof callback !== "function") {
          callback = NOOP_FUNC;
        }
        if (_.isUndefined(event_name)) {
          this.report_error("No event name provided to mixpanel.track");
          return;
        }
        if (this._event_is_disabled(event_name)) {
          callback(0);
          return;
        }
        properties = _.extend({}, properties);
        properties["token"] = this.get_config("token");
        var start_timestamp = this["persistence"].remove_event_timer(event_name);
        if (!_.isUndefined(start_timestamp)) {
          var duration_in_ms = (/* @__PURE__ */ new Date()).getTime() - start_timestamp;
          properties["$duration"] = parseFloat((duration_in_ms / 1e3).toFixed(3));
        }
        this._set_default_superprops();
        var marketing_properties = this.get_config("track_marketing") ? _.info.marketingParams() : {};
        properties = _.extend(
          {},
          _.info.properties({ "mp_loader": this.get_config("mp_loader") }),
          marketing_properties,
          this["persistence"].properties(),
          this.unpersisted_superprops,
          properties
        );
        var property_blacklist = this.get_config("property_blacklist");
        if (_.isArray(property_blacklist)) {
          _.each(property_blacklist, function(blacklisted_prop) {
            delete properties[blacklisted_prop];
          });
        } else {
          this.report_error("Invalid value for property_blacklist config: " + property_blacklist);
        }
        var data = {
          "event": event_name,
          "properties": properties
        };
        var ret = this._track_or_batch({
          type: "events",
          data,
          endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes")["track"],
          batcher: this.request_batchers.events,
          should_send_immediately,
          send_request_options: options
        }, callback);
        return ret;
      });
      MixpanelLib.prototype.set_group = addOptOutCheckMixpanelLib(function(group_key, group_ids, callback) {
        if (!_.isArray(group_ids)) {
          group_ids = [group_ids];
        }
        var prop = {};
        prop[group_key] = group_ids;
        this.register(prop);
        return this["people"].set(group_key, group_ids, callback);
      });
      MixpanelLib.prototype.add_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
        var old_values = this.get_property(group_key);
        var prop = {};
        if (old_values === void 0) {
          prop[group_key] = [group_id];
          this.register(prop);
        } else {
          if (old_values.indexOf(group_id) === -1) {
            old_values.push(group_id);
            prop[group_key] = old_values;
            this.register(prop);
          }
        }
        return this["people"].union(group_key, group_id, callback);
      });
      MixpanelLib.prototype.remove_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
        var old_value = this.get_property(group_key);
        if (old_value !== void 0) {
          var idx = old_value.indexOf(group_id);
          if (idx > -1) {
            old_value.splice(idx, 1);
            this.register({ group_key: old_value });
          }
          if (old_value.length === 0) {
            this.unregister(group_key);
          }
        }
        return this["people"].remove(group_key, group_id, callback);
      });
      MixpanelLib.prototype.track_with_groups = addOptOutCheckMixpanelLib(function(event_name, properties, groups, callback) {
        var tracking_props = _.extend({}, properties || {});
        _.each(groups, function(v, k) {
          if (v !== null && v !== void 0) {
            tracking_props[k] = v;
          }
        });
        return this.track(event_name, tracking_props, callback);
      });
      MixpanelLib.prototype._create_map_key = function(group_key, group_id) {
        return group_key + "_" + JSON.stringify(group_id);
      };
      MixpanelLib.prototype._remove_group_from_cache = function(group_key, group_id) {
        delete this._cached_groups[this._create_map_key(group_key, group_id)];
      };
      MixpanelLib.prototype.get_group = function(group_key, group_id) {
        var map_key = this._create_map_key(group_key, group_id);
        var group2 = this._cached_groups[map_key];
        if (group2 === void 0 || group2._group_key !== group_key || group2._group_id !== group_id) {
          group2 = new MixpanelGroup();
          group2._init(this, group_key, group_id);
          this._cached_groups[map_key] = group2;
        }
        return group2;
      };
      MixpanelLib.prototype.track_pageview = addOptOutCheckMixpanelLib(function(properties, options) {
        if (typeof properties !== "object") {
          properties = {};
        }
        options = options || {};
        var event_name = options["event_name"] || "$mp_web_page_view";
        var default_page_properties = _.extend(
          _.info.mpPageViewProperties(),
          _.info.campaignParams(),
          _.info.clickParams()
        );
        var event_properties = _.extend(
          {},
          default_page_properties,
          properties
        );
        return this.track(event_name, event_properties);
      });
      MixpanelLib.prototype.track_links = function() {
        return this._track_dom.call(this, LinkTracker, arguments);
      };
      MixpanelLib.prototype.track_forms = function() {
        return this._track_dom.call(this, FormTracker, arguments);
      };
      MixpanelLib.prototype.time_event = function(event_name) {
        if (_.isUndefined(event_name)) {
          this.report_error("No event name provided to mixpanel.time_event");
          return;
        }
        if (this._event_is_disabled(event_name)) {
          return;
        }
        this["persistence"].set_event_timer(event_name, (/* @__PURE__ */ new Date()).getTime());
      };
      var REGISTER_DEFAULTS = {
        "persistent": true
      };
      var options_for_register = function(days_or_options) {
        var options;
        if (_.isObject(days_or_options)) {
          options = days_or_options;
        } else if (!_.isUndefined(days_or_options)) {
          options = { "days": days_or_options };
        } else {
          options = {};
        }
        return _.extend({}, REGISTER_DEFAULTS, options);
      };
      MixpanelLib.prototype.register = function(props, days_or_options) {
        var options = options_for_register(days_or_options);
        if (options["persistent"]) {
          this["persistence"].register(props, options["days"]);
        } else {
          _.extend(this.unpersisted_superprops, props);
        }
      };
      MixpanelLib.prototype.register_once = function(props, default_value, days_or_options) {
        var options = options_for_register(days_or_options);
        if (options["persistent"]) {
          this["persistence"].register_once(props, default_value, options["days"]);
        } else {
          if (typeof default_value === "undefined") {
            default_value = "None";
          }
          _.each(props, function(val, prop) {
            if (!this.unpersisted_superprops.hasOwnProperty(prop) || this.unpersisted_superprops[prop] === default_value) {
              this.unpersisted_superprops[prop] = val;
            }
          }, this);
        }
      };
      MixpanelLib.prototype.unregister = function(property, options) {
        options = options_for_register(options);
        if (options["persistent"]) {
          this["persistence"].unregister(property);
        } else {
          delete this.unpersisted_superprops[property];
        }
      };
      MixpanelLib.prototype._register_single = function(prop, value) {
        var props = {};
        props[prop] = value;
        this.register(props);
      };
      MixpanelLib.prototype.identify = function(new_distinct_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
        var previous_distinct_id = this.get_distinct_id();
        if (new_distinct_id && previous_distinct_id !== new_distinct_id) {
          if (typeof new_distinct_id === "string" && new_distinct_id.indexOf(DEVICE_ID_PREFIX) === 0) {
            this.report_error("distinct_id cannot have $device: prefix");
            return -1;
          }
          this.register({ "$user_id": new_distinct_id });
        }
        if (!this.get_property("$device_id")) {
          var device_id = previous_distinct_id;
          this.register_once({
            "$had_persisted_distinct_id": true,
            "$device_id": device_id
          }, "");
        }
        if (new_distinct_id !== previous_distinct_id && new_distinct_id !== this.get_property(ALIAS_ID_KEY)) {
          this.unregister(ALIAS_ID_KEY);
          this.register({ "distinct_id": new_distinct_id });
        }
        this._flags.identify_called = true;
        this["people"]._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback);
        if (new_distinct_id !== previous_distinct_id) {
          this.track("$identify", {
            "distinct_id": new_distinct_id,
            "$anon_distinct_id": previous_distinct_id
          }, { skip_hooks: true });
        }
      };
      MixpanelLib.prototype.reset = function() {
        this["persistence"].clear();
        this._flags.identify_called = false;
        var uuid = _.UUID();
        this.register_once({
          "distinct_id": DEVICE_ID_PREFIX + uuid,
          "$device_id": uuid
        }, "");
      };
      MixpanelLib.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id");
      };
      MixpanelLib.prototype.alias = function(alias, original) {
        if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
          this.report_error("Attempting to create alias for existing People user - aborting.");
          return -2;
        }
        var _this = this;
        if (_.isUndefined(original)) {
          original = this.get_distinct_id();
        }
        if (alias !== original) {
          this._register_single(ALIAS_ID_KEY, alias);
          return this.track("$create_alias", {
            "alias": alias,
            "distinct_id": original
          }, {
            skip_hooks: true
          }, function() {
            _this.identify(alias);
          });
        } else {
          this.report_error("alias matches current distinct_id - skipping api call.");
          this.identify(alias);
          return -1;
        }
      };
      MixpanelLib.prototype.name_tag = function(name_tag) {
        this._register_single("mp_name_tag", name_tag);
      };
      MixpanelLib.prototype.set_config = function(config) {
        if (_.isObject(config)) {
          _.extend(this["config"], config);
          var new_batch_size = config["batch_size"];
          if (new_batch_size) {
            _.each(this.request_batchers, function(batcher) {
              batcher.resetBatchSize();
            });
          }
          if (!this.get_config("persistence_name")) {
            this["config"]["persistence_name"] = this["config"]["cookie_name"];
          }
          if (!this.get_config("disable_persistence")) {
            this["config"]["disable_persistence"] = this["config"]["disable_cookie"];
          }
          if (this["persistence"]) {
            this["persistence"].update_config(this["config"]);
          }
          Config.DEBUG = Config.DEBUG || this.get_config("debug");
        }
      };
      MixpanelLib.prototype.get_config = function(prop_name) {
        return this["config"][prop_name];
      };
      MixpanelLib.prototype._run_hook = function(hook_name) {
        var ret = (this["config"]["hooks"][hook_name] || IDENTITY_FUNC).apply(this, slice.call(arguments, 1));
        if (typeof ret === "undefined") {
          this.report_error(hook_name + " hook did not return a value");
          ret = null;
        }
        return ret;
      };
      MixpanelLib.prototype.get_property = function(property_name) {
        return this["persistence"].load_prop([property_name]);
      };
      MixpanelLib.prototype.toString = function() {
        var name = this.get_config("name");
        if (name !== PRIMARY_INSTANCE_NAME) {
          name = PRIMARY_INSTANCE_NAME + "." + name;
        }
        return name;
      };
      MixpanelLib.prototype._event_is_disabled = function(event_name) {
        return _.isBlockedUA(userAgent) || this._flags.disable_all_events || _.include(this.__disabled_events, event_name);
      };
      MixpanelLib.prototype._gdpr_init = function() {
        var is_localStorage_requested = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
        if (is_localStorage_requested && _.localStorage.is_supported()) {
          if (!this.has_opted_in_tracking() && this.has_opted_in_tracking({ "persistence_type": "cookie" })) {
            this.opt_in_tracking({ "enable_persistence": false });
          }
          if (!this.has_opted_out_tracking() && this.has_opted_out_tracking({ "persistence_type": "cookie" })) {
            this.opt_out_tracking({ "clear_persistence": false });
          }
          this.clear_opt_in_out_tracking({
            "persistence_type": "cookie",
            "enable_persistence": false
          });
        }
        if (this.has_opted_out_tracking()) {
          this._gdpr_update_persistence({ "clear_persistence": true });
        } else if (!this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || _.cookie.get("mp_optout"))) {
          _.cookie.remove("mp_optout");
          this.opt_out_tracking({
            "clear_persistence": this.get_config("opt_out_persistence_by_default")
          });
        }
      };
      MixpanelLib.prototype._gdpr_update_persistence = function(options) {
        var disabled;
        if (options && options["clear_persistence"]) {
          disabled = true;
        } else if (options && options["enable_persistence"]) {
          disabled = false;
        } else {
          return;
        }
        if (!this.get_config("disable_persistence") && this["persistence"].disabled !== disabled) {
          this["persistence"].set_disabled(disabled);
        }
        if (disabled) {
          this.stop_batch_senders();
        } else {
          if (this._batchers_were_started) {
            this.start_batch_senders();
          }
        }
      };
      MixpanelLib.prototype._gdpr_call_func = function(func, options) {
        options = _.extend({
          "track": _.bind(this.track, this),
          "persistence_type": this.get_config("opt_out_tracking_persistence_type"),
          "cookie_prefix": this.get_config("opt_out_tracking_cookie_prefix"),
          "cookie_expiration": this.get_config("cookie_expiration"),
          "cross_site_cookie": this.get_config("cross_site_cookie"),
          "cross_subdomain_cookie": this.get_config("cross_subdomain_cookie"),
          "cookie_domain": this.get_config("cookie_domain"),
          "secure_cookie": this.get_config("secure_cookie"),
          "ignore_dnt": this.get_config("ignore_dnt")
        }, options);
        if (!_.localStorage.is_supported()) {
          options["persistence_type"] = "cookie";
        }
        return func(this.get_config("token"), {
          track: options["track"],
          trackEventName: options["track_event_name"],
          trackProperties: options["track_properties"],
          persistenceType: options["persistence_type"],
          persistencePrefix: options["cookie_prefix"],
          cookieDomain: options["cookie_domain"],
          cookieExpiration: options["cookie_expiration"],
          crossSiteCookie: options["cross_site_cookie"],
          crossSubdomainCookie: options["cross_subdomain_cookie"],
          secureCookie: options["secure_cookie"],
          ignoreDnt: options["ignore_dnt"]
        });
      };
      MixpanelLib.prototype.opt_in_tracking = function(options) {
        options = _.extend({
          "enable_persistence": true
        }, options);
        this._gdpr_call_func(optIn, options);
        this._gdpr_update_persistence(options);
      };
      MixpanelLib.prototype.opt_out_tracking = function(options) {
        options = _.extend({
          "clear_persistence": true,
          "delete_user": true
        }, options);
        if (options["delete_user"] && this["people"] && this["people"]._identify_called()) {
          this["people"].delete_user();
          this["people"].clear_charges();
        }
        this._gdpr_call_func(optOut, options);
        this._gdpr_update_persistence(options);
      };
      MixpanelLib.prototype.has_opted_in_tracking = function(options) {
        return this._gdpr_call_func(hasOptedIn, options);
      };
      MixpanelLib.prototype.has_opted_out_tracking = function(options) {
        return this._gdpr_call_func(hasOptedOut, options);
      };
      MixpanelLib.prototype.clear_opt_in_out_tracking = function(options) {
        options = _.extend({
          "enable_persistence": true
        }, options);
        this._gdpr_call_func(clearOptInOut, options);
        this._gdpr_update_persistence(options);
      };
      MixpanelLib.prototype.report_error = function(msg, err) {
        console2.error.apply(console2.error, arguments);
        try {
          if (!err && !(msg instanceof Error)) {
            msg = new Error(msg);
          }
          this.get_config("error_reporter")(msg, err);
        } catch (err2) {
          console2.error(err2);
        }
      };
      MixpanelLib.prototype["init"] = MixpanelLib.prototype.init;
      MixpanelLib.prototype["reset"] = MixpanelLib.prototype.reset;
      MixpanelLib.prototype["disable"] = MixpanelLib.prototype.disable;
      MixpanelLib.prototype["time_event"] = MixpanelLib.prototype.time_event;
      MixpanelLib.prototype["track"] = MixpanelLib.prototype.track;
      MixpanelLib.prototype["track_links"] = MixpanelLib.prototype.track_links;
      MixpanelLib.prototype["track_forms"] = MixpanelLib.prototype.track_forms;
      MixpanelLib.prototype["track_pageview"] = MixpanelLib.prototype.track_pageview;
      MixpanelLib.prototype["register"] = MixpanelLib.prototype.register;
      MixpanelLib.prototype["register_once"] = MixpanelLib.prototype.register_once;
      MixpanelLib.prototype["unregister"] = MixpanelLib.prototype.unregister;
      MixpanelLib.prototype["identify"] = MixpanelLib.prototype.identify;
      MixpanelLib.prototype["alias"] = MixpanelLib.prototype.alias;
      MixpanelLib.prototype["name_tag"] = MixpanelLib.prototype.name_tag;
      MixpanelLib.prototype["set_config"] = MixpanelLib.prototype.set_config;
      MixpanelLib.prototype["get_config"] = MixpanelLib.prototype.get_config;
      MixpanelLib.prototype["get_property"] = MixpanelLib.prototype.get_property;
      MixpanelLib.prototype["get_distinct_id"] = MixpanelLib.prototype.get_distinct_id;
      MixpanelLib.prototype["toString"] = MixpanelLib.prototype.toString;
      MixpanelLib.prototype["opt_out_tracking"] = MixpanelLib.prototype.opt_out_tracking;
      MixpanelLib.prototype["opt_in_tracking"] = MixpanelLib.prototype.opt_in_tracking;
      MixpanelLib.prototype["has_opted_out_tracking"] = MixpanelLib.prototype.has_opted_out_tracking;
      MixpanelLib.prototype["has_opted_in_tracking"] = MixpanelLib.prototype.has_opted_in_tracking;
      MixpanelLib.prototype["clear_opt_in_out_tracking"] = MixpanelLib.prototype.clear_opt_in_out_tracking;
      MixpanelLib.prototype["get_group"] = MixpanelLib.prototype.get_group;
      MixpanelLib.prototype["set_group"] = MixpanelLib.prototype.set_group;
      MixpanelLib.prototype["add_group"] = MixpanelLib.prototype.add_group;
      MixpanelLib.prototype["remove_group"] = MixpanelLib.prototype.remove_group;
      MixpanelLib.prototype["track_with_groups"] = MixpanelLib.prototype.track_with_groups;
      MixpanelLib.prototype["start_batch_senders"] = MixpanelLib.prototype.start_batch_senders;
      MixpanelLib.prototype["stop_batch_senders"] = MixpanelLib.prototype.stop_batch_senders;
      MixpanelLib.prototype["DEFAULT_API_ROUTES"] = DEFAULT_API_ROUTES;
      MixpanelPersistence.prototype["properties"] = MixpanelPersistence.prototype.properties;
      MixpanelPersistence.prototype["update_search_keyword"] = MixpanelPersistence.prototype.update_search_keyword;
      MixpanelPersistence.prototype["update_referrer_info"] = MixpanelPersistence.prototype.update_referrer_info;
      MixpanelPersistence.prototype["get_cross_subdomain"] = MixpanelPersistence.prototype.get_cross_subdomain;
      MixpanelPersistence.prototype["clear"] = MixpanelPersistence.prototype.clear;
      var instances = {};
      var extend_mp = function() {
        _.each(instances, function(instance, name) {
          if (name !== PRIMARY_INSTANCE_NAME) {
            mixpanel_master[name] = instance;
          }
        });
        mixpanel_master["_"] = _;
      };
      var override_mp_init_func = function() {
        mixpanel_master["init"] = function(token, config, name) {
          if (name) {
            if (!mixpanel_master[name]) {
              mixpanel_master[name] = instances[name] = create_mplib(token, config, name);
              mixpanel_master[name]._loaded();
            }
            return mixpanel_master[name];
          } else {
            var instance = mixpanel_master;
            if (instances[PRIMARY_INSTANCE_NAME]) {
              instance = instances[PRIMARY_INSTANCE_NAME];
            } else if (token) {
              instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME);
              instance._loaded();
              instances[PRIMARY_INSTANCE_NAME] = instance;
            }
            mixpanel_master = instance;
            if (init_type === INIT_SNIPPET) {
              window$1[PRIMARY_INSTANCE_NAME] = mixpanel_master;
            }
            extend_mp();
          }
        };
      };
      var add_dom_loaded_handler = function() {
        function dom_loaded_handler() {
          if (dom_loaded_handler.done) {
            return;
          }
          dom_loaded_handler.done = true;
          DOM_LOADED = true;
          ENQUEUE_REQUESTS = false;
          _.each(instances, function(inst) {
            inst._dom_loaded();
          });
        }
        function do_scroll_check() {
          try {
            document$1.documentElement.doScroll("left");
          } catch (e) {
            setTimeout(do_scroll_check, 1);
            return;
          }
          dom_loaded_handler();
        }
        if (document$1.addEventListener) {
          if (document$1.readyState === "complete") {
            dom_loaded_handler();
          } else {
            document$1.addEventListener("DOMContentLoaded", dom_loaded_handler, false);
          }
        } else if (document$1.attachEvent) {
          document$1.attachEvent("onreadystatechange", dom_loaded_handler);
          var toplevel = false;
          try {
            toplevel = window$1.frameElement === null;
          } catch (e) {
          }
          if (document$1.documentElement.doScroll && toplevel) {
            do_scroll_check();
          }
        }
        _.register_event(window$1, "load", dom_loaded_handler, true);
      };
      function init_as_module() {
        init_type = INIT_MODULE;
        mixpanel_master = new MixpanelLib();
        override_mp_init_func();
        mixpanel_master["init"]();
        add_dom_loaded_handler();
        return mixpanel_master;
      }
      var mixpanel = init_as_module();
      module.exports = mixpanel;
    }
  });

  // src/lib/analytics.js
  var require_analytics = __commonJS({
    "src/lib/analytics.js"(exports) {
      init_manifest();
      var import_mixpanel_browser = __toESM(require_mixpanel_cjs());
      var useAnalytics = !!manifest_default.mixpanelToken;
      if (useAnalytics) {
        import_mixpanel_browser.default.init(manifest_default.mixpanelToken);
      }
      var appName = "RingCentral CRM Extension";
      var version = manifest_default.version;
      exports.reset = function reset2() {
        import_mixpanel_browser.default.reset();
      };
      exports.identify = function identify2({ platformName: platformName2, rcAccountId, extensionId }) {
        if (!useAnalytics) {
          return;
        }
        import_mixpanel_browser.default.identify(extensionId);
        import_mixpanel_browser.default.people.set({
          crmPlatform: platformName2,
          rcAccountId,
          version
        });
      };
      exports.group = function group2({ rcAccountId }) {
        if (!useAnalytics) {
          return;
        }
        import_mixpanel_browser.default.add_group("rcAccountId", rcAccountId);
        import_mixpanel_browser.default.set_group("rcAccountId", rcAccountId);
      };
      function track(event, properties = {}) {
        if (!useAnalytics) {
          return;
        }
        import_mixpanel_browser.default.track(event, { appName, version, collectedFrom: "client", ...properties });
      }
      exports.trackPage = function page(name, properties = {}) {
        if (!useAnalytics) {
          return;
        }
        try {
          const pathSegments = name.split("/");
          const rootPath = `/${pathSegments[1]}`;
          const childPath = name.split(rootPath)[1];
          import_mixpanel_browser.default.track_pageview(
            {
              appName,
              version,
              path: window.location.pathname,
              childPath,
              search: window.location.search,
              url: window.location.href,
              ...properties
            },
            {
              event_name: `Viewed ${rootPath}`
            }
          );
        } catch (e) {
          console.log(e);
        }
      };
      exports.trackFirstTimeSetup = function trackFirstTimeSetup() {
        track("First time setup", {
          appName
        });
      };
      exports.trackRcLogin = function trackRcLogin2() {
        track("Login with RingCentral account", {
          appName
        });
      };
      exports.trackRcLogout = function trackRcLogout2() {
        track("Logout with RingCentral account", {
          appName
        });
      };
      exports.trackCrmLogin = function trackCrmLogin() {
        track("Login with CRM account", {
          appName
        });
      };
      exports.trackCrmLogout = function trackCrmLogout() {
        track("Logout with CRM account", {
          appName
        });
      };
      exports.trackPlacedCall = function trackPlacedCall2() {
        track("A new call placed", {
          appName
        });
      };
      exports.trackAnsweredCall = function trackAnsweredCall2() {
        track("A new call answered", {
          appName
        });
      };
      exports.trackConnectedCall = function trackConnectedCall2() {
        track("A new call connected", {
          appName
        });
      };
      exports.trackCallEnd = function trackCallEnd2({ durationInSeconds }) {
        track("A call is ended", {
          durationInSeconds,
          appName
        });
      };
      exports.trackSentSMS = function trackSentSMS2() {
        track("A new SMS sent", {
          appName
        });
      };
      exports.trackSyncCallLog = function trackSyncCallLog({ hasNote }) {
        track("Sync call log", {
          hasNote,
          appName
        });
      };
      exports.trackSyncMessageLog = function trackSyncMessageLog() {
        track("Sync message log", {
          appName
        });
      };
      exports.trackEditSettings = function trackEditSettings2({ changedItem, status }) {
        track("Edit settings", {
          changedItem,
          status,
          appName
        });
      };
      exports.trackCreateMeeting = function trackCreateMeeting2() {
        track("Create meeting", {
          appName
        });
      };
      exports.trackOpenFeedback = function trackOpenFeedback2() {
        track("Open feedback", {
          appName
        });
      };
      exports.trackSubmitFeedback = function trackSubmitFeedback() {
        track("Submit feedback", {
          appName
        });
      };
      exports.createNewContact = function createNewContact() {
        track("Create a new contact", {
          appName
        });
      };
    }
  });

  // src/core/auth.js
  var require_auth = __commonJS({
    "src/core/auth.js"(exports) {
      init_axios2();
      var import_util = __toESM(require_util());
      var import_analytics = __toESM(require_analytics());
      async function submitPlatformSelection(platform2) {
        await chrome.storage.local.set({
          ["platform-info"]: platform2
        });
      }
      async function apiKeyLogin2({ serverUrl, apiKey, apiUrl, username, password }) {
        try {
          const platformInfo = await chrome.storage.local.get("platform-info");
          const platformName2 = platformInfo["platform-info"].platformName;
          const hostname = platformInfo["platform-info"].hostname;
          const res = await axios_default2.post(`${serverUrl}/apiKeyLogin?state=platform=${platformName2}`, {
            apiKey: apiKey ?? "apiKey",
            platform: platformName2,
            hostname,
            additionalInfo: {
              apiUrl,
              username,
              password
            }
          });
          setAuth(true);
          (0, import_util.showNotification)({ level: "success", message: "Successfully authorized.", ttl: 3e3 });
          await chrome.storage.local.set({
            ["rcUnifiedCrmExtJwt"]: res.data.jwtToken
          });
          const crmUserInfo = { name: res.data.name };
          await chrome.storage.local.set({ crmUserInfo });
          setAuth(true, crmUserInfo.name);
          (0, import_analytics.trackCrmLogin)();
          document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
            type: "rc-adapter-navigate-to",
            path: "goBack"
          }, "*");
          return res.data.jwtToken;
        } catch (e) {
          console.log(e);
          (0, import_util.showNotification)({ level: "warning", message: "Failed to register api key.", ttl: 3e3 });
        }
      }
      async function onAuthCallback({ serverUrl, callbackUri }) {
        const platformInfo = await chrome.storage.local.get("platform-info");
        const hostname = platformInfo["platform-info"].hostname;
        let oauthCallbackUrl = "";
        if (platformInfo["platform-info"].platformName === "bullhorn") {
          const { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
          const { crm_extension_bullhornUsername } = await chrome.storage.local.get({ crm_extension_bullhornUsername: null });
          oauthCallbackUrl = `${serverUrl}/oauth-callback?callbackUri=${callbackUri}&hostname=${hostname}&tokenUrl=${crm_extension_bullhorn_user_urls.oauthUrl}/token&apiUrl=${crm_extension_bullhorn_user_urls.restUrl}&username=${crm_extension_bullhornUsername}`;
        } else {
          oauthCallbackUrl = `${serverUrl}/oauth-callback?callbackUri=${callbackUri}&hostname=${hostname}`;
        }
        const res = await axios_default2.get(oauthCallbackUrl);
        const crmUserInfo = { name: res.data.name };
        await chrome.storage.local.set({ crmUserInfo });
        setAuth(true, crmUserInfo.name);
        (0, import_util.showNotification)({ level: "success", message: "Successfully authorized.", ttl: 3e3 });
        await chrome.storage.local.set({
          ["rcUnifiedCrmExtJwt"]: res.data.jwtToken
        });
        (0, import_analytics.trackCrmLogin)();
        return res.data.jwtToken;
      }
      async function unAuthorize({ serverUrl, platformName: platformName2, rcUnifiedCrmExtJwt }) {
        try {
          await axios_default2.post(`${serverUrl}/unAuthorize?jwtToken=${rcUnifiedCrmExtJwt}`);
          if (platformName2 === "bullhorn") {
            await chrome.storage.local.remove("crm_extension_bullhornUsername");
            await chrome.storage.local.remove("crm_extension_bullhorn_user_urls");
          }
          (0, import_analytics.trackCrmLogout)();
        } catch (e) {
          console.log(e);
        }
        await chrome.storage.local.remove("rcUnifiedCrmExtJwt");
        setAuth(false);
      }
      async function checkAuth() {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        const { crmUserInfo } = await chrome.storage.local.get({ crmUserInfo: null });
        setAuth(!!rcUnifiedCrmExtJwt, crmUserInfo?.name);
        return !!rcUnifiedCrmExtJwt;
      }
      function setAuth(auth2, accountName) {
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-update-authorization-status",
          authorized: auth2,
          authorizedAccount: accountName ?? ""
        });
      }
      exports.submitPlatformSelection = submitPlatformSelection;
      exports.apiKeyLogin = apiKeyLogin2;
      exports.onAuthCallback = onAuthCallback;
      exports.unAuthorize = unAuthorize;
      exports.checkAuth = checkAuth;
      exports.setAuth = setAuth;
    }
  });

  // node_modules/moment/moment.js
  var require_moment = __commonJS({
    "node_modules/moment/moment.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
      })(exports, function() {
        "use strict";
        var hookCallback;
        function hooks() {
          return hookCallback.apply(null, arguments);
        }
        function setHookCallback(callback) {
          hookCallback = callback;
        }
        function isArray2(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
        }
        function isObject2(input) {
          return input != null && Object.prototype.toString.call(input) === "[object Object]";
        }
        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }
        function isObjectEmpty2(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;
            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }
            return true;
          }
        }
        function isUndefined2(input) {
          return input === void 0;
        }
        function isNumber2(input) {
          return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
        }
        function isDate2(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
        }
        function map(arr, fn) {
          var res = [], i, arrLen = arr.length;
          for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
          }
          return res;
        }
        function extend2(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }
          if (hasOwnProp(b, "toString")) {
            a.toString = b.toString;
          }
          if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf;
          }
          return a;
        }
        function createUTC(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, true).utc();
        }
        function defaultParsingFlags() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }
        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }
          return m._pf;
        }
        var some;
        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function(fun) {
            var t = Object(this), len = t.length >>> 0, i;
            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }
            return false;
          };
        }
        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
              return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }
          return m._isValid;
        }
        function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
            extend2(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }
          return m;
        }
        var momentProperties = hooks.momentProperties = [], updateInProgress = false;
        function copyConfig(to2, from2) {
          var i, prop, val, momentPropertiesLen = momentProperties.length;
          if (!isUndefined2(from2._isAMomentObject)) {
            to2._isAMomentObject = from2._isAMomentObject;
          }
          if (!isUndefined2(from2._i)) {
            to2._i = from2._i;
          }
          if (!isUndefined2(from2._f)) {
            to2._f = from2._f;
          }
          if (!isUndefined2(from2._l)) {
            to2._l = from2._l;
          }
          if (!isUndefined2(from2._strict)) {
            to2._strict = from2._strict;
          }
          if (!isUndefined2(from2._tzm)) {
            to2._tzm = from2._tzm;
          }
          if (!isUndefined2(from2._isUTC)) {
            to2._isUTC = from2._isUTC;
          }
          if (!isUndefined2(from2._offset)) {
            to2._offset = from2._offset;
          }
          if (!isUndefined2(from2._pf)) {
            to2._pf = getParsingFlags(from2);
          }
          if (!isUndefined2(from2._locale)) {
            to2._locale = from2._locale;
          }
          if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
              prop = momentProperties[i];
              val = from2[prop];
              if (!isUndefined2(val)) {
                to2[prop] = val;
              }
            }
          }
          return to2;
        }
        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
            this._d = /* @__PURE__ */ new Date(NaN);
          }
          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }
        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }
        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg);
          }
        }
        function deprecate(msg, fn) {
          var firstTime = true;
          return extend2(function() {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
              var args = [], arg, i, key, argLen = arguments.length;
              for (i = 0; i < argLen; i++) {
                arg = "";
                if (typeof arguments[i] === "object") {
                  arg += "\n[" + i + "] ";
                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ": " + arguments[0][key] + ", ";
                    }
                  }
                  arg = arg.slice(0, -2);
                } else {
                  arg = arguments[i];
                }
                args.push(arg);
              }
              warn(
                msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
              );
              firstTime = false;
            }
            return fn.apply(this, arguments);
          }, fn);
        }
        var deprecations = {};
        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }
        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;
        function isFunction2(input) {
          return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
        }
        function set(config) {
          var prop, i;
          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];
              if (isFunction2(prop)) {
                this[i] = prop;
              } else {
                this["_" + i] = prop;
              }
            }
          }
          this._config = config;
          this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
          );
        }
        function mergeConfigs(parentConfig, childConfig) {
          var res = extend2({}, parentConfig), prop;
          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject2(parentConfig[prop]) && isObject2(childConfig[prop])) {
                res[prop] = {};
                extend2(res[prop], parentConfig[prop]);
                extend2(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }
          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject2(parentConfig[prop])) {
              res[prop] = extend2({}, res[prop]);
            }
          }
          return res;
        }
        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }
        var keys;
        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function(obj) {
            var i, res = [];
            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }
            return res;
          };
        }
        var defaultCalendar = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function calendar(key, mom, now2) {
          var output = this._calendar[key] || this._calendar["sameElse"];
          return isFunction2(output) ? output.call(mom, now2) : output;
        }
        function zeroFill(number, targetLength, forceSign) {
          var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
          return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }
        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
        function addFormatToken(token2, padded, ordinal2, callback) {
          var func = callback;
          if (typeof callback === "string") {
            func = function() {
              return this[callback]();
            };
          }
          if (token2) {
            formatTokenFunctions[token2] = func;
          }
          if (padded) {
            formatTokenFunctions[padded[0]] = function() {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }
          if (ordinal2) {
            formatTokenFunctions[ordinal2] = function() {
              return this.localeData().ordinal(
                func.apply(this, arguments),
                token2
              );
            };
          }
        }
        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
          }
          return input.replace(/\\/g, "");
        }
        function makeFormatFunction(format2) {
          var array = format2.match(formattingTokens), i, length;
          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }
          return function(mom) {
            var output = "", i2;
            for (i2 = 0; i2 < length; i2++) {
              output += isFunction2(array[i2]) ? array[i2].call(mom, format2) : array[i2];
            }
            return output;
          };
        }
        function formatMoment(m, format2) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }
          format2 = expandFormat(format2, m.localeData());
          formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
          return formatFunctions[format2](m);
        }
        function expandFormat(format2, locale2) {
          var i = 5;
          function replaceLongDateFormatTokens(input) {
            return locale2.longDateFormat(input) || input;
          }
          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format2)) {
            format2 = format2.replace(
              localFormattingTokens,
              replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }
          return format2;
        }
        var defaultLongDateFormat = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function longDateFormat(key) {
          var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
          if (format2 || !formatUpper) {
            return format2;
          }
          this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
              return tok.slice(1);
            }
            return tok;
          }).join("");
          return this._longDateFormat[key];
        }
        var defaultInvalidDate = "Invalid date";
        function invalidDate() {
          return this._invalidDate;
        }
        var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
        function ordinal(number) {
          return this._ordinal.replace("%d", number);
        }
        var defaultRelativeTime = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction2(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }
        function pastFuture(diff2, output) {
          var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
          return isFunction2(format2) ? format2(output) : format2.replace(/%s/i, output);
        }
        var aliases = {};
        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
        }
        function normalizeUnits(units) {
          return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
        }
        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {}, normalizedProp, prop;
          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }
          return normalizedInput;
        }
        var priorities = {};
        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }
        function getPrioritizedUnits(unitsObj) {
          var units = [], u;
          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({ unit: u, priority: priorities[u] });
            }
          }
          units.sort(function(a, b) {
            return a.priority - b.priority;
          });
          return units;
        }
        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }
        function absFloor(number) {
          if (number < 0) {
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }
        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion, value = 0;
          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }
          return value;
        }
        function makeGetSet(unit, keepTime) {
          return function(value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }
        function get(mom, unit) {
          return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
        }
        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              value = toInt(value);
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
                value,
                mom.month(),
                daysInMonth(value, mom.month())
              );
            } else {
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
            }
          }
        }
        function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction2(this[units])) {
            return this[units]();
          }
          return this;
        }
        function stringSet(units, value) {
          if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);
            if (isFunction2(this[units])) {
              return this[units](value);
            }
          }
          return this;
        }
        var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
        regexes = {};
        function addRegexToken(token2, regex, strictRegex) {
          regexes[token2] = isFunction2(regex) ? regex : function(isStrict, localeData2) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }
        function getParseRegexForToken(token2, config) {
          if (!hasOwnProp(regexes, token2)) {
            return new RegExp(unescapeFormat(token2));
          }
          return regexes[token2](config._strict, config._locale);
        }
        function unescapeFormat(s) {
          return regexEscape(
            s.replace("\\", "").replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
              }
            )
          );
        }
        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var tokens = {};
        function addParseToken(token2, callback) {
          var i, func = callback, tokenLen;
          if (typeof token2 === "string") {
            token2 = [token2];
          }
          if (isNumber2(callback)) {
            func = function(input, array) {
              array[callback] = toInt(input);
            };
          }
          tokenLen = token2.length;
          for (i = 0; i < tokenLen; i++) {
            tokens[token2[i]] = func;
          }
        }
        function addWeekParseToken(token2, callback) {
          addParseToken(token2, function(input, array, config, token3) {
            config._w = config._w || {};
            callback(input, config._w, config, token3);
          });
        }
        function addTimeToArrayFromToken(token2, input, config) {
          if (input != null && hasOwnProp(tokens, token2)) {
            tokens[token2](input, config._a, config, token2);
          }
        }
        var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
        function mod(n, x) {
          return (n % x + x) % x;
        }
        var indexOf;
        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function(o) {
            var i;
            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }
            return -1;
          };
        }
        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }
        addFormatToken("M", ["MM", 2], "Mo", function() {
          return this.month() + 1;
        });
        addFormatToken("MMM", 0, 0, function(format2) {
          return this.localeData().monthsShort(this, format2);
        });
        addFormatToken("MMMM", 0, 0, function(format2) {
          return this.localeData().months(this, format2);
        });
        addUnitAlias("month", "M");
        addUnitPriority("month", 8);
        addRegexToken("M", match1to2);
        addRegexToken("MM", match1to2, match2);
        addRegexToken("MMM", function(isStrict, locale2) {
          return locale2.monthsShortRegex(isStrict);
        });
        addRegexToken("MMMM", function(isStrict, locale2) {
          return locale2.monthsRegex(isStrict);
        });
        addParseToken(["M", "MM"], function(input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
          var month = config._locale.monthsParse(input, token2, config._strict);
          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
        function localeMonths(m, format2) {
          if (!m) {
            return isArray2(this._months) ? this._months : this._months["standalone"];
          }
          return isArray2(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
        }
        function localeMonthsShort(m, format2) {
          if (!m) {
            return isArray2(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
          }
          return isArray2(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
        }
        function handleStrictParse(monthName, format2, strict) {
          var i, ii, mom, llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
              mom = createUTC([2e3, i]);
              this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeMonthsParse(monthName, format2, strict) {
          var i, mom, regex;
          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format2, strict);
          }
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp(
                "^" + this.months(mom, "").replace(".", "") + "$",
                "i"
              );
              this._shortMonthsParse[i] = new RegExp(
                "^" + this.monthsShort(mom, "").replace(".", "") + "$",
                "i"
              );
            }
            if (!strict && !this._monthsParse[i]) {
              regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
              this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }
        function setMonth(mom, value) {
          var dayOfMonth;
          if (!mom.isValid()) {
            return mom;
          }
          if (typeof value === "string") {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value);
              if (!isNumber2(value)) {
                return mom;
              }
            }
          }
          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
          return mom;
        }
        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, "Month");
          }
        }
        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }
        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }
        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsRegex")) {
              this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }
        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""));
          }
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }
          this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._monthsShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
        }
        addFormatToken("Y", 0, 0, function() {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : "+" + y;
        });
        addFormatToken(0, ["YY", 2], 0, function() {
          return this.year() % 100;
        });
        addFormatToken(0, ["YYYY", 4], 0, "year");
        addFormatToken(0, ["YYYYY", 5], 0, "year");
        addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
        addUnitAlias("year", "y");
        addUnitPriority("year", 1);
        addRegexToken("Y", matchSigned);
        addRegexToken("YY", match1to2, match2);
        addRegexToken("YYYY", match1to4, match4);
        addRegexToken("YYYYY", match1to6, match6);
        addRegexToken("YYYYYY", match1to6, match6);
        addParseToken(["YYYYY", "YYYYYY"], YEAR);
        addParseToken("YYYY", function(input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken("YY", function(input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken("Y", function(input, array) {
          array[YEAR] = parseInt(input, 10);
        });
        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }
        hooks.parseTwoDigitYear = function(input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
        };
        var getSetYear = makeGetSet("FullYear", true);
        function getIsLeapYear() {
          return isLeapYear(this.year());
        }
        function createDate(y, m, d, h, M, s, ms) {
          var date;
          if (y < 100 && y >= 0) {
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }
          return date;
        }
        function createUTCDate(y) {
          var date, args;
          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }
          return date;
        }
        function firstWeekOffset(year, dow, doy) {
          var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        }
        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }
          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }
        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }
          return {
            week: resWeek,
            year: resYear
          };
        }
        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }
        addFormatToken("w", ["ww", 2], "wo", "week");
        addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
        addUnitAlias("week", "w");
        addUnitAlias("isoWeek", "W");
        addUnitPriority("week", 5);
        addUnitPriority("isoWeek", 5);
        addRegexToken("w", match1to2);
        addRegexToken("ww", match1to2, match2);
        addRegexToken("W", match1to2);
        addRegexToken("WW", match1to2, match2);
        addWeekParseToken(
          ["w", "ww", "W", "WW"],
          function(input, week, config, token2) {
            week[token2.substr(0, 1)] = toInt(input);
          }
        );
        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }
        var defaultLocaleWeek = {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6
          // The week that contains Jan 6th is the first week of the year.
        };
        function localeFirstDayOfWeek() {
          return this._week.dow;
        }
        function localeFirstDayOfYear() {
          return this._week.doy;
        }
        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        addFormatToken("d", 0, "do", "day");
        addFormatToken("dd", 0, 0, function(format2) {
          return this.localeData().weekdaysMin(this, format2);
        });
        addFormatToken("ddd", 0, 0, function(format2) {
          return this.localeData().weekdaysShort(this, format2);
        });
        addFormatToken("dddd", 0, 0, function(format2) {
          return this.localeData().weekdays(this, format2);
        });
        addFormatToken("e", 0, 0, "weekday");
        addFormatToken("E", 0, 0, "isoWeekday");
        addUnitAlias("day", "d");
        addUnitAlias("weekday", "e");
        addUnitAlias("isoWeekday", "E");
        addUnitPriority("day", 11);
        addUnitPriority("weekday", 11);
        addUnitPriority("isoWeekday", 11);
        addRegexToken("d", match1to2);
        addRegexToken("e", match1to2);
        addRegexToken("E", match1to2);
        addRegexToken("dd", function(isStrict, locale2) {
          return locale2.weekdaysMinRegex(isStrict);
        });
        addRegexToken("ddd", function(isStrict, locale2) {
          return locale2.weekdaysShortRegex(isStrict);
        });
        addRegexToken("dddd", function(isStrict, locale2) {
          return locale2.weekdaysRegex(isStrict);
        });
        addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
          var weekday = config._locale.weekdaysParse(input, token2, config._strict);
          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
          week[token2] = toInt(input);
        });
        function parseWeekday(input, locale2) {
          if (typeof input !== "string") {
            return input;
          }
          if (!isNaN(input)) {
            return parseInt(input, 10);
          }
          input = locale2.weekdaysParse(input);
          if (typeof input === "number") {
            return input;
          }
          return null;
        }
        function parseIsoWeekday(input, locale2) {
          if (typeof input === "string") {
            return locale2.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
        }
        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
        function localeWeekdays(m, format2) {
          var weekdays = isArray2(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }
        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }
        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }
        function handleStrictParse$1(weekdayName, format2, strict) {
          var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
              mom = createUTC([2e3, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ""
              ).toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeWeekdaysParse(weekdayName, format2, strict) {
          var i, mom, regex;
          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format2, strict);
          }
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp(
                "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._shortWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._minWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
            }
            if (!this._weekdaysParse[i]) {
              regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
              this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        }
        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
          } else {
            return day;
          }
        }
        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, "d");
        }
        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }
        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }
        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }
        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }
        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ""));
            shortp = regexEscape(this.weekdaysShort(mom, ""));
            longp = regexEscape(this.weekdays(mom, ""));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          }
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._weekdaysShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
          this._weekdaysMinStrictRegex = new RegExp(
            "^(" + minPieces.join("|") + ")",
            "i"
          );
        }
        function hFormat() {
          return this.hours() % 12 || 12;
        }
        function kFormat() {
          return this.hours() || 24;
        }
        addFormatToken("H", ["HH", 2], 0, "hour");
        addFormatToken("h", ["hh", 2], 0, hFormat);
        addFormatToken("k", ["kk", 2], 0, kFormat);
        addFormatToken("hmm", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken("hmmss", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken("Hmm", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken("Hmmss", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        function meridiem(token2, lowercase) {
          addFormatToken(token2, 0, 0, function() {
            return this.localeData().meridiem(
              this.hours(),
              this.minutes(),
              lowercase
            );
          });
        }
        meridiem("a", true);
        meridiem("A", false);
        addUnitAlias("hour", "h");
        addUnitPriority("hour", 13);
        function matchMeridiem(isStrict, locale2) {
          return locale2._meridiemParse;
        }
        addRegexToken("a", matchMeridiem);
        addRegexToken("A", matchMeridiem);
        addRegexToken("H", match1to2);
        addRegexToken("h", match1to2);
        addRegexToken("k", match1to2);
        addRegexToken("HH", match1to2, match2);
        addRegexToken("hh", match1to2, match2);
        addRegexToken("kk", match1to2, match2);
        addRegexToken("hmm", match3to4);
        addRegexToken("hmmss", match5to6);
        addRegexToken("Hmm", match3to4);
        addRegexToken("Hmmss", match5to6);
        addParseToken(["H", "HH"], HOUR);
        addParseToken(["k", "kk"], function(input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(["a", "A"], function(input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(["h", "hh"], function(input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("Hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken("Hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        });
        function localeIsPM(input) {
          return (input + "").toLowerCase().charAt(0) === "p";
        }
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
        function localeMeridiem(hours2, minutes2, isLower) {
          if (hours2 > 11) {
            return isLower ? "pm" : "PM";
          } else {
            return isLower ? "am" : "AM";
          }
        }
        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        };
        var locales = {}, localeFamilies = {}, globalLocale;
        function commonPrefix(arr1, arr2) {
          var i, minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }
          return minl;
        }
        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace("_", "-") : key;
        }
        function chooseLocale(names) {
          var i = 0, j, next, locale2, split;
          while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
              locale2 = loadLocale(split.slice(0, j).join("-"));
              if (locale2) {
                return locale2;
              }
              if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                break;
              }
              j--;
            }
            i++;
          }
          return globalLocale;
        }
        function isLocaleNameSane(name) {
          return name.match("^[^/\\\\]*$") != null;
        }
        function loadLocale(name) {
          var oldLocale = null, aliasedRequire;
          if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = __require;
              aliasedRequire("./locale/" + name);
              getSetGlobalLocale(oldLocale);
            } catch (e) {
              locales[name] = null;
            }
          }
          return locales[name];
        }
        function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
            if (isUndefined2(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }
            if (data) {
              globalLocale = data;
            } else {
              if (typeof console !== "undefined" && console.warn) {
                console.warn(
                  "Locale " + key + " not found. Did you forget to load it?"
                );
              }
            }
          }
          return globalLocale._abbr;
        }
        function defineLocale(name, config) {
          if (config !== null) {
            var locale2, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
              deprecateSimple(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              );
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale2 = loadLocale(config.parentLocale);
                if (locale2 != null) {
                  parentConfig = locale2._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                    name,
                    config
                  });
                  return null;
                }
              }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
              });
            }
            getSetGlobalLocale(name);
            return locales[name];
          } else {
            delete locales[name];
            return null;
          }
        }
        function updateLocale(name, config) {
          if (config != null) {
            var locale2, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) {
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              tmpLocale = loadLocale(name);
              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }
              config = mergeConfigs(parentConfig, config);
              if (tmpLocale == null) {
                config.abbr = name;
              }
              locale2 = new Locale(config);
              locale2.parentLocale = locales[name];
              locales[name] = locale2;
            }
            getSetGlobalLocale(name);
          } else {
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }
          return locales[name];
        }
        function getLocale(key) {
          var locale2;
          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }
          if (!key) {
            return globalLocale;
          }
          if (!isArray2(key)) {
            locale2 = loadLocale(key);
            if (locale2) {
              return locale2;
            }
            key = [key];
          }
          return chooseLocale(key);
        }
        function listLocales() {
          return keys(locales);
        }
        function checkOverflow(m) {
          var overflow, a = m._a;
          if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
          }
          return m;
        }
        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, false],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, false],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, false],
          ["YYYY", /\d{4}/, false]
        ], isoTimes = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };
        function configFromISO(config) {
          var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
          if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }
            if (dateFormat == null) {
              config._isValid = false;
              return;
            }
            if (match[3]) {
              for (i = 0, l = isoTimesLen; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  timeFormat = (match[2] || " ") + isoTimes[i][0];
                  break;
                }
              }
              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }
            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }
            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = "Z";
              } else {
                config._isValid = false;
                return;
              }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }
        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
          ];
          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }
          return result;
        }
        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
            return 2e3 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }
          return year;
        }
        function preprocessRFC2822(s) {
          return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
              parsedInput[0],
              parsedInput[1],
              parsedInput[2]
            ).getDay();
            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }
          return true;
        }
        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            return 0;
          } else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
          }
        }
        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
          if (match) {
            parsedArray = extractFromRFC2822Strings(
              match[4],
              match[3],
              match[2],
              match[5],
              match[6],
              match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        }
        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
            config._d = /* @__PURE__ */ new Date(+matched[1]);
            return;
          }
          configFromISO(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          configFromRFC2822(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          if (config._strict) {
            config._isValid = false;
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        hooks.createFromInputFallback = deprecate(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function(config) {
            config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
          }
        );
        function defaults2(a, b, c) {
          if (a != null) {
            return a;
          }
          if (b != null) {
            return b;
          }
          return c;
        }
        function currentDateArray(config) {
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
            return [
              nowValue.getUTCFullYear(),
              nowValue.getUTCMonth(),
              nowValue.getUTCDate()
            ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        }
        function configFromArray(config) {
          var i, date, input = [], currentDate, expectedWeekday, yearToUse;
          if (config._d) {
            return;
          }
          currentDate = currentDateArray(config);
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          }
          if (config._dayOfYear != null) {
            yearToUse = defaults2(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          }
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          }
          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          }
          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }
          config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
          );
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }
          if (config._nextDay) {
            config._a[HOUR] = 24;
          }
          if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }
        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults2(
              w.GG,
              config._a[YEAR],
              weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults2(w.W, 1);
            weekday = defaults2(w.E, 1);
            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults2(w.gg, config._a[YEAR], curWeek.year);
            week = defaults2(w.w, curWeek.week);
            if (w.d != null) {
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              weekday = dow;
            }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        }
        hooks.ISO_8601 = function() {
        };
        hooks.RFC_2822 = function() {
        };
        function configFromStringAndFormat(config) {
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }
          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;
          var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
          tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
          tokenLen = tokens2.length;
          for (i = 0; i < tokenLen; i++) {
            token2 = tokens2[i];
            parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
              );
              totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token2]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token2);
              }
              addTimeToArrayFromToken(token2, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token2);
            }
          }
          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          }
          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
          }
          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
          );
          era = getParsingFlags(config).era;
          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }
          configFromArray(config);
          checkOverflow(config);
        }
        function meridiemFixWrap(locale2, hour, meridiem2) {
          var isPm;
          if (meridiem2 == null) {
            return hour;
          }
          if (locale2.meridiemHour != null) {
            return locale2.meridiemHour(hour, meridiem2);
          } else if (locale2.isPM != null) {
            isPm = locale2.isPM(meridiem2);
            if (isPm && hour < 12) {
              hour += 12;
            }
            if (!isPm && hour === 12) {
              hour = 0;
            }
            return hour;
          } else {
            return hour;
          }
        }
        function configFromStringAndArray(config) {
          var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
          if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = /* @__PURE__ */ new Date(NaN);
            return;
          }
          for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) {
              validFormatFound = true;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
              if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }
          extend2(config, bestMoment || tempConfig);
        }
        function configFromObject(config) {
          if (config._d) {
            return;
          }
          var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
          config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function(obj) {
              return obj && parseInt(obj, 10);
            }
          );
          configFromArray(config);
        }
        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = void 0;
          }
          return res;
        }
        function prepareConfig(config) {
          var input = config._i, format2 = config._f;
          config._locale = config._locale || getLocale(config._l);
          if (input === null || format2 === void 0 && input === "") {
            return createInvalid({ nullInput: true });
          }
          if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
          }
          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate2(input)) {
            config._d = input;
          } else if (isArray2(format2)) {
            configFromStringAndArray(config);
          } else if (format2) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }
          if (!isValid(config)) {
            config._d = null;
          }
          return config;
        }
        function configFromInput(config) {
          var input = config._i;
          if (isUndefined2(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate2(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === "string") {
            configFromString(config);
          } else if (isArray2(input)) {
            config._a = map(input.slice(0), function(obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject2(input)) {
            configFromObject(config);
          } else if (isNumber2(input)) {
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
          var c = {};
          if (format2 === true || format2 === false) {
            strict = format2;
            format2 = void 0;
          }
          if (locale2 === true || locale2 === false) {
            strict = locale2;
            locale2 = void 0;
          }
          if (isObject2(input) && isObjectEmpty2(input) || isArray2(input) && input.length === 0) {
            input = void 0;
          }
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale2;
          c._i = input;
          c._f = format2;
          c._strict = strict;
          return createFromConfig(c);
        }
        function createLocal(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, false);
        }
        var prototypeMin = deprecate(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other < this ? this : other;
            } else {
              return createInvalid();
            }
          }
        ), prototypeMax = deprecate(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other > this ? this : other;
            } else {
              return createInvalid();
            }
          }
        );
        function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray2(moments[0])) {
            moments = moments[0];
          }
          if (!moments.length) {
            return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }
          return res;
        }
        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isBefore", args);
        }
        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isAfter", args);
        }
        var now = function() {
          return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
        };
        var ordering = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond"
        ];
        function isDurationValid(m) {
          var key, unitHasDecimal = false, i, orderLen = ordering.length;
          for (key in m) {
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }
          for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false;
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }
          return true;
        }
        function isValid$1() {
          return this._isValid;
        }
        function createInvalid$1() {
          return createDuration(NaN);
        }
        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput);
          this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
          minutes2 * 6e4 + // 1000 * 60
          hours2 * 1e3 * 60 * 60;
          this._days = +days2 + weeks2 * 7;
          this._months = +months2 + quarters * 3 + years2 * 12;
          this._data = {};
          this._locale = getLocale();
          this._bubble();
        }
        function isDuration(obj) {
          return obj instanceof Duration;
        }
        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        }
        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }
          return diffs + lengthDiff;
        }
        function offset(token2, separator) {
          addFormatToken(token2, 0, 0, function() {
            var offset2 = this.utcOffset(), sign2 = "+";
            if (offset2 < 0) {
              offset2 = -offset2;
              sign2 = "-";
            }
            return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
          });
        }
        offset("Z", ":");
        offset("ZZ", "");
        addRegexToken("Z", matchShortOffset);
        addRegexToken("ZZ", matchShortOffset);
        addParseToken(["Z", "ZZ"], function(input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        function offsetFromString(matcher, string) {
          var matches = (string || "").match(matcher), chunk, parts, minutes2;
          if (matches === null) {
            return null;
          }
          chunk = matches[matches.length - 1] || [];
          parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
          minutes2 = +(parts[1] * 60) + toInt(parts[2]);
          return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
        }
        function cloneWithOffset(input, model) {
          var res, diff2;
          if (model._isUTC) {
            res = model.clone();
            diff2 = (isMoment(input) || isDate2(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff2);
            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }
        function getDateOffset(m) {
          return -Math.round(m._d.getTimezoneOffset());
        }
        hooks.updateOffset = function() {
        };
        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset2 = this._offset || 0, localAdjust;
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            if (typeof input === "string") {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
              this.add(localAdjust, "m");
            }
            if (offset2 !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(
                  this,
                  createDuration(input - offset2, "m"),
                  1,
                  false
                );
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }
            return this;
          } else {
            return this._isUTC ? offset2 : getDateOffset(this);
          }
        }
        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== "string") {
              input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }
        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }
        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
              this.subtract(getDateOffset(this), "m");
            }
          }
          return this;
        }
        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }
          return this;
        }
        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }
        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function isDaylightSavingTimeShifted() {
          if (!isUndefined2(this._isDSTShifted)) {
            return this._isDSTShifted;
          }
          var c = {}, other;
          copyConfig(c, this);
          c = prepareConfig(c);
          if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }
          return this._isDSTShifted;
        }
        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }
        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }
        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function createDuration(input, key) {
          var duration = input, match = null, sign2, ret, diffRes;
          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber2(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if (match = aspNetRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign2,
              h: toInt(match[HOUR]) * sign2,
              m: toInt(match[MINUTE]) * sign2,
              s: toInt(match[SECOND]) * sign2,
              ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
              // the millisecond decimal point is included in the match
            };
          } else if (match = isoRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign2),
              M: parseIso(match[3], sign2),
              w: parseIso(match[4], sign2),
              d: parseIso(match[5], sign2),
              h: parseIso(match[6], sign2),
              m: parseIso(match[7], sign2),
              s: parseIso(match[8], sign2)
            };
          } else if (duration == null) {
            duration = {};
          } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(
              createLocal(duration.from),
              createLocal(duration.to)
            );
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }
          ret = new Duration(duration);
          if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
          }
          if (isDuration(input) && hasOwnProp(input, "_isValid")) {
            ret._isValid = input._isValid;
          }
          return ret;
        }
        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;
        function parseIso(inp, sign2) {
          var res = inp && parseFloat(inp.replace(",", "."));
          return (isNaN(res) ? 0 : res) * sign2;
        }
        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
          }
          res.milliseconds = +other - +base.clone().add(res.months, "M");
          return res;
        }
        function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
          }
          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }
          return res;
        }
        function createAdder(direction, name) {
          return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
              deprecateSimple(
                name,
                "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              );
              tmp = val;
              val = period;
              period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }
        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
          if (!mom.isValid()) {
            return;
          }
          updateOffset = updateOffset == null ? true : updateOffset;
          if (months2) {
            setMonth(mom, get(mom, "Month") + months2 * isAdding);
          }
          if (days2) {
            set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
          }
          if (milliseconds2) {
            mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
          }
          if (updateOffset) {
            hooks.updateOffset(mom, days2 || months2);
          }
        }
        var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
        function isString2(input) {
          return typeof input === "string" || input instanceof String;
        }
        function isMomentInput(input) {
          return isMoment(input) || isDate2(input) || isString2(input) || isNumber2(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
        }
        function isMomentInputObject(input) {
          var objectTest = isObject2(input) && !isObjectEmpty2(input), propertyTest = false, properties = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
          ], i, property, propertyLen = properties.length;
          for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function isNumberOrStringArray(input) {
          var arrayTest = isArray2(input), dataTypeTest = false;
          if (arrayTest) {
            dataTypeTest = input.filter(function(item) {
              return !isNumber2(item) && isString2(input);
            }).length === 0;
          }
          return arrayTest && dataTypeTest;
        }
        function isCalendarSpec(input) {
          var objectTest = isObject2(input) && !isObjectEmpty2(input), propertyTest = false, properties = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function getCalendarFormat(myMoment, now2) {
          var diff2 = myMoment.diff(now2, "days", true);
          return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
        }
        function calendar$1(time, formats) {
          if (arguments.length === 1) {
            if (!arguments[0]) {
              time = void 0;
              formats = void 0;
            } else if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = void 0;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = void 0;
            }
          }
          var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction2(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
          return this.format(
            output || this.localeData().calendar(format2, this, createLocal(now2))
          );
        }
        function clone() {
          return new Moment(this);
        }
        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }
        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }
        function isBetween(from2, to2, units, inclusivity) {
          var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }
          inclusivity = inclusivity || "()";
          return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }
        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input), inputMs;
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }
        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }
        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }
        function diff(input, units, asFloat) {
          var that, zoneDelta, output;
          if (!this.isValid()) {
            return NaN;
          }
          that = cloneWithOffset(input, this);
          if (!that.isValid()) {
            return NaN;
          }
          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);
          switch (units) {
            case "year":
              output = monthDiff(this, that) / 12;
              break;
            case "month":
              output = monthDiff(this, that);
              break;
            case "quarter":
              output = monthDiff(this, that) / 3;
              break;
            case "second":
              output = (this - that) / 1e3;
              break;
            case "minute":
              output = (this - that) / 6e4;
              break;
            case "hour":
              output = (this - that) / 36e5;
              break;
            case "day":
              output = (this - that - zoneDelta) / 864e5;
              break;
            case "week":
              output = (this - that - zoneDelta) / 6048e5;
              break;
            default:
              output = this - that;
          }
          return asFloat ? output : absFloor(output);
        }
        function monthDiff(a, b) {
          if (a.date() < b.date()) {
            return -monthDiff(b, a);
          }
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b - anchor) / (anchor2 - anchor);
          }
          return -(wholeMonthDiff + adjust) || 0;
        }
        hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function toString3() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }
          var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
              m,
              utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
          }
          if (isFunction2(Date.prototype.toISOString)) {
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
            }
          }
          return formatMoment(
            m,
            utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        function inspect() {
          if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)";
          }
          var func = "moment", zone = "", prefix, year, datetime, suffix;
          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
          }
          prefix = "[" + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
          datetime = "-MM-DD[T]HH:mm:ss.SSS";
          suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }
        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }
        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }
        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        }
        function locale(key) {
          var newLocaleData;
          if (key === void 0) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }
            return this;
          }
        }
        var lang = deprecate(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function(key) {
            if (key === void 0) {
              return this.localeData();
            } else {
              return this.locale(key);
            }
          }
        );
        function localeData() {
          return this._locale;
        }
        var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }
        function localStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }
        function utcStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }
        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year(), 0, 1);
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3,
                1
              );
              break;
            case "month":
              time = startOfDate(this.year(), this.month(), 1);
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
              );
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
              );
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date());
              break;
            case "hour":
              time = this._d.valueOf();
              time -= mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              );
              break;
            case "minute":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;
            case "second":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3 + 3,
                1
              ) - 1;
              break;
            case "month":
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday() + 7
              ) - 1;
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              ) - 1;
              break;
            case "minute":
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;
            case "second":
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function unix() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function toDate() {
          return new Date(this.valueOf());
        }
        function toArray2() {
          var m = this;
          return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
          ];
        }
        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }
        function toJSON2() {
          return this.isValid() ? this.toISOString() : null;
        }
        function isValid$2() {
          return isValid(this);
        }
        function parsingFlags() {
          return extend2({}, getParsingFlags(this));
        }
        function invalidAt() {
          return getParsingFlags(this).overflow;
        }
        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        addFormatToken("N", 0, 0, "eraAbbr");
        addFormatToken("NN", 0, 0, "eraAbbr");
        addFormatToken("NNN", 0, 0, "eraAbbr");
        addFormatToken("NNNN", 0, 0, "eraName");
        addFormatToken("NNNNN", 0, 0, "eraNarrow");
        addFormatToken("y", ["y", 1], "yo", "eraYear");
        addFormatToken("y", ["yy", 2], 0, "eraYear");
        addFormatToken("y", ["yyy", 3], 0, "eraYear");
        addFormatToken("y", ["yyyy", 4], 0, "eraYear");
        addRegexToken("N", matchEraAbbr);
        addRegexToken("NN", matchEraAbbr);
        addRegexToken("NNN", matchEraAbbr);
        addRegexToken("NNNN", matchEraName);
        addRegexToken("NNNNN", matchEraNarrow);
        addParseToken(
          ["N", "NN", "NNN", "NNNN", "NNNNN"],
          function(input, array, config, token2) {
            var era = config._locale.erasParse(input, token2, config._strict);
            if (era) {
              getParsingFlags(config).era = era;
            } else {
              getParsingFlags(config).invalidEra = input;
            }
          }
        );
        addRegexToken("y", matchUnsigned);
        addRegexToken("yy", matchUnsigned);
        addRegexToken("yyy", matchUnsigned);
        addRegexToken("yyyy", matchUnsigned);
        addRegexToken("yo", matchEraYearOrdinal);
        addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
        addParseToken(["yo"], function(input, array, config, token2) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }
          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });
        function localeEras(m, format2) {
          var i, l, date, eras = this._eras || getLocale("en")._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case "string":
                date = hooks(eras[i].since).startOf("day");
                eras[i].since = date.valueOf();
                break;
            }
            switch (typeof eras[i].until) {
              case "undefined":
                eras[i].until = Infinity;
                break;
              case "string":
                date = hooks(eras[i].until).startOf("day").valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }
          return eras;
        }
        function localeErasParse(eraName, format2, strict) {
          var i, l, eras = this.eras(), name, abbr, narrow;
          eraName = eraName.toUpperCase();
          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) {
              switch (format2) {
                case "N":
                case "NN":
                case "NNN":
                  if (abbr === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNN":
                  if (name === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNNN":
                  if (narrow === eraName) {
                    return eras[i];
                  }
                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }
        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? 1 : -1;
          if (year === void 0) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }
        function getEraName() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }
          return "";
        }
        function getEraNarrow() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }
          return "";
        }
        function getEraAbbr() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }
          return "";
        }
        function getEraYear() {
          var i, l, dir, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
              return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
            }
          }
          return this.year();
        }
        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNameRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
        }
        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, "_erasAbbrRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }
        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNarrowRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }
        function matchEraAbbr(isStrict, locale2) {
          return locale2.erasAbbrRegex(isStrict);
        }
        function matchEraName(isStrict, locale2) {
          return locale2.erasNameRegex(isStrict);
        }
        function matchEraNarrow(isStrict, locale2) {
          return locale2.erasNarrowRegex(isStrict);
        }
        function matchEraYearOrdinal(isStrict, locale2) {
          return locale2._eraYearOrdinalRegex || matchUnsigned;
        }
        function computeErasParse() {
          var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
          }
          this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
          this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
          this._erasNarrowRegex = new RegExp(
            "^(" + narrowPieces.join("|") + ")",
            "i"
          );
        }
        addFormatToken(0, ["gg", 2], 0, function() {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ["GG", 2], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function addWeekYearFormatToken(token2, getter) {
          addFormatToken(0, [token2, token2.length], 0, getter);
        }
        addWeekYearFormatToken("gggg", "weekYear");
        addWeekYearFormatToken("ggggg", "weekYear");
        addWeekYearFormatToken("GGGG", "isoWeekYear");
        addWeekYearFormatToken("GGGGG", "isoWeekYear");
        addUnitAlias("weekYear", "gg");
        addUnitAlias("isoWeekYear", "GG");
        addUnitPriority("weekYear", 1);
        addUnitPriority("isoWeekYear", 1);
        addRegexToken("G", matchSigned);
        addRegexToken("g", matchSigned);
        addRegexToken("GG", match1to2, match2);
        addRegexToken("gg", match1to2, match2);
        addRegexToken("GGGG", match1to4, match4);
        addRegexToken("gggg", match1to4, match4);
        addRegexToken("GGGGG", match1to6, match6);
        addRegexToken("ggggg", match1to6, match6);
        addWeekParseToken(
          ["gggg", "ggggg", "GGGG", "GGGGG"],
          function(input, week, config, token2) {
            week[token2.substr(0, 2)] = toInt(input);
          }
        );
        addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
          week[token2] = hooks.parseTwoDigitYear(input);
        });
        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
          );
        }
        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }
        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }
        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }
        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }
        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
              week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }
        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        }
        addFormatToken("Q", 0, "Qo", "quarter");
        addUnitAlias("quarter", "Q");
        addUnitPriority("quarter", 7);
        addRegexToken("Q", match1);
        addParseToken("Q", function(input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        });
        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }
        addFormatToken("D", ["DD", 2], "Do", "date");
        addUnitAlias("date", "D");
        addUnitPriority("date", 9);
        addRegexToken("D", match1to2);
        addRegexToken("DD", match1to2, match2);
        addRegexToken("Do", function(isStrict, locale2) {
          return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(["D", "DD"], DATE);
        addParseToken("Do", function(input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        });
        var getSetDayOfMonth = makeGetSet("Date", true);
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
        addUnitAlias("dayOfYear", "DDD");
        addUnitPriority("dayOfYear", 4);
        addRegexToken("DDD", match1to3);
        addRegexToken("DDDD", match3);
        addParseToken(["DDD", "DDDD"], function(input, array, config) {
          config._dayOfYear = toInt(input);
        });
        function getSetDayOfYear(input) {
          var dayOfYear = Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
        }
        addFormatToken("m", ["mm", 2], 0, "minute");
        addUnitAlias("minute", "m");
        addUnitPriority("minute", 14);
        addRegexToken("m", match1to2);
        addRegexToken("mm", match1to2, match2);
        addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", false);
        addFormatToken("s", ["ss", 2], 0, "second");
        addUnitAlias("second", "s");
        addUnitPriority("second", 15);
        addRegexToken("s", match1to2);
        addRegexToken("ss", match1to2, match2);
        addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", false);
        addFormatToken("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ["SSS", 3], 0, "millisecond");
        addFormatToken(0, ["SSSS", 4], 0, function() {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ["SSSSS", 5], 0, function() {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ["SSSSSS", 6], 0, function() {
          return this.millisecond() * 1e3;
        });
        addFormatToken(0, ["SSSSSSS", 7], 0, function() {
          return this.millisecond() * 1e4;
        });
        addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
          return this.millisecond() * 1e5;
        });
        addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
          return this.millisecond() * 1e6;
        });
        addUnitAlias("millisecond", "ms");
        addUnitPriority("millisecond", 16);
        addRegexToken("S", match1to3, match1);
        addRegexToken("SS", match1to3, match2);
        addRegexToken("SSS", match1to3, match3);
        var token, getSetMillisecond;
        for (token = "SSSS"; token.length <= 9; token += "S") {
          addRegexToken(token, matchUnsigned);
        }
        function parseMs(input, array) {
          array[MILLISECOND] = toInt(("0." + input) * 1e3);
        }
        for (token = "S"; token.length <= 9; token += "S") {
          addParseToken(token, parseMs);
        }
        getSetMillisecond = makeGetSet("Milliseconds", false);
        addFormatToken("z", 0, 0, "zoneAbbr");
        addFormatToken("zz", 0, 0, "zoneName");
        function getZoneAbbr() {
          return this._isUTC ? "UTC" : "";
        }
        function getZoneName() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray2;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        if (typeof Symbol !== "undefined" && Symbol.for != null) {
          proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">";
          };
        }
        proto.toJSON = toJSON2;
        proto.toString = toString3;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate(
          "dates accessor is deprecated. Use date instead.",
          getSetDayOfMonth
        );
        proto.months = deprecate(
          "months accessor is deprecated. Use month instead",
          getSetMonth
        );
        proto.years = deprecate(
          "years accessor is deprecated. Use year instead",
          getSetYear
        );
        proto.zone = deprecate(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          getSetZone
        );
        proto.isDSTShifted = deprecate(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          isDaylightSavingTimeShifted
        );
        function createUnix(input) {
          return createLocal(input * 1e3);
        }
        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }
        function preParsePostFormat(string) {
          return string;
        }
        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;
        function get$1(format2, index, field, setter) {
          var locale2 = getLocale(), utc = createUTC().set(setter, index);
          return locale2[field](utc, format2);
        }
        function listMonthsImpl(format2, index, field) {
          if (isNumber2(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
          if (index != null) {
            return get$1(format2, index, field, "month");
          }
          var i, out = [];
          for (i = 0; i < 12; i++) {
            out[i] = get$1(format2, i, field, "month");
          }
          return out;
        }
        function listWeekdaysImpl(localeSorted, format2, index, field) {
          if (typeof localeSorted === "boolean") {
            if (isNumber2(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          } else {
            format2 = localeSorted;
            index = format2;
            localeSorted = false;
            if (isNumber2(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          }
          var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
          if (index != null) {
            return get$1(format2, (index + shift) % 7, field, "day");
          }
          for (i = 0; i < 7; i++) {
            out[i] = get$1(format2, (i + shift) % 7, field, "day");
          }
          return out;
        }
        function listMonths(format2, index) {
          return listMonthsImpl(format2, index, "months");
        }
        function listMonthsShort(format2, index) {
          return listMonthsImpl(format2, index, "monthsShort");
        }
        function listWeekdays(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
        }
        function listWeekdaysShort(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
        }
        function listWeekdaysMin(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
        }
        getSetGlobalLocale("en", {
          eras: [
            {
              since: "0001-01-01",
              until: Infinity,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            },
            {
              since: "0000-12-31",
              until: -Infinity,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output;
          }
        });
        hooks.lang = deprecate(
          "moment.lang is deprecated. Use moment.locale instead.",
          getSetGlobalLocale
        );
        hooks.langData = deprecate(
          "moment.langData is deprecated. Use moment.localeData instead.",
          getLocale
        );
        var mathAbs = Math.abs;
        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }
        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        }
        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        }
        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }
        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }
        function bubble() {
          var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
          if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
            milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
            days2 = 0;
            months2 = 0;
          }
          data.milliseconds = milliseconds2 % 1e3;
          seconds2 = absFloor(milliseconds2 / 1e3);
          data.seconds = seconds2 % 60;
          minutes2 = absFloor(seconds2 / 60);
          data.minutes = minutes2 % 60;
          hours2 = absFloor(minutes2 / 60);
          data.hours = hours2 % 24;
          days2 += absFloor(hours2 / 24);
          monthsFromDays = absFloor(daysToMonths(days2));
          months2 += monthsFromDays;
          days2 -= absCeil(monthsToDays(monthsFromDays));
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          data.days = days2;
          data.months = months2;
          data.years = years2;
          return this;
        }
        function daysToMonths(days2) {
          return days2 * 4800 / 146097;
        }
        function monthsToDays(months2) {
          return months2 * 146097 / 4800;
        }
        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }
          var days2, months2, milliseconds2 = this._milliseconds;
          units = normalizeUnits(units);
          if (units === "month" || units === "quarter" || units === "year") {
            days2 = this._days + milliseconds2 / 864e5;
            months2 = this._months + daysToMonths(days2);
            switch (units) {
              case "month":
                return months2;
              case "quarter":
                return months2 / 3;
              case "year":
                return months2 / 12;
            }
          } else {
            days2 = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
              case "week":
                return days2 / 7 + milliseconds2 / 6048e5;
              case "day":
                return days2 + milliseconds2 / 864e5;
              case "hour":
                return days2 * 24 + milliseconds2 / 36e5;
              case "minute":
                return days2 * 1440 + milliseconds2 / 6e4;
              case "second":
                return days2 * 86400 + milliseconds2 / 1e3;
              case "millisecond":
                return Math.floor(days2 * 864e5) + milliseconds2;
              default:
                throw new Error("Unknown unit " + units);
            }
          }
        }
        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }
          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }
        function makeAs(alias) {
          return function() {
            return this.as(alias);
          };
        }
        var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
        function clone$1() {
          return createDuration(this);
        }
        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + "s"]() : NaN;
        }
        function makeGetter(name) {
          return function() {
            return this.isValid() ? this._data[name] : NaN;
          };
        }
        var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
        function weeks() {
          return absFloor(this.days() / 7);
        }
        var round = Math.round, thresholds = {
          ss: 44,
          // a few seconds to seconds
          s: 45,
          // seconds to minute
          m: 45,
          // minutes to hour
          h: 22,
          // hours to day
          d: 26,
          // days to month/week
          w: null,
          // weeks to month
          M: 11
          // months to year
        };
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
          return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }
        function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
          var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
          if (thresholds2.w != null) {
            a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
          }
          a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale2;
          return substituteTimeAgo.apply(null, a);
        }
        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === void 0) {
            return round;
          }
          if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
          }
          return false;
        }
        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === void 0) {
            return false;
          }
          if (limit === void 0) {
            return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === "s") {
            thresholds.ss = limit - 1;
          }
          return true;
        }
        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var withSuffix = false, th = thresholds, locale2, output;
          if (typeof argWithSuffix === "object") {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }
          if (typeof argWithSuffix === "boolean") {
            withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === "object") {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }
          locale2 = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale2);
          if (withSuffix) {
            output = locale2.pastFuture(+this, output);
          }
          return locale2.postformat(output);
        }
        var abs$1 = Math.abs;
        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }
        function toISOString$1() {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
          if (!total) {
            return "P0D";
          }
          minutes2 = absFloor(seconds2 / 60);
          hours2 = absFloor(minutes2 / 60);
          seconds2 %= 60;
          minutes2 %= 60;
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
          totalSign = total < 0 ? "-" : "";
          ymSign = sign(this._months) !== sign(total) ? "-" : "";
          daysSign = sign(this._days) !== sign(total) ? "-" : "";
          hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
          return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
        }
        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          toISOString$1
        );
        proto$2.lang = lang;
        addFormatToken("X", 0, 0, "unix");
        addFormatToken("x", 0, 0, "valueOf");
        addRegexToken("x", matchSigned);
        addRegexToken("X", matchTimestamp);
        addParseToken("X", function(input, array, config) {
          config._d = new Date(parseFloat(input) * 1e3);
        });
        addParseToken("x", function(input, array, config) {
          config._d = new Date(toInt(input));
        });
        hooks.version = "2.29.4";
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate2;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;
        hooks.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          // <input type="datetime-local" step="0.001" />
          DATE: "YYYY-MM-DD",
          // <input type="date" />
          TIME: "HH:mm",
          // <input type="time" />
          TIME_SECONDS: "HH:mm:ss",
          // <input type="time" step="1" />
          TIME_MS: "HH:mm:ss.SSS",
          // <input type="time" step="0.001" />
          WEEK: "GGGG-[W]WW",
          // <input type="week" />
          MONTH: "YYYY-MM"
          // <input type="month" />
        };
        return hooks;
      });
    }
  });

  // src/core/log.js
  var require_log = __commonJS({
    "src/core/log.js"(exports) {
      init_axios2();
      var import_moment = __toESM(require_moment());
      var import_util = __toESM(require_util());
      var import_analytics = __toESM(require_analytics());
      async function addLog2({ serverUrl, logType, logInfo, isMain, subject, note, additionalSubmission, contactId, contactType, contactName }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        const { overridingPhoneNumberFormat } = await chrome.storage.local.get({ overridingPhoneNumberFormat: "" });
        if (!!subject) {
          logInfo["customSubject"] = subject;
        }
        if (!!rcUnifiedCrmExtJwt) {
          switch (logType) {
            case "Call":
              const addCallLogRes = await axios_default2.post(`${serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}`, { logInfo, note, additionalSubmission, overridingFormat: overridingPhoneNumberFormat, contactId, contactType, contactName });
              document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                type: "rc-adapter-trigger-call-logger-match",
                sessionIds: [logInfo.sessionId]
              }, "*");
              if (addCallLogRes.data.successful) {
                (0, import_util.showNotification)({ level: "success", message: "Call log added", ttl: 3e3 });
                (0, import_analytics.trackSyncCallLog)({ hasNote: note !== "" });
                const recordingSessionId = `rec-link-${logInfo.sessionId}`;
                const existingCallRecording = await chrome.storage.local.get(recordingSessionId);
                if (!!existingCallRecording[recordingSessionId]) {
                  await updateLog2({ logType: "Call", sessionId: logInfo.sessionId, recordingLink: existingCallRecording[recordingSessionId].recordingLink });
                }
                await resolveCachedLog2({ type: "Call", id: logInfo.sessionId });
              } else {
                (0, import_util.showNotification)({ level: "warning", message: addCallLogRes.data.message, ttl: 3e3 });
              }
              await chrome.storage.local.set({ [`rc-crm-call-log-${logInfo.sessionId}`]: { contact: { id: contactId } } });
              break;
            case "Message":
              if (!(0, import_moment.default)(logInfo.creationTime).isSame(/* @__PURE__ */ new Date(), "day")) {
                const isLogged = await chrome.storage.local.get(`rc-crm-conversation-log-${logInfo.conversationLogId}`);
                if (isLogged[`rc-crm-conversation-log-${logInfo.conversationLogId}`]?.logged) {
                  console.log(`skipping logged conversation on date ${logInfo.date}`);
                  break;
                }
              }
              const messageLogRes = await axios_default2.post(`${serverUrl}/messageLog?jwtToken=${rcUnifiedCrmExtJwt}`, { logInfo, additionalSubmission, overridingFormat: overridingPhoneNumberFormat, contactId, contactType, contactName });
              if (messageLogRes.data.successful) {
                if (isMain & messageLogRes.data.logIds.length > 0) {
                  (0, import_util.showNotification)({ level: "success", message: "Message log added", ttl: 3e3 });
                  (0, import_analytics.trackSyncMessageLog)();
                  let messageLogPrefCache = {};
                  messageLogPrefCache[`rc-crm-conversation-pref-${logInfo.conversationId}`] = {
                    contact: {
                      id: contactId,
                      type: contactType,
                      name: contactName
                    },
                    additionalSubmission
                  };
                  await chrome.storage.local.set(messageLogPrefCache);
                }
                await chrome.storage.local.set({ [`rc-crm-conversation-log-${logInfo.conversationLogId}`]: { logged: true } });
                await resolveCachedLog2({ type: "Message", id: logInfo.conversationId });
              }
              break;
          }
        } else {
          (0, import_util.showNotification)({ level: "warning", message: "Please go to Settings and authorize CRM platform", ttl: 3e3 });
        }
      }
      async function getLog2({ serverUrl, logType, sessionIds, requireDetails }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        if (!!rcUnifiedCrmExtJwt) {
          switch (logType) {
            case "Call":
              const callLogRes = await axios_default2.get(`${serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}&sessionIds=${sessionIds}&requireDetails=${requireDetails}`);
              return { successful: callLogRes.data.successful, callLogs: callLogRes.data.logs };
          }
        } else {
          return { successful: false, message: "Please go to Settings and authorize CRM platform" };
        }
      }
      function openLog2({ manifest: manifest2, platformName: platformName2, hostname, logId, contactType }) {
        const logPageUrl = manifest2.platforms[platformName2].logPageUrl.replace("{hostname}", hostname).replaceAll("{logId}", logId).replaceAll("{contactType}", contactType);
        window.open(logPageUrl);
      }
      async function updateLog2({ serverUrl, logType, sessionId, recordingLink, subject, note }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        if (!!rcUnifiedCrmExtJwt) {
          switch (logType) {
            case "Call":
              const patchBody = {
                sessionId,
                recordingLink,
                subject,
                note
              };
              const callLogRes = await axios_default2.patch(`${serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}`, patchBody);
              if (callLogRes.data.successful) {
                if (!!recordingLink) {
                  const recordingSessionId = `rec-link-${sessionId}`;
                  const existingCallRecording = await chrome.storage.local.get(recordingSessionId);
                  if (!!existingCallRecording[recordingSessionId]) {
                    await chrome.storage.local.remove(recordingSessionId);
                  }
                  console.log("call recording update done");
                } else {
                  (0, import_util.showNotification)({ level: "success", message: "Call log updated", ttl: 3e3 });
                }
              }
          }
        }
      }
      async function cacheCallNote2({ sessionId, note }) {
        let noteToCache = {};
        noteToCache[sessionId] = note;
        await chrome.storage.local.set(noteToCache);
      }
      async function getCachedNote2({ sessionId }) {
        const cachedNote = await chrome.storage.local.get(sessionId);
        if ((0, import_util.isObjectEmpty)(cachedNote)) {
          return "";
        } else {
          return cachedNote[sessionId];
        }
      }
      async function cacheUnresolvedLog2({ type, id, phoneNumber, direction, contactInfo, subject, note, date }) {
        let existingUnresolvedLogs = await chrome.storage.local.get({ unresolvedLogs: {} });
        existingUnresolvedLogs.unresolvedLogs[`${type}-${id}`] = {
          type,
          phoneNumber,
          direction,
          contactInfo,
          subject,
          note,
          date
        };
        await chrome.storage.local.set(existingUnresolvedLogs);
        console.log(`log cached for ${type}-${id}`);
      }
      async function getLogCache2({ cacheId }) {
        const existingUnresolvedLogs = await chrome.storage.local.get({ unresolvedLogs: {} });
        return existingUnresolvedLogs?.unresolvedLogs[cacheId];
      }
      async function getAllUnresolvedLogs2() {
        const existingUnresolvedLogs = await chrome.storage.local.get({ unresolvedLogs: {} });
        return existingUnresolvedLogs.unresolvedLogs;
      }
      async function resolveCachedLog2({ type, id }) {
        let existingUnresolvedLogs = await chrome.storage.local.get({ unresolvedLogs: {} });
        if (!!existingUnresolvedLogs.unresolvedLogs[`${type}-${id}`]) {
          delete existingUnresolvedLogs.unresolvedLogs[`${type}-${id}`];
          await chrome.storage.local.set(existingUnresolvedLogs);
        }
      }
      exports.addLog = addLog2;
      exports.getLog = getLog2;
      exports.openLog = openLog2;
      exports.updateLog = updateLog2;
      exports.cacheCallNote = cacheCallNote2;
      exports.getCachedNote = getCachedNote2;
      exports.cacheUnresolvedLog = cacheUnresolvedLog2;
      exports.getLogCache = getLogCache2;
      exports.getAllUnresolvedLogs = getAllUnresolvedLogs2;
      exports.resolveCachedLog = resolveCachedLog2;
    }
  });

  // src/core/contact.js
  var require_contact = __commonJS({
    "src/core/contact.js"(exports) {
      init_axios2();
      var import_analytics = __toESM(require_analytics());
      async function getContact2({ serverUrl, phoneNumber }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        const { overridingPhoneNumberFormat, overridingPhoneNumberFormat2, overridingPhoneNumberFormat3 } = await chrome.storage.local.get({ overridingPhoneNumberFormat: "", overridingPhoneNumberFormat2: "", overridingPhoneNumberFormat3: "" });
        const overridingFormats = [];
        if (overridingPhoneNumberFormat) {
          overridingFormats.push("+1**********");
          overridingFormats.push(overridingPhoneNumberFormat);
        }
        if (overridingPhoneNumberFormat2)
          overridingFormats.push(overridingPhoneNumberFormat2);
        if (overridingPhoneNumberFormat3)
          overridingFormats.push(overridingPhoneNumberFormat3);
        if (!!rcUnifiedCrmExtJwt) {
          const contactRes = await axios_default2.get(`${serverUrl}/contact?jwtToken=${rcUnifiedCrmExtJwt}&phoneNumber=${phoneNumber}&overridingFormat=${overridingFormats.toString()}`);
          return { matched: contactRes.data.successful, message: contactRes.data.message, contactInfo: contactRes.data.contact };
        } else {
          return { matched: false, message: "Please go to Settings and authorize CRM platform", contactInfo: null };
        }
      }
      async function createContact2({ serverUrl, phoneNumber, newContactName, newContactType }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        if (!!rcUnifiedCrmExtJwt) {
          const contactRes = await axios_default2.post(
            `${serverUrl}/contact?jwtToken=${rcUnifiedCrmExtJwt}`,
            {
              phoneNumber,
              newContactName,
              newContactType
            }
          );
          if (!!!contactRes.data?.successful && contactRes.data?.message === "Failed to create contact.") {
            await chrome.runtime.sendMessage(
              {
                type: "notifyToReconnectCRM"
              }
            );
          }
          document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
            type: "rc-adapter-trigger-contact-match",
            phoneNumbers: [phoneNumber]
          }, "*");
          await chrome.storage.local.set({ tempContactMatchTask: { contactId: contactRes.data.contact.id, phoneNumber, contactName: newContactName, contactType: newContactType } });
          import_analytics.default.createNewContact();
          return { matched: contactRes.data.successful, contactInfo: contactRes.data.contact };
        } else {
          return { matched: false, message: "Please go to Settings and authorize CRM platform", contactInfo: null };
        }
      }
      async function openContactPage2({ manifest: manifest2, platformName: platformName2, phoneNumber, contactId, contactType }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        let platformInfo = await chrome.storage.local.get("platform-info");
        if (platformInfo["platform-info"].hostname === "temp") {
          const hostnameRes = await axios_default2.get(`${manifest2.serverUrl}/hostname?jwtToken=${rcUnifiedCrmExtJwt}`);
          platformInfo["platform-info"].hostname = hostnameRes.data;
          await chrome.storage.local.set(platformInfo);
        }
        const hostname = platformInfo["platform-info"].hostname;
        if (!!contactId) {
          if (platformName2 === "bullhorn") {
            const { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
            if (crm_extension_bullhorn_user_urls?.atsUrl) {
              const newTab = window.open(`${crm_extension_bullhorn_user_urls.atsUrl}/BullhornStaffing/OpenWindow.cfm?Entity=${contactType}&id=${contactId}&view=Overview`, "_blank", "popup");
              newTab.blur();
              window.focus();
            }
            return;
          } else {
            const contactPageUrl = manifest2.platforms[platformName2].contactPageUrl.replace("{hostname}", hostname).replaceAll("{contactId}", contactId).replaceAll("{contactType}", contactType);
            window.open(contactPageUrl);
          }
        } else {
          const { matched: contactMatched, contactInfo } = await getContact2({ serverUrl: manifest2.serverUrl, phoneNumber });
          if (!contactMatched) {
            return;
          }
          if (platformName2 === "bullhorn") {
            const { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
            if (crm_extension_bullhorn_user_urls?.atsUrl) {
              for (const c of contactInfo) {
                if (c.isNewContact) {
                  continue;
                }
                const newTab = window.open(`${crm_extension_bullhorn_user_urls.atsUrl}/BullhornStaffing/OpenWindow.cfm?Entity=${c.type}&id=${c.id}&view=Overview`, "_blank", "popup");
                newTab.blur();
                window.focus();
              }
            }
            return;
          }
          for (const c of contactInfo) {
            if (c.isNewContact) {
              continue;
            }
            const hostname2 = platformInfo["platform-info"].hostname;
            const contactPageUrl = manifest2.platforms[platformName2].contactPageUrl.replace("{hostname}", hostname2).replaceAll("{contactId}", c.id).replaceAll("{contactType}", c.type);
            window.open(contactPageUrl);
          }
        }
      }
      exports.getContact = getContact2;
      exports.createContact = createContact2;
      exports.openContactPage = openContactPage2;
    }
  });

  // src/lib/rcAPI.js
  var require_rcAPI = __commonJS({
    "src/lib/rcAPI.js"(exports) {
      init_axios2();
      async function getUserInfo2({ serverUrl, extensionId, accountId }) {
        const userInfoHashResponse = await axios_default2.get(
          `${serverUrl}/userInfoHash?extensionId=${extensionId}&accountId=${accountId}`
        );
        return userInfoHashResponse.data;
      }
      exports.getUserInfo = getUserInfo2;
    }
  });

  // node_modules/idb/build/index.js
  var build_exports = {};
  __export(build_exports, {
    deleteDB: () => deleteDB,
    openDB: () => openDB,
    unwrap: () => unwrap,
    wrap: () => wrap
  });
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(this.request);
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event
      ));
    }
    return wrap(request).then(() => void 0);
  }
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  async function* iterate(...args) {
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
      cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
      return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
      yield proxiedCursor;
      cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
      advanceResults.delete(proxiedCursor);
    }
  }
  function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
  }
  var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, transactionDoneMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap, readMethods, writeMethods, cachedMethods, advanceMethodProps, methodMap, advanceResults, ittrProxiedCursorToOriginalProxy, cursorIteratorTraps;
  var init_build = __esm({
    "node_modules/idb/build/index.js"() {
      instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
      transactionDoneMap = /* @__PURE__ */ new WeakMap();
      transformCache = /* @__PURE__ */ new WeakMap();
      reverseTransformCache = /* @__PURE__ */ new WeakMap();
      idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            if (prop === "done")
              return transactionDoneMap.get(target);
            if (prop === "store") {
              return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
            return true;
          }
          return prop in target;
        }
      };
      unwrap = (value) => reverseTransformCache.get(value);
      readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      writeMethods = ["put", "add", "delete", "clear"];
      cachedMethods = /* @__PURE__ */ new Map();
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
      advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
      methodMap = {};
      advanceResults = /* @__PURE__ */ new WeakMap();
      ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
      cursorIteratorTraps = {
        get(target, prop) {
          if (!advanceMethodProps.includes(prop))
            return target[prop];
          let cachedFunc = methodMap[prop];
          if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function(...args) {
              advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
          }
          return cachedFunc;
        }
      };
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get(target, prop, receiver) {
          if (isIteratorProp(target, prop))
            return iterate;
          return oldTraps.get(target, prop, receiver);
        },
        has(target, prop) {
          return isIteratorProp(target, prop) || oldTraps.has(target, prop);
        }
      }));
    }
  });

  // src/images/outboundCallIcon.png
  var require_outboundCallIcon = __commonJS({
    "src/images/outboundCallIcon.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAACiFJREFUeF7tnGXMNcUVx/8khABF2+JeSnF3d2tKkULxoMWCBXcJbkGDtIW2BG2wBnd3KO7u7voBAvtLdmGZ5+zumZ29971Pcs+XlveZOXPmv2fm6NyxNKQkBMZKmj2crCGAiUowBHAIYCICidO70MA1JW0saUFJv8vleTP7txey/z5X0sWSvkmU0zN9NkmnSlrJMzhyzE2SdpT0XDgvBcBFJZ0gackGYT6UtK2kyyKFjh1+v6RFYidFjL9P0uJdADiDpGMkrR+xOEMvyr7ghpFzYoZ/nck1XsyEFmNHKFysBh4m6YAWCxdTDpIEj17Q/yXN3wvGJZ6tAUR1uc9+34GAHPl7OuATsuDuO1jSUj3gXbBsBeCfsy/7vwah7szun2vye+55SStIWlXSXsa8RyQt0MNNtmGNYtwhaaqGydEAonl12vKBpF0kXVix8EaSzjf+tkFundtstus5M0u6TdK0DsbRAD4uae4KxifmR+aLhoXRXrS4TC91dB049lw7ZKZc8zzgwSgKwO0lnW4sf4ukLSS97pR+TklPGmP3lHS8k0cvhuGz3l6hea9JwtsIKQpAtKRwjAtGD+eX9LeRO8IAbRrMgQfOL8L2m9gXd940xsJv5Xt8JQVAjMDNBgMWthg3AcDXfNUYhIe/ctPkjv9ed2wL8JD1hxQAD8nvtzIPjMEmCZs5VhLHNiSca5zsftCMueZNZyz2hqRlSh86CcDrcjekvM5Wks5J2OVEufb+OuDxXn6UP03g7ZmK5uFuVR3bpYPTlQTgM/mmyoItLOkhj6Q1Y7bONvAP4+/82zaJvOumo3l31YCH5r0cMEgC8CtJ4wcMJ5eE35dK+JUjgvJMO1bMjhAWvmsCPDTPclXIGqF51v2cBKBrcsudYnnR8JBwi/A5P2/J15oGaFhbjm9IGAxL84pxLgyqkgmuyQkbJSFhJRW4Y7lruyAMBeChgSGheYBX51G4MKgC8EtJvwpWnbhj7eA+JQkbEnEy8XIK1WkeRmsJ484L10sC8Nksvp014MjxsiKKthudQ9JjksYOGPwnu5M2b8s0v+u48yzNeze/81508E8C0HJj1pB0lWPhmCH7SToimPCOpKljmJTG1mkefDm2HvBgmQQgqfrdgk0cKWn/lhurmoalx+KHFJvoZT7gEduG4Sd/49hibanTeCkJQNL1YXRAymd57+rOceNWFJxiAQQ85CM1FVKs5hXzkwDE7IeOJYwnkfSZExzPMOsI4+JwP3ppiiyevrsCPO68ZSWR5I2lJABZDL8sjBm7ilsp/uwr6UBjV0dJAlgvnSFpO2NwCniwC70EMlELhevUHZUz83Jkec6lmSVe17uzinHrSDq5IjIgxTWLJPw0L1kuVyp4rE1kRFJl3txb4P+PyFDVAbhWNvlyYxckAz7x7q40jsud1H9d7XaPvNYcwz780BgMju2IIngMU+/YOgA5ZggzYcCMTDVCx9Ckkp5qKNrEHt1i/d9mCVDyimgKydlVWt55Mfv5aWyTtfunEVoBxFyRq52UF5+saR9nH4qP8t9IngMxvAlAaqx49SGtLgln20tVxSmuiM0kNRWmvOv0fVwTgAhEXDpfINmtee3XK7CVXyRcI2wb1eQBENflAmOXePYkKT1E0R2tLRMuzOGeyYM8xgMg8pNwDMt8OK/eNop9JGEkypQS8w4Mpl4A/5YF+H83pKaihgVsIkIsK4jfOe/pa5o/sH/3AlilhTEW+by8ETPUQhxnK6EwsKCVBYsBkEv/X8au6I05xbHbeXKPPhxKKLaDY/5ADokBkA1Y7gguCEfUU3Cy/Er4/knS1QOJUINQsQAul4VJuDAh0bqBP9dEZHM49mHClCOMQXq0icGg/T0WQOSnafyvxkbIFZKTayIaIW80BpEAoNxplRibeI6xv7cBkOQlmV2SoWXCymIQPERX1u7GQPJ2FHw+cjAhVude5m5FJmJ2XCOazTFYNLf3nNoAiFBVrW+kqXZ1Sn1vFg4uZoyl0IQ2V2V8+HCAT+aGK6GK2mR2nKL/PKwtgHCg5ko0EtLaWeh3hUMStIakJRnlkGgY56iHIJLVIaqxgLeWpNPhL9lH7VnfTQqAlA0xCGELCAlOSqCeu4wYm2TFBMbuKa2SmqJrCqK15NoW/dWUYnH4uWM7pxQAEYaGoLMMqUhAcJd5GjHJ/FZFM2gOXQwkHR7IDNjsLRHgY9Lz2Ka3sXbJVABhjlasZqzy77wV2LNn/MArawaSMwzb4orhGKQH82IXclTdwe/nLXudukpdAMjTgKcrLnRiaJxnD+FjcnfSQuIhHHiOOE+wykQDAKWDsDWFMcyhVNFZF1gXACJY3VsSHGQyNx7ivQbdD2FbiTWXugeGzCIy5pyMqu57muQ5IcnUFYAIQteCld/DqOAge/tqMEqUPKuelNH+xgejC6GOiHaImv5QMei4iodAUaB2CSAL081gPULEAlKNKyyqR0isLik0ntMWhLHhWvBYeOZMln2862ve0HFl0PfdOhvUNYBEB2gG7cAhUWbknZwnyijP5ThPmWkdvmGb2gkRCrUXrL1FT0ji3mz13KJrABHwN/nzMOvoYC3pkPK4Nx4tjRmDNqO9FtGusl5FjF67Ri8AZMHpc7/NijJIOPDFuRv7TTx+PNp6spW1mXwviTd8l8QI1SsAkQFLSLxrRRn8Oz5bl/3Q3n1zp9aFmlHN7r0EkA3hwtBPMo6xOxxaooM2bSJesKrG0VpMAtc6ITRVkSD+zrNIrwFEBjIrRBmWY0u9GBB7Eqc2AICPiK9odVnwro+UWCP1A0CEwIXBnbDST2/nxxlr2G/io5LcDd+t4MxzTzdSvwAs7kSOM/5dSBgU0k43NErc/QBSY9zJZaK9znpPN2L1fgLI4twtgGi9xeXvNEpa2Z3uYfuZI35iaMzwN3nb10j9BhCBCLEAkRdLFlGg4kdu2jjNjRs2BpAADn/ThpJFVQj4CxZjAkAEILOMK4FTbRF5O0JCHO9eEyUE6iplIoNU5XQPBICFEBzXuleavW5AqvodHH6ViQRuI40pDSwLVlWgKsbgL+4U0QnWuOl8AEbLijpwbf7oZTIIACIrlpAWOutVZbEXMj08/qF0mUp025P0COs5OPXUabw/qDFQP8BIyEdZdMsadPgVuLMlnZbQRI7jTF+jlfn2dpv9JOKgaGAZM2JVQCKrU0cU0LlDMUaecJAPRK14b6MpgHVIBlvvVmqFGEQAEZgCEhe8t2uLV/DEtmgWTU50JfC/uCLkE4mEuGurPkrr9y+DCmDx1Xv5o4rFGoBPEb/Vj0QOOoDFJnnddGiL5xVNxoaiFGm1VuDBfLQAWABR/CIcGZxUavuw5xfrjjYAC+H5oUX6q3m3ZyVs68ClMIU2e18YjEojEqNdOL3UiClkUVcuZ1EwJISFFP6pTfM4KOYhY6Mco1UDGzfWrwFDABORHgI4BDARgcTpQw1MBPBHzDW1YMnSNVAAAAAASUVORK5CYII=";
    }
  });

  // src/images/inboundCallIcon.png
  var require_inboundCallIcon = __commonJS({
    "src/images/inboundCallIcon.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAACotJREFUeF7tnGXMLUUShl/+ENyDE9wlBHdnkcUhuLtDcF2Cb3Yh2AaH4Bbcg7u7u7s7/GAD85CZy9ym2mbmfN+55NSfm/ud6p7qd6qry3pG04BaITBaq9GDwRoA2FIJBgAOAGyJQHz4vJKe8bF1oYFrStpE0vySZigf9KGk14r/XyDpckk/x+XsO47pJd0saTZJL0laUdJHrpRtAFxY0kmS+DdEn0vaVtL1fQeRX6DpJN0vaeoay0WSNusCwGkl/ad4K+tnAnJJqamZw6LsLPZUSUtJelLSbpKei47yM7CL7nXAq7jHlPRLfWiuBh4p6ZAWwv1LEnN0SbdLWqE2IdttzoYPYNuieVMZ4y+UtHlTDVyktGczNxSsPmxxSQ91ME81xReSJnbmy1UMhqPJ90maxpDtA0mLSXq/CYD/lHRjZMG8NQzu1eXhsZyklSTtZ4x7urCH83UI4DeSxnfmG1fSDxnPiIG3dKF9b1nzxd7UohFt4YDYQ9KlHmE3lnSx8duG5emcsUYv67eSxmsBYAg8vAlsqwkez4wB+HJ5jFvSnyDpMEnfR1C4TtIaDs+bkmbqAj1JbQBkuz4Y2LaA93ZIzhCAu0j6nzH4LklbSXovEQAM+gsG776SjkucI8RmAThWgu+Ji4LN4+Bw6dPS5nk1rxoQAvAdSbgsdcJNWMI9yhNAwKF2fSjcAZzUdxPGh1i+k4TNq9PYhf39KTAI8LDbbF8LPNb4RopcPgDxum8zJsBHCqq056G8CF6IS3eUHn6KrD6eXA2MaV4yeAjkA/AISYc6EnMYbNpipTjfbFuXNio08bIW8+YAiM1j21qa93F5YCRpXiWvD8BbJK3sLGobSee2WCgnJdo7kTMH9oatjDvShFK3MJpHhFHF6/VnIcOSRaT0eq4APgBflDSHM9mCkp7IfYDDT0x8ljEHf9u+4dwpAMbA47Ql+ZFNPgCtbTGpJPy+tkQUgn/p0vLFFuKEzyXcqHGcQfVDJHRgfFJqXta2rT/LB+BvxipiPmPqwtmu+Jcu4RbNLQmNyiHrZVdBP+DdI2lGY0K2bWPNq+YbDgB5NgkJK6mAjcXW5pAPwAlLJ9ny89A8wMu2ea5gPgAtu0K8masdISCwpyRhXSJOJl5OJQtAQMMNs5IfJB9IaDSyeakAkhKa3WFme1kRRepCXT5fhHJeGemkzmu9bHxOy1UBPE7bV1Inj/H5NJDsC1mYOq2ekJWJPc/9/SBJRzt/xB+bMmMiKxtjDf9MElmVzsDjIT4Ajy+2616OFMdIOjhjYSmsxKw/Gow5B5alge6UaB42zzq8UuT08vgE3cCIDjjNlm31tL8OHsMT9OcAGNPAnmhetRSfoKSarBOKaCKWvsrB2NrCbDHX/obmtA6RHBlCvIR9u0p63scUetP4ZW56u23cWsmBn3agEW/z+7GSADaVYhqYOo+Pj6hsriYAni5pB2fgVcVJvF5LidYpy6H1kmE1JSkuXA9qEKlk1URSx6byeRUtpIFrSbrGeALJgK9Tn1zjI4gn9b9QYOw+RW6PAyyHsM2crr0iTNksTTQQA48BdpOVO0s6LVNaqmbYkSkC43K3bjUVTjGuUC9AfLic+6YmADLmbCO0CtoEz4NOLItP1s9fSdqpyP5ckflS+oI95i6QnSX17dIqkm7NWAGdAkQyLmEituj4ZM8Qqz1rDECeQFxKh1Kd7i4yu9R+U8mq7m1ZFHTOT52gX/lSAMR1oa/FJWLKBxIXRtEdra0TJYOjEsf3LVsKgAhvVeiop7LFU+iA0r+r8+bGvCnPGXKeVAC3KwL8Mw3pqN5RWYsRCU0r67t70ddySmxwP/+eCqBPC3NOZPrraMR0tRDH2Uoo9DNuI2TLAZDWLsvo0xtzcsJq55H0rMGHT4lvOUpSDoAsEAAAok4kF9iiKQUny69krtUkeZ3VfkY2F0C8fUInl2jdwJ+L0QSS2PZuwpQtzIHkbeaOTTxcv+cCiJw0jVvtveQKLXDdtdFNSlepSxR6KHdaLSDDhU/0uU0AJItCzo7aa504ZVM7WOnK2tuQjkIPnaBfRiWXSInhjGNSkImYHdfo0aJ1jgOLLE3PqQmACEXsSmO3S3Tt75koNYE6rcMuYWfR5lDGh6wN5QVMgo+aZHYSRf+TrSmAzEA4t4zxxLWL0O/aBEnQGkqbkxm8tNHhY7ogonVERaTaUujOMn/ZtO8m+ow2AFI25ECgMFQnepNJHKTYMmJskhVuawbzYSb+UWvsprWEF2O1hYQWSimWl4GN7ZzaAIgwNASdYUhFAgJbNtKdCo/09MT4ohk0hy4G/M/HMmsl9cfxMkl+NOltDILeFkAmt1rh+HtOgRw/8IaApOQM3ba4ip0D6fGyV5qWPJ8NJjnMzYFOXaUuACTLTCeDZdCJoXGeUwh7yhZ1ryz4xuLAs8UfcRhoAKB04HoJsDEG+9mkC8yUowsAmZgufLrxLcJBJnOTQpRT6YqYNYEZp56yo0VU0UihWZdm4KdJnh3SmroCEEFwK6z8HocKhj+1r4ZDiZKn70oZnQi8MLpNQ8TOwGH3Xfv6r+ciUBaoXQLIg9k6XKJxiRMQny+nI59Tl87V+h0TAOHgSjnhkYEWNzSaA80iblbR9934Om7XAFLJQzOs0uWrZVtZSpRRXyzbefICyKca1k7wHSlYcVBZRMcs2fJGrXtdA4iAHCYYdsuOcVrS5JPi3mRtpQRmEsIcahaxM8hVptrqEXP0AkAmJ9sCWFabGgkHTsqcy4AJ+CSxcPnx356utP+X5ufKpJlKpl4ByPQYbzTRijKIg/HZGm2bnAUavHyiIBRqZjW79xJAZMeFIR4d3VgIDi3RQZM2kZYY/tFaTALXisNpqiJB/GvKQ3oNIDKQWSHKsBxb6sWA2JM4NQIAyQyiKKvzint9pMSiNBQAIgSnMp0MuBUu8SUMtrO3By+6iuYMvFRcIzdBgeuDnY7SUAGIILxphMUlcYkDZV3PBcfoIloy4J9ik+tEe50vihmJcSgB5MHYFjIvVgc9v+/oye60xCg4nEy2e5gRM7u34M1JhhpAhCDE4mDxtfFSoKKttstW4hCCJICJSOoU7AmsMw4HgDwfW4grgVNtEXk7Gt3xJXtNVqmWDJLP6R7WLeyCQVGdbeujXjcg+b6Dw9eYSOBGabg0sC6Yr0BV8eAv8jWi1E6w6KJLBg4tK+rAtVk1dZJ+ABBZeeNkcqyLgdVauNXO5R9Kl21pgTLp4dZzcOqp06R+UCP62ZO2guaMJ+SjLLp1YBBpp3PKr4mQ3WlCuFNos5X5Tu02G/HcftHAOhDk/wBpkgg6FNApaHEYpYSDvCBqxfsXCQXSbi6RDHa/ExF9Qf0IIEJTQMLAp3ZtkdMjtkWzaHKiK4F/uZ5AWo1ICFvrfmOrAqjx/Zd+BbBaGLfbacCsf50tqhWZDIDP/I2y0v0OYIUFt5sOD125ygStYqcoRRzeCDwmGVUArBZcfREu54aAD9umF3tGmm9UA7ASntYRXBru7VkJ25BCEoujzZ34laMqgHWAcHqpEfNdG+rK9SwKBwlhIYV/6h2k1HIuMkYtw98BwOgie8kwALAlugMABwC2RKDl8IEGtgTwdwa8ymDGTyWsAAAAAElFTkSuQmCC";
    }
  });

  // src/images/conflictLogIcon.png
  var require_conflictLogIcon = __commonJS({
    "src/images/conflictLogIcon.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAw3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDbDcMwCPz3FB3BBuzAOKRJpW7Q8YsNieKmJ5nXoQOT9s/7lR4dUChRXbhJa9lAQgJqAWeHDlsyDTtAQVk+1dNJgJXQPHrKLfqPejkF3KlF9SLEzyDWmZCYAPwjBO6wb9TjLYQkhBCcKCGg/q3chJfrF9Y9z2B/qRviee1bvtj1tmpzEGDHgtksIvsC2B8lVAuqWUCxxmINOkhFwkPMDvLvTgfSF9/GWRK+BkeLAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw1AUhU9Ti1IqDu0gopChOtlFRRxLFYtgobQVWnUweekfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfE2cFJ0UVKvC8ptIjxweV9nPfO4b77AKFVY6rZFwdUzTIyyYSYL6yK/a8IYIwqjKDETD2VXczBc33dw8f3uxjP8r735xpUiiYDfCJxnOmGRbxBPLtp6Zz3iSOsIinE58STBjVI/Mh12eU3zmWHBZ4ZMXKZeeIIsVjuYbmHWcVQiWeIo4qqUb6Qd1nhvMVZrTVYp0/+wlBRW8lynWoUSSwhhTREyGigihosxGjXSDGRofOEh3/E8afJJZOrCkaOBdShQnL84H/we7ZmaXrKTQolgMCLbX+MA/27QLtp29/Htt0+AfzPwJXW9ddbwNwn6c2uFj0ChraBi+uuJu8BlzvA8JMuGZIj+amEUgl4P6NvKgDhWyC45s6tc47TByBHs1q+AQ4OgYkyZa97vHugd27/3unM7wdoAHKisWHnmwAADXZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6M2QwOGIxNDctNDUzMC00ODdhLWE4ZDUtY2E4ZjY5ZTI0ZjQ5IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2ZTA5MGE2LTAwOTEtNDhlYi04YmNjLWM0MzAxZjUxYmI0NiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmM2MzYyNzBjLTlmODYtNGVkNy1hMWFkLWMyNDAyZmQ3NjExMSIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzE2OTYwMDQxNzg0MTgwIgogICBHSU1QOlZlcnNpb249IjIuMTAuMzgiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0OjA1OjI5VDEzOjIwOjQwKzA4OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNDowNToyOVQxMzoyMDo0MCswODowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmMWU1NWI1LTAwYmItNGZkMy04ZjRmLTVlNmM4NTFkNjZjZSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyNC0wNS0yOVQxMzoyMDo0MSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5MsnQqAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH6AUdBRQpNoe+rwAAAxVJREFUeNrtmj9oFEEUh78khsBCCAGDpDAkeAhqoTbG6kQwjTaC1wiOTGMQJIEQUfyHRhQkRFSUJGAzMKAW6azESistBBsVjGA8xCDpFAeCSCxuihDNZfZud2d32Q+uuZs3M+/tb+bezFsoKCgoKCgo8IERcrcRssvnHFo8OX4IeAxstl89BUYDrRZyHwAj5ADwBuhe89N3YF+gVTXJ+bR6EID6j/MAWwCd9GRaE376FaBcp0nZCHksl0vACNkBfAT6NmhaBbYHWi3nTQFnHZzHthnPlQKMkL3AJyBwNQH6A62W8qKAyRDOY9tO5UIBRshB4FWD5nsDrd5mXQGznmz9B8AIeRLY00QXg0bIE5lcAkbIAFgAeprsahEoBVqZrCngUgTOA/QCFzKlACNkn016OiLqctkmR9WsKOBOhM5j+5rKhAKMkGXgRUyBPRBo9TLtCnjg2G4O2GE/c44291OtACPkaWDGsfmuQKv31m4n8M7RbjjQ6mHqAmCE7AS+rHPW/zfX1apljf2K41BLwLZAq59pWwLXXZ1vkh7gaqr2ACNkCRhJ8Gg9asdMjQKmgbYEA9AO3E1FAIyQh4EhkueIEXLIawCMkO3APfwxbYRs86mAEaDkMQAl4IyXABghu4Fr+OeGnUviCrgFdKYgAJ3AzUQDYDO3U6SHYTunxBQwg6e64jq0hUjBmwuAQ3XHF2Uj5NFYzwIhqjtxHobqUaV2ffbb1WBTyAHGI3IeYMIIecWqcCKiPvuAMWp1iGgV0EB1xxehqkph9oDJDDiPnWO0CmiyuuMLp6qSqwJmyR6zkSwBI6SguerOejRyJxiGQSPk8aaWQITVnaT+BteyCAzUe9liIwVcjsn5pOgFLjakACNkP/A5xsnNAavzgEqMY20NtPoaVgG3Y346FeCDlX4l5rGmQikg5uqOL/YHWr12VcAY+eO8kwLsHduPjGR9YfgFdAVa/XFRwEoOFdDitAnaCD3PYQCerX369RRwjloNLi8srbcH/DcAgVbzwEHgic2msso34BG19wrmKSgoKCgoKChYxV9vddGkf4QilgAAAABJRU5ErkJggg==";
    }
  });

  // src/components/logPage.js
  var require_logPage = __commonJS({
    "src/components/logPage.js"(exports) {
      var outboundCallIcon = require_outboundCallIcon();
      var inboundCallIcon = require_inboundCallIcon();
      var conflictLogIcon = require_conflictLogIcon();
      function getLogPageRender({ id, manifest: manifest2, logType, triggerType, platformName: platformName2, direction, contactInfo, subject, note, loggedContactId, isUnresolved }) {
        const additionalChoiceFields = logType === "Call" ? manifest2.platforms[platformName2].page?.callLog?.additionalFields?.filter((f) => f.type === "selection") ?? [] : manifest2.platforms[platformName2].page?.messageLog?.additionalFields?.filter((f) => f.type === "selection") ?? [];
        const additionalCheckBoxFields = logType === "Call" ? manifest2.platforms[platformName2].page?.callLog?.additionalFields?.filter((f) => f.type === "checkbox") ?? [] : manifest2.platforms[platformName2].page?.messageLog?.additionalFields?.filter((f) => f.type === "checkbox") ?? [];
        const additionalInputFields = logType === "Call" ? manifest2.platforms[platformName2].page?.callLog?.additionalFields?.filter((f) => f.type === "inputField") ?? [] : manifest2.platforms[platformName2].page?.messageLog?.additionalFields?.filter((f) => f.type === "inputField") ?? [];
        const contactList = contactInfo.map((c) => {
          return { const: c.id, title: c.name, type: c.type, description: c.type ? `${c.type} - ${c.id}` : "", additionalInfo: c.additionalInfo, isNewContact: !!c.isNewContact };
        });
        const defaultActivityTitle = direction === "Inbound" ? `Inbound ${logType} from ${contactList[0]?.title ?? ""}` : `Outbound ${logType} to ${contactList[0]?.title ?? ""}`;
        let callSchemas = {};
        let callUISchemas = {};
        let callFormData = {};
        if (logType === "Call") {
          callSchemas = {
            activityTitle: {
              title: "Activity title",
              type: "string",
              manuallyEdited: false
            },
            note: {
              title: "Note",
              type: "string"
            }
          };
          callUISchemas = {
            activityTitle: {
              "ui:placeholder": "Enter title..."
            },
            note: {
              "ui:placeholder": "Enter note...",
              "ui:widget": "textarea"
            }
          };
          callFormData = {
            activityTitle: !!subject & subject !== "" ? subject : defaultActivityTitle,
            note: note ?? ""
          };
        }
        let page = {};
        switch (triggerType) {
          case "createLog":
          case "manual":
            let additionalFields = {};
            let additionalFieldsValue = {};
            for (const f of additionalChoiceFields) {
              if (!contactList[0]?.additionalInfo?.hasOwnProperty(f.const)) {
                continue;
              }
              additionalFields[f.const] = {
                title: f.title,
                type: "string",
                oneOf: [...contactList[0].additionalInfo[f.const], { const: "none", title: "None" }],
                associationField: !!f.contactDependent
              };
              additionalFieldsValue[f.const] = contactList[0].additionalInfo[f.const][0].const;
            }
            for (const f of additionalCheckBoxFields) {
              if (!contactList[0]?.additionalInfo?.hasOwnProperty(f.const)) {
                continue;
              }
              additionalFields[f.const] = {
                title: f.title,
                type: "boolean",
                associationField: !!f.contactDependent
              };
              additionalFieldsValue[f.const] = f.defaultValue ?? false;
            }
            for (const f of additionalInputFields) {
              if (!contactList[0]?.additionalInfo?.hasOwnProperty(f.const)) {
                continue;
              }
              additionalFields[f.const] = {
                title: f.title,
                type: "string",
                associationField: !!f.contactDependent
              };
              additionalFieldsValue[f.const] = f.defaultValue ?? "";
            }
            let warningField = {};
            if (contactList.length > 2) {
              warningField = {
                warning: {
                  type: "string",
                  description: "Multiple contacts found. Please select the contact to associate this activity with."
                }
              };
            } else if (contactList.length === 1) {
              warningMessage = {
                warning: {
                  type: "string",
                  description: "No contact found. Enter a name to have a placeholder contact made for you."
                }
              };
            }
            let requiredFieldNames = [];
            if (contactList.length === 1) {
              requiredFieldNames = ["newContactName"];
            }
            ;
            let newContactWidget = {
              newContactName: {
                "ui:widget": "hidden"
              },
              newContactType: {
                "ui:widget": "hidden"
              }
            };
            if (contactList[0].isNewContact) {
              if (!!manifest2.platforms[platformName2].contactTypes) {
                newContactWidget.newContactType = {};
              }
              newContactWidget.newContactName = {
                "ui:placeholder": "Enter name..."
              };
            }
            page = {
              title: `Save to ${platformName2}`,
              // optional
              schema: {
                type: "object",
                required: requiredFieldNames,
                properties: {
                  ...warningField,
                  id: {
                    type: "string"
                  },
                  contact: {
                    title: "Contact",
                    type: "string",
                    oneOf: contactList
                  },
                  newContactName: {
                    title: "New contact name",
                    type: "string"
                  },
                  contactType: {
                    title: "",
                    type: "string"
                  },
                  contactName: {
                    title: "",
                    type: "string"
                  },
                  triggerType: {
                    title: "",
                    type: "string"
                  },
                  isUnresolved: {
                    title: "",
                    type: "boolean"
                  },
                  newContactType: {
                    title: "Contact type",
                    type: "string",
                    oneOf: manifest2.platforms[platformName2].contactTypes?.map((t) => {
                      return { const: t, title: t };
                    }) ?? []
                  },
                  ...callSchemas,
                  ...additionalFields,
                  removeUnresolveButton: {
                    "type": "string",
                    "title": "Remove from unresolved list"
                  }
                }
              },
              uiSchema: {
                id: {
                  "ui:widget": "hidden"
                },
                warning: {
                  "ui:field": "admonition",
                  // or typography to show raw text
                  "ui:severity": "warning"
                  // "warning", "info", "error", "success"
                },
                contactType: {
                  "ui:widget": "hidden"
                },
                contactName: {
                  "ui:widget": "hidden"
                },
                triggerType: {
                  "ui:widget": "hidden"
                },
                isUnresolved: {
                  "ui:widget": "hidden"
                },
                submitButtonOptions: {
                  submitText: "Save"
                },
                removeUnresolveButton: {
                  "ui:field": "button",
                  "ui:variant": "contained",
                  // "text", "outlined", "contained", "plain"
                  "ui:fullWidth": true,
                  "ui:color": "danger.b03",
                  "ui:widget": isUnresolved ? "show" : "hidden"
                },
                ...callUISchemas,
                ...newContactWidget
              },
              formData: {
                id,
                contact: contactList[0].const,
                newContactType: manifest2.platforms[platformName2].contactTypes ? manifest2.platforms[platformName2].contactTypes[0] : "",
                newContactName: "",
                contactType: contactList[0]?.type ?? "",
                contactName: contactList[0]?.title ?? "",
                triggerType,
                isUnresolved: !!isUnresolved,
                ...callFormData,
                ...additionalFieldsValue
              }
            };
            break;
          case "editLog":
            page = {
              title: `Edit log`,
              // optional
              schema: {
                type: "object",
                required: ["activityTitle"],
                properties: {
                  id: {
                    type: "string"
                  },
                  contact: {
                    title: "Contact",
                    type: "string",
                    oneOf: contactList,
                    readOnly: true
                  },
                  activityTitle: {
                    title: "Activity title",
                    type: "string"
                  },
                  note: {
                    title: "Note",
                    type: "string"
                  }
                }
              },
              uiSchema: {
                id: {
                  "ui:widget": "hidden"
                },
                note: {
                  "ui:placeholder": "Enter note...",
                  "ui:widget": "textarea"
                },
                submitButtonOptions: {
                  submitText: "Update"
                }
              },
              formData: {
                id,
                contact: loggedContactId ?? contactList[0].const,
                activityTitle: subject ?? "",
                triggerType,
                note: note ?? ""
              }
            };
            break;
        }
        return page;
      }
      function getUpdatedLogPageRender({ manifest: manifest2, logType, platformName: platformName2, updateData }) {
        const updatedFieldKey = updateData.keys[0];
        let page = updateData.page;
        page.formData = updateData.formData;
        const additionalChoiceFields = logType === "Call" ? manifest2.platforms[platformName2].page?.callLog?.additionalFields?.filter((f) => f.type === "selection") ?? [] : manifest2.platforms[platformName2].page?.messageLog?.additionalFields?.filter((f) => f.type === "selection") ?? [];
        const additionalCheckBoxFields = logType === "Call" ? manifest2.platforms[platformName2].page?.callLog?.additionalFields?.filter((f) => f.type === "checkbox") ?? [] : manifest2.platforms[platformName2].page?.messageLog?.additionalFields?.filter((f) => f.type === "checkbox") ?? [];
        switch (updatedFieldKey) {
          case "contact":
            const contact = page.schema.properties.contact.oneOf.find((c) => c.const === page.formData.contact);
            if (contact.isNewContact) {
              if (!!manifest2.platforms[platformName2].contactTypes) {
                page.uiSchema.newContactType = {};
              }
              page.uiSchema.newContactName = {
                "ui:placeholder": "Enter name..."
              };
              page.schema.required = ["newContactName"];
              if (!!page.schema.properties.activityTitle && !page.schema.properties.activityTitle?.manuallyEdited) {
                page.formData.activityTitle = page.formData.activityTitle.startsWith("Inbound") ? "Inbound call from " : "Outbound call to ";
              }
            } else {
              page.formData.newContactName = "";
              page.formData.newContactType = "";
              page.uiSchema.newContactType = {
                "ui:widget": "hidden"
              };
              page.uiSchema.newContactName = {
                "ui:widget": "hidden"
              };
              page.schema.required = [];
              if (!!page.schema.properties.activityTitle && !page.schema.properties.activityTitle?.manuallyEdited) {
                page.formData.activityTitle = page.formData.activityTitle.startsWith("Inbound") ? `Inbound call from ${contact.title}` : `Outbound call to ${contact.title}`;
              }
            }
            page.formData.contactType = contact.type;
            page.formData.contactName = contact.title;
            const allAssociationFields = Object.keys(page.schema.properties);
            for (const af of allAssociationFields) {
              if (!!page.schema.properties[af].associationField) {
                delete page.schema.properties[af];
                delete page.formData[af];
              }
            }
            let additionalFields = {};
            let additionalFieldsValue = {};
            for (const f of additionalChoiceFields) {
              if (f.contactDependent && !contact?.additionalInfo?.hasOwnProperty(f.const)) {
                continue;
              }
              additionalFields[f.const] = {
                title: f.title,
                type: "string",
                oneOf: [...contact.additionalInfo[f.const], { const: "none", title: "None" }],
                associationField: f.contactDependent
              };
              additionalFieldsValue[f.const] = f.contactDependent ? contact.additionalInfo[f.const][0].const : page.formData[f.const];
            }
            for (const f of additionalCheckBoxFields) {
              if (f.contactDependent && !contact?.additionalInfo?.hasOwnProperty(f.const)) {
                continue;
              }
              additionalFields[f.const] = {
                title: f.title,
                type: "boolean",
                associationField: f.contactDependent
              };
              additionalFieldsValue[f.const] = f.contactDependent ? f.defaultValue : page.formData[f.const];
            }
            page.schema.properties = {
              ...page.schema.properties,
              ...additionalFields
            };
            page.formData = {
              ...page.formData,
              ...additionalFieldsValue
            };
            break;
          case "newContactName":
            if (!!page.schema.properties.activityTitle && !page.schema.properties.activityTitle.manuallyEdited) {
              page.formData.activityTitle = page.formData.activityTitle.startsWith("Inbound") ? `Inbound call from ${page.formData.newContactName}` : `Outbound call to ${page.formData.newContactName}`;
            }
            break;
          case "activityTitle":
            page.schema.properties.activityTitle.manuallyEdited = true;
            break;
        }
        return page;
      }
      function getUnresolvedLogsPageRender({ unresolvedLogs }) {
        const logsList = [];
        for (const cacheId of Object.keys(unresolvedLogs)) {
          const isMultipleContactConflit = unresolvedLogs[cacheId].contactInfo.length > 1;
          const isNoContact = unresolvedLogs[cacheId].contactInfo.length === 1;
          const contactName = isMultipleContactConflit ? "Multiple contacts" : unresolvedLogs[cacheId].contactInfo[0].name;
          logsList.push({
            const: cacheId,
            title: `${contactName} (${unresolvedLogs[cacheId].phoneNumber})`,
            description: isNoContact ? "Missing: No matched contact" : isMultipleContactConflit ? "Conflict: Multiple matched contacts" : "Conflict: Multiple associations",
            meta: unresolvedLogs[cacheId].date,
            icon: unresolvedLogs[cacheId].direction === "Inbound" ? inboundCallIcon : outboundCallIcon
          });
        }
        return {
          id: "unresolve",
          // tab id, required
          title: "Unresolve",
          type: "tab",
          // tab type
          hidden: Object.keys(unresolvedLogs).length === 0,
          iconUri: conflictLogIcon,
          // icon for tab, 24x24
          activeIconUri: conflictLogIcon,
          // icon for tab in active status, 24x24
          priority: 9,
          // schema and uiSchema are used to customize page, api is the same as [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form)
          schema: {
            type: "object",
            required: [],
            properties: {
              "warning": {
                "type": "string",
                "description": "Unresolved call logs are listed below. They cannot be auto logged because of conflicts like multiple matched contacts, multiple associations etc."
              },
              "record": {
                "type": "string",
                "oneOf": logsList
              }
            }
          },
          uiSchema: {
            warning: {
              "ui:field": "admonition",
              "ui:severity": "warning"
              // "warning", "info", "error", "success"
            },
            record: {
              "ui:field": "list",
              "ui:showIconAsAvatar": false
            }
          },
          formData: {
            record: ""
          }
        };
      }
      exports.getLogPageRender = getLogPageRender;
      exports.getUpdatedLogPageRender = getUpdatedLogPageRender;
      exports.getUnresolvedLogsPageRender = getUnresolvedLogsPageRender;
    }
  });

  // src/components/authPage.js
  var require_authPage = __commonJS({
    "src/components/authPage.js"(exports) {
      function getAuthPageRender({ manifest: manifest2, platformName: platformName2 }) {
        const authPage2 = manifest2.platforms[platformName2].auth.apiKey.page;
        const pageTitle = authPage2.title;
        const required = authPage2.content.filter((c) => c.required).map((c) => {
          return c.const;
        });
        const warning = authPage2.warning ? {
          warning: {
            type: "string",
            description: authPage2.warning
          }
        } : {};
        let content = {};
        for (const c of authPage2.content) {
          content[c.const] = {
            title: c.title,
            type: c.type
          };
        }
        let uiSchema = {
          submitButtonOptions: {
            // optional if you don't want to show submit button
            submitText: "Connect"
          },
          warning: {
            "ui:field": "admonition",
            "ui:severity": "warning"
            // "warning", "info", "error", "success"
          }
        };
        for (const c of authPage2.content) {
          if (!!c.uiSchema) {
            uiSchema[c.const] = c.uiSchema;
          }
        }
        let formData = {};
        for (const c of authPage2.content) {
          if (!!c.defaultValue) {
            formData[c.const] = c.defaultValue;
          }
        }
        const page = {
          id: "authPage",
          title: pageTitle,
          schema: {
            type: "object",
            required,
            properties: {
              ...warning,
              ...content
            }
          },
          uiSchema,
          formData
        };
        return page;
      }
      exports.getAuthPageRender = getAuthPageRender;
    }
  });

  // src/components/feedbackPage.js
  var require_feedbackPage = __commonJS({
    "src/components/feedbackPage.js"(exports) {
      function getFeedbackPageRender({ pageConfig }) {
        let properties = {};
        let uiSchema = {
          submitButtonOptions: {
            submitText: "Submit"
          }
        };
        let required = [];
        for (const e of pageConfig.elements) {
          if (!!e.required) {
            required.push(e.const);
          }
          switch (e.type) {
            case "string":
              properties[e.const] = {
                type: "string",
                description: e.title
              };
              uiSchema[e.const] = {
                "ui:field": "typography",
                "ui:variant": e.bold ? "body2" : "body1"
                // "caption1", "caption2", "body1", "body2", "subheading2", "subheading1", "title2", "title1"
              };
              break;
            case "inputField":
              properties[e.const] = {
                type: "string",
                title: e.title
              };
              uiSchema[e.const] = {
                "ui:placeholder": e.placeholder ?? "",
                "ui:widget": "textarea"
              };
              break;
            case "selection":
              properties[e.const] = {
                title: e.title,
                type: "string",
                oneOf: e.selections
              };
              break;
          }
        }
        return {
          id: "feedbackPage",
          title: "Feedback",
          schema: {
            type: "object",
            required,
            properties
          },
          uiSchema,
          formData: {}
        };
      }
      exports.getFeedbackPageRender = getFeedbackPageRender;
    }
  });

  // src/components/releaseNotesPage.js
  var require_releaseNotesPage = __commonJS({
    "src/components/releaseNotesPage.js"(exports) {
      init_axios2();
      async function getReleaseNotesPageRender({ manifest: manifest2, platformName: platformName2, registeredVersion }) {
        const releaseNotesResponse = await axios_default2.get(`${manifest2.serverUrl}/releaseNotes`);
        const releaseNotes = releaseNotesResponse.data;
        const registeredVersionNumbers = registeredVersion.split(".").map((v) => parseInt(v));
        const currentVersionNumbers = manifest2.version.split(".").map((v) => parseInt(v));
        if (!!releaseNotes[manifest2.version] && (currentVersionNumbers[0] > registeredVersionNumbers[0] || currentVersionNumbers[0] === registeredVersionNumbers[0] && currentVersionNumbers[1] > registeredVersionNumbers[1] || currentVersionNumbers[0] === registeredVersionNumbers[0] && currentVersionNumbers[1] === registeredVersionNumbers[1] && currentVersionNumbers[2] > registeredVersionNumbers[2])) {
          const globalNotes = releaseNotes[manifest2.version].global ?? [];
          const platformNotes = releaseNotes[manifest2.version][platformName2] ?? [];
          const allNotes = globalNotes.concat(platformNotes);
          const allTypes = allNotes.map((n) => {
            return n.type;
          }).filter((value, index, array) => {
            return array.indexOf(value) === index;
          });
          let notesRender = [];
          let notesUiSchema = [];
          for (const t of allTypes) {
            const targetNotes = allNotes.filter((n) => {
              return n.type === t;
            });
            notesRender.push({
              type: "string",
              description: t
            });
            notesUiSchema.push({
              "ui:field": "typography",
              "ui:variant": "body2"
              // "caption1", "caption2", "body1", "body2", "subheading2", "subheading1", "title2", "title1"
            });
            for (const n of targetNotes) {
              notesRender.push({
                type: "string",
                description: n.description
              });
              notesUiSchema.push({
                "ui:field": "typography",
                "ui:variant": "body1",
                // "caption1", "caption2", "body1", "body2", "subheading2", "subheading1", "title2", "title1"
                "ui:style": { margin: "-15px 0px 0px 20px" }
              });
            }
          }
          return {
            id: "releaseNotesPage",
            title: `Release Notes (v${manifest2.version})`,
            schema: {
              type: "object",
              properties: notesRender
            },
            uiSchema: notesUiSchema,
            formData: {}
          };
        } else {
          return null;
        }
      }
      exports.getReleaseNotesPageRender = getReleaseNotesPageRender;
    }
  });

  // src/popup.js
  init_axios2();
  var auth = require_auth();
  var { getLog, openLog, addLog, updateLog, getCachedNote, cacheCallNote, cacheUnresolvedLog, getLogCache, getAllUnresolvedLogs, resolveCachedLog } = require_log();
  var { getContact, createContact, openContactPage } = require_contact();
  var { responseMessage, isObjectEmpty, showNotification } = require_util();
  var { getUserInfo } = require_rcAPI();
  var { apiKeyLogin } = require_auth();
  var { openDB: openDB2 } = (init_build(), __toCommonJS(build_exports));
  var logPage = require_logPage();
  var authPage = require_authPage();
  var feedbackPage = require_feedbackPage();
  var releaseNotesPage = require_releaseNotesPage();
  var moment = require_moment();
  var {
    identify,
    reset,
    group,
    trackPage,
    trackRcLogin,
    trackRcLogout,
    trackPlacedCall,
    trackAnsweredCall,
    trackCallEnd,
    trackSentSMS,
    trackCreateMeeting,
    trackEditSettings,
    trackConnectedCall,
    trackOpenFeedback
  } = require_analytics();
  window.__ON_RC_POPUP_WINDOW = 1;
  var manifest = {};
  var registered = false;
  var crmAuthed = false;
  var platform = null;
  var platformName = "";
  var rcUserInfo = {};
  var extensionUserSettings = null;
  var leadingSMSCallReady = false;
  var trailingSMSLogInfo = [];
  var firstTimeLogoutAbsorbed = false;
  axios_default2.defaults.timeout = 3e4;
  async function checkC2DCollision() {
    try {
      const { rcForGoogleCollisionChecked } = await chrome.storage.local.get({ rcForGoogleCollisionChecked: false });
      const collidingC2DResponse = await fetch("chrome-extension://fddhonoimfhgiopglkiokmofecgdiedb/redirect.html");
      if (!rcForGoogleCollisionChecked && collidingC2DResponse.status === 200) {
        chrome.notifications.create({
          type: "basic",
          iconUrl: "/images/logo32.png",
          title: `Click-to-dial may not work`,
          message: "The RingCentral for Google Chrome extension has been detected. You may wish to customize your click-to-dial preferences for your desired behavior",
          priority: 1,
          buttons: [
            {
              title: "Configure"
            }
          ]
        });
        chrome.notifications.onButtonClicked.addListener(
          (notificationId, buttonIndex) => {
            window.open("https://youtu.be/tbCOM27GUbc");
          }
        );
        await chrome.storage.local.set({ rcForGoogleCollisionChecked: true });
      }
    } catch (e) {
    }
  }
  checkC2DCollision();
  async function getCustomManifest() {
    const { customCrmManifest } = await chrome.storage.local.get({ customCrmManifest: null });
    if (!!customCrmManifest) {
      manifest = customCrmManifest;
    }
  }
  getCustomManifest();
  async function showUnresolvedTabPage() {
    const unresolvedLogs = await getAllUnresolvedLogs();
    const unresolvedLogsPage = logPage.getUnresolvedLogsPageRender({ unresolvedLogs });
    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
      type: "rc-adapter-register-customized-page",
      page: unresolvedLogsPage
    }, "*");
    if (unresolvedLogsPage.hidden) {
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: "rc-adapter-navigate-to",
        path: "goBack"
      }, "*");
    }
  }
  window.addEventListener("message", async (e) => {
    const data = e.data;
    let noShowNotification = false;
    try {
      if (data) {
        switch (data.type) {
          case "rc-region-settings-notify":
            console.log("rc-region-settings-notify:", data);
            if (data.countryCode) {
              await chrome.storage.local.set(
                { selectedRegion: data.countryCode }
              );
            }
            break;
          case "rc-dialer-status-notify":
            if (data.ready) {
              const cachedClickToXRequest = await chrome.runtime.sendMessage(
                {
                  type: "checkForClickToXCache"
                }
              );
              if (cachedClickToXRequest) {
                if (cachedClickToXRequest.type === "c2d") {
                  document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                    type: "rc-adapter-new-call",
                    phoneNumber: cachedClickToXRequest.phoneNumber,
                    toCall: true
                  }, "*");
                }
                if (cachedClickToXRequest.type === "c2sms") {
                  document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                    type: "rc-adapter-new-sms",
                    phoneNumber: cachedClickToXRequest.phoneNumber,
                    conversation: true
                    // will go to conversation page if conversation existed
                  }, "*");
                }
              }
            }
          case "rc-webphone-connection-status-notify":
            if (data.connectionStatus === "connectionStatus-connected") {
              await auth.checkAuth();
              RCAdapter.showFeedback({
                onFeedback: function() {
                  const feedbackPageRender = feedbackPage.getFeedbackPageRender({ pageConfig: manifest.platforms[platformName].page.feedback });
                  document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                    type: "rc-adapter-register-customized-page",
                    page: feedbackPageRender
                  });
                  document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                    type: "rc-adapter-navigate-to",
                    path: `/customized/${feedbackPageRender.id}`
                    // '/meeting', '/dialer', '//history', '/settings'
                  }, "*");
                  trackOpenFeedback();
                }
              });
            }
            break;
          case "rc-adapter-pushAdapterState":
            extensionUserSettings = (await chrome.storage.local.get("extensionUserSettings")).extensionUserSettings;
            if (!registered) {
              const platformInfo2 = await chrome.storage.local.get("platform-info");
              platformName = platformInfo2["platform-info"].platformName;
              platformHostname = platformInfo2["platform-info"].hostname;
              platform = manifest.platforms[platformName];
              registered = true;
              document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                type: "rc-adapter-register-third-party-service",
                service: getServiceManifest(platform.name)
              }, "*");
            }
            break;
          case "rc-login-status-notify":
            console.log("rc-login-status-notify:", data.loggedIn, data.loginNumber, data.contractedCountryCode);
            const platformInfo = await chrome.storage.local.get("platform-info");
            platformName = platformInfo["platform-info"].platformName;
            rcUserInfo = (await chrome.storage.local.get("rcUserInfo")).rcUserInfo;
            if (data.loggedIn) {
              document.getElementById("rc-widget").style.zIndex = 0;
              const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
              crmAuthed = !!rcUnifiedCrmExtJwt;
              if (platformName === "pipedrive" && !await auth.checkAuth()) {
                chrome.runtime.sendMessage(
                  {
                    type: "popupWindowRequestPipedriveCallbackUri"
                  }
                );
              } else if (!rcUnifiedCrmExtJwt) {
                showNotification({ level: "warning", message: "Please authorize CRM platform account via Settings.", ttl: 1e4 });
              }
              try {
                const extId = JSON.parse(localStorage.getItem("sdk-rc-widgetplatform")).owner_id;
                const indexDB = await openDB2(`rc-widget-storage-${extId}`, 2);
                const rcInfo = await indexDB.get("keyvaluepairs", "dataFetcherV2-storageData");
                const userInfoResponse = await getUserInfo({
                  serverUrl: manifest.serverUrl,
                  extensionId: rcInfo.value.cachedData.extensionInfo.id,
                  accountId: rcInfo.value.cachedData.extensionInfo.account.id
                });
                rcUserInfo = {
                  rcUserName: rcInfo.value.cachedData.extensionInfo.name,
                  rcUserEmail: rcInfo.value.cachedData.extensionInfo.contact.email,
                  rcAccountId: userInfoResponse.accountId,
                  rcExtensionId: userInfoResponse.extensionId
                };
                await chrome.storage.local.set({ ["rcUserInfo"]: rcUserInfo });
                reset();
                identify({ extensionId: rcUserInfo?.rcExtensionId, rcAccountId: rcUserInfo?.rcAccountId, platformName });
                group({ rcAccountId: rcUserInfo?.rcAccountId });
                axios_default2.defaults.headers.common["rc-extension-id"] = rcUserInfo?.rcExtensionId;
                axios_default2.defaults.headers.common["rc-account-id"] = rcUserInfo?.rcAccountId;
                await showUnresolvedTabPage();
              } catch (e2) {
                reset();
                console.error(e2);
              }
            }
            let { rcLoginStatus } = await chrome.storage.local.get("rcLoginStatus");
            if (rcLoginStatus === null) {
              if (data.loggedIn) {
                trackRcLogin();
                rcLoginStatus = true;
                await chrome.storage.local.set({ ["rcLoginStatus"]: rcLoginStatus });
              }
            } else {
              if (data.loggedIn && !rcLoginStatus) {
                trackRcLogin();
                rcLoginStatus = true;
                await chrome.storage.local.set({ ["rcLoginStatus"]: rcLoginStatus });
              }
              if (!data.loggedIn && rcLoginStatus) {
                if (!firstTimeLogoutAbsorbed) {
                  firstTimeLogoutAbsorbed = true;
                } else {
                  trackRcLogout();
                  rcLoginStatus = false;
                  await chrome.storage.local.set({ ["rcLoginStatus"]: rcLoginStatus });
                }
              }
            }
            const registeredVersionInfo = await chrome.storage.local.get("rc-crm-extension-version");
            if (!!registeredVersionInfo[["rc-crm-extension-version"]]) {
              const releaseNotesPageRender = await releaseNotesPage.getReleaseNotesPageRender({ manifest, platformName, registeredVersion: registeredVersionInfo["rc-crm-extension-version"] });
              if (!!releaseNotesPageRender) {
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-adapter-register-customized-page",
                  page: releaseNotesPageRender
                });
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-adapter-navigate-to",
                  path: `/customized/${releaseNotesPageRender.id}`
                  // '/meeting', '/dialer', '//history', '/settings'
                }, "*");
              }
            }
            await chrome.storage.local.set({
              ["rc-crm-extension-version"]: manifest.version
            });
            break;
          case "rc-login-popup-notify":
            handleRCOAuthWindow(data.oAuthUri);
            break;
          case "rc-call-init-notify":
            trackPlacedCall();
            break;
          case "rc-call-start-notify":
            if (data.call.direction === "Inbound") {
              trackAnsweredCall();
            }
            break;
          case "rc-call-end-notify":
            const callDurationInSeconds = (data.call.endTime - data.call.startTime) / 1e3;
            trackCallEnd({ durationInSeconds: callDurationInSeconds });
            break;
          case "rc-ringout-call-notify":
            if (data.call.telephonyStatus === "NoCall" && data.call.terminationType === "final") {
              const callDurationInSeconds2 = (data.call.endTime - data.call.startTime) / 1e3;
              trackCallEnd({ durationInSeconds: callDurationInSeconds2 });
            }
            if (data.call.telephonyStatus === "CallConnected") {
              trackConnectedCall();
            }
            break;
          case "rc-active-call-notify":
            if (data.call.telephonyStatus === "CallConnected") {
              window.postMessage({ type: "rc-expandable-call-note-open", sessionId: data.call.sessionId }, "*");
            }
            if (data.call.telephonyStatus === "NoCall" && data.call.terminationType === "final") {
              window.postMessage({ type: "rc-expandable-call-note-terminate" }, "*");
            }
            if (data.call.telephonyStatus === "Ringing" && data.call.direction === "Inbound") {
              chrome.runtime.sendMessage({
                type: "openPopupWindow"
              });
              if (!!extensionUserSettings && extensionUserSettings.find((e2) => e2.name === "Open contact web page from incoming call")?.value) {
                await openContactPage({ manifest, platformName, phoneNumber: data.call.direction === "Inbound" ? data.call.from.phoneNumber : data.call.to.phoneNumber });
              }
            }
            break;
          case "rc-analytics-track":
            switch (data.event) {
              case "SMS: SMS sent successfully":
                trackSentSMS();
                break;
              case "Meeting Scheduled":
                trackCreateMeeting();
                break;
            }
            break;
          case "rc-callLogger-auto-log-notify":
            await chrome.storage.local.set({ rc_callLogger_auto_log_notify: data.autoLog });
            trackEditSettings({ changedItem: "auto-call-log", status: data.autoLog });
            break;
          case "rc-messageLogger-auto-log-notify":
            await chrome.storage.local.set({ rc_messageLogger_auto_log_notify: data.autoLog });
            trackEditSettings({ changedItem: "auto-message-log", status: data.autoLog });
            break;
          case "rc-route-changed-notify":
            if (data.path !== "/") {
              trackPage(data.path);
              if (data.path === "/customizedTabs/unresolve") {
                await showUnresolvedTabPage();
              }
            }
            if (!!data.path) {
              if (data.path.startsWith("/conversations/") || data.path.startsWith("/composeText")) {
                window.postMessage({ type: "rc-expandable-call-note-terminate" }, "*");
              }
            }
            break;
          case "rc-post-message-request":
            if (!crmAuthed && (data.path === "/callLogger" || data.path === "/messageLogger")) {
              showNotification({ level: "warning", message: "Please authorize CRM platform account via Settings.", ttl: 1e4 });
              break;
            }
            switch (data.path) {
              case "/authorize":
                const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
                crmAuthed = !!rcUnifiedCrmExtJwt;
                if (!rcUnifiedCrmExtJwt) {
                  switch (platform.auth.type) {
                    case "oauth":
                      let authUri;
                      let customState = "";
                      if (!!platform.auth.oauth.customState) {
                        customState = platform.auth.oauth.customState;
                      }
                      if (platformName === "pipedrive") {
                        authUri = manifest.platforms.pipedrive.redirectUri;
                      } else if (platformName === "bullhorn") {
                        let { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
                        if (crm_extension_bullhorn_user_urls?.oauthUrl) {
                          authUri = `${crm_extension_bullhorn_user_urls.oauthUrl}/authorize?response_type=code&action=Login&client_id=${platform.auth.oauth.clientId}&state=platform=${platform.name}&redirect_uri=https://ringcentral.github.io/ringcentral-embeddable/redirect.html`;
                        } else {
                          const { crm_extension_bullhornUsername } = await chrome.storage.local.get({ crm_extension_bullhornUsername: null });
                          showNotification({ level: "warning", message: "Bullhorn authorize error. Please refresh Bullhorn webpage and try again.", ttl: 3e4 });
                          const { data: crm_extension_bullhorn_user_urls2 } = await axios_default2.get(`https://rest.bullhornstaffing.com/rest-services/loginInfo?username=${crm_extension_bullhornUsername}`);
                          await chrome.storage.local.set({ crm_extension_bullhorn_user_urls: crm_extension_bullhorn_user_urls2 });
                          if (crm_extension_bullhorn_user_urls2?.oauthUrl) {
                            authUri = `${crm_extension_bullhorn_user_urls2.oauthUrl}/authorize?response_type=code&action=Login&client_id=${platform.auth.oauth.clientId}&state=platform=${platform.name}&redirect_uri=https://ringcentral.github.io/ringcentral-embeddable/redirect.html`;
                          }
                        }
                      } else {
                        authUri = `${platform.auth.oauth.authUrl}?response_type=code&client_id=${platform.auth.oauth.clientId}${!!platform.auth.oauth.scope && platform.auth.oauth.scope != "" ? `&${platform.auth.oauth.scope}` : ""}&state=${customState === "" ? `platform=${platform.name}` : customState}&redirect_uri=https://ringcentral.github.io/ringcentral-embeddable/redirect.html`;
                      }
                      handleThirdPartyOAuthWindow(authUri);
                      break;
                    case "apiKey":
                      const authPageRender = authPage.getAuthPageRender({ manifest, platformName });
                      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                        type: "rc-adapter-register-customized-page",
                        page: authPageRender
                      });
                      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                        type: "rc-adapter-navigate-to",
                        path: `/customized/${authPageRender.id}`
                        // '/meeting', '/dialer', '//history', '/settings'
                      }, "*");
                      break;
                  }
                } else {
                  window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                  auth.unAuthorize({ serverUrl: manifest.serverUrl, platformName, rcUnifiedCrmExtJwt });
                  window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                }
                responseMessage(
                  data.requestId,
                  {
                    data: "OK"
                  }
                );
                break;
              case "/customizedPage/inputChanged":
                if (data.body.page.id === "unresolve") {
                  const unresolvedRecordId = data.body.formData.record;
                  const unresolvedLog = await getLogCache({ cacheId: unresolvedRecordId });
                  const pageId = unresolvedRecordId.split("-")[1];
                  const logPageRender = logPage.getLogPageRender({
                    id: pageId,
                    manifest,
                    logType: unresolvedLog.type,
                    triggerType: "createLog",
                    platformName,
                    direction: unresolvedLog.direction ?? "",
                    contactInfo: unresolvedLog.contactInfo,
                    subject: unresolvedLog.subject ?? "",
                    note: unresolvedLog.note ?? "",
                    isUnresolved: true
                  });
                  if (unresolvedLog.type === "Call") {
                    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                      type: "rc-adapter-update-call-log-page",
                      page: logPageRender
                    }, "*");
                    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                      type: "rc-adapter-navigate-to",
                      path: `/log/call/${pageId}`
                    }, "*");
                  } else {
                    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                      type: "rc-adapter-update-messages-log-page",
                      page: logPageRender
                    }, "*");
                    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                      type: "rc-adapter-navigate-to",
                      path: `/log/messages/${pageId}`
                    }, "*");
                  }
                }
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-post-message-response",
                  responseId: data.requestId,
                  response: { data: "ok" }
                }, "*");
                break;
              case "/contacts/match":
                noShowNotification = true;
                let matchedContacts = {};
                const { tempContactMatchTask } = await chrome.storage.local.get({ tempContactMatchTask: null });
                if (data.body.phoneNumbers.length === 1 && !!tempContactMatchTask && tempContactMatchTask.phoneNumber === data.body.phoneNumbers[0]) {
                  matchedContacts[tempContactMatchTask.phoneNumber] = [
                    {
                      id: tempContactMatchTask.contactId,
                      type: platformName,
                      name: tempContactMatchTask.contactName,
                      phoneNumbers: [
                        {
                          phoneNumber: tempContactMatchTask.phoneNumber,
                          phoneType: "direct"
                        }
                      ],
                      entityType: platformName,
                      contactType: tempContactMatchTask.contactType
                    }
                  ];
                  await chrome.storage.local.remove("tempContactMatchTask");
                } else {
                  for (const contactPhoneNumber2 of data.body.phoneNumbers) {
                    if (!contactPhoneNumber2.startsWith("+")) {
                      continue;
                    }
                    const { matched: contactMatched, contactInfo } = await getContact({ serverUrl: manifest.serverUrl, phoneNumber: contactPhoneNumber2 });
                    if (contactMatched) {
                      if (!!!matchedContacts[contactPhoneNumber2]) {
                        matchedContacts[contactPhoneNumber2] = [];
                      }
                      for (var contactInfoItem of contactInfo) {
                        if (contactInfoItem.isNewContact) {
                          continue;
                        }
                        matchedContacts[contactPhoneNumber2].push({
                          id: contactInfoItem.id,
                          type: platformName,
                          name: contactInfoItem.name,
                          phoneNumbers: [
                            {
                              phoneNumber: contactPhoneNumber2,
                              phoneType: "direct"
                            }
                          ],
                          entityType: platformName,
                          contactType: contactInfoItem.type,
                          additionalInfo: contactInfoItem.additionalInfo
                        });
                      }
                    }
                  }
                }
                responseMessage(
                  data.requestId,
                  {
                    data: matchedContacts
                  }
                );
                break;
              case "/contacts/view":
                window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                await openContactPage({ manifest, platformName, phoneNumber: data.body.phoneNumbers[0].phoneNumber, contactId: data.body.id, contactType: data.body.contactType });
                window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                responseMessage(
                  data.requestId,
                  {
                    data: "ok"
                  }
                );
                break;
              case "/callLogger":
                let isAutoLog = false;
                const callAutoPopup = !!extensionUserSettings && extensionUserSettings.find((e2) => e2.name === "Auto pop up call log page")?.value;
                if (data.body.call.direction === "Inbound") {
                  if (!!data?.body?.call?.from?.extensionNumber) {
                    showNotification({ level: "warning", message: "Extension numbers cannot be logged", ttl: 3e3 });
                    break;
                  }
                } else {
                  if (!!data?.body?.call?.to?.extensionNumber) {
                    showNotification({ level: "warning", message: "Extension numbers cannot be logged", ttl: 3e3 });
                    break;
                  }
                }
                if (data.body.triggerType === "callLogSync") {
                  if (!!data.body.call?.recording?.link) {
                    console.log("call recording updating...");
                    await chrome.storage.local.set({ ["rec-link-" + data.body.call.sessionId]: { recordingLink: data.body.call.recording.link } });
                    await updateLog(
                      {
                        serverUrl: manifest.serverUrl,
                        logType: "Call",
                        sessionId: data.body.call.sessionId,
                        recordingLink: data.body.call.recording.link
                      }
                    );
                  }
                  break;
                }
                if (data.body.triggerType === "presenceUpdate") {
                  if (data.body.call.result === "Disconnected") {
                    data.body.triggerType = "createLog";
                    isAutoLog = true;
                  } else {
                    break;
                  }
                }
                window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                const contactPhoneNumber = data.body.call.direction === "Inbound" ? data.body.call.from.phoneNumber : data.body.call.to.phoneNumber;
                if (data.body.triggerType === "logForm") {
                  let additionalSubmission = {};
                  const additionalFields = manifest.platforms[platformName].page?.callLog?.additionalFields ?? [];
                  for (const f of additionalFields) {
                    if (data.body.formData[f.const] != "none") {
                      additionalSubmission[f.const] = data.body.formData[f.const];
                    }
                  }
                  switch (data.body.formData.triggerType) {
                    case "createLog":
                      let newContactInfo = {};
                      if (data.body.formData.contact === "createNewContact") {
                        const newContactResp = await createContact({
                          serverUrl: manifest.serverUrl,
                          phoneNumber: contactPhoneNumber,
                          newContactName: data.body.formData.newContactName,
                          newContactType: data.body.formData.newContactType
                        });
                        newContactInfo = newContactResp.contactInfo;
                      }
                      await addLog(
                        {
                          serverUrl: manifest.serverUrl,
                          logType: "Call",
                          logInfo: data.body.call,
                          isMain: true,
                          note: data.body.formData.note ?? "",
                          subject: data.body.formData.activityTitle ?? "",
                          additionalSubmission,
                          contactId: newContactInfo?.id ?? data.body.formData.contact,
                          contactType: data.body.formData.newContactName === "" ? data.body.formData.contactType : data.body.formData.newContactType,
                          contactName: data.body.formData.newContactName === "" ? data.body.formData.contactName : data.body.formData.newContactName
                        }
                      );
                      if (!!data.body.formData.isUnresolved) {
                        await showUnresolvedTabPage();
                      }
                      break;
                    case "editLog":
                      await updateLog({
                        serverUrl: manifest.serverUrl,
                        logType: "Call",
                        sessionId: data.body.call.sessionId,
                        subject: data.body.formData.activityTitle ?? "",
                        note: data.body.formData.note ?? ""
                      });
                      break;
                  }
                } else {
                  const { callLogs: fetchedCallLogs } = await getLog({
                    serverUrl: manifest.serverUrl,
                    logType: "Call",
                    sessionIds: data.body.call.sessionId,
                    requireDetails: data.body.triggerType === "editLog"
                  });
                  const { matched: callContactMatched, message: callLogContactMatchMessage, contactInfo: callMatchedContact } = await getContact({ serverUrl: manifest.serverUrl, phoneNumber: contactPhoneNumber });
                  if (!callContactMatched) {
                    showNotification({ level: "warning", message: callLogContactMatchMessage, ttl: 3e3 });
                    window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                    break;
                  }
                  let note = "";
                  let callLogSubject = "";
                  switch (data.body.triggerType) {
                    case "createLog":
                      note = await getCachedNote({ sessionId: data.body.call.sessionId });
                    case "editLog":
                      if (!!fetchedCallLogs) {
                        if (!!fetchedCallLogs.find((l) => l.sessionId == data.body.call.sessionId)?.logData?.note) {
                          note = fetchedCallLogs.find((l) => l.sessionId == data.body.call.sessionId).logData.note;
                        }
                        if (fetchedCallLogs.find((l) => l.sessionId == data.body.call.sessionId)?.logData?.subject) {
                          callLogSubject = fetchedCallLogs.find((l) => l.sessionId == data.body.call.sessionId).logData.subject;
                        }
                      }
                      const { hasConflict, autoSelectAdditionalSubmission } = getLogConflictInfo({ isAutoLog, contactInfo: callMatchedContact });
                      if (isAutoLog && !callAutoPopup) {
                        if (hasConflict) {
                          window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                          await cacheUnresolvedLog({
                            type: "Call",
                            id: data.body.call.sessionId,
                            phoneNumber: contactPhoneNumber,
                            direction: data.body.call.direction,
                            contactInfo: callMatchedContact ?? [],
                            subject: callLogSubject,
                            note,
                            date: moment(data.body.call.startTime).format("MM/DD/YYYY")
                          });
                          await showUnresolvedTabPage();
                          showNotification({ level: "warning", message: "Unable to log call with unresolved conflict.", ttl: 3e3 });
                        } else {
                          callLogSubject = data.body.call.direction === "Inbound" ? `Inbound Call from ${callMatchedContact[0]?.name ?? ""}` : `Outbound Call to ${callMatchedContact[0]?.name ?? ""}`;
                          await addLog(
                            {
                              serverUrl: manifest.serverUrl,
                              logType: "Call",
                              logInfo: data.body.call,
                              isMain: true,
                              note,
                              subject: callLogSubject,
                              additionalSubmission: autoSelectAdditionalSubmission,
                              contactId: callMatchedContact[0]?.id,
                              contactType: callMatchedContact[0]?.type,
                              contactName: callMatchedContact[0]?.name
                            }
                          );
                        }
                      } else {
                        let loggedContactId = null;
                        const existingCallLogRecord = await chrome.storage.local.get(`rc-crm-call-log-${data.body.call.sessionId}`);
                        if (!!existingCallLogRecord[`rc-crm-call-log-${data.body.call.sessionId}`]) {
                          loggedContactId = existingCallLogRecord[`rc-crm-call-log-${data.body.call.sessionId}`].contact.id;
                        }
                        const callPage = logPage.getLogPageRender({ id: data.body.call.sessionId, manifest, logType: "Call", triggerType: data.body.triggerType, platformName, direction: data.body.call.direction, contactInfo: callMatchedContact ?? [], subject: callLogSubject, note, loggedContactId });
                        if (platformName === "bullhorn") {
                          const { bullhornDefaultActionCode } = await chrome.storage.local.get({ bullhornDefaultActionCode: null });
                          if (!!bullhornDefaultActionCode && callPage.schema.properties.noteActions?.oneOf.some((o) => o.const === bullhornDefaultActionCode)) {
                            callPage.formData.noteActions = bullhornDefaultActionCode;
                          }
                        }
                        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                          type: "rc-adapter-update-call-log-page",
                          page: callPage
                        }, "*");
                        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                          type: "rc-adapter-navigate-to",
                          path: `/log/call/${data.body.call.sessionId}`
                        }, "*");
                      }
                      break;
                    case "viewLog":
                      window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                      if (manifest.platforms[platformName].canOpenLogPage) {
                        const uniqueContactTypes = [...new Set(callMatchedContact.map((c) => c.type))].filter((u) => !!u);
                        if (uniqueContactTypes.length === 1) {
                          openLog({ manifest, platformName, hostname: platformHostname, logId: fetchedCallLogs.find((l) => l.sessionId == data.body.call.sessionId)?.logId, contactType: uniqueContactTypes[0] });
                        } else {
                          for (const c of callMatchedContact) {
                            openLog({ manifest, platformName, hostname: platformHostname, logId: fetchedCallLogs.find((l) => l.sessionId == data.body.call.sessionId)?.logId, contactType: c.type });
                          }
                        }
                      } else {
                        const matchedEntity = data.body.call.direction === "Inbound" ? data.body.fromEntity : data.body.toEntity;
                        await openContactPage({ manifest, platformName, phoneNumber: contactPhoneNumber, contactId: matchedEntity.id, contactType: matchedEntity.contactType });
                      }
                      window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                      break;
                  }
                }
                responseMessage(
                  data.requestId,
                  {
                    data: "ok"
                  }
                );
                window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                break;
              case "/callLogger/inputChanged":
                await cacheCallNote({
                  sessionId: data.body.call.sessionId,
                  note: data.body.formData.note ?? ""
                });
                const page = logPage.getUpdatedLogPageRender({ manifest, platformName, updateData: data.body });
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-adapter-update-call-log-page",
                  page
                }, "*");
                responseMessage(
                  data.requestId,
                  {
                    data: "ok"
                  }
                );
                break;
              case "/callLogger/match":
                let callLogMatchData = {};
                const { successful, callLogs } = await getLog({ serverUrl: manifest.serverUrl, logType: "Call", sessionIds: data.body.sessionIds.toString(), requireDetails: false });
                if (successful) {
                  for (const sessionId of data.body.sessionIds) {
                    const correspondingLog = callLogs.find((l) => l.sessionId === sessionId);
                    if (!!correspondingLog?.matched) {
                      const existingCallLogRecord = await chrome.storage.local.get(`rc-crm-call-log-${sessionId}`);
                      if (!!existingCallLogRecord[`rc-crm-call-log-${sessionId}`]) {
                        callLogMatchData[sessionId] = [{ id: sessionId, note: "", contact: { id: existingCallLogRecord[`rc-crm-call-log-${sessionId}`].contact?.id } }];
                      } else {
                        callLogMatchData[sessionId] = [{ id: sessionId, note: "" }];
                      }
                    }
                  }
                } else {
                  showNotification({ level: "warning", message: "Cannot find call log", ttl: 3e3 });
                  break;
                }
                responseMessage(
                  data.requestId,
                  {
                    data: callLogMatchData
                  }
                );
                break;
              case "/messageLogger":
                if (!!data?.body?.conversation?.correspondents[0]?.extensionNumber) {
                  showNotification({ level: "warning", message: "Extension numbers cannot be logged", ttl: 3e3 });
                  break;
                }
                const { rc_messageLogger_auto_log_notify: messageAutoLogOn } = await chrome.storage.local.get({ rc_messageLogger_auto_log_notify: false });
                const messageAutoPopup = !!extensionUserSettings && extensionUserSettings.find((e2) => e2.name === "Auto pop up message log page")?.value;
                const messageLogPrefId = `rc-crm-conversation-pref-${data.body.conversation.conversationId}`;
                const existingConversationLogPref = await chrome.storage.local.get(messageLogPrefId);
                let getContactMatchResult = null;
                window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                if (messageAutoLogOn && data.body.triggerType === "auto" && !messageAutoPopup) {
                  if (!!existingConversationLogPref[messageLogPrefId]) {
                    await addLog({
                      serverUrl: manifest.serverUrl,
                      logType: "Message",
                      logInfo: data.body.conversation,
                      isMain: true,
                      note: "",
                      additionalSubmission: existingConversationLogPref[messageLogPrefId].additionalSubmission,
                      contactId: existingConversationLogPref[messageLogPrefId].contact.id,
                      contactType: existingConversationLogPref[messageLogPrefId].contact.type,
                      contactName: existingConversationLogPref[messageLogPrefId].contact.name
                    });
                  } else {
                    getContactMatchResult = (await getContact({
                      serverUrl: manifest.serverUrl,
                      phoneNumber: data.body.conversation.correspondents[0].phoneNumber
                    })).contactInfo;
                    const { hasConflict, autoSelectAdditionalSubmission } = getLogConflictInfo({ isAutoLog: messageAutoLogOn, contactInfo: getContactMatchResult });
                    if (hasConflict) {
                      window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                      await cacheUnresolvedLog({
                        type: "Message",
                        id: data.body.conversation.conversationId,
                        direction: "",
                        contactInfo: getContactMatchResult ?? [],
                        date: moment(data.body.conversation.messages[0].creationTime).format("MM/DD/YYYY")
                      });
                      await showUnresolvedTabPage();
                      showNotification({ level: "warning", message: "Unable to log message with unresolved conflict.", ttl: 3e3 });
                    } else {
                      await addLog({
                        serverUrl: manifest.serverUrl,
                        logType: "Message",
                        logInfo: data.body.conversation,
                        isMain: true,
                        note: "",
                        additionalSubmission: autoSelectAdditionalSubmission,
                        contactId: getContactMatchResult[0]?.id,
                        contactType: getContactMatchResult[0]?.type,
                        contactName: getContactMatchResult[0]?.name
                      });
                    }
                  }
                } else if (data.body.triggerType === "logForm") {
                  if (data.body.redirect) {
                    let additionalSubmission = {};
                    const additionalFields = manifest.platforms[platformName].page?.messageLog?.additionalFields ?? [];
                    for (const f of additionalFields) {
                      if (data.body.formData[f.const] != "none") {
                        additionalSubmission[f.const] = data.body.formData[f.const];
                      }
                    }
                    let newContactInfo = {};
                    if (data.body.formData.contact === "createNewContact") {
                      const newContactResp = await createContact({
                        serverUrl: manifest.serverUrl,
                        phoneNumber: data.body.conversation.correspondents[0].phoneNumber,
                        newContactName: data.body.formData.newContactName,
                        newContactType: data.body.formData.newContactType
                      });
                      newContactInfo = newContactResp.contactInfo;
                    }
                    await addLog({
                      serverUrl: manifest.serverUrl,
                      logType: "Message",
                      logInfo: data.body.conversation,
                      isMain: true,
                      note: "",
                      additionalSubmission,
                      contactId: newContactInfo?.id ?? data.body.formData.contact,
                      contactType: data.body.formData.newContactName === "" ? data.body.formData.contactType : data.body.formData.newContactType,
                      contactName: data.body.formData.newContactName === "" ? data.body.formData.contactName : data.body.formData.newContactName
                    });
                    for (const trailingConversations of trailingSMSLogInfo) {
                      await addLog({
                        serverUrl: manifest.serverUrl,
                        logType: "Message",
                        logInfo: trailingConversations,
                        isMain: false,
                        note: "",
                        additionalSubmission,
                        contactId: newContactInfo?.id ?? data.body.formData.contact,
                        contactType: data.body.formData.newContactName === "" ? data.body.formData.contactType : data.body.formData.newContactType,
                        contactName: data.body.formData.newContactName === "" ? data.body.formData.contactName : data.body.formData.newContactName
                      });
                    }
                    window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                  }
                } else {
                  if (!messageAutoLogOn && data.body.triggerType === "auto") {
                    break;
                  }
                  const isTrailing = !data.body.redirect && data.body.triggerType !== "auto";
                  if (isTrailing) {
                    if (!leadingSMSCallReady) {
                      trailingSMSLogInfo.push(data.body.conversation);
                      break;
                    }
                  } else {
                    leadingSMSCallReady = false;
                    trailingSMSLogInfo = [];
                  }
                  window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                  if (!isTrailing) {
                    getContactMatchResult = await getContact({
                      serverUrl: manifest.serverUrl,
                      phoneNumber: data.body.conversation.correspondents[0].phoneNumber
                    });
                  }
                  const messagePage = logPage.getLogPageRender({
                    id: data.body.conversation.conversationId,
                    manifest,
                    logType: "Message",
                    triggerType: data.body.triggerType,
                    platformName,
                    direction: "",
                    contactInfo: getContactMatchResult.contactInfo ?? []
                  });
                  if (platformName === "bullhorn") {
                    const { bullhornDefaultActionCode } = await chrome.storage.local.get({ bullhornDefaultActionCode: null });
                    if (!!bullhornDefaultActionCode && messagePage.schema.properties.noteActions?.oneOf.some((o) => o.const === bullhornDefaultActionCode)) {
                      messagePage.formData.noteActions = bullhornDefaultActionCode;
                    }
                  }
                  document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                    type: "rc-adapter-update-messages-log-page",
                    page: messagePage
                  }, "*");
                  document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                    type: "rc-adapter-navigate-to",
                    path: `/log/messages/${data.body.conversation.conversationId}`
                    // conversation id that you received from message logger event
                  }, "*");
                  if (!isTrailing) {
                    leadingSMSCallReady = true;
                  }
                  window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                }
                responseMessage(
                  data.requestId,
                  {
                    data: "ok"
                  }
                );
                break;
              case "/messageLogger/inputChanged":
                const updatedPage = logPage.getUpdatedLogPageRender({ manifest, logType: "Message", platformName, updateData: data.body });
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-adapter-update-messages-log-page",
                  page: updatedPage
                }, "*");
                responseMessage(
                  data.requestId,
                  {
                    data: "ok"
                  }
                );
                break;
              case "/messageLogger/match":
                let localMessageLogs = {};
                for (const conversationLogId of data.body.conversationLogIds) {
                  const savedMessageLogRecord = await chrome.storage.local.get(conversationLogId);
                  if (!!savedMessageLogRecord && !isObjectEmpty(savedMessageLogRecord)) {
                    localMessageLogs[conversationLogId] = [{ id: "dummyId" }];
                  }
                }
                responseMessage(
                  data.requestId,
                  {
                    data: localMessageLogs
                  }
                );
                break;
              case "/feedback":
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-post-message-response",
                  responseId: data.requestId,
                  response: { data: "ok" }
                }, "*");
                const feedbackPageRender = feedbackPage.getFeedbackPageRender({ pageConfig: manifest.platforms[platformName].page.feedback });
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-adapter-register-customized-page",
                  page: feedbackPageRender
                });
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                  type: "rc-adapter-navigate-to",
                  path: `/customized/${feedbackPageRender.id}`
                  // '/meeting', '/dialer', '//history', '/settings'
                }, "*");
                trackOpenFeedback();
                break;
              case "/settings":
                extensionUserSettings = data.body.settings;
                await chrome.storage.local.set({ extensionUserSettings });
                for (const setting of extensionUserSettings) {
                  trackEditSettings({ changedItem: setting.name.replaceAll(" ", "-"), status: setting.value });
                }
                break;
              case "/custom-button-click":
                switch (data.body.button.id) {
                  case "sms-template-button":
                    window.postMessage({
                      type: "rc-select-sms-template"
                    }, "*");
                    break;
                  case "insightlyGetApiKey":
                    const platformInfo2 = await chrome.storage.local.get("platform-info");
                    const hostname = platformInfo2["platform-info"].hostname;
                    window.open(`https://${hostname}/Users/UserSettings`);
                    break;
                  case "authPage":
                    window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                    const returnedToken = await auth.apiKeyLogin({ serverUrl: manifest.serverUrl, apiKey: data.body.button.formData.apiKey, apiUrl: data.body.button.formData.apiUrl, username: data.body.button.formData.username, password: data.body.button.formData.password });
                    crmAuthed = !!returnedToken;
                    window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
                    break;
                  case "feedbackPage":
                    let formUrl = manifest.platforms[platformName].page.feedback.url;
                    for (const formKey of Object.keys(data.body.button.formData)) {
                      formUrl = formUrl.replace(`{${formKey}}`, encodeURIComponent(data.body.button.formData[formKey]));
                    }
                    formUrl = formUrl.replace("{crmName}", manifest.platforms[platformName].displayName).replace("{userName}", rcUserInfo.rcUserName).replace("{userEmail}", rcUserInfo.rcUserEmail);
                    window.open(formUrl, "_blank");
                    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                      type: "rc-adapter-navigate-to",
                      path: "goBack"
                    }, "*");
                    break;
                  case "removeUnresolveButton":
                    await resolveCachedLog({ type: "Call", id: data.body.button.formData.id });
                    document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                      type: "rc-adapter-navigate-to",
                      path: "goBack"
                    }, "*");
                    await showUnresolvedTabPage();
                    break;
                }
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
      }
    } catch (e2) {
      window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
      console.log(e2);
      if (e2.response && e2.response.data && !noShowNotification && typeof e2.response.data === "string") {
        showNotification({ level: "warning", message: e2.response.data, ttl: 5e3 });
      } else if (e2.message.includes("timeout")) {
        showNotification({ level: "warning", message: "Timeout", ttl: 5e3 });
      } else {
        console.error(e2);
      }
      window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
    }
  });
  function getLogConflictInfo({ isAutoLog, contactInfo }) {
    if (!isAutoLog) {
      return { hasConflict: false, autoSelectAdditionalSubmission: {} };
    }
    let hasConflict = false;
    let autoSelectAdditionalSubmission = {};
    if (contactInfo.length > 1) {
      hasConflict = true;
    } else if (!!contactInfo[0]?.additionalInfo) {
      const additionalFieldsKeys = Object.keys(contactInfo[0].additionalInfo);
      for (const key of additionalFieldsKeys) {
        const field = contactInfo[0].additionalInfo[key];
        if (Array.isArray(field)) {
          if (field.length > 1) {
            hasConflict = true;
          } else {
            autoSelectAdditionalSubmission[key] = field[0].const;
          }
        }
      }
    }
    return { hasConflict, autoSelectAdditionalSubmission };
  }
  chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.type === "oauthCallBack") {
      if (request.platform === "rc") {
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-authorization-code",
          callbackUri: request.callbackUri
        }, "*");
        await chrome.storage.local.remove("rcUnifiedCrmExtJwt");
      } else if (request.platform === "thirdParty") {
        const returnedToken = await auth.onAuthCallback({ serverUrl: manifest.serverUrl, callbackUri: request.callbackUri });
        crmAuthed = !!returnedToken;
      }
      sendResponse({ result: "ok" });
    } else if (request.type === "pipedriveCallbackUri" && !await auth.checkAuth()) {
      await auth.onAuthCallback({ serverUrl: manifest.serverUrl, callbackUri: `${request.pipedriveCallbackUri}&state=platform=pipedrive` });
      console.log("pipedriveAltAuthDone");
      chrome.runtime.sendMessage(
        {
          type: "pipedriveAltAuthDone"
        }
      );
    } else if (request.type === "c2sms") {
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: "rc-adapter-new-sms",
        phoneNumber: request.phoneNumber,
        conversation: true
        // will go to conversation page if conversation existed
      }, "*");
      sendResponse({ result: "ok" });
    } else if (request.type === "c2d") {
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: "rc-adapter-new-call",
        phoneNumber: request.phoneNumber,
        toCall: true
      }, "*");
      sendResponse({ result: "ok" });
    } else if (request.type === "navigate") {
      if (request.path === "/feedback") {
        const feedbackPageRender = feedbackPage.getFeedbackPageRender({ pageConfig: manifest.platforms[platformName].page.feedback });
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-register-customized-page",
          page: feedbackPageRender
        });
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-navigate-to",
          path: `/customized/${feedbackPageRender.id}`
          // '/meeting', '/dialer', '//history', '/settings'
        }, "*");
        trackOpenFeedback();
      } else {
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-navigate-to",
          path: request.path
          // '/meeting', '/dialer', '//history', '/settings'
        }, "*");
      }
      sendResponse({ result: "ok" });
    } else if (request.type === "insightlyAuth") {
      const returnedToken = await apiKeyLogin({
        serverUrl: manifest.serverUrl,
        apiKey: request.apiKey,
        apiUrl: request.apiUrl
      });
      crmAuthed = !!returnedToken;
      window.postMessage({ type: "rc-apiKey-input-modal-close", platform: platform.name }, "*");
      chrome.runtime.sendMessage({
        type: "openPopupWindow"
      });
    }
  });
  function handleRCOAuthWindow(oAuthUri) {
    chrome.runtime.sendMessage({
      type: "openRCOAuthWindow",
      oAuthUri
    });
  }
  function handleThirdPartyOAuthWindow(oAuthUri) {
    chrome.runtime.sendMessage({
      type: "openThirdPartyAuthWindow",
      oAuthUri
    });
  }
  function getServiceManifest(serviceName) {
    const services = {
      name: serviceName,
      customizedPageInputChangedEventPath: "/customizedPage/inputChanged",
      // buttonEventPath: '/button-click',
      contactMatchPath: "/contacts/match",
      viewMatchedContactPath: "/contacts/view",
      contactMatchTtl: 7 * 24 * 60 * 60 * 1e3,
      // contact match cache time in seconds, set as 7 days
      contactNoMatchTtl: 7 * 24 * 60 * 60 * 1e3,
      // contact no match cache time in seconds, default is 5 minutes, from v1.10.2
      // show auth/unauth button in ringcentral widgets
      authorizationPath: "/authorize",
      authorizedTitle: "Logout",
      unauthorizedTitle: "Connect",
      showAuthRedDot: true,
      authorized: false,
      authorizedAccount: "",
      // Enable call log sync feature
      callLoggerPath: "/callLogger",
      callLogPageInputChangedEventPath: "/callLogger/inputChanged",
      callLogEntityMatcherPath: "/callLogger/match",
      callLoggerAutoSettingLabel: "Auto log call",
      messageLoggerPath: "/messageLogger",
      messagesLogPageInputChangedEventPath: "/messageLogger/inputChanged",
      messageLogEntityMatcherPath: "/messageLogger/match",
      messageLoggerAutoSettingLabel: "Auto log SMS",
      feedbackPath: "/feedback",
      settingsPath: "/settings",
      settings: [
        {
          name: "Auto log call - only pop up log page",
          value: !!extensionUserSettings && (extensionUserSettings.find((e) => e.name === "Auto pop up call log page")?.value ?? false)
        },
        {
          name: "Auto log SMS - only pop up log page",
          value: !!extensionUserSettings && (extensionUserSettings.find((e) => e.name === "Auto pop up message log page")?.value ?? false)
        },
        {
          name: "Open contact web page from incoming call",
          value: !!extensionUserSettings && (extensionUserSettings.find((e) => e.name === "Open contact web page from incoming call")?.value ?? false)
        },
        {
          name: "Open contact web page after creating it",
          value: !!extensionUserSettings && (extensionUserSettings.find((e) => e.name === "Open contact web page after creating it")?.value ?? true)
        }
      ],
      // SMS template button
      buttonEventPath: "/custom-button-click",
      buttons: [{
        fill: "rgba(102, 102, 102, 0.88)",
        id: "sms-template-button",
        type: "smsToolbar",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/RNGqgxlEHDJUXSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi6uKk6CIl/i8ptIjx4Lgf7+497t4B/nqZqWZwAlA1y0jGomImuyp2vqIHAoIYQ5/ETD2eWkzDc3zdw8fXuwjP8j735+hVciYDfCLxHNMNi3iDeGbT0jnvEwusKCnE58TjBl2Q+JHrsstvnAsO+3mmYKST88QCsVhoY7mNWdFQiaeJw4qqUb4/47LCeYuzWq6y5j35C0M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykUBTpebPtjBOjcBRo12/4+tu3GCRB4Bq60lr9SB2Y/Sa+1tPAR0L8NXFy3NHkPuNwBBp90yZAcKUDTn88D72f0TVlg4BboXnN7a+7j9AFIU1fLN8DBITBaoOx1j3d3tff275lmfz9t63Kl20nLgAAAAAZiS0dEAMcAxwDHM5ZYYgAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+cLFAQoM4q6FyMAAAIvSURBVFjD7Zg9aBRBFIC/vctd/kgRIiksFJU0aQMhJAREG/9QEhElSZFmEGRMiNEQSfM6QRNQmUamMypKII2F2OgVaiCFKEIghYKNSKJYCAZRLjYjnGu4Pfaye6vsg2XhzVvet29m3nszkHDxlJZbQGuEPs5ZI5/CflwHHAN2Rgh4sZqPM0mf4hSwWqkDzgD1EfpYI5VU/mHxlJb7QFuEPoatkbVqdnF/xJWkIU3UKaATpaVZaWnwr8HDQC5Cvx8rhBsDZoGfSstZa2QewEtI5IaB+RKeInDKGln0EgCXA1aBPb6hb0BXttaAL5cLxa7u/U+AIV9Kyv1eg7WK3G5gArhgjbxRWgaBR0C+xKzRU1qWgPaQfqatkYUQcK3AM6ATuGaNTDn9CHDbrcVN4EAG2AXsDfm0hIDLAwsODuCS0jIOYI3cAWacfsYaKWRintaMi9BB39Cc0jLgIK8AJ9079kR9FTi9hT4L3FVa+hzkYuyVRGk5D0yWMWksmd4/Kkmv+4Mwsl4h3ABwPcDsLTD6Vz8YQ+S6gadAUxmzz0CfNbIaa7OgtOwDHgbAbQDHt4KLFFBp2eESb7kcWwRGrJEXsbZbSkuTi1xHgOlE6Y6NBVBpyQL3gJ6glGON3KxFw3oDOBFg8wC4XNGpbpuj1ws8DzArAIeske+1aPnzAeMrwGClcHGXug/AEWvkSxIPTV+Bo9bI+ySe6n6488WrsDcL2ynvgGmf7rU18vi/vTz6Bc+FlUoLYeXrAAAAAElFTkSuQmCC",
        label: "SMS Template"
      }]
    };
    return services;
  }
})();
/*! Bundled license information:

moment/moment.js:
  (*! moment.js *)
  (*! version : 2.29.4 *)
  (*! authors : Tim Wood, Iskren Chernev, Moment.js contributors *)
  (*! license : MIT *)
  (*! momentjs.com *)
*/
