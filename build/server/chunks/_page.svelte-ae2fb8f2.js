import { L, z, d, P, N, S, I as I$1, p, M as M$2 } from './index2-8ecb42f0.js';
import { E as E$1, M as M$1, R } from './Row-a840427f.js';
import { a } from './Animate-9cc2ed0c.js';
import { u } from './PageBanner-99b6c060.js';
import { I } from './Contactform-85cd3509.js';
import './Button-dca585bf.js';
import './Input-19161eb3.js';

const E=L((e,o,s,_)=>{let m,a=S(o,["placeholder","src","alt","options"]),{placeholder:l}=o,{src:b}=o,{alt:u}=o,{options:v={root:null,rootMargin:"0px 0px 0px 0px",threshold:0}}=o,w,x;return o.placeholder===void 0&&s.placeholder&&l!==void 0&&s.placeholder(l),o.src===void 0&&s.src&&b!==void 0&&s.src(b),o.alt===void 0&&s.alt&&u!==void 0&&s.alt(u),o.options===void 0&&s.options&&v!==void 0&&s.options(v),x=l,m=o.class||"",`<img${I$1([{src:p(x)},{alt:p(u)},M$2(a),{class:"svelte-lazy-image "+d(m,!0)}],{classes:""})}${P("this",w,0)}>`});const q={code:'section.svelte-1hhmb2x.svelte-1hhmb2x{margin:10rem 0}@media(max-width: 767px){section.svelte-1hhmb2x.svelte-1hhmb2x{margin:5rem 0}}.our-team.svelte-1hhmb2x.svelte-1hhmb2x{margin-top:5rem}.our-team__member.svelte-1hhmb2x.svelte-1hhmb2x{position:relative;margin-top:1.5rem}.tm-img{position:relative}.tm-box.svelte-1hhmb2x.svelte-1hhmb2x{position:absolute;z-index:6;bottom:2rem;background-color:#1E2D39;padding:1rem 2rem}@media(max-width: 767px){.tm-box.svelte-1hhmb2x.svelte-1hhmb2x{position:relative;text-align:center;bottom:0}}.tm-box.svelte-1hhmb2x h3.svelte-1hhmb2x,.tm-box.svelte-1hhmb2x h4.svelte-1hhmb2x{margin-bottom:0;font-weight:400}.owner-quote-container{padding:2rem 0}@media(max-width: 767px){.owner-quote-container{padding:0}}.owner-quote.svelte-1hhmb2x.svelte-1hhmb2x{background-color:#E3CEB5;height:100%;display:flex}.owner-quote.svelte-1hhmb2x h3.svelte-1hhmb2x{display:flex;justify-content:center;flex-direction:column}@media(max-width: 767px){.owner-quote.svelte-1hhmb2x h3.svelte-1hhmb2x{padding:2rem 1rem}}.ourteam5.svelte-1hhmb2x.svelte-1hhmb2x{text-align:center;max-width:960px;margin-left:auto;margin-right:auto}.ourteam5.svelte-1hhmb2x h4.svelte-1hhmb2x{font-family:"Raleway", open sans;font-weight:400;padding-bottom:2rem}.ourteam5.svelte-1hhmb2x h4.svelte-1hhmb2x:last-child{text-align:right}',map:null};let n="https://strapi.ulfbuilt.com:1337";const M=L((e,o,s,_)=>{let{data:m}=o,a$1=m.data.attributes;return console.log(a$1),o.data===void 0&&s.data&&m!==void 0&&s.data(m),e.css.add(q),`${e.head+=`<!-- HEAD_svelte-1gs2fsz_START -->${e.title="<title>Our Team</title>",""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1gs2fsz_END -->`,""}
${z(u,"PageBanner").$$render(e,{title:m.data.attributes.title,subTitle:m.data.attributes.Subheading,banner:n+m.data.attributes.Cover.data.attributes.formats.large.url,bannerMobile:n+m.data.attributes.Cover.data.attributes.formats.medium.url},{},{})}
<section class="our-team svelte-1hhmb2x">${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E$1,"Container").$$render(e,{},{},{default:()=>`${z(M$1,"Row").$$render(e,{},{},{default:()=>`${z(R,"Col").$$render(e,{md:"10",class:"mx-auto"},{},{default:()=>`<h2 class="stc pb-4 text-center">${d(a$1.SecondSectionTitle)}</h2>
                    <p class="two-columns"><!-- HTML_TAG_START -->${a$1.content}<!-- HTML_TAG_END --></p>
                    <div>${z(E,"LazyImage").$$render(e,{src:n+a$1.SecondSectionImage.data.attributes.formats.large.url,placeholder:n+a$1.SecondSectionImage.data.attributes.formats.small.url,alt:"Team Philosophy"},{},{})}</div>`})}`})}`})}`})}</section>
