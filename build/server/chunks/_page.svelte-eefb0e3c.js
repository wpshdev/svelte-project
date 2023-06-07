import { L, d, z, P } from './index2-8ecb42f0.js';
import { a } from './Animate-9cc2ed0c.js';
import { y } from './Cta-f1a2fc95.js';
import { u } from './PageBanner-99b6c060.js';
import { E, M, R } from './Row-a840427f.js';
import 'axios';

const m={code:'p{font-size:1.125rem;line-height:2rem}section.svelte-uvzwwg.svelte-uvzwwg{min-height:20vh}.our-process.svelte-uvzwwg.svelte-uvzwwg{min-height:40vh}.our-process__heading.svelte-uvzwwg.svelte-uvzwwg{margin-bottom:7vh}.our-process__heading.svelte-uvzwwg p span{color:#00ADEE}.our-process__heading.svelte-uvzwwg h2.svelte-uvzwwg{font-size:4rem;margin:3rem 0 2rem;color:#263A63}.our-process.svelte-uvzwwg img.svelte-uvzwwg{margin-top:1rem;height:auto}.our-process__paragraph.svelte-uvzwwg.svelte-uvzwwg{background-color:#F2F2F2;padding:3rem;max-width:40rem;margin-top:-5rem;z-index:2;position:relative}.our-process__paragraph.svelte-uvzwwg p{font-size:1.25rem}@media(max-width: 767px){.our-process__paragraph.svelte-uvzwwg.svelte-uvzwwg{width:85vw;font-size:1.3rem;padding:3rem 1.5rem;margin-top:-2rem}}.phase-heading.svelte-uvzwwg.svelte-uvzwwg{background-color:#F2F2F2;padding:3rem 0}.phase-heading.svelte-uvzwwg h3{font-size:2.25rem}@media(max-width: 767px){.phase-heading.svelte-uvzwwg h3{font-size:1.688rem;width:70%;margin:auto}}.phase-heading.svelte-uvzwwg h3 span{font-family:"Times New Roman", sans-serif;color:#263A63}.phase1-img.svelte-uvzwwg.svelte-uvzwwg{background-image:var(--phs1);background-size:cover;height:90vh}@media(max-width: 767px){.phase1-img.svelte-uvzwwg.svelte-uvzwwg{height:40vh}}.phase2-img.svelte-uvzwwg.svelte-uvzwwg{background-image:var(--phs2);background-size:cover;height:90vh}@media(max-width: 767px){.phase2-img.svelte-uvzwwg.svelte-uvzwwg{height:40vh}}.phase.svelte-uvzwwg.svelte-uvzwwg{margin-bottom:0}.phase.svelte-uvzwwg .phase-container{max-width:95%}@media(max-width: 767px){.phase.svelte-uvzwwg.svelte-uvzwwg{padding-left:0;padding-right:0}}.phase.svelte-uvzwwg h3.svelte-uvzwwg{font-weight:400}@media(max-width: 767px){.phase.svelte-uvzwwg h3.svelte-uvzwwg{font-size:1.2rem}}.phase.svelte-uvzwwg h3{font-size:2.5rem}.phase.svelte-uvzwwg .phase__row{margin-top:-19.3rem;justify-content:center;align-items:center;position:relative;z-index:1}@media(max-width: 767px){.phase.svelte-uvzwwg .phase__row{margin-top:-9.5rem}}.phase.svelte-uvzwwg .num.svelte-uvzwwg{font-size:20rem;font-family:"Times New Roman", sans-serif;color:#1E2D39;display:block}@media(max-width: 767px){.phase.svelte-uvzwwg .num.svelte-uvzwwg{font-size:8rem}}.phase__heading.svelte-uvzwwg.svelte-uvzwwg{background-color:#1E2D39;padding:1rem 0;width:100%;margin-top:1rem}.phase__heading.svelte-uvzwwg h3.svelte-uvzwwg{text-transform:uppercase;font-family:"Raleway", open sans;color:#fff;margin-bottom:0}@media(max-width: 767px){.phase__heading.svelte-uvzwwg.svelte-uvzwwg{margin-bottom:2rem}}.phase__grid.svelte-uvzwwg.svelte-uvzwwg{display:grid;grid-template-columns:repeat(2, 1fr);margin-top:-12rem;width:90%;margin-left:auto}@media(max-width: 767px){.phase__grid.svelte-uvzwwg.svelte-uvzwwg{grid-template-columns:repeat(1, 1fr);width:80%;margin:auto;margin-top:-5rem}}.phase__grid__item.svelte-uvzwwg.svelte-uvzwwg{padding:9rem 4rem 4rem}@media(max-width: 767px){.phase__grid__item.svelte-uvzwwg.svelte-uvzwwg{padding:1rem 0}}.phase__grid__item.svelte-uvzwwg h4.svelte-uvzwwg{font-size:2.25rem}.phase__grid__item.svelte-uvzwwg.svelte-uvzwwg:nth-child(odd){padding-left:8vw;line-height:2;font-style:italic}@media(max-width: 767px){.phase__grid__item.svelte-uvzwwg.svelte-uvzwwg:nth-child(odd){padding:2rem 1rem}}.phase__grid__item.svelte-uvzwwg:nth-child(odd) span.svelte-uvzwwg{color:#00ADEE;font-style:normal;font-size:1.4em;font-weight:500}.phase__grid__item.svelte-uvzwwg:nth-child(odd) h4.svelte-uvzwwg{margin:2rem 0;font-style:normal;font-size:2.813rem}.phase__grid__item.svelte-uvzwwg:nth-child(odd) p{font-size:1.25rem}.phase__grid__item.svelte-uvzwwg.svelte-uvzwwg:nth-child(even){padding-top:18rem;background-color:#F2F2F2;display:flex;align-items:flex-end;flex-direction:column;padding-right:10rem}.phase__grid__item.svelte-uvzwwg:nth-child(even) p:last-child{margin-bottom:0}@media(max-width: 767px){.phase__grid__item.svelte-uvzwwg.svelte-uvzwwg:nth-child(even){padding:3rem 3.25rem;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}}.phase__grid__item.last-even.svelte-uvzwwg.svelte-uvzwwg{padding-bottom:15rem}@media(max-width: 767px){.phase__grid__item.last-even.svelte-uvzwwg.svelte-uvzwwg{padding-bottom:1.5rem}}@media(max-width: 767px){.phase__grid__item.svelte-uvzwwg.svelte-uvzwwg{padding:6rem 1rem}}.phase__grid.scnd-row.svelte-uvzwwg.svelte-uvzwwg{margin-top:0}@media(max-width: 767px){.phase__grid.svelte-uvzwwg.svelte-uvzwwg{display:block}}.phase__banner.svelte-uvzwwg.svelte-uvzwwg{background-image:var(--phs1Banner);background-size:cover;height:90vh}.phase__banner.banner2.svelte-uvzwwg.svelte-uvzwwg{background-image:var(--phs2Banner1)}.phase__banner.banner3.svelte-uvzwwg.svelte-uvzwwg{background-image:var(--phs2Banner2)}@media(max-width: 767px){.phase__banner.svelte-uvzwwg.svelte-uvzwwg{height:40vh}}.phase-banner-separator.svelte-uvzwwg.svelte-uvzwwg{background-image:var(--phsSeparator);background-size:cover;height:90vh;margin:0}@media(max-width: 767px){.phase-banner-separator.svelte-uvzwwg.svelte-uvzwwg{height:40vh}}.phase-banner-paragraph.svelte-uvzwwg.svelte-uvzwwg{display:block;margin-top:0;background-color:#F2F2F2}.phase-banner-paragraph.svelte-uvzwwg div.svelte-uvzwwg{padding:3rem 0;text-align:center;max-width:70rem;margin:0 auto}@media(max-width: 767px){.phase1-img.svelte-uvzwwg.svelte-uvzwwg,.phase__banner.svelte-uvzwwg.svelte-uvzwwg,.phase2-img.svelte-uvzwwg.svelte-uvzwwg,.phase-banner-separator.svelte-uvzwwg.svelte-uvzwwg{height:30vh}}',map:null},r="https://strapi.ulfbuilt.com:1337",$=L((s,g,l,c)=>{let{data:d$1}=g;const e=d$1.data.attributes;return g.data===void 0&&l.data&&d$1!==void 0&&l.data(d$1),s.css.add(m),`${s.head+=`<!-- HEAD_svelte-9eu5dh_START -->${s.title=`<title>${d(e.section1heading)}</title>`,""}<meta name="description" content="ULF BUILT"><link rel="preload" href="${d(r,!0)+d(e.Cover.data[0].attributes.formats.large.url,!0)}" as="image"><!-- HEAD_svelte-9eu5dh_END -->`,""}
${z(u,"PageBanner").$$render(s,{title:"Our Process",subTitle:"Home Builder and Remodeler in Vail, Colorado",banner:r+e.Cover.data[0].attributes.url},{},{})}
<section class="our-process svelte-uvzwwg">${z(E,"Container").$$render(s,{},{},{default:()=>`${z(M,"Row").$$render(s,{},{},{default:()=>`${z(R,"Col").$$render(s,{class:"md-12 text-center"},{},{default:()=>`<div class="our-process__heading svelte-uvzwwg"><h2 class="svelte-uvzwwg">${d(e.section1heading)}</h2>
                        <!-- HTML_TAG_START -->${e.section1text}<!-- HTML_TAG_END --></div>`})}`})}
            ${z(M,"Row").$$render(s,{},{},{default:()=>`${z(R,"Col").$$render(s,{class:"md-12"},{},{default:()=>`${z(a,"Animate").$$render(s,{},{},{default:()=>`<img src="${d(r,!0)+d(e.section2image.data.attributes.formats.large.url,!0)}" srcset="${d(r,!0)+d(e.section2image.data.attributes.formats.small.url,!0)+` 330w,
                                `+d(r,!0)+d(e.section2image.data.attributes.formats.medium.url,!0)+` 660w,
                                `+d(r,!0)+d(e.section2image.data.attributes.formats.large.url,!0)+" 990w"}" sizes="(max-width: 480px) 330px,
                               (max-width: 960px) 660px,
                               990px" width="330" height="170"${P("alt",e.section2image.data.attributes.alternativeText,0)} class="svelte-uvzwwg">
                        <div class="our-process__paragraph mx-auto svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section2text}<!-- HTML_TAG_END --></div>`})}`})}`})}`})}</section>

<section class="phase-heading svelte-uvzwwg">${z(a,"Animate").$$render(s,{},{},{default:()=>`${z(E,"Container").$$render(s,{},{},{default:()=>`${z(M,"Row").$$render(s,{},{},{default:()=>`${z(R,"Col").$$render(s,{md:{size:"6",offset:3},class:"text-center"},{},{default:()=>`<h3><!-- HTML_TAG_START -->${e.section3heading}<!-- HTML_TAG_END --></h3>`})}`})}`})}`})}</section>
${z(a,"Animate").$$render(s,{},{},{default:()=>`<section class="phase1-img svelte-uvzwwg" style="${"--phs1: url("+d(r,!0)+d(e.section3image.data.attributes.url,!0)+")"}"></section>`})}
<section class="phase svelte-uvzwwg">${z(a,"Animate").$$render(s,{},{},{default:()=>`${z(E,"Container").$$render(s,{class:"phase-container"},{},{default:()=>`${z(M,"Row").$$render(s,{class:"text-center phase__row"},{},{default:()=>`${z(R,"Col").$$render(s,{xs:"2"},{},{default:()=>'<span class="num svelte-uvzwwg">1</span>'})}
                ${z(R,"Col").$$render(s,{xs:"10"},{},{default:()=>`<div class="phase__heading svelte-uvzwwg"><h3 class="svelte-uvzwwg">${d(e.section3phase1mainheading)}</h3></div>`})}`})}`})}`})}
    ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__grid svelte-uvzwwg"><div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section4heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section4subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section4text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section4righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section5heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section5subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section5text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item last-even svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section5righttext}<!-- HTML_TAG_END --></div></div>`})}
    ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__banner svelte-uvzwwg" style="${"--phs1Banner: url("+d(r,!0)+d(e.section6image.data.attributes.url,!0)+")"}"></div>`})}
   ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__grid scnd-row svelte-uvzwwg"><div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section7heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section7subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section7text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section7righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section8heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section8subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section8text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item last-even svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section8righttext}<!-- HTML_TAG_END --></div></div>`})}</section>
