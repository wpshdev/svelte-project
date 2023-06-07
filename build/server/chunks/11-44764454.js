import o from 'axios';
import { a } from './private-f2b600c9.js';

const g=async({params:s,fetch:i})=>{const a$1="https://strapi.ulfbuilt.com:1337/api/blogs?filters[slug][$eq]="+s.slug+"&populate=deep",t={Authorization:"Bearer "+a},e=await o.get(a$1,{headers:t}),l="https://strapi.ulfbuilt.com:1337/api/blogs?populate=deep",p=await o.get(l,{headers:t});return {page:e.data,blogs:p.data}};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: g
});

const index = 11;
const component = async () => (await import('./_page.svelte-1cd3aafd.js')).default;
const file = '_app/immutable/entry/articles-_slug_-page.svelte.502d4543.js';
const server_id = "src/routes/articles/[slug]/+page.server.ts";
const imports = ["_app/immutable/entry/articles-_slug_-page.svelte.502d4543.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Cta.15a9dcc8.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/Animate.415ab3dc.js"];
const stylesheets = ["_app/immutable/assets/_page.a23688f0.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/Cta.fccf1b3b.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-44764454.js.map
