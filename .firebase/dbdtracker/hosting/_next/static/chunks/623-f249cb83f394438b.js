"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{4444:function(t,e,n){n.d(e,{$s:function(){return $},BH:function(){return v},L:function(){return h},LL:function(){return O},P0:function(){return g},Pz:function(){return y},Sg:function(){return b},ZR:function(){return _},aH:function(){return m},b$:function(){return S},eu:function(){return A},hl:function(){return C},m9:function(){return H},ne:function(){return R},pd:function(){return L},q4:function(){return d},ru:function(){return E},tV:function(){return l},uI:function(){return I},vZ:function(){return function t(e,n){if(e===n)return!0;let i=Object.keys(e),r=Object.keys(n);for(let s of i){if(!r.includes(s))return!1;let i=e[s],a=n[s];if(M(i)&&M(a)){if(!t(i,a))return!1}else if(i!==a)return!1}for(let t of r)if(!i.includes(t))return!1;return!0}},w1:function(){return T},xO:function(){return P},xb:function(){return k},z$:function(){return w},zI:function(){return D},zd:function(){return x}});var i=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r=function(t){let e=[],n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):(64512&r)==55296&&i+1<t.length&&(64512&t.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},s=function(t){let e=[],n=0,i=0;for(;n<t.length;){let r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=t[n++],a=t[n++],o=t[n++],h=((7&r)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(1023&h))}else{let s=t[n++],a=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return e.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){let r=t[e],s=e+1<t.length,a=s?t[e+1]:0,o=e+2<t.length,h=o?t[e+2]:0,l=r>>2,c=(3&r)<<4|a>>4,u=(15&a)<<2|h>>6,f=63&h;o||(f=64,s||(u=64)),i.push(n[l],n[c],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){let r=n[t.charAt(e++)],s=e<t.length,a=s?n[t.charAt(e)]:0;++e;let o=e<t.length,h=o?n[t.charAt(e)]:64;++e;let l=e<t.length,c=l?n[t.charAt(e)]:64;if(++e,null==r||null==a||null==h||null==c)throw Error();let u=r<<2|a>>4;if(i.push(u),64!==h){let t=a<<4&240|h>>2;if(i.push(t),64!==c){let t=h<<6&192|c;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){let e=r(t);return a.encodeByteArray(e,!0)},h=function(t){return o(t).replace(/\./g,"")},l=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,u=()=>{if(void 0===i||void 0===i.env)return;let t=i.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},f=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let e=t&&l(t[1]);return e&&JSON.parse(e)},p=()=>{try{return c()||u()||f()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},d=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{let e=d(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},m=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[h(JSON.stringify({alg:"none",type:"JWT"})),h(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function I(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function E(){let t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function S(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){let t=w();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){try{return"object"==typeof indexedDB}catch(t){return!1}}function A(){return new Promise((t,e)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}function D(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){let n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?r.replace(j,(t,e)=>{let i=n[e];return null!=i?String(i):`<${e}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`,o=new _(i,a,n);return o}}let j=/\{\$([^}]+)}/g;function k(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t){return null!==t&&"object"==typeof t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){let e=[];for(let[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function x(t){let e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){let[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function L(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function R(t,e){let n=new N(t,e);return n.subscribe.bind(n)}class N{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw Error("Missing Observer.");void 0===(i=!function(t,e){if("object"!=typeof t||null===t)return!1;for(let n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?{next:t,error:e,complete:n}:t).next&&(i.next=B),void 0===i.error&&(i.error=B),void 0===i.complete&&(i.complete=B);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B(){}function $(t,e=1e3,n=2){let i=e*Math.pow(n,t);return Math.min(144e5,i+Math.round(.5*i*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return t&&t._delegate?t._delegate:t}},3510:function(t,e,n){n.d(e,{FJ:function(){return nI},JJ:function(){return n_},UE:function(){return nw},ii:function(){return nD},jK:function(){return nE},ju:function(){return nT},kN:function(){return nC},tw:function(){return nS},zI:function(){return nA}});var i,r,s,a,o,h,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},c={},u=u||{},f=l||self;function p(){}function d(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function g(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function v(t,e,n){return(v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:y).apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function w(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function I(){this.s=this.s,this.o=this.o}I.prototype.s=!1,I.prototype.na=function(){this.s||(this.s=!0,this.M())},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1};function S(t){let e=t.length;if(0<e){let n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function T(t,e){for(let e=1;e<arguments.length;e++){let n=arguments[e];if(d(n)){let e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function C(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",p,e),f.removeEventListener("test",p,e)}catch(t){}return t}();function D(t){return/^[\s\xa0]*$/.test(t)}var _=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return t<e?-1:t>e?1:0}function j(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return -1!=j().indexOf(t)}function M(t){return M[" "](t),t}M[" "]=p;var P=k("Opera"),x=k("Trident")||k("MSIE"),L=k("Edge"),R=L||x,N=k("Gecko")&&!(-1!=j().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),B=-1!=j().toLowerCase().indexOf("webkit")&&!k("Edge");function $(){var t=f.document;return t?t.documentMode:void 0}t:{var H,F="",U=(H=j(),N?/rv:([^\);]+)(\)|;)/.exec(H):L?/Edge\/([\d\.]+)/.exec(H):x?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(H):B?/WebKit\/(\S+)/.exec(H):P?/(?:Version)[ \/]?(\S+)/.exec(H):void 0);if(U&&(F=U?U[1]:""),x){var X=$();if(null!=X&&X>parseFloat(F)){r=String(X);break t}}r=F}var z={},V=f.document&&x&&($()||parseInt(r,10))||void 0;function q(t,e){if(C.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{M(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:K[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&q.X.h.call(this)}}w(q,C);var K={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++J,this.ba=this.ea=!1}function Y(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Z(t,e,n){for(let i in t)e.call(n,t[i],i,t)}function Q(t){let e={};for(let n in t)e[n]=t[n];return e}let tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function te(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e])t[n]=i[n];for(let e=0;e<tt.length;e++)n=tt[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function tn(t){this.src=t,this.g={},this.h=0}function ti(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=E(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Y(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function tr(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&!!n==s.capture&&s.ha==i)return r}return -1}tn.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var a=tr(t,e,i,r);return -1<a?(e=t[a],n||(e.ea=!1)):((e=new G(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var ts="closure_lm_"+(1e6*Math.random()|0),ta={};function to(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var a=g(r)?!!r.capture:!!r,o=tu(t);if(o||(t[ts]=o=new tn(t)),(n=o.add(e,n,i,a,s)).proxy)return n;if(i=function t(e){return tc.call(t.src,t.listener,e)},n.proxy=i,i.src=t,i.listener=n,t.addEventListener)A||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(tl(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function th(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[W])ti(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(tl(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=tu(e))?(ti(n,t),0==n.h&&(n.src=null,e[ts]=null)):Y(t)}}}function tl(t){return t in ta?ta[t]:ta[t]="on"+t}function tc(t,e){if(t.ba)t=!0;else{e=new q(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&th(t),t=n.call(i,e)}return t}function tu(t){return(t=t[ts])instanceof tn?t:null}var tf="__closure_events_fn_"+(1e9*Math.random()>>>0);function tp(t){return"function"==typeof t?t:(t[tf]||(t[tf]=function(e){return t.handleEvent(e)}),t[tf])}function td(){I.call(this),this.i=new tn(this),this.P=this,this.I=null}function tg(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new C(e,t);else if(e instanceof C)e.target=e.target||t;else{var r=e;te(e=new C(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=e.g=n[s];r=tm(a,i,!0,e)&&r}if(r=tm(a=e.g=t,i,!0,e)&&r,r=tm(a,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=tm(a=e.g=n[s],i,!1,e)&&r}function tm(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,h=a.ha||a.src;a.ea&&ti(t.i,a),r=!1!==o.call(h,i)&&r}}return r&&!i.defaultPrevented}w(td,I),td.prototype[W]=!0,td.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);else(r=g(r)?!!r.capture:!!r,i=tp(i),e&&e[W])?(e=e.i,(n=String(n).toString())in e.g&&-1<(i=tr(a=e.g[n],i,r,s))&&(Y(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete e.g[n],e.h--))):e&&(e=tu(e))&&(n=e.g[n.toString()],e=-1,n&&(e=tr(n,i,r,s)),(i=-1<e?n[e]:null)&&th(i))}(this,t,e,n,i)},td.prototype.M=function(){if(td.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Y(n[i]);delete e.g[t],e.h--}}this.I=null},td.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},td.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var ty=f.JSON.stringify,tv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tb,t=>t.reset());class tb{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function tw(t,e){var n;a||(n=f.Promise.resolve(void 0),a=function(){n.then(tS)}),tI||(a(),tI=!0),tE.add(t,e)}var tI=!1,tE=new class{constructor(){this.h=this.g=null}add(t,e){let n=tv.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function tS(){let t;for(;t=null,(e=tE).g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),n=t;){try{n.h.call(n.g)}catch(t){!function(t){f.setTimeout(()=>{throw t},0)}(t)}var e,n,i=tv;i.j(n),100>i.h&&(i.h++,n.next=i.g,i.g=n)}tI=!1}function tT(t,e){td.call(this),this.h=t||1,this.g=e||f,this.j=v(this.lb,this),this.l=Date.now()}function tC(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function tA(t,e,n){if("function"==typeof t)n&&(t=v(t,n));else if(t&&"function"==typeof t.handleEvent)t=v(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}w(tT,td),(h=tT.prototype).ca=!1,h.R=null,h.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tg(this,"tick"),this.ca&&(tC(this),this.start()))}},h.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},h.M=function(){tT.X.M.call(this),tC(this),delete this.g};class tD extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=tA(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);let n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function t_(t){I.call(this),this.h=t,this.g={}}w(t_,I);var tO=[];function tj(t,e,n,i){Array.isArray(n)||(n&&(tO[0]=n.toString()),n=tO);for(var r=0;r<n.length;r++){var s=function t(e,n,i,r,s){if(r&&r.once)return function t(e,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=tp(i),e&&e[W]?e.O(n,i,g(r)?!!r.capture:!!r,s):to(e,n,i,!0,r,s)}(e,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=tp(i),e&&e[W]?e.N(n,i,g(r)?!!r.capture:!!r,s):to(e,n,i,!1,r,s)}(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function tk(t){Z(t.g,function(t,e){this.g.hasOwnProperty(e)&&th(t)},t),t.g={}}function tM(){this.g=!0}function tP(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return ty(n)}catch(t){return e}}(t,n)+(i?" "+i:"")})}t_.prototype.M=function(){t_.X.M.call(this),tk(this)},t_.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tM.prototype.Aa=function(){this.g=!1},tM.prototype.info=function(){};var tx={},tL=null;function tR(){return tL=tL||new td}function tN(t){C.call(this,tx.Pa,t)}function tB(t){let e=tR();tg(e,new tN(e))}function t$(t,e){C.call(this,tx.STAT_EVENT,t),this.stat=e}function tH(t){let e=tR();tg(e,new t$(e,t))}function tF(t,e){C.call(this,tx.Qa,t),this.size=e}function tU(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}tx.Pa="serverreachability",w(tN,C),tx.STAT_EVENT="statevent",w(t$,C),tx.Qa="timingevent",w(tF,C);var tX={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tz={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function tV(){}function tq(t){return t.h||(t.h=t.i())}function tK(){}tV.prototype.h=null;var tW={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tJ(){C.call(this,"d")}function tG(){C.call(this,"c")}function tY(){}function tZ(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new t_(this),this.O=t0,t=R?125:void 0,this.T=new tT(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new tQ}function tQ(){this.i=null,this.g="",this.h=!1}w(tJ,C),w(tG,C),w(tY,tV),tY.prototype.g=function(){return new XMLHttpRequest},tY.prototype.i=function(){return{}},o=new tY;var t0=45e3,t1={},t2={};function t3(t,e,n){t.K=1,t.v=eu(ea(e)),t.s=n,t.P=!0,t4(t,null)}function t4(t,e){t.F=Date.now(),t8(t),t.A=ea(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),eT(n.i,"t",i),t.C=0,n=t.l.H,t.h=new tQ,t.g=np(t.l,n?e:null,!t.s),0<t.N&&(t.L=new tD(v(t.La,t,t.g),t.N)),tj(t.S,t.g,"readystatechange",t.ib),e=t.H?Q(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),tB(),function(t,e,n,i,r,s){t.info(function(){if(t.g){if(s)for(var a="",o=s.split("&"),h=0;h<o.length;h++){var l=o[h].split("=");if(1<l.length){var c=l[0];l=l[1];var u=c.split("_");a=2<=u.length&&"type"==u[1]?a+(c+"=")+l+"&":a+(c+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+a})}(t.j,t.u,t.A,t.m,t.U,t.s)}function t6(t){return!!t.g&&"GET"==t.u&&2!=t.K&&t.l.Da}function t5(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if((r=function(t,e){var n=t.C,i=e.indexOf("\n",n);return -1==i?t2:isNaN(n=Number(e.substring(n,i)))?t1:(i+=1)+n>e.length?t2:(e=e.substr(i,n),t.C=i+n,e)}(t,n))==t2){4==e&&(t.o=4,tH(14),i=!1),tP(t.j,t.m,null,"[Incomplete Response]");break}else if(r==t1){t.o=4,tH(15),tP(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else tP(t.j,t.m,r,null),en(t,r);t6(t)&&r!=t2&&r!=t1&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,tH(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ns(e),e.K=!0,tH(11))):(tP(t.j,t.m,n,"[Invalid Chunked Response]"),ee(t),et(t))}function t8(t){t.V=Date.now()+t.O,t9(t,t.O)}function t9(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=tU(v(t.gb,t),e)}function t7(t){t.B&&(f.clearTimeout(t.B),t.B=null)}function et(t){0==t.l.G||t.I||nh(t.l,t)}function ee(t){t7(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,tC(t.T),tk(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function en(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ek(n.h,t))){if(!t.J&&ek(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(n.g.F+3e3<t.F)no(n),e8(n);else break t}nr(n),tH(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=tU(v(n.cb,n),6e3));if(1>=ej(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else nc(n,11)}else if((t.J||n.g==t)&&no(n),!D(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let o=r[e];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.I=o[1],n.ka=o[2];let e=o[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));let r=o[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));let h=o[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;let l=t.g;if(l){let t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(eM(s,s.h),s.h=null))}if(i.D){let t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,ec(i.F,i.D,t))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),(i=n).sa=nf(i,i.H?i.ka:null,i.V),t.J){eP(i.h,t);var a=i.J;a&&t.setTimeout(a),t.B&&(t7(t),t8(t)),i.g=t}else ni(i);0<n.i.length&&e7(n)}else"stop"!=o[0]&&"close"!=o[0]||nc(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nc(n,7):e5(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}}tB(4)}catch(t){}}function ei(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(d(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(let i in e=[],n=0,t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(h=tZ.prototype).setTimeout=function(t){this.O=t},h.ib=function(t){t=t.target;let e=this.L;e&&3==e0(t)?e.l():this.La(t)},h.La=function(t){try{if(t==this.g)t:{let c=e0(this.g);var e=this.g.Ea();let u=this.g.aa();if(!(3>c)&&(3!=c||R||this.g&&(this.h.h||this.g.fa()||e1(this.g)))){this.I||4!=c||7==e||(8==e||0>=u?tB(3):tB(2)),t7(this);var n=this.g.aa();this.Y=n;e:if(t6(this)){var i=e1(this.g);t="";var r=i.length,s=4==e0(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ee(this),et(this);var a="";break e}this.h.i=new f.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var o,h=this.g;if((o=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(o)){var l=o;break e}}l=null}if(n=l)tP(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,en(this,n);else{this.i=!1,this.o=3,tH(12),ee(this),et(this);break t}}this.P?(t5(this,c,a),R&&this.i&&3==c&&(tj(this.S,this.T,"tick",this.hb),this.T.start())):(tP(this.j,this.m,a,null),en(this,a)),4==c&&ee(this),this.i&&!this.I&&(4==c?nh(this.l,this):(this.i=!1,t8(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,tH(12)):(this.o=0,tH(13)),ee(this),et(this)}}}catch(t){}finally{}},h.hb=function(){if(this.g){var t=e0(this.g),e=this.g.fa();this.C<e.length&&(t7(this),t5(this,t,e),this.i&&4!=t&&t8(this))}},h.cancel=function(){this.I=!0,ee(this)},h.gb=function(){this.B=null;let t=Date.now();0<=t-this.V?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.K&&(tB(),tH(17)),ee(this),this.o=2,et(this)):t9(this,this.V-t)};var er=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof es){this.h=void 0!==e?e:t.h,eo(this,t.j),this.s=t.s,this.g=t.g,eh(this,t.m),this.l=t.l,e=t.i;var n=new ew;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),el(this,n),this.o=t.o}else t&&(n=String(t).match(er))?(this.h=!!e,eo(this,n[1]||"",!0),this.s=ef(n[2]||""),this.g=ef(n[3]||"",!0),eh(this,n[4]),this.l=ef(n[5]||"",!0),el(this,n[6]||"",!0),this.o=ef(n[7]||"")):(this.h=!!e,this.i=new ew(null,this.h))}function ea(t){return new es(t)}function eo(t,e,n){t.j=n?ef(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eh(t,e){if(e){if(isNaN(e=Number(e))||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function el(t,e,n){var i,r;e instanceof ew?(t.i=e,i=t.i,(r=t.h)&&!i.j&&(eI(i),i.i=null,i.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(eE(this,e),eT(this,n,t))},i)),i.j=r):(n||(e=ep(e,ev)),t.i=new ew(e,t.h))}function ec(t,e,n){t.i.set(e,n)}function eu(t){return ec(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ef(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ep(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ed),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ed(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ep(e,eg,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ep(e,eg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ep(n,"/"==n.charAt(0)?ey:em,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ep(n,eb)),t.join("")};var eg=/[#\/\?@]/g,em=/[#\?:]/g,ey=/[#\?]/g,ev=/[#\?@]/g,eb=/#/g;function ew(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function eI(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function eE(t,e){eI(t),e=eC(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eS(t,e){return eI(t),e=eC(t,e),t.g.has(e)}function eT(t,e,n){eE(t,e),0<n.length&&(t.i=null,t.g.set(eC(t,e),S(n)),t.h+=n.length)}function eC(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(h=ew.prototype).add=function(t,e){eI(this),this.i=null,t=eC(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},h.forEach=function(t,e){eI(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},h.oa=function(){eI(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){let r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},h.W=function(t){eI(this);let e=[];if("string"==typeof t)eS(this,t)&&(e=e.concat(this.g.get(eC(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},h.set=function(t,e){return eI(this),this.i=null,eS(this,t=eC(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},h.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},h.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];let s=encodeURIComponent(String(i)),a=this.W(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),t.push(r)}}return this.i=t.join("&")};var eA=class{constructor(t,e){this.h=t,this.g=e}};function eD(t){this.l=t||e_,t=f.PerformanceNavigationTiming?0<(t=f.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(f.g&&f.g.Ga&&f.g.Ga()&&f.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var e_=10;function eO(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ej(t){return t.h?1:t.g?t.g.size:0}function ek(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function eM(t,e){t.g?t.g.add(e):t.h=e}function eP(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ex(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(let n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function eL(){}function eR(){this.g=new eL}function eN(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function eB(t){this.l=t.ac||null,this.j=t.jb||!1}function e$(t,e){td.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=eH,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}eD.prototype.cancel=function(){if(this.i=ex(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}},eL.prototype.stringify=function(t){return f.JSON.stringify(t,void 0)},eL.prototype.parse=function(t){return f.JSON.parse(t,void 0)},w(eB,tV),eB.prototype.g=function(){return new e$(this.l,this.j)},eB.prototype.i=(i={},function(){return i}),w(e$,td);var eH=0;function eF(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function eU(t){t.readyState=4,t.l=null,t.j=null,t.A=null,eX(t)}function eX(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(h=e$.prototype).open=function(t,e){if(this.readyState!=eH)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,eX(this)},h.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||f).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},h.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,eU(this)),this.readyState=eH},h.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,eX(this)),this.g&&(this.readyState=3,eX(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==f.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eF(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))}},h.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eU(this):eX(this),3==this.readyState&&eF(this)}},h.Va=function(t){this.g&&(this.response=this.responseText=t,eU(this))},h.Ua=function(t){this.g&&(this.response=t,eU(this))},h.ga=function(){this.g&&eU(this)},h.setRequestHeader=function(t,e){this.v.append(t,e)},h.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},h.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)t.push((n=n.value)[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(e$.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ez=f.JSON.parse;function eV(t){td.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eq,this.K=this.L=!1}w(eV,td);var eq="",eK=/^https?$/i,eW=["POST","PUT"];function eJ(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eG(t),eZ(t)}function eG(t){t.D||(t.D=!0,tg(t,"complete"),tg(t,"error"))}function eY(t){if(t.h&&void 0!==u&&(!t.C[1]||4!=e0(t)||2!=t.aa())){if(t.v&&4==e0(t))tA(t.Ha,0,t);else if(tg(t,"readystatechange"),4==e0(t)){t.h=!1;try{let o=t.aa();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e,n,i=!0;break t;default:i=!1}if(!(e=i)){if(n=0===o){var r=String(t.H).match(er)[1]||null;if(!r&&f.self&&f.self.location){var s=f.self.location.protocol;r=s.substr(0,s.length-1)}n=!eK.test(r?r.toLowerCase():"")}e=n}if(e)tg(t,"complete"),tg(t,"success");else{t.m=6;try{var a=2<e0(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.aa()+"]",eG(t)}}finally{eZ(t)}}}}function eZ(t,e){if(t.g){eQ(t);let n=t.g,i=t.C[0]?p:null;t.g=null,t.C=null,e||tg(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function eQ(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function e0(t){return t.g?t.g.readyState:0}function e1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case eq:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function e2(t){let e="";return Z(t,function(t,n){e+=n+":"+t+"\r\n"}),e}function e3(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=e2(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ec(t,e,n))}function e4(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function e6(t){this.Ca=0,this.i=[],this.j=new tM,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=e4("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=e4("baseRetryDelayMs",5e3,t),this.bb=e4("retryDelaySeedMs",1e4,t),this.$a=e4("forwardChannelMaxRetries",2,t),this.ta=e4("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new eD(t&&t.concurrentRequestLimit),this.Fa=new eR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function e5(t){if(e9(t),3==t.G){var e=t.U++,n=ea(t.F);ec(n,"SID",t.I),ec(n,"RID",e),ec(n,"TYPE","terminate"),ne(t,n),(e=new tZ(t,t.j,e,void 0)).K=2,e.v=eu(ea(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(e.v.toString(),"")),!n&&f.Image&&((new Image).src=e.v,n=!0),n||(e.g=np(e.l,null),e.g.da(e.v)),e.F=Date.now(),t8(e)}nu(t)}function e8(t){t.g&&(ns(t),t.g.cancel(),t.g=null)}function e9(t){e8(t),t.u&&(f.clearTimeout(t.u),t.u=null),no(t),t.h.cancel(),t.m&&("number"==typeof t.m&&f.clearTimeout(t.m),t.m=null)}function e7(t){eO(t.h)||t.m||(t.m=!0,tw(t.Ja,t),t.C=0)}function nt(t,e){var n;n=e?e.m:t.U++;let i=ea(t.F);ec(i,"SID",t.I),ec(i,"RID",n),ec(i,"AID",t.T),ne(t,i),t.o&&t.s&&e3(i,t.o,t.s),n=new tZ(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=nn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),eM(t.h,n),t3(n,i,e)}function ne(t,e){t.ia&&Z(t.ia,function(t,n){ec(e,n,t)}),t.l&&ei({},function(t,n){ec(e,n,t)})}function nn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?v(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){let t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=r[a].h,o=r[a].g;if(0>(n-=e))e=Math.max(0,r[a].h-100),s=!1;else try{!function(t,e,n){let i=n||"";try{ei(t,function(t,n){let r=t;g(t)&&(r=ty(t)),e.push(i+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}(o,t,"req"+n+"_")}catch(t){i&&i(o)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ni(t){t.g||t.u||(t.Z=1,tw(t.Ia,t),t.A=0)}function nr(t){return!t.g&&!t.u&&!(3<=t.A)&&(t.Z++,t.u=tU(v(t.Ia,t),nl(t,t.A)),t.A++,!0)}function ns(t){null!=t.B&&(f.clearTimeout(t.B),t.B=null)}function na(t){t.g=new tZ(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ea(t.sa);ec(e,"RID","rpc"),ec(e,"SID",t.I),ec(e,"CI",t.L?"0":"1"),ec(e,"AID",t.T),ec(e,"TYPE","xmlhttp"),ne(t,e),t.o&&t.s&&e3(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=eu(ea(e)),n.s=null,n.P=!0,t4(n,t)}function no(t){null!=t.v&&(f.clearTimeout(t.v),t.v=null)}function nh(t,e){var n=null;if(t.g==e){no(t),ns(t),t.g=null;var i=2}else{if(!ek(t.h,e))return;n=e.D,eP(t.h,e),i=1}if(0!=t.G){if(t.pa=e.Y,e.i){if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r,s,a=t.C;tg(i=tR(),new tF(i,n)),e7(t)}else ni(t)}else if(3==(a=e.o)||0==a&&0<t.pa||!(1==i&&(r=t,s=e,!(ej(r.h)>=r.h.j-(r.m?1:0))&&(r.m?(r.i=s.D.concat(r.i),!0):1!=r.G&&2!=r.G&&!(r.C>=(r.Za?0:r.$a))&&(r.m=tU(v(r.Ja,r,s),nl(r,r.C)),r.C++,!0)))||2==i&&nr(t)))switch(n&&0<n.length&&((e=t.h).i=e.i.concat(n)),a){case 1:nc(t,5);break;case 4:nc(t,10);break;case 3:nc(t,6);break;default:nc(t,2)}}}function nl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function nc(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=v(t.kb,t);n||(n=new es("//www.google.com/images/cleardot.gif"),f.location&&"http"==f.location.protocol||eo(n,"https"),eu(n)),function(t,e){let n=new tM;if(f.Image){let i=new Image;i.onload=b(eN,n,i,"TestLoadImage: loaded",!0,e),i.onerror=b(eN,n,i,"TestLoadImage: error",!1,e),i.onabort=b(eN,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=b(eN,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(n.toString(),i)}else tH(2);t.G=0,t.l&&t.l.va(e),nu(t),e9(t)}function nu(t){if(t.G=0,t.la=[],t.l){let e=ex(t.h);(0!=e.length||0!=t.i.length)&&(T(t.la,e),T(t.la,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.ua()}}function nf(t,e,n){var i=n instanceof es?ea(n):new es(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),eh(i,i.m);else{var r=f.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new es(null,void 0);i&&eo(s,i),e&&(s.g=e),r&&eh(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&ec(i,n,e),ec(i,"VER",t.ma),ne(t,i),i}function np(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new eV(n&&t.Da&&!t.ra?new eB({jb:!0}):t.ra)).Ka(t.H),e}function nd(){}function ng(){if(x&&!(10<=Number(V)))throw Error("Environmental error: no available transport.")}function nm(t,e){td.call(this),this.g=new e6(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new nb(this)}function ny(t){tJ.call(this);var e=t.__sm__;if(e){t:{for(let n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function nv(){tG.call(this),this.status=1}function nb(t){this.g=t}(h=eV.prototype).Ka=function(t){this.L=t},h.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?tq(this.u):tq(o),this.g.onreadystatechange=v(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){eJ(this,t);return}if(t=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let t of i.keys())n.set(t,i.get(t));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[r,a]of(i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=f.FormData&&t instanceof f.FormData,!(0<=E(eW,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(r,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var a,h;eQ(this),0<this.B&&((this.K=(a=this.g,x&&(h=z,Object.prototype.hasOwnProperty.call(h,9)?h[9]:h[9]=function(){let t=0,e=_(String(r)).split("."),n=_("9").split("."),i=Math.max(e.length,n.length);for(let r=0;0==t&&r<i;r++){var s=e[r]||"",a=n[r]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;t=O(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||O(0==s[2].length,0==a[2].length)||O(s[2],a[2]),s=s[3],a=a[3]}while(0==t)}return 0<=t}(9))&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=v(this.qa,this)):this.A=tA(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){eJ(this,t)}},h.qa=function(){void 0!==u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tg(this,"timeout"),this.abort(8))},h.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tg(this,"complete"),tg(this,"abort"),eZ(this))},h.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eZ(this,!0)),eV.X.M.call(this)},h.Ha=function(){this.s||(this.F||this.v||this.l?eY(this):this.fb())},h.fb=function(){eY(this)},h.aa=function(){try{return 2<e0(this)?this.g.status:-1}catch(t){return -1}},h.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},h.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ez(e)}},h.Ea=function(){return this.m},h.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(h=e6.prototype).ma=8,h.G=1,h.Ja=function(t){if(this.m){if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;let r=new tZ(this,this.j,t,void 0),s=this.s;if(this.S&&(s?te(s=Q(s),this.S):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&"string"==typeof(i=i.g.__data__)){i=i.length;break e}i=void 0}if(void 0===i)break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=nn(this,r,e),ec(n=ea(this.F),"RID",t),ec(n,"CVER",22),this.D&&ec(n,"X-HTTP-Session-Id",this.D),ne(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(e2(s)))+"&"+e:this.o&&e3(n,this.o,s)),eM(this.h,r),this.Ya&&ec(n,"TYPE","init"),this.O?(ec(n,"$req",e),ec(n,"SID","null"),r.Z=!0,t3(r,n,null)):t3(r,n,e),this.G=2}}else 3==this.G&&(t?nt(this,t):0==this.i.length||eO(this.h)||nt(this))}},h.Ia=function(){if(this.u=null,na(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=tU(v(this.eb,this),t)}},h.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tH(10),e8(this),na(this))},h.cb=function(){null!=this.v&&(this.v=null,e8(this),nr(this),tH(19))},h.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tH(2)):(this.j.info("Failed to ping google.com"),tH(1))},(h=nd.prototype).xa=function(){},h.wa=function(){},h.va=function(){},h.ua=function(){},h.Ra=function(){},ng.prototype.g=function(t,e){return new nm(t,e)},w(nm,td),nm.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tH(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nf(t,null,t.V),e7(t)},nm.prototype.close=function(){e5(this.g)},nm.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=ty(t),t=n);e.i.push(new eA(e.ab++,t)),3==e.G&&e7(e)},nm.prototype.M=function(){this.g.l=null,delete this.j,e5(this.g),delete this.g,nm.X.M.call(this)},w(ny,tJ),w(nv,tG),w(nb,nd),nb.prototype.xa=function(){tg(this.g,"a")},nb.prototype.wa=function(t){tg(this.g,new ny(t))},nb.prototype.va=function(t){tg(this.g,new nv)},nb.prototype.ua=function(){tg(this.g,"b")},ng.prototype.createWebChannel=ng.prototype.g,nm.prototype.send=nm.prototype.u,nm.prototype.open=nm.prototype.m,nm.prototype.close=nm.prototype.close,tX.NO_ERROR=0,tX.TIMEOUT=8,tX.HTTP_ERROR=6,tz.COMPLETE="complete",tK.EventType=tW,tW.OPEN="a",tW.CLOSE="b",tW.ERROR="c",tW.MESSAGE="d",td.prototype.listen=td.prototype.N,eV.prototype.listenOnce=eV.prototype.O,eV.prototype.getLastError=eV.prototype.Oa,eV.prototype.getLastErrorCode=eV.prototype.Ea,eV.prototype.getStatus=eV.prototype.aa,eV.prototype.getResponseJson=eV.prototype.Sa,eV.prototype.getResponseText=eV.prototype.fa,eV.prototype.send=eV.prototype.da,eV.prototype.setWithCredentials=eV.prototype.Ka;var nw=c.createWebChannelTransport=function(){return new ng},nI=c.getStatEventTarget=function(){return tR()},nE=c.ErrorCode=tX,nS=c.EventType=tz,nT=c.Event=tx,nC=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nA=c.FetchXmlHttpFactory=eB,nD=c.WebChannel=tK,n_=c.XhrIo=eV},655:function(t,e,n){n.d(e,{_T:function(){return i}});function i(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)0>e.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}},2238:function(t,e,n){n.d(e,{Jn:function(){return b},KN:function(){return E},Mq:function(){return I},Xd:function(){return g},ZF:function(){return w},qX:function(){return m}});var i=n(8463),r=n(3333),s=n(4444),a=n(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t){this.container=t}getPlatformInfoString(){let t=this.container.getProviders();return t.map(t=>{if(!function(t){let e=t.getComponent();return(null==e?void 0:e.type)==="VERSION"}(t))return null;{let e=t.getImmediate();return`${e.library}/${e.version}`}}).filter(t=>t).join(" ")}}let h="@firebase/app",l="0.9.3",c=new r.Yd("@firebase/app"),u="[DEFAULT]",f={[h]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,d=new Map;function g(t){let e=t.name;if(d.has(e))return c.debug(`There were multiple attempts to register component ${e}.`),!1;for(let n of(d.set(e,t),p.values()))!function(t,e){try{t.container.addComponent(e)}catch(n){c.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}(n,t);return!0}function m(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}let y=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b="9.17.1";function w(t,e={}){let n=t;if("object"!=typeof e){let t=e;e={name:t}}let r=Object.assign({name:u,automaticDataCollectionEnabled:!1},e),a=r.name;if("string"!=typeof a||!a)throw y.create("bad-app-name",{appName:String(a)});if(n||(n=(0,s.aH)()),!n)throw y.create("no-options");let o=p.get(a);if(o){if((0,s.vZ)(n,o.options)&&(0,s.vZ)(r,o.config))return o;throw y.create("duplicate-app",{appName:a})}let h=new i.H0(a);for(let t of d.values())h.addComponent(t);let l=new v(n,r,h);return p.set(a,l),l}function I(t=u){let e=p.get(t);if(!e&&t===u)return w();if(!e)throw y.create("no-app",{appName:t});return e}function E(t,e,n){var r;let s=null!==(r=f[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);let a=s.match(/\s|\//),o=e.match(/\s|\//);if(a||o){let t=[`Unable to register library "${s}" with version "${e}":`];a&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),c.warn(t.join(" "));return}g(new i.wA(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}let S="firebase-heartbeat-store",T=null;function C(){return T||(T=(0,a.X3)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(S)}}).catch(t=>{throw y.create("idb-open",{originalErrorMessage:t.message})})),T}async function A(t){try{let e=await C();return e.transaction(S).objectStore(S).get(_(t))}catch(t){if(t instanceof s.ZR)c.warn(t.message);else{let e=y.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});c.warn(e.message)}}}async function D(t,e){try{let n=await C(),i=n.transaction(S,"readwrite"),r=i.objectStore(S);return await r.put(e,_(t)),i.done}catch(t){if(t instanceof s.ZR)c.warn(t.message);else{let e=y.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});c.warn(e.message)}}}function _(t){return`${t.name}!${t.options.appId}`}class O{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new k(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){let t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=j();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let e=new Date(t.date).valueOf(),n=Date.now();return n-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let t=j(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){let n=[],i=t.slice();for(let r of t){let t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),M(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function j(){let t=new Date;return t.toISOString().substring(0,10)}class k{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){let t=await this._canUseIndexedDBPromise;if(!t)return{heartbeats:[]};{let t=await A(this.app);return t||{heartbeats:[]}}}async overwrite(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function M(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}g(new i.wA("platform-logger",t=>new o(t),"PRIVATE")),g(new i.wA("heartbeat",t=>new O(t),"PRIVATE")),E(h,l,""),E(h,l,"esm2017"),E("fire-js","")},8463:function(t,e,n){n.d(e,{H0:function(){return o},wA:function(){return r}});var i=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;let n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(let[t,e]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(t);try{let t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(let[t,e]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);n===r&&e.resolve(i)}return i}onInit(t,e){var n;let i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){let n=this.onInitCallbacks.get(e);if(n)for(let i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===s?void 0:t,options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){let e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){var i,r;n.d(e,{Yd:function(){return c},in:function(){return i}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(r=i||(i={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,h={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(t,e,...n)=>{if(e<t.logLevel)return;let i=new Date().toISOString(),r=h[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?a[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},3059:function(t,e,n){let i,r,s,a;var o=n(2238),h=n(3333),l=n(4444),c=n(8463),u=n(6531);let f="@firebase/installations",p="0.6.3",d=`w:${p}`,g="FIS_v2",m=new l.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function y(t){return t instanceof l.ZR&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function b(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function w(t,e){let n=await e.json(),i=n.error;return m.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function E(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let i=v(t),r=I(t),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let a={fid:n,authVersion:g,appId:t.appId,sdkVersion:d},o={method:"POST",headers:r,body:JSON.stringify(a)},h=await E(()=>fetch(i,o));if(h.ok){let t=await h.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:b(t.authToken)};return e}throw await w("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D=new Map;function _(t,e){let n=A(t);O(n,e),function(t,e){let n=(!j&&"BroadcastChannel"in self&&((j=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{O(t.data.key,t.data.fid)}),j);n&&n.postMessage({key:t,fid:e}),0===D.size&&j&&(j.close(),j=null)}(n,e)}function O(t,e){let n=D.get(t);if(n)for(let t of n)t(e)}let j=null,k="firebase-installations-store",M=null;function P(){return M||(M=(0,u.X3)("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(k)}})),M}async function x(t,e){let n=A(t),i=await P(),r=i.transaction(k,"readwrite"),s=r.objectStore(k),a=await s.get(n);return await s.put(e,n),await r.done,a&&a.fid===e.fid||_(t,e.fid),e}async function L(t){let e=A(t),n=await P(),i=n.transaction(k,"readwrite");await i.objectStore(k).delete(e),await i.done}async function R(t,e){let n=A(t),i=await P(),r=i.transaction(k,"readwrite"),s=r.objectStore(k),a=await s.get(n),o=e(a);return void 0===o?await s.delete(n):await s.put(o,n),await r.done,o&&(!a||a.fid!==o.fid)&&_(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(t){let e;let n=await R(t.appConfig,n=>{let i=function(t){let e=t||{fid:function(){try{let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;let n=function(t){let e=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(t);return C.test(n)?n:""}catch(t){return""}}(),registrationStatus:0};return F(e)}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){let t=Promise.reject(m.create("app-offline"));return{installationEntry:e,registrationPromise:t}}let n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=B(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:$(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function B(t,e){try{let n=await S(t,e);return x(t.appConfig,n)}catch(n){throw y(n)&&409===n.customData.serverCode?await L(t.appConfig):await x(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $(t){let e=await H(t.appConfig);for(;1===e.registrationStatus;)await T(100),e=await H(t.appConfig);if(0===e.registrationStatus){let{installationEntry:e,registrationPromise:n}=await N(t);return n||e}return e}function H(t){return R(t,t=>{if(!t)throw m.create("installation-not-found");return F(t)})}function F(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U({appConfig:t,heartbeatServiceProvider:e},n){let i=function(t,{fid:e}){return`${v(t)}/${e}/authTokens:generate`}(t,n),r=function(t,{refreshToken:e}){let n=I(t);return n.append("Authorization",`${g} ${e}`),n}(t,n),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let a={installation:{sdkVersion:d,appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(a)},h=await E(()=>fetch(i,o));if(h.ok){let t=await h.json(),e=b(t);return e}throw await w("Generate Auth Token",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t,e=!1){let n;let i=await R(t.appConfig,i=>{var r;if(!K(i))throw m.create("not-registered");let s=i.authToken;if(!e&&2===(r=s).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(r))return i;if(1===s.requestStatus)return n=z(t,e),i;{if(!navigator.onLine)throw m.create("app-offline");let e=function(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=q(t,e),e}}),r=n?await n:i.authToken;return r}async function z(t,e){let n=await V(t.appConfig);for(;1===n.authToken.requestStatus;)await T(100),n=await V(t.appConfig);let i=n.authToken;return 0===i.requestStatus?X(t,e):i}function V(t){return R(t,t=>{if(!K(t))throw m.create("not-registered");let e=t.authToken;return 1===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function q(t,e){try{let n=await U(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await x(t.appConfig,i),n}catch(n){if(y(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await L(t.appConfig);else{let n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await x(t.appConfig,n)}throw n}}function K(t){return void 0!==t&&2===t.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t){let{installationEntry:e,registrationPromise:n}=await N(t);return n?n.catch(console.error):X(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t,e=!1){await G(t);let n=await X(t,e);return n.token}async function G(t){let{registrationPromise:e}=await N(t);e&&await e}function Y(t){return m.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z="installations",Q=t=>{let e=t.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(!t||!t.options)throw Y("App Configuration");if(!t.name)throw Y("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw Y(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),i=(0,o.qX)(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},tt=t=>{let e=t.getProvider("app").getImmediate(),n=(0,o.qX)(e,Z).getImmediate();return{getId:()=>W(n),getToken:t=>J(n,t)}};(0,o.Xd)(new c.wA(Z,Q,"PUBLIC")),(0,o.Xd)(new c.wA("installations-internal",tt,"PRIVATE")),(0,o.KN)(f,p),(0,o.KN)(f,p,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te="analytics",tn="https://www.googletagmanager.com/gtag/js",ti=new h.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){return Promise.all(t.map(t=>t.catch(t=>t)))}async function ts(t,e,n,i,r,s){let a=i[r];try{if(a)await e[a];else{let t=await tr(n),i=t.find(t=>t.measurementId===r);i&&await e[i.appId]}}catch(t){ti.error(t)}t("config",r,s)}async function ta(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);let i=await tr(n);for(let n of t){let t=i.find(t=>t.measurementId===n),r=t&&e[t.appId];if(r)s.push(r);else{s=[];break}}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(t){ti.error(t)}}let to=new l.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),th=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};async function tl(t){var e;let{appId:n,apiKey:i}=t,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":i})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,r);if(200!==a.status&&304!==a.status){let t="";try{let n=await a.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw to.create("config-fetch-failed",{httpStatus:a.status,responseMessage:t})}return a.json()}async function tc(t,e=th,n){let{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw to.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw to.create("no-api-key")}let a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new tf;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),tu({appId:i,apiKey:r,measurementId:s},a,o,e)}async function tu(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=th){var s;let{appId:a,measurementId:o}=t;try{await new Promise((t,n)=>{let r=Math.max(e-Date.now(),0),s=setTimeout(t,r);i.addEventListener(()=>{clearTimeout(s),n(to.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}catch(t){if(o)return ti.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:a,measurementId:o};throw t}try{let e=await tl(t);return r.deleteThrottleMetadata(a),e}catch(c){if(!function(t){if(!(t instanceof l.ZR)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(c)){if(r.deleteThrottleMetadata(a),o)return ti.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:a,measurementId:o};throw c}let e=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?(0,l.$s)(n,r.intervalMillis,30):(0,l.$s)(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+e,backoffCount:n+1};return r.setThrottleMetadata(a,h),ti.debug(`Calling attemptFetch again in ${e} millis`),tu(t,h,i,r)}}class tf{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function tp(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}{let r=await e,s=Object.assign(Object.assign({},i),{send_to:r});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(){if(!(0,l.hl)())return ti.warn(to.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,l.eu)()}catch(t){return ti.warn(to.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}async function tg(t,e,n,s,a,o,h){var l;let c=tc(t);c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&ti.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>ti.error(t)),e.push(c);let u=td().then(t=>t?s.getId():void 0),[f,p]=await Promise.all([c,u]);!function(t){let e=window.document.getElementsByTagName("script");for(let n of Object.values(e))if(n.src&&n.src.includes(tn)&&n.src.includes(t))return n;return null}(o)&&function(t,e){let n=document.createElement("script");n.src=`${tn}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(o,f.measurementId),r&&(a("consent","default",r),r=void 0),a("js",new Date);let d=null!==(l=null==h?void 0:h.config)&&void 0!==l?l:{};return d.origin="firebase",d.update=!0,null!=p&&(d.firebase_id=p),a("config",f.measurementId,d),i&&(a("set",i),i=void 0),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t){this.app=t}_delete(){return delete ty[this.app.options.appId],Promise.resolve()}}let ty={},tv=[],tb={},tw="dataLayer",tI=!1,tE="@firebase/analytics",tS="0.9.3";(0,o.Xd)(new c.wA(te,(t,{options:e})=>{let n=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return function(t,e,n){!function(){let t=[];if((0,l.ru)()&&t.push("This is a browser extension environment."),(0,l.zI)()||t.push("Cookies are not available."),t.length>0){let e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=to.create("invalid-analytics-context",{errorInfo:e});ti.warn(n.message)}}();let i=t.options.appId;if(!i)throw to.create("no-app-id");if(!t.options.apiKey){if(t.options.measurementId)ti.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw to.create("no-api-key")}if(null!=ty[i])throw to.create("already-exists",{id:i});if(!tI){var r,o;let t,e;t=[],Array.isArray(window[tw])?t=window[tw]:window[tw]=t;let{wrappedGtag:n,gtagCore:i}=(r="gtag",e=function(...t){window[tw].push(arguments)},window[r]&&"function"==typeof window[r]&&(e=window[r]),window[r]=(o=e,async function(t,e,n){try{"event"===t?await ta(o,ty,tv,e,n):"config"===t?await ts(o,ty,tv,tb,e,n):"consent"===t?o("consent","update",n):o("set",e)}catch(t){ti.error(t)}}),{gtagCore:e,wrappedGtag:window[r]});a=n,s=i,tI=!0}ty[i]=tg(t,tv,tb,e,s,tw,n);let h=new tm(t);return h}(n,i,e)},"PUBLIC")),(0,o.Xd)(new c.wA("analytics-internal",function(t){try{let e=t.getProvider(te).getImmediate();return{logEvent:(t,n,i)=>(function(t,e,n,i){tp(a,ty[(t=(0,l.m9)(t)).app.options.appId],e,n,i).catch(t=>ti.error(t))})(e,t,n,i)}}catch(t){throw to.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),(0,o.KN)(tE,tS),(0,o.KN)(tE,tS,"esm2017")},3977:function(t,e,n){n.d(e,{ZF:function(){return i.ZF}});var i=n(2238);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i.KN)("firebase","9.17.1","app")},1259:function(t,e,n){n.d(e,{Xb:function(){return i.a5},v0:function(){return i.n},LS:function(){return i.a0},w7:function(){return i.y},ck:function(){return i.af}});var i=n(3105);n(4444),n(2238),n(3333),n(8463)},9828:function(t,e,n){n.d(e,{JU:function(){return i.JU},ad:function(){return i.ad},oe:function(){return i.oe}});var i=n(19)},7004:function(t,e,n){n.d(e,{$C:function(){return f}});var i=n(2238),r=n(4444),s=n(8463);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then(t=>this.auth=t,()=>{}),this.messaging||e.get().then(t=>this.messaging=t,()=>{}),this.appCheck||n.get().then(t=>this.appCheck=t,()=>{})}async getAuthToken(){if(this.auth)try{let t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(){if(this.appCheck){let t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){let t=await this.getAuthToken(),e=await this.getMessagingToken(),n=await this.getAppCheckToken();return{authToken:t,messagingToken:e,appCheckToken:n}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="us-central1";class l{constructor(t,e,n,i,r=h,s){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new o(e,n,i),this.cancelAllRequests=new Promise(t=>{this.deleteService=()=>Promise.resolve(t())});try{let t=new URL(r);this.customDomain=t.origin,this.region=h}catch(t){this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(t){let e=this.app.options.projectId;if(null!==this.emulatorOrigin){let n=this.emulatorOrigin;return`${n}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}let c="@firebase/functions",u="0.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t=(0,i.Mq)(),e=h){let n=(0,i.qX)((0,r.m9)(t),a),s=n.getImmediate({identifier:e}),o=(0,r.P0)("functions");return o&&function(t,e,n){(0,r.m9)(t).emulatorOrigin=`http://${e}:${n}`}(s,...o),s}!function(t,e){let n=(e,{instanceIdentifier:n})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("messaging-internal"),a=e.getProvider("app-check-internal");return new l(i,r,s,a,n,t)};(0,i.Xd)(new s.wA(a,n,"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(c,u,void 0),(0,i.KN)(c,u,"esm2017")}(fetch.bind(self))},6531:function(t,e,n){var i;let r,s;n.d(e,{X3:function(){return g}});let a=(t,e)=>e.some(e=>t instanceof e),o=new WeakMap,h=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,f={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return h.get(t);if("objectStoreNames"===e)return t.objectStoreNames||l.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){var e;if(t instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(p(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&o.set(e,t)}).catch(()=>{}),u.set(e,t),e}(t);if(c.has(t))return c.get(t);let n="function"==typeof(e=t)?e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(d(this),t),p(o.get(this))}:function(...t){return p(e.apply(d(this),t))}:function(t,...n){let i=e.call(d(this),t,...n);return l.set(i,t.sort?t.sort():[t]),p(i)}:(e instanceof IDBTransaction&&function(t){if(h.has(t))return;let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});h.set(t,e)}(e),a(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,f):e;return n!==t&&(c.set(t,n),u.set(n,t)),n}let d=t=>u.get(t);function g(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let a=indexedDB.open(t,e),o=p(a);return i&&a.addEventListener("upgradeneeded",t=>{i(p(a.result),t.oldVersion,t.newVersion,p(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}let m=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map;function b(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(v.get(e))return v.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,r=y.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||m.includes(n)))return;let s=async function(t,...e){let s=this.transaction(t,r?"readwrite":"readonly"),a=s.store;return i&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),r&&s.done]))[0]};return v.set(e,s),s}f={...i=f,get:(t,e,n)=>b(t,e)||i.get(t,e,n),has:(t,e)=>!!b(t,e)||i.has(t,e)}}}]);