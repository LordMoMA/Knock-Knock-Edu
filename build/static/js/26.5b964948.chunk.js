(this["webpackJsonpkk-react"]=this["webpackJsonpkk-react"]||[]).push([[26],{302:function(e,t,a){"use strict";var s=a(0),i=a(78),c=a(127),r=a(126),n=a(293),o={config:{attributes:!0,childList:!1,subtree:!1}},l=function(){var e=Object(i.b)(),t=Object(s.useCallback)((function(t){Array.isArray(t)&&t.map((function(t){"attributes"===t.type&&"style"===t.attributeName&&e(Object(r.g)(t.target.style.paddingRight.indexOf("px")>-1?parseInt(t.target.style.paddingRight.replace("px",""),10):""))}))}),[e]);return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,i=Object(s.useState)(null),c=Object(n.a)(i,2),r=c[0],l=c[1];Object(s.useEffect)((function(){var e=new MutationObserver(t);l(e)}),[t,a,l]),Object(s.useEffect)((function(){if(r){var t=a.config;return r.observe(e,t),function(){r&&r.disconnect()}}}),[r,e,a])}(document.body,t),!0};t.a=function(){var e=Object(i.c)((function(e){return e.settings})),t=e.color,a=e.layout,r=e.radius,n=e.navColor,o=Object(i.b)(),d=Object(i.c)((function(e){return e.menu})),u=d.attrMenuAnimate,b=d.attrMobile,m=d.placementStatus,j=m.placementHtmlData,h=m.dimensionHtmlData,f=d.behaviourStatus.behaviourHtmlData;l();var v=document.documentElement;return Object(s.useEffect)((function(){return setTimeout((function(){o(Object(c.b)()),v.setAttribute("data-show","true")}),30),v.setAttribute("data-color",t),v.setAttribute("data-layout",a),v.setAttribute("data-radius",r),v.setAttribute("data-navcolor",n),v.setAttribute("data-placement",j),v.setAttribute("data-dimension",h),v.setAttribute("data-behaviour",f),function(){v.removeAttribute("data-color"),v.removeAttribute("data-layout"),v.removeAttribute("data-radius"),v.removeAttribute("data-navcolor"),v.removeAttribute("data-show"),v.removeAttribute("data-placement"),v.removeAttribute("data-behaviour"),v.removeAttribute("data-dimension")}}),[]),Object(s.useEffect)((function(){v.setAttribute("data-placement",j),v.setAttribute("data-dimension",h),v.setAttribute("data-behaviour",f),v.setAttribute("data-navcolor",n),v.setAttribute("data-radius",r),v.setAttribute("data-color",t),v.setAttribute("data-layout",a)}),[v,j,h,f,n,r,t,a]),Object(s.useEffect)((function(){u?v.setAttribute("data-menu-animate",u):v.removeAttribute("data-menu-animate")}),[v,u]),Object(s.useEffect)((function(){b?v.setAttribute("data-mobile",b):v.removeAttribute("data-mobile")}),[v,b]),!0}},306:function(e,t,a){"use strict";var s=a(0),i=a(302),c=a(7);t.a=function(e){var t=e.left,a=e.right;return Object(i.a)(),Object(s.useEffect)((function(){document.body.classList.add("h-100");var e=document.getElementById("root");return e&&e.classList.add("h-100"),function(){document.body.classList.remove("h-100"),e&&e.classList.remove("h-100")}}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"fixed-background"}),Object(c.jsx)("div",{className:"container-fluid p-0 h-100 position-relative",children:Object(c.jsxs)("div",{className:"row g-0 h-100",children:[Object(c.jsx)("div",{className:"offset-0 col-12 d-none d-lg-flex offset-md-1 col-lg h-lg-100",children:t}),Object(c.jsx)("div",{className:"col-12 col-lg-auto h-100 pb-4 px-4 pt-0 p-lg-0",children:a})]})})]})}},566:function(e,t,a){"use strict";a.r(t);a(0);var s=a(13),i=a(77),c=a(320),r=a(581),n=a(353),o=a(352),l=a(306),d=a(296),u=a(300),b=a(7);t.default=function(){var e=n.b().shape({email:n.d().email().required("Email is required"),password:n.d().min(6,"Must be at least 6 chars!").required("Password is required")}),t=Object(s.g)(),a=Object(o.a)({initialValues:{email:"",password:""},validationSchema:e,onSubmit:function(e){console.log("submit form",e),t.push("/dashboards/elearning")}}),m=a.handleSubmit,j=a.handleChange,h=a.values,f=a.touched,v=a.errors,p=Object(b.jsx)("div",{className:"min-h-100 d-flex align-items-center",children:Object(b.jsx)("div",{className:"w-100 w-lg-75 w-xxl-50",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"mb-5",children:Object(b.jsx)("h1",{className:"display-3 text-white",children:"Knock Knock Edu"})}),Object(b.jsx)("p",{className:"h6 text-white lh-1-5 mb-5",children:"English learning that is fun, enlightening and creative"}),Object(b.jsx)("div",{className:"mb-5",children:Object(b.jsx)(c.a,{size:"lg",variant:"outline-white",href:"/",children:"Learn More"})})]})})}),O=Object(b.jsx)("div",{className:"sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border",children:Object(b.jsxs)("div",{className:"sw-lg-50 px-5",children:[Object(b.jsx)("div",{className:"sh-11",children:Object(b.jsx)(i.c,{to:"/dashboards/elearning",children:Object(b.jsx)("div",{className:"logo-default"})})}),Object(b.jsxs)("div",{className:"mb-5",children:[Object(b.jsx)("h2",{className:"cta-1 mb-0 text-primary",children:"Welcome,"}),Object(b.jsx)("h2",{className:"cta-1 text-primary",children:"let's get started!"})]}),Object(b.jsxs)("div",{className:"mb-5",children:[Object(b.jsx)("p",{className:"h6",children:"Please use your credentials to login."}),Object(b.jsxs)("p",{className:"h6",children:["If you are not a member, please ",Object(b.jsx)(i.c,{to:"/register",children:"register"}),"."]})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("form",{id:"loginForm",className:"tooltip-end-bottom",onSubmit:m,children:[Object(b.jsxs)("div",{className:"mb-3 filled form-group tooltip-end-top",children:[Object(b.jsx)(d.a,{icon:"email"}),Object(b.jsx)(r.a.Control,{type:"text",name:"email",placeholder:"Email",value:h.email,onChange:j}),v.email&&f.email&&Object(b.jsx)("div",{className:"d-block invalid-tooltip",children:v.email})]}),Object(b.jsxs)("div",{className:"mb-3 filled form-group tooltip-end-top",children:[Object(b.jsx)(d.a,{icon:"lock-off"}),Object(b.jsx)(r.a.Control,{type:"password",name:"password",onChange:j,value:h.password,placeholder:"Password"}),Object(b.jsx)(i.c,{className:"text-small position-absolute t-3 e-3",to:"/forgot-password",children:"Forgot?"}),v.password&&f.password&&Object(b.jsx)("div",{className:"d-block invalid-tooltip",children:v.password})]}),Object(b.jsx)(c.a,{size:"lg",type:"submit",children:"Login"})]})})]})});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{title:"Login",description:"Login Page"}),Object(b.jsx)(l.a,{left:p,right:O})]})}}}]);