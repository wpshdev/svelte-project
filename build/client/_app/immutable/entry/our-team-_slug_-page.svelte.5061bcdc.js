import{S as H,i as M,s as N,k as $,a as b,z as E,aa as R,l as _,h as i,c as w,m as p,A as C,p as h,$ as u,b as g,B as I,g as S,d as T,C as A,r as P,u as V,n as q,q as U}from"../chunks/index.b4b99831.js";import{C as k,R as z,a as j}from"../chunks/Row.08878f7c.js";function F(l){let e,s,a=l[0].name+"",n,t,o,r=l[0].position+"",c,m,d,y=l[0].content+"";return{c(){e=$("div"),s=$("h1"),n=P(a),t=b(),o=$("span"),c=P(r),m=b(),d=$("div"),this.h()},l(v){e=_(v,"DIV",{class:!0});var f=p(e);s=_(f,"H1",{});var D=p(s);n=V(D,a),D.forEach(i),t=w(f),o=_(f,"SPAN",{});var L=p(o);c=V(L,r),L.forEach(i),m=w(f),d=_(f,"DIV",{class:!0});var B=p(d);B.forEach(i),f.forEach(i),this.h()},h(){h(d,"class","member__info__content"),h(e,"class","member__info svelte-1gmjfxb")},m(v,f){g(v,e,f),u(e,s),u(s,n),u(e,t),u(e,o),u(o,c),u(e,m),u(e,d),d.innerHTML=y},p:q,d(v){v&&i(e)}}}function O(l){let e;return{c(){e=$("div"),this.h()},l(s){e=_(s,"DIV",{class:!0,style:!0});var a=p(e);a.forEach(i),this.h()},h(){h(e,"class","member__img svelte-1gmjfxb"),U(e,"--banner","url("+K+"/"+l[0].memberPhoto.data.attributes.formats.large.url+")")},m(s,a){g(s,e,a)},p:q,d(s){s&&i(e)}}}function x(l){let e,s,a,n;return e=new j({props:{$$slots:{default:[F]},$$scope:{ctx:l}}}),a=new j({props:{$$slots:{default:[O]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment),s=b(),E(a.$$.fragment)},l(t){C(e.$$.fragment,t),s=w(t),C(a.$$.fragment,t)},m(t,o){I(e,t,o),g(t,s,o),I(a,t,o),n=!0},p(t,o){const r={};o&4&&(r.$$scope={dirty:o,ctx:t}),e.$set(r);const c={};o&4&&(c.$$scope={dirty:o,ctx:t}),a.$set(c)},i(t){n||(S(e.$$.fragment,t),S(a.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),T(a.$$.fragment,t),n=!1},d(t){A(e,t),t&&i(s),A(a,t)}}}function G(l){let e,s;return e=new z({props:{$$slots:{default:[x]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){I(e,a,n),s=!0},p(a,n){const t={};n&4&&(t.$$scope={dirty:n,ctx:a}),e.$set(t)},i(a){s||(S(e.$$.fragment,a),s=!0)},o(a){T(e.$$.fragment,a),s=!1},d(a){A(e,a)}}}function J(l){let e,s,a,n,t,o;return document.title=e=l[0].name,t=new k({props:{fluid:!0,$$slots:{default:[G]},$$scope:{ctx:l}}}),{c(){s=$("meta"),a=b(),n=$("section"),E(t.$$.fragment),this.h()},l(r){const c=R("svelte-o3yhl9",document.head);s=_(c,"META",{name:!0,content:!0}),c.forEach(i),a=w(r),n=_(r,"SECTION",{class:!0});var m=p(n);C(t.$$.fragment,m),m.forEach(i),this.h()},h(){h(s,"name","description"),h(s,"content","ULF BUILT"),h(n,"class","member")},m(r,c){u(document.head,s),g(r,a,c),g(r,n,c),I(t,n,null),o=!0},p(r,[c]){(!o||c&1)&&e!==(e=r[0].name)&&(document.title=e);const m={};c&4&&(m.$$scope={dirty:c,ctx:r}),t.$set(m)},i(r){o||(S(t.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),o=!1},d(r){i(s),r&&i(a),r&&i(n),A(t)}}}let K="https://strapi.ulfbuilt.com:1337";function Q(l,e,s){let{data:a}=e,n=a.data[0].attributes;return console.log(a),l.$$set=t=>{"data"in t&&s(1,a=t.data)},[n,a]}class Y extends H{constructor(e){super(),M(this,e,Q,J,N,{data:1})}}export{Y as default};
//# sourceMappingURL=our-team-_slug_-page.svelte.5061bcdc.js.map