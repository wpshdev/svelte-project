import { c as create_ssr_component, e as escape, v as validate_component } from './index2-234acb26.js';
import { B as Button } from './Button-85485de3.js';
import { C as Container, R as Row, a as Col } from './Row-4a1db562.js';
import { F as Form, a as FormGroup, I as Input } from './Input-b9d86e28.js';

const color = "white";
const url = "https://strapi.ulfbuilt.com:1337/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let phone = data.data.attributes.phone;
  let office_address = data.data.attributes.office_address;
  let mailing_address = data.data.attributes.mailing_address;
  let name = "", email = "", subject = "", message = "", result = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1ugnjr_START -->${$$result.title = `<title>${escape(data.data.attributes.title)}</title>`, ""}<meta name="description" content="ULF BUILT"><!-- HEAD_svelte-1ugnjr_END -->`, ""}
<div class="cover" style="${"background-image: url(" + escape(url, true) + escape(data.data.attributes.featuredimage.data.attributes.formats.large.url, true) + ");"}"><h2 class="pfont">${escape(data.data.attributes.title)}</h2>
    <p class="pfont">${escape(data.data.attributes.Subheading)}</p></div>
<section class="mx-10">${validate_component(Container, "Container").$$render($$result, { class: "mb-5" }, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "12" }, {}, {
              default: () => {
                return `<h2 class="text-center">Let&#39;s get started...</h2>
                <h4 class="text-center pfont">- <span class="ptc"><i>Ulf Lindroth</i></span></h4>
                <p class="two-columns"><!-- HTML_TAG_START -->${data.data.attributes.Subheading2}<!-- HTML_TAG_END --></p>`;
              }
            })}`;
          }
        })}`;
      }
    })}
    ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { md: "4", class: "flex-vcenter" }, {}, {
              default: () => {
                return `<h4 class="ptc pfont">OUR OFFICE</h4>
                <h4 class="stc pb-5"><!-- HTML_TAG_START -->${office_address}<!-- HTML_TAG_END --></h4>
                <h4 class="ptc pfont">MAILING ADDRESS</h4>
                <h4 class="stc pb-5"><!-- HTML_TAG_START -->${mailing_address}<!-- HTML_TAG_END --></h4>
                <h4 class="ptc pfont">PHONE</h4>
                <h4 class="stc pb-5"><!-- HTML_TAG_START -->${phone}<!-- HTML_TAG_END --></h4>`;
              }
            })}
            ${validate_component(Col, "Col").$$render($$result, { md: "8" }, {}, {
              default: () => {
                return `<iframe title="ULF BUILT" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12289.756932100185!2d-106.59873028576666!3d39.63982841472373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741d9050f708981%3A0x28a8cd6309f12845!2sULFBUILT!5e0!3m2!1sen!2sin!4v1681880274611!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
              }
            })}`;
          }
        })}`;
      }
    })}</section>
<div class="contact-img" style="${"background-image: url(" + escape(url, true) + escape(data.data.attributes.formcover.data.attributes.formats.large.url, true) + ");"}"></div>
<div class="contact-box container-fluid">${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Col, "Col").$$render(
              $$result,
              {
                sm: "12",
                md: { size: 6, offset: 3 },
                class: "contact-form tbc wtc border-radius"
              },
              {},
              {
                default: () => {
                  return `<h2 class="text-center pb-4">Connect with Us</h2>
                ${validate_component(Form, "Form").$$render($$result, { method: "post" }, {}, {
                    default: () => {
                      return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "input-icon-box" }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render(
                            $$result,
                            {
                              class: "input-user",
                              placeholder: "Full Name",
                              value: name
                            },
                            {
                              value: ($$value) => {
                                name = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}
                        <div class="input-icon input-icon-user"></div>`;
                        }
                      })}
                    ${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "input-icon-box" }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render(
                            $$result,
                            {
                              class: "input-email",
                              placeholder: "Email address",
                              value: email
                            },
                            {
                              value: ($$value) => {
                                email = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}
                        <div class="input-icon input-icon-email"></div>`;
                        }
                      })}
                    ${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "input-icon-box" }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render(
                            $$result,
                            {
                              class: "input-phone",
                              placeholder: "Phone Number",
                              value: subject
                            },
                            {
                              value: ($$value) => {
                                subject = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}
                        <div class="input-icon input-icon-phone"></div>`;
                        }
                      })}
                    ${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render(
                            $$result,
                            {
                              type: "textarea",
                              id: "yourMessage",
                              placeholder: "Tell us about you project...",
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
              }
            )}`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-615c4c47.js.map
