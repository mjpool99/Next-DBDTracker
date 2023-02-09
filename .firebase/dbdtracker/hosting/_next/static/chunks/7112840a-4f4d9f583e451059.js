"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{JU:function(){return nQ},ad:function(){return nY},oe:function(){return nZ}});var s,i,r=n(2238),a=n(8463),o=n(3333),l=n(4444),u=n(3510);n(3454);let h="@firebase/firestore";/**
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
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
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
 */let d="9.17.1",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function p(e,...t){if(f.logLevel<=o.in.DEBUG){let n=t.map(v);f.debug(`Firestore (${d}): ${e}`,...n)}}function g(e,...t){if(f.logLevel<=o.in.ERROR){let n=t.map(v);f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let n=t.map(v);f.warn(`Firestore (${d}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
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
 */function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw g(t),Error(t)}/**
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
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class C{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,e.enqueueRetryable(()=>s(this.currentUser))};let r=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await s(this.currentUser)})},a=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),r()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new C(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class k{constructor(e,t,n,s){this.h=e,this.l=t,this.m=n,this.g=s,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||w(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class D{constructor(e,t,n,s){this.h=e,this.l=t,this.m=n,this.g=s}getToken(){return Promise.resolve(new k(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let s=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>s(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?s(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||w(),this.A=e.token,new b(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class L{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let s=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function x(e,t,n){return e.length===t.length&&e.every((e,s)=>n(e,t[s]))}/**
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
 */class O{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return O.fromMillis(Date.now())}static fromDate(e){return O.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new O(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new O(0,0))}static max(){return new V(new O(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class F{constructor(e,t,n){void 0===t?t=0:t>e.length&&w(),void 0===n?n=e.length-t:n>e.length-t&&w(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let s=0;s<n;s++){let n=e.get(s),i=t.get(s);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends F{construct(e,t,n){return new M(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new M(t)}static emptyPath(){return new M([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends F{construct(e,t,n){return new P(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(e){let t=[],n="",s=0,i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},r=!1;for(;s<e.length;){let t=e[s];if("\\"===t){if(s+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(r=!r,s++):"."!==t||r?(n+=t,s++):(i(),s++)}if(i(),r)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new P(t)}static emptyPath(){return new P([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(M.fromString(e))}static fromName(e){return new B(M.fromString(e).popFirst(5))}static empty(){return new B(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===M.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new M(e.slice()))}}class q{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new q(V.min(),B.empty(),-1)}static max(){return new q(V.max(),B.empty(),-1)}}class K{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Q(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof G?t:G.resolve(t)}catch(e){return G.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,n)=>{t(e)})}static reject(e){return new G((t,n)=>{n(e)})}static waitFor(e){return new G((t,n)=>{let s=0,i=0,r=!1;e.forEach(e=>{++s,e.next(()=>{++i,r&&i===s&&t()},e=>n(e))}),r=!0,i===s&&t()})}static or(e){let t=G.resolve(!1);for(let n of e)t=t.next(e=>e?G.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,s)=>{n.push(t.call(this,e,s))}),this.waitFor(n)}static mapArray(e,t){return new G((n,s)=>{let i=e.length,r=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{r[l]=e,++a===i&&n(r)},e=>s(e))}})}static doWhile(e,t){return new G((n,s)=>{let i=()=>{!0===e()?t().next(()=>{i()},s):n()};i()})}}function $(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class j{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}j.at=-1;/**
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
 */class z{constructor(e,t,n,s,i,r,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class H{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new H("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof H&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function W(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function X(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Y(e){return 0===e&&1/e==-1/0}/**
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
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new J(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new J(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");let Z=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(e){if(e||w(),"string"==typeof e){let t=0,n=Z.exec(e);if(n||w(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:et(e.seconds),nanos:et(e.nanos)}}function et(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function en(e){return"string"==typeof e?J.fromBase64String(e):J.fromUint8Array(e)}function es(e){let t=ee(e.mapValue.fields.__local_write_time__.timestampValue);return new O(t.seconds,t.nanos)}/**
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
 */let ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function er(e){var t,n;return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)?4:ep(e)?9007199254740991:10:w()}function ea(e,t){if(e===t)return!0;let n=er(e);if(n!==er(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return es(e).isEqual(es(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ee(e.timestampValue),s=ee(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return en(e.bytesValue).isEqual(en(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return et(e.geoPointValue.latitude)===et(t.geoPointValue.latitude)&&et(e.geoPointValue.longitude)===et(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return et(e.integerValue)===et(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=et(e.doubleValue),s=et(t.doubleValue);return n===s?Y(n)===Y(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return x(e.arrayValue.values||[],t.arrayValue.values||[],ea);case 10:return function(e,t){let n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(W(n)!==W(s))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!ea(n[e],s[e])))return!1;return!0}(e,t);default:return w()}}function eo(e,t){return void 0!==(e.values||[]).find(e=>ea(e,t))}function el(e,t){if(e===t)return 0;let n=er(e),s=er(t);if(n!==s)return R(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=et(e.integerValue||e.doubleValue),s=et(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return eu(e.timestampValue,t.timestampValue);case 4:return eu(es(e),es(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){let n=en(e),s=en(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){let t=R(n[e],s[e]);if(0!==t)return t}return R(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=R(et(e.latitude),et(t.latitude));return 0!==n?n:R(et(e.longitude),et(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){let t=el(n[e],s[e]);if(t)return t}return R(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ei.mapValue&&t===ei.mapValue)return 0;if(e===ei.mapValue)return 1;if(t===ei.mapValue)return -1;let n=e.fields||{},s=Object.keys(n),i=t.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let e=0;e<s.length&&e<r.length;++e){let t=R(s[e],r[e]);if(0!==t)return t;let a=el(n[s[e]],i[r[e]]);if(0!==a)return a}return R(s.length,r.length)}(e.mapValue,t.mapValue);default:throw w()}}function eu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);let n=ee(e),s=ee(t),i=R(n.seconds,s.seconds);return 0!==i?i:R(n.nanos,s.nanos)}function eh(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ee(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?en(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,B.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let s of e.values||[])n?n=!1:t+=",",t+=eh(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",s=!0;for(let i of t)s?s=!1:n+=",",n+=`${i}:${eh(e.fields[i])}`;return n+"}"}(e.mapValue):w()}function ec(e){return!!e&&"integerValue"in e}function ed(e){return!!e&&"arrayValue"in e}function ef(e){return!!e&&"mapValue"in e}function em(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return X(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=em(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=em(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ep(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class eg{constructor(e,t){this.position=e,this.inclusive=t}}function ey(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){let r=t[i],a=e.position[i];if(s=r.field.isKeyField()?B.comparator(B.fromName(a.referenceValue),n.key):el(a,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function ev(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ea(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ew{}class eE extends ew{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eA(e,t,n):"array-contains"===t?new eD(e,n):"in"===t?new eb(e,n):"not-in"===t?new e_(e,n):"array-contains-any"===t?new eL(e,n):new eE(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new eS(e,n):new eN(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(el(t,this.value)):null!==t&&er(this.value)===er(t)&&this.matchesComparison(el(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eT extends ew{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new eT(e,t)}matches(e){return eI(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eI(e){return"and"===e.op}function eC(e){for(let t of e.filters)if(t instanceof eT)return!1;return!0}class eA extends eE{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){let t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class eS extends eE{constructor(e,t){super(e,"in",t),this.keys=ek("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eN extends eE{constructor(e,t){super(e,"not-in",t),this.keys=ek("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ek(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>B.fromName(e.referenceValue))}class eD extends eE{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ed(t)&&eo(t.arrayValue,this.value)}}class eb extends eE{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eo(this.value.arrayValue,t)}}class e_ extends eE{constructor(e,t){super(e,"not-in",t)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eo(this.value.arrayValue,t)}}class eL extends eE{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ed(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eo(this.value.arrayValue,e))}}/**
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
 */class eR{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class ex{constructor(e,t){this.comparator=e,this.root=t||eV.EMPTY}insert(e,t){return new ex(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eV.BLACK,null,null))}remove(e){return new ex(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eV.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eO(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eO(this.root,e,this.comparator,!1)}getReverseIterator(){return new eO(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eO(this.root,e,this.comparator,!0)}}class eO{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eV{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=null!=n?n:eV.RED,this.left=null!=s?s:eV.EMPTY,this.right=null!=i?i:eV.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new eV(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this,i=n(e,s.key);return(s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===i?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eV.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,s=this;if(0>t(e,s.key))s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return eV.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eV.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eV.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}eV.EMPTY=null,eV.RED=!0,eV.BLACK=!1,eV.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,s,i){return this}insert(e,t,n){return new eV(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class eF{constructor(e){this.comparator=e,this.data=new ex(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eM(this.data.getIterator())}getIteratorFrom(e){return new eM(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eF)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eF(this.comparator);return t.data=e,t}}class eM{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class eU{constructor(e){this.fields=e,e.sort(P.comparator)}static empty(){return new eU([])}unionWith(e){let t=new eF(P.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new eU(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return x(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class eP{constructor(e){this.value=e}static empty(){return new eP({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ef(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=em(t)}setAll(e){let t=P.emptyPath(),n={},s=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=i.popLast()}e?n[i.lastSegment()]=em(e):s.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){let t=this.field(e.popLast());ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ea(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];ef(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){for(let s of(X(t,(t,n)=>e[t]=n),n))delete e[s]}clone(){return new eP(em(this.value))}}/**
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
 */class eB{constructor(e,t,n,s,i,r,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=a}static newInvalidDocument(e){return new eB(e,0,V.min(),V.min(),V.min(),eP.empty(),0)}static newFoundDocument(e,t,n,s){return new eB(e,1,t,V.min(),n,s,0)}static newNoDocument(e,t){return new eB(e,2,t,V.min(),V.min(),eP.empty(),0)}static newUnknownDocument(e,t){return new eB(e,3,t,V.min(),V.min(),eP.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(V.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eP.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eP.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eB&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eB(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eq{constructor(e,t=null,n=[],s=[],i=null,r=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=a,this.ft=null}}function eK(e,t=null,n=[],s=[],i=null,r=null,a=null){return new eq(e,t,n,s,i,r,a)}function eQ(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eE)return t.field.canonicalString()+t.op.toString()+eh(t.value);if(eC(t)&&eI(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eh(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eh(e)).join(",")),t.ft=e}return t.ft}function eG(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,s;if(n=e.orderBy[i],s=t.orderBy[i],!(n.dir===s.dir&&n.field.isEqual(s.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eE?n instanceof eE&&t.op===n.op&&t.field.isEqual(n.field)&&ea(t.value,n.value):t instanceof eT?n instanceof eT&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,s,i)=>t&&e(s,n.filters[i]),!0):void w()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ev(e.startAt,t.startAt)&&ev(e.endAt,t.endAt)}/**
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
 */class e${constructor(e,t=null,n=[],s=[],i=null,r="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=a,this.endAt=o,this.dt=null,this._t=null,this.startAt,this.endAt}}function ej(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ez(e){let t=e;if(null===t.dt){t.dt=[];let e=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)e.isKeyField()||t.dt.push(new eR(e)),t.dt.push(new eR(P.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new eR(P.keyField(),e))}}}return t.dt}function eH(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=eK(t.path,t.collectionGroup,ez(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of ez(t)){let t="desc"===n.dir?"asc":"desc";e.push(new eR(n.field,t))}let n=t.endAt?new eg(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new eg(t.startAt.position,t.startAt.inclusive):null;t._t=eK(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}return t._t}function eW(e,t,n){return new e$(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function eX(e,t){return eG(eH(e),eH(t))&&e.limitType===t.limitType}function eY(e){return`${eQ(eH(e))}|lt:${e.limitType}`}function eJ(e){var t;let n;return`Query(target=${n=(t=eH(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eE?`${t.field.canonicalString()} ${t.op} ${eh(t.value)}`:t instanceof eT?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eh(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eh(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function eZ(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):B.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of ez(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let s=ey(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,ez(e),t))&&(!e.endAt||!!function(e,t,n){let s=ey(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,ez(e),t))}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class e0{constructor(){this._=void 0}}function e1(e,t){return e instanceof e6?ec(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class e2 extends e0{}class e4 extends e0{constructor(e){super(),this.elements=e}}function e3(e,t){let n=e7(t);for(let t of e.elements)n.some(e=>ea(e,t))||n.push(t);return{arrayValue:{values:n}}}class e9 extends e0{constructor(e){super(),this.elements=e}}function e5(e,t){let n=e7(t);for(let t of e.elements)n=n.filter(e=>!ea(e,t));return{arrayValue:{values:n}}}class e6 extends e0{constructor(e,t){super(),this.yt=e,this.gt=t}}function e8(e){return et(e.integerValue||e.doubleValue)}function e7(e){return ed(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class te{constructor(e,t){this.version=e,this.transformResults=t}}class tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ts{}function ti(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new td(e.key,tt.none()):new to(e.key,e.data,tt.none());{let n=e.data,s=eP.empty(),i=new eF(P.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),i=i.add(e)}return new tl(e.key,s,new eU(i.toArray()),tt.none())}}function tr(e,t,n,s){return e instanceof to?function(e,t,n,s){if(!tn(e.precondition,t))return n;let i=e.value.clone(),r=tc(e.fieldTransforms,s,t);return i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,s):e instanceof tl?function(e,t,n,s){if(!tn(e.precondition,t))return n;let i=tc(e.fieldTransforms,s,t),r=t.data;return(r.setAll(tu(e)),r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,s):tn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function ta(e,t){var n,s;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,s=t.fieldTransforms,!!(void 0===n&&void 0===s||!(!n||!s)&&x(n,s,(e,t)=>{var n,s;return e.field.isEqual(t.field)&&(n=e.transform,s=t.transform,n instanceof e4&&s instanceof e4||n instanceof e9&&s instanceof e9?x(n.elements,s.elements,ea):n instanceof e6&&s instanceof e6?ea(n.gt,s.gt):n instanceof e2&&s instanceof e2)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class to extends ts{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tl extends ts{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tu(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let s=e.data.field(n);t.set(n,s)}}),t}function th(e,t,n){var s;let i=new Map;e.length===n.length||w();for(let r=0;r<n.length;r++){let a=e[r],o=a.transform,l=t.data.field(a.field);i.set(a.field,(s=n[r],o instanceof e4?e3(o,l):o instanceof e9?e5(o,l):s))}return i}function tc(e,t,n){let s=new Map;for(let i of e){let e=i.transform,r=n.data.field(i.field);s.set(i.field,e instanceof e2?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,r):e instanceof e4?e3(e,r):e instanceof e9?e5(e,r):function(e,t){let n=e1(e,t),s=e8(n)+e8(e.gt);return ec(n)&&ec(e.gt)?{integerValue:""+s}:/**
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
 */function(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Y(t)?"-0":t}}(e.yt,s)}(e,r))}return s}class td extends ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tf extends ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}(i=s||(s={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class tm{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,s]of n)if(this.equalsFn(t,e))return s}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){X(this.inner,(t,n)=>{for(let[t,s]of n)e(t,s)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
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
 */let tp=new ex(B.comparator),tg=new ex(B.comparator);function ty(...e){let t=tg;for(let n of e)t=t.insert(n.key,n);return t}function tv(e){let t=tg;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tw(){return new tm(e=>e.toString(),(e,t)=>e.isEqual(t))}let tE=new ex(B.comparator),tT=new eF(B.comparator);function tI(...e){let t=tT;for(let n of e)t=t.add(n);return t}let tC=new eF(R);class tA{constructor(e,t){this.databaseId=e,this.wt=t}}function tS(e){return e||w(),V.fromTimestamp(function(e){let t=ee(e);return new O(t.seconds,t.nanos)}(e))}function tN(e,t){var n,s;return n=e.databaseId,s=t.path,new M(["projects",n.projectId,"databases",n.database]).child("documents").child(s).canonicalString()}function tk(e,t,n){return{name:tN(e,t),fields:n.value.mapValue.fields}}function tD(e){return P.fromServerFormat(e.fieldPath)}/**
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
 */class tb{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var s;s=n[t],i instanceof to?function(e,t,n){let s=e.value.clone(),i=th(e.fieldTransforms,t,n.transformResults);s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(i,e,s):i instanceof tl?function(e,t,n){if(!tn(e.precondition,t))return void t.convertToUnknownDocument(n.version);let s=th(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tu(e)),i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,s):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,s)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tr(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tw();return this.mutations.forEach(s=>{let i=e.get(s.key),r=i.overlayedDocument,a=this.applyToLocalView(r,i.mutatedFields);a=t.has(s.key)?null:a;let o=ti(r,a);null!==o&&n.set(s.key,o),r.isValidDocument()||r.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tI())}isEqual(e){return this.batchId===e.batchId&&x(this.mutations,e.mutations,(e,t)=>ta(e,t))&&x(this.baseMutations,e.baseMutations,(e,t)=>ta(e,t))}}class t_{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){e.mutations.length===n.length||w();let s=tE,i=e.mutations;for(let e=0;e<i.length;e++)s=s.insert(i[e].key,n[e].version);return new t_(e,t,n,s)}}/**
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
 */class tL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class tR{constructor(e){this.ie=e}}/**
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
 */class tx{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(et(e.integerValue));else if("doubleValue"in e){let n=et(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Y(n)?t.le(0):t.le(n))}else if("timestampValue"in e){let n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(en(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?ep(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):w()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let n=e.fields||{};for(let e of(this.he(t,55),Object.keys(n)))this.de(e,t),this.ce(n[e],t)}ye(e,t){let n=e.values||[];for(let e of(this.he(t,50),n))this.ce(e,t)}me(e,t){this.he(t,37),B.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}tx.Ie=new tx;/**
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
 */class tO{constructor(){this.Je=new tV}addToCollectionParentIndex(e,t){return this.Je.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(q.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(q.min())}updateCollectionGroup(e,t,n){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class tV{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new eF(M.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new eF(M.comparator)).toArray()}}new Uint8Array(0);class tF{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new tF(e,tF.DEFAULT_COLLECTION_PERCENTILE,tF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */tF.DEFAULT_COLLECTION_PERCENTILE=10,tF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tF.DEFAULT=new tF(41943040,tF.DEFAULT_COLLECTION_PERCENTILE,tF.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tF.DISABLED=new tF(-1,0,0);/**
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
 */class tM{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new tM(0)}static vn(){return new tM(-1)}}/**
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
 */class tU{constructor(){this.changes=new tm(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eB.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?G.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class tP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class tB{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tr(n.mutation,e,eU.empty(),O.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tI()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tI()){let s=tw();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(e=>{let t=ty();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tw();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tI()))}populateOverlays(e,t,n){let s=[];return n.forEach(e=>{t.has(e)||s.push(e)}),this.documentOverlayCache.getOverlays(e,s).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,s){let i=tp,r=tw(),a=tw();return t.forEach((e,t)=>{let a=n.get(t.key);s.has(t.key)&&(void 0===a||a.mutation instanceof tl)?i=i.insert(t.key,t):void 0!==a?(r.set(t.key,a.mutation.getFieldMask()),tr(a.mutation,t,a.mutation.getFieldMask(),O.now())):r.set(t.key,eU.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>r.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new tP(t,null!==(n=r.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tw(),s=new ex((e,t)=>e-t),i=tI();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let r=t.get(e);if(null===r)return;let a=n.get(e)||eU.empty();a=i.applyToLocalView(r,a),n.set(e,a);let o=(s.get(i.batchId)||tI()).add(e);s=s.insert(i.batchId,o)})}).next(()=>{let r=[],a=s.getReverseIterator();for(;a.hasNext();){let s=a.getNext(),o=s.key,l=s.value,u=tw();l.forEach(e=>{if(!i.has(e)){let s=ti(t.get(e),n.get(e));null!==s&&u.set(e,s),i=i.add(e)}}),r.push(this.documentOverlayCache.saveOverlays(e,o,u))}return G.waitFor(r)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{let r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):G.resolve(tw()),a=-1,o=i;return r.next(t=>G.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?G.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tI())).next(e=>({batchId:a,changes:tv(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(e=>{let t=ty();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let s=t.collectionGroup,i=ty();return this.indexManager.getCollectionParents(e,s).next(r=>G.forEach(r,r=>{var a;let o=(a=r.child(s),new e$(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s))).next(e=>{s.forEach((t,n)=>{let s=n.getKey();null===e.get(s)&&(e=e.insert(s,eB.newInvalidDocument(s)))});let n=ty();return e.forEach((e,i)=>{let r=s.get(e);void 0!==r&&tr(r.mutation,i,eU.empty(),O.now()),eZ(t,i)&&(n=n.insert(e,i))}),n})}}/**
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
 */class tq{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return G.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:tS(t.createTime)}),G.resolve()}getNamedQuery(e,t){return G.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,s,i,r,a,o,l;let u,h=function(e){let t=function(e){let t=M.fromString(e);return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)||w(),t}(e);return 4===t.length?M.emptyPath():(t.length>4&&"documents"===t.get(4)||w(),t.popFirst(5))}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||w();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tD(e.unaryFilter.field);return eE.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=tD(e.unaryFilter.field);return eE.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=tD(e.unaryFilter.field);return eE.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=tD(e.unaryFilter.field);return eE.create(i,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t):void 0!==t.fieldFilter?eE.create(tD(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eT.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(t.compositeFilter.op)):w()}(e);return n instanceof eT&&eC(t=n)&&eI(t)?n.getFilters():[n]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>new eR(tD(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;c.limit&&(g=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new eg(n,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new eg(n,t)}(c.endAt)),n=h,s=f,i=p,r=m,a=g,o=y,l=v,new e$(n,s,i,r,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?eW(t,t.limit,"L"):t}(t.bundledQuery),readTime:tS(t.readTime)}),G.resolve()}}/**
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
 */class tK{constructor(){this.overlays=new ex(B.comparator),this.es=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tw();return G.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,s)=>{this.oe(e,t,s)}),G.resolve()}removeOverlaysForBatchId(e,t,n){let s=this.es.get(n);return void 0!==s&&(s.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),G.resolve()}getOverlaysForCollection(e,t,n){let s=tw(),i=t.length+1,r=new B(t.child("")),a=this.overlays.getIteratorFrom(r);for(;a.hasNext();){let e=a.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===i&&e.largestBatchId>n&&s.set(e.getKey(),e)}return G.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ex((e,t)=>e-t),r=this.overlays.getIterator();for(;r.hasNext();){let e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tw(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tw(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=s)););return G.resolve(a)}oe(e,t,n){let s=this.overlays.get(n.key);if(null!==s){let e=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tL(t,n));let i=this.es.get(t);void 0===i&&(i=tI(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}/**
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
 */class tQ{constructor(){this.ns=new eF(tG.ss),this.rs=new eF(tG.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new tG(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new tG(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new B(new M([])),n=new tG(t,e),s=new tG(t,e+1),i=[];return this.rs.forEachInRange([n,s],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new B(new M([])),n=new tG(t,e),s=new tG(t,e+1),i=tI();return this.rs.forEachInRange([n,s],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new tG(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class tG{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return B.comparator(e.key,t.key)||R(e._s,t._s)}static os(e,t){return R(e._s,t._s)||B.comparator(e.key,t.key)}}/**
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
 */class t${constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new eF(tG.ss)}checkEmpty(e){return G.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let r=new tb(i,t,n,s);for(let t of(this.mutationQueue.push(r),s))this.gs=this.gs.add(new tG(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return G.resolve(r)}lookupMutationBatch(e,t){return G.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),s=n<0?0:n;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new tG(t,0),s=new tG(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],e=>{let t=this.ys(e._s);i.push(t)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eF(R);return t.forEach(e=>{let t=new tG(e,0),s=new tG(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,s],e=>{n=n.add(e._s)})}),G.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,s=n.length+1,i=n;B.isDocumentKey(i)||(i=i.child(""));let r=new tG(new B(i),0),a=new eF(R);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(a=a.add(e._s)),!0)},r),G.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ts(t.batchId,"removed")||w(),this.mutationQueue.shift();let n=this.gs;return G.forEach(t.mutations,s=>{let i=new tG(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let n=new tG(t,0),s=this.gs.firstAfterOrEqual(n);return G.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tj{constructor(e){this.Es=e,this.docs=new ex(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return G.resolve(n?n.document.mutableCopy():eB.newInvalidDocument(t))}getEntries(e,t){let n=tp;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eB.newInvalidDocument(e))}),G.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=tp,r=t.path,a=new B(r.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=B.comparator(e.documentKey,t.documentKey))?n:R(e.largestBatchId,t.largestBatchId)}(new q(a.readTime,a.key,-1),n)||(s.has(a.key)||eZ(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,t,n,s){w()}As(e,t){return G.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new tz(this)}getSize(e){return G.resolve(this.size)}}class tz extends tU{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(n)}),G.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */class tH{constructor(e){this.persistence=e,this.Rs=new tm(e=>eQ(e),eG),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tQ,this.targetCount=0,this.vs=tM.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),G.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new tM(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Dn(t),G.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,n){let s=0,i=[];return this.Rs.forEach((r,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),G.waitFor(i).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return G.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),G.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(t=>{i.push(s.markPotentiallyOrphaned(e,t))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),G.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return G.resolve(n)}containsKey(e,t){return G.resolve(this.Ps.containsKey(t))}}/**
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
 */class tW{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new j(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new tH(this),this.indexManager=new tO,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new tj(n)),this.yt=new tR(t),this.Ns=new tq(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tK,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new t$(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);let s=new tX(this.Ss.next());return this.referenceDelegate.ks(),n(s).next(e=>this.referenceDelegate.Os(s).next(()=>e)).toPromise().then(e=>(s.raiseOnCommittedEvent(),e))}Ms(e,t){return G.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class tX extends K{constructor(e){super(),this.currentSequenceNumber=e}}class tY{constructor(e){this.persistence=e,this.Fs=new tQ,this.$s=null}static Bs(e){return new tY(e)}get Ls(){if(this.$s)return this.$s;throw w()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),G.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),G.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Ls,n=>{let s=B.fromPath(n);return this.qs(e,s).next(e=>{e||t.removeEntry(s,V.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return G.or([()=>G.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */class tJ{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=s}static Ci(e,t){let n=tI(),s=tI();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new tJ(e,t.fromCache,n,s)}}/**
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
 */class tZ{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,s){return this.ki(e,t).next(i=>i||this.Oi(e,t,s,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(ej(t))return G.resolve(null);let n=eH(t);return this.indexManager.getIndexType(e,n).next(s=>0===s?null:(null!==t.limit&&1===s&&(n=eH(t=eW(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{let i=tI(...s);return this.Ni.getDocuments(e,i).next(s=>this.indexManager.getMinOffset(e,n).next(n=>{let r=this.Fi(t,s);return this.$i(t,r,i,n.readTime)?this.ki(e,eW(t,null,"F")):this.Bi(e,r,t,n)}))})))}Oi(e,t,n,s){return ej(t)||s.isEqual(V.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{let r=this.Fi(t,i);return this.$i(t,r,n,s)?this.Mi(e,t):(m()<=o.in.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),eJ(t)),this.Bi(e,r,t,function(e,t){let n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===s?new O(n+1,0):new O(n,s));return new q(i,B.empty(),-1)}(s,0)))})}Fi(e,t){let n=new eF((t,n)=>{let s=!1;for(let i of ez(e)){let e=function(e,t,n){let s=e.field.isKeyField()?B.comparator(t.key,n.key):function(e,t,n){let s=t.data.field(e),i=n.data.field(e);return null!==s&&null!==i?el(s,i):w()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return -1*s;default:return w()}}(i,t,n);if(0!==e)return e;s=s||i.field.isKeyField()}return 0});return t.forEach((t,s)=>{eZ(e,s)&&(n=n.add(s))}),n}$i(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,t){return m()<=o.in.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",eJ(t)),this.Ni.getDocumentsMatchingQuery(e,t,q.min())}Bi(e,t,n,s){return this.Ni.getDocumentsMatchingQuery(e,n,s).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class t0{constructor(e,t,n,s){this.persistence=e,this.Li=t,this.yt=s,this.qi=new ex(R),this.Ui=new tm(e=>eQ(e),eG),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tB(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}async function t1(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],r=[],a=tI();for(let e of s)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:r}))})})}class t2{constructor(){this.activeTargetIds=tC}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t4{constructor(){this.Lr=new t2,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new t2,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class t3{Ur(e){}shutdown(){}}/**
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
 */class t9{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let t5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class t6{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class t8 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,s,i){let r=this.ho(e,t);p("RestConnection","Sending: ",r,n);let a={};return this.lo(a,s,i),this.fo(e,r,a,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",r,"request:",n),t})}_o(e,t,n,s,i,r){return this.ao(e,t,n,s,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=t5[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,s){return new Promise((i,r)=>{let a=new u.JJ;a.setWithCredentials(!0),a.listenOnce(u.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let t=a.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case u.jK.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),r(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=a.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);r(new T(e,t.message))}else r(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else r(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{p("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(s);a.send(t,"POST",o,n,15)})}wo(e,t,n){let i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=(0,u.UE)(),a=(0,u.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.zI({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let l=i.join("");p("Connection","Creating WebChannel: "+l,o);let h=r.createWebChannel(l,o),c=!1,d=!1,f=new t6({Hr:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(c||(p("Connection","Opening WebChannel transport."),h.open(),c=!0),p("Connection","WebChannel sending:",e),h.send(e))},Jr:()=>h.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(h,u.ii.EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(h,u.ii.EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.io())}),m(h,u.ii.EventType.ERROR,e=>{d||(d=!0,y("Connection","WebChannel transport errored:",e),f.io(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(h,u.ii.EventType.MESSAGE,e=>{var t;if(!d){let n=e.data[0];n||w();let i=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);let e=i.status,t=function(e){let t=s[e];if(void 0!==t)return function(e){if(void 0===e)return g("GRPC error has no .code"),E.UNKNOWN;switch(e){case s.OK:return E.OK;case s.CANCELLED:return E.CANCELLED;case s.UNKNOWN:return E.UNKNOWN;case s.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case s.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case s.INTERNAL:return E.INTERNAL;case s.UNAVAILABLE:return E.UNAVAILABLE;case s.UNAUTHENTICATED:return E.UNAUTHENTICATED;case s.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case s.NOT_FOUND:return E.NOT_FOUND;case s.ALREADY_EXISTS:return E.ALREADY_EXISTS;case s.PERMISSION_DENIED:return E.PERMISSION_DENIED;case s.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case s.ABORTED:return E.ABORTED;case s.OUT_OF_RANGE:return E.OUT_OF_RANGE;case s.UNIMPLEMENTED:return E.UNIMPLEMENTED;case s.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(t)}(e),n=i.message;void 0===t&&(t=E.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.io(new T(t,n)),h.close()}else p("Connection","WebChannel received:",n),f.ro(n)}}),m(a,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?p("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function t7(){return"undefined"!=typeof document?document:null}class ne{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,t-n);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class nt{constructor(e,t,n,s,i,r,a,o){this.Hs=e,this.vo=n,this.Vo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ne(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nn extends nt{constructor(e,t,n,s,i,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,r),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||w(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let s=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||w(),t.map(e=>{let t;return(t=e.updateTime?tS(e.updateTime):tS(n)).isEqual(V.min())&&(t=tS(n)),new te(t,e.transformResults||[])})):[]),i=tS(e.commitTime);return this.listener.Zo(i,s)}return e.writeResults&&0!==e.writeResults.length&&w(),this.Jo=!0,this.listener.tu()}eu(){var e;let t={};t.database=(e=this.yt,new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()),this.Bo(t)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n,s;let i;if(t instanceof to)i={update:tk(e,t.key,t.value)};else if(t instanceof td)i={delete:tN(e,t.key)};else if(t instanceof tl)i={update:tk(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tf))return w();i={verify:tN(e,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof e2)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof e4)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof e9)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof e6)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw w()})(0,e))),t.precondition.isNone||(i.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:(s=n.updateTime.toTimestamp(),e.wt?`${new Date(1e3*s.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+s.nanoseconds).slice(-9)}Z`:{seconds:""+s.seconds,nanos:s.nanoseconds})}:void 0!==n.exists?{exists:n.exists}:w()),i})(this.yt,e))};this.Bo(t)}}/**
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
 */class ns extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=s,this.nu=!1}su(){if(this.nu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,t,n,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}_o(e,t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection._o(e,t,n,i,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class ni{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(g(t),this.ou=!1):p("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class nr{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{nl(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){e._u.add(4),await no(e),e.gu.set("Unknown"),e._u.delete(4),await na(e)}(this))})}),this.gu=new ni(n,s)}}async function na(e){if(nl(e))for(let t of e.wu)await t(!0)}async function no(e){for(let t of e.wu)await t(!1)}function nl(e){return 0===e._u.size}async function nu(e,t,n){if(!$(t))throw t;e._u.add(1),await no(e),e.gu.set("Offline"),n||(n=()=>{var t;return(t=e.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Cs.getLastRemoteSnapshotVersion(e))}),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await na(e)})}function nh(e,t){return t().catch(n=>nu(e,n,t))}async function nc(e){let t=nE(e),n=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;nl(e)&&e.fu.length<10;)try{let s=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===s){0===e.fu.length&&t.Fo();break}n=s.batchId,function(e,t){e.fu.push(t);let n=nE(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}(e,s)}catch(t){await nu(e,t)}nd(e)&&nf(e)}function nd(e){return nl(e)&&!nE(e).No()&&e.fu.length>0}function nf(e){nE(e).start()}async function nm(e){nE(e).eu()}async function np(e){let t=nE(e);for(let n of e.fu)t.Xo(n.mutations)}async function ng(e,t,n){let s=e.fu.shift(),i=t_.from(s,t,n);await nh(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await nc(e)}async function ny(e,t){t&&nE(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return w();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}(n=t.code)&&n!==E.ABORTED){let n=e.fu.shift();nE(e).Mo(),await nh(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await nc(e)}}(e,t),nd(e)&&nf(e)}async function nv(e,t){e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");let n=nl(e);e._u.add(3),await no(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await na(e)}async function nw(e,t){t?(e._u.delete(2),await na(e)):t||(e._u.add(2),await no(e),e.gu.set("Unknown"))}function nE(e){var t,n,s;return e.Iu||(e.Iu=(t=e.datastore,n=e.asyncQueue,s={Yr:nm.bind(null,e),Zr:ny.bind(null,e),tu:np.bind(null,e),Zo:ng.bind(null,e)},t.su(),new nn(n,t.connection,t.authCredentials,t.appCheckCredentials,t.yt,s)),e.wu.push(async t=>{t?(e.Iu.Mo(),await nc(e)):(await e.Iu.stop(),e.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class nT{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,s,i){let r=Date.now()+n,a=new nT(e,t,r,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nI(e,t){if(g("AsyncQueue",`${t}: ${e}`),$(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}class nC{constructor(){this.queries=new tm(e=>eY(e),eX),this.onlineState="Unknown",this.Ru=new Set}}class nA{constructor(e,t,n,s,i,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new tm(e=>eY(e),eX),this.rc=new Map,this.oc=new Set,this.uc=new ex(B.comparator),this.cc=new Map,this.ac=new tQ,this.hc={},this.lc=new Map,this.fc=tM.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function nS(e,t,n){let s=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=nk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nD.bind(null,t),t}(e);try{var i,r;let e;let a=await function(e,t){let n,s;let i=O.now(),r=t.reduce((e,t)=>e.add(t.key),tI());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tp,l=tI();return e.Gi.getEntries(a,r).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(s=>{n=s;let r=[];for(let e of t){let t=function(e,t){let n=null;for(let s of e.fieldTransforms){let e=t.data.field(s.field),i=e1(s.transform,e||null);null!=i&&(null===n&&(n=eP.empty()),n.set(s.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&r.push(new tl(e.key,t,function e(t){let n=[];return X(t.fields,(t,s)=>{let i=new P([t]);if(ef(s)){let t=e(s.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new eU(n)}(t.value.mapValue),tt.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,r,t)}).next(t=>{s=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:s.batchId,changes:tv(n)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(a.batchId),i=s,r=a.batchId,(e=i.hc[i.currentUser.toKey()])||(e=new ex(R)),e=e.insert(r,n),i.hc[i.currentUser.toKey()]=e,await nL(s,a.changes),await nc(s.remoteStore)}catch(t){let e=nI(t,"Failed to persist write");n.reject(e)}}function nN(e,t,n){let s=e;if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){let e=[];s.ic.forEach((n,s)=>{let i=s.view.bu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let n=e;n.onlineState=t;let s=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.bu(t)&&(s=!0)}),s&&function(e){e.Ru.forEach(e=>{e.next()})}(n)}(s.eventManager,t),e.length&&s.sc.Wo(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function nk(e,t){var n;let s=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let s=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,s){let i=n.batch,r=i.keys(),a=G.resolve();return r.forEach(e=>{a=a.next(()=>s.getEntry(t,e)).next(t=>{let r=n.docVersions.get(e);null!==r||w(),0>t.version.compareTo(r)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tI();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,s))});n_(e,s,null),nb(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await nL(e,i)}catch(e){await Q(e)}}async function nD(e,t,n){var s;try{let i=await (s=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return s.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||w(),n=t.keys(),s.mutationQueue.removeMutationBatch(e,t))).next(()=>s.mutationQueue.performConsistencyCheck(e)).next(()=>s.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>s.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>s.localDocuments.getDocuments(e,n))});n_(e,t,n),nb(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await nL(e,i)}catch(e){await Q(e)}}function nb(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function n_(e,t,n){let s=e,i=s.hc[s.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}async function nL(e,t,n){let s=[],i=[],r=[];e.ic.isEmpty()||(e.ic.forEach((a,o)=>{r.push(e._c(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);let e=tJ.Ci(o.targetId,t);i.push(e)}}))}),await Promise.all(r),e.sc.Wo(s),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>G.forEach(t,t=>G.forEach(t.Si,s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s)).next(()=>G.forEach(t.Di,s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))}catch(e){if(!$(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.qi.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.qi=n.qi.insert(t,i)}}}(e.localStore,i))}async function nR(e,t){let n=e;if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());let e=await t1(n.localStore,t);n.currentUser=t,n.lc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.lc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await nL(n,e.ji)}}class nx{constructor(){this.synchronizeTabs=!1}async initialize(e){var t;this.yt=(t=e.databaseInfo.databaseId,new tA(t,!0)),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,n,s,i;return t=this.persistence,n=new tZ,s=e.initialUser,i=this.yt,new t0(t,n,s,i)}yc(e){return new tW(tY.Bs,this.yt)}gc(e){return new t4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nO{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nN(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nR.bind(null,this.syncEngine),await nw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nC}createDatastore(e){var t,n,s,i;let r=(n=e.databaseInfo.databaseId,new tA(n,!0)),a=(t=e.databaseInfo,new t8(t));return s=e.authCredentials,i=e.appCheckCredentials,new ns(s,i,a,r)}createRemoteStore(e){var t,n,s,i,r;return t=this.localStore,n=this.datastore,s=e.asyncQueue,i=e=>nN(this.syncEngine,e,0),r=t9.C()?new t9:new t3,new nr(t,n,s,i,r)}createSyncEngine(e,t){return function(e,t,n,s,i,r,a){let o=new nA(e,t,n,s,i,r);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){p("RemoteStore","RemoteStore shutting down."),e._u.add(5),await no(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}function nV(e){if(!B.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function nF(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":w()}(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */let nM=new Map;class nU{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,s){if(!0===t&&!0===s)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class nP{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nU({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nU(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new A;switch(e.type){case"gapi":let t=e.client;return new D(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nM.get(e);t&&(p("ComponentProvider","Removing Datastore"),nM.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class nB{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nK(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nB(this.firestore,e,this._key)}}class nq{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nq(this.firestore,e,this._query)}}class nK extends nq{constructor(e,t,n){super(e,t,new e$(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new nB(this.firestore,null,new B(e))}withConverter(e){return new nK(this.firestore,e,this._path)}}function nQ(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=L.R()),/**
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
 */function(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}(0,"path",t),e instanceof nP){let s=M.fromString(t,...n);return nV(s),new nB(e,null,new B(s))}{if(!(e instanceof nB||e instanceof nK))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(M.fromString(t,...n));return nV(s),new nB(e.firestore,e instanceof nK?e.converter:null,new B(s))}}/**
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
 */class nG{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=c.UNAUTHENTICATED,this.clientId=L.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=nI(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function n$(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async e=>{s.isEqual(e)||(await t1(t.localStore,e),s=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nj(e,t){e.asyncQueue.verifyOperationInProgress();let n=await nz(e);p("FirestoreClient","Initializing OnlineComponentProvider");let s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(e=>nv(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>nv(t.remoteStore,n)),e.onlineComponents=t}async function nz(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await n$(e,new nx)),e.offlineComponents}async function nH(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await nj(e,new nO)),e.onlineComponents}class nW{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ne(this,"async_queue_retry"),this.Wc=()=>{let e=t7();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=t7();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=t7();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new I;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw g("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let s=nT.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(s),s}zc(){this.Kc&&w()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class nX extends nP{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new nW,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nJ(this),this._firestoreClient.terminate()}}function nY(e,t){let n="object"==typeof e?e:(0,r.Mq)(),s=(0,r.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!s._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,s={}){var i;let r=(e=nF(e,nP))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=c.MOCK_USER;else{t=(0,l.Sg)(s.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(r)}e._authCredentials=new S(new C(t,n))}}(s,...e)}return s}function nJ(e){var t,n,s,i;let r=e._freezeSettings(),a=(n=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new z(n,s,i,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams));e._firestoreClient=new nG(e._authCredentials,e._appCheckCredentials,e._queue,a)}function nZ(e){var t,n;return t=nF(e.firestore,nX),n=[new td(e._key,tt.none())],function(e,t){let n=new I;return e.asyncQueue.enqueueAndForget(async()=>nS(await nH(e).then(e=>e.syncEngine),t,n)),n.promise}((t._firestoreClient||nJ(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),n)}!function(e,t=!0){d=r.Jn,(0,r.Xd)(new a.wA("firestore",(e,{instanceIdentifier:n,options:s})=>{let i=e.getProvider("app").getImmediate(),r=new nX(new N(e.getProvider("auth-internal")),new _(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new H(e.options.projectId,t)}(i,n),i);return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(h,"3.8.3",void 0),(0,r.KN)(h,"3.8.3","esm2017")}()}}]);