import { G } from './index-87618b6e.js';
import { p as p$1 } from './index2-49a5e086.js';

function a(e){const t=p$1(e);let s=!0;function o(){s=!0,t.update(r=>r);}function c(r){s=!1,t.set(r);}function b(r){let n;return t.subscribe(i=>{(n===void 0||s&&i!==n)&&r(n=i);})}return {notify:o,set:c,subscribe:b}}function p(){const{set:e,subscribe:t}=p$1(!1);async function s(){return !1}return {subscribe:t,check:s}}a({}),a({}),p$1(null),p();const d=()=>{const e=G("__svelte__");return {page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},_={subscribe(e){return d().page.subscribe(e)}};

export { _ };
//# sourceMappingURL=stores-3ee73ecb.js.map
