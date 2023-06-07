import o from 'axios';
import { a } from './private-f2b600c9.js';

async function i(){const t="https://strapi.ulfbuilt.com:1337/api/menus/1?nested&populate=*",r={Authorization:"Bearer "+a};try{return (await o.get(t,{headers:r})).data}catch(o){console.log(o);}}

var _layout_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: i
});

const index = 0;
const component = async () => (await import('./_layout.svelte-ad711f95.js')).default;
const file = '_app/immutable/entry/_layout.svelte.e89cfac6.js';
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/entry/_layout.svelte.e89cfac6.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/index.55824f8b.js","_app/immutable/chunks/Row.08878f7c.js","_app/immutable/chunks/axios.aba6f0e0.js","_app/immutable/chunks/Animate.415ab3dc.js","_app/immutable/chunks/singletons.56c7a29b.js","_app/immutable/chunks/Button.55b0fd81.js","_app/immutable/chunks/stores.782ed102.js"];
const stylesheets = ["_app/immutable/assets/_layout.98f02a6b.css","_app/immutable/assets/Row.60614438.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-1d0b5615.js.map
