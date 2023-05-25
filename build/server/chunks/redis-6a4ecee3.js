import s from 'ioredis';

const l=new s({host:"localhost",port:6379});l.flushdb(function(r,o){console.log(o);});l.flushall(function(r,o){console.log(o);});

export { l };
//# sourceMappingURL=redis-6a4ecee3.js.map
