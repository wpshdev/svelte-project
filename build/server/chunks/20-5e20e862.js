import e from 'axios';

async function h(r){const s="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[slug][$eq]="+r.params.slug+"&populate=deep,3",t={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"},o=await e.get(s,{headers:t});let a=o.data.data[0].attributes.categories.data;a=a[Math.floor(Math.random()*a.length)].id;const c="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+a+"&populate=deep,3",e$1=await e.get(c,{headers:t}),f=i(e$1.data.data,2);return console.log(e$1.data.data.length),{portfolio:o.data,rPortfolios:f};function i(l,n){return [...l].sort(()=>.5-Math.random()).slice(0,n)}}

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: h
});

const index = 20;
const component = async () => (await import('./_page.svelte-4dbcfb6b.js')).default;
const universal_id = "src/routes/portfolio/[slug]/+page.ts";
const imports = ["_app/immutable/nodes/20.8e541ac9.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/Button.03765891.js","_app/immutable/chunks/Row.a94cf37a.js","_app/immutable/chunks/Input.cdf9b620.js","_app/immutable/chunks/_commonjsHelpers.87174ba5.js"];
const stylesheets = ["_app/immutable/assets/20.69c78356.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=20-5e20e862.js.map
