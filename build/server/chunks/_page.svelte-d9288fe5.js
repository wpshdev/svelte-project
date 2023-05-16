import { c as create_ssr_component, e as escape, v as validate_component, f as each, g as add_attribute, b as createEventDispatcher } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import { C as Cta } from './Cta-4dbd70c7.js';
import 'axios';

function paginate({ items, pageSize: pageSize2, currentPage }) {
  return items.slice((currentPage - 1) * pageSize2, (currentPage - 1) * pageSize2 + pageSize2);
}
var SymbolType;
(function(SymbolType2) {
  SymbolType2["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  SymbolType2["NEXT_PAGE"] = "NEXT_PAGE";
  SymbolType2["ELLIPSIS"] = "ELLIPSIS";
})(SymbolType || (SymbolType = {}));
function generateNavigationOptions({ totalItems, pageSize: pageSize2, currentPage, limit, showStepOptions = false }) {
  const totalPages = Math.ceil(totalItems / pageSize2);
  const limited = limit && totalPages > getLimitThreshold(limit);
  const options = limited ? generateLimitedOptions({ totalPages, limit, currentPage }) : generateUnlimitedOptions({ totalPages });
  return showStepOptions ? addStepOptions({ options, currentPage, totalPages }) : options;
}
function generateUnlimitedOptions({ totalPages }) {
  return new Array(totalPages).fill(null).map((_, index) => ({
    type: "number",
    value: index + 1
  }));
}
function generateLimitedOptions({ totalPages, limit, currentPage }) {
  const boundarySize = limit * 2 + 2;
  const firstBoundary = 1 + boundarySize;
  const lastBoundary = totalPages - boundarySize;
  const totalShownPages = firstBoundary + 2;
  if (currentPage <= firstBoundary - limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: firstBoundary + 1
        };
      }
      return {
        type: "number",
        value: index + 1
      };
    });
  } else if (currentPage >= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: lastBoundary - 1
        };
      }
      return {
        type: "number",
        value: lastBoundary + index - 2
      };
    });
  } else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: currentPage - limit + (index - 2)
        };
      } else if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: currentPage + limit + 1
        };
      }
      return {
        type: "number",
        value: currentPage - limit + (index - 2)
      };
    });
  }
  return [];
}
function addStepOptions({ options, currentPage, totalPages }) {
  return [
    {
      type: "symbol",
      symbol: SymbolType.PREVIOUS_PAGE,
      value: currentPage <= 1 ? 1 : currentPage - 1
    },
    ...options || [],
    {
      type: "symbol",
      symbol: SymbolType.NEXT_PAGE,
      value: currentPage >= totalPages ? totalPages : currentPage + 1
    }
  ];
}
function getLimitThreshold(limit) {
  const maximumUnlimitedPages = 3;
  const numberOfBoundaryPages = 2;
  return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
const PaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let totalPages;
  createEventDispatcher();
  let { totalItems = 0 } = $$props;
  let { pageSize: pageSize2 = 1 } = $$props;
  let { currentPage = 1 } = $$props;
  let { limit = void 0 } = $$props;
  let { showStepOptions = false } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize2 !== void 0)
    $$bindings.pageSize(pageSize2);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.showStepOptions === void 0 && $$bindings.showStepOptions && showStepOptions !== void 0)
    $$bindings.showStepOptions(showStepOptions);
  options = generateNavigationOptions({
    totalItems,
    pageSize: pageSize2,
    currentPage,
    limit,
    showStepOptions
  });
  totalPages = Math.ceil(totalItems / pageSize2);
  return `<div class="pagination-nav">${each(options, (option) => {
    return `<span class="${[
      "option",
      (option.type === "number" ? "number" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE ? "prev" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE ? "next" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE && currentPage >= totalPages || option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE && currentPage <= 1 ? "disabled" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.ELLIPSIS ? "ellipsis" : "") + " " + (option.type === "number" && option.value === currentPage ? "active" : "")
    ].join(" ").trim()}" role="presentation">${option.type === "number" ? `${slots.number ? slots.number({ value: option.value }) : `
          <span>${escape(option.value)}</span>
        `}` : `${option.type === "symbol" && option.symbol === SymbolType.ELLIPSIS ? `${slots.ellipsis ? slots.ellipsis({}) : `
          <span>...</span>
        `}` : `${option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE ? `${slots.prev ? slots.prev({}) : `
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
        `}` : `${option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE ? `${slots.next ? slots.next({}) : `
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
        `}` : ``}`}`}`}
    </span>`;
  })}</div>`;
});
const css$1 = {
  code: ".light-pagination-nav.svelte-s5ru8s .pagination-nav{display:flex;justify-content:center;background:#FFF;border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.3)}.light-pagination-nav.svelte-s5ru8s .option{padding:10px;display:flex;align-items:center;justify-content:center;transition:0.2s all ease-out;user-select:none;color:hsl(200, 90%, 10%)}.light-pagination-nav.svelte-s5ru8s .option.number,.light-pagination-nav.svelte-s5ru8s .option.ellipsis{padding:10px 15px}.light-pagination-nav.svelte-s5ru8s .option:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}.light-pagination-nav.svelte-s5ru8s .option.active{color:hsl(200, 70%, 50%)}",
  map: null
};
const LightPaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="light-pagination-nav svelte-s5ru8s">${validate_component(PaginationNav, "PaginationNav").$$render($$result, Object.assign({}, $$props), {}, {})}
</div>`;
});
const blogempty = "/_app/immutable/assets/blog-empty.ba064c0f.svg";
const css = {
  code: ".blog-img.svelte-1uuckyh{min-height:400px;max-height:400px;object-fit:cover;-o-object-fit:cover}.blogsection7.svelte-1uuckyh{border-radius:10px;overflow:hidden}.blogsection5.svelte-1uuckyh{background-color:#e9ebef;display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:3rem}",
  map: null
};
let url = "https://strapi.ulfbuilt.com:1337";
let pageSize = 5;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paginatedBlogs;
  let { data } = $$props;
  let blogs = data.blogs.data;
  console.log(data);
  let title = data.page.data.attributes.title;
  let items = blogs;
  let currentPage = 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  paginatedBlogs = paginate({ items, pageSize, currentPage });
  return `${$$result.head += `<!-- HEAD_svelte-fzu628_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-fzu628_END -->`, ""}
