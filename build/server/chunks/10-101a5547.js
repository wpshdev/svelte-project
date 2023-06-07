import o from 'axios';
import { a } from './private-f2b600c9.js';

async function n(){const a$1="https://strapi.ulfbuilt.com:1337/api/article?populate=deep",t={Authorization:"Bearer "+a},e=await o.get(a$1,{headers:t}),s="https://strapi.ulfbuilt.com:1337/api/blogs?populate=deep",p=await o.get(s,{headers:t});return {page:e.data,blogs:p.data}}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: n
});

const index = 10;
const component = async () => (await import('./_page.svelte-32d67b55.js')).default;
const file = '_app/immutable/entry/articles-page.svelte.d6b8b8d3.js';
const server_id = "src/routes/articles/+page.server.ts";
const imports = ["_app/immutable/entry/articles-page.svelte.d6b8b8d3.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/DarkPaginationNav.svelte_svelte_type_style_lang.be1615c1.js","_app/immutable/chunks/Cta.15a9dcc8.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/PageBanner.0df617d5.js","_app/immutable/chunks/Animate.415ab3dc.js"];
const stylesheets = ["_app/immutable/assets/_page.571a59f8.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/DarkPaginationNav.ecfdfdcc.css","_app/immutable/assets/Cta.fccf1b3b.css","_app/immutable/assets/PageBanner.4581ec8f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-101a5547.js.map
