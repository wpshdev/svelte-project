import { L, d, z, N as N$1, P } from './index2-8ecb42f0.js';
import { E, M, R } from './Row-a840427f.js';
import { O, A } from './DarkPaginationNav.svelte_svelte_type_style_lang-917cf394.js';
import { y } from './Cta-f1a2fc95.js';
import { u as u$1 } from './PageBanner-99b6c060.js';
import { a } from './Animate-9cc2ed0c.js';
import 'axios';

const b="/_app/immutable/assets/blog-empty.ba064c0f.svg";const T={code:'.mx-8.svelte-hde39s.svelte-hde39s{margin:6rem auto}@media(max-width: 991px){.mx-8.svelte-hde39s.svelte-hde39s{margin:4rem auto}}.category.svelte-hde39s.svelte-hde39s{min-height:0}.blog-img.svelte-hde39s.svelte-hde39s{min-height:28rem;max-height:28rem;object-fit:cover;-o-object-fit:cover}@media(max-width: 767px){.blog-img.svelte-hde39s.svelte-hde39s{min-height:10rem;max-height:18rem}}.blogsection7.svelte-hde39s.svelte-hde39s{border-radius:0.625rem;overflow:hidden}.blogsection5.svelte-hde39s.svelte-hde39s{background-color:#e9ebef;display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:3rem}@media(max-width: 767px){.blogsection5.svelte-hde39s.svelte-hde39s{padding:2rem;text-align:center}}@media(max-width: 767px){.blogsection5.svelte-hde39s div.svelte-hde39s{display:flex;flex-direction:column;align-items:center}}.blogsection5.svelte-hde39s span.svelte-hde39s{font-feature-settings:"pnum" on, "lnum" on;font-weight:600}@media(max-width: 767px){.blogsection5.svelte-hde39s span.svelte-hde39s{order:2;margin:1.688rem 0}}.blogsection5.svelte-hde39s h2.svelte-hde39s{display:block;text-overflow:ellipsis;word-wrap:break-word;overflow:hidden;max-height:7.2rem;font-size:2.25rem;line-height:2.5rem;margin-top:0.5rem;color:#263A63}@media(max-width: 767px){.blogsection5.svelte-hde39s h2.svelte-hde39s{order:1}}.blogsection5.svelte-hde39s p.svelte-hde39s{display:block;text-overflow:ellipsis;word-wrap:break-word;overflow:hidden;max-height:3.1em;font-size:1.25rem;line-height:2.125rem}@media(max-width: 767px){.blogsection5.svelte-hde39s p.svelte-hde39s{order:3}}.blogsection5.svelte-hde39s .btn.svelte-hde39s{padding:0.7rem 3rem}@media(max-width: 767px){.blogsection5.svelte-hde39s .btn.svelte-hde39s{border-radius:8px;order:4;font-size:1.188rem;padding:1rem 3rem;margin-top:1.125rem}}.article-section.svelte-hde39s.svelte-hde39s{padding:0 0 1rem 0}.article-section.svelte-hde39s h2.svelte-hde39s{color:#263A63}@media(max-width: 1199px){.article-section.svelte-hde39s.svelte-hde39s{min-height:0}}@media(max-width: 767px){.article-section.svelte-hde39s.svelte-hde39s{padding:0 0 0 0;display:none}}.cat-list.svelte-hde39s.svelte-hde39s{list-style:none;padding:0;margin:0}.cat-list.svelte-hde39s li.svelte-hde39s{color:#ACA7A7}.cat-list.svelte-hde39s li a.svelte-hde39s{padding:1rem 1rem;text-decoration:none;color:#ACA7A7;font-weight:400}.article-blog .col-md-5{padding:1.25rem 0px}@media(max-width: 767px){.article-blog .col-md-5{padding:0 0.625rem}}.article-blog .divider.svelte-hde39s.svelte-hde39s{text-align:center;margin-top:7rem;display:flex;gap:10px;align-items:center;justify-content:center}.article-blog .divider.svelte-hde39s.svelte-hde39s:before,.article-blog .divider.svelte-hde39s.svelte-hde39s:after{content:"";border-top:3.89px solid #D8D7D7;width:40%;display:block}@media(max-width: 991px){.mt-3{margin-top:2rem !important}}@media(max-width: 767px){.mt-3{margin-top:2rem !important}.btn{padding:0.7rem 2.4rem}}.option.prev path, .option.next path{fill:#00ADEE}.option.prev::after{content:"Prev";margin-left:0.25rem}.option.next::before{content:"Next";margin-right:0.25rem}.blog-card{align-items:center}',map:null};let f="https://strapi.ulfbuilt.com:1337",u=5;const N=L((e,r,o,L)=>{let n,{data:s}=r,x=s.blogs.data,w=s.page.data.attributes.title,m=x,h=1;return r.data===void 0&&o.data&&s!==void 0&&o.data(s),e.css.add(T),n=O({items:m,pageSize:u,currentPage:h}),`${e.head+=`<!-- HEAD_svelte-fzu628_START -->${e.title=`<title>${d(w)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-fzu628_END -->`,""}

${z(u$1,"PageBanner").$$render(e,{title:s.page.data.attributes.title,subTitle:s.page.data.attributes.Subheading,banner:f+s.page.data.attributes.Cover.data[0].attributes.url},{},{})}
<section class="category svelte-hde39s">${z(E,"Container").$$render(e,{},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`<ul class="cat-list svelte-hde39s"><li class="svelte-hde39s"><a href="/" class="svelte-hde39s">CATEGORY</a>|
                    <a href="/" class="svelte-hde39s">DATE ADDED</a></li></ul>`})}`})}</section>
<section class="mw-1000 text-center article-section svelte-hde39s">${z(E,"Container").$$render(e,{},{},{default:()=>`<h2 class="mb-2 text-center svelte-hde39s">${d(s.page.data.attributes.section2heading)}</h2>
        <p class="text-left"><!-- HTML_TAG_START -->${s.page.data.attributes.section2description}<!-- HTML_TAG_END --></p>`})}</section>
<section class="article-blog">${z(E,"Container").$$render(e,{},{},{default:()=>`${N$1(n,(a$1,c)=>`${z(M,"Row").$$render(e,{class:(c%2===1?"flex-md-row flex-column-reverse":"")+" blog-card"},{},{default:()=>`${z(R,"Col").$$render(e,{md:"6",style:"padding:0;",class:c%2===1?"order-1":""},{},{default:()=>`${z(a,"Animate").$$render(e,{},{},{default:()=>`<div class="blogsection7 easein-img svelte-hde39s">${a$1.attributes.featuredimage.data!=null?`${a$1.attributes.featuredimage.data.attributes.formats!=null?`<img${P("src",f+a$1.attributes.featuredimage.data.attributes.formats.small.url,0)} alt="blogtitle" class="blog-img w-100 svelte-hde39s">`:`<img alt="blogtitle"${P("src",b,0)} class="blog-img w-100 svelte-hde39s">`}`:`<img alt="blogtitle"${P("src",b,0)} class="blog-img w-100 svelte-hde39s">`}</div>
                `})}
            `})}

            ${z(R,"Col").$$render(e,{md:"5"},{},{default:()=>`${z(a,"Animate").$$render(e,{},{},{default:()=>`<div class="blogsection5 svelte-hde39s"><div class="svelte-hde39s"><span class="svelte-hde39s">Vail, Colorado | January 28 · 2 minutes read</span>
                            <h2 class="svelte-hde39s">${d(a$1.attributes.title)}</h2>
                            <p class="svelte-hde39s">${d(a$1.attributes.shorttext)}</p>
                            <a class="btn btn-secondary svelte-hde39s" href="${"/articles/"+d(a$1.attributes.slug,!0)}">Read more</a>
                        </div></div>
                `})}

            `})}
            
        
    `})}
    <div class="mx-8 svelte-hde39s"></div>`)}

    

    ${z(A,"LightPaginationNav").$$render(e,{totalItems:m.length,pageSize:u,currentPage:h,limit:1,showStepOptions:!0},{},{})}

    

    <div class="divider svelte-hde39s"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9931 22.2157L3.45312 12.9257L12.9931 3.63574L22.5431 12.9257L12.9931 22.2157Z" stroke="#D8D7D7" stroke-width="3.89" stroke-miterlimit="10"></path></svg></div>`})}</section>
${z(y,"Cta").$$render(e,{},{},{})}`});

export { N as default };
//# sourceMappingURL=_page.svelte-32d67b55.js.map
