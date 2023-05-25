import { L, B, z as z$2, X } from './chunks/index-87618b6e.js';
import { l, g, f, c, o, h as h$1 } from './chunks/index3-2985463b.js';
import { h, p as p$1 } from './chunks/index2-49a5e086.js';

let p="",y=p;const u={base:p,assets:y};function O(){p=u.base,y=u.assets;}let b={};function F$1(n){b=n;}const C=L((n,t,e,k)=>{let{stores:d}=t,{page:h}=t,{constructors:o}=t,{components:a=[]}=t,{form:c}=t,{data_0:f=null}=t,{data_1:m=null}=t,{data_2:v=null}=t,{data_3:_=null}=t;B("__svelte__",d),d.page.notify,t.stores===void 0&&e.stores&&d!==void 0&&e.stores(d),t.page===void 0&&e.page&&h!==void 0&&e.page(h),t.constructors===void 0&&e.constructors&&o!==void 0&&e.constructors(o),t.components===void 0&&e.components&&a!==void 0&&e.components(a),t.form===void 0&&e.form&&c!==void 0&&e.form(c),t.data_0===void 0&&e.data_0&&f!==void 0&&e.data_0(f),t.data_1===void 0&&e.data_1&&m!==void 0&&e.data_1(m),t.data_2===void 0&&e.data_2&&v!==void 0&&e.data_2(v),t.data_3===void 0&&e.data_3&&_!==void 0&&e.data_3(_);let i,g;do i=!0,d.page.set(h),g=`


${o[1]?`${z$2(o[0]||X,"svelte:component").$$render(n,{data:f,this:a[0]},{this:s=>{a[0]=s,i=!1;}},{default:()=>`${o[2]?`${z$2(o[1]||X,"svelte:component").$$render(n,{data:m,this:a[1]},{this:s=>{a[1]=s,i=!1;}},{default:()=>`${o[3]?`${z$2(o[2]||X,"svelte:component").$$render(n,{data:v,this:a[2]},{this:s=>{a[2]=s,i=!1;}},{default:()=>`${z$2(o[3]||X,"svelte:component").$$render(n,{data:_,form:c,this:a[3]},{this:s=>{a[3]=s,i=!1;}},{})}`})}`:`${z$2(o[2]||X,"svelte:component").$$render(n,{data:v,form:c,this:a[2]},{this:s=>{a[2]=s,i=!1;}},{})}`}`})}`:`${z$2(o[1]||X,"svelte:component").$$render(n,{data:m,form:c,this:a[1]},{this:s=>{a[1]=s,i=!1;}},{})}`}`})}`:`${z$2(o[0]||X,"svelte:component").$$render(n,{data:f,form:c,this:a[0]},{this:s=>{a[0]=s,i=!1;}},{})}`}

`;while(!i);return g}),j={app_template_contains_nonce:!1,csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,track_server_fetches:!1,embedded:!1,env_public_prefix:"PUBLIC_",hooks:null,preload_strategy:"modulepreload",root:C,service_worker:!1,templates:{app:({head:n,body:t,assets:e,nonce:k,env:d})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="`+e+`/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		<!-- Flickity JavaScript -->
		<!-- <script src="`+e+`/flickity/flickity.pkgd.min.js"><\/script>     -->
		<!-- Flickity CSS -->
		<link rel="stylesheet" href="`+e+`/flickity/flickity.min.css" />		
		`+n+`



	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">`+t+`</div>
	</body>
</html>
`,error:({status:n,message:t})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+t+`</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+n+`</span>
			<div class="message">
				<h1>`+t+`</h1>
			</div>
		</div>
	</body>
</html>
`},version_hash:"1re4fcr"};function z$1(){return {}}

/** @type {Record<string, string>} */
const escaped = {
	'<': '\\u003C',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};

class DevalueError extends Error {
	/**
	 * @param {string} message
	 * @param {string[]} keys
	 */
	constructor(message, keys) {
		super(message);
		this.name = 'DevalueError';
		this.path = keys.join('');
	}
}

/** @param {any} thing */
function is_primitive(thing) {
	return Object(thing) !== thing;
}

const object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
	Object.prototype
)
	.sort()
	.join('\0');

/** @param {any} thing */
function is_plain_object(thing) {
	const proto = Object.getPrototypeOf(thing);

	return (
		proto === Object.prototype ||
		proto === null ||
		Object.getOwnPropertyNames(proto).sort().join('\0') === object_proto_names
	);
}

/** @param {any} thing */
function get_type(thing) {
	return Object.prototype.toString.call(thing).slice(8, -1);
}

/** @param {string} char */
function get_escaped_char(char) {
	switch (char) {
		case '"':
			return '\\"';
		case '<':
			return '\\u003C';
		case '\\':
			return '\\\\';
		case '\n':
			return '\\n';
		case '\r':
			return '\\r';
		case '\t':
			return '\\t';
		case '\b':
			return '\\b';
		case '\f':
			return '\\f';
		case '\u2028':
			return '\\u2028';
		case '\u2029':
			return '\\u2029';
		default:
			return char < ' '
				? `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`
				: '';
	}
}

