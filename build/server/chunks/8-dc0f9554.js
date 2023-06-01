import { e } from './axios-70231547.js';
import 'axios';
import './redis-6a4ecee3.js';
import 'ioredis';

async function f(){const a="https://strapi.ulfbuilt.com:1337/api/home-page?populate=deep,3",c={rel:"preconnect",Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"},e$1=await e.get(a,{headers:c});return e$1.fromCache?console.log("Response from cache"):console.log("Response from server"),e$1.data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: f
});

const index = 8;
const component = async () => (await import('./_page.svelte-424ac954.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/8.4fdbe7dc.js","_app/immutable/chunks/index.d0f96b4d.js","_app/immutable/chunks/index.97123c66.js","_app/immutable/chunks/Row.8ec63af8.js","_app/immutable/chunks/Animate.c085a481.js","_app/immutable/chunks/MasonryGrid.265d65a1.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/Cta.4f7d58e9.js","_app/immutable/chunks/PageBanner.fd3ec07b.js"];
const stylesheets = ["_app/immutable/assets/8.8c00df13.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryGrid.518a049b.css","_app/immutable/assets/Cta.7f0933f9.css","_app/immutable/assets/PageBanner.dd9cb63b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-dc0f9554.js.map
