import{S as U,i as z,s as D,k as g,a as w,w as x,V as F,l as d,h as f,c as v,x as B,n as u,C as m,b,y as C,f as h,t as p,z as E,e as M,g as V,d as j,T as J,q as G,m as L,r as T,B as R,D as K}from"../../../chunks/index-873074d4.js";import{R as N,C as S}from"../../../chunks/Row-02e8fae1.js";import{C as Q}from"../../../chunks/Container-0c3ca976.js";/* empty css                                                              */function O(c,t,l){const e=c.slice();return e[2]=t[l],e}function W(c){let t,l;return{c(){t=g("h1"),l=G("BLOG"),this.h()},l(e){t=d(e,"H1",{class:!0});var a=L(t);l=T(a,"BLOG"),a.forEach(f),this.h()},h(){u(t,"class","text-center")},m(e,a){b(e,t,a),m(t,l)},p:R,d(e){e&&f(t)}}}function X(c){let t,l;return t=new S({props:{md:"12",$$slots:{default:[W]},$$scope:{ctx:c}}}),{c(){x(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),l=!0},p(e,a){const s={};a&32&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){l||(h(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function Y(c){let t,l,e,a,s,r=c[2].attributes.title+"",n,o,i,A=c[2].attributes.shorttext+"",q,k;return{c(){t=g("a"),l=g("img"),a=w(),s=g("h4"),n=G(r),o=w(),i=g("p"),q=G(A),k=w(),this.h()},l(_){t=d(_,"A",{href:!0,class:!0});var $=L(t);l=d($,"IMG",{src:!0,alt:!0,class:!0}),a=v($),s=d($,"H4",{class:!0});var H=L(s);n=T(H,r),H.forEach(f),o=v($),i=d($,"P",{class:!0});var I=L(i);q=T(I,A),I.forEach(f),$.forEach(f),k=v(_),this.h()},h(){K(l.src,e=et+c[2].attributes.featuredimage.data.attributes.formats.small.url)||u(l,"src",e),u(l,"alt","blogtitle"),u(l,"class","w-100"),u(s,"class","text-center"),u(i,"class","text-center"),u(t,"href","/blog/"+c[2].attributes.slug),u(t,"class","text-decoration-none text-black")},m(_,$){b(_,t,$),m(t,l),m(t,a),m(t,s),m(s,n),m(t,o),m(t,i),m(i,q),b(_,k,$)},p:R,d(_){_&&f(t),_&&f(k)}}}function P(c){let t,l;return t=new S({props:{md:"4",$$slots:{default:[Y]},$$scope:{ctx:c}}}),{c(){x(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),l=!0},p(e,a){const s={};a&32&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){l||(h(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function Z(c){let t,l,e=c[0],a=[];for(let r=0;r<e.length;r+=1)a[r]=P(O(c,e,r));const s=r=>p(a[r],1,1,()=>{a[r]=null});return{c(){for(let r=0;r<a.length;r+=1)a[r].c();t=M()},l(r){for(let n=0;n<a.length;n+=1)a[n].l(r);t=M()},m(r,n){for(let o=0;o<a.length;o+=1)a[o].m(r,n);b(r,t,n),l=!0},p(r,n){if(n&1){e=r[0];let o;for(o=0;o<e.length;o+=1){const i=O(r,e,o);a[o]?(a[o].p(i,n),h(a[o],1)):(a[o]=P(i),a[o].c(),h(a[o],1),a[o].m(t.parentNode,t))}for(V(),o=e.length;o<a.length;o+=1)s(o);j()}},i(r){if(!l){for(let n=0;n<e.length;n+=1)h(a[n]);l=!0}},o(r){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)p(a[n]);l=!1},d(r){J(a,r),r&&f(t)}}}function y(c){let t,l,e,a;return t=new N({props:{$$slots:{default:[X]},$$scope:{ctx:c}}}),e=new N({props:{$$slots:{default:[Z]},$$scope:{ctx:c}}}),{c(){x(t.$$.fragment),l=w(),x(e.$$.fragment)},l(s){B(t.$$.fragment,s),l=v(s),B(e.$$.fragment,s)},m(s,r){C(t,s,r),b(s,l,r),C(e,s,r),a=!0},p(s,r){const n={};r&32&&(n.$$scope={dirty:r,ctx:s}),t.$set(n);const o={};r&32&&(o.$$scope={dirty:r,ctx:s}),e.$set(o)},i(s){a||(h(t.$$.fragment,s),h(e.$$.fragment,s),a=!0)},o(s){p(t.$$.fragment,s),p(e.$$.fragment,s),a=!1},d(s){E(t,s),s&&f(l),E(e,s)}}}function tt(c){let t,l,e,a;return e=new Q({props:{$$slots:{default:[y]},$$scope:{ctx:c}}}),{c(){t=g("meta"),l=w(),x(e.$$.fragment),this.h()},l(s){const r=F("svelte-11dxhax",document.head);t=d(r,"META",{name:!0,content:!0}),r.forEach(f),l=v(s),B(e.$$.fragment,s),this.h()},h(){document.title="News/Blogs",u(t,"name","description"),u(t,"content","ULF BUILT")},m(s,r){m(document.head,t),b(s,l,r),C(e,s,r),a=!0},p(s,[r]){const n={};r&32&&(n.$$scope={dirty:r,ctx:s}),e.$set(n)},i(s){a||(h(e.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),a=!1},d(s){f(t),s&&f(l),E(e,s)}}}let et="https://strapi.ulfbuilt.com:1337";function at(c,t,l){let{data:e}=t,a=e.data;return console.log(e),c.$$set=s=>{"data"in s&&l(1,e=s.data)},[a,e]}class ot extends U{constructor(t){super(),z(this,t,at,tt,D,{data:1})}}export{ot as default};
//# sourceMappingURL=_page.svelte-6c0fc021.js.map
