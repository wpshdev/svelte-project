import o from 'axios';
import { l } from './redis-6a4ecee3.js';

const e=o.create();e.interceptors.request.use(async t=>{const a=await l.get(t.url);return a&&(t.adapter=()=>Promise.resolve({data:JSON.parse(a),status:200,statusText:"OK",headers:{},config:t,request:null,fromCache:!0})),t});e.interceptors.response.use(async t=>(await l.set(t.config.url,JSON.stringify(t.data),"EX",3600),t));

export { e };
//# sourceMappingURL=axios-e3741e97.js.map
