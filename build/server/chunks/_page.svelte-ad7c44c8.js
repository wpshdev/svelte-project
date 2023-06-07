import { L, d, z } from './index2-8ecb42f0.js';
import { F as F$1 } from './Button-dca585bf.js';
import { E, M, R } from './Row-a840427f.js';
import { X, Y, Z } from './Input-19161eb3.js';
import { u } from './PageBanner-99b6c060.js';

const F={code:"@media(max-width: 575px){.banner{min-height:25rem !important;background-size:auto !important;background-position:center !important}}@media(max-width: 575px){.banner:after{background-color:rgba(0, 0, 0, 0.4) !important}}.contact_inner.svelte-dcdzen .contact_inner__content h2.svelte-dcdzen{font-size:2.813rem}.contact_inner.svelte-dcdzen .contact_inner__content p.svelte-dcdzen{font-size:1.25rem;line-height:2.125rem}.contact_inner.svelte-dcdzen .contact_inner__details .ptc.svelte-dcdzen{font-size:1.438rem}.contact_inner.svelte-dcdzen .contact_inner__details .stc.svelte-dcdzen{font-size:1.688rem}.contact-box.svelte-dcdzen.svelte-dcdzen{margin-top:-6rem}.contact-box.svelte-dcdzen h2.svelte-dcdzen{font-size:2.25rem;margin-bottom:3.125rem}.contact-box.svelte-dcdzen .contact-form{max-width:52.602rem;padding:4rem 10rem}@media(max-width: 767px){.contact-box.svelte-dcdzen .contact-form{padding:4rem}}.contact-box.svelte-dcdzen .contact-form textarea{height:13rem;margin:2rem 0}.contact-box.svelte-dcdzen .contact-form button{padding:0.7rem 3.125rem}.contact-box.svelte-dcdzen .contact-form button:hover{background-color:#263A63;color:#fff;border-color:#fff}.contact-img.svelte-dcdzen.svelte-dcdzen{height:31.313rem;background-position:center}@media(max-width: 767px){.contact-img.svelte-dcdzen.svelte-dcdzen{height:18.75rem}}",map:null},G="white",m="https://strapi.ulfbuilt.com:1337/",y=L((e,u$1,p,C)=>{let{data:n}=u$1;console.log(n);let g=n.data.attributes.phone,z$1=n.data.attributes.office_address,T=n.data.attributes.mailing_address,f="",v="",h="",b="",x="";u$1.data===void 0&&p.data&&n!==void 0&&p.data(n),e.css.add(F);let r,_;do r=!0,_=`${e.head+=`<!-- HEAD_svelte-1ugnjr_START -->${e.title=`<title>${d(n.data.attributes.title)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1ugnjr_END -->`,""}

${z(u,"PageBanner").$$render(e,{title:n.data.attributes.title,subTitle:n.data.attributes.Subheading,banner:m+n.data.attributes.featuredimage.data.attributes.url,bannerMobile:m+n.data.attributes.featuredimage.data.attributes.formats.medium.url},{},{})}
<section class="mx-10 contact_inner svelte-dcdzen">${z(E,"Container").$$render(e,{class:"mb-5 contact_inner__content"},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"12"},{},{default:()=>`<h2 class="text-center svelte-dcdzen">Let&#39;s get started...</h2>
                <h4 class="text-center pfont">- <span class="ptc svelte-dcdzen"><i>Ulf Lindroth</i></span></h4>
                <p class="two-columns pt-3 svelte-dcdzen"><!-- HTML_TAG_START -->${n.data.attributes.Subheading2}<!-- HTML_TAG_END --></p>`})}`})}`})}
    ${z(E,"Container").$$render(e,{class:"contact_inner__details"},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"4",class:"flex-vcenter"},{},{default:()=>`<h4 class="ptc pfont svelte-dcdzen">OUR OFFICE</h4>
                <h4 class="stc pb-5 svelte-dcdzen"><!-- HTML_TAG_START -->${z$1}<!-- HTML_TAG_END --></h4>
                <h4 class="ptc pfont svelte-dcdzen">MAILING ADDRESS</h4>
                <h4 class="stc pb-5 svelte-dcdzen"><!-- HTML_TAG_START -->${T}<!-- HTML_TAG_END --></h4>
                <h4 class="ptc pfont svelte-dcdzen">PHONE</h4>
                <h4 class="stc pb-5 svelte-dcdzen"><!-- HTML_TAG_START -->${g}<!-- HTML_TAG_END --></h4>`})}
            ${z(R,"Col").$$render(e,{md:"8"},{},{default:()=>'<iframe title="ULF BUILT" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12289.756932100185!2d-106.59873028576666!3d39.63982841472373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741d9050f708981%3A0x28a8cd6309f12845!2sULFBUILT!5e0!3m2!1sen!2sin!4v1681880274611!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'})}`})}`})}</section>
<div class="contact-img svelte-dcdzen" style="${"background-image: url("+d(m,!0)+d(n.data.attributes.formcover.data.attributes.url,!0)+");"}"></div>
<div class="contact-box container-fluid svelte-dcdzen">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{sm:"12",class:"contact-form tbc wtc border-radius"},{},{default:()=>`<h2 class="text-center pb-4 svelte-dcdzen">Connect with Us</h2>
                ${z(X,"Form").$$render(e,{method:"post"},{},{default:()=>`${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-user",placeholder:"Full Name",value:f},{value:a=>{f=a,r=!1;}},{})}
                        <div class="input-icon input-icon-user"></div>`})}
                    ${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-email",placeholder:"Email address",value:v},{value:a=>{v=a,r=!1;}},{})}
                        <div class="input-icon input-icon-email"></div>`})}
                    ${z(Y,"FormGroup").$$render(e,{class:"input-icon-box"},{},{default:()=>`${z(Z,"Input").$$render(e,{class:"input-phone",placeholder:"Phone Number",value:h},{value:a=>{h=a,r=!1;}},{})}
                        <div class="input-icon input-icon-phone"></div>`})}
                    ${z(Y,"FormGroup").$$render(e,{},{},{default:()=>`${z(Z,"Input").$$render(e,{type:"textarea",id:"yourMessage",placeholder:"Tell us about your project...",value:b},{value:a=>{b=a,r=!1;}},{})}`})}
                    ${z(F$1,"Button").$$render(e,{type:"button",color:G},{},{default:()=>"Send"})}`})}
                ${d(x)}`})}`})}`})}
</div>`;while(!r);return _});

export { y as default };
//# sourceMappingURL=_page.svelte-ad7c44c8.js.map
