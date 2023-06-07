import o from 'axios';
import { a } from './private-f2b600c9.js';

async function P(e){const i="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[slug][$eq]="+e.params.slug+"&populate=deep,2",o$1={Authorization:"Bearer "+a},a$1=await o.get(i,{headers:o$1});let t=a$1.data.data[0].attributes.categories.data;t=t[Math.floor(Math.random()*t.length)].id;const l="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+t+"&populate=deep,2",r=await o.get(l,{headers:o$1}),n=p(r.data.data,2);return console.log(r.data.data.length),{portfolio:a$1.data,rPortfolios:n};function p(d,f){return [...d].sort(()=>.5-Math.random()).slice(0,f)}}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: P
});

const index = 20;
const component = async () => (await import('./_page.svelte-1d02f46c.js')).default;
const file = '_app/immutable/entry/portfolio-_slug_-page.svelte.ad022d6c.js';
const server_id = "src/routes/portfolio/[slug]/+page.server.ts";
const imports = ["_app/immutable/entry/portfolio-_slug_-page.svelte.ad022d6c.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/_commonjsHelpers.87174ba5.js","_app/immutable/chunks/Contactform.b624116f.js","_app/immutable/chunks/Button.55b0fd81.js","_app/immutable/chunks/Input.2badc3b7.js"];
const stylesheets = ["_app/immutable/assets/_page.7946cc14.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/Contactform.5e50abd8.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=20-d3e34170.js.map
