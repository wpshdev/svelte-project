import { L, d, z, P } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';

const v={code:".about-heading.svelte-1o2qmfc h2.svelte-1o2qmfc,h3.svelte-1o2qmfc.svelte-1o2qmfc{color:#263A63}.mw-1000.svelte-1o2qmfc h2.svelte-1o2qmfc{color:#263A63}.mx-8.svelte-1o2qmfc.svelte-1o2qmfc{margin:8rem auto}@media(max-width: 767px){.mx-8.svelte-1o2qmfc.svelte-1o2qmfc{margin:4rem auto}}section.svelte-1o2qmfc.svelte-1o2qmfc{margin:4rem auto}.remodel__bgimage.svelte-1o2qmfc.svelte-1o2qmfc{width:100%;margin:auto;min-width:100%;max-width:100%}@media(max-width: 575px){.remodel__bgimage.svelte-1o2qmfc.svelte-1o2qmfc{width:100vw;margin:auto;min-width:80vw;max-width:100vw}}@media(max-width: 575px){.remodel.svelte-1o2qmfc.svelte-1o2qmfc{padding:0}}.sets-parts.svelte-1o2qmfc h2.svelte-1o2qmfc{color:#3E3636}.sets-parts.svelte-1o2qmfc .sets-parts__content{min-height:440px}.sets-parts.svelte-1o2qmfc .sets-parts__mrl-30{margin-left:-30px}.sets-parts__mr-l.svelte-1o2qmfc.svelte-1o2qmfc{margin-left:-30px}@media(max-width: 991px){.sets-parts__mr-l.svelte-1o2qmfc.svelte-1o2qmfc{margin-left:-12px}}@media(max-width: 767px){.sets-parts__mr-l.svelte-1o2qmfc.svelte-1o2qmfc{margin-left:-30px}}.sets-parts__mr-r.svelte-1o2qmfc.svelte-1o2qmfc{margin-right:0}@media(max-width: 991px){.sets-parts__mr-r.svelte-1o2qmfc.svelte-1o2qmfc{margin-right:18px}}@media(max-width: 767px){.sets-parts__mr-r.svelte-1o2qmfc.svelte-1o2qmfc{margin-right:0}}@media(max-width: 767px){.mr-t.svelte-1o2qmfc.svelte-1o2qmfc{margin-top:1.5rem}}",map:null};let o="https://strapi.ulfbuilt.com:1337/";const h=L((e,i,c,$)=>{let{data:n}=i;console.log(n);let f=n.data.attributes.Title,_=n.data.attributes.featuredimage.data.attributes.formats.large.url,T=n.data.attributes.Aboutsubheading,a=n.data.attributes;return i.data===void 0&&c.data&&n!==void 0&&c.data(n),e.css.add(v),`${e.head+=`<!-- HEAD_svelte-356b5t_START -->${e.title=`<title>${d(f)} - changes</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-356b5t_END -->`,""}

<div class="cover" style="${"background-image: url("+d(o,!0)+d(_,!0)+");"}"><h2 class="pfont">${d(f)}</h2>
    <p class="pfont">${d(T)}</p></div>
<section class="mw-1000 text-center about-heading svelte-1o2qmfc"><h2 class="pb-2 svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.AboutHeading}<!-- HTML_TAG_END --></h2>
        <p><!-- HTML_TAG_START -->${a.abouttext}<!-- HTML_TAG_END --></p></section>
<section class="svelte-1o2qmfc">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4 mr-t svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.Section1heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section1text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`
                <div><img${P("src",o+a.Section1image.data.attributes.formats.large.url,0)}${P("alt",a.Section1heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}</section>
<section class="svelte-1o2qmfc">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div><img${P("src",o+a.Section2image.data.attributes.formats.large.url,0)}${P("alt",a.Section2heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4 mr-t svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.Section2heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section2text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}</section>
<section class="svelte-1o2qmfc">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4 mr-t svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.Section3heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section3text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div><img${P("src",o+a.Section3image.data.attributes.formats.large.url,0)}${P("alt",a.Section3heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}</section>
<section class="mx-8 remodel svelte-1o2qmfc">
    <div class="remodel__bgimage svelte-1o2qmfc">${a.Section4image.data?`<img${P("src",o+a.Section4image.data.attributes.formats.large.url,0)}${P("alt",a.Section3heading,0)}>`:""}
        <p class="text-center pt-3"><i><b>${d(a.Section4text)}</b></i></p></div></section>
<section class="mw-1000 mx-8 svelte-1o2qmfc">${z(E,"Container").$$render(e,{},{},{default:()=>`
        ${a.Section5image.data?`<img${P("src",o+a.Section5image.data.attributes.formats.large.url,0)}${P("alt",a.Section5heading,0)}>`:""}`})}</section>
<section class="sets-parts svelte-1o2qmfc">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"12"},{},{default:()=>`<h2 class="text-center mb-5 svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.Section6heading}<!-- HTML_TAG_END --></h2>`})}`})}
        ${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center blue-color-background sets-parts__content p-5"},{},{default:()=>`<h3 class="mb-4 text-right svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.Section6subheading}<!-- HTML_TAG_END --></h3>
                <p class="text-right"><!-- HTML_TAG_START -->${a.Section6text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div class="sets-parts__mr-l svelte-1o2qmfc">
                    <img${P("src",o+a.Section6image.data.attributes.formats.large.url,0)}${P("alt",a.Section6subheading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}
    ${z(E,"Container").$$render(e,{class:"mx-10"},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5",style:"z-index: 1;"},{},{default:()=>`<div class="sets-parts__mr-r svelte-1o2qmfc">
                    <img${P("src",o+a.Section7image.data.attributes.formats.large.url,0)}${P("alt",a.Section7heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center silver-color-background sets-parts__content sets-parts__mrl-30 p-5"},{},{default:()=>`<h3 class="mb-4 rp-fontsize svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.Section7heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section7text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}
    ${z(E,"Container").$$render(e,{class:"mx-10"},{},{default:()=>`${z(M,"Row").$$render(e,{class:"flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center blue-color-background sets-parts__content p-5"},{},{default:()=>`<h3 class="mb-4 text-right svelte-1o2qmfc"><!-- HTML_TAG_START -->${a.Section8heading}<!-- HTML_TAG_END --></h3>
                <p class="text-right"><!-- HTML_TAG_START -->${a.Section8text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div class="sets-parts__mr-l svelte-1o2qmfc">
                    <img${P("src",o+a.Section8image.data.attributes.formats.large.url,0)}${P("alt",a.Section8heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}
</section>`});

export { h as default };
//# sourceMappingURL=_page.svelte-d7387836.js.map
