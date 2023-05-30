import { L, d, z, P } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';
import { a } from './Animate-8c22d91b.js';
import { p } from './PageBanner-a513e250.js';
import { I } from './Contactform-3749e535.js';
import './Button-69b97a18.js';
import './Input-c814fab0.js';

const $={code:".about-heading.svelte-qwtsfk h2.svelte-qwtsfk{color:#263A63}.mw-1000.svelte-qwtsfk h2.svelte-qwtsfk{color:#263A63}.mx-8.svelte-qwtsfk.svelte-qwtsfk{margin:8rem auto}@media(max-width: 767px){.mx-8.svelte-qwtsfk.svelte-qwtsfk{margin:4rem auto}}section.svelte-qwtsfk.svelte-qwtsfk{margin:8rem auto}.remodel__bgimage.svelte-qwtsfk.svelte-qwtsfk{width:100%;margin:auto;min-width:100%;max-width:100%}@media(max-width: 575px){.remodel__bgimage.svelte-qwtsfk.svelte-qwtsfk{width:100vw;margin:auto;min-width:80vw;max-width:100vw}}@media(max-width: 575px){.remodel.svelte-qwtsfk.svelte-qwtsfk{padding:0}}.sets-parts.svelte-qwtsfk h2.svelte-qwtsfk{color:#3E3636}.sets-parts.svelte-qwtsfk .sets-parts__content{min-height:440px}.sets-parts.svelte-qwtsfk .sets-parts__mrl-30{margin-left:-30px}.sets-parts__mr-l.svelte-qwtsfk.svelte-qwtsfk{margin-left:-30px}@media(max-width: 991px){.sets-parts__mr-l.svelte-qwtsfk.svelte-qwtsfk{margin-left:-12px}}@media(max-width: 767px){.sets-parts__mr-l.svelte-qwtsfk.svelte-qwtsfk{margin-left:-30px}}.sets-parts__mr-r.svelte-qwtsfk.svelte-qwtsfk{margin-right:0}@media(max-width: 991px){.sets-parts__mr-r.svelte-qwtsfk.svelte-qwtsfk{margin-right:18px}}@media(max-width: 767px){.sets-parts__mr-r.svelte-qwtsfk.svelte-qwtsfk{margin-right:0}}@media(max-width: 767px){.mr-t.svelte-qwtsfk.svelte-qwtsfk{margin-top:1.5rem}}.talktous.svelte-qwtsfk.svelte-qwtsfk{text-align:center}.talktous__btns.svelte-qwtsfk a.svelte-qwtsfk:nth-child(1){margin:1rem}",map:null};let n="https://strapi.ulfbuilt.com:1337/";const b=L((e,m,c,p$1)=>{let{data:i}=m;console.log(i);let f=i.data.attributes.Title,w=i.data.attributes.featuredimage.data.attributes.formats.large.url,T=i.data.attributes.Aboutsubheading,a$1=i.data.attributes;return m.data===void 0&&c.data&&i!==void 0&&c.data(i),e.css.add($),`${e.head+=`<!-- HEAD_svelte-1d0aar_START -->${e.title=`<title>${d(f)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1d0aar_END -->`,""}


${z(p,"PageBanner").$$render(e,{title:f,subTitle:T,banner:n+w},{},{})}

<section class="mw-1000 text-center about-heading svelte-qwtsfk"><h2 class="pb-2 svelte-qwtsfk"><!-- HTML_TAG_START -->${a$1.AboutHeading}<!-- HTML_TAG_END --></h2>
        <p><!-- HTML_TAG_START -->${a$1.abouttext}<!-- HTML_TAG_END --></p></section>
<section class="svelte-qwtsfk">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4 mr-t svelte-qwtsfk"><!-- HTML_TAG_START -->${a$1.Section1heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a$1.Section1text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`${z(a,"Animate").$$render(e,{},{},{default:()=>`<div><img${P("src",n+a$1.Section1image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section1heading,0)} class="w-100"></div>`})}`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}</section>
<section class="svelte-qwtsfk">${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div><img${P("src",n+a$1.Section2image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section2heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4 mr-t svelte-qwtsfk"><!-- HTML_TAG_START -->${a$1.Section2heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a$1.Section2text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}`})}</section>
<section class="svelte-qwtsfk">${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
                ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4 mr-t svelte-qwtsfk"><!-- HTML_TAG_START -->${a$1.Section3heading}<!-- HTML_TAG_END --></h3>
                    <p><!-- HTML_TAG_START -->${a$1.Section3text}<!-- HTML_TAG_END --></p>`})}
                ${z(R,"Col").$$render(e,{md:"1"},{},{})}
                ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div><img${P("src",n+a$1.Section3image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section3heading,0)} class="w-100"></div>`})}
                ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}`})}</section>
<section class="mx-8 remodel svelte-qwtsfk">${z(a,"Animate").$$render(e,{},{},{default:()=>`<div class="remodel__bgimage svelte-qwtsfk">${a$1.Section4image.data?`<img${P("src",n+a$1.Section4image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section3heading,0)}>`:""}
            <p class="text-center pt-3"><i><b>${d(a$1.Section4text)}</b></i></p></div>`})}</section>
<section class="mw-1000 mx-8 svelte-qwtsfk">${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E,"Container").$$render(e,{},{},{default:()=>`
            ${a$1.Section5image.data?`<img${P("src",n+a$1.Section5image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section5heading,0)}>`:""}`})}`})}</section>
