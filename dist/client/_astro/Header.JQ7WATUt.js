import{r as c}from"./index.NEDEFKed.js";var d={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=c,f=Symbol.for("react.element"),p=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,h=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function m(t,r,i){var s,n={},l=null,o=null;i!==void 0&&(l=""+i),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(o=r.ref);for(s in r)u.call(r,s)&&!j.hasOwnProperty(s)&&(n[s]=r[s]);if(t&&t.defaultProps)for(s in r=t.defaultProps,r)n[s]===void 0&&(n[s]=r[s]);return{$$typeof:f,type:t,key:l,ref:o,props:n,_owner:h.current}}a.Fragment=p;a.jsx=m;a.jsxs=m;d.exports=a;var e=d.exports;function y({href:t,content:r}){return e.jsx("button",{className:"px-4 py-1 bg-gradient-to-tr from-lime-400/80 to-indigo-500/80 hover:from-lime-500 hover:to-indigo-500 rounded-full",children:e.jsx("a",{href:t,children:r})})}function b({href:t,content:r}){return e.jsx("li",{children:e.jsx("a",{className:"p-2 hover:animate-pulse",href:t,children:r})})}function _({headerLinks:t}){const[r,i]=c.useState(!1),s=()=>{i(n=>!n)};return e.jsxs("header",{className:"w-full sticky top-0 grid grid-cols-8 backdrop-blur-md items-center z-50",children:[e.jsx("aside",{className:"col-span-4 sm:col-span-2 text-center p-4 flex items-center justify-start",children:e.jsx("a",{href:"/PAME",className:"hover:animate-pulse",children:e.jsx("h1",{className:"text-2xl font-semibold",children:"P A M E"})})}),e.jsx("aside",{className:"col-span-4 sm:col-span-6 p-4 flex items-center justify-end md:hidden",children:e.jsx("button",{onClick:s,children:e.jsx("i",{className:"text-2xl ri-menu-3-line"})})}),e.jsxs("section",{id:"sidebar",className:`${r?"flex":"hidden"} absolute top-0 right-0 h-screen flex-col justify-start w-[60%] md:relative md:h-auto md:w-auto col-span-6 md:grid grid-cols-6 md:items-center bg-slate-800 md:bg-transparent`,children:[e.jsxs("header",{className:"p-4 flex items-center justify-between md:hidden",children:[e.jsx("h2",{children:"Menu"}),e.jsx("aside",{children:e.jsx("button",{onClick:s,children:e.jsx("i",{className:"text-2xl ri-xrp-line"})})})]}),e.jsx("nav",{className:"col-span-4 text-center p-4",children:e.jsx("ul",{className:"flex flex-col md:flex-row items-center md:justify-around py-1 gap-2",children:t&&t.length>0?t.map((n,l)=>e.jsx(b,{href:n.href,content:n.content},l)):e.jsx("li",{children:"Your Wardrobe Online"})})}),e.jsx("aside",{className:"col-span-2 gap-2 text-center p-4 flex items-center justify-center md:justify-end",children:e.jsx(y,{href:"/PAME/logIn",content:"Log In"})})]})]})}export{_ as default};