<section class="owner svelte-1hhmb2x">${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E$1,"Container").$$render(e,{},{},{default:()=>`${z(M$1,"Row").$$render(e,{noGutters:!0},{},{default:()=>`${z(R,"Col").$$render(e,{md:"6",class:"tm-img"},{},{default:()=>`<img${P("alt",a$1.team_member_owner.data.attributes.name,0)} src="${d(n,!0)+d(a$1.team_member_owner.data.attributes.memberPhoto.data.attributes.formats.large.url,!0)}">
                <div class="tm-box wtc svelte-1hhmb2x"><h3 class="pfont svelte-1hhmb2x">${d(a$1.team_member_owner.data.attributes.name)}</h3>
                    <h4 class="pfont svelte-1hhmb2x">${d(a$1.team_member_owner.data.attributes.position)}</h4></div>`})}
                ${z(R,"Col").$$render(e,{md:"6",class:"owner-quote-container"},{},{default:()=>`<div class="owner-quote svelte-1hhmb2x"><h3 class="stc line-height-2 text-center svelte-1hhmb2x"><!-- HTML_TAG_START -->${a$1.ownerquote}<!-- HTML_TAG_END --></h3></div>`})}`})}`})}`})}</section>
<section class="team-members svelte-1hhmb2x">${z(E$1,"Container").$$render(e,{},{},{default:()=>`${z(M$1,"Row").$$render(e,{},{},{default:()=>`<h2 class="sfont stc mb-5 text-center">${d(a$1.title)}</h2>
        ${z(R,"Col").$$render(e,{md:{size:8,offset:2}},{},{default:()=>`${z(M$1,"Row").$$render(e,{},{},{default:()=>`${N(a$1.team_members.data,l=>`${z(R,"Col").$$render(e,{md:"6"},{},{default:()=>`<a href="${"/our-team/"+d(l.attributes.slug,!0)}"><div class="our-team__member svelte-1hhmb2x"><img src="${d(n,!0)+d(l.attributes.memberPhoto.data.attributes.url,!0)}" alt="member">
                        <div class="tm-box wtc px-5 py-3 svelte-1hhmb2x" style="bottom: 1rem;">
                            <h5 class="pfont">${d(l.attributes.name)}</h5>
                            <span class="pfont gtc">${d(l.attributes.position)}</span></div>
                    </div></a>
                `})}`)}`})}`})}`})}`})}</section>
<section class="ourteam5 svelte-1hhmb2x">${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(E$1,"Container").$$render(e,{},{},{default:()=>`<h4 class="svelte-1hhmb2x">${d(a$1.para2)}</h4>
        <h4 class="svelte-1hhmb2x">${d(a$1.para3)}</h4>
        <h4 class="svelte-1hhmb2x">${d(a$1.team_member_owner.data.attributes.name)}</h4>`})}`})}</section>
${z(a,"Animate").$$render(e,{},{},{default:()=>`${z(I,"Contactform").$$render(e,{},{},{})}`})}`});

export { M as default };
//# sourceMappingURL=_page.svelte-ae2fb8f2.js.map