<section class="sets-parts svelte-qwtsfk">${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"12"},{},{default:()=>`<h2 class="text-center mb-5 svelte-qwtsfk"><!-- HTML_TAG_START -->${a$1.Section6heading}<!-- HTML_TAG_END --></h2>`})}`})}
            ${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
                ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center blue-color-background sets-parts__content p-5"},{},{default:()=>`<h3 class="mb-4 text-right"><!-- HTML_TAG_START -->${a$1.Section6subheading}<!-- HTML_TAG_END --></h3>
                    <p class="text-right"><!-- HTML_TAG_START -->${a$1.Section6text}<!-- HTML_TAG_END --></p>`})}
                ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div class="sets-parts__mr-l svelte-qwtsfk">
                        <img${P("src",n+a$1.Section6image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section6subheading,0)} class="w-100"></div>`})}
                ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}`})}
    ${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E,"Container").$$render(e,{class:"mx-10"},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
                ${z(R,"Col").$$render(e,{md:"5",style:"z-index: 1;"},{},{default:()=>`<div class="sets-parts__mr-r svelte-qwtsfk">
                        <img${P("src",n+a$1.Section7image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section7heading,0)} class="w-100"></div>`})}
                ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center silver-color-background sets-parts__content sets-parts__mrl-30 p-5"},{},{default:()=>`<h3 class="mb-4 rp-fontsize"><!-- HTML_TAG_START -->${a$1.Section7heading}<!-- HTML_TAG_END --></h3>
                    <p><!-- HTML_TAG_START -->${a$1.Section7text}<!-- HTML_TAG_END --></p>`})}
                ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}`})}
    ${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E,"Container").$$render(e,{class:"mx-10"},{},{default:()=>`${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
                ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center blue-color-background sets-parts__content p-5"},{},{default:()=>`<h3 class="mb-4 text-right"><!-- HTML_TAG_START -->${a$1.Section8heading}<!-- HTML_TAG_END --></h3>
                    <p class="text-right"><!-- HTML_TAG_START -->${a$1.Section8text}<!-- HTML_TAG_END --></p>`})}
                ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div class="sets-parts__mr-l svelte-qwtsfk">
                        <img${P("src",n+a$1.Section8image.data.attributes.formats.large.url,0)}${P("alt",a$1.Section8heading,0)} class="w-100"></div>`})}
                ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}`})}</section>
<section class="talktous svelte-qwtsfk">${z(E,"Container").$$render(e,{},{},{default:()=>`<h2>Home Builder in Vail Valley, Colorado</h2>
        <p>We build and remodel custom homes in Vail, Beaver Creek and the Central Rockies of Colorado.</p>
        <div class="talktous__btns svelte-qwtsfk"><a href="#" class="btn btn-secondary svelte-qwtsfk">Talk to Us</a>
            <a href="#" class="btn btn-inverted svelte-qwtsfk">Explore our Gallery</a></div>`})}</section>
${z(I,"Contactform").$$render(e,{},{},{})}`});

export { b as default };
//# sourceMappingURL=_page.svelte-9a8f67b2.js.map
