import o from 'axios';
import { a } from './private-f2b600c9.js';

async function n(t){const s="https://strapi.ulfbuilt.com:1337/api/pages?filters[slug][$eq]="+t.params.slug+"&populate=deep",a$1={Authorization:"Bearer "+a};return (await o.get(s,{headers:a$1})).data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: n
});

const index = 18;
const component = async () => (await import('./_page.svelte-6af394eb.js')).default;
const file = '_app/immutable/entry/page-_slug_-page.svelte.84f27cb9.js';
const server_id = "src/routes/page/[slug]/+page.server.ts";
const imports = ["_app/immutable/entry/page-_slug_-page.svelte.84f27cb9.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js"];
const stylesheets = ["_app/immutable/assets/_page.3faf3e8a.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=18-7a724054.js.map
