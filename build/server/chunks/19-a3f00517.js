import e from 'axios';

async function t(){const a="https://strapi.ulfbuilt.com:1337/api/portfolio-page?populate=deep,5",e$1={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};return {portfolio:(await e.get(a,{headers:e$1})).data}}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: t
});

const index = 19;
const component = async () => (await import('./_page.svelte-f1b29326.js')).default;
const server_id = "src/routes/portfolio/+page.server.ts";
const imports = ["_app/immutable/nodes/19.1c1ed70c.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/Row.a94cf37a.js","_app/immutable/chunks/index.af9a3958.js","_app/immutable/chunks/MasonryGrid.92a2763b.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/Cta.97eb0c2c.js","_app/immutable/chunks/PageBanner.aeff15be.js","_app/immutable/chunks/Animate.85fd4c09.js"];
const stylesheets = ["_app/immutable/assets/19.19f029fe.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryGrid.b993d371.css","_app/immutable/assets/Cta.6e243a44.css","_app/immutable/assets/PageBanner.99b5f765.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=19-a3f00517.js.map
