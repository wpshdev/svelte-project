async function c(){return (await fetch("https://strapi.ulfbuilt.com:1337/api/about-us?populate=*",{headers:{Authorization:"bearer  ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"}})).json()}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: c
});

const index = 9;
const component = async () => (await import('./_page.svelte-d7387836.js')).default;
const server_id = "src/routes/about-us/+page.server.ts";
const imports = ["_app/immutable/nodes/9.3272a2f1.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/Row.a94cf37a.js"];
const stylesheets = ["_app/immutable/assets/9.e1f68bee.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-3cec46ba.js.map