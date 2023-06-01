import { L, d as d$1, z, W } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';
import { w } from './Cta-15fe5be2.js';
import { a } from './Animate-8c22d91b.js';
import 'axios';

const h={code:'.cover.svelte-1cjpagz.svelte-1cjpagz{padding-top:6.25rem;margin-bottom:18.75rem;height:48.125rem}@media(max-width: 767px){.cover.svelte-1cjpagz.svelte-1cjpagz{height:24.375rem;margin-bottom:12.5rem}}.cover__covertitle.svelte-1cjpagz.svelte-1cjpagz{width:100%;max-width:50rem}.cover__covertitle.svelte-1cjpagz p.svelte-1cjpagz{text-align:left}.cover__coverimg.svelte-1cjpagz.svelte-1cjpagz{height:100vh;width:100%;max-width:90%;margin-bottom:-16.25rem;background-size:cover;align-self:flex-start}@media(max-width: 767px){.cover__coverimg.svelte-1cjpagz.svelte-1cjpagz{margin-bottom:-11.875rem;margin-left:-1rem;max-width:100%}}.two-columns.svelte-1cjpagz.svelte-1cjpagz{overflow-wrap:break-word}.related-articles.svelte-1cjpagz.svelte-1cjpagz{background:#e5eef3;margin-bottom:0;padding:4.375rem 3.125rem 3.125rem 3.125rem}@media(max-width: 767px){.related-articles.svelte-1cjpagz.svelte-1cjpagz{padding:4.375rem 0.625rem 1.875rem 0.625rem}}.related-articles.svelte-1cjpagz h3.svelte-1cjpagz{margin:0.5rem 0 1.5rem 0}@media(max-width: 767px){.related-articles.svelte-1cjpagz h3.svelte-1cjpagz{margin:0.5rem 0 1rem 0}}.related-articles.svelte-1cjpagz a.svelte-1cjpagz{text-decoration:none;color:#263A63;font-family:"Times New Roman", sans-serif;font-weight:600}.related-articles__easein-container.svelte-1cjpagz.svelte-1cjpagz{overflow:hidden}@media(max-width: 767px){h2.svelte-1cjpagz.svelte-1cjpagz{padding-top:1rem;font-size:2rem}}',map:null},d="https://strapi.ulfbuilt.com:1337",C=L((e,l,p,_)=>{let c,{data:a$1}=l;console.log(a$1);let s=a$1.page.data[0].attributes.title,n=a$1.page.data[0].attributes.blogtext,i=Math.ceil(Math.random()*10),u=i+3;return l.data===void 0&&p.data&&a$1!==void 0&&p.data(a$1),e.css.add(h),c=a$1.blogs.data.slice(i,u),`${e.head+=`<!-- HEAD_svelte-g9668b_START -->${e.title=`<title>${d$1(s)} - Article</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-g9668b_END -->`,""}

<div class="cover svelte-1cjpagz" style="background:#E5EEF2;">${z(E,"Container").$$render(e,{},{},{default:()=>`<div class="cover__covertitle svelte-1cjpagz"><p class="pfont ptc mb-1 pt-3 svelte-1cjpagz">Article</p>
        <h2 class="pfont stc mb-4 svelte-1cjpagz">${d$1(s)}</h2>
        <p class="ptc pb-5 svelte-1cjpagz">Vail, Colorado | 09 Apr 2023 · 2 min read</p></div>`})}
    <div class="cover__coverimg svelte-1cjpagz" style="${"background-image:url("+d$1(d,!0)+d$1(a$1.page.data[0].attributes.featuredimage.data.attributes.url,!0)+");"}"></div></div>
${z(E,"Container").$$render(e,{class:"py-4"},{},{default:()=>`<h2 class="pb-3 svelte-1cjpagz">${d$1(s)}</h2>
    <div class="two-columns svelte-1cjpagz"><!-- HTML_TAG_START -->${n}<!-- HTML_TAG_END -->
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p></div>`})}
<section class="related-articles svelte-1cjpagz">${z(E,"Container").$$render(e,{},{},{default:()=>`<h2 class="text-center pb-4 svelte-1cjpagz">Related Articles</h2>
        ${z(M,"Row").$$render(e,{},{},{default:()=>`${W(c,(m,f)=>`${z(R,"Col").$$render(e,{md:"4",class:"pb-5"},{},{default:()=>`${z(a,"Animate").$$render(e,{},{},{default:()=>`<div class="related-articles__easein-container svelte-1cjpagz"><div class="easein-img"><img src="${d$1(d,!0)+d$1(m.attributes.featuredimage.data.attributes.formats.medium.url,!0)}" alt="blogtitle" class="blog-img w-100">
                        </div></div>
                <h3 class="pt-3 svelte-1cjpagz"><a href="${"/articles/"+d$1(m.attributes.slug,!0)}" class="svelte-1cjpagz">${d$1(m.attributes.title)}</a></h3>
                    <p class="ptc">Vail, Colorado | 09 Apr 2023 · 2 min read</p>
                `})}
            `})}`)}`})}`})}</section>
${z(w,"Cta").$$render(e,{},{},{})}`});

export { C as default };
//# sourceMappingURL=_page.svelte-1f7362d8.js.map