/** @param {string} str */
function stringify_string(str) {
	let result = '';
	let last_pos = 0;
	const len = str.length;

	for (let i = 0; i < len; i += 1) {
		const char = str[i];
		const replacement = get_escaped_char(char);
		if (replacement) {
			result += str.slice(last_pos, i) + replacement;
			last_pos = i + 1;
		}
	}

	return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
const unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
const reserved =
	/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;

/**
 * Turn a value into the JavaScript that creates an equivalent value
 * @param {any} value
 * @param {(value: any) => string | void} [replacer]
 */
function uneval(value, replacer) {
	const counts = new Map();

	/** @type {string[]} */
	const keys = [];

	const custom = new Map();

	/** @param {any} thing */
	function walk(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (!is_primitive(thing)) {
			if (counts.has(thing)) {
				counts.set(thing, counts.get(thing) + 1);
				return;
			}

			counts.set(thing, 1);

			if (replacer) {
				const str = replacer(thing);

				if (typeof str === 'string') {
					custom.set(thing, str);
					return;
				}
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'BigInt':
				case 'String':
				case 'Boolean':
				case 'Date':
				case 'RegExp':
					return;

				case 'Array':
					/** @type {any[]} */ (thing).forEach((value, i) => {
						keys.push(`[${i}]`);
						walk(value);
						keys.pop();
					});
					break;

				case 'Set':
					Array.from(thing).forEach(walk);
					break;

				case 'Map':
					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive$1(key) : '...'})`
						);
						walk(value);
						keys.pop();
					}
					break;

				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (Object.getOwnPropertySymbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					for (const key in thing) {
						keys.push(`.${key}`);
						walk(thing[key]);
						keys.pop();
					}
			}
		}
	}

	walk(value);

	const names = new Map();

	Array.from(counts)
		.filter((entry) => entry[1] > 1)
		.sort((a, b) => b[1] - a[1])
		.forEach((entry, i) => {
			names.set(entry[0], get_name(i));
		});

	/**
	 * @param {any} thing
	 * @returns {string}
	 */
	function stringify(thing) {
		if (names.has(thing)) {
			return names.get(thing);
		}

		if (is_primitive(thing)) {
			return stringify_primitive$1(thing);
		}

		if (custom.has(thing)) {
			return custom.get(thing);
		}

		const type = get_type(thing);

		switch (type) {
			case 'Number':
			case 'String':
			case 'Boolean':
				return `Object(${stringify(thing.valueOf())})`;

			case 'RegExp':
				return `new RegExp(${stringify_string(thing.source)}, "${
					thing.flags
				}")`;

			case 'Date':
				return `new Date(${thing.getTime()})`;

			case 'Array':
				const members = /** @type {any[]} */ (thing).map((v, i) =>
					i in thing ? stringify(v) : ''
				);
				const tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
				return `[${members.join(',')}${tail}]`;

			case 'Set':
			case 'Map':
				return `new ${type}([${Array.from(thing).map(stringify).join(',')}])`;

			default:
				const obj = `{${Object.keys(thing)
					.map((key) => `${safe_key(key)}:${stringify(thing[key])}`)
					.join(',')}}`;
				const proto = Object.getPrototypeOf(thing);
				if (proto === null) {
					return Object.keys(thing).length > 0
						? `Object.assign(Object.create(null),${obj})`
						: `Object.create(null)`;
				}

				return obj;
		}
	}

	const str = stringify(value);

	if (names.size) {
		/** @type {string[]} */
		const params = [];

		/** @type {string[]} */
		const statements = [];

		/** @type {string[]} */
		const values = [];

		names.forEach((name, thing) => {
			params.push(name);

			if (custom.has(thing)) {
				values.push(/** @type {string} */ (custom.get(thing)));
				return;
			}

			if (is_primitive(thing)) {
				values.push(stringify_primitive$1(thing));
				return;
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					values.push(`Object(${stringify(thing.valueOf())})`);
					break;

				case 'RegExp':
					values.push(thing.toString());
					break;

				case 'Date':
					values.push(`new Date(${thing.getTime()})`);
					break;

				case 'Array':
					values.push(`Array(${thing.length})`);
					/** @type {any[]} */ (thing).forEach((v, i) => {
						statements.push(`${name}[${i}]=${stringify(v)}`);
					});
					break;

				case 'Set':
					values.push(`new Set`);
					statements.push(
						`${name}.${Array.from(thing)
							.map((v) => `add(${stringify(v)})`)
							.join('.')}`
					);
					break;

				case 'Map':
					values.push(`new Map`);
					statements.push(
						`${name}.${Array.from(thing)
							.map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`)
							.join('.')}`
					);
					break;

				default:
					values.push(
						Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}'
					);
					Object.keys(thing).forEach((key) => {
						statements.push(
							`${name}${safe_prop(key)}=${stringify(thing[key])}`
						);
					});
			}
		});

		statements.push(`return ${str}`);

		return `(function(${params.join(',')}){${statements.join(
			';'
		)}}(${values.join(',')}))`;
	} else {
		return str;
	}
}

/** @param {number} num */
function get_name(num) {
	let name = '';

	do {
		name = chars[num % chars.length] + name;
		num = ~~(num / chars.length) - 1;
	} while (num >= 0);

	return reserved.test(name) ? `${name}0` : name;
}

/** @param {string} c */
function escape_unsafe_char(c) {
	return escaped[c] || c;
}

/** @param {string} str */
function escape_unsafe_chars(str) {
	return str.replace(unsafe_chars, escape_unsafe_char);
}

/** @param {string} key */
function safe_key(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? key
		: escape_unsafe_chars(JSON.stringify(key));
}

/** @param {string} key */
function safe_prop(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? `.${key}`
		: `[${escape_unsafe_chars(JSON.stringify(key))}]`;
}

/** @param {any} thing */
function stringify_primitive$1(thing) {
	if (typeof thing === 'string') return stringify_string(thing);
	if (thing === void 0) return 'void 0';
	if (thing === 0 && 1 / thing < 0) return '-0';
	const str = String(thing);
	if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
	if (typeof thing === 'bigint') return thing + 'n';
	return str;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Turn a value into a JSON string that can be parsed with `devalue.parse`
 * @param {any} value
 * @param {Record<string, (value: any) => any>} [reducers]
 */
function stringify(value, reducers) {
	/** @type {any[]} */
	const stringified = [];

	/** @type {Map<any, number>} */
	const indexes = new Map();

	/** @type {Array<{ key: string, fn: (value: any) => any }>} */
	const custom = [];
	for (const key in reducers) {
		custom.push({ key, fn: reducers[key] });
	}

	/** @type {string[]} */
	const keys = [];

	let p = 0;

	/** @param {any} thing */
	function flatten(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (indexes.has(thing)) return indexes.get(thing);

		if (thing === undefined) return UNDEFINED;
		if (Number.isNaN(thing)) return NAN;
		if (thing === Infinity) return POSITIVE_INFINITY;
		if (thing === -Infinity) return NEGATIVE_INFINITY;
		if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;

		const index = p++;
		indexes.set(thing, index);

		for (const { key, fn } of custom) {
			const value = fn(thing);
			if (value) {
				stringified[index] = `["${key}",${flatten(value)}]`;
				return index;
			}
		}

		let str = '';

		if (is_primitive(thing)) {
			str = stringify_primitive(thing);
		} else {
			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					str = `["Object",${stringify_primitive(thing)}]`;
					break;

				case 'BigInt':
					str = `["BigInt",${thing}]`;
					break;

				case 'Date':
					str = `["Date","${thing.toISOString()}"]`;
					break;

				case 'RegExp':
					const { source, flags } = thing;
					str = flags
						? `["RegExp",${stringify_string(source)},"${flags}"]`
						: `["RegExp",${stringify_string(source)}]`;
					break;

				case 'Array':
					str = '[';

					for (let i = 0; i < thing.length; i += 1) {
						if (i > 0) str += ',';

						if (i in thing) {
							keys.push(`[${i}]`);
							str += flatten(thing[i]);
							keys.pop();
						} else {
							str += HOLE;
						}
					}

					str += ']';

					break;

				case 'Set':
					str = '["Set"';

					for (const value of thing) {
						str += `,${flatten(value)}`;
					}

					str += ']';
					break;

				case 'Map':
					str = '["Map"';

					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive(key) : '...'})`
						);
						str += `,${flatten(key)},${flatten(value)}`;
					}

					str += ']';
					break;

				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (Object.getOwnPropertySymbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					if (Object.getPrototypeOf(thing) === null) {
						str = '["null"';
						for (const key in thing) {
							keys.push(`.${key}`);
							str += `,${stringify_string(key)},${flatten(thing[key])}`;
							keys.pop();
						}
						str += ']';
					} else {
						str = '{';
						let started = false;
						for (const key in thing) {
							if (started) str += ',';
							started = true;
							keys.push(`.${key}`);
							str += `${stringify_string(key)}:${flatten(thing[key])}`;
							keys.pop();
						}
						str += '}';
					}
			}
		}

		stringified[index] = str;
		return index;
	}

	const index = flatten(value);

	// special case — value is represented as a negative index
	if (index < 0) return `${index}`;

	return `[${stringified.join(',')}]`;
}

/**
 * @param {any} thing
 * @returns {string}
 */
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === 'string') return stringify_string(thing);
	if (thing instanceof String) return stringify_string(thing.toString());
	if (thing === void 0) return UNDEFINED.toString();
	if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
	if (type === 'bigint') return `["BigInt","${thing}"]`;
	return String(thing);
}

var cookie = {};

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredCookie;

function requireCookie () {
	if (hasRequiredCookie) return cookie;
	hasRequiredCookie = 1;

	/**
	 * Module exports.
	 * @public
	 */

	cookie.parse = parse;
	cookie.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var __toString = Object.prototype.toString;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {};
	  var opt = options || {};
	  var dec = opt.decode || decode;

	  var index = 0;
	  while (index < str.length) {
	    var eqIdx = str.indexOf('=', index);

	    // no more cookie pairs
	    if (eqIdx === -1) {
	      break
	    }

	    var endIdx = str.indexOf(';', index);

	    if (endIdx === -1) {
	      endIdx = str.length;
	    } else if (endIdx < eqIdx) {
	      // backtrack on prior semicolon
	      index = str.lastIndexOf(';', eqIdx - 1) + 1;
	      continue
	    }

	    var key = str.slice(index, eqIdx).trim();

	    // only assign once
	    if (undefined === obj[key]) {
	      var val = str.slice(eqIdx + 1, endIdx).trim();

	      // quoted values
	      if (val.charCodeAt(0) === 0x22) {
	        val = val.slice(1, -1);
	      }

	      obj[key] = tryDecode(val, dec);
	    }

	    index = endIdx + 1;
	  }

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var str = name + '=' + value;

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;

	    if (isNaN(maxAge) || !isFinite(maxAge)) {
	      throw new TypeError('option maxAge is invalid')
	    }

	    str += '; Max-Age=' + Math.floor(maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    str += '; Domain=' + opt.domain;
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    str += '; Path=' + opt.path;
	  }

	  if (opt.expires) {
	    var expires = opt.expires;

	    if (!isDate(expires) || isNaN(expires.valueOf())) {
	      throw new TypeError('option expires is invalid');
	    }

	    str += '; Expires=' + expires.toUTCString();
	  }

	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }

	  if (opt.secure) {
	    str += '; Secure';
	  }

	  if (opt.priority) {
	    var priority = typeof opt.priority === 'string'
	      ? opt.priority.toLowerCase()
	      : opt.priority;

	    switch (priority) {
	      case 'low':
	        str += '; Priority=Low';
	        break
	      case 'medium':
	        str += '; Priority=Medium';
	        break
	      case 'high':
	        str += '; Priority=High';
	        break
	      default:
	        throw new TypeError('option priority is invalid')
	    }
	  }

	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;

	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      case 'none':
	        str += '; SameSite=None';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }

	  return str;
	}

	/**
	 * URL-decode string value. Optimized to skip native call when no %.
	 *
	 * @param {string} str
	 * @returns {string}
	 */

	function decode (str) {
	  return str.indexOf('%') !== -1
	    ? decodeURIComponent(str)
	    : str
	}

	/**
	 * URL-encode value.
	 *
	 * @param {string} str
	 * @returns {string}
	 */

	function encode (val) {
	  return encodeURIComponent(val)
	}

	/**
	 * Determine if value is a Date.
	 *
	 * @param {*} val
	 * @private
	 */

	function isDate (val) {
	  return __toString.call(val) === '[object Date]' ||
	    val instanceof Date
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}
	return cookie;
}

