import e from 'axios';

async function o(){const a="https://strapi.ulfbuilt.com:1337/api/our-process?populate=deep,2",e$1={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"};return (await e.get(a,{headers:e$1})).data}

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: o
});

const index = 14;
const component = async () => (await import('./_page.svelte-4e32645b.js')).default;
const universal_id = "src/routes/our-process/+page.ts";
const imports = ["_app/immutable/nodes/14.df592d15.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/Cta.97eb0c2c.js","_app/immutable/chunks/Row.a94cf37a.js","_app/immutable/chunks/PageBanner.d9e175c9.js","_app/immutable/chunks/Animate.ace3595e.js"];
const stylesheets = ["_app/immutable/assets/14.60497e89.css","_app/immutable/assets/Cta.6e243a44.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/PageBanner.99b5f765.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=14-4fffd2b4.js.map
