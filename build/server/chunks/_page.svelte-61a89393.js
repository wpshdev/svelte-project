import { L } from './index-87618b6e.js';
import t from 'ioredis';

const s=new t({host:"localhost",port:6379});s.flushdb(function(r,o){console.log(o);});s.flushall(function(r,o){console.log(o);});const a=L((r,o,c,f)=>(s.flushdb(function(n,l){console.log(l);}),s.flushall(function(n,l){console.log(l);}),""));

export { a as default };
//# sourceMappingURL=_page.svelte-61a89393.js.map
