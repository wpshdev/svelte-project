import { c as create_ssr_component, e as escape, v as validate_component, g as add_attribute, h as compute_rest_props, i as spread, j as escape_object, k as escape_attribute_value } from './index3-802fbda3.js';
import { F as Form, a as FormGroup, I as Input, B as Button } from './Input-52f111de.js';
import { R as Row, C as Col } from './Row-541efe16.js';
import { C as Container, i as isObject, g as getColumnSizeClass, c as classnames } from './Container-1c1b82fa.js';

/* empty css                                                       */const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "hidden", "check", "size", "for", "xs", "sm", "md", "lg", "xl", "xxl", "widths"]);
  let { class: className = "" } = $$props;
  let { hidden = false } = $$props;
  let { check = false } = $$props;
  let { size = "" } = $$props;
  let { for: fore = null } = $$props;
  let { xs = "" } = $$props;
  let { sm = "" } = $$props;
  let { md = "" } = $$props;
  let { lg = "" } = $$props;
  let { xl = "" } = $$props;
  let { xxl = "" } = $$props;
  const colWidths = { xs, sm, md, lg, xl, xxl };
  let { widths = Object.keys(colWidths) } = $$props;
  const colClasses = [];
  widths.forEach((colWidth) => {
    let columnProp = $$props[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = colWidth === "xs";
    let colClass;
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(classnames({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
      }));
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.for === void 0 && $$bindings.for && fore !== void 0)
    $$bindings.for(fore);
  if ($$props.xs === void 0 && $$bindings.xs && xs !== void 0)
    $$bindings.xs(xs);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  classes = classnames(className, hidden ? "visually-hidden" : false, check ? "form-check-label" : false, size ? `col-form-label-${size}` : false, colClasses, colClasses.length ? "col-form-label" : "form-label");
  return `<label${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { for: escape_attribute_value(fore) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</label>`;
});
const css = {
  code: "a.svelte-150112q,a.svelte-150112q:hover{color:#fff}",
  map: null
};
const color = "primary";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let featuredimage = data.data.attributes.featuredimage.data.attributes.url;
  let phone = data.data.attributes.phone;
  let fax = data.data.attributes.fax;
  let office_address = data.data.attributes.office_address;
  let mailing_address = data.data.attributes.mailing_address;
  let map_url = data.data.attributes.map_url;
  let facebook = data.data.attributes.facebook;
  let twitter = data.data.attributes.twitter;
  let youtube = data.data.attributes.youtube;
  let houzz = data.data.attributes.youtube;
  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let result = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-ulfrmg_START -->${$$result.title = `<title>Contact us</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-ulfrmg_END -->`, ""}
<div class="contact-1 container-fluid" style="${"background-image:url(https://strapi.ulfbuilt.com:1337" + escape(featuredimage, true) + ")"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render(
              $$result,
              {
                md: "4",
                style: "text-align:right;padding-top: 150px;padding-right: 50px;color: #fff;"
              },
              {},
              {
                default: () => {
                  return `<h3>PHONE</h3>
            <p>${escape(phone)}</p>
            <h3>FAX</h3>
            <p>${escape(fax)}</p>
            <h3>OUR OFFICE</h3>
            <p><a${add_attribute("href", map_url, 0)} target="_blank" rel="noreferrer" class="svelte-150112q">${escape(office_address)}</a></p>
            <h3><a${add_attribute("href", map_url, 0)} target="_blank" rel="noreferrer" class="svelte-150112q">Map to our office</a></h3>`;
                }
              }
            )}
            ${validate_component(Col, "Col").$$render($$result, { md: "4", class: "contact-form" }, {}, {
              default: () => {
                return `<h2>GET IN TOUCH WITH US</h2>
                <p>We are here to provide you with more info, and answer any questions you may have.</p>
                ${validate_component(Form, "Form").$$render($$result, { method: "post" }, {}, {
                  default: () => {
                    return `${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Label, "Label").$$render($$result, { for: "yourName" }, {}, {
                          default: () => {
                            return `Your Name`;
                          }
                        })}
                        ${validate_component(Input, "Input").$$render(
                          $$result,
                          { placeholder: "Your Name", value: name },
                          {
                            value: ($$value) => {
                              name = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}
                    ${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Label, "Label").$$render($$result, { for: "yourEmail" }, {}, {
                          default: () => {
                            return `Your Email`;
                          }
                        })}
                        ${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            type: "email",
                            placeholder: "Your Email",
                            value: email
                          },
                          {
                            value: ($$value) => {
                              email = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}
                    ${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Label, "Label").$$render($$result, { for: "yourSubject" }, {}, {
                          default: () => {
                            return `Your Subject`;
                          }
                        })}
                        ${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            placeholder: "Your Subject",
                            value: subject
                          },
                          {
                            value: ($$value) => {
                              subject = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}
                    ${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Label, "Label").$$render($$result, { for: "yourMessage" }, {}, {
                          default: () => {
                            return `Your Message`;
                          }
                        })}
                        ${validate_component(Input, "Input").$$render(
                          $$result,
                          {
                            type: "textarea",
                            id: "yourMessage",
                            placeholder: "Your Message",
                            value: message
                          },
                          {
                            value: ($$value) => {
                              message = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}
                    ${validate_component(Button, "Button").$$render($$result, { type: "button", color }, {}, {
                      default: () => {
                        return `Send`;
                      }
                    })}`;
                  }
                })}
                ${escape(result)}`;
              }
            })}
            ${validate_component(Col, "Col").$$render(
              $$result,
              {
                md: "4",
                style: "padding-top: 200px;padding-left: 50px;color: #fff;"
              },
              {},
              {
                default: () => {
                  return `<h3>Mailing Address</h3>
            <p>${escape(mailing_address)}</p>
            <h3>Find us on</h3>
            <p><a${add_attribute("href", facebook, 0)} class="svelte-150112q">Facebook</a>, <a${add_attribute("href", twitter, 0)} class="svelte-150112q">Twitter</a>, <a${add_attribute("href", youtube, 0)} class="svelte-150112q">Youtube</a></p>
            <h3><a${add_attribute("href", houzz, 0)} class="svelte-150112q">Houzz</a></h3>`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f66d84e5.js.map
