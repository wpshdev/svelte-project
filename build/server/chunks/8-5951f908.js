import { e } from './axios-e3741e97.js';
import { a } from './private-f2b600c9.js';
import 'axios';
import './redis-6a4ecee3.js';
import 'ioredis';

async function c(){const o="https://strapi.ulfbuilt.com:1337/api/home-page?populate=deep,3",r={rel:"preconnect",Authorization:"Bearer "+a},e$1=await e.get(o,{headers:r});return e$1.fromCache?console.log("Response from cache"):console.log("Response from server"),e$1.data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: c
});

const index = 8;
const component = async () => (await import('./_page.svelte-6a8cad04.js')).default;
const file = '_app/immutable/entry/_page.svelte.9af2c23b.js';
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/entry/_page.svelte.9af2c23b.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/index.55824f8b.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/MasonryGrid.1ebae4ba.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/Cta.15a9dcc8.js","_app/immutable/chunks/PageBanner.0df617d5.js"];
const stylesheets = ["_app/immutable/assets/_page.90d06961.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryGrid.1bf1309e.css","_app/immutable/assets/Cta.fccf1b3b.css","_app/immutable/assets/PageBanner.4581ec8f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-5951f908.js.map
