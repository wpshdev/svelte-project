import { a } from './private-f2b600c9.js';

async function s(){return (await fetch("https://strapi.ulfbuilt.com:1337/api/our-services-page?populate=*",{headers:{Authorization:"bearer "+a}})).json()}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: s
});

const index = 22;
const component = async () => (await import('./_page.svelte-bdd2ab80.js')).default;
const file = '_app/immutable/entry/services-page.svelte.42048f5b.js';
const server_id = "src/routes/services/+page.server.ts";
const imports = ["_app/immutable/entry/services-page.svelte.42048f5b.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/Cta.15a9dcc8.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/PageBanner.0df617d5.js"];
const stylesheets = ["_app/immutable/assets/_page.26c1e54e.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/Cta.fccf1b3b.css","_app/immutable/assets/PageBanner.4581ec8f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=22-544c5b54.js.map
