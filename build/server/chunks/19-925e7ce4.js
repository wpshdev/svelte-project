import { e } from './axios-70231547.js';
import 'axios';
import './redis-6a4ecee3.js';
import 'ioredis';

async function t(){const a="https://strapi.ulfbuilt.com:1337/api/portfolio-page?populate=deep,5",e$1={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};return {portfolio:(await e.get(a,{headers:e$1})).data}}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: t
});

const index = 19;
const component = async () => (await import('./_page.svelte-4772a5fd.js')).default;
const server_id = "src/routes/portfolio/+page.server.ts";
const imports = ["_app/immutable/nodes/19.5e866703.js","_app/immutable/chunks/index.d0f96b4d.js","_app/immutable/chunks/Row.8ec63af8.js","_app/immutable/chunks/index.97123c66.js","_app/immutable/chunks/MasonryGrid.265d65a1.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/Cta.4f7d58e9.js","_app/immutable/chunks/PageBanner.fd3ec07b.js","_app/immutable/chunks/Animate.c085a481.js"];
const stylesheets = ["_app/immutable/assets/19.ff5f0b85.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryGrid.518a049b.css","_app/immutable/assets/Cta.7f0933f9.css","_app/immutable/assets/PageBanner.dd9cb63b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=19-925e7ce4.js.map