var cookieExports = requireCookie();

var setCookie = {exports: {}};

var hasRequiredSetCookie;

function requireSetCookie () {
	if (hasRequiredSetCookie) return setCookie.exports;
	hasRequiredSetCookie = 1;

	var defaultParseOptions = {
	  decodeValues: true,
	  map: false,
	  silent: false,
	};

	function isNonEmptyString(str) {
	  return typeof str === "string" && !!str.trim();
	}

	function parseString(setCookieValue, options) {
	  var parts = setCookieValue.split(";").filter(isNonEmptyString);

	  var nameValuePairStr = parts.shift();
	  var parsed = parseNameValuePair(nameValuePairStr);
	  var name = parsed.name;
	  var value = parsed.value;

	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  try {
	    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
	  } catch (e) {
	    console.error(
	      "set-cookie-parser encountered an error while decoding a cookie with value '" +
	        value +
	        "'. Set options.decodeValues to false to disable this feature.",
	      e
	    );
	  }

	  var cookie = {
	    name: name,
	    value: value,
	  };

	  parts.forEach(function (part) {
	    var sides = part.split("=");
	    var key = sides.shift().trimLeft().toLowerCase();
	    var value = sides.join("=");
	    if (key === "expires") {
	      cookie.expires = new Date(value);
	    } else if (key === "max-age") {
	      cookie.maxAge = parseInt(value, 10);
	    } else if (key === "secure") {
	      cookie.secure = true;
	    } else if (key === "httponly") {
	      cookie.httpOnly = true;
	    } else if (key === "samesite") {
	      cookie.sameSite = value;
	    } else {
	      cookie[key] = value;
	    }
	  });

	  return cookie;
	}

	function parseNameValuePair(nameValuePairStr) {
	  // Parses name-value-pair according to rfc6265bis draft

	  var name = "";
	  var value = "";
	  var nameValueArr = nameValuePairStr.split("=");
	  if (nameValueArr.length > 1) {
	    name = nameValueArr.shift();
	    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
	  } else {
	    value = nameValuePairStr;
	  }

	  return { name: name, value: value };
	}

	function parse(input, options) {
	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (!input) {
	    if (!options.map) {
	      return [];
	    } else {
	      return {};
	    }
	  }

	  if (input.headers) {
	    if (typeof input.headers.getSetCookie === "function") {
	      // for fetch responses - they combine headers of the same type in the headers array,
	      // but getSetCookie returns an uncombined array
	      input = input.headers.getSetCookie();
	    } else if (input.headers["set-cookie"]) {
	      // fast-path for node.js (which automatically normalizes header names to lower-case
	      input = input.headers["set-cookie"];
	    } else {
	      // slow-path for other environments - see #25
	      var sch =
	        input.headers[
	          Object.keys(input.headers).find(function (key) {
	            return key.toLowerCase() === "set-cookie";
	          })
	        ];
	      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
	      if (!sch && input.headers.cookie && !options.silent) {
	        console.warn(
	          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
	        );
	      }
	      input = sch;
	    }
	  }
	  if (!Array.isArray(input)) {
	    input = [input];
	  }

	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (!options.map) {
	    return input.filter(isNonEmptyString).map(function (str) {
	      return parseString(str, options);
	    });
	  } else {
	    var cookies = {};
	    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
	      var cookie = parseString(str, options);
	      cookies[cookie.name] = cookie;
	      return cookies;
	    }, cookies);
	  }
	}

	/*
	  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
	  that are within a single set-cookie field-value, such as in the Expires portion.

	  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
	  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
	  React Native's fetch does this for *every* header, including set-cookie.

	  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
	  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
	*/
	function splitCookiesString(cookiesString) {
	  if (Array.isArray(cookiesString)) {
	    return cookiesString;
	  }
	  if (typeof cookiesString !== "string") {
	    return [];
	  }

	  var cookiesStrings = [];
	  var pos = 0;
	  var start;
	  var ch;
	  var lastComma;
	  var nextStart;
	  var cookiesSeparatorFound;

	  function skipWhitespace() {
	    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
	      pos += 1;
	    }
	    return pos < cookiesString.length;
	  }

	  function notSpecialChar() {
	    ch = cookiesString.charAt(pos);

	    return ch !== "=" && ch !== ";" && ch !== ",";
	  }

	  while (pos < cookiesString.length) {
	    start = pos;
	    cookiesSeparatorFound = false;

	    while (skipWhitespace()) {
	      ch = cookiesString.charAt(pos);
	      if (ch === ",") {
	        // ',' is a cookie separator if we have later first '=', not ';' or ','
	        lastComma = pos;
	        pos += 1;

	        skipWhitespace();
	        nextStart = pos;

	        while (pos < cookiesString.length && notSpecialChar()) {
	          pos += 1;
	        }

	        // currently special character
	        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
	          // we found cookies separator
	          cookiesSeparatorFound = true;
	          // pos is inside the next cookie, so back up and return it.
	          pos = nextStart;
	          cookiesStrings.push(cookiesString.substring(start, lastComma));
	          start = pos;
	        } else {
	          // in param ',' or param separator ';',
	          // we continue from that comma
	          pos = lastComma + 1;
	        }
	      } else {
	        pos += 1;
	      }
	    }

	    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
	      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
	    }
	  }

	  return cookiesStrings;
	}

	setCookie.exports = parse;
	setCookie.exports.parse = parse;
	setCookie.exports.parseString = parseString;
	setCookie.exports.splitCookiesString = splitCookiesString;
	return setCookie.exports;
}

var setCookieExports = requireSetCookie();