${z(a,"Animate").$$render(s,{},{},{default:()=>`<section class="phase-banner-separator svelte-uvzwwg" style="${"--phsSeparator: url("+d(r,!0)+d(e.section9image.data.attributes.formats.large.url,!0)+")"}"></section>`})}

<secton class="phase-banner-paragraph svelte-uvzwwg">${z(a,"Animate").$$render(s,{},{},{default:()=>`${z(E,"Container").$$render(s,{},{},{default:()=>`${z(M,"Row").$$render(s,{},{},{default:()=>`${z(R,"Col").$$render(s,{},{},{default:()=>`<div class="svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section9text}<!-- HTML_TAG_END --></div>`})}`})}`})}`})}</secton>

${z(a,"Animate").$$render(s,{},{},{default:()=>`<section class="phase2-img svelte-uvzwwg" style="${"--phs2: url("+d(r,!0)+d(e.section10phase2image.data.attributes.formats.large.url,!0)+")"}"></section>`})}

<section class="phase svelte-uvzwwg">${z(a,"Animate").$$render(s,{},{},{default:()=>`${z(E,"Container").$$render(s,{class:"phase-container"},{},{default:()=>`${z(M,"Row").$$render(s,{class:"text-center phase__row"},{},{default:()=>`${z(R,"Col").$$render(s,{xs:"9",md:"10"},{},{default:()=>`<div class="phase__heading svelte-uvzwwg"><h3 class="svelte-uvzwwg">${d(e.section10phase2heading)}</h3></div>`})}            
                ${z(R,"Col").$$render(s,{xs:"3",md:"2"},{},{default:()=>'<span class="num svelte-uvzwwg">2</span>'})}`})}`})}`})}
    ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__grid svelte-uvzwwg"><div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section11heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section11subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section11text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section11righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section12heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section12subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section12text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section11text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section13heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section13subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section13righttext}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item last-even svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section12text}<!-- HTML_TAG_END --></div></div>`})}
    ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__banner banner2 svelte-uvzwwg" style="${"--phs2Banner1: url("+d(r,!0)+d(e.section14image.data.attributes.formats.large.url,!0)+")"}"></div>`})}
    ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__grid scnd-row svelte-uvzwwg"><div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section15heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section15subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section15text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section15righttext}<!-- HTML_TAG_END --></div>     
            <div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section16heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section16subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section16text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section16righttext}<!-- HTML_TAG_END --></div>         
            <div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section17heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section17subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section17text}<!-- HTML_TAG_END --></div>  
            <div class="phase__grid__item last-even svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section17righttext}<!-- HTML_TAG_END --></div></div>`})}
    ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__banner banner3 svelte-uvzwwg" style="${"--phs2Banner2: url("+d(r,!0)+d(e.section18image.data.attributes.formats.large.url,!0)+")"}"></div>`})}
    ${z(a,"Animate").$$render(s,{},{},{default:()=>`<div class="phase__grid scnd-row svelte-uvzwwg"><div class="phase__grid__item svelte-uvzwwg"><span class="svelte-uvzwwg">${d(e.section19heading)}</span>
                <h4 class="svelte-uvzwwg">${d(e.section19subheading)}</h4>
                <!-- HTML_TAG_START -->${e.section19text}<!-- HTML_TAG_END --></div>
            <div class="phase__grid__item last-even svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section19righttext}<!-- HTML_TAG_END --></div></div>`})}</section>
<secton class="phase-banner-paragraph svelte-uvzwwg">${z(a,"Animate").$$render(s,{},{},{default:()=>`${z(E,"Container").$$render(s,{},{},{default:()=>`${z(M,"Row").$$render(s,{},{},{default:()=>`${z(R,"Col").$$render(s,{},{},{default:()=>`<div class="svelte-uvzwwg"><!-- HTML_TAG_START -->${e.section20text}<!-- HTML_TAG_END --></div>`})}`})}`})}`})}</secton>
${z(a,"Animate").$$render(s,{},{},{default:()=>`${z(y,"Cta").$$render(s,{},{},{})}`})}`});

export { $ as default };
//# sourceMappingURL=_page.svelte-eefb0e3c.js.map
