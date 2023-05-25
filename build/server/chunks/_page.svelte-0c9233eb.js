import { L, d, z } from './index-87618b6e.js';
import { F as F$1 } from './Button-69b97a18.js';
import { E, M, R } from './Row-0fc34542.js';
import { X, Y, Z } from './Input-c814fab0.js';

const F={code:"@media(max-width: 767px){.contact-img.svelte-10ll2ws{height:300px}}",map:null},G="white",_="https://strapi.ulfbuilt.com:1337/",H=L((e,u,p,C)=>{let{data:a}=u;console.log(a);let T=a.data.attributes.phone,$=a.data.attributes.office_address,g=a.data.attributes.mailing_address,m="",f="",h="",v="",w="";u.data===void 0&&p.data&&a!==void 0&&p.data(a),e.css.add(F);let n,b;do n=!0,b=`${e.head+=`<!-- HEAD_svelte-1ugnjr_START -->${e.title=`<title>${d(a.data.attributes.title)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1ugnjr_END -->`,""}
<div class="cover" style="${"background-image: url("+d(_,!0)+d(a.data.attributes.featuredimage.data.attributes.formats.large.url,!0)+");"}"><h2 class="pfont">${d(a.data.attributes.title)}</h2>
    <p class="pfont">${d(a.data.attributes.Subheading)}</p></div>
<section class="mx-10">${z(E,"Container").$$render(e,{class:"mb-5"},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"12"},{},{default:()=>`<h2 class="text-center">Let&#39;s get started...</h2>
                <h4 class="text-center pfont">- <span class="ptc"><i>Ulf Lindroth</i></span></h4>
                <p class="two-columns pt-3"><!-- HTML_TAG_START -->${a.data.attributes.Subheading2}<!-- HTML_TAG_END --></p>`})}`})}`})}
    ${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"4",class:"flex-vcenter"},{},{default:()=>`<h4 class="ptc pfont">OUR OFFICE</h4>
                <h4 class="stc pb-5"><!-- HTML_TAG_START -->${$}<!-- HTML_TAG_END --></h4>
                <h4 class="ptc pfont">MAILING ADDRESS</h4>
                <h4 class="stc pb-5"><!-- HTML_TAG_START -->${g}<!-- HTML_TAG_END --></h4>
                <h4 class="ptc pfont">PHONE</h4>
                <h4 class="stc pb-5"><!-- HTML_TAG_START -->${T}<!-- HTML_TAG_END --></h4>`})}
            ${z(R,"Col").$$render(e,{md:"8"},{},{default:()=>'<iframe title="ULF BUILT" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12289.756932100185!2d-106.59873028576666!3d39.63982841472373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741d9050f708981%3A0x28a8cd6309f12845!2sULFBUILT!5e0!3m2!1sen!2sin!4v1681880274611!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'})}`})}`})}</section>
<div class="contact-img svelte-10ll2ws" style="${"background-image: url("+d(_,!0)+d(a.data.attributes.formcover.data.attributes.formats.large.url,!0)+");"}"></div>
<div class="contact-box container-fluid">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{sm:"12",md:{size:6,offset:3},class:"contact-form tbc wtc border-radius"},{},{default:()=>`<h2 class="text-center pb-4">Connect with Us</h2>
                ${z(X,"Form").$$render(e,{method:"post"},{},{default:()=>`${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-user",placeholder:"Full Name",value:m},{value:s=>{m=s,n=!1;}},{})}
                        <div class="input-icon input-icon-user"></div>`})}
                    ${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-email",placeholder:"Email address",value:f},{value:s=>{f=s,n=!1;}},{})}
                        <div class="input-icon input-icon-email"></div>`})}
                    ${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-phone",placeholder:"Phone Number",value:h},{value:s=>{h=s,n=!1;}},{})}
                        <div class="input-icon input-icon-phone"></div>`})}
                    ${z(Y,"FormGroup").$$render(e,{},{},{default:()=>`${z(Z,"Input").$$render(e,{type:"textarea",id:"yourMessage",placeholder:"Tell us about your project...",value:v},{value:s=>{v=s,n=!1;}},{})}`})}
                    ${z(F$1,"Button").$$render(e,{type:"button",color:G},{},{default:()=>"Send"})}`})}
                ${d(w)}`})}`})}`})}
</div>`;while(!n);return b});

export { H as default };
//# sourceMappingURL=_page.svelte-0c9233eb.js.map