function ce(e,t){const r=[];e.split(",").forEach((o,a)=>{const d=/([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(o);if(d){const[,l,c,i="1"]=d;r.push({type:l,subtype:c,q:+i,i:a});}}),r.sort((o,a)=>o.q!==a.q?a.q-o.q:o.subtype==="*"!=(a.subtype==="*")?o.subtype==="*"?1:-1:o.type==="*"!=(a.type==="*")?o.type==="*"?1:-1:o.i-a.i);let n,s=1/0;for(const o of t){const[a,d]=o.split("/"),l=r.findIndex(c=>(c.type===a||c.type==="*")&&(c.subtype===d||c.subtype==="*"));l!==-1&&l<s&&(n=o,s=l);}return n}function pt(e,...t){const r=e.headers.get("content-type")?.split(";",1)[0].trim()??"";return t.includes(r.toLowerCase())}function Ce(e){return pt(e,"application/x-www-form-urlencoded","multipart/form-data","text/plain")}function _t(e){return e instanceof Error||e&&e.name&&e.message?e:new Error(JSON.stringify(e))}function mt(e,t){return f(`${t} method not allowed`,{status:405,headers:{allow:yt(e).join(", ")}})}function yt(e){const t=["GET","POST","PUT","PATCH","DELETE","OPTIONS"].filter(r=>r in e);return ("GET"in e||"HEAD"in e)&&t.push("HEAD"),t}function ue(e,t,r){let n=e.templates.error({status:t,message:r});return f(n,{headers:{"content-type":"text/html; charset=utf-8"},status:t})}async function ge(e,t,r){r=r instanceof o?r:_t(r);const n=r instanceof o?r.status:500,s=await q(e,t,r),o$1=ce(e.request.headers.get("accept")||"text/html",["application/json","text/html"]);return e.isDataRequest||o$1==="application/json"?g(s,{status:n}):ue(t,n,s.message)}async function q(e,t,r){return r instanceof o?r.body:await t.hooks.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function K(e,t){return new Response(void 0,{status:e,headers:{location:t}})}function Ue(e,t){return t.path?`Data returned from \`load\` while rendering ${e.route.id} is not serializable: ${t.message} (data${t.path})`:t.path===""?`Data returned from \`load\` while rendering ${e.route.id} is not a plain object`:t.message}function ze(e){const t=[];return e.uses&&e.uses.dependencies.size>0&&t.push(`"dependencies":${JSON.stringify(Array.from(e.uses.dependencies))}`),e.uses&&e.uses.params.size>0&&t.push(`"params":${JSON.stringify(Array.from(e.uses.params))}`),e.uses?.parent&&t.push('"parent":1'),e.uses?.route&&t.push('"route":1'),e.uses?.url&&t.push('"url":1'),`"uses":{${t.join(",")}}`}async function gt(e,t,r){const n=e.request.method;let s=t[n];if(!s&&n==="HEAD"&&(s=t.GET),!s)return mt(t,n);const o=t.prerender??r.prerender_default;if(o&&(t.POST||t.PATCH||t.PUT||t.DELETE))throw new Error("Cannot prerender endpoints that have mutative methods");if(r.prerendering&&!o){if(r.depth>0)throw new Error(`${e.route.id} is not prerenderable`);return new Response(void 0,{status:204})}try{const a=await s(e);if(!(a instanceof Response))throw new Error(`Invalid response from route ${e.url.pathname}: handler should return a Response object`);return r.prerendering&&a.headers.set("x-sveltekit-prerender",String(o)),a}catch(a){if(a instanceof c)return new Response(void 0,{status:a.status,headers:{location:a.location}});throw a}}function wt(e){const{method:t,headers:r}=e.request;if(t==="PUT"||t==="PATCH"||t==="DELETE"||t==="OPTIONS")return !0;if(t==="POST"&&r.get("x-sveltekit-action")==="true")return !1;const n=e.request.headers.get("accept")??"*/*";return ce(n,["*","text/html"])!=="text/html"}function we(e){return e.filter(t=>t!=null)}function le(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function $t(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}const bt=["href","pathname","search","searchParams","toString","toJSON"];function xt(e,t){const r=new URL(e);for(const n of bt)Object.defineProperty(r,n,{get(){return t(),e[n]},enumerable:!0,configurable:!0});return r[Symbol.for("nodejs.util.inspect.custom")]=(n,s,o)=>o(e,s),vt(r),r}function vt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}});}function He(e){for(const t of ["search","searchParams"])Object.defineProperty(e,t,{get(){throw new Error(`Cannot access url.${t} on a page with prerendering enabled`)}});}const de="/__data.json";function Et(e){return e.endsWith(de)}function jt(e){return e.replace(/\/$/,"")+de}function $e(e){return e.slice(0,-de.length)}function Ie(e){return ce(e.request.headers.get("accept")??"*/*",["application/json","text/html"])==="application/json"&&e.request.method==="POST"}async function St(e,t,r){const n=r?.actions;if(!n){const s=l(405,"POST method not allowed. No actions exist for this page");return F({type:"error",error:await q(e,t,s)},{status:s.status,headers:{allow:"GET"}})}De(n);try{const s=await We(e,n);return s instanceof h$1?F({type:"failure",status:s.status,data:ke(s.data,e.route.id)}):F({type:"success",status:s?200:204,data:ke(s,e.route.id)})}catch(s){const o$1=s;return o$1 instanceof c?Le(o$1):F({type:"error",error:await q(e,t,Ne(o$1))},{status:o$1 instanceof o?o$1.status:500})}}function Ne(e){return e instanceof h$1?new Error('Cannot "throw fail()". Use "return fail()"'):e}function Le(e){return F({type:"redirect",status:e.status,location:e.location})}function F(e,t){return g(e,t)}function Rt(e){return e.request.method==="POST"}async function Ot(e,t){const r=t?.actions;if(!r)return e.setHeaders({allow:"GET"}),{type:"error",error:l(405,"POST method not allowed. No actions exist for this page")};De(r);try{const n=await We(e,r);return n instanceof h$1?{type:"failure",status:n.status,data:n.data}:{type:"success",status:200,data:n}}catch(n){const s=n;return s instanceof c?{type:"redirect",status:s.status,location:s.location}:{type:"error",error:Ne(s)}}}function De(e){if(e.default&&Object.keys(e).length>1)throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions")}async function We(e,t){const r=new URL(e.request.url);let n="default";for(const o of r.searchParams)if(o[0].startsWith("/")){if(n=o[0].slice(1),n==="default")throw new Error('Cannot use reserved action name "default"');break}const s=t[n];if(!s)throw new Error(`No action with name '${n}' found`);if(!Ce(e.request))throw new Error(`Actions expect form-encoded data (received ${e.request.headers.get("content-type")})`);return s(e)}function Pt(e,t){return Je(e,uneval,t)}function ke(e,t){return Je(e,stringify,t)}function Je(e,t,r){try{return t(e)}catch(n){const s=n;if("path"in s){let o=`Data returned from action inside ${r} is not serializable: ${s.message}`;throw s.path!==""&&(o+=` (data.${s.path})`),new Error(o)}throw s}}async function Fe(e){for(const t in e)if(typeof e[t]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([r,n])=>[r,await n])));return e}const be="x-sveltekit-invalidated";async function fe({event:e,state:t,node:r,parent:n,track_server_fetches:s}){if(!r?.server)return null;const o={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},a=xt(e.url,()=>{o.url=!0;});t.prerendering&&He(a);const d=await r.server.load?.call(null,{...e,fetch:(c,i)=>{const p=new URL(c instanceof Request?c.url:c,e.url);return s&&o.dependencies.add(p.href),e.fetch(c,i)},depends:(...c)=>{for(const i of c){const{href:p}=new URL(i,e.url);o.dependencies.add(p);}},params:new Proxy(e.params,{get:(c,i)=>(o.params.add(i),c[i])}),parent:async()=>(o.parent=!0,n()),route:new Proxy(e.route,{get:(c,i)=>(o.route=!0,c[i])}),url:a});return {type:"data",data:d?await Fe(d):null,uses:o,slash:r.server.trailingSlash}}async function Me({event:e,fetched:t,node:r,parent:n,server_data_promise:s,state:o,resolve_opts:a,csr:d}){const l=await s;if(!r?.universal?.load)return l?.data??null;const c=await r.universal.load.call(null,{url:e.url,params:e.params,data:l?.data??null,route:e.route,fetch:Tt(e,o,t,d,a),setHeaders:e.setHeaders,depends:()=>{},parent:n});return c?await Fe(c):null}function Tt(e,t,r,n,s){return async(o,a)=>{const d=o instanceof Request&&o.body?o.clone().body:null;let l=await e.fetch(o,a);const c=new URL(o instanceof Request?o.url:o,e.url),i=c.origin===e.url.origin;let p;if(i)t.prerendering&&(p={response:l,body:null},t.prerendering.dependencies.set(c.pathname,p));else if((o instanceof Request?o.mode:a?.mode??"cors")==="no-cors")l=new Response("",{status:l.status,statusText:l.statusText,headers:l.headers});else {const h=l.headers.get("access-control-allow-origin");if(!h||h!==e.url.origin&&h!=="*")throw new Error(`CORS error: ${h?"Incorrect":"No"} 'Access-Control-Allow-Origin' header is present on the requested resource`)}const m=new Proxy(l,{get(u,h,g){async function f(){const _=await u.text();if(!_||typeof _=="string"){const w=Number(u.status);if(isNaN(w))throw new Error(`response.status is not a number. value: "${u.status}" type: ${typeof u.status}`);r.push({url:i?c.href.slice(e.url.origin.length):c.href,method:e.request.method,request_body:o instanceof Request&&d?await qt(d):a?.body,request_headers:a?.headers,response_body:_,response:u});}return p&&(p.body=_),_}return h==="arrayBuffer"?async()=>{const _=await u.arrayBuffer();return p&&(p.body=new Uint8Array(_)),_}:h==="text"?f:h==="json"?async()=>JSON.parse(await f()):Reflect.get(u,h,u)}});if(n){const u=l.headers.get;l.headers.get=h=>{const g=h.toLowerCase(),f=u.call(l.headers,g);if(f&&!g.startsWith("x-sveltekit-")&&!s.filterSerializedResponseHeaders(g,f))throw new Error(`Failed to get response header "${g}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${e.route.id})`);return f};}return m}}async function qt(e){let t="";const r=e.getReader(),n=new TextDecoder;for(;;){const{done:s,value:o}=await r.read();if(s)break;t+=n.decode(o);}return t}function Ge(...e){let t=5381;for(const r of e)if(typeof r=="string"){let n=r.length;for(;n;)t=t*33^r.charCodeAt(--n);}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)t=t*33^n[--s];}else throw new TypeError("value must be a string or TypedArray");return (t>>>0).toString(36)}const Be={"&":"&amp;",'"':"&quot;"},At=new RegExp(`[${Object.keys(Be).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,"g");function Ve(e){return `"${e.replace(At,r=>r.length===2?r:Be[r]??`&#${r.charCodeAt(0)};`)}"`}const Xe={"<":"\\u003C","\u2028":"\\u2028","\u2029":"\\u2029"},Ct=new RegExp(`[${Object.keys(Xe).join("")}]`,"g");function Ut(e,t,r=!1){const n={};let s=null,o=null,a=!1;for(const[i,p]of e.response.headers)t(i,p)&&(n[i]=p),i==="cache-control"&&(s=p),i==="age"&&(o=p),i==="vary"&&(a=!0);const d={status:e.response.status,statusText:e.response.statusText,headers:n,body:e.response_body},l=JSON.stringify(d).replace(Ct,i=>Xe[i]),c=['type="application/json"',"data-sveltekit-fetched",`data-url=${Ve(e.url)}`];if(e.request_headers||e.request_body){const i=[];e.request_headers&&i.push([...new Headers(e.request_headers)].join(",")),e.request_body&&i.push(e.request_body),c.push(`data-hash="${Ge(...i)}"`);}if(!r&&e.method==="GET"&&s&&!a){const i=/s-maxage=(\d+)/g.exec(s)??/max-age=(\d+)/g.exec(s);if(i){const p=+i[1]-+(o??"0");c.push(`data-ttl="${p}"`);}}return `<script ${c.join(" ")}>${l}<\/script>`}const N=JSON.stringify,zt=new TextEncoder;function xe(e){re[0]||Ht();const t=Ke.slice(0),r=It(e);for(let s=0;s<r.length;s+=16){const o=r.subarray(s,s+16);let a,d,l,c=t[0],i=t[1],p=t[2],m=t[3],u=t[4],h=t[5],g=t[6],f=t[7];for(let _=0;_<64;_++)_<16?a=o[_]:(d=o[_+1&15],l=o[_+14&15],a=o[_&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(l>>>17^l>>>19^l>>>10^l<<15^l<<13)+o[_&15]+o[_+9&15]|0),a=a+f+(u>>>6^u>>>11^u>>>25^u<<26^u<<21^u<<7)+(g^u&(h^g))+re[_],f=g,g=h,h=u,u=m+a|0,m=p,p=i,i=c,c=a+(i&p^m&(i^p))+(i>>>2^i>>>13^i>>>22^i<<30^i<<19^i<<10)|0;t[0]=t[0]+c|0,t[1]=t[1]+i|0,t[2]=t[2]+p|0,t[3]=t[3]+m|0,t[4]=t[4]+u|0,t[5]=t[5]+h|0,t[6]=t[6]+g|0,t[7]=t[7]+f|0;}const n=new Uint8Array(t.buffer);return Qe(n),Ye(n)}const Ke=new Uint32Array(8),re=new Uint32Array(64);function Ht(){function e(r){return (r-Math.floor(r))*4294967296}let t=2;for(let r=0;r<64;t++){let n=!0;for(let s=2;s*s<=t;s++)if(t%s===0){n=!1;break}n&&(r<8&&(Ke[r]=e(t**(1/2))),re[r]=e(t**(1/3)),r++);}}function Qe(e){for(let t=0;t<e.length;t+=4){const r=e[t+0],n=e[t+1],s=e[t+2],o=e[t+3];e[t+0]=o,e[t+1]=s,e[t+2]=n,e[t+3]=r;}}function It(e){const t=zt.encode(e),r=t.length*8,n=512*Math.ceil((r+65)/512),s=new Uint8Array(n/8);s.set(t),s[t.length]=128,Qe(s);const o=new Uint32Array(s.buffer);return o[o.length-2]=Math.floor(r/4294967296),o[o.length-1]=r,o}const U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");function Ye(e){const t=e.length;let r="",n;for(n=2;n<t;n+=3)r+=U[e[n-2]>>2],r+=U[(e[n-2]&3)<<4|e[n-1]>>4],r+=U[(e[n-1]&15)<<2|e[n]>>6],r+=U[e[n]&63];return n===t+1&&(r+=U[e[n-2]>>2],r+=U[(e[n-2]&3)<<4],r+="=="),n===t&&(r+=U[e[n-2]>>2],r+=U[(e[n-2]&3)<<4|e[n-1]>>4],r+=U[(e[n-1]&15)<<2],r+="="),r}const ve=new Uint8Array(16);function Nt(){return crypto.getRandomValues(ve),Ye(ve)}const Lt=new Set(["self","unsafe-eval","unsafe-hashes","unsafe-inline","none","strict-dynamic","report-sample","wasm-unsafe-eval","script"]),Dt=/^(nonce|sha\d\d\d)-/;class Ze{#e;#t;#s;#o;#r;#n;#a;constructor(t,r,n){this.#e=t,this.#o=r;const s=this.#o;this.#r=[],this.#n=[];const o=s["script-src"]||s["default-src"],a=s["style-src"]||s["default-src"];this.#t=!!o&&o.filter(d=>d!=="unsafe-inline").length>0,this.#s=!!a&&a.filter(d=>d!=="unsafe-inline").length>0,this.script_needs_nonce=this.#t&&!this.#e,this.style_needs_nonce=this.#s&&!this.#e,this.#a=n;}add_script(t){this.#t&&(this.#e?this.#r.push(`sha256-${xe(t)}`):this.#r.length===0&&this.#r.push(`nonce-${this.#a}`));}add_style(t){this.#s&&(this.#e?this.#n.push(`sha256-${xe(t)}`):this.#n.length===0&&this.#n.push(`nonce-${this.#a}`));}get_header(t=!1){const r=[],n={...this.#o};this.#n.length>0&&(n["style-src"]=[...n["style-src"]||n["default-src"]||[],...this.#n]),this.#r.length>0&&(n["script-src"]=[...n["script-src"]||n["default-src"]||[],...this.#r]);for(const s in n){if(t&&(s==="frame-ancestors"||s==="report-uri"||s==="sandbox"))continue;const o=n[s];if(!o)continue;const a=[s];Array.isArray(o)&&o.forEach(d=>{Lt.has(d)||Dt.test(d)?a.push(`'${d}'`):a.push(d);}),r.push(a.join(" "));}return r.join("; ")}}class Wt extends Ze{get_meta(){return `<meta http-equiv="content-security-policy" content=${Ve(this.get_header(!0))}>`}}class Jt extends Ze{constructor(t,r,n){if(super(t,r,n),Object.values(r).filter(s=>!!s).length>0){const s=r["report-to"]?.length??0>0,o=r["report-uri"]?.length??0>0;if(!s&&!o)throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both")}}}class Ft{nonce=Nt();csp_provider;report_only_provider;constructor({mode:t,directives:r,reportOnly:n},{prerender:s}){const o=t==="hash"||t==="auto"&&s;this.csp_provider=new Wt(o,r,this.nonce),this.report_only_provider=new Jt(o,n,this.nonce);}get script_needs_nonce(){return this.csp_provider.script_needs_nonce||this.report_only_provider.script_needs_nonce}get style_needs_nonce(){return this.csp_provider.style_needs_nonce||this.report_only_provider.style_needs_nonce}add_script(t){this.csp_provider.add_script(t),this.report_only_provider.add_script(t);}add_style(t){this.csp_provider.add_style(t),this.report_only_provider.add_style(t);}}function Ee(){let e,t;return {promise:new Promise((n,s)=>{e=n,t=s;}),fulfil:e,reject:t}}function et(){let e=[Ee()];return {iterator:{[Symbol.asyncIterator](){return {next:async()=>{const t=await e[0].promise;return t.done||e.shift(),t}}}},push:t=>{e[e.length-1].fulfil({value:t,done:!1}),e.push(Ee());},done:()=>{e[e.length-1].fulfil({done:!0});}}}const Mt="/_svelte_kit_assets",Gt={...h(!1),check:()=>!1},je=new TextEncoder;async function M({branch:e,fetched:t,options:r,manifest:n,state:s,page_config:o,status:a,error:d=null,event:l,resolve_opts:c,action_result:i}){if(s.prerendering){if(r.csp.mode==="nonce")throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');if(r.app_template_contains_nonce)throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%")}const{client:p$2}=n._,m=new Set(p$2.imports),u=new Set(p$2.stylesheets),h=new Set(p$2.fonts),g=new Set,f$1=new Map;let _;const w=i?.type==="success"||i?.type==="failure"?i.data??null:null;let y$1=p,b$1=y,$=N(p);if(s.prerendering?.fallback||(y$1=l.url.pathname.slice(p.length).split("/").slice(2).map(()=>"..").join("/")||".",$=`new URL(${N(y$1)}, location).pathname.slice(0, -1)`,(!y||y[0]==="/"&&y!==Mt)&&(b$1=y$1)),o.ssr){const x={stores:{page:p$1(null),navigating:p$1(null),updated:Gt},constructors:await Promise.all(e.map(({node:S})=>S.component())),form:w};let E={};for(let S=0;S<e.length;S+=1)E={...E,...e[S].data},x[`data_${S}`]=E;x.page={error:d,params:l.params,route:l.route,status:a,url:l.url,data:E,form:w};try{_=r.root.render(x);}finally{O();}for(const{node:S}of e){for(const O of S.imports)m.add(O);for(const O of S.stylesheets)u.add(O);for(const O of S.fonts)h.add(O);S.inline_styles&&Object.entries(await S.inline_styles()).forEach(([O,V])=>f$1.set(O,V));}}else _={head:"",html:"",css:{code:"",map:null}};let k="",v=_.html;const j=new Ft(r.csp,{prerender:!!s.prerendering}),R=x=>x.startsWith("/")?p+x:`${b$1}/${x}`;if(f$1.size>0){const x=Array.from(f$1.values()).join(`
`),E=[];j.style_needs_nonce&&E.push(` nonce="${j.nonce}"`),j.add_style(x),k+=`
	<style${E.join("")}>${x}</style>`;}for(const x of u){const E=R(x),S=['rel="stylesheet"'];if(f$1.has(x))S.push("disabled",'media="(max-width: 0)"');else if(c.preload({type:"css",path:E})){const O=['rel="preload"','as="style"'];g.add(`<${encodeURI(E)}>; ${O.join(";")}; nopush`);}k+=`
		<link href="${E}" ${S.join(" ")}>`;}for(const x of h){const E=R(x);if(c.preload({type:"font",path:E})){const O=['rel="preload"','as="font"',`type="font/${x.slice(x.lastIndexOf(".")+1)}"`,`href="${E}"`,"crossorigin"];k+=`
		<link ${O.join(" ")}>`;}}const D=`__sveltekit_${r.version_hash}`,{data:W,chunks:B}=Bt(l,r,e.map(x=>x.server_data),D);if(o.ssr&&o.csr&&(v+=`
			${t.map(x=>Ut(x,c.filterSerializedResponseHeaders,!!s.prerendering)).join(`
			`)}`),o.csr){const x=Array.from(m,P=>R(P)).filter(P=>c.preload({type:"js",path:P}));for(const P of x)g.add(`<${encodeURI(P)}>; rel="modulepreload"; nopush`),r.preload_strategy!=="modulepreload"?k+=`
		<link rel="preload" as="script" crossorigin="anonymous" href="${P}">`:s.prerendering&&(k+=`
		<link rel="modulepreload" href="${P}">`);const E=[],S=[y&&`assets: ${N(y)}`,`base: ${$}`,`env: ${N(b)}`].filter(Boolean);B&&(E.push("const deferred = new Map();"),S.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`),S.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`)),E.push(`${D} = {
						${S.join(`,
						`)}
					};`);const O=["app","element"];if(E.push("const element = document.currentScript.parentElement;"),o.ssr){const P={form:"null",error:"null"};E.push(`const data = ${W};`),w&&(P.form=Pt(w,l.route.id)),d&&(P.error=uneval(d));const Z=[`node_ids: [${e.map(({node:ct})=>ct.index).join(", ")}]`,"data",`form: ${P.form}`,`error: ${P.error}`];a!==200&&Z.push(`status: ${a}`),r.embedded&&Z.push(`params: ${uneval(l.params)}`,`route: ${N(l.route)}`),O.push(`{
							${Z.join(`,
							`)}
						}`);}if(E.push(`Promise.all([
						import(${N(R(p$2.start))}),
						import(${N(R(p$2.app))})
					]).then(([kit, app]) => {
						kit.start(${O.join(", ")});
					});`),r.service_worker){const P="";E.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${R("service-worker.js")}'${P});
						});
					}`);}const V=`
				{
					${E.join(`

					`)}
				}
			`;j.add_script(V),v+=`
			<script${j.script_needs_nonce?` nonce="${j.nonce}"`:""}>${V}<\/script>
		`;}const J=new Headers({"x-sveltekit-page":"true","content-type":"text/html"});if(s.prerendering){const x=[],E=j.csp_provider.get_meta();E&&x.push(E),s.prerendering.cache&&x.push(`<meta http-equiv="cache-control" content="${s.prerendering.cache}">`),x.length>0&&(k=x.join(`
`)+k);}else {const x=j.csp_provider.get_header();x&&J.set("content-security-policy",x);const E=j.report_only_provider.get_header();E&&J.set("content-security-policy-report-only",E),g.size&&J.set("link",Array.from(g).join(", "));}k+=_.head;const it=r.templates.app({head:k,body:v,assets:b$1,nonce:j.nonce,env:b}),Y=await c.transformPageChunk({html:it,done:!0})||"";return B||J.set("etag",`"${Ge(Y)}"`),B?new Response(new ReadableStream({async start(x){x.enqueue(je.encode(Y+`
`));for await(const E of B)x.enqueue(je.encode(E));x.close();},type:"bytes"}),{headers:{"content-type":"text/html"}}):f(Y,{status:a,headers:J})}function Bt(e,t,r,n){let s=1,o=0;const{iterator:a,push:d,done:l}=et();function c(i){if(typeof i?.then=="function"){const p=s++;return o+=1,i.then(m=>({data:m})).catch(async m=>({error:await q(e,t,m)})).then(async({data:m,error:u})=>{o-=1;let h;try{h=uneval({id:p,data:m,error:u},c);}catch{u=await q(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`)),m=void 0,h=uneval({id:p,data:m,error:u},c);}d(`<script>${n}.resolve(${h})<\/script>
`),o===0&&l();}),`${n}.defer(${p})`}}try{return {data:`[${r.map(p=>p?`{"type":"data","data":${uneval(p.data,c)},${ze(p)}${p.slash?`,"slash":${JSON.stringify(p.slash)}`:""}}`:"null").join(",")}]`,chunks:o>0?a:null}}catch(i){throw new Error(Ue(e,i))}}function z(e,t){return e.reduce((r,n)=>n?.universal?.[t]??n?.server?.[t]??r,void 0)}async function tt({event:e,options:t,manifest:r,state:n,status:s,error:o$1,resolve_opts:a}){const d=[];try{const l=[],c=await r._.nodes[0](),i=z([c],"ssr")??!0,p=z([c],"csr")??!0;if(i){n.error=!0;const m=fe({event:e,state:n,node:c,parent:async()=>({}),track_server_fetches:t.track_server_fetches}),u=await m,h=await Me({event:e,fetched:d,node:c,parent:async()=>({}),resolve_opts:a,server_data_promise:m,state:n,csr:p});l.push({node:c,server_data:u,data:h},{node:await r._.nodes[1](),data:null,server_data:null});}return await M({options:t,manifest:r,state:n,page_config:{ssr:i,csr:z([c],"csr")??!0},status:s,error:await q(e,t,o$1),branch:l,fetched:d,event:e,resolve_opts:a})}catch(l){return l instanceof c?K(l.status,l.location):ue(t,l instanceof o?l.status:500,(await q(e,t,l)).message)}}function Vt(e){let t=!1,r;return ()=>t?r:(t=!0,r=e())}const Se=new TextEncoder;async function Xt(e,t,r,n,s,o$1,a){if(!t.page)return new Response(void 0,{status:404});try{const d=[...t.page.layouts,t.page.leaf],l=o$1??d.map(()=>!0);let c$1=!1;const i=new URL(e.url);i.pathname=le(i.pathname,a);const p={...e,url:i},m=d.map((w,y)=>Vt(async()=>{try{if(c$1)return {type:"skip"};const b=w==null?w:await n._.nodes[w]();return fe({event:p,state:s,node:b,parent:async()=>{const $={};for(let k=0;k<y;k+=1){const v=await m[k]();v&&Object.assign($,v.data);}return $},track_server_fetches:r.track_server_fetches})}catch(b){throw c$1=!0,b}})),u=m.map(async(w,y)=>l[y]?w():{type:"skip"});let h=u.length;const g=await Promise.all(u.map((w,y)=>w.catch(async b=>{if(b instanceof c)throw b;return h=Math.min(h,y+1),{type:"error",error:await q(e,r,b),status:b instanceof o?b.status:void 0}}))),{data:f,chunks:_}=rt(e,r,g);return _?new Response(new ReadableStream({async start(w){w.enqueue(Se.encode(f));for await(const y of _)w.enqueue(Se.encode(y));w.close();},type:"bytes"}),{headers:{"content-type":"text/sveltekit-data","cache-control":"private, no-store"}}):ne(f)}catch(d){const l=d;return l instanceof c?se(l):ne(await q(e,r,l),500)}}function ne(e,t=200){return f(typeof e=="string"?e:JSON.stringify(e),{status:t,headers:{"content-type":"application/json","cache-control":"private, no-store"}})}function se(e){return ne({type:"redirect",location:e.location})}function rt(e,t,r){let n=1,s=0;const{iterator:o,push:a,done:d}=et(),l={Promise:c=>{if(typeof c?.then=="function"){const i=n++;s+=1;let p="data";return c.catch(async m=>(p="error",q(e,t,m))).then(async m=>{let u;try{u=stringify(m,l);}catch{const g=await q(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`));p="error",u=stringify(g,l);}s-=1,a(`{"type":"chunk","id":${i},"${p}":${u}}
`),s===0&&d();}),i}}};try{return {data:`{"type":"data","nodes":[${r.map(i=>i?i.type==="error"||i.type==="skip"?JSON.stringify(i):`{"type":"data","data":${stringify(i.data,l)},${ze(i)}${i.slash?`,"slash":${JSON.stringify(i.slash)}`:""}}`:"null").join(",")}]}
`,chunks:s>0?o:null}}catch(c){throw new Error(Ue(e,c))}}const Kt=10;async function Qt(e,t,r,n,s,o$1){if(s.depth>Kt)return f(`Not found: ${e.url.pathname}`,{status:404});if(Ie(e)){const a=await n._.nodes[t.leaf]();return St(e,r,a?.server)}try{const a=await Promise.all([...t.layouts.map(y=>y==null?y:n._.nodes[y]()),n._.nodes[t.leaf]()]),d=a.at(-1);let l=200,c$1;if(Rt(e)){if(c$1=await Ot(e,d.server),c$1?.type==="redirect")return K(c$1.status,c$1.location);if(c$1?.type==="error"){const y=c$1.error;l=y instanceof o?y.status:500;}c$1?.type==="failure"&&(l=c$1.status);}const i=a.some(y=>y?.server),p=jt(e.url.pathname),m=z(a,"prerender")??!1;if(m){if(d.server?.actions)throw new Error("Cannot prerender pages with actions")}else if(s.prerendering)return new Response(void 0,{status:204});s.prerender_default=m;const u=[];if(z(a,"ssr")===!1)return await M({branch:[],fetched:u,page_config:{ssr:!1,csr:z(a,"csr")??!0},status:l,error:null,event:e,options:r,manifest:n,state:s,resolve_opts:o$1});let h=[],g=null;const f$1=a.map((y,b)=>{if(g)throw g;return Promise.resolve().then(async()=>{try{if(y===d&&c$1?.type==="error")throw c$1.error;return await fe({event:e,state:s,node:y,parent:async()=>{const $={};for(let k=0;k<b;k+=1){const v=await f$1[k];v&&Object.assign($,await v.data);}return $},track_server_fetches:r.track_server_fetches})}catch($){throw g=$,g}})}),_=z(a,"csr")??!0,w=a.map((y,b)=>{if(g)throw g;return Promise.resolve().then(async()=>{try{return await Me({event:e,fetched:u,node:y,parent:async()=>{const $={};for(let k=0;k<b;k+=1)Object.assign($,await w[k]);return $},resolve_opts:o$1,server_data_promise:f$1[b],state:s,csr:_})}catch($){throw g=$,g}})});for(const y of f$1)y.catch(()=>{});for(const y of w)y.catch(()=>{});for(let y=0;y<a.length;y+=1){const b=a[y];if(b)try{const $=await f$1[y],k=await w[y];h.push({node:b,server_data:$,data:k});}catch($){const k=$;if(k instanceof c){if(s.prerendering&&i){const R=JSON.stringify({type:"redirect",location:k.location});s.prerendering.dependencies.set(p,{response:f(R),body:R});}return K(k.status,k.location)}const v=k instanceof o?k.status:500,j=await q(e,r,k);for(;y--;)if(t.errors[y]){const R=t.errors[y],D=await n._.nodes[R]();let W=y;for(;!h[W];)W-=1;return await M({event:e,options:r,manifest:n,state:s,resolve_opts:o$1,page_config:{ssr:!0,csr:!0},status:v,error:j,branch:we(h.slice(0,W+1)).concat({node:D,data:null,server_data:null}),fetched:u})}return ue(r,v,j.message)}else h.push(null);}if(s.prerendering&&i){let{data:y,chunks:b}=rt(e,r,h.map($=>$?.server_data));if(b)for await(const $ of b)y+=$;s.prerendering.dependencies.set(p,{response:f(y),body:y});}return await M({event:e,options:r,manifest:n,state:s,resolve_opts:o$1,page_config:{csr:z(a,"csr")??!0,ssr:!0},status:l,error:null,branch:we(h),action_result:c$1,fetched:u})}catch(a){return await tt({event:e,options:r,manifest:n,state:s,status:500,error:a,resolve_opts:o$1})}}function Yt(e,t,r){const n={},s=e.slice(1);let o=0;for(let a=0;a<t.length;a+=1){const d=t[a],l=s[a-o];if(d.chained&&d.rest&&o){n[d.name]=s.slice(a-o,a+1).filter(c=>c).join("/"),o=0;continue}if(l===void 0){d.rest&&(n[d.name]="");continue}if(!d.matcher||r[d.matcher](l)){n[d.name]=l;const c=t[a+1],i=s[a+1];c&&!c.rest&&c.optional&&i&&(o=0);continue}if(d.optional&&d.chained){o++;continue}return}if(!o)return n}function Zt(e,t,r){const n=e.headers.get("cookie")??"",s=cookieExports.parse(n,{decode:m=>m}),a=le(t.pathname,r).split("/").slice(0,-1).join("/")||"/",d={},l={httpOnly:!0,sameSite:"lax",secure:!(t.hostname==="localhost"&&t.protocol==="http:")},c={get(m,u){const h=d[m];if(h&&ee(t.hostname,h.options.domain)&&te(t.pathname,h.options.path))return h.value;const g=u?.decode||decodeURIComponent;return cookieExports.parse(n,{decode:g})[m]},getAll(m){const u=m?.decode||decodeURIComponent,h=cookieExports.parse(n,{decode:u});for(const g of Object.values(d))ee(t.hostname,g.options.domain)&&te(t.pathname,g.options.path)&&(h[g.name]=g.value);return Object.entries(h).map(([g,f])=>({name:g,value:f}))},set(m,u,h={}){p(m,u,{...l,...h});},delete(m,u={}){c.set(m,"",{...u,maxAge:0});},serialize(m,u,h){return cookieExports.serialize(m,u,{...l,...h})}};function i(m,u){const h={...s};for(const g in d){const f=d[g];if(!ee(m.hostname,f.options.domain)||!te(m.pathname,f.options.path))continue;const _=f.options.encode||encodeURIComponent;h[f.name]=_(f.value);}if(u){const g=cookieExports.parse(u,{decode:f=>f});for(const f in g)h[f]=g[f];}return Object.entries(h).map(([g,f])=>`${g}=${f}`).join("; ")}function p(m,u,h){let g=h.path??a;d[m]={name:m,value:u,options:{...h,path:g}};}return {cookies:c,new_cookies:d,get_cookie_header:i,set_internal:p}}function ee(e,t){if(!t)return !0;const r=t[0]==="."?t.slice(1):t;return e===r?!0:e.endsWith("."+r)}function te(e,t){if(!t)return !0;const r=t.endsWith("/")?t.slice(0,-1):t;return e===r?!0:e.startsWith(r+"/")}function Re(e,t){for(const r of t){const{name:n,value:s,options:o}=r;e.append("set-cookie",cookieExports.serialize(n,s,o));}}function er({event:e,options:t,manifest:r,state:n,get_cookie_header:s,set_internal:o}){return async(a,d)=>{const l=Oe(a,d,e.url);let c=(a instanceof Request?a.mode:d?.mode)??"cors",i=(a instanceof Request?a.credentials:d?.credentials)??"same-origin";return await t.hooks.handleFetch({event:e,request:l,fetch:async(p$1,m)=>{const u=Oe(p$1,m,e.url),h=new URL(u.url);if(u.headers.has("origin")||u.headers.set("origin",e.url.origin),p$1!==l&&(c=(p$1 instanceof Request?p$1.mode:m?.mode)??"cors",i=(p$1 instanceof Request?p$1.credentials:m?.credentials)??"same-origin"),(u.method==="GET"||u.method==="HEAD")&&(c==="no-cors"&&h.origin!==e.url.origin||h.origin===e.url.origin)&&u.headers.delete("origin"),h.origin!==e.url.origin){if(`.${h.hostname}`.endsWith(`.${e.url.hostname}`)&&i!=="omit"){const v=s(h,u.headers.get("cookie"));v&&u.headers.set("cookie",v);}return fetch(u)}let g;const f=y||p,_=decodeURIComponent(h.pathname),w=(_.startsWith(f)?_.slice(f.length):_).slice(1),y$1=`${w}/index.html`,b=r.assets.has(w),$=r.assets.has(y$1);if(b||$){const v=b?w:y$1;if(n.read){const j=b?r.mimeTypes[w.slice(w.lastIndexOf("."))]:"text/html";return new Response(n.read(v),{headers:j?{"content-type":j}:{}})}return await fetch(u)}if(i!=="omit"){const v=s(h,u.headers.get("cookie"));v&&u.headers.set("cookie",v);const j=e.request.headers.get("authorization");j&&!u.headers.has("authorization")&&u.headers.set("authorization",j);}u.headers.has("accept")||u.headers.set("accept","*/*"),u.headers.has("accept-language")||u.headers.set("accept-language",e.request.headers.get("accept-language")),g=await at(u,t,r,{...n,depth:n.depth+1});const k=g.headers.get("set-cookie");if(k)for(const v of setCookieExports.splitCookiesString(k)){const{name:j,value:R,...D}=setCookieExports.parseString(v);o(j,R,D);}return g}})}}function Oe(e,t,r){return e instanceof Request?e:new Request(typeof e=="string"?new URL(e,r):e,t)}const Q=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);new Set([...Q,"entries"]);const he=new Set([...Q,"actions"]);new Set([...he,"entries"]);new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config","entries"]);const Pe=({html:e})=>e,Te=()=>!1,qe=({type:e})=>e==="js"||e==="css";async function at(e,t,r,n){let s=new URL(e.url);if(t.csrf_check_origin&&Ce(e)&&(e.method==="POST"||e.method==="PUT"||e.method==="PATCH"||e.method==="DELETE")&&e.headers.get("origin")!==s.origin){const _=l(403,`Cross-site ${e.method} form submissions are forbidden`);return e.headers.get("accept")==="application/json"?g(_.body,{status:_.status}):f(_.body.message,{status:_.status})}let o;try{o=$t(s.pathname);}catch{return f("Malformed URI",{status:400})}let a=null,d={};if(p&&!n.prerendering?.fallback){if(!o.startsWith(p))return f("Not found",{status:404});o=o.slice(p.length)||"/";}const l$1=Et(o);let c$1;if(l$1&&(o=$e(o)||"/",s.pathname=$e(s.pathname)||"/",c$1=s.searchParams.get(be)?.split("").map(f=>f==="1"),s.searchParams.delete(be)),!n.prerendering?.fallback){const f=await r._.matchers();for(const _ of r._.routes){const w=_.pattern.exec(o);if(!w)continue;const y=Yt(w,_.params,f);if(y){a=_,d=kt(y);break}}}let i;const p$1={};let m={};const u={cookies:null,fetch:null,getClientAddress:n.getClientAddress||(()=>{throw new Error("@sveltejs/adapter-node does not specify getClientAddress. Please raise an issue")}),locals:{},params:d,platform:n.platform,request:e,route:{id:a?.id??null},setHeaders:f=>{for(const _ in f){const w=_.toLowerCase(),y=f[_];if(w==="set-cookie")throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");if(w in p$1)throw new Error(`"${_}" header is already set`);p$1[w]=y,n.prerendering&&w==="cache-control"&&(n.prerendering.cache=y);}},url:s,isDataRequest:l$1};let h={transformPageChunk:Pe,filterSerializedResponseHeaders:Te,preload:qe};try{if(a){if(s.pathname===p||s.pathname===p+"/")i="always";else if(a.page){const $=await Promise.all([...a.page.layouts.map(k=>k==null?k:r._.nodes[k]()),r._.nodes[a.page.leaf]()]);i=z($,"trailingSlash");}else a.endpoint&&(i=(await a.endpoint()).trailingSlash);if(!l$1){const $=le(s.pathname,i??"never");if($!==s.pathname&&!n.prerendering?.fallback)return new Response(void 0,{status:308,headers:{"x-sveltekit-normalize":"1",location:($.startsWith("//")?s.origin+$:$)+(s.search==="?"?"":s.search)}})}}const{cookies:f,new_cookies:_,get_cookie_header:w,set_internal:y}=Zt(e,s,i??"never");m=_,u.cookies=f,u.fetch=er({event:u,options:t,manifest:r,state:n,get_cookie_header:w,set_internal:y}),n.prerendering&&!n.prerendering.fallback&&He(s);const b=await t.hooks.handle({event:u,resolve:($,k)=>g$1($,k).then(v=>{for(const j in p$1){const R=p$1[j];v.headers.set(j,R);}return Re(v.headers,Object.values(m)),n.prerendering&&$.route.id!==null&&v.headers.set("x-sveltekit-routeid",encodeURI($.route.id)),v})});if(b.status===200&&b.headers.has("etag")){let $=e.headers.get("if-none-match");$?.startsWith('W/"')&&($=$.substring(2));const k=b.headers.get("etag");if($===k){const v=new Headers({etag:k});for(const j of ["cache-control","content-location","date","expires","vary","set-cookie"]){const R=b.headers.get(j);R&&v.set(j,R);}return new Response(void 0,{status:304,headers:v})}}if(l$1&&b.status>=300&&b.status<=308){const $=b.headers.get("location");if($)return se(new c(b.status,$))}return b}catch(f){if(f instanceof c){const _=l$1?se(f):a?.page&&Ie(u)?Le(f):K(f.status,f.location);return Re(_.headers,Object.values(m)),_}return await ge(u,t,f)}async function g$1(f$1,_){try{if(_){if("ssr"in _)throw new Error("ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197");h={transformPageChunk:_.transformPageChunk||Pe,filterSerializedResponseHeaders:_.filterSerializedResponseHeaders||Te,preload:_.preload||qe};}if(n.prerendering?.fallback)return await M({event:f$1,options:t,manifest:r,state:n,page_config:{ssr:!1,csr:!0},status:200,error:null,branch:[],fetched:[],resolve_opts:h});if(a){let w;if(l$1)w=await Xt(f$1,a,t,r,n,c$1,i??"never");else if(a.endpoint&&(!a.page||wt(f$1)))w=await gt(f$1,await a.endpoint(),n);else if(a.page)w=await Qt(f$1,a.page,t,r,n,h);else throw new Error("This should never happen");return w}return n.error?f("Internal Server Error",{status:500}):n.depth===0?await tt({event:f$1,options:t,manifest:r,state:n,status:404,error:new Error(`Not found: ${f$1.url.pathname}`),resolve_opts:h}):n.prerendering?f("not found",{status:404}):await fetch(e)}catch(w){return await ge(f$1,t,w)}finally{f$1.cookies.set=()=>{throw new Error("Cannot use `cookies.set(...)` after the response has been generated")},f$1.setHeaders=()=>{throw new Error("Cannot use `setHeaders(...)` after the response has been generated")};}}}class dr{#e;#t;constructor(t){this.#e=j,this.#t=t;}async init({env:t}){const r=Object.entries(t),n=this.#e.env_public_prefix;Object.fromEntries(r.filter(([o])=>!o.startsWith(n)));const s=Object.fromEntries(r.filter(([o])=>o.startsWith(n)));if(F$1(s),!this.#e.hooks)try{const o=await z$1();this.#e.hooks={handle:o.handle||(({event:a,resolve:d})=>d(a)),handleError:o.handleError||(({error:a})=>console.error(a)),handleFetch:o.handleFetch||(({request:a,fetch:d})=>d(a))};}catch(o){throw o}}async respond(t,r){if(!(t instanceof Request))throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");return at(t,this.#e,this.#t,{...r,error:!1,depth:0})}}

export { dr as Server };
//# sourceMappingURL=index.js.map
