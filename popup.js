(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
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
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
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
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toString, getPrototypeOf, kindOf, kindOfTest, typeOfTest, isArray, isUndefined, isArrayBuffer, isString, isFunction, isNumber, isObject, isBoolean, isPlainObject, isDate, isFile, isBlob, isFileList, isStream, isFormData, isURLSearchParams, trim, _global, isContextDefined, extend, stripBOM, inherits, toFlatObject, endsWith, toArray, isTypedArray, forEachEntry, matchAll, isHTMLForm, toCamelCase, hasOwnProperty, isRegExp, reduceDescriptors, freezeMethods, toObjectSet, noop, toFiniteNumber, ALPHA, DIGIT, ALPHABET, generateString, toJSONObject, isAsyncFn, isThenable, utils_default;
  var init_utils = __esm({
    "node_modules/axios/lib/utils.js"() {
      "use strict";
      init_bind();
      ({ toString } = Object.prototype);
      ({ getPrototypeOf } = Object);
      kindOf = ((cache) => (thing) => {
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
        let kind;
        return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
      };
      isURLSearchParams = kindOfTest("URLSearchParams");
      trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      _global = (() => {
        if (typeof globalThis !== "undefined")
          return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      isContextDefined = (context) => !isUndefined(context) && context !== _global;
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
      isTypedArray = ((TypedArray) => {
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
          /[-_\s]([a-z\d])(\w*)/g,
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
          let ret;
          if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
            return false;
          }
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
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
        return obj;
      };
      noop = () => {
      };
      toFiniteNumber = (value, defaultValue) => {
        value = +value;
        return Number.isFinite(value) ? value : defaultValue;
      };
      ALPHA = "abcdefghijklmnopqrstuvwxyz";
      DIGIT = "0123456789";
      ALPHABET = {
        DIGIT,
        ALPHA,
        ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
      };
      generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
        let str = "";
        const { length } = alphabet;
        while (size--) {
          str += alphabet[Math.random() * length | 0];
        }
        return str;
      };
      toJSONObject = (obj) => {
        const stack = new Array(10);
        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }
            if (!("toJSON" in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = void 0;
              return target;
            }
          }
          return source;
        };
        return visit(obj, 0);
      };
      isAsyncFn = kindOfTest("AsyncFunction");
      isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
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
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        ALPHABET,
        generateString,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable
      };
    }
  });

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config2, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config2 && (this.config = config2);
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
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: utils_default.toJSONObject(this.config),
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
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config2, request, response, customProps) => {
        const axiosError = Object.create(prototype);
        utils_default.toFlatObject(error, axiosError, function filter2(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config2, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      AxiosError_default = AxiosError;
    }
  });

  // node_modules/axios/lib/helpers/null.js
  var null_default;
  var init_null = __esm({
    "node_modules/axios/lib/helpers/null.js"() {
      null_default = null;
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
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
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
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
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
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
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
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
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
      init_null();
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
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
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
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
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
  var FormData_default;
  var init_FormData = __esm({
    "node_modules/axios/lib/platform/browser/classes/FormData.js"() {
      "use strict";
      FormData_default = typeof FormData !== "undefined" ? FormData : null;
    }
  });

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default;
  var init_Blob = __esm({
    "node_modules/axios/lib/platform/browser/classes/Blob.js"() {
      "use strict";
      Blob_default = typeof Blob !== "undefined" ? Blob : null;
    }
  });

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default;
  var init_browser = __esm({
    "node_modules/axios/lib/platform/browser/index.js"() {
      init_URLSearchParams();
      init_FormData();
      init_Blob();
      browser_default = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams_default,
          FormData: FormData_default,
          Blob: Blob_default
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
    }
  });

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv
  });
  var hasBrowserEnv, hasStandardBrowserEnv, hasStandardBrowserWebWorkerEnv;
  var init_utils2 = __esm({
    "node_modules/axios/lib/platform/common/utils.js"() {
      hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
      hasStandardBrowserEnv = ((product) => {
        return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
      })(typeof navigator !== "undefined" && navigator.product);
      hasStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
    }
  });

  // node_modules/axios/lib/platform/index.js
  var platform_default;
  var init_platform = __esm({
    "node_modules/axios/lib/platform/index.js"() {
      init_browser();
      init_utils2();
      platform_default = {
        ...utils_exports,
        ...browser_default
      };
    }
  });

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
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
      if (name === "__proto__")
        return true;
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

  // node_modules/axios/lib/defaults/index.js
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
  var defaults, defaults_default;
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
      defaults = {
        transitional: transitional_default,
        adapter: ["xhr", "http"],
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils_default.isObject(data);
          if (isObjectPayload && utils_default.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils_default.isFormData(data);
          if (isFormData2) {
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
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform_default.classes.FormData,
          Blob: platform_default.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": void 0
          }
        }
      };
      utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
        defaults.headers[method] = {};
      });
      defaults_default = defaults;
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
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
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
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
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
  var $internals, isValidHeaderName, AxiosHeaders, AxiosHeaders_default;
  var init_AxiosHeaders = __esm({
    "node_modules/axios/lib/core/AxiosHeaders.js"() {
      "use strict";
      init_utils();
      init_parseHeaders();
      $internals = Symbol("internals");
      isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = utils_default.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders_default(header), valueOrRewrite);
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
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
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils_default.findKey(self2, _header);
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
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils_default.forEach(this, (value, header) => {
            const key = utils_default.findKey(headers, header);
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
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils_default.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
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
      };
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
        let mapped = key[0].toUpperCase() + key.slice(1);
        return {
          get: () => value,
          set(headerValue) {
            this[mapped] = headerValue;
          }
        };
      });
      utils_default.freezeMethods(AxiosHeaders);
      AxiosHeaders_default = AxiosHeaders;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config2 = this || defaults_default;
    const context = response || config2;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
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

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config2, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config2, request);
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
      init_utils();
      init_platform();
      cookies_default = platform_default.hasStandardBrowserEnv ? {
        write(name, value, expires, path, domain, secure) {
          const cookie = [name + "=" + encodeURIComponent(value)];
          utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
          utils_default.isString(path) && cookie.push("path=" + path);
          utils_default.isString(domain) && cookie.push("domain=" + domain);
          secure === true && cookie.push("secure");
          document.cookie = cookie.join("; ");
        },
        read(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      } : {
        write() {
        },
        read() {
          return null;
        },
        remove() {
        }
      };
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
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
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
      isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? function standardBrowserEnv() {
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
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
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
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  var isXHRAdapterSupported, xhr_default;
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
      isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      xhr_default = isXHRAdapterSupported && function(config2) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          let requestData = config2.data;
          const requestHeaders = AxiosHeaders_default.from(config2.headers).normalize();
          let { responseType, withXSRFToken } = config2;
          let onCanceled;
          function done() {
            if (config2.cancelToken) {
              config2.cancelToken.unsubscribe(onCanceled);
            }
            if (config2.signal) {
              config2.signal.removeEventListener("abort", onCanceled);
            }
          }
          let contentType;
          if (utils_default.isFormData(requestData)) {
            if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
              requestHeaders.setContentType(false);
            } else if ((contentType = requestHeaders.getContentType()) !== false) {
              const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
              requestHeaders.setContentType([type || "multipart/form-data", ...tokens].join("; "));
            }
          }
          let request = new XMLHttpRequest();
          if (config2.auth) {
            const username = config2.auth.username || "";
            const password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
          }
          const fullPath = buildFullPath(config2.baseURL, config2.url);
          request.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), true);
          request.timeout = config2.timeout;
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
              config: config2,
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
            reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config2, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config2, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
            const transitional2 = config2.transitional || transitional_default;
            if (config2.timeoutErrorMessage) {
              timeoutErrorMessage = config2.timeoutErrorMessage;
            }
            reject(new AxiosError_default(
              timeoutErrorMessage,
              transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
              config2,
              request
            ));
            request = null;
          };
          if (platform_default.hasStandardBrowserEnv) {
            withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config2));
            if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(fullPath)) {
              const xsrfValue = config2.xsrfHeaderName && config2.xsrfCookieName && cookies_default.read(config2.xsrfCookieName);
              if (xsrfValue) {
                requestHeaders.set(config2.xsrfHeaderName, xsrfValue);
              }
            }
          }
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
              request.setRequestHeader(key, val);
            });
          }
          if (!utils_default.isUndefined(config2.withCredentials)) {
            request.withCredentials = !!config2.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config2.responseType;
          }
          if (typeof config2.onDownloadProgress === "function") {
            request.addEventListener("progress", progressEventReducer(config2.onDownloadProgress, true));
          }
          if (typeof config2.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", progressEventReducer(config2.onUploadProgress));
          }
          if (config2.cancelToken || config2.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError_default(null, config2, request) : cancel);
              request.abort();
              request = null;
            };
            config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
            if (config2.signal) {
              config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(fullPath);
          if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config2));
            return;
          }
          request.send(requestData || null);
        });
      };
    }
  });

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters, renderReason, isResolvedHandle, adapters_default;
  var init_adapters = __esm({
    "node_modules/axios/lib/adapters/adapters.js"() {
      init_utils();
      init_null();
      init_xhr();
      init_AxiosError();
      knownAdapters = {
        http: null_default,
        xhr: xhr_default
      };
      utils_default.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { value });
        }
      });
      renderReason = (reason) => `- ${reason}`;
      isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
      adapters_default = {
        getAdapter: (adapters) => {
          adapters = utils_default.isArray(adapters) ? adapters : [adapters];
          const { length } = adapters;
          let nameOrAdapter;
          let adapter;
          const rejectedReasons = {};
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
              adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
              if (adapter === void 0) {
                throw new AxiosError_default(`Unknown adapter '${id}'`);
              }
            }
            if (adapter) {
              break;
            }
            rejectedReasons[id || "#" + i] = adapter;
          }
          if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(
              ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
            );
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new AxiosError_default(
              `There is no suitable adapter to dispatch the request ` + s,
              "ERR_NOT_SUPPORT"
            );
          }
          return adapter;
        },
        adapters: knownAdapters
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config2) {
    if (config2.cancelToken) {
      config2.cancelToken.throwIfRequested();
    }
    if (config2.signal && config2.signal.aborted) {
      throw new CanceledError_default(null, config2);
    }
  }
  function dispatchRequest(config2) {
    throwIfCancellationRequested(config2);
    config2.headers = AxiosHeaders_default.from(config2.headers);
    config2.data = transformData.call(
      config2,
      config2.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
      config2.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config2.adapter || defaults_default.adapter);
    return adapter(config2).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config2);
      response.data = transformData.call(
        config2,
        config2.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config2);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config2,
            config2.transformResponse,
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
      init_adapters();
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config3 = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
    });
    return config3;
  }
  var headersToObject;
  var init_mergeConfig = __esm({
    "node_modules/axios/lib/core/mergeConfig.js"() {
      "use strict";
      init_utils();
      init_AxiosHeaders();
      headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
    }
  });

  // node_modules/axios/lib/env/data.js
  var VERSION;
  var init_data = __esm({
    "node_modules/axios/lib/env/data.js"() {
      VERSION = "1.6.8";
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
        async request(configOrUrl, config2) {
          try {
            return await this._request(configOrUrl, config2);
          } catch (err) {
            if (err instanceof Error) {
              let dummy;
              Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
              const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
              if (!err.stack) {
                err.stack = stack;
              } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                err.stack += "\n" + stack;
              }
            }
            throw err;
          }
        }
        _request(configOrUrl, config2) {
          if (typeof configOrUrl === "string") {
            config2 = config2 || {};
            config2.url = configOrUrl;
          } else {
            config2 = configOrUrl || {};
          }
          config2 = mergeConfig(this.defaults, config2);
          const { transitional: transitional2, paramsSerializer, headers } = config2;
          if (transitional2 !== void 0) {
            validator_default.assertOptions(transitional2, {
              silentJSONParsing: validators2.transitional(validators2.boolean),
              forcedJSONParsing: validators2.transitional(validators2.boolean),
              clarifyTimeoutError: validators2.transitional(validators2.boolean)
            }, false);
          }
          if (paramsSerializer != null) {
            if (utils_default.isFunction(paramsSerializer)) {
              config2.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator_default.assertOptions(paramsSerializer, {
                encode: validators2.function,
                serialize: validators2.function
              }, true);
            }
          }
          config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders = headers && utils_default.merge(
            headers.common,
            headers[config2.method]
          );
          headers && utils_default.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method) => {
              delete headers[method];
            }
          );
          config2.headers = AxiosHeaders_default.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
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
            promise = Promise.resolve(config2);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config2;
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
        getUri(config2) {
          config2 = mergeConfig(this.defaults, config2);
          const fullPath = buildFullPath(config2.baseURL, config2.url);
          return buildURL(fullPath, config2.params, config2.paramsSerializer);
        }
      };
      utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config2) {
          return this.request(mergeConfig(config2 || {}, {
            method,
            url,
            data: (config2 || {}).data
          }));
        };
      });
      utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config2) {
            return this.request(mergeConfig(config2 || {}, {
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
      CancelToken = class {
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
          executor(function cancel(message, config2, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError_default(message, config2, request);
            resolvePromise(token.reason);
          });
        }
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
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
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        static source() {
          let cancel;
          const token = new CancelToken(function executor(c) {
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
    return function wrap(arr) {
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

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode, HttpStatusCode_default;
  var init_HttpStatusCode = __esm({
    "node_modules/axios/lib/helpers/HttpStatusCode.js"() {
      HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      HttpStatusCode_default = HttpStatusCode;
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
      init_AxiosHeaders();
      init_adapters();
      init_HttpStatusCode();
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
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders_default;
      axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.getAdapter = adapters_default.getAdapter;
      axios.HttpStatusCode = HttpStatusCode_default;
      axios.default = axios;
      axios_default = axios;
    }
  });

  // node_modules/axios/index.js
  var Axios2, AxiosError2, CanceledError2, isCancel2, CancelToken2, VERSION2, all2, Cancel, isAxiosError2, spread2, toFormData2, AxiosHeaders2, HttpStatusCode2, formToJSON, getAdapter, mergeConfig2;
  var init_axios2 = __esm({
    "node_modules/axios/index.js"() {
      init_axios();
      ({
        Axios: Axios2,
        AxiosError: AxiosError2,
        CanceledError: CanceledError2,
        isCancel: isCancel2,
        CancelToken: CancelToken2,
        VERSION: VERSION2,
        all: all2,
        Cancel,
        isAxiosError: isAxiosError2,
        spread: spread2,
        toFormData: toFormData2,
        AxiosHeaders: AxiosHeaders2,
        HttpStatusCode: HttpStatusCode2,
        formToJSON,
        getAdapter,
        mergeConfig: mergeConfig2
      } = axios_default);
    }
  });

  // src/config.json
  var require_config = __commonJS({
    "src/config.json"(exports, module) {
      module.exports = {
        default: {
          serverUrl: "https://lite-http-tunnel-s52m.onrender.com",
          platforms: {
            pipedrive: {
              name: "pipedrive",
              authType: "oauth",
              authUrl: "https://oauth.pipedrive.com/oauth/authorize",
              clientId: "5d4736e322561f57",
              redirectUri: "https://unified-crm-extension.labs.ringcentral.com/pipedrive-redirect",
              canOpenLogPage: false,
              page: {
                callLog: {
                  additionalFields: [
                    {
                      const: "deals",
                      title: "Deal",
                      type: "selection",
                      contactDependent: true
                    }
                  ]
                },
                messageLog: {
                  additionalFields: [
                    {
                      const: "deals",
                      title: "Deal",
                      type: "selection",
                      contactDependent: true
                    }
                  ]
                }
              }
            },
            insightly: {
              name: "insightly",
              authType: "apiKey",
              canOpenLogPage: true,
              page: {
                callLog: {
                  additionalFields: [
                    {
                      const: "organization",
                      title: "Organisation",
                      type: "selection",
                      contactDependent: true
                    },
                    {
                      const: "opportunity",
                      title: "Opportunity",
                      type: "selection",
                      contactDependent: true
                    },
                    {
                      const: "project",
                      title: "Project",
                      type: "selection",
                      contactDependent: true
                    }
                  ]
                },
                messageLog: {
                  additionalFields: [
                    {
                      const: "organization",
                      title: "Organisation",
                      type: "selection",
                      contactDependent: true
                    },
                    {
                      const: "opportunity",
                      title: "Opportunity",
                      type: "selection",
                      contactDependent: true
                    },
                    {
                      const: "project",
                      title: "Project",
                      type: "selection",
                      contactDependent: true
                    }
                  ]
                }
              }
            },
            clio: {
              name: "clio",
              authType: "oauth",
              authUrl: "https://app.clio.com/oauth/authorize",
              clientId: "JxK4GglGRoZnWoKA4sSLoXa5PHA2E6Mjisv3iIMY",
              canOpenLogPage: false,
              page: {
                callLog: {
                  additionalFields: [
                    {
                      const: "matters",
                      title: "Matter",
                      type: "selection",
                      contactDependent: true
                    },
                    {
                      const: "logTimeEntry",
                      title: "Log time entry",
                      type: "checkbox",
                      contactDependent: false,
                      defaultValue: true
                    }
                  ]
                },
                messageLog: {
                  additionalFields: [
                    {
                      const: "matters",
                      title: "Matter",
                      type: "selection",
                      contactDependent: true
                    }
                  ]
                }
              }
            },
            redtail: {
              name: "redtail",
              authType: "apiKey",
              canOpenLogPage: true
            },
            bullhorn: {
              name: "bullhorn",
              authType: "oauth",
              clientId: "5a1ff851-6b1c-454d-8501-826502e6fc76",
              canOpenLogPage: false,
              page: {
                callLog: {
                  additionalFields: [
                    {
                      const: "noteActions",
                      title: "Note action",
                      type: "selection",
                      contactDependent: false
                    }
                  ]
                },
                messageLog: {
                  additionalFields: [
                    {
                      const: "noteActions",
                      title: "Note action",
                      type: "selection",
                      contactDependent: false
                    }
                  ]
                }
              }
            }
          },
          mixpanelToken: "04acd7cb2e1867dcf98b6e8cf5ee1e1c",
          clientId: "3rJq9BxcTCm-I7CFcY19ew",
          rcServer: "https://platform.ringcentral.com",
          redirectUri: "https://ringcentral.github.io/ringcentral-embeddable/redirect.html",
          version: "0.8.19",
          releaseNote: {
            all: "",
            pipedrive: "",
            insightly: "",
            clio: "",
            redtail: "",
            bullhorn: ""
          },
          welcomeMessage: {
            pipedrive: {
              docLink: "https://ringcentral.github.io/rc-unified-crm-extension/pipedrive/",
              VideoLink: "https://youtu.be/Hu0qC13HDkQ"
            },
            insightly: {
              docLink: "https://ringcentral.github.io/rc-unified-crm-extension/insightly/",
              VideoLink: "https://youtu.be/5hWvVI12UAc"
            },
            clio: {
              docLink: "https://ringcentral.github.io/rc-unified-crm-extension/clio/",
              VideoLink: "https://youtu.be/pQgdsAR1UCI"
            },
            redtail: {
              docLink: "https://ringcentral.github.io/rc-unified-crm-extension/redtail/",
              VideoLink: "https://youtu.be/1pbpbEvp5uQ"
            },
            bullhorn: {
              docLink: "https://ringcentral.github.io/rc-unified-crm-extension/bullhorn/",
              VideoLink: "https://youtu.be/afbdQD0y4Yo"
            }
          },
          platformsWithDifferentContactType: {
            insightly: [
              "Lead",
              "Contact"
            ],
            bullhorn: [
              "Candidate",
              "Contact"
            ]
          }
        },
        serverUrl: "https://lite-http-tunnel-s52m.onrender.com",
        platforms: {
          pipedrive: {
            name: "pipedrive",
            authType: "oauth",
            authUrl: "https://oauth.pipedrive.com/oauth/authorize",
            clientId: "5d4736e322561f57",
            redirectUri: "https://unified-crm-extension.labs.ringcentral.com/pipedrive-redirect",
            canOpenLogPage: false,
            page: {
              callLog: {
                additionalFields: [
                  {
                    const: "deals",
                    title: "Deal",
                    type: "selection",
                    contactDependent: true
                  }
                ]
              },
              messageLog: {
                additionalFields: [
                  {
                    const: "deals",
                    title: "Deal",
                    type: "selection",
                    contactDependent: true
                  }
                ]
              }
            }
          },
          insightly: {
            name: "insightly",
            authType: "apiKey",
            canOpenLogPage: true,
            page: {
              callLog: {
                additionalFields: [
                  {
                    const: "organization",
                    title: "Organisation",
                    type: "selection",
                    contactDependent: true
                  },
                  {
                    const: "opportunity",
                    title: "Opportunity",
                    type: "selection",
                    contactDependent: true
                  },
                  {
                    const: "project",
                    title: "Project",
                    type: "selection",
                    contactDependent: true
                  }
                ]
              },
              messageLog: {
                additionalFields: [
                  {
                    const: "organization",
                    title: "Organisation",
                    type: "selection",
                    contactDependent: true
                  },
                  {
                    const: "opportunity",
                    title: "Opportunity",
                    type: "selection",
                    contactDependent: true
                  },
                  {
                    const: "project",
                    title: "Project",
                    type: "selection",
                    contactDependent: true
                  }
                ]
              }
            }
          },
          clio: {
            name: "clio",
            authType: "oauth",
            authUrl: "https://app.clio.com/oauth/authorize",
            clientId: "JxK4GglGRoZnWoKA4sSLoXa5PHA2E6Mjisv3iIMY",
            canOpenLogPage: false,
            page: {
              callLog: {
                additionalFields: [
                  {
                    const: "matters",
                    title: "Matter",
                    type: "selection",
                    contactDependent: true
                  },
                  {
                    const: "logTimeEntry",
                    title: "Log time entry",
                    type: "checkbox",
                    contactDependent: false,
                    defaultValue: true
                  }
                ]
              },
              messageLog: {
                additionalFields: [
                  {
                    const: "matters",
                    title: "Matter",
                    type: "selection",
                    contactDependent: true
                  }
                ]
              }
            }
          },
          redtail: {
            name: "redtail",
            authType: "apiKey",
            canOpenLogPage: true
          },
          bullhorn: {
            name: "bullhorn",
            authType: "oauth",
            clientId: "5a1ff851-6b1c-454d-8501-826502e6fc76",
            canOpenLogPage: false,
            page: {
              callLog: {
                additionalFields: [
                  {
                    const: "noteActions",
                    title: "Note action",
                    type: "selection",
                    contactDependent: false
                  }
                ]
              },
              messageLog: {
                additionalFields: [
                  {
                    const: "noteActions",
                    title: "Note action",
                    type: "selection",
                    contactDependent: false
                  }
                ]
              }
            }
          }
        },
        mixpanelToken: "04acd7cb2e1867dcf98b6e8cf5ee1e1c",
        clientId: "3rJq9BxcTCm-I7CFcY19ew",
        rcServer: "https://platform.ringcentral.com",
        redirectUri: "https://ringcentral.github.io/ringcentral-embeddable/redirect.html",
        version: "0.8.19",
        releaseNote: {
          all: "",
          pipedrive: "",
          insightly: "",
          clio: "",
          redtail: "",
          bullhorn: ""
        },
        welcomeMessage: {
          pipedrive: {
            docLink: "https://ringcentral.github.io/rc-unified-crm-extension/pipedrive/",
            VideoLink: "https://youtu.be/Hu0qC13HDkQ"
          },
          insightly: {
            docLink: "https://ringcentral.github.io/rc-unified-crm-extension/insightly/",
            VideoLink: "https://youtu.be/5hWvVI12UAc"
          },
          clio: {
            docLink: "https://ringcentral.github.io/rc-unified-crm-extension/clio/",
            VideoLink: "https://youtu.be/pQgdsAR1UCI"
          },
          redtail: {
            docLink: "https://ringcentral.github.io/rc-unified-crm-extension/redtail/",
            VideoLink: "https://youtu.be/1pbpbEvp5uQ"
          },
          bullhorn: {
            docLink: "https://ringcentral.github.io/rc-unified-crm-extension/bullhorn/",
            VideoLink: "https://youtu.be/afbdQD0y4Yo"
          }
        },
        platformsWithDifferentContactType: {
          insightly: [
            "Lead",
            "Contact"
          ],
          bullhorn: [
            "Candidate",
            "Contact"
          ]
        }
      };
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

  // public/manifest.json
  var manifest_default;
  var init_manifest = __esm({
    "public/manifest.json"() {
      manifest_default = {
        name: "RingCentral CRM Extension",
        description: "A RingCentral extension for CRM platforms",
        version: "0.8.15",
        permissions: [
          "storage",
          "alarms",
          "tabs",
          "background",
          "unlimitedStorage",
          "notifications"
        ],
        content_scripts: [
          {
            matches: [
              "https://*.labs.ringcentral.com/*",
              "https://*.ngrok-free.app/*",
              "https://lite-http-tunnel-s52m.onrender.com/*",
              "https://*.pipedrive.com/*",
              "https://*.insightly.com/*",
              "https://*.clio.com/*",
              "https://*.redtailtechnology.com/*",
              "https://*.bullhornstaffing.com/*"
            ],
            js: [
              "./c2d/index.js",
              "./content.js"
            ],
            all_frames: true
          }
        ],
        web_accessible_resources: [
          {
            resources: [
              "/embeddable/*",
              "/c2d/*"
            ],
            matches: [
              "https://*.labs.ringcentral.com/*",
              "https://*.ngrok-free.app/*",
              "https://lite-http-tunnel-s52m.onrender.com/*",
              "https://*.pipedrive.com/*",
              "https://*.insightly.com/*",
              "https://*.clio.com/*",
              "https://*.redtailtechnology.com/*",
              "https://*.bullhornstaffing.com/*"
            ]
          }
        ],
        action: {
          default_icon: {
            "16": "/images/logo16.png",
            "32": "/images/logo32.png",
            "48": "/images/logo48.png",
            "128": "/images/logo128.png"
          }
        },
        background: {
          service_worker: "sw.js"
        },
        options_ui: {
          page: "options.html",
          open_in_tab: false
        },
        content_security_policy: {
          extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self' 'wasm-unsafe-eval'"
        },
        manifest_version: 3,
        icons: {
          "16": "/images/logo16.png",
          "32": "/images/logo32.png",
          "48": "/images/logo48.png",
          "128": "/images/logo128.png"
        }
      };
    }
  });

  // node_modules/mixpanel-browser/dist/mixpanel.cjs.js
  var require_mixpanel_cjs = __commonJS({
    "node_modules/mixpanel-browser/dist/mixpanel.cjs.js"(exports, module) {
      "use strict";
      var Config = {
        DEBUG: false,
        LIB_VERSION: "2.50.0"
      };
      var win;
      if (typeof window === "undefined") {
        loc = {
          hostname: ""
        };
        win = {
          navigator: { userAgent: "" },
          document: {
            location: loc,
            referrer: ""
          },
          screen: { width: 0, height: 0 },
          location: loc
        };
      } else {
        win = window;
      }
      var loc;
      var MAX_RECORDING_MS = 24 * 60 * 60 * 1e3;
      var ArrayProto = Array.prototype;
      var FuncProto = Function.prototype;
      var ObjProto = Object.prototype;
      var slice = ArrayProto.slice;
      var toString3 = ObjProto.toString;
      var hasOwnProperty2 = ObjProto.hasOwnProperty;
      var windowConsole = win.console;
      var navigator2 = win.navigator;
      var document$1 = win.document;
      var windowOpera = win.opera;
      var screen = win.screen;
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
          return +new Date();
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
      _.JSONEncode = function() {
        return function(mixed_val) {
          var value = mixed_val;
          var quote = function(string) {
            var escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var meta = {
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
      _.UUID = function() {
        var T = function() {
          var time = 1 * new Date();
          var ticks;
          if (win.performance && win.performance.now) {
            ticks = win.performance.now();
          } else {
            ticks = 0;
            while (time == 1 * new Date()) {
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
            var date = new Date();
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
            var date = new Date();
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
      _.dom_query = function() {
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
                if (found[j].className && _.isString(found[j].className) && hasClass(found[j], className)) {
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
          return win.location.href;
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
            "current_domain": win.location.hostname,
            "current_url_path": win.location.pathname,
            "current_url_protocol": win.location.protocol,
            "current_url_search": win.location.search
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
        var i = pid || new Date().getTime() + "|" + Math.random();
        var startTime = new Date().getTime();
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
          if (new Date().getTime() - startTime > timeoutMS) {
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
          "flushAfter": new Date().getTime() + flushInterval * 2,
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
              if (new Date().getTime() > item["flushAfter"] && !idsInBatch[item["id"]]) {
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
          var startTime = new Date().getTime();
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
              } else if (_.isObject(res) && res.error === "timeout" && new Date().getTime() - startTime >= timeoutMS) {
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
            timeout_ms: timeoutMS
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
        var win$1 = options && options.window || win;
        var nav = win$1["navigator"] || {};
        var hasDntOn = false;
        _.each([
          nav["doNotTrack"],
          nav["msDoNotTrack"],
          win$1["doNotTrack"]
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
            var win2 = getConfigValue.call(this, "window");
            if (token) {
              optedOut = hasOptedOut(token, {
                ignoreDnt,
                persistenceType,
                persistencePrefix,
                window: win2
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
      var MixpanelPersistence = function(config2) {
        this["props"] = {};
        this.campaign_params_saved = false;
        if (config2["persistence_name"]) {
          this.name = "mp_" + config2["persistence_name"];
        } else {
          this.name = "mp_" + config2["token"] + "_mixpanel";
        }
        var storage_type = config2["persistence"];
        if (storage_type !== "cookie" && storage_type !== "localStorage") {
          console2.critical("Unknown persistence type " + storage_type + "; falling back to cookie");
          storage_type = config2["persistence"] = "cookie";
        }
        if (storage_type === "localStorage" && _.localStorage.is_supported()) {
          this.storage = _.localStorage;
        } else {
          this.storage = _.cookie;
        }
        this.load();
        this.update_config(config2);
        this.upgrade(config2);
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
      MixpanelPersistence.prototype.upgrade = function(config2) {
        var upgrade_from_old_lib = config2["upgrade"], old_cookie_name, old_cookie;
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
        if (!config2["cookie_name"] && config2["name"] !== "mixpanel") {
          old_cookie_name = "mp_" + config2["token"] + "_" + config2["name"];
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
      MixpanelPersistence.prototype.update_config = function(config2) {
        this.default_expiry = this.expire_days = config2["cookie_expiration"];
        this.set_disabled(config2["disable_persistence"]);
        this.set_cookie_domain(config2["cookie_domain"]);
        this.set_cross_site(config2["cross_site_cookie"]);
        this.set_cross_subdomain(config2["cross_subdomain_cookie"]);
        this.set_secure(config2["secure_cookie"]);
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
      var USE_XHR = win.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
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
        "groups": "groups/",
        "record": "record/"
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
        "ignore_dnt": false,
        "batch_requests": true,
        "batch_size": 50,
        "batch_flush_interval_ms": 5e3,
        "batch_request_timeout_ms": 9e4,
        "batch_autostart": true,
        "hooks": {},
        "record_sessions_percent": 0,
        "record_idle_timeout_ms": 30 * 60 * 1e3,
        "record_max_ms": MAX_RECORDING_MS,
        "record_mask_text_selector": "*",
        "recorder_src": "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js"
      };
      var DOM_LOADED = false;
      var MixpanelLib = function() {
      };
      var create_mplib = function(token, config2, name) {
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
        instance._init(token, config2, name);
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
      MixpanelLib.prototype.init = function(token, config2, name) {
        if (_.isUndefined(name)) {
          this.report_error("You must name your new library: init(token, config, name)");
          return;
        }
        if (name === PRIMARY_INSTANCE_NAME) {
          this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
          return;
        }
        var instance = create_mplib(token, config2, name);
        mixpanel_master[name] = instance;
        instance._loaded();
        return instance;
      };
      MixpanelLib.prototype._init = function(token, config2, name) {
        config2 = config2 || {};
        this["__loaded"] = true;
        this["config"] = {};
        var variable_features = {};
        if (!("api_payload_format" in config2)) {
          var api_host = config2["api_host"] || DEFAULT_CONFIG["api_host"];
          if (api_host.match(/\.mixpanel\.com/)) {
            variable_features["api_payload_format"] = PAYLOAD_TYPE_JSON;
          }
        }
        this.set_config(_.extend({}, DEFAULT_CONFIG, variable_features, config2, {
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
            if (sendBeacon && win.addEventListener) {
              var flush_on_unload = _.bind(function() {
                if (!this.request_batchers.events.stopped) {
                  this.request_batchers.events.flush({ unloading: true });
                }
              }, this);
              win.addEventListener("pagehide", function(ev) {
                if (ev["persisted"]) {
                  flush_on_unload();
                }
              });
              win.addEventListener("visibilitychange", function() {
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
        if (this.get_config("record_sessions_percent") > 0 && Math.random() * 100 <= this.get_config("record_sessions_percent")) {
          this.start_session_recording();
        }
      };
      MixpanelLib.prototype.start_session_recording = addOptOutCheckMixpanelLib(function() {
        if (!win["MutationObserver"]) {
          console2.critical("Browser does not support MutationObserver; skipping session recording");
          return;
        }
        var handleLoadedRecorder = _.bind(function() {
          this._recorder = this._recorder || new win["__mp_recorder"](this);
          this._recorder["startRecording"]();
        }, this);
        if (_.isUndefined(win["__mp_recorder"])) {
          var scriptEl = document$1.createElement("script");
          scriptEl.type = "text/javascript";
          scriptEl.async = true;
          scriptEl.onload = handleLoadedRecorder;
          scriptEl.src = this.get_config("recorder_src");
          document$1.head.appendChild(scriptEl);
        } else {
          handleLoadedRecorder();
        }
      });
      MixpanelLib.prototype.stop_session_recording = function() {
        if (this._recorder) {
          this._recorder["stopRecording"]();
        } else {
          console2.critical("Session recorder module not loaded");
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
          win.addEventListener("popstate", function() {
            win.dispatchEvent(new Event("mp_locationchange"));
          });
          win.addEventListener("hashchange", function() {
            win.dispatchEvent(new Event("mp_locationchange"));
          });
          var nativePushState = win.history.pushState;
          if (typeof nativePushState === "function") {
            win.history.pushState = function(state, unused, url) {
              nativePushState.call(win.history, state, unused, url);
              win.dispatchEvent(new Event("mp_locationchange"));
            };
          }
          var nativeReplaceState = win.history.replaceState;
          if (typeof nativeReplaceState === "function") {
            win.history.replaceState = function(state, unused, url) {
              nativeReplaceState.call(win.history, state, unused, url);
              win.dispatchEvent(new Event("mp_locationchange"));
            };
          }
          win.addEventListener("mp_locationchange", function() {
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
        data["_"] = new Date().getTime().toString();
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
              var start_time = new Date().getTime();
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
                  if (req.timeout && !req.status && new Date().getTime() - start_time >= req.timeout) {
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
          var duration_in_ms = new Date().getTime() - start_timestamp;
          properties["$duration"] = parseFloat((duration_in_ms / 1e3).toFixed(3));
        }
        this._set_default_superprops();
        var marketing_properties = this.get_config("track_marketing") ? _.info.marketingParams() : {};
        if (this._recorder) {
          var replay_id = this._recorder["replayId"];
          if (replay_id) {
            properties["$mp_replay_id"] = replay_id;
          }
        }
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
        this["persistence"].set_event_timer(event_name, new Date().getTime());
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
      MixpanelLib.prototype.set_config = function(config2) {
        if (_.isObject(config2)) {
          _.extend(this["config"], config2);
          var new_batch_size = config2["batch_size"];
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
      MixpanelLib.prototype["start_session_recording"] = MixpanelLib.prototype.start_session_recording;
      MixpanelLib.prototype["stop_session_recording"] = MixpanelLib.prototype.stop_session_recording;
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
        mixpanel_master["init"] = function(token, config2, name) {
          if (name) {
            if (!mixpanel_master[name]) {
              mixpanel_master[name] = instances[name] = create_mplib(token, config2, name);
              mixpanel_master[name]._loaded();
            }
            return mixpanel_master[name];
          } else {
            var instance = mixpanel_master;
            if (instances[PRIMARY_INSTANCE_NAME]) {
              instance = instances[PRIMARY_INSTANCE_NAME];
            } else if (token) {
              instance = create_mplib(token, config2, PRIMARY_INSTANCE_NAME);
              instance._loaded();
              instances[PRIMARY_INSTANCE_NAME] = instance;
            }
            mixpanel_master = instance;
            if (init_type === INIT_SNIPPET) {
              win[PRIMARY_INSTANCE_NAME] = mixpanel_master;
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
            toplevel = win.frameElement === null;
          } catch (e) {
          }
          if (document$1.documentElement.doScroll && toplevel) {
            do_scroll_check();
          }
        }
        _.register_event(win, "load", dom_loaded_handler, true);
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
      var import_config = __toESM(require_config());
      var import_mixpanel_browser = __toESM(require_mixpanel_cjs());
      import_mixpanel_browser.default.init(import_config.default.mixpanelToken);
      var appName = "RingCentral CRM Extension";
      var version = manifest_default.version;
      exports.reset = function reset2() {
        import_mixpanel_browser.default.reset();
      };
      exports.identify = function identify2({ platformName: platformName2, rcAccountId, extensionId }) {
        import_mixpanel_browser.default.identify(extensionId);
        import_mixpanel_browser.default.people.set({
          crmPlatform: platformName2,
          rcAccountId,
          version
        });
      };
      exports.group = function group2({ rcAccountId }) {
        import_mixpanel_browser.default.add_group("rcAccountId", rcAccountId);
        import_mixpanel_browser.default.set_group("rcAccountId", rcAccountId);
      };
      function track(event, properties = {}) {
        import_mixpanel_browser.default.track(event, { appName, version, ...properties });
      }
      exports.trackPage = function page(name, properties = {}) {
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

  // src/platformModules/pipedrive.js
  var require_pipedrive = __commonJS({
    "src/platformModules/pipedrive.js"(exports) {
      function openContactPage2(hostname, incomingCallContactInfo) {
        window.open(`https://${hostname}/person/${incomingCallContactInfo.id}`);
      }
      function openLogPage({ hostname, logId }) {
        window.open(`https://${hostname}/activities/${logId}`);
      }
      async function onUnauthorize() {
      }
      exports.openContactPage = openContactPage2;
      exports.openLogPage = openLogPage;
      exports.onUnauthorize = onUnauthorize;
    }
  });

  // src/platformModules/insightly.js
  var require_insightly = __commonJS({
    "src/platformModules/insightly.js"(exports) {
      function openContactPage2(hostname, incomingCallContactInfo) {
        if (incomingCallContactInfo?.type === "Contact") {
          window.open(`https://${hostname}/list/Contact/?blade=/details/contact/${incomingCallContactInfo.id}`);
        }
        if (incomingCallContactInfo?.type === "Lead") {
          window.open(`https://${hostname}/list/Lead/?blade=/details/lead/${incomingCallContactInfo.id}`);
        }
      }
      function openLogPage({ hostname, logId, contactType }) {
        window.open(`https://${hostname}/list/${contactType}/?blade=/details/Event/${logId}`);
      }
      async function onUnauthorize() {
      }
      exports.openContactPage = openContactPage2;
      exports.openLogPage = openLogPage;
      exports.onUnauthorize = onUnauthorize;
    }
  });

  // src/platformModules/clio.js
  var require_clio = __commonJS({
    "src/platformModules/clio.js"(exports) {
      function openContactPage2(hostname, incomingCallContactInfo) {
        window.open(`https://${hostname}/nc/#/contacts/${incomingCallContactInfo.id}`);
      }
      async function onUnauthorize() {
      }
      exports.openContactPage = openContactPage2;
      exports.onUnauthorize = onUnauthorize;
    }
  });

  // src/platformModules/redtail.js
  var require_redtail = __commonJS({
    "src/platformModules/redtail.js"(exports) {
      function openContactPage2(hostname, incomingCallContactInfo) {
        window.open(`https://${hostname}/contacts/${incomingCallContactInfo.id}`);
      }
      function openLogPage({ hostname, logId }) {
        window.open(`https://${hostname}/activities/${logId}`);
      }
      async function onUnauthorize() {
      }
      exports.openContactPage = openContactPage2;
      exports.openLogPage = openLogPage;
      exports.onUnauthorize = onUnauthorize;
    }
  });

  // src/platformModules/bullhorn.js
  var require_bullhorn = __commonJS({
    "src/platformModules/bullhorn.js"(exports) {
      function openContactPage2(hostname, incomingCallContactInfo) {
        openBullhornContactPage({ contactType: incomingCallContactInfo.type, contactId: incomingCallContactInfo.id });
      }
      async function openBullhornContactPage({ contactType, contactId }) {
        const { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
        if (crm_extension_bullhorn_user_urls?.atsUrl) {
          const newTab = window.open(`${crm_extension_bullhorn_user_urls.atsUrl}/BullhornStaffing/OpenWindow.cfm?Entity=${contactType}&id=${contactId}&view=Overview`, "_blank", "popup");
          newTab.blur();
          window.focus();
        }
      }
      async function onUnauthorize() {
        await chrome.storage.local.remove("crm_extension_bullhornUsername");
        await chrome.storage.local.remove("crm_extension_bullhorn_user_urls");
      }
      exports.openContactPage = openContactPage2;
      exports.onUnauthorize = onUnauthorize;
    }
  });

  // src/core/auth.js
  var require_auth = __commonJS({
    "src/core/auth.js"(exports) {
      init_axios2();
      var import_config = __toESM(require_config());
      var import_util = __toESM(require_util());
      var import_analytics = __toESM(require_analytics());
      var import_pipedrive = __toESM(require_pipedrive());
      var import_insightly = __toESM(require_insightly());
      var import_clio = __toESM(require_clio());
      var import_redtail = __toESM(require_redtail());
      var import_bullhorn = __toESM(require_bullhorn());
      async function submitPlatformSelection(platform2) {
        await chrome.storage.local.set({
          ["platform-info"]: platform2
        });
      }
      async function apiKeyLogin2({ apiKey, apiUrl, username, password }) {
        try {
          const platformInfo = await chrome.storage.local.get("platform-info");
          const platformName2 = platformInfo["platform-info"].platformName;
          const hostname = platformInfo["platform-info"].hostname;
          const { rcUserInfo: rcUserInfo2 } = await chrome.storage.local.get("rcUserInfo");
          const rcUserNumber = rcUserInfo2.rcUserNumber;
          const res = await axios_default.post(`${import_config.default.serverUrl}/apiKeyLoginV2?state=platform=${platformName2}`, {
            apiKey,
            platform: platformName2,
            hostname,
            rcUserNumber,
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
          return res.data.jwtToken;
        } catch (e) {
          console.log(e);
          (0, import_util.showNotification)({ level: "warning", message: "Failed to register api key.", ttl: 3e3 });
        }
      }
      function sendMessageAsync(tabId, message) {
        return new Promise((resolve, reject) => {
          chrome.tabs.sendMessage(tabId, message, (response) => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve(response);
            }
          });
        });
      }
      async function onAuthCallback(callbackUri) {
        const { rcUserInfo: rcUserInfo2 } = await chrome.storage.local.get("rcUserInfo");
        const rcUserNumber = rcUserInfo2.rcUserNumber;
        const platformInfo = await chrome.storage.local.get("platform-info");
        const hostname = platformInfo["platform-info"].hostname;
        let oauthCallbackUrl = "";
        if (platformInfo["platform-info"].platformName === "bullhorn") {
          let { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
          let { crm_extension_bullhornUsername } = await chrome.storage.local.get({ crm_extension_bullhornUsername: null });
          if (crm_extension_bullhornUsername == null) {
            const activeTab = await new Promise((resolve) => chrome.tabs.query({ active: true }, (tabs) => resolve(tabs.find((t) => t.url.includes("https://app.bullhornstaffing.com/")))));
            const bullhornUsernameResponse = await sendMessageAsync(activeTab.id, { action: "fetchBullhornUsername" });
            const { data: crm_extension_bullhorn_user_urls2 } = await axios_default.get(`https://rest.bullhornstaffing.com/rest-services/loginInfo?username=${bullhornUsernameResponse.bullhornUsername}`);
            await chrome.storage.local.set({ crm_extension_bullhorn_user_urls: crm_extension_bullhorn_user_urls2 });
            oauthCallbackUrl = `${import_config.default.serverUrl}/oauth-callbackV2?callbackUri=${callbackUri}&rcUserNumber=${rcUserNumber}&hostname=${hostname}&tokenUrl=${crm_extension_bullhorn_user_urls2.oauthUrl}/token&apiUrl=${crm_extension_bullhorn_user_urls2.restUrl}&username=${bullhornUsernameResponse.bullhornUsername}`;
          } else {
            oauthCallbackUrl = `${import_config.default.serverUrl}/oauth-callbackV2?callbackUri=${callbackUri}&rcUserNumber=${rcUserNumber}&hostname=${hostname}&tokenUrl=${crm_extension_bullhorn_user_urls.oauthUrl}/token&apiUrl=${crm_extension_bullhorn_user_urls.restUrl}&username=${crm_extension_bullhornUsername}`;
          }
        } else {
          oauthCallbackUrl = `${import_config.default.serverUrl}/oauth-callbackV2?callbackUri=${callbackUri}&rcUserNumber=${rcUserNumber}&hostname=${hostname}`;
        }
        const res = await axios_default.get(oauthCallbackUrl);
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
      async function unAuthorize(rcUnifiedCrmExtJwt) {
        try {
          await axios_default.post(`${import_config.default.serverUrl}/unAuthorize?jwtToken=${rcUnifiedCrmExtJwt}`);
          const platformModule = await getModule();
          await platformModule.onUnauthorize();
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
      async function getModule() {
        const platformInfo = await chrome.storage.local.get("platform-info");
        switch (platformInfo["platform-info"].platformName) {
          case "pipedrive":
            return import_pipedrive.default;
          case "insightly":
            return import_insightly.default;
          case "clio":
            return import_clio.default;
          case "redtail":
            return import_redtail.default;
          case "bullhorn":
            return import_bullhorn.default;
        }
      }
      exports.submitPlatformSelection = submitPlatformSelection;
      exports.apiKeyLogin = apiKeyLogin2;
      exports.onAuthCallback = onAuthCallback;
      exports.unAuthorize = unAuthorize;
      exports.checkAuth = checkAuth;
      exports.setAuth = setAuth;
    }
  });

  // src/core/log.js
  var require_log = __commonJS({
    "src/core/log.js"(exports) {
      init_axios2();
      var import_config = __toESM(require_config());
      var import_util = __toESM(require_util());
      var import_analytics = __toESM(require_analytics());
      var import_pipedrive = __toESM(require_pipedrive());
      var import_insightly = __toESM(require_insightly());
      var import_clio = __toESM(require_clio());
      var import_redtail = __toESM(require_redtail());
      var import_bullhorn = __toESM(require_bullhorn());
      async function addLog({ logType, logInfo, isMain, note, additionalSubmission, overridingContactId, contactType, contactName }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        const { overridingPhoneNumberFormat } = await chrome.storage.local.get({ overridingPhoneNumberFormat: "" });
        const rcUserInfo2 = await chrome.storage.local.get("rcUserInfo");
        if (!!rcUnifiedCrmExtJwt) {
          switch (logType) {
            case "Call":
              const addCallLogRes = await axios_default.post(`${import_config.default.serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}`, { contactId: overridingContactId, logInfo, note, additionalSubmission, overridingFormat: overridingPhoneNumberFormat, overridingContactId, contactType, contactName });
              document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                type: "rc-adapter-trigger-call-logger-match",
                sessionIds: [logInfo.sessionId]
              }, "*");
              if (addCallLogRes.data.successful) {
                (0, import_util.showNotification)({ level: "success", message: "call log added", ttl: 3e3 });
                (0, import_analytics.trackSyncCallLog)({ hasNote: note !== "" });
                const recordingSessionId = `rec-link-${logInfo.sessionId}`;
                const existingCallRecording = await chrome.storage.local.get(recordingSessionId);
                if (!!existingCallRecording[recordingSessionId]) {
                  await updateLog2({ logType: "Call", sessionId: logInfo.sessionId, recordingLink: existingCallRecording[recordingSessionId].recordingLink });
                }
              } else {
                (0, import_util.showNotification)({ level: "warning", message: addCallLogRes.data.message, ttl: 3e3 });
              }
              break;
            case "Message":
              const messageLogRes = await axios_default.post(`${import_config.default.serverUrl}/messageLog?jwtToken=${rcUnifiedCrmExtJwt}`, { contactId: overridingContactId, logInfo, additionalSubmission, overridingFormat: overridingPhoneNumberFormat, overridingContactId, contactType, contactName });
              if (messageLogRes.data.successful) {
                if (isMain) {
                  (0, import_util.showNotification)({ level: "success", message: "message log added", ttl: 3e3 });
                  (0, import_analytics.trackSyncMessageLog)();
                }
              }
              break;
          }
        } else {
          (0, import_util.showNotification)({ level: "warning", message: "Please go to Settings and authorize CRM platform", ttl: 3e3 });
        }
      }
      async function checkLog2({ logType, sessionIds }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        if (!!rcUnifiedCrmExtJwt) {
          switch (logType) {
            case "Call":
              const callLogRes = await axios_default.get(`${import_config.default.serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}&sessionIds=${sessionIds}`);
              return { successful: callLogRes.data.successful, callLogs: callLogRes.data.logs };
          }
        } else {
          return { successful: false, message: "Please go to Settings and authorize CRM platform" };
        }
      }
      function openLog2({ platform: platform2, hostname, logId, contactType }) {
        const platformModule = getModule({ platform: platform2 });
        platformModule.openLogPage({ hostname, logId, contactType });
      }
      async function updateLog2({ logType, sessionId, recordingLink }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        if (!!rcUnifiedCrmExtJwt) {
          switch (logType) {
            case "Call":
              const patchBody = {
                sessionId,
                recordingLink
              };
              const callLogRes = await axios_default.patch(`${import_config.default.serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}`, patchBody);
              if (callLogRes.data.successful) {
                const recordingSessionId = `rec-link-${sessionId}`;
                const existingCallRecording = await chrome.storage.local.get(recordingSessionId);
                if (!!existingCallRecording[recordingSessionId]) {
                  await chrome.storage.local.remove(recordingSessionId);
                }
                console.log("call recording update done");
              }
          }
        }
      }
      async function cacheCallNote({ sessionId, note }) {
        let noteToCache = {};
        noteToCache[sessionId] = note;
        await chrome.storage.local.set(noteToCache);
      }
      async function getCachedNote({ sessionId }) {
        const cachedNote = await chrome.storage.local.get(sessionId);
        if ((0, import_util.isObjectEmpty)(cachedNote)) {
          return "";
        } else {
          return cachedNote[sessionId];
        }
      }
      function getModule({ platform: platform2 }) {
        switch (platform2) {
          case "pipedrive":
            return import_pipedrive.default;
          case "insightly":
            return import_insightly.default;
          case "clio":
            return import_clio.default;
          case "redtail":
            return import_redtail.default;
          case "bullhorn":
            return import_bullhorn.default;
        }
      }
      exports.addLog = addLog;
      exports.checkLog = checkLog2;
      exports.openLog = openLog2;
      exports.updateLog = updateLog2;
      exports.cacheCallNote = cacheCallNote;
      exports.getCachedNote = getCachedNote;
    }
  });

  // src/core/contact.js
  var require_contact = __commonJS({
    "src/core/contact.js"(exports) {
      init_axios2();
      var import_config = __toESM(require_config());
      var import_analytics = __toESM(require_analytics());
      var import_pipedrive = __toESM(require_pipedrive());
      var import_insightly = __toESM(require_insightly());
      var import_clio = __toESM(require_clio());
      var import_redtail = __toESM(require_redtail());
      var import_bullhorn = __toESM(require_bullhorn());
      var import_util = __toESM(require_util());
      async function getContact2({ phoneNumber }) {
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
          const contactRes = await axios_default.get(`${import_config.default.serverUrl}/contactV2?jwtToken=${rcUnifiedCrmExtJwt}&phoneNumber=${phoneNumber}&overridingFormat=${overridingFormats.toString()}`);
          let contactInfo = contactRes.data.contact;
          for (let c of contactInfo) {
            if (!!c.additionalInfo && (0, import_util.isObjectEmpty)(c.additionalInfo)) {
              c.additionalInfo = null;
            }
          }
          return { matched: contactRes.data.successful, message: contactRes.data.message, contactInfo };
        } else {
          return { matched: false, message: "Please go to Settings and authorize CRM platform", contactInfo: null };
        }
      }
      async function createContact({ phoneNumber, newContactName, newContactType }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        if (!!rcUnifiedCrmExtJwt) {
          const contactRes = await axios_default.post(
            `${import_config.default.serverUrl}/contact?jwtToken=${rcUnifiedCrmExtJwt}`,
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
          await chrome.storage.local.set({ tempContactMatchTask: { contactId: contactRes.data.contact.id, phoneNumber, contactName: newContactName } });
          import_analytics.default.createNewContact();
          return { matched: contactRes.data.successful, contactInfo: contactRes.data.contact };
        } else {
          return { matched: false, message: "Please go to Settings and authorize CRM platform", contactInfo: null };
        }
      }
      async function openContactPage2({ phoneNumber }) {
        const { matched: contactMatched, contactInfo } = await getContact2({ phoneNumber });
        if (!contactMatched) {
          return;
        }
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        const platformModule = await getModule();
        let platformInfo = await chrome.storage.local.get("platform-info");
        if (platformInfo["platform-info"].hostname === "temp") {
          const hostnameRes = await axios_default.get(`${import_config.default.serverUrl}/hostname?jwtToken=${rcUnifiedCrmExtJwt}`);
          platformInfo["platform-info"].hostname = hostnameRes.data;
          await chrome.storage.local.set(platformInfo);
        }
        for (const c of contactInfo) {
          platformModule.openContactPage(platformInfo["platform-info"].hostname, c);
        }
      }
      async function openContactPageById({ id, type }) {
        const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
        const platformModule = await getModule();
        let platformInfo = await chrome.storage.local.get("platform-info");
        if (platformInfo["platform-info"].hostname === "temp") {
          const hostnameRes = await axios_default.get(`${import_config.default.serverUrl}/hostname?jwtToken=${rcUnifiedCrmExtJwt}`);
          platformInfo["platform-info"].hostname = hostnameRes.data;
          await chrome.storage.local.set(platformInfo);
        }
        platformModule.openContactPage(platformInfo["platform-info"].hostname, { id, type });
      }
      async function getModule() {
        const platformInfo = await chrome.storage.local.get("platform-info");
        switch (platformInfo["platform-info"].platformName) {
          case "pipedrive":
            return import_pipedrive.default;
          case "insightly":
            return import_insightly.default;
          case "clio":
            return import_clio.default;
          case "redtail":
            return import_redtail.default;
          case "bullhorn":
            return import_bullhorn.default;
        }
      }
      exports.getContact = getContact2;
      exports.createContact = createContact;
      exports.openContactPage = openContactPage2;
      exports.openContactPageById = openContactPageById;
    }
  });

  // src/lib/rcAPI.js
  var require_rcAPI = __commonJS({
    "src/lib/rcAPI.js"(exports) {
      init_axios2();
      var import_config = __toESM(require_config());
      async function getUserInfo2({ extensionId, accountId }) {
        const userInfoHashResponse = await axios_default.get(
          `${import_config.default.serverUrl}/userInfoHash?extensionId=${extensionId}&accountId=${accountId}`
        );
        return userInfoHashResponse.data;
      }
      exports.getUserInfo = getUserInfo2;
    }
  });

  // node_modules/idb/build/index.cjs
  var require_build = __commonJS({
    "node_modules/idb/build/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
      var idbProxyableTypes;
      var cursorAdvanceMethods;
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
      var transactionDoneMap = /* @__PURE__ */ new WeakMap();
      var transformCache = /* @__PURE__ */ new WeakMap();
      var reverseTransformCache = /* @__PURE__ */ new WeakMap();
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
      var idbProxyTraps = {
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
      var unwrap = (value) => reverseTransformCache.get(value);
      function openDB2(name, version, { blocked, upgrade, blocking, terminated } = {}) {
        const request = indexedDB.open(name, version);
        const openPromise = wrap(request);
        if (upgrade) {
          request.addEventListener("upgradeneeded", (event) => {
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
          });
        }
        if (blocked) {
          request.addEventListener("blocked", (event) => blocked(
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
            event.oldVersion,
            event
          ));
        }
        return wrap(request).then(() => void 0);
      }
      var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      var writeMethods = ["put", "add", "delete", "clear"];
      var cachedMethods = /* @__PURE__ */ new Map();
      function getMethod(target, prop) {
        if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
          return;
        }
        if (cachedMethods.get(prop))
          return cachedMethods.get(prop);
        const targetFuncName = prop.replace(/FromIndex$/, "");
        const useIndex = prop !== targetFuncName;
        const isWrite = writeMethods.includes(targetFuncName);
        if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
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
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
      var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
      var methodMap = {};
      var advanceResults = /* @__PURE__ */ new WeakMap();
      var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
      var cursorIteratorTraps = {
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
      exports.deleteDB = deleteDB;
      exports.openDB = openDB2;
      exports.unwrap = unwrap;
      exports.wrap = wrap;
    }
  });

  // src/popup.js
  init_axios2();
  var auth = require_auth();
  var { checkLog, openLog, updateLog } = require_log();
  var { getContact, openContactPage } = require_contact();
  var config = require_config();
  var { responseMessage, isObjectEmpty, showNotification } = require_util();
  var { getUserInfo } = require_rcAPI();
  var { apiKeyLogin } = require_auth();
  var { openDB } = require_build();
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
  var registered = false;
  var platform = null;
  var platformName = "";
  var platformHostname = "";
  var rcUserInfo = {};
  var extensionUserSettings = null;
  var leadingSMSCallReady = false;
  var trailingSMSLogInfo = [];
  var firstTimeLogoutAbsorbed = false;
  async function checkC2DCollision() {
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
  }
  checkC2DCollision();
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
                  }, "*");
                }
              }
            }
          case "rc-webphone-connection-status-notify":
            if (data.connectionStatus === "connectionStatus-connected") {
              await auth.checkAuth();
              RCAdapter.showFeedback({
                onFeedback: function() {
                  window.postMessage({
                    type: "rc-feedback-open",
                    props: {
                      userName: rcUserInfo.rcUserName,
                      userEmail: rcUserInfo.rcUserEmail,
                      platformName
                    }
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
              platform = config.platforms[platformName];
              registered = true;
              document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                type: "rc-adapter-register-third-party-service",
                service: getServiceConfig(platformName)
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
              if (platformName === "pipedrive" && !await auth.checkAuth()) {
                chrome.runtime.sendMessage(
                  {
                    type: "popupWindowRequestPipedriveCallbackUri"
                  }
                );
              } else if (!rcUnifiedCrmExtJwt) {
                showNotification({ level: "warning", message: "Please authorize CRM platform account via More Menu (right most on top bar) -> Settings.", ttl: 1e4 });
              }
              try {
                const extId = JSON.parse(localStorage.getItem("sdk-rc-widgetplatform")).owner_id;
                const indexDB = await openDB(`rc-widget-storage-${extId}`, 2);
                const rcInfo = await indexDB.get("keyvaluepairs", "dataFetcherV2-storageData");
                const userInfoResponse = await getUserInfo({
                  extensionId: rcInfo.value.cachedData.extensionInfo.id,
                  accountId: rcInfo.value.cachedData.extensionInfo.account.id
                });
                rcUserInfo = {
                  rcUserName: rcInfo.value.cachedData.extensionInfo.name,
                  rcUserEmail: rcInfo.value.cachedData.extensionInfo.contact.email,
                  rcUserNumber: data.loginNumber,
                  rcAccountId: userInfoResponse.accountId,
                  rcExtensionId: userInfoResponse.extensionId
                };
                await chrome.storage.local.set({ ["rcUserInfo"]: rcUserInfo });
                reset();
                identify({ extensionId: rcUserInfo?.rcExtensionId, rcAccountId: rcUserInfo?.rcAccountId, platformName });
                group({ rcAccountId: rcUserInfo?.rcAccountId });
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
            window.postMessage({
              type: "rc-check-version"
            }, "*");
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
            if (data.call.telephonyStatus === "NoCall" && data.call.terminationType === "final") {
              window.postMessage({ type: "rc-expandable-call-note-terminate" }, "*");
            }
            if (data.call.telephonyStatus === "Ringing" && data.call.direction === "Inbound") {
              chrome.runtime.sendMessage({
                type: "openPopupWindow"
              });
              if (!!extensionUserSettings && extensionUserSettings.find((e2) => e2.name === "Open contact web page from incoming call")?.value) {
                openContactPage({ phoneNumber: data.call.direction === "Inbound" ? data.call.from.phoneNumber : data.call.to.phoneNumber });
              }
            }
            if (data.call.telephonyStatus === "CallConnected") {
              window.postMessage({ type: "rc-expandable-call-note-open", sessionId: data.call.sessionId }, "*");
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
            }
            if (!!data.path) {
              if (data.path.startsWith("/conversations/") || data.path.startsWith("/composeText")) {
                window.postMessage({ type: "rc-expandable-call-note-terminate" }, "*");
              }
            }
            break;
          case "rc-post-message-request":
            switch (data.path) {
              case "/authorize":
                const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get("rcUnifiedCrmExtJwt");
                if (!rcUnifiedCrmExtJwt) {
                  switch (platform.authType) {
                    case "oauth":
                      let authUri;
                      if (platformName === "pipedrive") {
                        authUri = config.platforms.pipedrive.redirectUri;
                      } else if (platformName === "bullhorn") {
                        let { crm_extension_bullhorn_user_urls } = await chrome.storage.local.get({ crm_extension_bullhorn_user_urls: null });
                        if (crm_extension_bullhorn_user_urls?.oauthUrl) {
                          authUri = `${crm_extension_bullhorn_user_urls.oauthUrl}/authorize?response_type=code&action=Login&client_id=${platform.clientId}&state=platform=${platform.name}&redirect_uri=https://ringcentral.github.io/ringcentral-embeddable/redirect.html`;
                        } else {
                          const { crm_extension_bullhornUsername } = await chrome.storage.local.get({ crm_extension_bullhornUsername: null });
                          showNotification({ level: "warning", message: "Bullhorn authorize error. Please try again in 30 seconds", ttl: 3e4 });
                          const { data: crm_extension_bullhorn_user_urls2 } = await axios_default.get(`https://rest.bullhornstaffing.com/rest-services/loginInfo?username=${crm_extension_bullhornUsername}`);
                          await chrome.storage.local.set({ crm_extension_bullhorn_user_urls: crm_extension_bullhorn_user_urls2 });
                          if (crm_extension_bullhorn_user_urls2?.oauthUrl) {
                            authUri = `${crm_extension_bullhorn_user_urls2.oauthUrl}/authorize?response_type=code&action=Login&client_id=${platform.clientId}&state=platform=${platform.name}&redirect_uri=https://ringcentral.github.io/ringcentral-embeddable/redirect.html`;
                          }
                        }
                      } else {
                        authUri = `${platform.authUrl}?response_type=code&client_id=${platform.clientId}&state=platform=${platform.name}&redirect_uri=https://ringcentral.github.io/ringcentral-embeddable/redirect.html`;
                      }
                      handleThirdPartyOAuthWindow(authUri);
                      break;
                    case "apiKey":
                      window.postMessage({ type: "rc-apiKey-input-modal", platform: platform.name }, "*");
                      break;
                  }
                } else {
                  await auth.unAuthorize(rcUnifiedCrmExtJwt);
                }
                responseMessage(
                  data.requestId,
                  {
                    data: "OK"
                  }
                );
                break;
              case "/contacts/match":
                noShowNotification = true;
                let matchedContacts = {};
                const { tempContactMatchTask } = await chrome.storage.local.get({ tempContactMatchTask: null });
                if (data.body.phoneNumbers.length === 1 && !!tempContactMatchTask) {
                  matchedContacts[tempContactMatchTask.phoneNumber] = [
                    {
                      id: tempContactMatchTask.id,
                      type: platformName,
                      name: tempContactMatchTask.contactName,
                      phoneNumbers: [
                        {
                          phoneNumber: tempContactMatchTask.phoneNumber,
                          phoneType: "direct"
                        }
                      ]
                    }
                  ];
                  await chrome.storage.local.remove("tempContactMatchTask");
                } else {
                  for (const contactPhoneNumber2 of data.body.phoneNumbers) {
                    if (!contactPhoneNumber2.startsWith("+")) {
                      continue;
                    }
                    const { matched: contactMatched, contactInfo } = await getContact({ phoneNumber: contactPhoneNumber2 });
                    if (contactMatched) {
                      matchedContacts[contactPhoneNumber2] = [];
                      for (var contactInfoItem of contactInfo) {
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
                          entityType: platformName
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
              case "/callLogger":
                if (data.body.triggerType && data.body.call?.to?.phoneNumber?.length > 4) {
                  if (data.body.triggerType === "callLogSync") {
                    if (!!data.body.call?.recording?.link) {
                      console.log("call recording updating...");
                      await chrome.storage.local.set({ ["rec-link-" + data.body.call.sessionId]: { recordingLink: data.body.call.recording.link } });
                      await updateLog(
                        {
                          logType: "Call",
                          sessionId: data.body.call.sessionId,
                          recordingLink: data.body.call.recording.link
                        }
                      );
                    }
                    break;
                  }
                  if (data.body.triggerType === "presenceUpdate" && data.body.call.result !== "Disconnected") {
                    break;
                  }
                }
                window.postMessage({ type: "rc-log-modal-loading-on" }, "*");
                const contactPhoneNumber = data.body.call.direction === "Inbound" ? data.body.call.from.phoneNumber : data.body.call.to.phoneNumber;
                const { callLogs: singleCallLog } = await checkLog({
                  logType: "Call",
                  sessionIds: data.body.call.sessionId
                });
                const { matched: callContactMatched, message: callLogContactMatchMessage, contactInfo: callMatchedContact } = await getContact({ phoneNumber: contactPhoneNumber });
                if (singleCallLog[data.body.call.sessionId]?.matched || singleCallLog.find((c) => c.sessionId == data.body.call.sessionId)?.matched) {
                  if (config.platforms[platformName].canOpenLogPage) {
                    for (const c of callMatchedContact) {
                      openLog({ platform: platformName, hostname: platformHostname, logId: singleCallLog[data.body.call.sessionId]?.logId ?? singleCallLog.find((c2) => c2.sessionId == data.body.call.sessionId)?.logId, contactType: c.type });
                    }
                  } else {
                    openContactPage({ phoneNumber: contactPhoneNumber });
                  }
                } else {
                  if (!callContactMatched && !!data.body.triggerType) {
                    showNotification({ level: "warning", message: callLogContactMatchMessage, ttl: 3e3 });
                  } else {
                    const { crmUserInfo } = await chrome.storage.local.get({ crmUserInfo: null });
                    window.postMessage({
                      type: "rc-log-modal",
                      platform: platformName,
                      isAccumulative: false,
                      logProps: {
                        logType: "Call",
                        logInfo: data.body.call,
                        contacts: callMatchedContact ?? [],
                        crmUserInfo,
                        autoLog: !!extensionUserSettings && extensionUserSettings.find((e2) => e2.name === "Auto log with countdown")?.value
                      },
                      triggerType: data.body.triggerType
                    }, "*");
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
              case "/callLogger/match":
                let callLogMatchData = {};
                const { successful, callLogs, message: checkLogMessage } = await checkLog({ logType: "Call", sessionIds: data.body.sessionIds.toString() });
                if (successful) {
                  for (const sessionId of data.body.sessionIds) {
                    const correspondingLog = callLogs[sessionId] ?? callLogs.find((c) => c.sessionId == sessionId);
                    if (correspondingLog.matched) {
                      callLogMatchData[sessionId] = [{ id: sessionId, note: "" }];
                    }
                  }
                } else {
                  showNotification({ level: "warning", message: checkLogMessage, ttl: 3e3 });
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
                const { rc_messageLogger_auto_log_notify: messageAutoLogOn } = await chrome.storage.local.get({ rc_messageLogger_auto_log_notify: false });
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
                let getContactMatchResult = null;
                if (!isTrailing) {
                  getContactMatchResult = await getContact({
                    phoneNumber: data.body.conversation.correspondents[0].phoneNumber
                  });
                }
                if (!isTrailing && !getContactMatchResult.matched) {
                  showNotification({ level: "warning", message: getContactMatchResult.message, ttl: 3e3 });
                } else {
                  const { crmUserInfo } = await chrome.storage.local.get({ crmUserInfo: null });
                  window.postMessage({
                    type: "rc-log-modal",
                    platform: platformName,
                    isTrailing,
                    trailingSMSLogInfo,
                    logProps: {
                      logType: "Message",
                      logInfo: data.body.conversation,
                      contactName: getContactMatchResult.contactInfo.name,
                      contacts: getContactMatchResult.contactInfo ?? [],
                      crmUserInfo,
                      autoLog: !!extensionUserSettings && extensionUserSettings.find((e2) => e2.name === "Auto log with countdown")?.value
                    },
                    additionalLogInfo: getContactMatchResult.additionalLogInfo,
                    triggerType: data.body.triggerType === "auto"
                  }, "*");
                  if (!isTrailing) {
                    leadingSMSCallReady = true;
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
                window.postMessage({
                  type: "rc-feedback-open",
                  props: {
                    userName: rcUserInfo.rcUserName,
                    userEmail: rcUserInfo.rcUserEmail,
                    platformName
                  }
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
              case "/sms-template-button-click":
                window.postMessage({
                  type: "rc-select-sms-template"
                }, "*");
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
      console.log(e2);
      if (e2.response && e2.response.data && !noShowNotification && typeof e2.response.data === "string") {
        showNotification({ level: "warning", message: e2.response.data, ttl: 5e3 });
      } else {
        console.error(e2);
      }
      window.postMessage({ type: "rc-log-modal-loading-off" }, "*");
    }
  });
  chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.type === "oauthCallBack") {
      if (request.platform === "rc") {
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-authorization-code",
          callbackUri: request.callbackUri
        }, "*");
      } else if (request.platform === "thirdParty") {
        await auth.onAuthCallback(request.callbackUri);
      }
      sendResponse({ result: "ok" });
    } else if (request.type === "pipedriveCallbackUri" && !await auth.checkAuth()) {
      await auth.onAuthCallback(`${request.pipedriveCallbackUri}&state=platform=pipedrive`);
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
        window.postMessage({
          type: "rc-feedback-open",
          props: {
            userName: rcUserInfo?.rcUserName,
            userEmail: rcUserInfo?.rcUserEmail,
            platformName
          }
        }, "*");
        trackOpenFeedback();
      } else {
        document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
          type: "rc-adapter-navigate-to",
          path: request.path
        }, "*");
      }
      sendResponse({ result: "ok" });
    } else if (request.type === "insightlyAuth") {
      await apiKeyLogin({
        apiKey: request.apiKey,
        apiUrl: request.apiUrl
      });
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
  function getServiceConfig(serviceName) {
    const services = {
      name: serviceName,
      contactMatchPath: "/contacts/match",
      contactMatchTtl: 7 * 24 * 60 * 60 * 1e3,
      contactNoMatchTtl: 7 * 24 * 60 * 60 * 1e3,
      authorizationPath: "/authorize",
      authorizedTitle: "Logout",
      unauthorizedTitle: "Connect",
      showAuthRedDot: true,
      authorized: false,
      authorizedAccount: "",
      callLoggerPath: "/callLogger",
      callLogEntityMatcherPath: "/callLogger/match",
      callLoggerAutoSettingLabel: "Auto pop up call logging page after call",
      messageLoggerPath: "/messageLogger",
      messageLogEntityMatcherPath: "/messageLogger/match",
      messageLoggerAutoSettingLabel: "Auto pop up SMS logging page",
      feedbackPath: "/feedback",
      settingsPath: "/settings",
      settings: [
        {
          name: "Auto log with countdown",
          value: !!extensionUserSettings && (extensionUserSettings.find((e) => e.name === "Auto log with countdown")?.value ?? false)
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
      buttonEventPath: "/sms-template-button-click",
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
