import { L, d, z } from './index-87618b6e.js';
import { F } from './Button-69b97a18.js';
import { E, M, R } from './Row-0fc34542.js';
import { X, Y, Z } from './Input-c814fab0.js';

const g="/_app/immutable/assets/ContactBG.2a4398dc.jpg";const b={code:".contact.svelte-1q29mpo.svelte-1q29mpo{padding:10rem 0;background-image:var(--contactBG);background-size:cover;margin:0}.contact__content.svelte-1q29mpo.svelte-1q29mpo{display:flex;height:100%;align-items:end}.contact__content__wrapper.svelte-1q29mpo h2.svelte-1q29mpo{margin-bottom:2rem}.contact__form.svelte-1q29mpo #yourMessage{height:15rem}",map:null},I=L((e,q,y,C)=>{let s="",c="",l="",p="",m="";e.css.add(b);let a,d$1;do a=!0,d$1=`<section class="contact svelte-1q29mpo" style="${"--contactBG: url("+d(g,!0)+")"}">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"6"},{},{default:()=>`<div class="contact__content svelte-1q29mpo"><div class="contact__content__wrapper svelte-1q29mpo"><h2 class="svelte-1q29mpo">Ready to Start<br> your Dream Project?</h2>
						<p>Let&#39;s discuss it!</p></div></div>`})}
			${z(R,"Col").$$render(e,{md:"6"},{},{default:()=>`<div class="contact__form svelte-1q29mpo">${z(X,"Form").$$render(e,{method:"post"},{},{default:()=>`${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-user",placeholder:"Full Name",value:s},{value:o=>{s=o,a=!1;}},{})}
							<div class="input-icon input-icon-user"></div>`})}
						${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-email",placeholder:"Email address",value:c},{value:o=>{c=o,a=!1;}},{})}
							<div class="input-icon input-icon-email"></div>`})}
						${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-phone",placeholder:"Phone Number",value:l},{value:o=>{l=o,a=!1;}},{})}
							<div class="input-icon input-icon-phone"></div>`})}
						${z(Y,"FormGroup").$$render(e,{},{},{default:()=>`${z(Z,"Input").$$render(e,{type:"textarea",id:"yourMessage",placeholder:"Tell us about you project...",value:p},{value:o=>{p=o,a=!1;}},{})}`})}
						${z(F,"Button").$$render(e,{type:"btn is-primary"},{},{default:()=>"Send"})}`})}</div>
                ${d(m)}`})}`})}`})}
</section>`;while(!a);return d$1});

export { I };
//# sourceMappingURL=Contactform-3749e535.js.map
