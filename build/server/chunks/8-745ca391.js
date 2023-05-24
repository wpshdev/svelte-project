import e from 'axios';

async function b(){const e$1="https://strapi.ulfbuilt.com:1337/api/home-page?populate=deep,3",c={rel:"preconnect",Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"},a=await e.get(e$1,{headers:c});return console.log(a),a.data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: b
});

const index = 8;
const component = async () => (await import('./_page.svelte-2b8fed47.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/8.77696473.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/index.af9a3958.js","_app/immutable/chunks/Row.a94cf37a.js","_app/immutable/chunks/Animate.85fd4c09.js","_app/immutable/chunks/MasonryGrid.92a2763b.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/Cta.97eb0c2c.js","_app/immutable/chunks/PageBanner.aeff15be.js"];
const stylesheets = ["_app/immutable/assets/8.12df6aa7.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryGrid.b993d371.css","_app/immutable/assets/Cta.6e243a44.css","_app/immutable/assets/PageBanner.99b5f765.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-745ca391.js.map
