function b(){}function C(t){return !!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function E(t){return t()}function h(){return Object.create(null)}function y(t){t.forEach(E);}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function O(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function T(t,e){const n={};e=new Set(e);for(const o in t)!e.has(o)&&o[0]!=="$"&&(n[o]=t[o]);return n}function q(t){const e={};for(const n in t)e[n]=!0;return e}function M(t){return t??""}function w(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}let i;function a(t){i=t;}function F(){if(!i)throw new Error("Function called outside component initialization");return i}function A(t){F().$$.on_destroy.push(t);}function R(){const t=F();return (e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const u=w(e,n,{cancelable:o});return s.slice().forEach(r=>{r.call(t,u);}),!u.defaultPrevented}return !0}}function B(t,e){return F().$$.context.set(t,e),e}function G(t){return F().$$.context.get(t)}const g=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],j=new Set([...g]),x=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;function I(t,e){const n=Object.assign({},...t);if(e){const s=e.classes,u=e.styles;s&&(n.class==null?n.class=s:n.class+=" "+s),u&&(n.style==null?n.style=f(u):n.style=f(k(n.style,u)));}let o="";return Object.keys(n).forEach(s=>{if(x.test(s))return;const u=n[s];u===!0?o+=" "+s:j.has(s.toLowerCase())?u&&(o+=" "+s):u!=null&&(o+=` ${s}="${u}"`);}),o}function k(t,e){const n={};for(const o of t.split(";")){const s=o.indexOf(":"),u=o.slice(0,s).trim(),r=o.slice(s+1).trim();u&&(n[u]=r);}for(const o in e){const s=e[o];s?n[o]=s:delete n[o];}return n}const v=/[&"]/g,S=/[&<]/g;function d(t,e=!1){const n=String(t),o=e?v:S;o.lastIndex=0;let s="",u=0;for(;o.test(n);){const r=o.lastIndex-1,c=n[r];s+=n.substring(u,r)+(c==="&"?"&amp;":c==='"'?"&quot;":"&lt;"),u=r+1;}return s+n.substring(u)}function p(t){return typeof t=="string"||t&&typeof t=="object"?d(t,!0):t}function N(t){const e={};for(const n in t)e[n]=p(t[n]);return e}function W(t,e){let n="";for(let o=0;o<t.length;o+=1)n+=e(t[o],o);return n}const X={$$render:()=>""};function z(t,e){if(!t||!t.$$render)throw e==="svelte:component"&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${e}>.`);return t}let l;function L(t){function e(n,o,s,u,r){const c=i,_={on_destroy:l,context:new Map(r||(c?c.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:h()};a({$$:_});const m=t(n,o,s,u);return a(c),m}return {render:(n={},{$$slots:o={},context:s=new Map}={})=>{l=[];const u={title:"",head:"",css:new Set},r=e(u,n,{},o,s);return y(l),{html:r,css:{code:Array.from(u.css).map(c=>c.code).join(`
`),map:null},head:u.title+u.head}},$$render:e}}function P(t,e,n){if(e==null||n&&!e)return "";const o=n&&e===!0?"":`="${d(e,!0)}"`;return ` ${t}${o}`}function f(t){return Object.keys(t).filter(e=>t[e]).map(e=>`${e}: ${p(t[e])};`).join(" ")}

export { A, B, C, D, G, I, L, M, N, O, P, R, T, W, X, b, d, p, q, z };
//# sourceMappingURL=index-87618b6e.js.map
