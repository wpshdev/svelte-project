import { c as create_ssr_component, v as validate_component, b as createEventDispatcher, e as escape, d as null_to_empty, f as subscribe, g as add_attribute } from './index3-802fbda3.js';
import { R as Row, C as Col } from './Row-541efe16.js';
import { C as Container } from './Container-1c1b82fa.js';
import { p as page } from './stores-f33409fa.js';
import './index-36410280.js';

const warn = (msg, val) => console.warn(`[svelte-headroom]:`, msg, val);
function validate({ duration, offset, tolerance }) {
  if (typeof offset !== "number")
    warn("The `offset` prop is not a number: ", offset);
  if (typeof tolerance !== "number")
    warn("The `tolerance` prop is not a number: ", tolerance);
  if (typeof duration !== "string")
    warn("The `duration` prop is not a string such as '200ms': ", duration);
}
const css$1 = {
  code: "div.svelte-1ql6gaa{position:fixed;width:100%;top:0;transition:transform 300ms linear;transform:translateY(0%)}.svelte-headroom--unpin.svelte-1ql6gaa{transform:translateY(-100%)}",
  map: null
};
let prefix = "svelte-headroom--";
const Src = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = "300ms" } = $$props;
  let { offset = 0 } = $$props;
  let { tolerance = 0 } = $$props;
  let headerClass = "";
  let lastHeaderClass = "";
  let y = 0;
  let lastY = 0;
  const dispatch = createEventDispatcher();
  function deriveClass(y2 = 0, scrolled = 0) {
    if (y2 < offset)
      return "";
    if (Math.abs(scrolled) < tolerance)
      return headerClass;
    if (scrolled > 0)
      return "";
    if (scrolled < 0)
      return `${prefix}unpin`;
    return headerClass;
  }
  function updateClass(y2 = 0) {
    const scrolledPxs = lastY - y2;
    const result = deriveClass(y2, scrolledPxs);
    lastY = y2;
    return result;
  }
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.tolerance === void 0 && $$bindings.tolerance && tolerance !== void 0)
    $$bindings.tolerance(tolerance);
  $$result.css.add(css$1);
  {
    {
      validate({ duration, offset, tolerance });
      headerClass = updateClass(y);
      if (headerClass !== lastHeaderClass) {
        dispatch(headerClass ? "unpin" : "pin");
      }
      lastHeaderClass = headerClass;
    }
  }
  return `
<div class="${escape(null_to_empty(headerClass), true) + " svelte-1ql6gaa"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="footer">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
            default: () => {
              return `<h4>ULFBUILT</h4>
                <p>275 Main Street, C-105</p>
                <p>Edwards, CO 81632</p>
                <p>(P) 970-926-7600</p>
                <p>(F) 970-926-4955</p>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
            default: () => {
              return `<h4>OPERATING HOURS</h4>
                <p>Open: 9 am-5 pm</p>
                <p>Closed: Sat and Sun</p>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
            default: () => {
              return `<h4>LOCATIONS</h4>
                <ul><li>Vail</li>
                    <li>Beaver Creek</li>
                    <li>Edwards</li>
                    <li>Eagle</li>
                    <li>Gypsum</li></ul>`;
            }
          })}
            ${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
            default: () => {
              return `<h4>QUICK LINKS</h4>
                <ul><li><a href="/">Home</a></li>
                    <li><a href="/blog">Blogs</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li>Sitemap</li></ul>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>`;
});
const logo = "/_app/immutable/assets/logo.ff93710e.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="logo"><a href="/"><img${add_attribute("src", logo, 0)} alt="ULFBUILT"></a></div>
<nav><ul><li${add_attribute("aria-current", $page.url.pathname === "/portfolio" ? "page" : void 0, 0)}><a href="/portfolio">PORTFOLIO</a></li>	
		<li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)}><a href="/about">ABOUT US</a></li>
		<li${add_attribute("aria-current", $page.url.pathname === "/our-team" ? "page" : void 0, 0)}><a href="/our-team">OUR TEAM</a></li>
		<li${add_attribute("aria-current", $page.url.pathname === "/contact" ? "page" : void 0, 0)}><a href="/contact">CONTACT US</a></li></ul></nav>`;
});
const css = {
  code: ".z10.svelte-1uu7zc{z-index:10;position:relative}.changeBG.svelte-1uu7zc{background:#1E2D39}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="z10 svelte-1uu7zc">${validate_component(Src, "Headroom").$$render(
    $$result,
    {
      duration: "400ms",
      offset: 50,
      tolerance: 5
    },
    {},
    {
      default: () => {
        return `<header class="${["container-fluid svelte-1uu7zc", ""].join(" ").trim()}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</header>`;
      }
    }
  )}</div>
    <main>${slots.default ? slots.default({}) : `
    
        `}</main>
    <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer>

`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-504a9550.js.map
