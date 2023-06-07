import { e } from './axios-e3741e97.js';
import { a } from './private-f2b600c9.js';
import 'axios';
import './redis-6a4ecee3.js';
import 'ioredis';

async function i(){const o="https://strapi.ulfbuilt.com:1337/api/portfolio-page?populate=deep,5",t={Authorization:"Bearer "+a};return {portfolio:(await e.get(o,{headers:t})).data}}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: i
});

const index = 19;
const component = async () => (await import('./_page.svelte-1a7a32ec.js')).default;
const file = '_app/immutable/entry/portfolio-page.svelte.61bd9be3.js';
const server_id = "src/routes/portfolio/+page.server.ts";
const imports = ["_app/immutable/entry/portfolio-page.svelte.61bd9be3.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/index.55824f8b.js","_app/immutable/chunks/MasonryGrid.1ebae4ba.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/DarkPaginationNav.svelte_svelte_type_style_lang.be1615c1.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/Cta.15a9dcc8.js","_app/immutable/chunks/PageBanner.0df617d5.js"];
const stylesheets = ["_app/immutable/assets/_page.2768d761.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryGrid.1bf1309e.css","_app/immutable/assets/DarkPaginationNav.ecfdfdcc.css","_app/immutable/assets/Cta.fccf1b3b.css","_app/immutable/assets/PageBanner.4581ec8f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=19-19416f14.js.map
