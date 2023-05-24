import e from 'axios';

async function o(){const e$1="https://strapi.ulfbuilt.com:1337/api/menus/1?nested&populate=*",c={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};try{return (await e.get(e$1,{headers:c})).data}catch(a){console.log(a);}}

var _layout_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: o
});

const index = 0;
const component = async () => (await import('./_layout.svelte-ddb20ae9.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.f14def15.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/index.af9a3958.js","_app/immutable/chunks/Row.a94cf37a.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/Animate.85fd4c09.js","_app/immutable/chunks/singletons.e1bb1bad.js","_app/immutable/chunks/Button.03765891.js","_app/immutable/chunks/stores.525e994b.js"];
const stylesheets = ["_app/immutable/assets/0.381b1a60.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-ee26692b.js.map
