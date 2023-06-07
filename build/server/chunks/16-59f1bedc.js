import { e } from './axios-e3741e97.js';
import { a } from './private-f2b600c9.js';
import 'axios';
import './redis-6a4ecee3.js';
import 'ioredis';

async function p(t){const e$1="https://strapi.ulfbuilt.com:1337/api/team-members?filters[slug][$eq]="+t.params.slug+"&populate=deep",s={Authorization:"Bearer "+a};return (await e.get(e$1,{headers:s})).data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: p
});

const index = 16;
const component = async () => (await import('./_page.svelte-30501af0.js')).default;
const file = '_app/immutable/entry/our-team-_slug_-page.svelte.5061bcdc.js';
const server_id = "src/routes/our-team/[slug]/+page.server.ts";
const imports = ["_app/immutable/entry/our-team-_slug_-page.svelte.5061bcdc.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/Row.08878f7c.js"];
const stylesheets = ["_app/immutable/assets/_page.575a98cb.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-59f1bedc.js.map