<div class="cover" style="${"background-image: url(" + escape(url, true) + escape(data.page.data.attributes.Cover.data[0].attributes.formats.large.url, true) + ");"}"><h2 class="pfont">${escape(data.page.data.attributes.title)}</h2>
    <p class="pfont">${escape(data.page.data.attributes.Subheading)}</p></div>
<section>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${each(paginatedBlogs, (blog, i) => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render(
              $$result,
              {
                md: "7",
                style: "padding:0;",
                class: i % 2 === 1 ? "order-1" : ""
              },
              {},
              {
                default: () => {
                  return `<div class="blogsection7 easein-img svelte-1uuckyh">${blog.attributes.featuredimage.data != null ? `${blog.attributes.featuredimage.data.attributes.formats != null ? `<img${add_attribute("src", url + blog.attributes.featuredimage.data.attributes.formats.small.url, 0)} alt="blogtitle" class="blog-img w-100 svelte-1uuckyh">` : `<img alt="blogtitle"${add_attribute("src", blogempty, 0)} class="blog-img w-100 svelte-1uuckyh">`}` : `<img alt="blogtitle"${add_attribute("src", blogempty, 0)} class="blog-img w-100 svelte-1uuckyh">`}</div>
            `;
                }
              }
            )}
            ${validate_component(Col, "Col").$$render($$result, { md: "5", style: "padding:20px 0;" }, {}, {
              default: () => {
                return `<div class="blogsection5 svelte-1uuckyh"><div><span>Vail, Colorado | 09 Apr 2023 · 2 min read</span>
                        <h2>${escape(blog.attributes.title)}</h2>
                        <p>${escape(blog.attributes.shorttext)}</p></div>
                    <a class="btn btn-secondary" href="${"/articles/" + escape(blog.attributes.slug, true)}">Read More</a></div>
            `;
              }
            })}
            
        
    `;
          }
        })}
    <div style="padding: 20px;"></div>`;
      })}
${validate_component(LightPaginationNav, "LightPaginationNav").$$render(
        $$result,
        {
          totalItems: items.length,
          pageSize,
          currentPage,
          limit: 1,
          showStepOptions: true
        },
        {},
        {}
      )}`;
    }
  })}</section>
${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d9288fe5.js.map
