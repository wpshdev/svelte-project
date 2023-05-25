import { L, d, z, W } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';
import { C as C$1 } from './Cta-e8ffdbdd.js';
import 'axios';

const q={code:".cover.svelte-vg6x7q.svelte-vg6x7q{padding-top:100px;margin-bottom:300px}.cover.svelte-vg6x7q .covertitle.svelte-vg6x7q{width:100%;max-width:800px}.cover.svelte-vg6x7q p.svelte-vg6x7q{text-align:left}.cover.svelte-vg6x7q .coverimg.svelte-vg6x7q{height:100vh;width:100%;max-width:1200px;margin-bottom:-260px;background-size:cover;align-self:flex-start}@media(max-width: 767px){.cover.svelte-vg6x7q .coverimg.svelte-vg6x7q{margin-bottom:-190px;margin-left:-16px}}.related-articles.svelte-vg6x7q.svelte-vg6x7q{background:#e5eef3;margin-bottom:0;padding:70px 50px 50px 50px}@media(max-width: 767px){.related-articles.svelte-vg6x7q.svelte-vg6x7q{padding:70px 10px 30px 10px}}.blog-img.svelte-vg6x7q.svelte-vg6x7q{min-height:260px;max-height:260px;object-fit:cover;-o-object-fit:cover}.easein-container.svelte-vg6x7q.svelte-vg6x7q{overflow:hidden}@media(max-width: 767px){.cover.svelte-vg6x7q.svelte-vg6x7q{height:390px;margin-bottom:200px}h2.svelte-vg6x7q.svelte-vg6x7q{padding-top:1rem}}",map:null},u="https://strapi.ulfbuilt.com:1337",C=L((e,o,l,h)=>{let p,{data:s}=o;console.log(s);let r=s.page.data[0].attributes.title,d$1=s.page.data[0].attributes.blogtext,i=Math.ceil(Math.random()*10),c=i+3;return o.data===void 0&&l.data&&s!==void 0&&l.data(s),e.css.add(q),p=s.blogs.data.slice(i,c),`${e.head+=`<!-- HEAD_svelte-g9668b_START -->${e.title=`<title>${d(r)} - Article</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-g9668b_END -->`,""}

<div class="cover svelte-vg6x7q" style="background:#E5EEF2;">${z(E,"Container").$$render(e,{},{},{default:()=>`<div class="covertitle svelte-vg6x7q"><p class="pfont ptc mb-1 pt-3 svelte-vg6x7q">Article</p>
        <h2 class="pfont stc mb-4 svelte-vg6x7q">${d(r)}</h2>
        <p class="ptc pb-5 svelte-vg6x7q">Vail, Colorado | 09 Apr 2023 · 2 min read</p></div>`})}
    <div class="coverimg svelte-vg6x7q" style="${"background-image:url("+d(u,!0)+d(s.page.data[0].attributes.featuredimage.data.attributes.url,!0)+");"}"></div></div>
${z(E,"Container").$$render(e,{class:"py-5"},{},{default:()=>`<h2 class="svelte-vg6x7q">${d(r)}</h2>
    <div class="two-columns"><!-- HTML_TAG_START -->${d$1}<!-- HTML_TAG_END -->
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p></div>`})}
<section class="related-articles svelte-vg6x7q">${z(E,"Container").$$render(e,{},{},{default:()=>`<h2 class="text-center pb-4 svelte-vg6x7q">Related Articles</h2>
        ${z(M,"Row").$$render(e,{},{},{default:()=>`${W(p,(v,b)=>`${z(R,"Col").$$render(e,{md:"4",class:"pb-5"},{},{default:()=>`<div class="easein-container svelte-vg6x7q"><div class="easein-img"><img src="${d(u,!0)+d(v.attributes.featuredimage.data.attributes.formats.medium.url,!0)}" alt="blogtitle" class="blog-img w-100 svelte-vg6x7q">
                    </div></div>
                <h3 class="pt-3">${d(v.attributes.title)}</h3>
                <p class="ptc">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
            `})}`)}`})}`})}</section>
${z(C$1,"Cta").$$render(e,{},{},{})}`});

export { C as default };
//# sourceMappingURL=_page.svelte-cc7cef1c.js.map
