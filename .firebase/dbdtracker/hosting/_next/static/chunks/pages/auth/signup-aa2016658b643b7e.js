(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{9943:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/signup",function(){return t(5172)}])},1824:function(e,r){"use strict";r.Z={src:"/_next/static/media/LogoBeta.a87dedff.svg",height:56,width:244}},2243:function(e,r,t){"use strict";t.d(r,{I8:function(){return d},db:function(){return i}});var n=t(3977);t(3059);var a=t(9828),s=t(7004),u=t(1259);let c=(0,n.ZF)({apiKey:"AIzaSyB-rwxK-0S-GG0bVLffPa01caPfRv6VQnk",authDomain:"dbdtracker.firebaseapp.com",projectId:"dbdtracker",storageBucket:"dbdtracker.appspot.com",messagingSenderId:"167066146805",appId:"1:167066146805:web:1dbc2d32e58165859bb2bc",measurementId:"G-TR7R7E24R8"}),i=(0,a.ad)(c),d=(0,u.v0)(c);(0,s.$C)(c),(0,u.w7)(d)},5923:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(5893),a=t(1824),s=t(5675),u=t.n(s);function c(e){let{children:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"dbd-login",children:[(0,n.jsx)(u(),{src:a.Z,alt:"Logo"}),r]})})}},5172:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(5893),a=t(5923),s=t(1259),u=t(2243),c=t(7294),i=t(1664),d=t.n(i);function l(){let[e,r]=(0,c.useState)(""),[t,i]=(0,c.useState)(!1),[l,o]=(0,c.useState)(!1),f=(0,c.useRef)(),p=(0,c.useRef)(),h=(0,c.useRef)(),b=(0,c.useRef)(),m=async e=>{if(e.preventDefault(),h.current.value!==b.current.value)return r("Passwords do not match.");try{r(""),i(!0);let e=await (0,s.Xb)(u.I8,p.current.value,h.current.value);(0,s.ck)(u.I8.currentUser,{displayName:f.current.value}),console.log(e),o("Account created!"),f.current.value="",p.current.value="",h.current.value="",b.current.value=""}catch(e){r("Account creation failed.")}i(!1)};return(0,n.jsx)(a.default,{children:(0,n.jsx)("div",{className:"dbd-login",children:(0,n.jsxs)("form",{className:"myCustomCard-login",onSubmit:m,children:[(0,n.jsx)("h1",{children:"Sign Up"}),(0,n.jsx)("br",{}),e&&(0,n.jsx)("span",{children:e}),l&&(0,n.jsx)("span",{children:l}),(0,n.jsx)("input",{type:"text",ref:f,placeholder:"Username",required:!0}),(0,n.jsx)("input",{type:"email",ref:p,placeholder:"Email",required:!0}),(0,n.jsx)("input",{type:"password",ref:h,placeholder:"Password",required:!0}),(0,n.jsx)("input",{type:"password",ref:b,placeholder:"Confirm Password",required:!0}),(0,n.jsx)("button",{disabled:t,type:"submit",children:"Sign Up"}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"subLink",children:(0,n.jsx)(d(),{href:"/auth/signin",children:"Back to Sign In"})})]})})})}}},function(e){e.O(0,[16,278,675,664,623,774,888,179],function(){return e(e.s=9943)}),_N_E=e.O()}]);