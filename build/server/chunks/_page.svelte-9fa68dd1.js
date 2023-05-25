import { L, d, z, P } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';
import { C } from './Cta-e8ffdbdd.js';
import 'axios';

const m={code:".service-b__service-box.svelte-kzvpga.svelte-kzvpga{padding:3rem}@media(max-width: 991px){.service-b__service-box.svelte-kzvpga.svelte-kzvpga{padding:1rem 0rem;padding-left:10px}}@media(max-width: 767px){.service-b__service-box.svelte-kzvpga.svelte-kzvpga{padding:1rem 1rem}}.service-b__service-box__service-box-inner.svelte-kzvpga.svelte-kzvpga{display:flex;margin-bottom:20px}.service-b__service-box__service-box-inner__service-icon.svelte-kzvpga img.svelte-kzvpga{width:auto;background-color:#263A63;padding:10px 20px;box-shadow:3px 3px 3px #aaa;border-radius:10px;max-height:5rem;min-height:5rem}@media(max-width: 991px){.service-b__service-box__service-box-inner__service-icon.svelte-kzvpga img.svelte-kzvpga{padding:8px 10px;max-height:4rem;min-height:4rem}}.service-b__service-box__service-box-inner.svelte-kzvpga h4.svelte-kzvpga{align-self:center;padding-left:20px}@media(max-width: 991px){.service-b__service-box__service-box-inner.svelte-kzvpga h4.svelte-kzvpga{align-self:center;padding-left:9px}}.sets-us-apart__content{display:flex;flex-direction:column;justify-content:center}.sets-us-apart__content h4.svelte-kzvpga.svelte-kzvpga{font-weight:400;text-transform:uppercase}@media(max-width: 767px){.text-right.svelte-kzvpga.svelte-kzvpga,.txt-center.svelte-kzvpga.svelte-kzvpga{text-align:center}.service-b .col-md-4:nth-child(3){background-image:unset}}",map:null},r="https://strapi.ulfbuilt.com:1337/",h=L((s,l,d$1,g)=>{let{data:v}=l;console.log(v);let e=v.data.attributes;return l.data===void 0&&d$1.data&&v!==void 0&&d$1.data(v),s.css.add(m),`${s.head+=`<!-- HEAD_svelte-hogjyz_START -->${s.title=`<title>${d(e.Title)}</title>`,""}<meta name="description" content="ULF BUILT"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- HEAD_svelte-hogjyz_END -->`,""}
<div class="cover" style="${"background-image: url("+d(r,!0)+d(e.Cover.data[0].attributes.formats.large.url,!0)+");"}"><h2>${d(e.Title)}</h2>
    <p>${d(e.Subheading)}</p></div>
<section class="service-b">${z(E,"Container").$$render(s,{},{},{default:()=>`<h2 class="text-center mb-5 py-3">${d(e.section1heading)}</h2>
        ${z(M,"Row").$$render(s,{},{},{default:()=>`${z(R,"Col").$$render(s,{md:"4",sm:"6",xs:"12"},{},{default:()=>`<div class="service-b__service-box svelte-kzvpga"><div class="service-b__service-box__service-box-inner svelte-kzvpga"><div class="service-b__service-box__service-box-inner__service-icon svelte-kzvpga"><img src="${d(r,!0)+d(e.section1item1icon.data.attributes.formats.medium.url,!0)}"${P("alt",e.section1item1heading,0)} class="svelte-kzvpga"></div>
                        <h4 class="svelte-kzvpga">${d(e.section1item1heading)}</h4></div>
                    <p>${d(e.section1item1text)}</p></div>`})}
            ${z(R,"Col").$$render(s,{md:"4",sm:"6",xs:"12"},{},{default:()=>`<div class="service-b__service-box svelte-kzvpga"><div class="service-b__service-box__service-box-inner svelte-kzvpga"><div class="service-b__service-box__service-box-inner__service-icon svelte-kzvpga"><img src="${d(r,!0)+d(e.section1item2icon.data.attributes.formats.medium.url,!0)}"${P("alt",e.section1item2heading,0)} class="svelte-kzvpga"></div>
                        <h4 class="svelte-kzvpga">${d(e.section1item2heading)}</h4></div>
                    <p>${d(e.section1item2text)}</p></div>`})}
            ${z(R,"Col").$$render(s,{md:"4",sm:"6",xs:"12"},{},{default:()=>`<div class="service-b__service-box svelte-kzvpga"><div class="service-b__service-box__service-box-inner svelte-kzvpga"><div class="service-b__service-box__service-box-inner__service-icon svelte-kzvpga"><img src="${d(r,!0)+d(e.section1item3icon.data.attributes.formats.medium.url,!0)}"${P("alt",e.section1item3heading,0)} class="svelte-kzvpga"></div>
                        <h4 class="svelte-kzvpga">${d(e.section1item3heading)}</h4></div>
                    <p>${d(e.section1item3text)}</p></div>`})}
            ${z(R,"Col").$$render(s,{md:"4",sm:"6",xs:"12"},{},{default:()=>`<div class="service-b__service-box svelte-kzvpga"><div class="service-b__service-box__service-box-inner svelte-kzvpga"><div class="service-b__service-box__service-box-inner__service-icon svelte-kzvpga"><img src="${d(r,!0)+d(e.section1item4icon.data.attributes.formats.medium.url,!0)}"${P("alt",e.section1item4heading,0)} class="svelte-kzvpga"></div>
                        <h4 class="svelte-kzvpga">${d(e.section1item4heading)}</h4></div>
                    <p>${d(e.section1item4text)}</p></div>`})}
            ${z(R,"Col").$$render(s,{md:"4",sm:"6",xs:"12"},{},{default:()=>`<div class="service-b__service-box svelte-kzvpga"><div class="service-b__service-box__service-box-inner svelte-kzvpga"><div class="service-b__service-box__service-box-inner__service-icon svelte-kzvpga"><img src="${d(r,!0)+d(e.section1item5icon.data.attributes.formats.medium.url,!0)}"${P("alt",e.section1item5heading,0)} class="svelte-kzvpga"></div>
                        <h4 class="svelte-kzvpga">${d(e.section1item5heading)}</h4></div>
                    <p>${d(e.section1item5text)}</p></div>`})}
            ${z(R,"Col").$$render(s,{md:"4",sm:"6",xs:"12"},{},{default:()=>`<div class="service-b__service-box svelte-kzvpga"><div class="service-b__service-box__service-box-inner svelte-kzvpga"><div class="service-b__service-box__service-box-inner__service-icon svelte-kzvpga"><img src="${d(r,!0)+d(e.section1item6icon.data.attributes.formats.medium.url,!0)}"${P("alt",e.section1item6heading,0)} class="svelte-kzvpga"></div>
                        <h4 class="svelte-kzvpga">${d(e.section1item6heading)}</h4></div>
                    <p>${d(e.section1item6text)}</p></div>`})}`})}`})}</section>
<section class="mx-10 sets-us-apart">${z(E,"Container").$$render(s,{},{},{default:()=>`<h2 class="text-center mb-5 py-3">${d(e.section2mainheading)}</h2>
            ${z(M,"Row").$$render(s,{noGutters:!0,class:"mw-1000 justify-content-center"},{},{default:()=>`${z(R,"Col").$$render(s,{md:"5",class:"sets-us-apart__content"},{},{default:()=>`<h4 class="text-right pfont px-5 py-3 svelte-kzvpga"><!-- HTML_TAG_START -->${e.section2heading}<!-- HTML_TAG_END --></h4>
                    <p class="text-right px-5 py-3 blue-color-background svelte-kzvpga"><!-- HTML_TAG_START -->${e.section2text}<!-- HTML_TAG_END --></p>`})}
                ${z(R,"Col").$$render(s,{md:"6"},{},{default:()=>`<img src="${d(r,!0)+d(e.section2image.data.attributes.formats.medium.url,!0)}"${P("alt",e.section2heading,0)} class="w-100">`})}`})}`})}</section>
<section class="mx-10 sets-us-apart">${z(E,"Container").$$render(s,{},{},{default:()=>`${z(M,"Row").$$render(s,{noGutters:!0,class:"mw-1000 justify-content-center flex-md-row flex-column-reverse"},{},{default:()=>`${z(R,"Col").$$render(s,{md:"6"},{},{default:()=>`<img src="${d(r,!0)+d(e.section3image.data.attributes.formats.medium.url,!0)}"${P("alt",e.section3heading,0)} class="w-100">`})}
            ${z(R,"Col").$$render(s,{md:"5",class:"sets-us-apart__content"},{},{default:()=>`<h4 class="px-5 txt-center py-3 pfont svelte-kzvpga"><!-- HTML_TAG_START -->${e.section3heading}<!-- HTML_TAG_END --></h4>
                <p class="px-5 txt-center py-3 blue-color-background svelte-kzvpga"><!-- HTML_TAG_START -->${e.section3text}<!-- HTML_TAG_END --></p>`})}`})}`})}</section>
<section class="mx-10 sets-us-apart">${z(E,"Container").$$render(s,{},{},{default:()=>`${z(M,"Row").$$render(s,{noGutters:!0,class:"mw-1000 justify-content-center"},{},{default:()=>`${z(R,"Col").$$render(s,{md:"5",class:"sets-us-apart__content"},{},{default:()=>`<h4 class="text-right pfont px-5 py-3 svelte-kzvpga"><!-- HTML_TAG_START -->${e.section4heading}<!-- HTML_TAG_END --></h4>
                    <p class="text-right px-5 py-3 blue-color-background svelte-kzvpga"><!-- HTML_TAG_START -->${e.section4text}<!-- HTML_TAG_END --></p>`})}
                ${z(R,"Col").$$render(s,{md:"6"},{},{default:()=>`<img src="${d(r,!0)+d(e.section4image.data.attributes.formats.medium.url,!0)}"${P("alt",e.section4heading,0)} class="w-100">`})}`})}`})}</section>
<section class="height-100vh"><img src="${d(r,!0)+d(e.section5image.data.attributes.formats.medium.url,!0)}"${P("alt",e.title,0)} class="w-100"></section>
<section>${z(E,"Container").$$render(s,{},{},{default:()=>`<h2 class="text-center mb-3 py-3">${d(e.section6heading)}</h2>
        <p class="mb-2 py-3 two-columns"><!-- HTML_TAG_START -->${e.section6text}<!-- HTML_TAG_END --></p>
        <div class="text-right svelte-kzvpga"><a class="btn btn-secondary" href="/contact">${d(e.section6btn)}</a></div>`})}</section>
${z(C,"Cta").$$render(s,{},{},{})}`});

export { h as default };
//# sourceMappingURL=_page.svelte-9fa68dd1.js.map
