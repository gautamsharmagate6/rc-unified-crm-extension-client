/*   KRISP TECHNOLOGIES, INC
  __________________

  [2018] - [2023] Krisp Technologies, Inc
  All Rights Reserved.

  NOTICE: By accessing this programming code, you acknowledge that you have read, understood, and agreed to the User Agreement available at
  https://krisp.ai/terms-of-use.
  Please note that ALL information contained herein is and remains the property of Krisp Technologies, Inc., and its affiliates or assigns, if any. The intellectual property
  contained herein is proprietary to Krisp Technologies, Inc. and may be covered by pending and granted U.S. and Foreign Patents, and is further protected by
  copyright, trademark and/or other forms of intellectual property protection.
  Dissemination of this information or reproduction of this material IS STRICTLY FORBIDDEN.
 */
var KrispSDK;!function(){var e={61:function(e,t,r){var n=r(698).default;function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof O?t:O,i=Object.create(o.prototype),a=new P(n||[]);return s(i,"_invoke",{value:R(e,r,a)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=p;var v="suspendedStart",g="suspendedYield",y="executing",b="completed",m={};function O(){}function _(){}function E(){}var w={};d(w,c,(function(){return this}));var A=Object.getPrototypeOf,L=A&&A(A(x([])));L&&L!==i&&a.call(L,c)&&(w=L);var S=E.prototype=O.prototype=Object.create(w);function I(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function D(e,t){function r(o,i,s,u){var c=h(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,s,u)}),(function(e){r("throw",e,s,u)})):t.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,u)}))}u(c.arg)}var o;s(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function R(e,r,n){var o=v;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var u=N(s,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var c=h(e,r,n);if("normal"===c.type){if(o=n.done?b:g,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=b,n.method="throw",n.arg=c.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function x(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return _.prototype=E,s(S,"constructor",{value:E,configurable:!0}),s(E,"constructor",{value:_,configurable:!0}),_.displayName=d(E,f,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,d(e,f,"GeneratorFunction")),e.prototype=Object.create(S),e},r.awrap=function(e){return{__await:e}},I(D.prototype),d(D.prototype,l,(function(){return this})),r.AsyncIterator=D,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new D(p(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(S),d(S,f,"Generator"),d(S,c,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=x,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},687:function(e,t,r){var n=r(61)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n={};!function(){"use strict";function e(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function s(t){e(a,o,i,s,u,"next",t)}function u(t){e(a,o,i,s,u,"throw",t)}s(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function u(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(n,{default:function(){return ee}});var l=r(687),f=r.n(l),d=function(e){return e.INITIAL="INITIAL",e.INITIALIZED="INITIALIZED",e.FAILED="FAILED",e}({}),p=function(e){return e.INVALID_OPTIONS="INVALID_OPTIONS",e.INVALID_MODEL_URL="INVALID_MODEL_URL",e.MODEL_NOT_FOUND="MODEL_NOT_FOUND",e.INVALID_INBOUND_MODEL_URL="INVALID_INBOUND_MODEL_URL",e.SDK_ALREADY_INITIALIZED="SDK_ALREADY_INITIALIZED",e.SDK_NOT_INITIALIZED="SDK_NOT_INITIALIZED",e.WORKLET_NOT_SUPPORTED="WORKLET_NOT_SUPPORTED",e.WORKER_NOT_SUPPORTED="WORKER_NOT_SUPPORTED",e.WASM_PROCESSOR_NOT_INITIALIZED="WASM_PROCESSOR_NOT_INITIALIZED",e.INVALID_AUDIO_CONTEXT="INVALID_AUDIO_CONTEXT",e.WASM_OR_WORKER_NOT_READY="WASM_OR_WORKER_NOT_READY",e.SDK_BROWSER_NOT_SUPPORTED="SDK_BROWSER_NOT_SUPPORTED",e.NOT_SUPPORTED_SAMPLE_RATE="NOT_SUPPORTED_SAMPLE_RATE",e}({});function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}function m(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function _(e,t,r){return _=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&y(o,r.prototype),o},_.apply(null,arguments)}function E(e){var t="function"==typeof Map?new Map:void 0;return E=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return _(e,arguments,O(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,e)},E(e)}var w=function(e){return e.INIT_WASM_PROCESSOR="INIT_WASM_PROCESSOR",e.INPUT_AUDIO_DATA="INPUT_AUDIO_DATA",e.BUFFER_OVERFLOW="BUFFER_OVERFLOW",e.REQUEST_NOISE_CANCELATION="REQUEST_NOISE_CANCELATION",e.OUTPUT_CLEAN_AUDIO_DATA="OUTPUT_CLEAN_AUDIO_DATA",e.TOGGLE="TOGGLE",e.DISPOSE="DISPOSE",e.SUSPEND="SUSPEND",e.RESUME="RESUME",e.WASM_PROCESSOR_INITIALIZED="WASM_PROCESSOR_INITIALIZED",e.SET_AUDIO_PROCESSOR_READY="SET_AUDIO_PROCESSOR_READY",e.SET_LOGGING_PORT="SET_LOGGING_PORT",e}({}),A=function(e){return e.READY="ready",e.DISPOSE="dispose",e.BUFFER_OVERFLOW="buffer_overflow",e}({});function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(this,arguments)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}var I,D=function(e){b(r,e);var t=S(r);function r(e,n){return o(this,r),t.call(this,e,n)}return u(r,[{key:"postMessage",value:function(e,t){t?L(O(r.prototype),"postMessage",this).call(this,e,t):L(O(r.prototype),"postMessage",this).call(this,e)}}]),r}(E(Worker)),R=function(e){return e.LOG_INPUT_AUDIO="LOG_INPUT_AUDIO",e.LOG_OUTPUT_AUDIO="LOG_OUTPUT_AUDIO",e.LOG="LOG",e}({});function N(e){return(I=I||t(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.readAsDataURL(t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){if(!e.length)return new Blob([],{type:"audio/wav; codecs=wav"});var r=e[0].length,n=new Float32Array(r*e.length);e.forEach((function(e,t){n.set(e,t*r)}));var o=function(e,t){var r=t.isFloat?Float32Array:Uint16Array,n=e.byteLength/r.BYTES_PER_ELEMENT,o=function(e){var t=e.numFrames,r=e.numChannels||2,n=e.isFloat?4:2,o=e.isFloat?3:1,i=e.sampleRate,a=r*n,s=i*a,u=t*a,c=new ArrayBuffer(44),l=new DataView(c),f=0;function d(e){for(var t=0;t<e.length;t++)l.setUint8(f+t,e.charCodeAt(t));f+=e.length}function p(e){l.setUint32(f,e,!0),f+=4}function h(e){l.setUint16(f,e,!0),f+=2}return d("RIFF"),p(u+36),d("WAVE"),d("fmt "),p(16),h(o),h(r),p(i),p(s),h(a),h(8*n),d("data"),p(u),new Uint8Array(c)}(Object.assign({},t,{numFrames:n})),i=new Uint8Array(o.length+e.byteLength);return i.set(o,0),i.set(new Uint8Array(e),o.length),i}(n.buffer,{isFloat:!0,numChannels:1,sampleRate:t});return new Blob([o],{type:"audio/wav;codecs=wav"})}var T=function(){function e(t){o(this,e),c(this,"_inputData",[]),c(this,"_outputData",[]),this.sampleRate=t}return u(e,[{key:"pushInput",value:function(e){this._inputData.push(e)}},{key:"pushOutput",value:function(e){this._outputData.push(e)}},{key:"exportToWavBlob",value:function(){return{input:k(this._inputData,this.sampleRate),output:k(this._outputData,this.sampleRate)}}}]),e}(),P=function(e){function r(){o(this,r),c(this,"logs",""),c(this,"threadName","main"),c(this,"instances",[]),c(this,"debugLogs",!1);var e="main";"undefined"!=typeof WorkerGlobalScope?e="worker":"undefined"!=typeof AudioWorkletProcessor&&(e="worklet"),this.threadName=e}return u(r,[{key:"setOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.debugLogs=e}},{key:"setLoggingPort",value:function(e){this.logPort=e}},{key:"info",value:function(){if(this.debugLogs){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this.postLog("I",r.join("\t")),(e=console).info.apply(e,["KrispSDK -"].concat(r))}}},{key:"warn",value:function(){if(this.debugLogs){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this.postLog("W",r.join("\t")),(e=console).info.apply(e,["KrispSDK -"].concat(r))}}},{key:"error",value:function(){if(this.debugLogs){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this.postLog("E",r.join("\t")),(e=console).error.apply(e,["KrispSDK -"].concat(r))}}},{key:"log",value:function(){if(this.debugLogs){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this.postLog("I",r.join("\t")),(e=console).log.apply(e,["KrispSDK -"].concat(r))}}},{key:"logAudioInputSamples",value:function(e){this.logAudio(R.LOG_INPUT_AUDIO,e)}},{key:"logAudioOutputSamples",value:function(e){this.logAudio(R.LOG_OUTPUT_AUDIO,e)}},{key:"collectFrom",value:function(e,t){var r=this,n={channel:new MessageChannel,recorder:void 0,startedAt:new Date,options:t};e instanceof MessagePort&&(n.recorder=new T(t.sampleRate)),e instanceof Window?this.logPort=n.channel.port2:e.postMessage({event:w.SET_LOGGING_PORT,data:void 0},[n.channel.port2]),n.channel.port1.addEventListener("message",(function(e){var t,o;"string"==typeof e.data?r.logs+=e.data:n.recorder&&(null===(t=e.data)||void 0===t?void 0:t.event)===R.LOG_INPUT_AUDIO?n.recorder.pushInput(e.data.data):n.recorder&&(null===(o=e.data)||void 0===o?void 0:o.event)===R.LOG_OUTPUT_AUDIO&&n.recorder.pushOutput(e.data.data)})),this.instances.push(n),n.channel.port1.start()}},{key:"downloadReport",value:function(){return(e=e||t(f().mark((function e(){var t,r,n,o,i,a,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[],e.t0=f().keys(this.instances);case 3:if((e.t1=e.t0()).done){e.next=21;break}if(r=e.t1.value,!(n=this.instances[r]).recorder){e.next=19;break}return o=n.recorder.exportToWavBlob(),i=o.input,a=o.output,e.t2=t,e.t4="\n            <p>Recording: ".concat(n.startedAt,'<p>\n            <audio controls title="recording-input-').concat(r,'"><source src="'),e.next=12,N(i);case 12:return e.t5=e.sent,e.t3=e.t4.concat.call(e.t4,e.t5,'">Input</audio>\n            <audio controls title="recording-output-').concat(r,'"><source src="'),e.next=16,N(a);case 16:e.t6=e.sent,e.t7=e.t3.concat.call(e.t3,e.t6,'">Output</audio>\n          '),e.t2.push.call(e.t2,e.t7);case 19:e.next=3;break;case 21:return s="\n        <div>".concat(t,"</div>\n        <details>\n          <summary>Logs</summary>\n          <pre>").concat(this.logs,"</pre>\n        </details>\n      "),u="report-".concat((new Date).toISOString(),".html"),c=new Blob([s],{type:"text/html"}),l=void 0,d=void 0,l=window.URL.createObjectURL(c),(d=document.createElement("a")).href=l,d.download=u||"file",d.click(),e.abrupt("return",!0);case 26:return e.prev=26,e.t8=e.catch(0),console.error("KrispSDK - unable to download the report!"),e.abrupt("return",!1);case 30:case"end":return e.stop()}var u,c,l,d}),e,this,[[0,26]])})))).apply(this,arguments)}},{key:"logAudio",value:function(e,t){if(this.debugLogs&&this.logPort){var r=new Float32Array(t.length);r.set(t,0),this.logPort.postMessage({event:e,data:r},[r.buffer])}}},{key:"postLog",value:function(e,t){var r="[".concat((new Date).toLocaleString(),"][").concat(this.threadName,"][").concat(e,"]: ").concat(t,"\n");if(!this.logPort)return console.error("KrispSDK -","Logger is not initialized",r);this.logPort.postMessage(r)}}]),r}(),x=new P,U={READ_INDEX:0,WRITE_INDEX:1},M=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;o(this,e),c(this,"_channelData",[]),this._channelCount=r,this._state=new Uint32Array(new SharedArrayBuffer(Object.keys(U).length*Uint32Array.BYTES_PER_ELEMENT)),this._bufferLength=t+1;for(var n=0;n<r;n++)this._channelData.push(new Float32Array(new SharedArrayBuffer(this._bufferLength*Float32Array.BYTES_PER_ELEMENT)))}return u(e,[{key:"push",value:function(e,t){var r=Atomics.load(this._state,U.READ_INDEX),n=Atomics.load(this._state,U.WRITE_INDEX);if(this._getAvailableWrite(r,n)<t)return!1;var o=n+t;if(this._bufferLength<o){o-=this._bufferLength;for(var i=0;i<this._channelCount;i++){var a=this._channelData[i].subarray(n),s=this._channelData[i].subarray(0,o);a.set(e[i].subarray(0,a.length)),s.set(e[i].subarray(a.length))}}else{for(var u=0;u<this._channelCount;u++)this._channelData[u].subarray(n,o).set(e[u].subarray(0,t));o===this._bufferLength&&(o=0)}return Atomics.store(this._state,U.WRITE_INDEX,o),!0}},{key:"pull",value:function(e,t){var r=Atomics.load(this._state,U.READ_INDEX),n=Atomics.load(this._state,U.WRITE_INDEX);if(this._getAvailableRead(r,n)<t)return!1;var o=r+t;if(this._bufferLength<o){o-=this._bufferLength;for(var i=0;i<this._channelCount;i++){var a=this._channelData[i].subarray(r),s=this._channelData[i].subarray(0,o);e[i].set(a),e[i].set(s,a.length)}}else{for(var u=0;u<this._channelCount;++u)e[u].set(this._channelData[u].subarray(r,o));o===this._bufferLength&&(o=0)}return Atomics.store(this._state,U.READ_INDEX,o),!0}},{key:"printAvailableReadAndWrite",value:function(){var e=Atomics.load(this._state,U.READ_INDEX),t=Atomics.load(this._state,U.WRITE_INDEX);x.log(this,{availableRead:this._getAvailableRead(e,t),availableWrite:this._getAvailableWrite(e,t)})}},{key:"getAvailableSamples",value:function(){var e=Atomics.load(this._state,U.READ_INDEX),t=Atomics.load(this._state,U.WRITE_INDEX);return this._getAvailableRead(e,t)}},{key:"isFrameAvailable",value:function(e){return this.getAvailableSamples()>=e}},{key:"getBufferLength",value:function(){return this._bufferLength-1}},{key:"_getAvailableWrite",value:function(e,t){return t>=e?this._bufferLength-t+e-1:e-t-1}},{key:"_getAvailableRead",value:function(e,t){return t>=e?t-e:t+this._bufferLength-e}}],[{key:"from",value:function(t){return Object.setPrototypeOf(t,e.prototype)}}]),e}(),j=[8e3,16e3,24e3,32e3,44100,48e3,88200,96e3],K={REQUEST_NOISE_CANCELLATION:0};var F=function(e){return e.MODEL_8K="model8",e.MODEL_16K="model16",e.MODEL_32K="model32",e}({}),W={8e3:F.MODEL_8K,16e3:F.MODEL_16K,24e3:F.MODEL_32K,32e3:F.MODEL_32K,44100:F.MODEL_32K,48e3:F.MODEL_32K,88200:F.MODEL_32K,96e3:F.MODEL_32K};function C(e){return W[e]}function B(e){try{return Object.values(e).forEach((function(e){return G(e)})),!1}catch(e){return!0}}function G(e){var t;return/^https?\:\/\//i.test(e)||/^file\:\/\//i.test(e)||/^chrome-extension\:\/\//i.test(e)||/^moz-extension\:\/\//i.test(e)?new URL(e).toString():("/"!=(null===(t=e)||void 0===t?void 0:t[0])&&(e="/"+e),new URL(window.location.origin+e).toString())}function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}var X=function(e){b(r,e);var t=z(r);function r(e,n,i,a){var s;o(this,r);var u,l,f=e.sampleRate,d=function(e,t){for(var r=j.indexOf(t);r>=0;){var n=C(j[r]);if(e[n])return[n,G(e[n])];r--}throw new Error(p.MODEL_NOT_FOUND)}(n.isInbound?n.inboundModels:n.models,f),h=v(d,2),y=h[0],b=h[1],m=Y(Y({},n),{},{sampleRate:f,modelName:y,modelPath:b,sharedBuffers:n.useSharedArrayBuffer?(u={sampleRate:f},l=10*u.sampleRate/1e3*128,{inputRingBuffer:new M(l,u.channelCount||1),outputRingBuffer:new M(l,u.channelCount||1),atomicState:new Int32Array(new SharedArrayBuffer(Object.keys(K).length*Int32Array.BYTES_PER_ELEMENT))}):void 0});c(g(s=t.call(this,e,"processor",{processorOptions:m})),"isReady",!1),c(g(s),"enabled",!1),s.params=n,s.wasmParams=m,s.debugLogs&&m.sharedBuffers&&x.info("AudioFilterNode:constructor","SharedArrayBuffer's has been initialized");try{i&&s.addEventListener(A.READY,i),a&&s.addEventListener(A.DISPOSE,a),s.debugLogs&&x.info("AudioFilterNode:constructor","creating web worker (type: module)"),s.worker=new D(n.workerUrl,{type:"module"}),s.debugLogs&&x.info("AudioFilterNode:constructor","adding event listener for worker"),s.worker.addEventListener("message",s._onWasmWorkerMessage.bind(g(s))),s.debugLogs&&(x.info("AudioFilterNode:constructor","Connecting with other threads for logging"),x.collectFrom(s.worker,m),x.collectFrom(s.port,m)),s.debugLogs&&x.info("AudioFilterNode:constructor","Send init WASM processor event"),s.worker.postMessage({event:w.INIT_WASM_PROCESSOR,data:s.wasmParams},s.params.useSharedArrayBuffer?[]:[s.port])}catch(e){throw s.debugLogs&&x.error("AudioFilterNode:constructor",e),new Error(p.WORKER_NOT_SUPPORTED)}return s.debugLogs&&s.startSecondsCounter(e),s}return u(r,[{key:"debugLogs",get:function(){return this.params.debugLogs}},{key:"_onWasmWorkerMessage",value:function(e){var t=e.data,r=t.event,n=t.data;switch(r){case w.WASM_PROCESSOR_INITIALIZED:this.debugLogs&&x.info("AudioFilterNode:_onWasmWorkerMessage","WASM processor initialized"),this.isReady=!0,this.dispatchEvent(new MessageEvent(A.READY)),this.postMessage({event:w.SET_AUDIO_PROCESSOR_READY,data:n});break;case w.BUFFER_OVERFLOW:this.debugLogs&&x.info("AudioFilterNode:_onWasmWorkerMessage","Buffer overflown:",JSON.stringify(n)),this.dispatchEvent(new MessageEvent(A.BUFFER_OVERFLOW,{data:n}))}}},{key:"postMessage",value:function(e,t){var r=this.params.useSharedArrayBuffer?this.port:this.worker;t?r.postMessage(e,t):r.postMessage(e)}},{key:"checkReadiness",value:function(e){if(this.debugLogs&&x.info("AudioFilterNode:checkReadiness",JSON.stringify({isReady:this.isReady})),!e)throw new Error(p.WASM_OR_WORKER_NOT_READY)}},{key:"isEnabled",value:function(){return this.debugLogs&&x.info("AudioFilterNode:isEnabled",JSON.stringify({isEnabled:this.enabled})),this.enabled}},{key:"enable",value:function(){this.checkReadiness(this.isReady),this.debugLogs&&x.info("AudioFilterNode:enable","send enable NC message"),this.enabled=!0,this.postMessage({event:w.TOGGLE,data:!0})}},{key:"disable",value:function(){this.checkReadiness(this.isReady),this.debugLogs&&x.info("AudioFilterNode:disable","send disable NC message"),this.enabled=!1,this.postMessage({event:w.TOGGLE,data:!1})}},{key:"toggle",value:function(){this.checkReadiness(this.isReady),this.debugLogs&&x.info("AudioFilterNode:toggle","send toggle NC message"),this.enabled=!this.enabled,this.postMessage({event:w.TOGGLE,data:void 0})}},{key:"dispose",value:function(){try{this.debugLogs&&x.info("AudioFilterNode:dispose","disposing Krisp filter"),this.postMessage({event:w.SUSPEND,data:void 0}),this.worker.removeEventListener("message",this._onWasmWorkerMessage.bind(this)),this.worker.terminate(),this.dispatchEvent(new MessageEvent(A.DISPOSE)),clearInterval(this.secondsCounterInterval)}catch(e){this.debugLogs&&x.error("AudioFilterNode:dispose",e)}}},{key:"startSecondsCounter",value:function(e){var t=this,r=0;this.secondsCounterInterval=setInterval((function(){r++,t.parameters.get("seconds").setValueAtTime(r,0),x.info("AudioFilterNode:interval",JSON.stringify({seconds:r,baseLatency:e.baseLatency,outputLatency:e.outputLatency}))}),1e3)}}]),r}(E(AudioWorkletNode));function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}var q="krisp-debug-widget";function J(){if(!document.querySelector(q)){var e=document.createElement(q);document.body.appendChild(e)}}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}void 0===customElements.get(q)?customElements.define(q,function(e){b(r,e);var t=Z(r);function r(){var e,n;o(this,r),n=t.call(this);var i=document.createElement("template");return i.innerHTML='\n        <style>\n        * {\n          color: #131032;\n        }\n\n        .krisp-widget {\n          display: block;\n          width: 200px;\n          border: 1px solid #aaa;\n          border-radius: 5px;\n          background-color: #e4e7ea;\n        }\n\n        .krisp-widget .krisp-header {\n          border-bottom: 1px solid #aaa;\n          padding: 10px;\n          cursor: move;\n        }\n\n        .krisp-widget .krisp-content {\n          padding: 10px;\n        }\n\n        button {\n          height: 32px;\n          font-size: 14px;\n          line-height: 28px;\n          padding: 0 18px;\n          border-radius: 4px;\n          border: 1px solid #614efa;\n          color: #614efa;\n\n        }\n\n        button:hover {\n          background-color: #5544dc;\n          border-color: #5544dc;\n          cursor: pointer;\n          color: #fff;\n        }\n\n        </style>\n        <div class="krisp-widget">\n          <div class="krisp-header">\n            <b>Krisp</b> is in debug mode\n          </div>\n          <div class="krisp-content">\n            <button>Download Log Report</button>\n          </div>\n        </div>\n      ',n.attachShadow({mode:"open"}),null===(e=n.shadowRoot)||void 0===e||e.appendChild(i.content.cloneNode(!0)),n}return u(r,[{key:"connectedCallback",value:function(){var e,t=this,r=0,n=0,o=0,i=0;this.style.position="absolute",this.style.top="10px",this.style.right="10px",this.onmousedown=function(e){o=e.clientX,i=e.clientY,document.onmouseup=function(){document.onmouseup=null,document.onmousemove=null},document.onmousemove=function(e){e.preventDefault(),r=o-e.clientX,n=i-e.clientY,o=e.clientX,i=e.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-r+"px"}},null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector("button"))||void 0===e||e.addEventListener("click",(function(){return x.downloadReport()}))}}]),r}(E(HTMLElement))):x.warn("The KrispSDK is duplicated. Please ensure that the SDK is only imported once.");var $=function(e,r){function n(e){var t,r,i,a,s,u,l,f,h,v,g,y,b;o(this,n),c(this,"state",d.INITIAL);var m=!(null==e||null===(t=e.params)||void 0===t||!t.debugLogs);if(x.setOptions(m),x.collectFrom(window,{}),!n.isSupported())throw new Error(p.SDK_BROWSER_NOT_SUPPORTED);if(!e.params)throw new Error(p.INVALID_OPTIONS);if(null==e||null===(r=e.params)||void 0===r||!r.models||Object.keys(!(null!=e&&null!==(i=e.params)&&void 0!==i&&i.models)).length)throw new Error(p.INVALID_OPTIONS);if(B(null==e||null===(a=e.params)||void 0===a?void 0:a.models))throw m&&x.error("Krisp SDK - Invalid model url. Accepted structure is schema://domain.ext/path/to/model.kw"),new Error(p.INVALID_MODEL_URL);if(null!=e&&null!==(s=e.params)&&void 0!==s&&s.inboundModels&&B(null==e||null===(u=e.params)||void 0===u?void 0:u.inboundModels))throw m&&x.error("Krisp SDK - Invalid inbound model url. Accepted structure is schema://domain.ext/path/to/model.kw"),new Error(p.INVALID_INBOUND_MODEL_URL);null!=e&&null!==(l=e.params)&&void 0!==l&&l.useSharedArrayBuffer&&"undefined"==typeof SharedArrayBuffer&&(x.warn("Krisp SDK - SharedArrayByffer is not supported by browser. Make sure all security requirements are present. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"),e.params.useSharedArrayBuffer=!1),this.options={params:{models:(null==e||null===(f=e.params)||void 0===f?void 0:f.models)||{},inboundModels:(null==e||null===(h=e.params)||void 0===h?void 0:h.inboundModels)||{},useSharedArrayBuffer:!(null===(v=e.params)||void 0===v||!v.useSharedArrayBuffer),logProcessStats:!(null===(g=e.params)||void 0===g||!g.logProcessStats),bufferOverflowMS:e.params.bufferOverflowMS||200,debugLogs:m,workerUrl:(null===(y=e.params)||void 0===y?void 0:y.workerUrl)||"",workletUrl:(null===(b=e.params)||void 0===b?void 0:b.workletUrl)||""}},this.debugLogs&&x.info("KrispSDK:constructor",JSON.stringify(this.options))}return u(n,[{key:"debugLogs",get:function(){return this.options.params.debugLogs}},{key:"init",value:function(){return(e=e||t(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state!==d.INITIALIZED){e.next=3;break}throw this.debugLogs&&x.error("KrispSDK:init","SDK already initialized"),new Error(p.SDK_ALREADY_INITIALIZED);case 3:this.state=d.INITIALIZED,this.debugLogs&&J();case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"createNoiseFilter",value:function(e,n,o){return(r=r||t(f().mark((function e(t,r,n){var o,i,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t instanceof AudioContext?t:t.audioContext,i=!(t instanceof AudioContext)&&!!t.isInbound,a=H(H({},this.options.params),{},{isInbound:i}),!this.debugLogs){e.next=13;break}return e.t0=x,e.t1=JSON,e.t2=navigator.userAgent,e.next=9,navigator.mediaDevices.enumerateDevices();case 9:e.t3=e.sent,e.t4={userAgent:e.t2,devices:e.t3},e.t5=e.t1.stringify.call(e.t1,e.t4),e.t0.info.call(e.t0,"KrispSDK:createNoiseFilter",e.t5);case 13:if(this.state===d.INITIALIZED){e.next=16;break}throw this.debugLogs&&x.error("KrispSDK:createNoiseFilter","already initialized"),new Error(p.SDK_NOT_INITIALIZED);case 16:if(o&&o.audioWorklet){e.next=19;break}throw this.debugLogs&&x.error("KrispSDK:createNoiseFilter","audioContext or audioContext.audioWorklet not found"),new Error(p.INVALID_AUDIO_CONTEXT);case 19:if(!(j.indexOf(o.sampleRate)<0)){e.next=21;break}throw new Error(p.NOT_SUPPORTED_SAMPLE_RATE);case 21:return e.prev=21,this.debugLogs&&x.info("KrispSDK:createNoiseFilter","creating audioWorklet"),e.next=25,o.audioWorklet.addModule(a.workletUrl);case 25:e.next=31;break;case 27:throw e.prev=27,e.t6=e.catch(21),this.debugLogs&&x.error("KrispSDK:createNoiseFilter",e.t6),new Error(p.WORKLET_NOT_SUPPORTED);case 31:return e.abrupt("return",new X(o,a,r,n));case 32:case"end":return e.stop()}}),e,this,[[21,27]])})))).apply(this,arguments)}},{key:"downloadReport",value:function(){return x.downloadReport()}},{key:"dispose",value:function(){this.state=d.INITIAL}}],[{key:"isSupported",value:function(){return!(navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS")||(e=navigator.userAgent||navigator.vendor||window.opera,/iPhone|iPad|iPod|Android|IEMobile|Windows Phone|BlackBerry|webOS|Opera Mini|Nexus 7|Nexus 10|KFAPWI/i.test(e)||/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))));var e}}]),n}(),ee=$}(),KrispSDK=n.default}();