import { c as create_ssr_component, v as validate_component, b as createEventDispatcher, e as escape, d as null_to_empty, i as is_promise, n as noop, f as each, g as add_attribute, h as compute_rest_props, s as setContext, j as spread, k as escape_object, l as escape_attribute_value } from './index2-234acb26.js';
import { C as Container, R as Row, a as Col, c as classnames } from './Row-4a1db562.js';
import axios from 'axios';
import { B as Button } from './Button-85485de3.js';
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
function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === "xs") {
    return "navbar-expand";
  }
  return `navbar-expand-${expand}`;
}
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "container", "color", "dark", "expand", "fixed", "light", "sticky"]);
  setContext("navbar", { inNavbar: true });
  let { class: className = "" } = $$props;
  let { container = "fluid" } = $$props;
  let { color = "" } = $$props;
  let { dark = false } = $$props;
  let { expand = "" } = $$props;
  let { fixed = "" } = $$props;
  let { light = false } = $$props;
  let { sticky = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.expand === void 0 && $$bindings.expand && expand !== void 0)
    $$bindings.expand(expand);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  classes = classnames(className, "navbar", getExpandClass(expand), {
    "navbar-light": light,
    "navbar-dark": dark,
    [`bg-${color}`]: color,
    [`fixed-${fixed}`]: fixed,
    [`sticky-${sticky}`]: sticky
  });
  return `<nav${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${container ? `${validate_component(Container, "Container").$$render($$result, { fluid: container === "fluid" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</nav>`;
});
const NavbarBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "href"]);
  let { class: className = "" } = $$props;
  let { href = "/" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "navbar-brand");
  return `<a${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { href: escape_attribute_value(href) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const NavbarToggler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "navbar-toggler");
  return `${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { class: classes }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : `
    <span class="navbar-toggler-icon"></span>
  `}`;
    }
  })}`;
});
const css = {
  code: "@media(max-width: 767px){.col.footer__col{flex:100%;margin-bottom:2rem}.col.footer__col h4.svelte-1vxnel8{max-width:20rem}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = fetchCta();
  async function fetchCta() {
    const url = "https://strapi.ulfbuilt.com:1337/api/footer?populate=deep,3";
    const headers = {
      Authorization: "Bearer ec0d6b5aece1773cbd6e5f48756c70d9b0b3a59a4d1c325a2e699c1c1b1cae0980dc56aa2c3dfd565237b2a00db9a547a1a9e54a86f80697b31766e6bf80257b37760df84c70b534edeb4df0bdde9452777a52a757850d7a82c28dba854776c405f20ef3fbd95c72b759280f375f69191f2ca75d69600ea9584d8b2100309072"
    };
    try {
      const response = await axios.get(url, { headers });
      return response.data.data.attributes.widget;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  $$result.css.add(css);
  return `<section class="pre-footer">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="pre-footer__btt"><svg width="30" height="11" viewBox="0 0 30 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.44043 8.96631L15.4066 1.71729L28.5605 8.96631" stroke="white" stroke-width="2" stroke-linecap="square"></path></svg>
                    <span>TOP</span></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<footer class="footer">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${function(__value) {
            if (is_promise(__value)) {
              __value.then(null, noop);
              return `
            `;
            }
            return function(widgets) {
              return `     
                ${each(widgets, (widget, index) => {
                return `${validate_component(Col, "Col").$$render($$result, { class: "footer__col" }, {}, {
                  default: () => {
                    return `<div class="footer__widget1 footer--widget">${widget.title ? `<div class="footer__widget__heading"><h4 class="svelte-1vxnel8">${escape(widget.title)}</h4>
                                </div>` : ``}
                            ${each(widget.item, (item) => {
                      return `<div class="footer__widget footer__widget--item"><!-- HTML_TAG_START -->${item.item}<!-- HTML_TAG_END -->
                                </div>`;
                    })}</div>                  
                    `;
                  }
                })}`;
              })}
            `;
            }(__value);
          }(promise)}`;
        }
      })}        
        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="footer__post-footer"><div class="footer__post-footer__social"><span class="footer__post-footer__social__icon footer__post-footer__social__icon--fb"><a href="#"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6965 11.2879L11.245 7.70923H7.8112V5.38702C7.8112 4.40751 8.28995 3.45368 9.82892 3.45368H11.3899V0.406921C11.3899 0.406921 9.97382 0.164795 8.61829 0.164795C5.78981 0.164795 3.94085 1.87802 3.94085 4.98164V7.70923H0.796875V11.2879H3.94085V19.9403C4.57184 20.0393 5.21751 20.0907 5.87602 20.0907C6.53453 20.0907 7.1802 20.0393 7.8112 19.9403V11.2879H10.6965Z" fill="white"></path></svg></a></span>
                        <span class="footer__post-footer__social__icon footer__post-footer__social__icon--yt"><a href="#"><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.466 2.15357C16.2771 1.4437 15.7176 0.884243 15.0059 0.693477C13.7182 0.348631 8.55655 0.348633 8.55655 0.348633C8.55655 0.348633 3.39486 0.348631 2.10719 0.693477C1.39732 0.884243 0.837859 1.44187 0.647093 2.15357C0.302247 3.44124 0.302246 6.12664 0.302246 6.12664C0.302246 6.12664 0.302247 8.81204 0.647093 10.0997C0.836025 10.8096 1.39549 11.369 2.10719 11.5598C3.39486 11.9047 8.55655 11.9047 8.55655 11.9047C8.55655 11.9047 13.7182 11.9047 15.0059 11.5598C15.7158 11.369 16.2752 10.8114 16.466 10.0997C16.8109 8.81204 16.8109 6.12664 16.8109 6.12664C16.8109 6.12664 16.8109 3.44124 16.466 2.15357ZM6.90569 8.60293V3.65035L11.1943 6.12664L6.90569 8.60293Z" fill="white"></path></svg></a></span>       
                        <span class="footer__post-footer__social__icon footer__post-footer__social__icon--insta"><a href="#"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.48116 1.73514C10.5631 1.73514 10.8089 1.74248 11.6306 1.781C12.39 1.81585 12.8027 1.94242 13.0779 2.04881C13.4411 2.19005 13.7015 2.3588 13.9749 2.63211C14.2482 2.90542 14.4169 3.16405 14.5582 3.52908C14.6646 3.80422 14.7911 4.21694 14.826 4.97633C14.8626 5.79809 14.8718 6.04572 14.8718 8.12581C14.8718 10.2059 14.8645 10.4535 14.826 11.2753C14.7911 12.0347 14.6646 12.4474 14.5582 12.7225C14.4169 13.0857 14.2482 13.3462 13.9749 13.6195C13.7015 13.8928 13.4429 14.0616 13.0779 14.2028C12.8027 14.3092 12.39 14.4358 11.6306 14.4706C10.8089 14.5073 10.5631 14.5165 8.48116 14.5165C6.39924 14.5165 6.15344 14.5091 5.33168 14.4706C4.57229 14.4358 4.15957 14.3092 3.88443 14.2028C3.52124 14.0616 3.26077 13.8928 2.98746 13.6195C2.71415 13.3462 2.5454 13.0876 2.40416 12.7225C2.29777 12.4474 2.1712 12.0347 2.13635 11.2753C2.09966 10.4535 2.09049 10.2059 2.09049 8.12581C2.09049 6.04572 2.09783 5.79809 2.13635 4.97633C2.1712 4.21694 2.29777 3.80422 2.40416 3.52908C2.5454 3.16589 2.71415 2.90542 2.98746 2.63211C3.26077 2.3588 3.5194 2.19005 3.88443 2.04881C4.15957 1.94242 4.57229 1.81585 5.33168 1.781C6.15344 1.74432 6.40108 1.73514 8.48116 1.73514ZM8.48116 0.330078C6.36439 0.330078 6.09841 0.33925 5.26748 0.37777C4.43838 0.41629 3.87159 0.546524 3.37449 0.740959C2.86273 0.940896 2.428 1.20687 1.99327 1.63976C1.56038 2.07265 1.29258 2.50738 1.09447 3.02098C0.901872 3.51624 0.769802 4.08303 0.731281 4.91397C0.692761 5.7449 0.683594 6.01087 0.683594 8.12764C0.683594 10.2444 0.692761 10.5104 0.731281 11.3413C0.769802 12.1704 0.900038 12.7372 1.09447 13.2343C1.29441 13.7461 1.56038 14.1808 1.99327 14.6155C2.42617 15.0484 2.86089 15.3162 3.37449 15.5143C3.86975 15.7069 4.43655 15.839 5.26748 15.8775C6.09841 15.916 6.36439 15.9252 8.48116 15.9252C10.5979 15.9252 10.8639 15.916 11.6948 15.8775C12.5239 15.839 13.0907 15.7088 13.5878 15.5143C14.0996 15.3144 14.5343 15.0484 14.969 14.6155C15.4019 14.1826 15.6697 13.7479 15.8678 13.2343C16.0604 12.739 16.1925 12.1722 16.231 11.3413C16.2696 10.5104 16.2787 10.2444 16.2787 8.12764C16.2787 6.01087 16.2696 5.7449 16.231 4.91397C16.1925 4.08487 16.0623 3.51807 15.8678 3.02098C15.6679 2.50921 15.4019 2.07449 14.969 1.63976C14.5361 1.20687 14.1014 0.939062 13.5878 0.740959C13.0926 0.548359 12.5258 0.41629 11.6948 0.37777C10.8639 0.33925 10.5979 0.330078 8.48116 0.330078Z" fill="white"></path><path d="M8.47947 4.12378C6.26915 4.12378 4.47705 5.91588 4.47705 8.1262C4.47705 10.3365 6.26915 12.1286 8.47947 12.1286C10.6898 12.1286 12.4819 10.3365 12.4819 8.1262C12.4819 5.91588 10.6898 4.12378 8.47947 4.12378ZM8.47947 10.7254C7.04506 10.7254 5.88028 9.56245 5.88028 8.1262C5.88028 6.68995 7.04322 5.52701 8.47947 5.52701C9.91572 5.52701 11.0787 6.68995 11.0787 8.1262C11.0787 9.56245 9.91572 10.7254 8.47947 10.7254Z" fill="white"></path><path d="M12.6469 4.89832C13.1636 4.89832 13.5824 4.47949 13.5824 3.96283C13.5824 3.44618 13.1636 3.02734 12.6469 3.02734C12.1303 3.02734 11.7114 3.44618 11.7114 3.96283C11.7114 4.47949 12.1303 4.89832 12.6469 4.89832Z" fill="white"></path></svg></a></span></div>
                    <div class="footer__post-footer__paragraph"><p>Operating Hours: Mon-Fri 9am - 5pm</p></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</footer>`;
});
const logo = "/_app/immutable/assets/logo.ff93710e.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { menu } = $$props;
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  return `
${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, { expand: "md" }, {}, {
        default: () => {
          return `${validate_component(NavbarBrand, "NavbarBrand").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `<a href="/"><img${add_attribute("src", logo, 0)} alt="ULFBUILT" class="logo"></a>`;
            }
          })}
	${`<div${add_attribute("class", "hamburger", 0)}><span class="icon"></span></div>`}
	${validate_component(NavbarToggler, "NavbarToggler").$$render($$result, {}, {}, {})}
		${``}
		${``}`;
        }
      })}`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-15zg2ij_START --><script src="/flickity/flickity.pkgd.min.js" async><\/script><!-- HEAD_svelte-15zg2ij_END -->`, ""}    
    <div class="z10">${validate_component(Src, "Headroom").$$render(
    $$result,
    {
      duration: "400ms",
      offset: 50,
      tolerance: 5
    },
    {},
    {
      default: () => {
        return `<header class="${["d-block", ""].join(" ").trim()}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Header, "Header").$$render($$result, { menu: data }, {}, {})}`;
          }
        })}</header>`;
      }
    }
  )}</div>
    <main>${slots.default ? slots.default({}) : `
    
        `}</main>
    <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer>
`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-0fc54b34.js.map
