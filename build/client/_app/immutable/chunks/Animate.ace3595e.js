import{ai as m,aj as k,S as I,i as S,s as V,k as q,l as C,m as O,h as p,b as w,g as c,v as A,d as _,f as D,o as E,D as U,H as j,I as H,J,w as M}from"./index.eceac6f7.js";function z(s){const n=s-1;return n*n*n+1}function K(s){return s/=.5,s<1?.5*s*s:(s--,-.5*(s*(s-2)-1))}function L(s,{delay:n=0,duration:i=400,easing:t=k}={}){const e=+getComputedStyle(s).opacity;return{delay:n,duration:i,easing:t,css:o=>`opacity: ${o*e}`}}function N(s,{delay:n=0,duration:i=400,easing:t=z,x:e=0,y:o=0,opacity:l=0}={}){const r=getComputedStyle(s),a=+r.opacity,u=r.transform==="none"?"":r.transform,f=a*(1-l),[g,y]=m(e),[h,$]=m(o);return{delay:n,duration:i,easing:t,css:(d,v)=>`
			transform: ${u} translate(${(1-d)*g}${y}, ${(1-d)*h}${$});
			opacity: ${a-f*v}`}}function b(s){let n;const i=s[3].default,t=U(i,s,s[2],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,o){t&&t.m(e,o),n=!0},p(e,o){t&&t.p&&(!n||o&4)&&j(t,i,e,e[2],n?J(i,e[2],o,null):H(e[2]),null)},i(e){n||(c(t,e),n=!0)},o(e){_(t,e),n=!1},d(e){t&&t.d(e)}}}function B(s){let n,i,t=s[1]&&b(s);return{c(){n=q("div"),t&&t.c()},l(e){n=C(e,"DIV",{});var o=O(n);t&&t.l(o),o.forEach(p)},m(e,o){w(e,n,o),t&&t.m(n,null),s[4](n),i=!0},p(e,[o]){e[1]?t?(t.p(e,o),o&2&&c(t,1)):(t=b(e),t.c(),c(t,1),t.m(n,null)):t&&(A(),_(t,1,1,()=>{t=null}),D())},i(e){i||(c(t),i=!0)},o(e){_(t),i=!1},d(e){e&&p(n),t&&t.d(),s[4](null)}}}function F(s,n,i){let{$$slots:t={},$$scope:e}=n,o,l=!1;E(()=>{const a=new IntersectionObserver(u=>{u.forEach(f=>{f.isIntersecting&&(i(1,l=!0),a.disconnect())})});return a.observe(o),()=>{a.disconnect()}});function r(a){M[a?"unshift":"push"](()=>{o=a,i(0,o)})}return s.$$set=a=>{"$$scope"in a&&i(2,e=a.$$scope)},[o,l,e,t,r]}class P extends I{constructor(n){super(),S(this,n,F,B,V,{})}}export{P as A,L as a,N as f,K as q};
//# sourceMappingURL=Animate.ace3595e.js.map