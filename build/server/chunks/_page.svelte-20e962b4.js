import { L, d, z, W, P, R as R$2 } from './index-87618b6e.js';
import { E, M, R as R$1 } from './Row-0fc34542.js';
import { C as C$1 } from './Cta-e8ffdbdd.js';
import 'axios';

function x({items:a,pageSize:e,currentPage:t}){return a.slice((t-1)*e,(t-1)*e+e)}var r;(function(a){a.PREVIOUS_PAGE="PREVIOUS_PAGE",a.NEXT_PAGE="NEXT_PAGE",a.ELLIPSIS="ELLIPSIS";})(r||(r={}));function A({totalItems:a,pageSize:e,currentPage:t,limit:n,showStepOptions:u=!1}){const i=Math.ceil(a/e),d=n&&i>k(n)?O({totalPages:i,limit:n,currentPage:t}):w({totalPages:i});return u?N({options:d,currentPage:t,totalPages:i}):d}function w({totalPages:a}){return new Array(a).fill(null).map((e,t)=>({type:"number",value:t+1}))}function O({totalPages:a,limit:e,currentPage:t}){const n=e*2+2,u=1+n,i=a-n,o=u+2;return t<=u-e?Array(o).fill(null).map((d,l)=>l===o-1?{type:"number",value:a}:l===o-2?{type:"symbol",symbol:r.ELLIPSIS,value:u+1}:{type:"number",value:l+1}):t>=i+e?Array(o).fill(null).map((d,l)=>l===0?{type:"number",value:1}:l===1?{type:"symbol",symbol:r.ELLIPSIS,value:i-1}:{type:"number",value:i+l-2}):t>=u-e&&t<=i+e?Array(o).fill(null).map((d,l)=>l===0?{type:"number",value:1}:l===1?{type:"symbol",symbol:r.ELLIPSIS,value:t-e+(l-2)}:l===o-1?{type:"number",value:a}:l===o-2?{type:"symbol",symbol:r.ELLIPSIS,value:t+e+1}:{type:"number",value:t-e+(l-2)}):[]}function N({options:a,currentPage:e,totalPages:t}){return [{type:"symbol",symbol:r.PREVIOUS_PAGE,value:e<=1?1:e-1},...a||[],{type:"symbol",symbol:r.NEXT_PAGE,value:e>=t?t:e+1}]}function k(a){return a*2+3+2}const G=L((a,e,t,n)=>{let u,i;R$2();let{totalItems:o=0}=e,{pageSize:d$1=1}=e,{currentPage:l=1}=e,{limit:c=void 0}=e,{showStepOptions:m=!1}=e;return e.totalItems===void 0&&t.totalItems&&o!==void 0&&t.totalItems(o),e.pageSize===void 0&&t.pageSize&&d$1!==void 0&&t.pageSize(d$1),e.currentPage===void 0&&t.currentPage&&l!==void 0&&t.currentPage(l),e.limit===void 0&&t.limit&&c!==void 0&&t.limit(c),e.showStepOptions===void 0&&t.showStepOptions&&m!==void 0&&t.showStepOptions(m),u=A({totalItems:o,pageSize:d$1,currentPage:l,limit:c,showStepOptions:m}),i=Math.ceil(o/d$1),`<div class="pagination-nav">${W(u,s=>`<span class="${["option",(s.type==="number"?"number":"")+" "+(s.type==="symbol"&&s.symbol===r.PREVIOUS_PAGE?"prev":"")+" "+(s.type==="symbol"&&s.symbol===r.NEXT_PAGE?"next":"")+" "+(s.type==="symbol"&&s.symbol===r.NEXT_PAGE&&l>=i||s.type==="symbol"&&s.symbol===r.PREVIOUS_PAGE&&l<=1?"disabled":"")+" "+(s.type==="symbol"&&s.symbol===r.ELLIPSIS?"ellipsis":"")+" "+(s.type==="number"&&s.value===l?"active":"")].join(" ").trim()}" role="presentation">${s.type==="number"?`${n.number?n.number({value:s.value}):`
          <span>${d(s.value)}</span>
        `}`:`${s.type==="symbol"&&s.symbol===r.ELLIPSIS?`${n.ellipsis?n.ellipsis({}):`
          <span>...</span>
        `}`:`${s.type==="symbol"&&s.symbol===r.PREVIOUS_PAGE?`${n.prev?n.prev({}):`
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
        `}`:`${s.type==="symbol"&&s.symbol===r.NEXT_PAGE?`${n.next?n.next({}):`
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
        `}`:""}`}`}`}
    </span>`)}</div>`});const C={code:".light-pagination-nav.svelte-s5ru8s .pagination-nav{display:flex;justify-content:center;background:#FFF;border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.3)}.light-pagination-nav.svelte-s5ru8s .option{padding:10px;display:flex;align-items:center;justify-content:center;transition:0.2s all ease-out;user-select:none;color:hsl(200, 90%, 10%)}.light-pagination-nav.svelte-s5ru8s .option.number,.light-pagination-nav.svelte-s5ru8s .option.ellipsis{padding:10px 15px}.light-pagination-nav.svelte-s5ru8s .option:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}.light-pagination-nav.svelte-s5ru8s .option.active{color:hsl(200, 70%, 50%)}",map:null},R=L((a,e,t,n)=>(a.css.add(C),`<div class="light-pagination-nav svelte-s5ru8s">${z(G,"PaginationNav").$$render(a,Object.assign({},e),{},{})}
</div>`));const f="/_app/immutable/assets/blog-empty.ba064c0f.svg";const U={code:".blog-img.svelte-1uuckyh{min-height:400px;max-height:400px;object-fit:cover;-o-object-fit:cover}.blogsection7.svelte-1uuckyh{border-radius:10px;overflow:hidden}.blogsection5.svelte-1uuckyh{background-color:#e9ebef;display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:3rem}",map:null};let h="https://strapi.ulfbuilt.com:1337",_=5;const V=L((a,e,t,n)=>{let u,{data:i}=e,o=i.blogs.data;console.log(i);let d$1=i.page.data.attributes.title,l=o,c=1;return e.data===void 0&&t.data&&i!==void 0&&t.data(i),a.css.add(U),u=x({items:l,pageSize:_,currentPage:c}),`${a.head+=`<!-- HEAD_svelte-fzu628_START -->${a.title=`<title>${d(d$1)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-fzu628_END -->`,""}
<div class="cover" style="${"background-image: url("+d(h,!0)+d(i.page.data.attributes.Cover.data[0].attributes.formats.large.url,!0)+");"}"><h2 class="pfont">${d(i.page.data.attributes.title)}</h2>
    <p class="pfont">${d(i.page.data.attributes.Subheading)}</p></div>
<section>${z(E,"Container").$$render(a,{},{},{default:()=>`${W(u,(m,s)=>`${z(M,"Row").$$render(a,{},{},{default:()=>`${z(R$1,"Col").$$render(a,{md:"7",style:"padding:0;",class:s%2===1?"order-1":""},{},{default:()=>`<div class="blogsection7 easein-img svelte-1uuckyh">${m.attributes.featuredimage.data!=null?`${m.attributes.featuredimage.data.attributes.formats!=null?`<img${P("src",h+m.attributes.featuredimage.data.attributes.formats.small.url,0)} alt="blogtitle" class="blog-img w-100 svelte-1uuckyh">`:`<img alt="blogtitle"${P("src",f,0)} class="blog-img w-100 svelte-1uuckyh">`}`:`<img alt="blogtitle"${P("src",f,0)} class="blog-img w-100 svelte-1uuckyh">`}</div>
            `})}
            ${z(R$1,"Col").$$render(a,{md:"5",style:"padding:20px 0;"},{},{default:()=>`<div class="blogsection5 svelte-1uuckyh"><div><span>Vail, Colorado | 09 Apr 2023 · 2 min read</span>
                        <h2>${d(m.attributes.title)}</h2>
                        <p>${d(m.attributes.shorttext)}</p></div>
                    <a class="btn btn-secondary" href="${"/articles/"+d(m.attributes.slug,!0)}">Read More</a></div>
            `})}
            
        
    `})}
    <div style="padding: 20px;"></div>`)}
${z(R,"LightPaginationNav").$$render(a,{totalItems:l.length,pageSize:_,currentPage:c,limit:1,showStepOptions:!0},{},{})}`})}</section>
${z(C$1,"Cta").$$render(a,{},{},{})}`});

export { V as default };
//# sourceMappingURL=_page.svelte-20e962b4.js.map
