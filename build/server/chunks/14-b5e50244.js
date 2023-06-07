import { e } from './axios-e3741e97.js';
import { a } from './private-f2b600c9.js';
import 'axios';
import './redis-6a4ecee3.js';
import 'ioredis';

async function p(){const t="https://strapi.ulfbuilt.com:1337/api/our-process?populate=deep,2",o={Authorization:"Bearer "+a};return (await e.get(t,{headers:o})).data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: p
});

const index = 14;
const component = async () => (await import('./_page.svelte-eefb0e3c.js')).default;
const file = '_app/immutable/entry/our-process-page.svelte.590f162a.js';
const server_id = "src/routes/our-process/+page.server.ts";
const imports = ["_app/immutable/entry/our-process-page.svelte.590f162a.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/Cta.15a9dcc8.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/PageBanner.0df617d5.js"];
const stylesheets = ["_app/immutable/assets/_page.684ae50d.css","_app/immutable/assets/Cta.fccf1b3b.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/PageBanner.4581ec8f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-b5e50244.js.map
