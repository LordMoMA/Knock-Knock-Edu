(this["webpackJsonpkk-react"]=this["webpackJsonpkk-react"]||[]).push([[33],{336:function(e,t,a){"use strict";var s=a(0),i=a(78),r=a(127),c=a(126),n=a(306),o={config:{attributes:!0,childList:!1,subtree:!1}},l=function(){var e=Object(i.b)(),t=Object(s.useCallback)((function(t){Array.isArray(t)&&t.map((function(t){"attributes"===t.type&&"style"===t.attributeName&&e(Object(c.h)(t.target.style.paddingRight.indexOf("px")>-1?parseInt(t.target.style.paddingRight.replace("px",""),10):""))}))}),[e]);return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,i=Object(s.useState)(null),r=Object(n.a)(i,2),c=r[0],l=r[1];Object(s.useEffect)((function(){var e=new MutationObserver(t);l(e)}),[t,a,l]),Object(s.useEffect)((function(){if(c){var t=a.config;return c.observe(e,t),function(){c&&c.disconnect()}}}),[c,e,a])}(document.body,t),!0};t.a=function(){var e=Object(i.c)((function(e){return e.settings})),t=e.color,a=e.layout,c=e.radius,n=e.navColor,o=Object(i.b)(),d=Object(i.c)((function(e){return e.menu})),u=d.attrMenuAnimate,b=d.attrMobile,m=d.placementStatus,j=m.placementHtmlData,h=m.dimensionHtmlData,f=d.behaviourStatus.behaviourHtmlData;l();var v=document.documentElement;return Object(s.useEffect)((function(){return setTimeout((function(){o(Object(r.b)()),v.setAttribute("data-show","true")}),30),v.setAttribute("data-color",t),v.setAttribute("data-layout",a),v.setAttribute("data-radius",c),v.setAttribute("data-navcolor",n),v.setAttribute("data-placement",j),v.setAttribute("data-dimension",h),v.setAttribute("data-behaviour",f),function(){v.removeAttribute("data-color"),v.removeAttribute("data-layout"),v.removeAttribute("data-radius"),v.removeAttribute("data-navcolor"),v.removeAttribute("data-show"),v.removeAttribute("data-placement"),v.removeAttribute("data-behaviour"),v.removeAttribute("data-dimension")}}),[]),Object(s.useEffect)((function(){v.setAttribute("data-placement",j),v.setAttribute("data-dimension",h),v.setAttribute("data-behaviour",f),v.setAttribute("data-navcolor",n),v.setAttribute("data-radius",c),v.setAttribute("data-color",t),v.setAttribute("data-layout",a)}),[v,j,h,f,n,c,t,a]),Object(s.useEffect)((function(){u?v.setAttribute("data-menu-animate",u):v.removeAttribute("data-menu-animate")}),[v,u]),Object(s.useEffect)((function(){b?v.setAttribute("data-mobile",b):v.removeAttribute("data-mobile")}),[v,b]),!0}},339:function(e,t,a){"use strict";var s=a(0),i=a(336),r=a(11);t.a=function(e){var t=e.left,a=e.right;return Object(i.a)(),Object(s.useEffect)((function(){document.body.classList.add("h-100");var e=document.getElementById("root");return e&&e.classList.add("h-100"),function(){document.body.classList.remove("h-100"),e&&e.classList.remove("h-100")}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"fixed-background"}),Object(r.jsx)("div",{className:"container-fluid p-0 h-100 position-relative",children:Object(r.jsxs)("div",{className:"row g-0 h-100",children:[Object(r.jsx)("div",{className:"offset-0 col-12 d-none d-lg-flex offset-md-1 col-lg h-lg-100",children:t}),Object(r.jsx)("div",{className:"col-12 col-lg-auto h-100 pb-4 px-4 pt-0 p-lg-0",children:a})]})})]})}},730:function(e,t,a){"use strict";a.r(t);a(0);var s=a(18),i=a(79),r=a(739),c=a(344),n=a(431),o=a(430),l=a(339),d=a(310),u=a(319),b=a(11);t.default=function(){var e=n.b().shape({name:n.d().required("Name is required"),email:n.d().email().required("Email is required"),password:n.d().min(6,"Must be at least 6 chars!").required("Password is required"),terms:n.a().required().oneOf([!0],"Terms must be accepted")}),t=Object(s.g)(),a=Object(o.a)({initialValues:{name:"",email:"",password:"",terms:!1},validationSchema:e,onSubmit:function(e){console.log("submit form",e),t.push("/dashboards/elearning")}}),m=a.handleSubmit,j=a.handleChange,h=a.values,f=a.touched,v=a.errors,p=Object(b.jsx)("div",{className:"sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border",children:Object(b.jsxs)("div",{className:"sw-lg-50 px-5",children:[Object(b.jsx)("div",{className:"sh-11",children:Object(b.jsx)(i.c,{to:"/dashboards/elearning",children:Object(b.jsx)("div",{className:"logo-default"})})}),Object(b.jsx)("div",{className:"mb-5",children:Object(b.jsx)("h2",{className:"cta-1 text-primary",children:"English learning that is fun, enlightening and creative"})}),Object(b.jsx)("div",{className:"mb-5",children:Object(b.jsxs)("p",{className:"h6",children:["If you are one of us, just ",Object(b.jsx)(i.c,{to:"/login",children:"login"}),"."]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("form",{id:"registerForm",className:"tooltip-end-bottom",onSubmit:m,children:[Object(b.jsxs)("div",{className:"mb-3 filled form-group tooltip-end-top",children:[Object(b.jsx)(d.a,{icon:"user"}),Object(b.jsx)(r.a.Control,{type:"text",name:"name",placeholder:"Name",value:h.name,onChange:j}),v.name&&f.name&&Object(b.jsx)("div",{className:"d-block invalid-tooltip",children:v.name})]}),Object(b.jsxs)("div",{className:"mb-3 filled form-group tooltip-end-top",children:[Object(b.jsx)(d.a,{icon:"email"}),Object(b.jsx)(r.a.Control,{type:"text",name:"email",placeholder:"Email",value:h.email,onChange:j}),v.email&&f.email&&Object(b.jsx)("div",{className:"d-block invalid-tooltip",children:v.email})]}),Object(b.jsxs)("div",{className:"mb-3 filled form-group tooltip-end-top",children:[Object(b.jsx)(d.a,{icon:"lock-off"}),Object(b.jsx)(r.a.Control,{type:"password",name:"password",onChange:j,value:h.password,placeholder:"Password"}),v.password&&f.password&&Object(b.jsx)("div",{className:"d-block invalid-tooltip",children:v.password})]}),Object(b.jsx)("div",{className:"mb-3 position-relative form-group",children:Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)("input",{type:"checkbox",className:"form-check-input",name:"terms",onChange:j,value:h.terms}),Object(b.jsxs)("label",{className:"form-check-label",children:["I have read and accept the"," ",Object(b.jsx)(i.c,{to:"/dashboards/elearning",target:"_blank",children:"terms and conditions."})]}),v.terms&&f.terms&&Object(b.jsx)("div",{className:"d-block invalid-tooltip",children:v.terms})]})}),Object(b.jsx)(c.a,{size:"lg",type:"submit",children:"Signup"})]})})]})});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{title:"Register",description:"Register Page"}),Object(b.jsx)(l.a,{right:p})]})}}}]);