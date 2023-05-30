import { L, d, z } from './index-87618b6e.js';
import { E, M, R } from './Row-0fc34542.js';

const _={code:".member__info.svelte-1gmjfxb{padding:0 3rem}.member__img.svelte-1gmjfxb{background-image:var(--banner);background-size:cover;height:50vw;width:100%;margin-right:-1rem;margin-left:1rem}",map:null};let c="https://strapi.ulfbuilt.com:1337";const g=L((e,o,m,v)=>{let{data:r}=o,t=r.data[0].attributes;return console.log(r),o.data===void 0&&m.data&&r!==void 0&&m.data(r),e.css.add(_),`${e.head+=`<!-- HEAD_svelte-o3yhl9_START -->${e.title=`<title>${d(t.name)}</title>`,""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-o3yhl9_END -->`,""}

<section class="member">${z(E,"Container").$$render(e,{fluid:!0},{},{default:()=>`${z(M,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{},{},{default:()=>`<div class="member__info svelte-1gmjfxb"><h1>${d(t.name)}</h1>
                    <span>${d(t.position)}</span>
                    <div class="member__info__content"><!-- HTML_TAG_START -->${t.content}<!-- HTML_TAG_END --></div></div>`})}
            ${z(R,"Col").$$render(e,{},{},{default:()=>`<div class="member__img svelte-1gmjfxb" style="${"--banner: url("+d(c,!0)+"/"+d(t.memberPhoto.data.attributes.formats.large.url,!0)+")"}"></div>`})}`})}`})}
</section>`});

export { g as default };
//# sourceMappingURL=_page.svelte-530d3c5b.js.map
