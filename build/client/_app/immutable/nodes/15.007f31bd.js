import{S as le,i as ne,s as oe,N as W,k as E,l as I,P as x,ab as y,b as p,F as fe,R as ue,a9 as X,a0 as B,h as m,M as ee,o as ce,O as te,w as me,a as O,y as P,aa as ie,c as q,z,m as H,n as b,_ as C,A as M,g as S,d as T,B as N,q as k,r as D,e as se,v as $e,f as _e,a5 as he,p as pe}from"../chunks/index.d0f96b4d.js";import{C as K,R as Q,a as j}from"../chunks/Row.8ec63af8.js";import{A as J}from"../chunks/Animate.c085a481.js";import{P as ge}from"../chunks/PageBanner.fd3ec07b.js";import{C as de}from"../chunks/Contactform.c801e860.js";function be(n){let e,a,t,s,r,o=[{src:a=n[2]},{alt:n[0]},n[6],{class:t="svelte-lazy-image "+n[4]}],f={};for(let l=0;l<o.length;l+=1)f=W(f,o[l]);return{c(){e=E("img"),this.h()},l(l){e=I(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){x(e,f),y(e,"svelte-lazy-image--loaded",n[3])},m(l,i){p(l,e,i),n[11](e),s||(r=fe(e,"load",n[5]),s=!0)},p(l,[i]){x(e,f=ue(o,[i&4&&!X(e.src,a=l[2])&&{src:a},i&1&&{alt:l[0]},i&64&&l[6],i&16&&t!==(t="svelte-lazy-image "+l[4])&&{class:t}])),y(e,"svelte-lazy-image--loaded",l[3])},i:B,o:B,d(l){l&&m(e),n[11](null),s=!1,r()}}}function ve(n,e,a){let t;const s=["placeholder","src","alt","options"];let r=ee(e,s),{placeholder:o}=e,{src:f}=e,{alt:l}=e,{options:i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0}}=e,d,$,c,_=!1,v=!1;ce(()=>(c=new IntersectionObserver((g,L)=>{g.forEach(u=>{u.isIntersecting&&(a(10,_=!0),L.unobserve(d))})},i),c.observe(d),()=>{c&&c.unobserve(d)}));function w(){!v&&$===f&&a(3,v=!0)}function A(g){me[g?"unshift":"push"](()=>{d=g,a(1,d)})}return n.$$set=g=>{a(13,e=W(W({},e),te(g))),a(6,r=ee(e,s)),"placeholder"in g&&a(7,o=g.placeholder),"src"in g&&a(8,f=g.src),"alt"in g&&a(0,l=g.alt),"options"in g&&a(9,i=g.options)},n.$$.update=()=>{n.$$.dirty&1408&&a(2,$=_?f:o),a(4,t=e.class||"")},e=te(e),[l,d,$,v,t,w,r,o,f,i,_,A]}class we extends le{constructor(e){super(),ne(this,e,ve,be,oe,{placeholder:7,src:8,alt:0,options:9})}}function ae(n,e,a){const t=n.slice();return t[2]=e[a],t}function Ee(n){let e,a=n[1].SecondSectionTitle+"",t,s,r,o=n[1].content+"",f,l,i,d;return i=new we({props:{src:""+(G+n[1].SecondSectionImage.data.attributes.formats.large.url),placeholder:""+(G+n[1].SecondSectionImage.data.attributes.formats.small.url),alt:"Team Philosophy"}}),{c(){e=E("h2"),t=k(a),s=O(),r=E("p"),f=O(),l=E("div"),P(i.$$.fragment),this.h()},l($){e=I($,"H2",{class:!0});var c=H(e);t=D(c,a),c.forEach(m),s=q($),r=I($,"P",{class:!0});var _=H(r);_.forEach(m),f=q($),l=I($,"DIV",{});var v=H(l);z(i.$$.fragment,v),v.forEach(m),this.h()},h(){b(e,"class","stc pb-4 text-center"),b(r,"class","two-columns")},m($,c){p($,e,c),C(e,t),p($,s,c),p($,r,c),r.innerHTML=o,p($,f,c),p($,l,c),M(i,l,null),d=!0},p:B,i($){d||(S(i.$$.fragment,$),d=!0)},o($){T(i.$$.fragment,$),d=!1},d($){$&&m(e),$&&m(s),$&&m(r),$&&m(f),$&&m(l),N(i)}}}function Ie(n){let e,a;return e=new j({props:{md:"10",class:"mx-auto",$$slots:{default:[Ee]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Se(n){let e,a;return e=new Q({props:{$$slots:{default:[Ie]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Te(n){let e,a;return e=new K({props:{$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Ce(n){let e,a,t,s,r,o=n[1].team_member_owner.data.attributes.name+"",f,l,i,d=n[1].team_member_owner.data.attributes.position+"",$;return{c(){e=E("img"),t=O(),s=E("div"),r=E("h3"),f=k(o),l=O(),i=E("h4"),$=k(d),this.h()},l(c){e=I(c,"IMG",{alt:!0,src:!0}),t=q(c),s=I(c,"DIV",{class:!0});var _=H(s);r=I(_,"H3",{class:!0});var v=H(r);f=D(v,o),v.forEach(m),l=q(_),i=I(_,"H4",{class:!0});var w=H(i);$=D(w,d),w.forEach(m),_.forEach(m),this.h()},h(){b(e,"alt",n[1].team_member_owner.data.attributes.name),X(e.src,a=""+(G+n[1].team_member_owner.data.attributes.memberPhoto.data.attributes.formats.large.url))||b(e,"src",a),b(r,"class","pfont svelte-1hhmb2x"),b(i,"class","pfont svelte-1hhmb2x"),b(s,"class","tm-box wtc svelte-1hhmb2x")},m(c,_){p(c,e,_),p(c,t,_),p(c,s,_),C(s,r),C(r,f),C(s,l),C(s,i),C(i,$)},p:B,d(c){c&&m(e),c&&m(t),c&&m(s)}}}function He(n){let e,a,t=n[1].ownerquote+"";return{c(){e=E("div"),a=E("h3"),this.h()},l(s){e=I(s,"DIV",{class:!0});var r=H(e);a=I(r,"H3",{class:!0});var o=H(a);o.forEach(m),r.forEach(m),this.h()},h(){b(a,"class","stc line-height-2 text-center svelte-1hhmb2x"),b(e,"class","owner-quote svelte-1hhmb2x")},m(s,r){p(s,e,r),C(e,a),a.innerHTML=t},p:B,d(s){s&&m(e)}}}function Pe(n){let e,a,t,s;return e=new j({props:{md:"6",class:"tm-img",$$slots:{default:[Ce]},$$scope:{ctx:n}}}),t=new j({props:{md:"6",class:"owner-quote-container",$$slots:{default:[He]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment),a=O(),P(t.$$.fragment)},l(r){z(e.$$.fragment,r),a=q(r),z(t.$$.fragment,r)},m(r,o){M(e,r,o),p(r,a,o),M(t,r,o),s=!0},p(r,o){const f={};o&32&&(f.$$scope={dirty:o,ctx:r}),e.$set(f);const l={};o&32&&(l.$$scope={dirty:o,ctx:r}),t.$set(l)},i(r){s||(S(e.$$.fragment,r),S(t.$$.fragment,r),s=!0)},o(r){T(e.$$.fragment,r),T(t.$$.fragment,r),s=!1},d(r){N(e,r),r&&m(a),N(t,r)}}}function ze(n){let e,a;return e=new Q({props:{noGutters:!0,$$slots:{default:[Pe]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Me(n){let e,a;return e=new K({props:{$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Ne(n){let e,a,t,s,r,o,f,l=n[2].attributes.name+"",i,d,$,c=n[2].attributes.position+"",_,v;return{c(){e=E("a"),a=E("div"),t=E("img"),r=O(),o=E("div"),f=E("h5"),i=k(l),d=O(),$=E("span"),_=k(c),v=O(),this.h()},l(w){e=I(w,"A",{href:!0});var A=H(e);a=I(A,"DIV",{class:!0});var g=H(a);t=I(g,"IMG",{src:!0,alt:!0}),r=q(g),o=I(g,"DIV",{class:!0,style:!0});var L=H(o);f=I(L,"H5",{class:!0});var u=H(f);i=D(u,l),u.forEach(m),d=q(L),$=I(L,"SPAN",{class:!0});var h=H($);_=D(h,c),h.forEach(m),L.forEach(m),g.forEach(m),A.forEach(m),v=q(w),this.h()},h(){X(t.src,s=""+(G+n[2].attributes.memberPhoto.data.attributes.url))||b(t,"src",s),b(t,"alt","member"),b(f,"class","pfont"),b($,"class","pfont gtc"),b(o,"class","tm-box wtc px-5 py-3 svelte-1hhmb2x"),pe(o,"bottom","1rem"),b(a,"class","our-team__member svelte-1hhmb2x"),b(e,"href","/our-team/"+n[2].attributes.slug)},m(w,A){p(w,e,A),C(e,a),C(a,t),C(a,r),C(a,o),C(o,f),C(f,i),C(o,d),C(o,$),C($,_),p(w,v,A)},p:B,d(w){w&&m(e),w&&m(v)}}}function re(n){let e,a;return e=new j({props:{md:"6",$$slots:{default:[Ne]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Oe(n){let e,a,t=n[1].team_members.data,s=[];for(let o=0;o<t.length;o+=1)s[o]=re(ae(n,t,o));const r=o=>T(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=se()},l(o){for(let f=0;f<s.length;f+=1)s[f].l(o);e=se()},m(o,f){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(o,f);p(o,e,f),a=!0},p(o,f){if(f&2){t=o[1].team_members.data;let l;for(l=0;l<t.length;l+=1){const i=ae(o,t,l);s[l]?(s[l].p(i,f),S(s[l],1)):(s[l]=re(i),s[l].c(),S(s[l],1),s[l].m(e.parentNode,e))}for($e(),l=t.length;l<s.length;l+=1)r(l);_e()}},i(o){if(!a){for(let f=0;f<t.length;f+=1)S(s[f]);a=!0}},o(o){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)T(s[f]);a=!1},d(o){he(s,o),o&&m(e)}}}function qe(n){let e,a;return e=new Q({props:{$$slots:{default:[Oe]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Ae(n){let e,a=n[1].title+"",t,s,r,o;return r=new j({props:{md:{size:8,offset:2},$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){e=E("h2"),t=k(a),s=O(),P(r.$$.fragment),this.h()},l(f){e=I(f,"H2",{class:!0});var l=H(e);t=D(l,a),l.forEach(m),s=q(f),z(r.$$.fragment,f),this.h()},h(){b(e,"class","sfont stc mb-5 text-center")},m(f,l){p(f,e,l),C(e,t),p(f,s,l),M(r,f,l),o=!0},p(f,l){const i={};l&32&&(i.$$scope={dirty:l,ctx:f}),r.$set(i)},i(f){o||(S(r.$$.fragment,f),o=!0)},o(f){T(r.$$.fragment,f),o=!1},d(f){f&&m(e),f&&m(s),N(r,f)}}}function Le(n){let e,a;return e=new Q({props:{$$slots:{default:[Ae]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function ke(n){let e,a=n[1].para2+"",t,s,r,o=n[1].para3+"",f,l,i,d=n[1].team_member_owner.data.attributes.name+"",$;return{c(){e=E("h4"),t=k(a),s=O(),r=E("h4"),f=k(o),l=O(),i=E("h4"),$=k(d),this.h()},l(c){e=I(c,"H4",{class:!0});var _=H(e);t=D(_,a),_.forEach(m),s=q(c),r=I(c,"H4",{class:!0});var v=H(r);f=D(v,o),v.forEach(m),l=q(c),i=I(c,"H4",{class:!0});var w=H(i);$=D(w,d),w.forEach(m),this.h()},h(){b(e,"class","svelte-1hhmb2x"),b(r,"class","svelte-1hhmb2x"),b(i,"class","svelte-1hhmb2x")},m(c,_){p(c,e,_),C(e,t),p(c,s,_),p(c,r,_),C(r,f),p(c,l,_),p(c,i,_),C(i,$)},p:B,d(c){c&&m(e),c&&m(s),c&&m(r),c&&m(l),c&&m(i)}}}function De(n){let e,a;return e=new K({props:{$$slots:{default:[ke]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Ve(n){let e,a;return e=new de({}),{c(){P(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,s){M(e,t,s),a=!0},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function Be(n){let e,a,t,s,r,o,f,l,i,d,$,c,_,v,w,A,g,L;return t=new ge({props:{title:n[0].data.attributes.title,subTitle:n[0].data.attributes.Subheading,banner:""+(G+n[0].data.attributes.Cover.data.attributes.formats.large.url)}}),o=new J({props:{$$slots:{default:[Te]},$$scope:{ctx:n}}}),i=new J({props:{$$slots:{default:[Me]},$$scope:{ctx:n}}}),c=new K({props:{$$slots:{default:[Le]},$$scope:{ctx:n}}}),w=new J({props:{$$slots:{default:[De]},$$scope:{ctx:n}}}),g=new J({props:{$$slots:{default:[Ve]},$$scope:{ctx:n}}}),{c(){e=E("meta"),a=O(),P(t.$$.fragment),s=O(),r=E("section"),P(o.$$.fragment),f=O(),l=E("section"),P(i.$$.fragment),d=O(),$=E("section"),P(c.$$.fragment),_=O(),v=E("section"),P(w.$$.fragment),A=O(),P(g.$$.fragment),this.h()},l(u){const h=ie("svelte-1gs2fsz",document.head);e=I(h,"META",{name:!0,content:!0}),h.forEach(m),a=q(u),z(t.$$.fragment,u),s=q(u),r=I(u,"SECTION",{class:!0});var V=H(r);z(o.$$.fragment,V),V.forEach(m),f=q(u),l=I(u,"SECTION",{class:!0});var R=H(l);z(i.$$.fragment,R),R.forEach(m),d=q(u),$=I(u,"SECTION",{class:!0});var F=H($);z(c.$$.fragment,F),F.forEach(m),_=q(u),v=I(u,"SECTION",{class:!0});var U=H(v);z(w.$$.fragment,U),U.forEach(m),A=q(u),z(g.$$.fragment,u),this.h()},h(){document.title="Our Team",b(e,"name","description"),b(e,"content","ULF BUILT"),b(r,"class","our-team svelte-1hhmb2x"),b(l,"class","owner svelte-1hhmb2x"),b($,"class","team-members svelte-1hhmb2x"),b(v,"class","ourteam5 svelte-1hhmb2x")},m(u,h){C(document.head,e),p(u,a,h),M(t,u,h),p(u,s,h),p(u,r,h),M(o,r,null),p(u,f,h),p(u,l,h),M(i,l,null),p(u,d,h),p(u,$,h),M(c,$,null),p(u,_,h),p(u,v,h),M(w,v,null),p(u,A,h),M(g,u,h),L=!0},p(u,[h]){const V={};h&1&&(V.title=u[0].data.attributes.title),h&1&&(V.subTitle=u[0].data.attributes.Subheading),h&1&&(V.banner=""+(G+u[0].data.attributes.Cover.data.attributes.formats.large.url)),t.$set(V);const R={};h&32&&(R.$$scope={dirty:h,ctx:u}),o.$set(R);const F={};h&32&&(F.$$scope={dirty:h,ctx:u}),i.$set(F);const U={};h&32&&(U.$$scope={dirty:h,ctx:u}),c.$set(U);const Y={};h&32&&(Y.$$scope={dirty:h,ctx:u}),w.$set(Y);const Z={};h&32&&(Z.$$scope={dirty:h,ctx:u}),g.$set(Z)},i(u){L||(S(t.$$.fragment,u),S(o.$$.fragment,u),S(i.$$.fragment,u),S(c.$$.fragment,u),S(w.$$.fragment,u),S(g.$$.fragment,u),L=!0)},o(u){T(t.$$.fragment,u),T(o.$$.fragment,u),T(i.$$.fragment,u),T(c.$$.fragment,u),T(w.$$.fragment,u),T(g.$$.fragment,u),L=!1},d(u){m(e),u&&m(a),N(t,u),u&&m(s),u&&m(r),N(o),u&&m(f),u&&m(l),N(i),u&&m(d),u&&m($),N(c),u&&m(_),u&&m(v),N(w),u&&m(A),N(g,u)}}}let G="https://strapi.ulfbuilt.com:1337";function Ge(n,e,a){let{data:t}=e,s=t.data.attributes;return console.log(s),n.$$set=r=>{"data"in r&&a(0,t=r.data)},[t,s]}class Ke extends le{constructor(e){super(),ne(this,e,Ge,Be,oe,{data:0})}}export{Ke as component};
//# sourceMappingURL=15.007f31bd.js.map