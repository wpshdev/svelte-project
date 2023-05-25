import e from 'axios';
import { l } from './redis-6a4ecee3.js';
import 'ioredis';

const c=e.create();c.interceptors.request.use(async e=>{const a=await l.get(e.url);return a&&(e.adapter=()=>Promise.resolve({data:JSON.parse(a),status:200,statusText:"OK",headers:{},config:e,request:null,fromCache:!0})),e});c.interceptors.response.use(async e=>(await l.set(e.config.url,JSON.stringify(e.data),"EX",3600),e));async function d(){const e="https://strapi.ulfbuilt.com:1337/api/home-page?populate=deep,3",a={rel:"preconnect",Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"},t=await c.get(e,{headers:a});return console.log(t),t.fromCache?console.log("Response from cache"):console.log("Response from server"),t.data}

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: d
});

const index = 8;
const component = async () => (await import('./_page.svelte-fd5743df.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/8.6d3f43a3.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/Animate.ace3595e.js","_app/immutable/chunks/Row.a94cf37a.js","_app/immutable/chunks/MasonryGrid.92a2763b.js","_app/immutable/chunks/axios.4a70c6fc.js","_app/immutable/chunks/Cta.97eb0c2c.js","_app/immutable/chunks/PageBanner.d9e175c9.js"];
const stylesheets = ["_app/immutable/assets/8.12df6aa7.css","_app/immutable/assets/Row.60614438.css","_app/immutable/assets/MasonryGrid.b993d371.css","_app/immutable/assets/Cta.6e243a44.css","_app/immutable/assets/PageBanner.99b5f765.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-65a66640.js.map
