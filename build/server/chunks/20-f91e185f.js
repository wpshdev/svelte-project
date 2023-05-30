import e from 'axios';

async function h(r){const s="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[slug][$eq]="+r.params.slug+"&populate=deep,2",t={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"},o=await e.get(s,{headers:t});let a=o.data.data[0].attributes.categories.data;a=a[Math.floor(Math.random()*a.length)].id;const c="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+a+"&populate=deep,2",e$1=await e.get(c,{headers:t}),f=i(e$1.data.data,2);return console.log(e$1.data.data.length),{portfolio:o.data,rPortfolios:f};function i(l,n){return [...l].sort(()=>.5-Math.random()).slice(0,n)}}

var _page_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: h
});

const index = 20;
const component = async () => (await import('./_page.svelte-28bfe967.js')).default;
const universal_id = "src/routes/portfolio/[slug]/+page.ts";
const imports = ["_app/immutable/nodes/20.e051fd03.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/index.d0f96b4d.js","_app/immutable/chunks/Row.8ec63af8.js","_app/immutable/chunks/Animate.c085a481.js","_app/immutable/chunks/_commonjsHelpers.87174ba5.js","_app/immutable/chunks/Contactform.c801e860.js","_app/immutable/chunks/Button.5819af8e.js","_app/immutable/chunks/Input.fab271ea.js"];
const stylesheets = ["_app/immutable/assets/20.697322b8.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/Contactform.98e8de2c.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=20-f91e185f.js.map
