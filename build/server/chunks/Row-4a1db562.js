import { c as create_ssr_component, h as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, g as add_attribute } from './index2-234acb26.js';

function isObject(value) {
  const type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
}
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(" ");
}
const Col = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "xs", "sm", "md", "lg", "xl", "xxl"]);
  let { class: className = "" } = $$props;
  let { xs = void 0 } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  const colClasses = [];
  const lookup = { xs, sm, md, lg, xl, xxl };
  Object.keys(lookup).forEach((colWidth) => {
    const columnProp = lookup[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = colWidth === "xs";
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      if (columnProp.size || columnProp.size === "") {
        colClasses.push(colClass);
      }
      if (columnProp.push) {
        colClasses.push(`push${colSizeInterfix}${columnProp.push}`);
      }
      if (columnProp.pull) {
        colClasses.push(`pull${colSizeInterfix}${columnProp.pull}`);
      }
      if (columnProp.offset) {
        colClasses.push(`offset${colSizeInterfix}${columnProp.offset}`);
      }
      if (columnProp.order) {
        colClasses.push(`order${colSizeInterfix}${columnProp.order}`);
      }
    } else {
      colClasses.push(getColumnSizeClass(isXs, colWidth, columnProp));
    }
  });
  if (!colClasses.length) {
    colClasses.push("col");
  }
  if (className) {
    colClasses.push(className);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
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
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(colClasses.join(" "))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  let { class: className = "" } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  let { fluid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
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
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
function getCols(cols) {
  const colsValue = parseInt(cols);
  if (!isNaN(colsValue)) {
    if (colsValue > 0) {
      return [`row-cols-${colsValue}`];
    }
  } else if (typeof cols === "object") {
    return ["xs", "sm", "md", "lg", "xl"].map((colWidth) => {
      const isXs = colWidth === "xs";
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const value = cols[colWidth];
      if (typeof value === "number" && value > 0) {
        return `row-cols${colSizeInterfix}${value}`;
      }
      return null;
    }).filter((value) => !!value);
  }
  return [];
}
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "noGutters", "form", "cols", "inner"]);
  let { class: className = "" } = $$props;
  let { noGutters = false } = $$props;
  let { form = false } = $$props;
  let { cols = 0 } = $$props;
  let { inner = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.noGutters === void 0 && $$bindings.noGutters && noGutters !== void 0)
    $$bindings.noGutters(noGutters);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  classes = classnames(className, noGutters ? "gx-0" : null, form ? "form-row" : "row", ...getCols(cols));
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});

export { Container as C, Row as R, Col as a, classnames as c };
//# sourceMappingURL=Row-4a1db562.js.map
