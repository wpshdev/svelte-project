import{S as H,i as M,s as U,k as p,a as v,w as b,V,l as $,h as i,c as E,m as h,x as k,n as d,p as C,C as S,b as _,y as w,f as y,t as B,z as T,q as z,r as A,B as q}from"../../../../chunks/index-873074d4.js";import{C as I}from"../../../../chunks/Container-0c3ca976.js";/* empty css                                                                 */function D(o){let e,s;return{c(){e=p("h1"),s=z(o[1]),this.h()},l(a){e=$(a,"H1",{class:!0});var n=h(e);s=A(n,o[1]),n.forEach(i),this.h()},h(){d(e,"class","svelte-1f56rvk")},m(a,n){_(a,e,n),S(e,s)},p:q,d(a){a&&i(e)}}}function F(o){let e;return{c(){e=p("div"),this.h()},l(s){e=$(s,"DIV",{class:!0});var a=h(e);a.forEach(i),this.h()},h(){d(e,"class","two-columns")},m(s,a){_(s,e,a),e.innerHTML=o[2]},p:q,d(s){s&&i(e)}}}function N(o){let e,s,a,n,l,u,c,m;return document.title=e=o[1]+" - Blog",l=new I({props:{$$slots:{default:[D]},$$scope:{ctx:o}}}),c=new I({props:{class:"py-5",$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){s=p("meta"),a=v(),n=p("section"),b(l.$$.fragment),u=v(),b(c.$$.fragment),this.h()},l(t){const r=V("svelte-1i4el01",document.head);s=$(r,"META",{name:!0,content:!0}),r.forEach(i),a=E(t),n=$(t,"SECTION",{class:!0,style:!0});var f=h(n);k(l.$$.fragment,f),f.forEach(i),u=E(t),k(c.$$.fragment,t),this.h()},h(){d(s,"name","description"),d(s,"content","ULF BUILT"),d(n,"class","blog-1 text-center svelte-1f56rvk"),C(n,"background-image","url("+L+o[0].data[0].attributes.featuredimage.data.attributes.url+")")},m(t,r){S(document.head,s),_(t,a,r),_(t,n,r),w(l,n,null),_(t,u,r),w(c,t,r),m=!0},p(t,[r]){(!m||r&2)&&e!==(e=t[1]+" - Blog")&&(document.title=e);const f={};r&8&&(f.$$scope={dirty:r,ctx:t}),l.$set(f),(!m||r&1)&&C(n,"background-image","url("+L+t[0].data[0].attributes.featuredimage.data.attributes.url+")");const g={};r&8&&(g.$$scope={dirty:r,ctx:t}),c.$set(g)},i(t){m||(y(l.$$.fragment,t),y(c.$$.fragment,t),m=!0)},o(t){B(l.$$.fragment,t),B(c.$$.fragment,t),m=!1},d(t){i(s),t&&i(a),t&&i(n),T(l),t&&i(u),T(c,t)}}}const L="https://strapi.ulfbuilt.com:1337";function O(o,e,s){let{data:a}=e,n=a.data[0].attributes.title,l=a.data[0].attributes.blogtext;return o.$$set=u=>{"data"in u&&s(0,a=u.data)},[a,n,l]}class G extends H{constructor(e){super(),M(this,e,O,N,U,{data:0})}}export{G as default};
//# sourceMappingURL=_page.svelte-e1b8ebed.js.map
