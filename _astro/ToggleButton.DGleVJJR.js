import{a as R,r as u}from"./index.DK-fsZOb.js";var y={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j;function S(){if(j)return h;j=1;var e=R(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(l,n,m){var i,f={},p=null,x=null;m!==void 0&&(p=""+m),n.key!==void 0&&(p=""+n.key),n.ref!==void 0&&(x=n.ref);for(i in n)s.call(n,i)&&!o.hasOwnProperty(i)&&(f[i]=n[i]);if(l&&l.defaultProps)for(i in n=l.defaultProps,n)f[i]===void 0&&(f[i]=n[i]);return{$$typeof:t,type:l,key:p,ref:x,props:f,_owner:c.current}}return h.Fragment=r,h.jsx=d,h.jsxs=d,h}var v;function $(){return v||(v=1,y.exports=S()),y.exports}var a=$();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=e=>{const t=E(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},B=u.createContext({}),O=()=>u.useContext(B),q=u.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:s,className:c="",children:o,iconNode:d,...l},n)=>{const{size:m=24,strokeWidth:i=2,absoluteStrokeWidth:f=!1,color:p="currentColor",className:x=""}=O()??{},g=s??f?Number(r??i)*24/Number(t??m):r??i;return u.createElement("svg",{ref:n,..._,width:t??m??_.width,height:t??m??_.height,stroke:e??p,strokeWidth:g,className:b("lucide",x,c),...!o&&!L(l)&&{"aria-hidden":"true"},...l},[...d.map(([w,N])=>u.createElement(w,N)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(e,t)=>{const r=u.forwardRef(({className:s,...c},o)=>u.createElement(q,{ref:o,iconNode:t,className:b(`lucide-${A(C(e))}`,`lucide-${e}`,s),...c}));return r.displayName=C(e),r};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M12 6v16",key:"nqf5sj"}],["path",{d:"m19 13 2-1a9 9 0 0 1-18 0l2 1",key:"y7qv08"}],["path",{d:"M9 11h6",key:"1fldmi"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]],I=k("anchor",T);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],F=k("search",W);function J({id:e,label:t,value:r,onChange:s,placeholder:c}){return a.jsxs("div",{className:"search-field",children:[a.jsx("label",{htmlFor:e,className:"visually-hidden",children:t}),a.jsx(F,{size:14,"aria-hidden":"true",className:"search-field__icon"}),a.jsx("input",{id:e,name:e,type:"search",autoComplete:"off",spellCheck:!1,placeholder:c,value:r,onChange:o=>s(o.target.value)})]})}function U({children:e}){return a.jsx("aside",{id:"sidebar",children:e})}function z({title:e}){return a.jsx("header",{className:"sidebar-header",children:a.jsx("h1",{children:e})})}function D({children:e}){return a.jsx("div",{className:"controls",children:e})}function G({children:e}){return a.jsx("h2",{className:"section-title",children:e})}function M({children:e,columns:t=4}){return a.jsx("div",{className:"stats-row",style:{gridTemplateColumns:`repeat(${t}, minmax(0, 1fr))`},children:e})}function Z(e){const t=e.toLocaleString("en-GB");if(e>=1e4){const r=e/1e3;return{display:`${r>=100?r.toFixed(0):r.toFixed(1).replace(/\.0$/,"")}k`,title:t}}return{display:t,title:t}}function H({value:e,label:t,title:r}){return a.jsxs("div",{className:"stat-card",title:r,children:[a.jsx("div",{className:"stat-value",children:e}),a.jsx("div",{className:"stat-label",children:t})]})}function K({children:e,columns:t=2,padded:r=!1}){return a.jsx("div",{className:"btn-grid"+(r?" btn-grid--padded":""),style:{gridTemplateColumns:`repeat(${t}, minmax(0, 1fr))`},children:e})}function Y({pressed:e,layout:t="row",span:r,className:s,style:c,children:o,disabled:d,...l}){return a.jsx("button",{type:"button","aria-pressed":e,disabled:d,className:["toggle-btn",t==="stack"?"toggle-btn--stack":"",e?"is-active":"",s??""].filter(Boolean).join(" "),style:{...r?{gridColumn:`span ${r}`}:{},...c},...l,children:o})}export{I as A,K as B,U as S,Y as T,z as a,D as b,k as c,G as d,J as e,M as f,H as g,F as h,Z as i,a as j};
