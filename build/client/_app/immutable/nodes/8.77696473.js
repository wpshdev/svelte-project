import{S as ze,i as He,s as Pe,C as G,y as C,a as N,z,c as B,A as H,b as E,F as se,g as y,d as T,B as A,h as u,o as Se,a8 as Qe,k as p,q as F,l as g,m as h,r as K,n as i,_ as m,u as Ze,a5 as Ae,a3 as te,a4 as re,K as xe,a9 as ne,e as $e,v as Te,f as De,a0 as U,T as X,U as at,aa as lt,p as et,a6 as tt,a7 as rt,ab as Me,ac as je}from"../chunks/index.eceac6f7.js";import{f as q,a as Le}from"../chunks/index.af9a3958.js";import{a as Q,C as fe,R as oe}from"../chunks/Row.a94cf37a.js";import{A as ee}from"../chunks/Animate.85fd4c09.js";import{S as nt,A as ot}from"../chunks/MasonryGrid.92a2763b.js";import{C as it}from"../chunks/Cta.97eb0c2c.js";import{P as ct}from"../chunks/PageBanner.aeff15be.js";import{a as ut}from"../chunks/axios.4a70c6fc.js";const{window:st}=Qe;function Ue(n,e,r){const t=n.slice();return t[14]=e[r],t}function Oe(n){let e,r,t,a,s,l,o,c,$,f,d;return{c(){e=p("div"),r=te("svg"),t=te("rect"),a=te("rect"),l=te("text"),o=F("←"),c=te("text"),$=F("→"),this.h()},l(v){e=g(v,"DIV",{class:!0});var b=h(e);r=re(b,"svg",{class:!0,width:!0,height:!0});var k=h(r);t=re(k,"rect",{class:!0,x:!0,y:!0,rx:!0,ry:!0,width:!0,height:!0,fill:!0}),h(t).forEach(u),a=re(k,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0,stroke:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0}),h(a).forEach(u),l=re(k,"text",{class:!0,x:!0,y:!0,"font-size":!0,"text-anchor":!0,"dominant-baseline":!0});var D=h(l);o=K(D,"←"),D.forEach(u),c=re(k,"text",{class:!0,x:!0,y:!0,"font-size":!0,"text-anchor":!0,"dominant-baseline":!0});var I=h(c);$=K(I,"→"),I.forEach(u),k.forEach(u),b.forEach(u),this.h()},h(){i(t,"class","progress-ring__bg"),i(t,"x","2"),i(t,"y","2"),i(t,"rx","25"),i(t,"ry","25"),i(t,"width","106"),i(t,"height","45"),i(t,"fill","white"),i(a,"class","progress-ring__border svelte-9lh9zk"),i(a,"x","2"),i(a,"y","2"),i(a,"width","106"),i(a,"height","45"),i(a,"rx","25"),i(a,"ry","25"),i(a,"fill","transparent"),i(a,"stroke-width","4"),i(a,"stroke","#00ADEE"),i(a,"stroke-dasharray","305"),i(a,"stroke-dashoffset",s=305*(1-n[7]/100)),i(l,"class","progress-ring__arrow progress-ring__arrow--left svelte-9lh9zk"),i(l,"x","27"),i(l,"y","25"),i(l,"font-size","16"),i(l,"text-anchor","middle"),i(l,"dominant-baseline","central"),i(c,"class","progress-ring__arrow progress-ring__arrow--right svelte-9lh9zk"),i(c,"x","82"),i(c,"y","25"),i(c,"font-size","16"),i(c,"text-anchor","middle"),i(c,"dominant-baseline","central"),i(r,"class","progress-ring"),i(r,"width","110"),i(r,"height","49"),i(e,"class","progress-ring-container svelte-9lh9zk")},m(v,b){E(v,e,b),m(e,r),m(r,t),m(r,a),m(r,l),m(l,o),m(r,c),m(c,$),f||(d=[se(l,"click",n[10]),se(c,"click",n[11])],f=!0)},p(v,b){b&128&&s!==(s=305*(1-v[7]/100))&&i(a,"stroke-dashoffset",s)},d(v){v&&u(e),f=!1,xe(d)}}}function ft(n){let e,r,t,a,s,l,o,c=n[5]>767&&Oe(n);return{c(){e=p("div"),r=p("div"),t=p("span"),a=F(n[0]),s=N(),l=p("h2"),o=N(),c&&c.c(),this.h()},l($){e=g($,"DIV",{class:!0});var f=h(e);r=g(f,"DIV",{class:!0});var d=h(r);t=g(d,"SPAN",{class:!0});var v=h(t);a=K(v,n[0]),v.forEach(u),s=B(d),l=g(d,"H2",{});var b=h(l);b.forEach(u),d.forEach(u),o=B(f),c&&c.l(f),f.forEach(u),this.h()},h(){i(t,"class","svelte-9lh9zk"),i(r,"class","slider-caption__heading svelte-9lh9zk"),i(e,"class","slider-caption svelte-9lh9zk")},m($,f){E($,e,f),m(e,r),m(r,t),m(t,a),m(r,s),m(r,l),l.innerHTML=n[1],m(e,o),c&&c.m(e,null)},p($,f){f&1&&Ze(a,$[0]),f&2&&(l.innerHTML=$[1]),$[5]>767?c?c.p($,f):(c=Oe($),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d($){$&&u(e),c&&c.d()}}}function Ge(n){let e,r,t,a,s;return{c(){e=p("div"),r=p("img"),s=N(),this.h()},l(l){e=g(l,"DIV",{class:!0});var o=h(e);r=g(o,"IMG",{src:!0,alt:!0,class:!0}),s=B(o),o.forEach(u),this.h()},h(){ne(r.src,t=""+(We+n[14].attributes.featuredImage.data.attributes.url))||i(r,"src",t),i(r,"alt",a=n[14].attributes.featuredImage.data.attributes.alternativeText),i(r,"class","svelte-9lh9zk"),i(e,"class","slider-container__carousel-cell svelte-9lh9zk")},m(l,o){E(l,e,o),m(e,r),m(e,s)},p(l,o){o&16&&!ne(r.src,t=""+(We+l[14].attributes.featuredImage.data.attributes.url))&&i(r,"src",t),o&16&&a!==(a=l[14].attributes.featuredImage.data.attributes.alternativeText)&&i(r,"alt",a)},d(l){l&&u(e)}}}function Re(n){let e,r,t,a,s,l,o,c,$,f,d,v;return{c(){e=p("div"),r=p("div"),t=te("svg"),a=te("rect"),s=te("rect"),o=te("text"),c=F("←"),$=te("text"),f=F("→"),this.h()},l(b){e=g(b,"DIV",{class:!0});var k=h(e);r=g(k,"DIV",{class:!0});var D=h(r);t=re(D,"svg",{class:!0,width:!0,height:!0});var I=h(t);a=re(I,"rect",{class:!0,x:!0,y:!0,rx:!0,ry:!0,width:!0,height:!0,fill:!0}),h(a).forEach(u),s=re(I,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0,stroke:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0}),h(s).forEach(u),o=re(I,"text",{class:!0,x:!0,y:!0,"font-size":!0,"text-anchor":!0,"dominant-baseline":!0});var P=h(o);c=K(P,"←"),P.forEach(u),$=re(I,"text",{class:!0,x:!0,y:!0,"font-size":!0,"text-anchor":!0,"dominant-baseline":!0});var w=h($);f=K(w,"→"),w.forEach(u),I.forEach(u),D.forEach(u),k.forEach(u),this.h()},h(){i(a,"class","progress-ring__bg"),i(a,"x","2"),i(a,"y","2"),i(a,"rx","25"),i(a,"ry","25"),i(a,"width","106"),i(a,"height","45"),i(a,"fill","white"),i(s,"class","progress-ring__border svelte-9lh9zk"),i(s,"x","2"),i(s,"y","2"),i(s,"width","106"),i(s,"height","45"),i(s,"rx","25"),i(s,"ry","25"),i(s,"fill","transparent"),i(s,"stroke-width","4"),i(s,"stroke","#00ADEE"),i(s,"stroke-dasharray","305"),i(s,"stroke-dashoffset",l=305*(1-n[7]/100)),i(o,"class","progress-ring__arrow progress-ring__arrow--left svelte-9lh9zk"),i(o,"x","27"),i(o,"y","25"),i(o,"font-size","16"),i(o,"text-anchor","middle"),i(o,"dominant-baseline","central"),i($,"class","progress-ring__arrow progress-ring__arrow--right svelte-9lh9zk"),i($,"x","82"),i($,"y","25"),i($,"font-size","16"),i($,"text-anchor","middle"),i($,"dominant-baseline","central"),i(t,"class","progress-ring"),i(t,"width","110"),i(t,"height","49"),i(r,"class","progress-ring-container svelte-9lh9zk"),i(e,"class","text-center")},m(b,k){E(b,e,k),m(e,r),m(r,t),m(t,a),m(t,s),m(t,o),m(o,c),m(t,$),m($,f),d||(v=[se(o,"click",n[12]),se($,"click",n[13])],d=!0)},p(b,k){k&128&&l!==(l=305*(1-b[7]/100))&&i(s,"stroke-dashoffset",l)},d(b){b&&u(e),d=!1,xe(v)}}}function $t(n){let e,r,t,a,s,l,o=n[4].data,c=[];for(let f=0;f<o.length;f+=1)c[f]=Ge(Ue(n,o,f));let $=n[5]<767&&Re(n);return{c(){e=p("div");for(let f=0;f<c.length;f+=1)c[f].c();r=N(),$&&$.c(),t=N(),a=p("div"),s=p("a"),l=F(n[2]),this.h()},l(f){e=g(f,"DIV",{class:!0});var d=h(e);for(let k=0;k<c.length;k+=1)c[k].l(d);d.forEach(u),r=B(f),$&&$.l(f),t=B(f),a=g(f,"DIV",{class:!0});var v=h(a);s=g(v,"A",{href:!0,class:!0});var b=h(s);l=K(b,n[2]),b.forEach(u),v.forEach(u),this.h()},h(){i(e,"class","slider-container svelte-9lh9zk"),i(s,"href",n[3]),i(s,"class","btn btn-secondary"),i(a,"class","slider-btn svelte-9lh9zk")},m(f,d){E(f,e,d);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(e,null);E(f,r,d),$&&$.m(f,d),E(f,t,d),E(f,a,d),m(a,s),m(s,l)},p(f,d){if(d&16){o=f[4].data;let v;for(v=0;v<o.length;v+=1){const b=Ue(f,o,v);c[v]?c[v].p(b,d):(c[v]=Ge(b),c[v].c(),c[v].m(e,null))}for(;v<c.length;v+=1)c[v].d(1);c.length=o.length}f[5]<767?$?$.p(f,d):($=Re(f),$.c(),$.m(t.parentNode,t)):$&&($.d(1),$=null),d&4&&Ze(l,f[2]),d&8&&i(s,"href",f[3])},d(f){f&&u(e),Ae(c,f),f&&u(r),$&&$.d(f),f&&u(t),f&&u(a)}}}function _t(n){let e,r,t,a,s,l;return G(n[9]),e=new Q({props:{md:"3",$$slots:{default:[ft]},$$scope:{ctx:n}}}),t=new Q({props:{md:"9",$$slots:{default:[$t]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),r=N(),C(t.$$.fragment)},l(o){z(e.$$.fragment,o),r=B(o),z(t.$$.fragment,o)},m(o,c){H(e,o,c),E(o,r,c),H(t,o,c),a=!0,s||(l=se(st,"resize",n[9]),s=!0)},p(o,[c]){const $={};c&131299&&($.$$scope={dirty:c,ctx:o}),e.$set($);const f={};c&131324&&(f.$$scope={dirty:c,ctx:o}),t.$set(f)},i(o){a||(y(e.$$.fragment,o),y(t.$$.fragment,o),a=!0)},o(o){T(e.$$.fragment,o),T(t.$$.fragment,o),a=!1},d(o){A(e,o),o&&u(r),A(t,o),s=!1,l()}}}const We="https://strapi.ulfbuilt.com:1337";function dt(n,e,r){let t,{preHeading:a}=e,{heading:s}=e,{btnTitle:l}=e,{btnUrl:o}=e,{featuredProjects:c}=e,$;Se(()=>{r(5,$=window.innerWidth),r(6,t=new Flickity(".slider-container",{cellAlign:"left",contain:!0,wrapAround:!0,prevNextButtons:!1,pageDots:!1,autoPlay:!1,groupCells:1,draggable:!0,on:{change:d}}))});let f=0;function d(P){const w=c.data.length;let R=w-P==1?P+1:P;r(7,f=R/w*100)}function v(){r(5,$=st.innerWidth)}const b=()=>{t.previous(),d(t.selectedIndex)},k=()=>{t.next(),d(t.selectedIndex)},D=()=>{t.previous(),d(t.selectedIndex)},I=()=>{t.next(),d(t.selectedIndex)};return n.$$set=P=>{"preHeading"in P&&r(0,a=P.preHeading),"heading"in P&&r(1,s=P.heading),"btnTitle"in P&&r(2,l=P.btnTitle),"btnUrl"in P&&r(3,o=P.btnUrl),"featuredProjects"in P&&r(4,c=P.featuredProjects)},n.$$.update=()=>{n.$$.dirty&32},[a,s,l,o,c,$,t,f,d,v,b,k,D,I]}class mt extends ze{constructor(e){super(),He(this,e,dt,_t,Pe,{preHeading:0,heading:1,btnTitle:2,btnUrl:3,featuredProjects:4})}}const ht=""+new URL("../assets/tnr.4278ef87.svg",import.meta.url).href;function qe(n,e,r){const t=n.slice();return t[5]=e[r],t[7]=r,t}function pt(n){let e,r;return{c(){e=p("div"),r=F("Loading..."),this.h()},l(t){e=g(t,"DIV",{class:!0});var a=h(e);r=K(a,"Loading..."),a.forEach(u),this.h()},h(){i(e,"class","col text-center")},m(t,a){E(t,e,a),m(e,r)},p:U,i:U,o:U,d(t){t&&u(e)}}}function gt(n){let e,r;return e=new nt({props:{class:"container",defaultDirection:wt,gap:bt,align:Et,column:yt,columnSize:It,columnSizeRatio:Pt,$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&259&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Fe(n){let e,r,t,a,s,l,o,c,$;return{c(){e=p("div"),r=p("a"),t=p("img"),l=N(),this.h()},l(f){e=g(f,"DIV",{class:!0});var d=h(e);r=g(d,"A",{"data-sveltekit-reload":!0,href:!0,class:!0});var v=h(r);t=g(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(u),l=B(d),d.forEach(u),this.h()},h(){ne(t.src,a="https://strapi.ulfbuilt.com:1337/"+n[5].attributes.featuredImage.data.attributes.url)||i(t,"src",a),i(t,"alt","modern"),i(t,"class","svelte-1eamxik"),i(r,"data-sveltekit-reload",""),i(r,"href",s="/portfolio/"+n[5].attributes.slug),i(r,"class","svelte-1eamxik"),i(e,"class","masonry-items svelte-1eamxik")},m(f,d){E(f,e,d),m(e,r),m(r,t),m(e,l),$=!0},p(f,d){(!$||d&2&&!ne(t.src,a="https://strapi.ulfbuilt.com:1337/"+f[5].attributes.featuredImage.data.attributes.url))&&i(t,"src",a),(!$||d&2&&s!==(s="/portfolio/"+f[5].attributes.slug))&&i(r,"href",s)},i(f){$||(G(()=>{$&&(c&&c.end(1),o=X(e,q,{y:200,duration:2e3,delay:n[7]*600}),o.start())}),$=!0)},o(f){o&&o.invalidate(),c=at(e,q,{y:400,duration:2e3}),$=!1},d(f){f&&u(e),f&&c&&c.end()}}}function Ke(n){let e,r,t=n[7]<n[0]&&Fe(n);return{c(){t&&t.c(),e=$e()},l(a){t&&t.l(a),e=$e()},m(a,s){t&&t.m(a,s),E(a,e,s),r=!0},p(a,s){a[7]<a[0]?t?(t.p(a,s),s&1&&y(t,1)):(t=Fe(a),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(Te(),T(t,1,1,()=>{t=null}),De())},i(a){r||(y(t),r=!0)},o(a){T(t),r=!1},d(a){t&&t.d(a),a&&u(e)}}}function vt(n){let e,r,t=n[1].data,a=[];for(let l=0;l<t.length;l+=1)a[l]=Ke(qe(n,t,l));const s=l=>T(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=$e()},l(l){for(let o=0;o<a.length;o+=1)a[o].l(l);e=$e()},m(l,o){for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(l,o);E(l,e,o),r=!0},p(l,o){if(o&3){t=l[1].data;let c;for(c=0;c<t.length;c+=1){const $=qe(l,t,c);a[c]?(a[c].p($,o),y(a[c],1)):(a[c]=Ke($),a[c].c(),y(a[c],1),a[c].m(e.parentNode,e))}for(Te(),c=t.length;c<a.length;c+=1)s(c);De()}},i(l){if(!r){for(let o=0;o<t.length;o+=1)y(a[o]);r=!0}},o(l){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)T(a[o]);r=!1},d(l){Ae(a,l),l&&u(e)}}}function kt(n){let e,r,t,a;const s=[gt,pt],l=[];function o(c,$){return c[1]?0:1}return e=o(n),r=l[e]=s[e](n),{c(){r.c(),t=$e()},l(c){r.l(c),t=$e()},m(c,$){l[e].m(c,$),E(c,t,$),a=!0},p(c,[$]){let f=e;e=o(c),e===f?l[e].p(c,$):(Te(),T(l[f],1,1,()=>{l[f]=null}),De(),r=l[e],r?r.p(c,$):(r=l[e]=s[e](c),r.c()),y(r,1),r.m(t.parentNode,t))},i(c){a||(y(r),a=!0)},o(c){T(r),a=!1},d(c){l[e].d(c),c&&u(t)}}}const bt=0,wt="end",Et="end",yt=3,It=0,Pt=0;function Tt(n,e,r){let{id:t}=e,a;const s=new Map;let{propCount:l}=e;console.log(l);async function o(c){if(s.has(c)){r(1,a=s.get(c));return}const $="https://strapi.ulfbuilt.com:1337/api/portfolios?filters[categories][id][$eq]="+c+"&populate=deep,2",f={Authorization:"Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"},d=await ut.get($,{headers:f});r(1,a=d.data),s.set(c,a)}return n.$$set=c=>{"id"in c&&r(2,t=c.id),"propCount"in c&&r(0,l=c.propCount)},n.$$.update=()=>{n.$$.dirty&6&&t&&(async()=>(await o(t),console.log(a)))()},[l,a,t]}class Dt extends ze{constructor(e){super(),He(this,e,Tt,kt,Pe,{id:2,propCount:0})}}const{window:Ce}=Qe;function Xe(n,e,r){const t=n.slice();return t[14]=e[r],t}function Vt(n){let e,r,t=n[4].homeBuilderHeading+"",a,s,l,o,c=n[4].homeBuilderSubHeading+"",$,f,d,v=n[4].homeBuilderParagraph+"",b,k;return{c(){e=p("div"),r=p("h2"),a=F(t),l=N(),o=p("div"),f=N(),d=p("div"),this.h()},l(D){e=g(D,"DIV",{class:!0});var I=h(e);r=g(I,"H2",{class:!0});var P=h(r);a=K(P,t),P.forEach(u),l=B(I),o=g(I,"DIV",{class:!0});var w=h(o);w.forEach(u),f=B(I),d=g(I,"DIV",{});var R=h(d);R.forEach(u),I.forEach(u),this.h()},h(){i(r,"class","svelte-1ue27kh"),i(o,"class","h3 svelte-1ue27kh"),i(e,"class","loc-gallery__cwrapper svelte-1ue27kh")},m(D,I){E(D,e,I),m(e,r),m(r,a),m(e,l),m(e,o),o.innerHTML=c,m(e,f),m(e,d),d.innerHTML=v},p:U,i(D){s||G(()=>{s=X(r,q,{delay:1e3,duration:2e3,y:50}),s.start()}),$||G(()=>{$=X(o,q,{delay:1500,duration:2e3,y:50}),$.start()}),b||G(()=>{b=X(d,q,{delay:2e3,duration:2e3,y:50}),b.start()}),k||G(()=>{k=X(e,q,{delay:500,duration:2e3,y:50}),k.start()})},o:U,d(D){D&&u(e)}}}function St(n){let e,r;return e=new Q({props:{class:"text-center",$$slots:{default:[Vt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ct(n){let e,r;return e=new oe({props:{$$slots:{default:[St]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function zt(n){let e,r;return e=new fe({props:{$$slots:{default:[Ct]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ht(n){let e,r;return{c(){e=p("section"),this.h()},l(t){e=g(t,"SECTION",{class:!0,style:!0}),h(e).forEach(u),this.h()},h(){i(e,"class","section--bannerOnly svelte-1ue27kh"),et(e,"--lrbg","url("+_e+n[4].homeBuilderBanner.data.attributes.url+")")},m(t,a){E(t,e,a)},p:U,i(t){r||G(()=>{r=X(e,q,{delay:500,duration:2e3,y:50}),r.start()})},o:U,d(t){t&&u(e)}}}function Ye(n){let e,r,t=n[14].attributes.Title+"",a,s,l,o;function c(){return n[9](n[14])}return{c(){e=p("li"),r=p("span"),a=F(t),s=N(),this.h()},l($){e=g($,"LI",{class:!0});var f=h(e);r=g(f,"SPAN",{"data-category":!0,class:!0});var d=h(r);a=K(d,t),d.forEach(u),s=B(f),f.forEach(u),this.h()},h(){i(r,"data-category",n[14].id),i(r,"class","svelte-1ue27kh"),Me(r,"active",n[1]===n[14].id),i(e,"class","svelte-1ue27kh")},m($,f){E($,e,f),m(e,r),m(r,a),m(e,s),l||(o=se(r,"click",c),l=!0)},p($,f){n=$,f&18&&Me(r,"active",n[1]===n[14].id)},d($){$&&u(e),l=!1,o()}}}function At(n){let e,r,t,a;return{c(){e=p("span"),r=F("View Less Projects"),this.h()},l(s){e=g(s,"SPAN",{class:!0});var l=h(e);r=K(l,"View Less Projects"),l.forEach(u),this.h()},h(){i(e,"class","svelte-1ue27kh")},m(s,l){E(s,e,l),m(e,r),t||(a=se(e,"click",n[11]),t=!0)},p:U,d(s){s&&u(e),t=!1,a()}}}function Nt(n){let e,r,t,a;return{c(){e=p("span"),r=F("View All Projects"),this.h()},l(s){e=g(s,"SPAN",{class:!0});var l=h(e);r=K(l,"View All Projects"),l.forEach(u),this.h()},h(){i(e,"class","svelte-1ue27kh")},m(s,l){E(s,e,l),m(e,r),t||(a=se(e,"click",n[10]),t=!0)},p:U,d(s){s&&u(e),t=!1,a()}}}function Je(n){let e,r,t,a;return r=new Dt({props:{id:n[1],propCount:n[0]}}),{c(){e=p("div"),C(r.$$.fragment),this.h()},l(s){e=g(s,"DIV",{id:!0,class:!0,"data-test":!0});var l=h(e);z(r.$$.fragment,l),l.forEach(u),this.h()},h(){i(e,"id","modern"),i(e,"class","masonry__tabs__gallery__imgs"),i(e,"data-test",n[1])},m(s,l){E(s,e,l),H(r,e,null),a=!0},p(s,l){const o={};l&2&&(o.id=s[1]),l&1&&(o.propCount=s[0]),r.$set(o),(!a||l&2)&&i(e,"data-test",s[1])},i(s){a||(y(r.$$.fragment,s),G(()=>{a&&(t||(t=je(e,Le,{},!0)),t.run(1))}),a=!0)},o(s){T(r.$$.fragment,s),t||(t=je(e,Le,{},!1)),t.run(0),a=!1},d(s){s&&u(e),A(r),s&&t&&t.end()}}}function Bt(n){let e,r,t,a,s,l,o,c,$,f,d,v,b,k=n[3],D,I,P=n[4].categories.data,w=[];for(let V=0;V<P.length;V+=1)w[V]=Ye(Xe(n,P,V));function R(V,O){return V[0]===3?Nt:At}let M=R(n),j=M(n),W=Je(n);return{c(){e=p("h2"),r=F("what are you looking for?"),a=N(),s=p("div"),l=p("div"),o=p("ul");for(let V=0;V<w.length;V+=1)w[V].c();$=N(),f=p("p"),j.c(),v=N(),b=p("div"),W.c(),this.h()},l(V){e=g(V,"H2",{class:!0});var O=h(e);r=K(O,"what are you looking for?"),O.forEach(u),a=B(V),s=g(V,"DIV",{class:!0});var L=h(s);l=g(L,"DIV",{class:!0});var Y=h(l);o=g(Y,"UL",{class:!0});var Z=h(o);for(let J=0;J<w.length;J+=1)w[J].l(Z);Z.forEach(u),Y.forEach(u),$=B(L),f=g(L,"P",{class:!0});var ie=h(f);j.l(ie),ie.forEach(u),v=B(L),b=g(L,"DIV",{class:!0});var x=h(b);W.l(x),x.forEach(u),L.forEach(u),this.h()},h(){i(e,"class","svelte-1ue27kh"),i(o,"class","svelte-1ue27kh"),i(l,"class","categories__tabs__heading svelte-1ue27kh"),i(f,"class","text-center view-all svelte-1ue27kh"),i(b,"class","categories__tabs__gallery"),i(s,"class","categories__tabs")},m(V,O){E(V,e,O),m(e,r),E(V,a,O),E(V,s,O),m(s,l),m(l,o);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(o,null);m(s,$),m(s,f),j.m(f,null),m(s,v),m(s,b),W.m(b,null),I=!0},p(V,O){if(O&50){P=V[4].categories.data;let L;for(L=0;L<P.length;L+=1){const Y=Xe(V,P,L);w[L]?w[L].p(Y,O):(w[L]=Ye(Y),w[L].c(),w[L].m(o,null))}for(;L<w.length;L+=1)w[L].d(1);w.length=P.length}M===(M=R(V))&&j?j.p(V,O):(j.d(1),j=M(V),j&&(j.c(),j.m(f,null))),O&8&&Pe(k,k=V[3])?(Te(),T(W,1,1,U),De(),W=Je(V),W.c(),y(W,1),W.m(b,null)):W.p(V,O)},i(V){I||(t||G(()=>{t=X(e,q,{delay:3e3,duration:2e3,y:50}),t.start()}),c||G(()=>{c=X(o,q,{delay:3500,duration:2e3,y:50}),c.start()}),d||G(()=>{d=X(f,q,{delay:4e3,duration:2e3,y:50}),d.start()}),y(W),D||G(()=>{D=X(b,q,{delay:4500,duration:2e3,y:50}),D.start()}),I=!0)},o(V){T(W),I=!1},d(V){V&&u(e),V&&u(a),V&&u(s),Ae(w,V),j.d(),W.d(V)}}}function Mt(n){let e,r;return e=new Q({props:{class:"text-center",$$slots:{default:[Bt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131083&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function jt(n){let e,r;return e=new oe({props:{$$slots:{default:[Mt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131083&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Lt(n){let e,r;return e=new fe({props:{$$slots:{default:[jt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131083&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ut(n){let e,r;return e=new mt({props:{preHeading:n[4].featuredProjectsPreHeading,heading:n[4].featuredProjectsHeading,btnTitle:n[4].featurePropertyBtnTitle,btnUrl:n[4].featuredPropertyBtnUrl,featuredProjects:n[4].featuredProjects}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p:U,i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ot(n){let e,r;return e=new oe({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Gt(n){let e,r,t,a;return r=new fe({props:{$$slots:{default:[Ot]},$$scope:{ctx:n}}}),{c(){e=p("div"),C(r.$$.fragment)},l(s){e=g(s,"DIV",{});var l=h(e);z(r.$$.fragment,l),l.forEach(u)},m(s,l){E(s,e,l),H(r,e,null),a=!0},p(s,l){const o={};l&131072&&(o.$$scope={dirty:l,ctx:s}),r.$set(o)},i(s){a||(y(r.$$.fragment,s),t||G(()=>{t=X(e,q,{delay:500,duration:2e3,y:50}),t.start()}),a=!0)},o(s){T(r.$$.fragment,s),a=!1},d(s){s&&u(e),A(r)}}}function Rt(n){let e,r,t,a=n[4].midBanner.paragraph+"",s,l,o,c=n[4].midBanner.heading+"",$,f,d,v=n[4].midBanner.btnTitle+"",b,k,D;return{c(){e=p("div"),r=p("div"),t=p("span"),s=F(a),l=N(),o=p("h2"),$=F(c),f=N(),d=p("a"),b=F(v),this.h()},l(I){e=g(I,"DIV",{class:!0});var P=h(e);r=g(P,"DIV",{class:!0});var w=h(r);t=g(w,"SPAN",{class:!0});var R=h(t);s=K(R,a),R.forEach(u),l=B(w),o=g(w,"H2",{class:!0});var M=h(o);$=K(M,c),M.forEach(u),f=B(w),d=g(w,"A",{href:!0,class:!0});var j=h(d);b=K(j,v),j.forEach(u),w.forEach(u),P.forEach(u),this.h()},h(){i(t,"class","svelte-1ue27kh"),i(o,"class","svelte-1ue27kh"),i(d,"href",n[4].midBanner.btnUrl),i(d,"class","btn btn-secondary svelte-1ue27kh"),i(r,"class","tnr__wrapper__captions"),i(e,"class","tnr__wrapper svelte-1ue27kh")},m(I,P){E(I,e,P),m(e,r),m(r,t),m(t,s),m(r,l),m(r,o),m(o,$),m(r,f),m(r,d),m(d,b)},p:U,i(I){k||G(()=>{k=X(r,q,{delay:500,duration:2e3,y:50}),k.start()}),D||G(()=>{D=X(e,q,{delay:500,duration:2e3,y:50}),D.start()})},o:U,d(I){I&&u(e)}}}function Wt(n){let e,r;return e=new ee({props:{$$slots:{default:[Rt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function qt(n){let e,r;return e=new Q({props:{$$slots:{default:[Wt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ft(n){let e,r;return e=new oe({props:{$$slots:{default:[qt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Kt(n){let e,r,t,a=n[4].reputation.preHeading+"",s,l,o,c=n[4].reputation.heading+"",$,f,d,v=n[4].reputation.content+"",b,k,D=n[4].reputation.btnTitle+"",I,P;return{c(){e=p("div"),r=p("div"),t=p("span"),s=F(a),l=N(),o=p("h2"),$=F(c),f=N(),d=p("p"),b=N(),k=p("a"),I=F(D),this.h()},l(w){e=g(w,"DIV",{class:!0});var R=h(e);r=g(R,"DIV",{class:!0});var M=h(r);t=g(M,"SPAN",{class:!0});var j=h(t);s=K(j,a),j.forEach(u),l=B(M),o=g(M,"H2",{class:!0});var W=h(o);$=K(W,c),W.forEach(u),f=B(M),d=g(M,"P",{class:!0});var V=h(d);V.forEach(u),b=B(M),k=g(M,"A",{href:!0,class:!0});var O=h(k);I=K(O,D),O.forEach(u),M.forEach(u),R.forEach(u),this.h()},h(){i(t,"class","svelte-1ue27kh"),i(o,"class","svelte-1ue27kh"),i(d,"class","svelte-1ue27kh"),i(k,"href",n[4].reputation.btnUrl),i(k,"class","btn btn-secondary svelte-1ue27kh"),i(r,"class","reputation__content__wrapper svelte-1ue27kh"),i(e,"class","reputation__content svelte-1ue27kh")},m(w,R){E(w,e,R),m(e,r),m(r,t),m(t,s),m(r,l),m(r,o),m(o,$),m(r,f),m(r,d),d.innerHTML=v,m(r,b),m(r,k),m(k,I)},p:U,i(w){P||G(()=>{P=X(e,q,{delay:500,duration:2e3,y:50}),P.start()})},o:U,d(w){w&&u(e)}}}function Xt(n){let e,r,t;return{c(){e=p("img"),this.h()},l(a){e=g(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ne(e.src,r=""+(_e+n[4].reputation.image.data.attributes.url))||i(e,"src",r),i(e,"alt",n[4].reputation.image.data.attributes.alternativeText),i(e,"class","svelte-1ue27kh")},m(a,s){E(a,e,s)},p:U,i(a){t||G(()=>{t=X(e,q,{delay:500,duration:2e3,y:50}),t.start()})},o:U,d(a){a&&u(e)}}}function Yt(n){let e,r,t,a;return e=new Q({props:{md:"8",class:"",$$slots:{default:[Kt]},$$scope:{ctx:n}}}),t=new Q({props:{md:"4",class:"my-auto",$$slots:{default:[Xt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),r=N(),C(t.$$.fragment)},l(s){z(e.$$.fragment,s),r=B(s),z(t.$$.fragment,s)},m(s,l){H(e,s,l),E(s,r,l),H(t,s,l),a=!0},p(s,l){const o={};l&131072&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const c={};l&131072&&(c.$$scope={dirty:l,ctx:s}),t.$set(c)},i(s){a||(y(e.$$.fragment,s),y(t.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),T(t.$$.fragment,s),a=!1},d(s){A(e,s),s&&u(r),A(t,s)}}}function Jt(n){let e,r;return e=new oe({props:{$$slots:{default:[Yt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Qt(n){let e,r;return e=new fe({props:{$$slots:{default:[Jt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Zt(n){let e,r,t,a;return{c(){e=p("div"),r=p("img"),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=h(e);r=g(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(u),this.h()},h(){ne(r.src,t=""+(_e+n[4].ourProcessTopImage.data[0].attributes.url))||i(r,"src",t),i(r,"alt",n[4].ourProcessTopImage.data[0].attributes.alternativeText),i(r,"class","svelte-1ue27kh"),i(e,"class","process__top-image svelte-1ue27kh")},m(s,l){E(s,e,l),m(e,r)},p:U,i(s){a||G(()=>{a=X(e,q,{delay:500,duration:2e3,y:50}),a.start()})},o:U,d(s){s&&u(e)}}}function xt(n){let e,r;return e=new Q({props:{md:"6",$$slots:{default:[Zt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function er(n){let e,r,t,a=n[4].ourProcessPreHeading+"",s,l,o,c=n[4].ourProcessHeading+"",$,f,d,v=n[4].ourProcessParagraph+"",b,k,D=n[4].ourProcessButtonTitle+"",I,P;return{c(){e=p("div"),r=p("div"),t=p("span"),s=F(a),l=N(),o=p("h2"),$=F(c),f=N(),d=new tt(!1),b=N(),k=p("a"),I=F(D),this.h()},l(w){e=g(w,"DIV",{class:!0});var R=h(e);r=g(R,"DIV",{class:!0});var M=h(r);t=g(M,"SPAN",{class:!0});var j=h(t);s=K(j,a),j.forEach(u),l=B(M),o=g(M,"H2",{class:!0});var W=h(o);$=K(W,c),W.forEach(u),f=B(M),d=rt(M,!1),b=B(M),k=g(M,"A",{href:!0,class:!0});var V=h(k);I=K(V,D),V.forEach(u),M.forEach(u),R.forEach(u),this.h()},h(){i(t,"class","svelte-1ue27kh"),i(o,"class","svelte-1ue27kh"),d.a=b,i(k,"href",n[4].ourProcessButtonUrl),i(k,"class","btn btn-secondary svelte-1ue27kh"),i(r,"class","process__content__wrapper svelte-1ue27kh"),i(e,"class","process__content svelte-1ue27kh")},m(w,R){E(w,e,R),m(e,r),m(r,t),m(t,s),m(r,l),m(r,o),m(o,$),m(r,f),d.m(v,r),m(r,b),m(r,k),m(k,I)},p:U,i(w){P||G(()=>{P=X(r,q,{delay:1e3,duration:2e3,y:50}),P.start()})},o:U,d(w){w&&u(e)}}}function tr(n){let e,r,t,a;return{c(){e=p("div"),r=p("img"),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=h(e);r=g(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(u),this.h()},h(){ne(r.src,t=""+(_e+n[4].ourProcessRightImage.data.attributes.url))||i(r,"src",t),i(r,"alt",n[4].ourProcessRightImage.data.attributes.alternativeText),i(r,"class","svelte-1ue27kh"),i(e,"class","process__bottom svelte-1ue27kh")},m(s,l){E(s,e,l),m(e,r)},p:U,i(s){a||G(()=>{a=X(e,q,{delay:1500,duration:2e3,y:50}),a.start()})},o:U,d(s){s&&u(e)}}}function rr(n){let e,r,t,a;return e=new Q({props:{md:"8",class:"",$$slots:{default:[er]},$$scope:{ctx:n}}}),t=new Q({props:{md:"4",class:"my-auto ",$$slots:{default:[tr]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),r=N(),C(t.$$.fragment)},l(s){z(e.$$.fragment,s),r=B(s),z(t.$$.fragment,s)},m(s,l){H(e,s,l),E(s,r,l),H(t,s,l),a=!0},p(s,l){const o={};l&131072&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const c={};l&131072&&(c.$$scope={dirty:l,ctx:s}),t.$set(c)},i(s){a||(y(e.$$.fragment,s),y(t.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),T(t.$$.fragment,s),a=!1},d(s){A(e,s),s&&u(r),A(t,s)}}}function sr(n){let e,r,t,a;return e=new oe({props:{$$slots:{default:[xt]},$$scope:{ctx:n}}}),t=new oe({props:{$$slots:{default:[rr]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),r=N(),C(t.$$.fragment)},l(s){z(e.$$.fragment,s),r=B(s),z(t.$$.fragment,s)},m(s,l){H(e,s,l),E(s,r,l),H(t,s,l),a=!0},p(s,l){const o={};l&131072&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const c={};l&131072&&(c.$$scope={dirty:l,ctx:s}),t.$set(c)},i(s){a||(y(e.$$.fragment,s),y(t.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),T(t.$$.fragment,s),a=!1},d(s){A(e,s),s&&u(r),A(t,s)}}}function ar(n){let e,r;return e=new fe({props:{$$slots:{default:[sr]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function lr(n){let e,r,t,a=n[4].ourStoryPreHeading+"",s,l,o,c=n[4].ourStoryHeading+"",$,f,d,v=n[4].ourStoryParagraph+"",b;return{c(){e=p("div"),r=p("div"),t=p("span"),s=F(a),l=N(),o=p("h2"),$=F(c),f=N(),d=new tt(!1),this.h()},l(k){e=g(k,"DIV",{class:!0});var D=h(e);r=g(D,"DIV",{class:!0});var I=h(r);t=g(I,"SPAN",{class:!0});var P=h(t);s=K(P,a),P.forEach(u),l=B(I),o=g(I,"H2",{class:!0});var w=h(o);$=K(w,c),w.forEach(u),f=B(I),d=rt(I,!1),I.forEach(u),D.forEach(u),this.h()},h(){i(t,"class","svelte-1ue27kh"),i(o,"class","svelte-1ue27kh"),d.a=null,i(r,"class","story__content__wrapper svelte-1ue27kh"),i(e,"class","story__content svelte-1ue27kh")},m(k,D){E(k,e,D),m(e,r),m(r,t),m(t,s),m(r,l),m(r,o),m(o,$),m(r,f),d.m(v,r)},p:U,i(k){b||G(()=>{b=X(r,q,{delay:500,duration:2e3,y:50}),b.start()})},o:U,d(k){k&&u(e)}}}function nr(n){let e,r,t;return{c(){e=p("img"),this.h()},l(a){e=g(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ne(e.src,r=""+(_e+n[4].ourStoryRightImage.data.attributes.url))||i(e,"src",r),i(e,"alt",n[4].ourStoryRightImage.data.attributes.alternativeText),i(e,"class","svelte-1ue27kh")},m(a,s){E(a,e,s)},p:U,i(a){t||G(()=>{t=X(e,q,{delay:500,duration:2e3,y:50}),t.start()})},o:U,d(a){a&&u(e)}}}function or(n){let e,r,t,a;return e=new Q({props:{md:"8",class:"",$$slots:{default:[lr]},$$scope:{ctx:n}}}),t=new Q({props:{md:"4",class:"my-auto",$$slots:{default:[nr]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment),r=N(),C(t.$$.fragment)},l(s){z(e.$$.fragment,s),r=B(s),z(t.$$.fragment,s)},m(s,l){H(e,s,l),E(s,r,l),H(t,s,l),a=!0},p(s,l){const o={};l&131072&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const c={};l&131072&&(c.$$scope={dirty:l,ctx:s}),t.$set(c)},i(s){a||(y(e.$$.fragment,s),y(t.$$.fragment,s),a=!0)},o(s){T(e.$$.fragment,s),T(t.$$.fragment,s),a=!1},d(s){A(e,s),s&&u(r),A(t,s)}}}function ir(n){let e,r;return e=new oe({props:{$$slots:{default:[or]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function cr(n){let e,r;return e=new fe({props:{$$slots:{default:[ir]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){H(e,t,a),r=!0},p(t,a){const s={};a&131072&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function ur(n){let e,r,t,a;return r=new ot({}),{c(){e=p("div"),C(r.$$.fragment)},l(s){e=g(s,"DIV",{});var l=h(e);z(r.$$.fragment,l),l.forEach(u)},m(s,l){E(s,e,l),H(r,e,null),a=!0},p:U,i(s){a||(y(r.$$.fragment,s),t||G(()=>{t=X(e,q,{delay:500,duration:2e3,y:50}),t.start()}),a=!0)},o(s){T(r.$$.fragment,s),a=!1},d(s){s&&u(e),A(r)}}}function fr(n){let e,r,t,a;return r=new it({}),{c(){e=p("div"),C(r.$$.fragment)},l(s){e=g(s,"DIV",{});var l=h(e);z(r.$$.fragment,l),l.forEach(u)},m(s,l){E(s,e,l),H(r,e,null),a=!0},p:U,i(s){a||(y(r.$$.fragment,s),t||G(()=>{t=X(e,q,{delay:500,duration:2e3,y:50}),t.start()}),a=!0)},o(s){T(r.$$.fragment,s),a=!1},d(s){s&&u(e),A(r)}}}function $r(n){let e=!1,r=()=>{e=!1},t,a,s,l,o,c,$,f,d,v,b,k,D,I,P,w,R,M,j,W,V,O,L,Y,Z,ie,x,J,ye,ce,ae,Ie,ue,le,de,Ve,Ne;return G(n[8]),document.title=a=n[4].title,o=new ct({props:{title:n[4].topBanner.heading,subTitle:n[4].topBanner.paragraph,banner:""+(_e+n[4].topBanner.background.data.attributes.formats.large.url),extraClass:"homebanner"}}),f=new ee({props:{$$slots:{default:[zt]},$$scope:{ctx:n}}}),v=new ee({props:{$$slots:{default:[Ht]},$$scope:{ctx:n}}}),D=new ee({props:{$$slots:{default:[Lt]},$$scope:{ctx:n}}}),w=new ee({props:{$$slots:{default:[Gt]},$$scope:{ctx:n}}}),j=new fe({props:{$$slots:{default:[Ft]},$$scope:{ctx:n}}}),O=new ee({props:{$$slots:{default:[Qt]},$$scope:{ctx:n}}}),Z=new ee({props:{$$slots:{default:[ar]},$$scope:{ctx:n}}}),J=new ee({props:{$$slots:{default:[cr]},$$scope:{ctx:n}}}),ae=new ee({props:{$$slots:{default:[ur]},$$scope:{ctx:n}}}),le=new ee({props:{$$slots:{default:[fr]},$$scope:{ctx:n}}}),{c(){s=p("meta"),l=N(),C(o.$$.fragment),c=N(),$=p("section"),C(f.$$.fragment),d=N(),C(v.$$.fragment),b=N(),k=p("section"),C(D.$$.fragment),I=N(),P=p("section"),C(w.$$.fragment),R=N(),M=p("section"),C(j.$$.fragment),W=N(),V=p("section"),C(O.$$.fragment),L=N(),Y=p("section"),C(Z.$$.fragment),ie=N(),x=p("section"),C(J.$$.fragment),ye=N(),ce=p("section"),C(ae.$$.fragment),Ie=N(),ue=p("section"),C(le.$$.fragment),this.h()},l(_){const S=lt("svelte-1byjgrp",document.head);s=g(S,"META",{name:!0,content:!0}),S.forEach(u),l=B(_),z(o.$$.fragment,_),c=B(_),$=g(_,"SECTION",{class:!0});var me=h($);z(f.$$.fragment,me),me.forEach(u),d=B(_),z(v.$$.fragment,_),b=B(_),k=g(_,"SECTION",{class:!0});var he=h(k);z(D.$$.fragment,he),he.forEach(u),I=B(_),P=g(_,"SECTION",{class:!0});var pe=h(P);z(w.$$.fragment,pe),pe.forEach(u),R=B(_),M=g(_,"SECTION",{class:!0,style:!0});var ge=h(M);z(j.$$.fragment,ge),ge.forEach(u),W=B(_),V=g(_,"SECTION",{class:!0});var ve=h(V);z(O.$$.fragment,ve),ve.forEach(u),L=B(_),Y=g(_,"SECTION",{class:!0});var ke=h(Y);z(Z.$$.fragment,ke),ke.forEach(u),ie=B(_),x=g(_,"SECTION",{class:!0});var be=h(x);z(J.$$.fragment,be),be.forEach(u),ye=B(_),ce=g(_,"SECTION",{class:!0});var we=h(ce);z(ae.$$.fragment,we),we.forEach(u),Ie=B(_),ue=g(_,"SECTION",{class:!0});var Ee=h(ue);z(le.$$.fragment,Ee),Ee.forEach(u),this.h()},h(){i(s,"name","description"),i(s,"content","ULF BUILT"),i($,"class","loc-gallery svelte-1ue27kh"),i(k,"class","categories svelte-1ue27kh"),i(P,"class","featured-projects svelte-1ue27kh"),i(M,"class","tnr svelte-1ue27kh"),et(M,"--tp-banner","url("+ht+")"),i(V,"class","reputation svelte-1ue27kh"),i(Y,"class","process svelte-1ue27kh"),i(x,"class","story svelte-1ue27kh"),i(ce,"class","m-0 svelte-1ue27kh"),i(ue,"class","m-0 svelte-1ue27kh")},m(_,S){m(document.head,s),E(_,l,S),H(o,_,S),E(_,c,S),E(_,$,S),H(f,$,null),E(_,d,S),H(v,_,S),E(_,b,S),E(_,k,S),H(D,k,null),E(_,I,S),E(_,P,S),H(w,P,null),E(_,R,S),E(_,M,S),H(j,M,null),E(_,W,S),E(_,V,S),H(O,V,null),E(_,L,S),E(_,Y,S),H(Z,Y,null),E(_,ie,S),E(_,x,S),H(J,x,null),E(_,ye,S),E(_,ce,S),H(ae,ce,null),E(_,Ie,S),E(_,ue,S),H(le,ue,null),de=!0,Ve||(Ne=se(Ce,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(r,100),n[8]()}),Ve=!0)},p(_,[S]){S&4&&!e&&(e=!0,clearTimeout(t),scrollTo(Ce.pageXOffset,_[2]),t=setTimeout(r,100)),(!de||S&16)&&a!==(a=_[4].title)&&(document.title=a);const me={};S&131072&&(me.$$scope={dirty:S,ctx:_}),f.$set(me);const he={};S&131072&&(he.$$scope={dirty:S,ctx:_}),v.$set(he);const pe={};S&131083&&(pe.$$scope={dirty:S,ctx:_}),D.$set(pe);const ge={};S&131072&&(ge.$$scope={dirty:S,ctx:_}),w.$set(ge);const ve={};S&131072&&(ve.$$scope={dirty:S,ctx:_}),j.$set(ve);const ke={};S&131072&&(ke.$$scope={dirty:S,ctx:_}),O.$set(ke);const be={};S&131072&&(be.$$scope={dirty:S,ctx:_}),Z.$set(be);const we={};S&131072&&(we.$$scope={dirty:S,ctx:_}),J.$set(we);const Ee={};S&131072&&(Ee.$$scope={dirty:S,ctx:_}),ae.$set(Ee);const Be={};S&131072&&(Be.$$scope={dirty:S,ctx:_}),le.$set(Be)},i(_){de||(y(o.$$.fragment,_),y(f.$$.fragment,_),y(v.$$.fragment,_),y(D.$$.fragment,_),y(w.$$.fragment,_),y(j.$$.fragment,_),y(O.$$.fragment,_),y(Z.$$.fragment,_),y(J.$$.fragment,_),y(ae.$$.fragment,_),y(le.$$.fragment,_),de=!0)},o(_){T(o.$$.fragment,_),T(f.$$.fragment,_),T(v.$$.fragment,_),T(D.$$.fragment,_),T(w.$$.fragment,_),T(j.$$.fragment,_),T(O.$$.fragment,_),T(Z.$$.fragment,_),T(J.$$.fragment,_),T(ae.$$.fragment,_),T(le.$$.fragment,_),de=!1},d(_){u(s),_&&u(l),A(o,_),_&&u(c),_&&u($),A(f),_&&u(d),A(v,_),_&&u(b),_&&u(k),A(D),_&&u(I),_&&u(P),A(w),_&&u(R),_&&u(M),A(j),_&&u(W),_&&u(V),A(O),_&&u(L),_&&u(Y),A(Z),_&&u(ie),_&&u(x),A(J),_&&u(ye),_&&u(ce),A(ae),_&&u(Ie),_&&u(ue),A(le),Ve=!1,Ne()}}}const _e="https://strapi.ulfbuilt.com:1337";function _r(n,e,r){let{data:t}=e;Se(()=>{});let a=0;const s=t.data.attributes;let l=3,o={},c=s.categories.data[0].id;function $(D){r(1,c=D)}let f;Se(()=>{r(7,f=window.innerWidth)}),console.log(s.ourProcessTopImage.data[0].attributes.url);function d(){r(2,a=Ce.pageYOffset)}const v=D=>$(D.id),b=()=>r(0,l=999),k=()=>r(0,l=3);return n.$$set=D=>{"data"in D&&r(6,t=D.data)},n.$$.update=()=>{n.$$.dirty&3&&r(3,o={propCount:l,activeTab:c}),n.$$.dirty&128},[l,c,a,o,s,$,t,f,d,v,b,k]}class wr extends ze{constructor(e){super(),He(this,e,_r,$r,Pe,{data:6})}}export{wr as component};
//# sourceMappingURL=8.77696473.js.map
