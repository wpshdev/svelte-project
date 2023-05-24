import{ai as u,aj as x}from"./index.eceac6f7.js";function _(t){const n=t-1;return n*n*n+1}function C(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function O(t,{delay:n=0,duration:o=400,easing:s=x}={}){const a=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:r=>`opacity: ${r*a}`}}function S(t,{delay:n=0,duration:o=400,easing:s=_,x:a=0,y:r=0,opacity:f=0}={}){const c=getComputedStyle(t),e=+c.opacity,y=c.transform==="none"?"":c.transform,p=e*(1-f),[l,m]=u(a),[$,d]=u(r);return{delay:n,duration:o,easing:s,css:(i,g)=>`
			transform: ${y} translate(${(1-i)*l}${m}, ${(1-i)*$}${d});
			opacity: ${e-p*g}`}}export{O as a,S as f,C as q};
//# sourceMappingURL=index.af9a3958.js.map
