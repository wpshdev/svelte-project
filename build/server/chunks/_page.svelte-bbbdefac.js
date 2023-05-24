import { L, d as d$1, z, P } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';

const u={code:".mx-8.svelte-gvnmmk{margin:8rem auto}section.svelte-gvnmmk{margin:8rem auto}",map:null};let d="https://strapi.ulfbuilt.com:1337/";const S=L((e,c,m,h)=>{let{data:i}=c;console.log(i);let T=i.data.attributes.Title,g=i.data.attributes.featuredimage.data.attributes.formats.large.url,_=i.data.attributes.Aboutsubheading,a=i.data.attributes;return c.data===void 0&&m.data&&i!==void 0&&m.data(i),e.css.add(u),`${e.head+=`<!-- HEAD_svelte-356b5t_START -->${e.title=`<title>${d$1(T)} - changes</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-356b5t_END -->`,""}

<div class="cover" style="${"background-image: url("+d$1(d,!0)+d$1(g,!0)+");"}"><h2 class="pfont">${d$1(T)}</h2>
    <p class="pfont">${d$1(_)}</p></div>
<section class="mw-1000 text-center svelte-gvnmmk"><h2><!-- HTML_TAG_START -->${a.AboutHeading}<!-- HTML_TAG_END --></h2>
        <p><!-- HTML_TAG_START -->${a.abouttext}<!-- HTML_TAG_END --></p></section>
<section class="svelte-gvnmmk">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4"><!-- HTML_TAG_START -->${a.Section1heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section1text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`
                <div><img${P("src",d+a.Section1image.data.attributes.formats.large.url,0)}${P("alt",a.Section1heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}</section>
<section class="svelte-gvnmmk">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div><img${P("src",d+a.Section2image.data.attributes.formats.large.url,0)}${P("alt",a.Section2heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4"><!-- HTML_TAG_START -->${a.Section2heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section2text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}</section>
<section class="svelte-gvnmmk">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"4",class:"align-self-center"},{},{default:()=>`<h3 class="mb-4"><!-- HTML_TAG_START -->${a.Section3heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section3text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div><img${P("src",d+a.Section3image.data.attributes.formats.large.url,0)}${P("alt",a.Section3heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}</section>
<section class="mx-8 svelte-gvnmmk">
    <div style="width:80vw;margin:auto;min-width:80vw;max-width:100vw;">${a.Section4image.data?`<img${P("src",d+a.Section4image.data.attributes.formats.large.url,0)}${P("alt",a.Section3heading,0)}>`:""}
        <p class="text-center"><i>${d$1(a.Section4text)}</i></p></div></section>
<section class="mw-1000 mx-8 svelte-gvnmmk">${z(E,"Container").$$render(e,{},{},{default:()=>`<h2 class="mb-5 text-center">${d$1(a.Section5heading)}</h2>
        <p class="text-left"><!-- HTML_TAG_START -->${a.Section5text}<!-- HTML_TAG_END --></p>`})}</section>
<section class="svelte-gvnmmk">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"12"},{},{default:()=>`<h2 class="text-center mb-5"><!-- HTML_TAG_START -->${a.Section6heading}<!-- HTML_TAG_END --></h2>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center blue-color-background p-5",style:"min-height: 440px;"},{},{default:()=>`<h3 class="mb-4 text-right"><!-- HTML_TAG_START -->${a.Section6subheading}<!-- HTML_TAG_END --></h3>
                <p class="text-right"><!-- HTML_TAG_START -->${a.Section6text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"5",style:"margin-left:-30px;"},{},{default:()=>`<div>
                <img${P("src",d+a.Section6image.data.attributes.formats.large.url,0)}${P("alt",a.Section6subheading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}
    ${z(E,"Container").$$render(e,{class:"mx-10"},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`<div>
                    <img${P("src",d+a.Section7image.data.attributes.formats.large.url,0)}${P("alt",a.Section7heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center silver-color-background p-5",style:"margin-left:-30px;min-height: 440px;"},{},{default:()=>`<h3 class="mb-4"><!-- HTML_TAG_START -->${a.Section7heading}<!-- HTML_TAG_END --></h3>
                <p><!-- HTML_TAG_START -->${a.Section7text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}
    ${z(E,"Container").$$render(e,{class:"mx-10"},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"1"},{},{})}
            ${z(R,"Col").$$render(e,{md:"5",class:"align-self-center blue-color-background p-5",style:"min-height: 440px;"},{},{default:()=>`<h3 class="mb-4 text-right"><!-- HTML_TAG_START -->${a.Section8heading}<!-- HTML_TAG_END --></h3>
                <p class="text-right"><!-- HTML_TAG_START -->${a.Section8text}<!-- HTML_TAG_END --></p>`})}
            ${z(R,"Col").$$render(e,{md:"5",style:"margin-left:-30px;"},{},{default:()=>`<div>
                <img${P("src",d+a.Section8image.data.attributes.formats.large.url,0)}${P("alt",a.Section8heading,0)} class="w-100"></div>`})}
            ${z(R,"Col").$$render(e,{md:"1"},{},{})}`})}`})}
</section>`});

export { S as default };
//# sourceMappingURL=_page.svelte-bbbdefac.js.map
