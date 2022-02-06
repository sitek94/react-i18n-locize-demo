var D=Object.defineProperty,P=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var F=(e,n,i)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,u=(e,n)=>{for(var i in n||(n={}))K.call(n,i)&&F(e,i,n[i]);if(y)for(var i of y(n))j.call(n,i)&&F(e,i,n[i]);return e},S=(e,n)=>P(e,z(n));import{i as R,I as T,B as O,a as _,j as v,e as I,u as l,r as c,b as A,p as M,T as $,f as B,c as H,d as U,g as V,s as q,h as Y}from"./vendor.2e6c9151.js";const Z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}};Z();const N=!0,k={projectId:"ab6ac7c8-8353-43f8-b6ba-ac615ae875da",apiKey:{}.VITE_LOCIZE_API_KEY,referenceLng:"en",version:"production"};function G(){R.use(T).use(O).use(_).init({debug:!N,fallbackLng:"en",ns:["main","common","glossary"],interpolation:{escapeValue:!1},saveMissing:!N,backend:k,locizeLastUsed:S(u({},k),{debounceSubmit:9e4,allowedHosts:["localhost"]})})}const t=v.exports.jsx,a=v.exports.jsxs,J=v.exports.Fragment;function Q(){return a("div",{className:"lds-ellipsis",children:[t("div",{}),t("div",{}),t("div",{}),t("div",{})]})}function W(){return t("div",{className:"overlay-spinner",children:t(Q,{})})}let L=I;const p={get(){return L},set(e){L=e}},w={en:{nativeName:"\u{1F1FA}\u{1F1F2} English",locale:I},es:{nativeName:"\u{1F1EA}\u{1F1F8} Espa\xF1ol",locale:A},pl:{nativeName:"\u{1F1F5}\u{1F1F1} Polski",locale:M}};function X(){const{i18n:e}=l();return c.exports.useEffect(()=>{e.services.backendConnector.backend.getLanguages((n,i)=>{if(console.log(i),n){console.log(n);return}for(const o in i)o in w||console.error(`Language ${o} is not supported`)})},[e]),t("div",{className:"language-switcher",children:Object.entries(w).map(([n,{nativeName:i,locale:o}])=>{const r=n===e.resolvedLanguage;return t("button",{type:"button","aria-selected":r,disabled:r,className:r?"selected":"",onClick:()=>{e.changeLanguage(n),p.set(o)},children:i},n)})})}function ee({children:e}){return t("header",{className:"container",children:e})}function te({children:e}){return t("nav",{children:t("div",{className:"container",children:e})})}function ne({children:e}){return t("main",{className:"container",children:e})}function m({title:e,children:n,className:i}){return a("section",{className:i,children:[t("h2",{children:e}),n]})}function g({children:e}){return t("div",{className:"example",children:e})}function ie(){const{t:e}=l();return a(m,{title:e("aboutInitialization.title"),children:[t("p",{children:a($,{i18nKey:"aboutInitialization.description1",children:["i18n is initialized in ",t("code",{children:"src/i18n.ts"})," file."]})}),t("a",{href:"https://www.i18next.com/",target:"_blank",rel:"noreferrer noopener",children:e("aboutInitialization.description2")}),t("p",{children:e("aboutInitialization.missingKeyTest","This should show up in the locize editor")}),t("p",{children:e("aboutInitialization.missingKeyTest2","This should be automatically translated")})]})}function re(...e){const[n,i,o]=e,r=p.get();return B(n,i,u({locale:r},o))}function oe(...e){const[n,i,o]=e,r=p.get();return H(n,i,u({locale:r},o))}function ae(...e){const[n,i,o]=e,r=p.get();return U(n,i,u({locale:r},o))}function se(...e){const[n,i,o]=e,r=p.get();return V(n,i,u({locale:r},o))}function ce(){const{t:e}=l(),[n,i]=c.exports.useState(0),[o,r]=c.exports.useState(1),[s,d]=c.exports.useState(!0),x=1e3/o;function E(){i(0),r(1)}c.exports.useEffect(()=>{if(s)return;const b=setInterval(()=>{i(n+1)},x);return()=>clearInterval(b)},[x,s,n,i]);const h=new Date,f=q(h,n);return a(m,{title:e("dateFns.title"),className:"date-fns",children:[t("pre",{children:a("code",{children:["now = new Date() ",t("br",{}),"past = subMinutes(now, ",n,")"]})}),t("table",{children:a("tbody",{children:[a("tr",{children:[t("th",{children:"format(past, 'PPP')"}),t("td",{children:re(f,"PPP")})]}),a("tr",{children:[t("th",{children:"formatDistance(past, now)"}),t("td",{children:oe(f,h)})]}),a("tr",{children:[t("th",{children:"formatDistanceStrict(past, now)"}),t("td",{children:ae(f,h)})]}),a("tr",{children:[t("th",{children:"formatRelative(past, now)"}),t("td",{children:se(f,h)})]})]})}),t("button",{onClick:()=>d(!s),children:e(s?"common:start":"common:stop")}),a("label",{className:"range-field",children:[t("span",{children:e("common:speed")}),t("input",{type:"range",min:0,max:1e3,value:o,onChange:b=>r(Number(b.target.value))})]}),t("button",{onClick:E,children:e("common:reset")})]})}function le(){const{t:e}=l(),[n,i]=c.exports.useState("Pickle Rick");return a(m,{title:e("interpolation.title"),children:[t("p",{children:e("interpolation.description")}),t(g,{children:e("interpolation.example",{name:n})}),a("label",{children:[t("input",{type:"text",className:"input",value:n,onChange:o=>i(o.target.value),style:{marginRight:"0.5rem"}}),e("interpolation.inputLabel")]})]})}const C=[400,401,403,404,500,503,504,999];function ue(){const{t:e}=l(),[n,i]=c.exports.useState(0),o=C[n];return a(m,{title:e("multipleFallbackKeys.title"),children:[a(g,{children:[t("span",{style:{fontSize:"2rem",marginRight:"0.5rem"},children:o}),t("span",{children:e([`common:error.${o}`,"common:error.unspecific"])})]}),a("button",{onClick:()=>i((n+1)%C.length),children:[t("span",{role:"image","aria-label":e("multipleFallbackKeys.button.image"),style:{marginRight:"0.5rem"},children:"\u{1F4A3}"}),e("multipleFallbackKeys.button.text")]}),t("p",{children:e("multipleFallbackKeys.description")}),t(g,{children:e("multipleFallbackKeys.example",{errorCode:o,message:e([`common:error.${o}`,"common:error.unspecific"])})})]})}function de(){const[e,n]=c.exports.useState(0),[i,o]=c.exports.useState(""),{t:r}=l();return c.exports.useEffect(()=>{i&&n(Number(i))},[i]),a(m,{title:r("plurals.title"),children:[t("p",{children:r("plurals.description")}),a(g,{children:[a("code",{children:["count === ",e]}),t("span",{style:{marginLeft:"1rem"},children:r("plurals.example",{count:e})})]}),t("input",{type:"text",className:"input",value:i,placeholder:String(e),onChange:s=>o(s.target.value)}),t("button",{onClick:()=>n(e-1),children:"-"}),t("button",{onClick:()=>n(e+1),children:"+"})]})}function pe(){const{t:e}=l();return a(J,{children:[t(ee,{children:a("h1",{children:[e("appTitle")," \u2697\uFE0F"]})}),t(te,{children:t(X,{})}),a(ne,{children:[t(ie,{}),t(de,{}),t(le,{}),t(ue,{}),t(ce,{})]})]})}G();Y.exports.render(t(c.exports.Suspense,{fallback:t(W,{}),children:t(pe,{})}),document.getElementById("root"));