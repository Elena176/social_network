(this["webpackJsonpe-social-network"]=this["webpackJsonpe-social-network"]||[]).push([[6],{103:function(e,r,t){"use strict";t.r(r),t.d(r,"LoginFormFormik",(function(){return m}));t(0);var n=t(87),c=t(89),s=t(88),a=t(16),i=t(22),o=t(5),u=t(86),l=t.n(u),b=t(1),j=Object(s.a)(30),m=function(e){var r=e.onSubmit,t=e.error;return Object(b.jsx)("div",{children:Object(b.jsx)(n.c,{initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e,t){var n=t.setSubmitting;r(e),n(!1)},children:function(e){var r=e.isSubmitting;return Object(b.jsxs)(n.b,{children:[Object(c.c)(c.a,"text",j,"email","email"),Object(c.c)(c.a,"password",j,"password","password"),Object(b.jsxs)("label",{className:"",children:[Object(b.jsx)(n.a,{component:c.a,type:"checkbox",name:"rememberMe"}),"remember me"]}),Object(b.jsx)("div",{children:t&&Object(b.jsxs)("div",{className:l.a.errorMessage,children:[" ",t," "]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",disabled:r,children:"Login"})})]})}})})};r.default=Object(a.b)((function(e){return{isAuth:e.auth.isAuth,error:e.auth.error}}),{logIn:i.c})((function(e){var r=e.isAuth,t=e.error,n=e.logIn;return r?Object(b.jsx)(o.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(m,{onSubmit:function(e){n(e.email,e.password,e.rememberMe)},error:t})]})}))},86:function(e,r,t){e.exports={formControl:"FormsControls_formControl__mPXaD",error:"FormsControls_error__3qOob",errorMessage:"FormsControls_errorMessage__Q4gxl"}},88:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(e){return function(r){var t;return r?r.length>e&&(t="Max length is ".concat(e," symbols")):t="Field is required",t}}},89:function(e,r,t){"use strict";t.d(r,"b",(function(){return u})),t.d(r,"a",(function(){return l})),t.d(r,"c",(function(){return b}));var n=t(2),c=t(90),s=t(86),a=t.n(s),i=t(87),o=(t(0),t(1)),u=function(e){var r=e.field,t=e.form,s=t.touched,i=t.errors,u=t.isValid,l=Object(c.a)(e,["field","form"]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("textarea",Object(n.a)(Object(n.a)(Object(n.a)({},r),l),{},{className:!u&&s[r.name]&&i[r.name]?a.a.error:""})),s[r.name]&&i[r.name]&&Object(o.jsx)("div",{className:a.a.errorMessage,children:i[r.name]})]})},l=function(e){var r=e.field,t=e.form,s=t.touched,i=t.errors,u=t.isValid,l=Object(c.a)(e,["field","form"]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",Object(n.a)(Object(n.a)(Object(n.a)({},r),l),{},{className:!u&&s[r.name]&&i[r.name]?a.a.error:""})),!u&&s[r.name]&&i[r.name]&&Object(o.jsx)("div",{className:a.a.errorMessage,children:i[r.name]})]})},b=function(e,r,t,n,c){return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{component:e,type:r,validate:t,name:n,placeholder:c})})}}}]);
//# sourceMappingURL=6.6aeca0fe.chunk.js.map