import { L, d, z, W } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';
import { C as C$1 } from './Cta-e8ffdbdd.js';
import 'axios';

const h={code:".cover.svelte-dtq6bo.svelte-dtq6bo{padding-top:100px;margin-bottom:100px}.cover.svelte-dtq6bo .covertitle.svelte-dtq6bo{width:100%;max-width:800px}.cover.svelte-dtq6bo .coverimg.svelte-dtq6bo{height:100vh;width:100%;max-width:1200px;margin-bottom:-100px;background-size:cover;align-self:flex-start}.related-articles.svelte-dtq6bo.svelte-dtq6bo{background:#e5eef3;margin-bottom:0;padding:50px}.blog-img.svelte-dtq6bo.svelte-dtq6bo{min-height:260px;max-height:260px;object-fit:cover;-o-object-fit:cover}.easein-container.svelte-dtq6bo.svelte-dtq6bo{overflow:hidden}",map:null},u="https://strapi.ulfbuilt.com:1337",C=L((e,r,a,f)=>{let l,{data:s}=r;console.log(s);let m=s.page.data[0].attributes.title,c=s.page.data[0].attributes.blogtext,i=Math.ceil(Math.random()*10),n=i+3;return r.data===void 0&&a.data&&s!==void 0&&a.data(s),e.css.add(h),l=s.blogs.data.slice(i,n),`${e.head+=`<!-- HEAD_svelte-g9668b_START -->${e.title=`<title>${d(m)} - Article</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-g9668b_END -->`,""}
<div class="cover svelte-dtq6bo" style="background:#E5EEF2;"><div class="covertitle svelte-dtq6bo"><p class="pfont ptc mb-1">Article</p>
        <h2 class="pfont stc mb-4">${d(m)}</h2></div>
    <div class="coverimg svelte-dtq6bo" style="${"background-image:url("+d(u,!0)+d(s.page.data[0].attributes.featuredimage.data.attributes.url,!0)+");"}"></div></div>
${z(E,"Container").$$render(e,{class:"py-5"},{},{default:()=>`<h2>${d(m)}</h2>
    <div class="two-columns"><!-- HTML_TAG_START -->${c}<!-- HTML_TAG_END -->
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p></div>`})}
<section class="related-articles svelte-dtq6bo">${z(E,"Container").$$render(e,{},{},{default:()=>`<h2 class="text-center pb-4">Related Articles</h2>
        ${z(M,"Row").$$render(e,{},{},{default:()=>`${W(l,(p,q)=>`${z(R,"Col").$$render(e,{md:"4"},{},{default:()=>`<div class="easein-container svelte-dtq6bo"><div class="easein-img"><img src="${d(u,!0)+d(p.attributes.featuredimage.data.attributes.formats.medium.url,!0)}" alt="blogtitle" class="blog-img w-100 svelte-dtq6bo">
                    </div></div>
                <h3 class="text-center pt-3">${d(p.attributes.title)}</h3>
                <p class="ptc text-center">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
            `})}`)}`})}`})}</section>
${z(C$1,"Cta").$$render(e,{},{},{})}`});

export { C as default };
//# sourceMappingURL=_page.svelte-d2ba785c.js.map
