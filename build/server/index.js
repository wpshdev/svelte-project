import { L, B, z as z$2, X, E, D } from './chunks/index2-8ecb42f0.js';
import { l, g, f, c, o, h } from './chunks/index-2985463b.js';

let p="",y=p;const _={base:p,assets:y};function O(){p=_.base,y=_.assets;}let b={};function P(n){b=n;}const C=L((n,t,e,k)=>{let{stores:d}=t,{page:h}=t,{constructors:o}=t,{components:a=[]}=t,{form:c}=t,{data_0:f=null}=t,{data_1:m=null}=t,{data_2:v=null}=t,{data_3:u=null}=t;B("__svelte__",d),d.page.notify,t.stores===void 0&&e.stores&&d!==void 0&&e.stores(d),t.page===void 0&&e.page&&h!==void 0&&e.page(h),t.constructors===void 0&&e.constructors&&o!==void 0&&e.constructors(o),t.components===void 0&&e.components&&a!==void 0&&e.components(a),t.form===void 0&&e.form&&c!==void 0&&e.form(c),t.data_0===void 0&&e.data_0&&f!==void 0&&e.data_0(f),t.data_1===void 0&&e.data_1&&m!==void 0&&e.data_1(m),t.data_2===void 0&&e.data_2&&v!==void 0&&e.data_2(v),t.data_3===void 0&&e.data_3&&u!==void 0&&e.data_3(u);let i,g;do i=!0,d.page.set(h),g=`


${o[1]?`${z$2(o[0]||X,"svelte:component").$$render(n,{data:f,this:a[0]},{this:s=>{a[0]=s,i=!1;}},{default:()=>`${o[2]?`${z$2(o[1]||X,"svelte:component").$$render(n,{data:m,this:a[1]},{this:s=>{a[1]=s,i=!1;}},{default:()=>`${o[3]?`${z$2(o[2]||X,"svelte:component").$$render(n,{data:v,this:a[2]},{this:s=>{a[2]=s,i=!1;}},{default:()=>`${z$2(o[3]||X,"svelte:component").$$render(n,{data:u,form:c,this:a[3]},{this:s=>{a[3]=s,i=!1;}},{})}`})}`:`${z$2(o[2]||X,"svelte:component").$$render(n,{data:v,form:c,this:a[2]},{this:s=>{a[2]=s,i=!1;}},{})}`}`})}`:`${z$2(o[1]||X,"svelte:component").$$render(n,{data:m,form:c,this:a[1]},{this:s=>{a[1]=s,i=!1;}},{})}`}`})}`:`${z$2(o[0]||X,"svelte:component").$$render(n,{data:f,form:c,this:a[0]},{this:s=>{a[0]=s,i=!1;}},{})}`}

`;while(!i);return g}),q={app_template_contains_nonce:!1,csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,embedded:!1,env_public_prefix:"PUBLIC_",hooks:null,preload_strategy:"modulepreload",root:C,service_worker:!1,templates:{app:({head:n,body:t,assets:e,nonce:k,env:d})=>`<!DOCTYPE html>
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
`},version_hash:"4bwuc0"};function z$1(){return {}}

/** @type {Record<string, string>} */
const escaped = {
	'<': '\\u003C',
	'>': '\\u003E',
	'/': '\\u002F',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\0': '\\u0000',
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

const object_proto_names = Object.getOwnPropertyNames(Object.prototype)
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

/** @param {string} str */
function stringify_string(str) {
	let result = '"';

	for (let i = 0; i < str.length; i += 1) {
		const char = str.charAt(i);
		const code = char.charCodeAt(0);

		if (char === '"') {
			result += '\\"';
		} else if (char in escaped) {
			result += escaped[char];
		} else if (code <= 0x001F) {
			result += `\\u${code.toString(16).toUpperCase().padStart(4, "0")}`;
		} else if (code >= 0xd800 && code <= 0xdfff) {
			const next = str.charCodeAt(i + 1);

			// If this is the beginning of a [high, low] surrogate pair,
			// add the next two characters, otherwise escape
			if (code <= 0xdbff && next >= 0xdc00 && next <= 0xdfff) {
				result += char + str[++i];
			} else {
				result += `\\u${code.toString(16).toUpperCase()}`;
			}
		} else {
			result += char;
		}
	}

	result += '"';
	return result;
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
const unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
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

var setCookieExports$1 = {};
var setCookie = {
  get exports(){ return setCookieExports$1; },
  set exports(v){ setCookieExports$1 = v; },
};

var hasRequiredSetCookie;

function requireSetCookie () {
	if (hasRequiredSetCookie) return setCookieExports$1;
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

	  if (input.headers && input.headers["set-cookie"]) {
	    // fast-path for node.js (which automatically normalizes header names to lower-case
	    input = input.headers["set-cookie"];
	  } else if (input.headers) {
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
	setCookieExports$1.parse = parse;
	setCookieExports$1.parseString = parseString;
	setCookieExports$1.splitCookiesString = splitCookiesString;
	return setCookieExports$1;
}

var setCookieExports = requireSetCookie();

function ue(e,t){const r=[];e.split(",").forEach((o,a)=>{const l=/([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(o);if(l){const[,i,c,d="1"]=l;r.push({type:i,subtype:c,q:+d,i:a});}}),r.sort((o,a)=>o.q!==a.q?a.q-o.q:o.subtype==="*"!=(a.subtype==="*")?o.subtype==="*"?1:-1:o.type==="*"!=(a.type==="*")?o.type==="*"?1:-1:o.i-a.i);let n,s=1/0;for(const o of t){const[a,l]=o.split("/"),i=r.findIndex(c=>(c.type===a||c.type==="*")&&(c.subtype===l||c.subtype==="*"));i!==-1&&i<s&&(n=o,s=i);}return n}function ft(e,...t){const r=e.headers.get("content-type")?.split(";",1)[0].trim()??"";return t.includes(r.toLowerCase())}function Ce(e){return ft(e,"application/x-www-form-urlencoded","multipart/form-data","text/plain")}function pt(e){return e instanceof Error||e&&e.name&&e.message?e:new Error(JSON.stringify(e))}function ht(e,t){return f(`${t} method not allowed`,{status:405,headers:{allow:_t(e).join(", ")}})}function _t(e){const t=["GET","POST","PUT","PATCH","DELETE","OPTIONS"].filter(r=>r in e);return ("GET"in e||"HEAD"in e)&&t.push("HEAD"),t}function le(e,t,r){let n=e.templates.error({status:t,message:r});return f(n,{headers:{"content-type":"text/html; charset=utf-8"},status:t})}async function ge(e,t,r){r=r instanceof o?r:pt(r);const n=r instanceof o?r.status:500,s=await T(e,t,r),o$1=ue(e.request.headers.get("accept")||"text/html",["application/json","text/html"]);return e.isDataRequest||o$1==="application/json"?g(s,{status:n}):le(t,n,s.message)}async function T(e,t,r){return r instanceof o?r.body:await t.hooks.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function K(e,t){return new Response(void 0,{status:e,headers:{location:t}})}function Ue(e,t){return t.path?`Data returned from \`load\` while rendering ${e.route.id} is not serializable: ${t.message} (data${t.path})`:t.path===""?`Data returned from \`load\` while rendering ${e.route.id} is not a plain object`:t.message}function ze(e){const t=[];return e.uses&&e.uses.dependencies.size>0&&t.push(`"dependencies":${JSON.stringify(Array.from(e.uses.dependencies))}`),e.uses&&e.uses.params.size>0&&t.push(`"params":${JSON.stringify(Array.from(e.uses.params))}`),e.uses?.parent&&t.push('"parent":1'),e.uses?.route&&t.push('"route":1'),e.uses?.url&&t.push('"url":1'),`"uses":{${t.join(",")}}`}async function mt(e,t,r){const n=e.request.method;let s=t[n];if(!s&&n==="HEAD"&&(s=t.GET),!s)return ht(t,n);const o=t.prerender??r.prerender_default;if(o&&(t.POST||t.PATCH||t.PUT||t.DELETE))throw new Error("Cannot prerender endpoints that have mutative methods");if(r.prerendering&&!o){if(r.depth>0)throw new Error(`${e.route.id} is not prerenderable`);return new Response(void 0,{status:204})}try{const a=await s(e);if(!(a instanceof Response))throw new Error(`Invalid response from route ${e.url.pathname}: handler should return a Response object`);return r.prerendering&&a.headers.set("x-sveltekit-prerender",String(o)),a}catch(a){if(a instanceof c)return new Response(void 0,{status:a.status,headers:{location:a.location}});throw a}}function yt(e){const{method:t,headers:r}=e.request;if(t==="PUT"||t==="PATCH"||t==="DELETE"||t==="OPTIONS")return !0;if(t==="POST"&&r.get("x-sveltekit-action")==="true")return !1;const n=e.request.headers.get("accept")??"*/*";return ue(n,["*","text/html"])!=="text/html"}function we(e){return e.filter(t=>t!=null)}function de(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function gt(e){return e.split("%25").map(decodeURI).join("%25")}function wt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}const bt=["href","pathname","search","searchParams","toString","toJSON"];function $t(e,t){const r=new URL(e);for(const n of bt){let s=r[n];Object.defineProperty(r,n,{get(){return t(),s},enumerable:!0,configurable:!0});}return r[Symbol.for("nodejs.util.inspect.custom")]=(n,s,o)=>o(e,s),kt(r),r}function kt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}});}function He(e){for(const t of ["search","searchParams"])Object.defineProperty(e,t,{get(){throw new Error(`Cannot access url.${t} on a page with prerendering enabled`)}});}const fe="/__data.json";function xt(e){return e.endsWith(fe)}function Et(e){return e.replace(/\/$/,"")+fe}function be(e){return e.slice(0,-fe.length)}function jt(e){return ue(e.request.headers.get("accept")??"*/*",["application/json","text/html"])==="application/json"&&e.request.method==="POST"}async function vt(e,t,r){const n=r?.actions;if(!n){const s=l(405,"POST method not allowed. No actions exist for this page");return M({type:"error",error:await T(e,t,s)},{status:s.status,headers:{allow:"GET"}})}Ne(n);try{const s=await Le(e,n);return s instanceof h?M({type:"failure",status:s.status,data:$e(s.data,e.route.id)}):M({type:"success",status:s?200:204,data:$e(s,e.route.id)})}catch(s){const o$1=s;return o$1 instanceof c?M({type:"redirect",status:o$1.status,location:o$1.location}):M({type:"error",error:await T(e,t,Ie(o$1))},{status:o$1 instanceof o?o$1.status:500})}}function Ie(e){return e instanceof h?new Error('Cannot "throw fail()". Use "return fail()"'):e}function M(e,t){return g(e,t)}function Rt(e){return e.request.method==="POST"}async function St(e,t){const r=t?.actions;if(!r)return e.setHeaders({allow:"GET"}),{type:"error",error:l(405,"POST method not allowed. No actions exist for this page")};Ne(r);try{const n=await Le(e,r);return n instanceof h?{type:"failure",status:n.status,data:n.data}:{type:"success",status:200,data:n}}catch(n){const s=n;return s instanceof c?{type:"redirect",status:s.status,location:s.location}:{type:"error",error:Ie(s)}}}function Ne(e){if(e.default&&Object.keys(e).length>1)throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions")}async function Le(e,t){const r=new URL(e.request.url);let n="default";for(const o of r.searchParams)if(o[0].startsWith("/")){if(n=o[0].slice(1),n==="default")throw new Error('Cannot use reserved action name "default"');break}const s=t[n];if(!s)throw new Error(`No action with name '${n}' found`);if(!Ce(e.request))throw new Error(`Actions expect form-encoded data (received ${e.request.headers.get("content-type")})`);return s(e)}function qt(e,t){return De(e,uneval,t)}function $e(e,t){return De(e,stringify,t)}function De(e,t,r){try{return t(e)}catch(n){const s=n;if("path"in s){let o=`Data returned from action inside ${r} is not serializable: ${s.message}`;throw s.path!==""&&(o+=` (data.${s.path})`),new Error(o)}throw s}}async function We(e){for(const t in e)if(typeof e[t]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([r,n])=>[r,await n])));return e}async function pe({event:e,state:t,node:r,parent:n}){if(!r?.server)return null;const s={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},o=$t(e.url,()=>{s.url=!0;});t.prerendering&&He(o);const a=await r.server.load?.call(null,{...e,fetch:(i,c)=>{const d=new URL(i instanceof Request?i.url:i,e.url);return s.dependencies.add(d.href),e.fetch(i,c)},depends:(...i)=>{for(const c of i){const{href:d}=new URL(c,e.url);s.dependencies.add(d);}},params:new Proxy(e.params,{get:(i,c)=>(s.params.add(c),i[c])}),parent:async()=>(s.parent=!0,n()),route:new Proxy(e.route,{get:(i,c)=>(s.route=!0,i[c])}),url:o});return {type:"data",data:a?await We(a):null,uses:s,slash:r.server.trailingSlash}}async function Je({event:e,fetched:t,node:r,parent:n,server_data_promise:s,state:o,resolve_opts:a,csr:l}){const i=await s;if(!r?.universal?.load)return i?.data??null;const c=await r.universal.load.call(null,{url:e.url,params:e.params,data:i?.data??null,route:e.route,fetch:Ot(e,o,t,l,a),setHeaders:e.setHeaders,depends:()=>{},parent:n});return c?await We(c):null}function Ot(e,t,r,n,s){return async(o,a)=>{const l=o instanceof Request&&o.body?o.clone().body:null;let i=await e.fetch(o,a);const c=new URL(o instanceof Request?o.url:o,e.url),d=c.origin===e.url.origin;let f;if(d)t.prerendering&&(f={response:i,body:null},t.prerendering.dependencies.set(c.pathname,f));else if((o instanceof Request?o.mode:a?.mode??"cors")==="no-cors")i=new Response("",{status:i.status,statusText:i.statusText,headers:i.headers});else {const p=i.headers.get("access-control-allow-origin");if(!p||p!==e.url.origin&&p!=="*")throw new Error(`CORS error: ${p?"Incorrect":"No"} 'Access-Control-Allow-Origin' header is present on the requested resource`)}const g=new Proxy(i,{get(u,p,y){async function m(){const _=await u.text();if(!_||typeof _=="string"){const b=Number(u.status);if(isNaN(b))throw new Error(`response.status is not a number. value: "${u.status}" type: ${typeof u.status}`);r.push({url:d?c.href.slice(e.url.origin.length):c.href,method:e.request.method,request_body:o instanceof Request&&l?await Pt(l):a?.body,request_headers:a?.headers,response_body:_,response:u});}return f&&(f.body=_),_}return p==="arrayBuffer"?async()=>{const _=await u.arrayBuffer();return f&&(f.body=new Uint8Array(_)),_}:p==="text"?m:p==="json"?async()=>JSON.parse(await m()):Reflect.get(u,p,u)}});if(n){const u=i.headers.get;i.headers.get=p=>{const y=p.toLowerCase(),m=u.call(i.headers,y);if(m&&!y.startsWith("x-sveltekit-")&&!s.filterSerializedResponseHeaders(y,m))throw new Error(`Failed to get response header "${y}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${e.route.id})`);return m};}return g}}async function Pt(e){let t="";const r=e.getReader(),n=new TextDecoder;for(;;){const{done:s,value:o}=await r.read();if(s)break;t+=n.decode(o);}return t}const W=[];function Tt(e,t){return {subscribe:re(e,t).subscribe}}function re(e,t=E){let r;const n=new Set;function s(l){if(D(e,l)&&(e=l,r)){const i=!W.length;for(const c of n)c[1](),W.push(c,e);if(i){for(let c=0;c<W.length;c+=2)W[c][0](W[c+1]);W.length=0;}}}function o(l){s(l(e));}function a(l,i=E){const c=[l,i];return n.add(c),n.size===1&&(r=t(s)||E),l(e),()=>{n.delete(c),n.size===0&&r&&(r(),r=null);}}return {set:s,update:o,subscribe:a}}function Fe(...e){let t=5381;for(const r of e)if(typeof r=="string"){let n=r.length;for(;n;)t=t*33^r.charCodeAt(--n);}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)t=t*33^n[--s];}else throw new TypeError("value must be a string or TypedArray");return (t>>>0).toString(36)}const Me={"&":"&amp;",'"':"&quot;"},At=new RegExp(`[${Object.keys(Me).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,"g");function Ge(e){return `"${e.replace(At,r=>r.length===2?r:Me[r]??`&#${r.charCodeAt(0)};`)}"`}const Be={"<":"\\u003C","\u2028":"\\u2028","\u2029":"\\u2029"},Ct=new RegExp(`[${Object.keys(Be).join("")}]`,"g");function Ut(e,t,r=!1){const n={};let s=null,o=null,a=!1;for(const[d,f]of e.response.headers)t(d,f)&&(n[d]=f),d==="cache-control"&&(s=f),d==="age"&&(o=f),d==="vary"&&(a=!0);const l={status:e.response.status,statusText:e.response.statusText,headers:n,body:e.response_body},i=JSON.stringify(l).replace(Ct,d=>Be[d]),c=['type="application/json"',"data-sveltekit-fetched",`data-url=${Ge(e.url)}`];if(e.request_headers||e.request_body){const d=[];e.request_headers&&d.push([...new Headers(e.request_headers)].join(",")),e.request_body&&d.push(e.request_body),c.push(`data-hash="${Fe(...d)}"`);}if(!r&&e.method==="GET"&&s&&!a){const d=/s-maxage=(\d+)/g.exec(s)??/max-age=(\d+)/g.exec(s);if(d){const f=+d[1]-+(o??"0");c.push(`data-ttl="${f}"`);}}return `<script ${c.join(" ")}>${i}<\/script>`}const I=JSON.stringify,zt=new TextEncoder;function ke(e){ne[0]||Ht();const t=Ve.slice(0),r=It(e);for(let s=0;s<r.length;s+=16){const o=r.subarray(s,s+16);let a,l,i,c=t[0],d=t[1],f=t[2],g=t[3],u=t[4],p=t[5],y=t[6],m=t[7];for(let _=0;_<64;_++)_<16?a=o[_]:(l=o[_+1&15],i=o[_+14&15],a=o[_&15]=(l>>>7^l>>>18^l>>>3^l<<25^l<<14)+(i>>>17^i>>>19^i>>>10^i<<15^i<<13)+o[_&15]+o[_+9&15]|0),a=a+m+(u>>>6^u>>>11^u>>>25^u<<26^u<<21^u<<7)+(y^u&(p^y))+ne[_],m=y,y=p,p=u,u=g+a|0,g=f,f=d,d=c,c=a+(d&f^g&(d^f))+(d>>>2^d>>>13^d>>>22^d<<30^d<<19^d<<10)|0;t[0]=t[0]+c|0,t[1]=t[1]+d|0,t[2]=t[2]+f|0,t[3]=t[3]+g|0,t[4]=t[4]+u|0,t[5]=t[5]+p|0,t[6]=t[6]+y|0,t[7]=t[7]+m|0;}const n=new Uint8Array(t.buffer);return Xe(n),Ke(n)}const Ve=new Uint32Array(8),ne=new Uint32Array(64);function Ht(){function e(r){return (r-Math.floor(r))*4294967296}let t=2;for(let r=0;r<64;t++){let n=!0;for(let s=2;s*s<=t;s++)if(t%s===0){n=!1;break}n&&(r<8&&(Ve[r]=e(t**(1/2))),ne[r]=e(t**(1/3)),r++);}}function Xe(e){for(let t=0;t<e.length;t+=4){const r=e[t+0],n=e[t+1],s=e[t+2],o=e[t+3];e[t+0]=o,e[t+1]=s,e[t+2]=n,e[t+3]=r;}}function It(e){const t=zt.encode(e),r=t.length*8,n=512*Math.ceil((r+65)/512),s=new Uint8Array(n/8);s.set(t),s[t.length]=128,Xe(s);const o=new Uint32Array(s.buffer);return o[o.length-2]=Math.floor(r/4294967296),o[o.length-1]=r,o}const U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");function Ke(e){const t=e.length;let r="",n;for(n=2;n<t;n+=3)r+=U[e[n-2]>>2],r+=U[(e[n-2]&3)<<4|e[n-1]>>4],r+=U[(e[n-1]&15)<<2|e[n]>>6],r+=U[e[n]&63];return n===t+1&&(r+=U[e[n-2]>>2],r+=U[(e[n-2]&3)<<4],r+="=="),n===t&&(r+=U[e[n-2]>>2],r+=U[(e[n-2]&3)<<4|e[n-1]>>4],r+=U[(e[n-1]&15)<<2],r+="="),r}const xe=new Uint8Array(16);function Nt(){return crypto.getRandomValues(xe),Ke(xe)}const Lt=new Set(["self","unsafe-eval","unsafe-hashes","unsafe-inline","none","strict-dynamic","report-sample","wasm-unsafe-eval","script"]),Dt=/^(nonce|sha\d\d\d)-/;class Qe{#e;#t;#s;#o;#r;#n;#a;constructor(t,r,n){this.#e=t,this.#o=r;const s=this.#o;this.#r=[],this.#n=[];const o=s["script-src"]||s["default-src"],a=s["style-src"]||s["default-src"];this.#t=!!o&&o.filter(l=>l!=="unsafe-inline").length>0,this.#s=!!a&&a.filter(l=>l!=="unsafe-inline").length>0,this.script_needs_nonce=this.#t&&!this.#e,this.style_needs_nonce=this.#s&&!this.#e,this.#a=n;}add_script(t){this.#t&&(this.#e?this.#r.push(`sha256-${ke(t)}`):this.#r.length===0&&this.#r.push(`nonce-${this.#a}`));}add_style(t){this.#s&&(this.#e?this.#n.push(`sha256-${ke(t)}`):this.#n.length===0&&this.#n.push(`nonce-${this.#a}`));}get_header(t=!1){const r=[],n={...this.#o};this.#n.length>0&&(n["style-src"]=[...n["style-src"]||n["default-src"]||[],...this.#n]),this.#r.length>0&&(n["script-src"]=[...n["script-src"]||n["default-src"]||[],...this.#r]);for(const s in n){if(t&&(s==="frame-ancestors"||s==="report-uri"||s==="sandbox"))continue;const o=n[s];if(!o)continue;const a=[s];Array.isArray(o)&&o.forEach(l=>{Lt.has(l)||Dt.test(l)?a.push(`'${l}'`):a.push(l);}),r.push(a.join(" "));}return r.join("; ")}}class Wt extends Qe{get_meta(){return `<meta http-equiv="content-security-policy" content=${Ge(this.get_header(!0))}>`}}class Jt extends Qe{constructor(t,r,n){if(super(t,r,n),Object.values(r).filter(s=>!!s).length>0){const s=r["report-to"]?.length??0>0,o=r["report-uri"]?.length??0>0;if(!s&&!o)throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both")}}}class Ft{nonce=Nt();csp_provider;report_only_provider;constructor({mode:t,directives:r,reportOnly:n},{prerender:s}){const o=t==="hash"||t==="auto"&&s;this.csp_provider=new Wt(o,r,this.nonce),this.report_only_provider=new Jt(o,n,this.nonce);}get script_needs_nonce(){return this.csp_provider.script_needs_nonce||this.report_only_provider.script_needs_nonce}get style_needs_nonce(){return this.csp_provider.style_needs_nonce||this.report_only_provider.style_needs_nonce}add_script(t){this.csp_provider.add_script(t),this.report_only_provider.add_script(t);}add_style(t){this.csp_provider.add_style(t),this.report_only_provider.add_style(t);}}function Ee(){let e,t;return {promise:new Promise((n,s)=>{e=n,t=s;}),fulfil:e,reject:t}}function Ye(){let e=[Ee()];return {iterator:{[Symbol.asyncIterator](){return {next:async()=>{const t=await e[0].promise;return t.done||e.shift(),t}}}},push:t=>{e[e.length-1].fulfil({value:t,done:!1}),e.push(Ee());},done:()=>{e[e.length-1].fulfil({done:!0});}}}const Mt="/_svelte_kit_assets",Gt={...Tt(!1),check:()=>!1},je=new TextEncoder;async function G({branch:e,fetched:t,options:r,manifest:n,state:s,page_config:o,status:a,error:l=null,event:i,resolve_opts:c,action_result:d}){if(s.prerendering){if(r.csp.mode==="nonce")throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');if(r.app_template_contains_nonce)throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%")}const{client:f$1}=n._,g=new Set([...f$1.start.imports,...f$1.app.imports]),u=new Set(f$1.app.stylesheets),p$1=new Set(f$1.app.fonts),y$1=new Set,m=new Map;let _;const b$1=d?.type==="success"||d?.type==="failure"?d.data??null:null;let h=p,$=y,x=I(p);if(!s.prerendering?.fallback){const k=i.url.pathname.slice(p.length).split("/");k.length===1&&p!==""?(h=`./${p.split("/").at(-1)}`,x=`new URL(${I(h)}, location).pathname`):(h=k.slice(2).map(()=>"..").join("/")||".",x=`new URL(${I(h)}, location).pathname.slice(0, -1)`),(!y||y[0]==="/"&&y!==Mt)&&($=h);}if(o.ssr){const k={stores:{page:re(null),navigating:re(null),updated:Gt},constructors:await Promise.all(e.map(({node:R})=>R.component())),form:b$1};let E={};for(let R=0;R<e.length;R+=1)E={...E,...e[R].data},k[`data_${R}`]=E;k.page={error:l,params:i.params,route:i.route,status:a,url:i.url,data:E,form:b$1};try{_=r.root.render(k);}finally{O();}for(const{node:R}of e){for(const S of R.imports)g.add(S);for(const S of R.stylesheets)u.add(S);for(const S of R.fonts)p$1.add(S);R.inline_styles&&Object.entries(await R.inline_styles()).forEach(([S,V])=>m.set(S,V));}}else _={head:"",html:"",css:{code:"",map:null}};let w="",j=_.html;const v=new Ft(r.csp,{prerender:!!s.prerendering}),O$1=k=>k.startsWith("/")?p+k:`${$}/${k}`;if(m.size>0){const k=Array.from(m.values()).join(`
`),E=[];v.style_needs_nonce&&E.push(` nonce="${v.nonce}"`),v.add_style(k),w+=`
	<style${E.join("")}>${k}</style>`;}for(const k of u){const E=O$1(k),R=['rel="stylesheet"'];if(m.has(k))R.push("disabled",'media="(max-width: 0)"');else if(c.preload({type:"css",path:E})){const S=['rel="preload"','as="style"'];y$1.add(`<${encodeURI(E)}>; ${S.join(";")}; nopush`);}w+=`
		<link href="${E}" ${R.join(" ")}>`;}for(const k of p$1){const E=O$1(k);if(c.preload({type:"font",path:E})){const S=['rel="preload"','as="font"',`type="font/${k.slice(k.lastIndexOf(".")+1)}"`,`href="${E}"`,"crossorigin"];w+=`
		<link ${S.join(" ")}>`;}}const L=`__sveltekit_${r.version_hash}`,{data:J,chunks:B}=Bt(i,r,e.map(k=>k.server_data),L);if(o.ssr&&o.csr&&(j+=`
			${t.map(k=>Ut(k,c.filterSerializedResponseHeaders,!!s.prerendering)).join(`
			`)}`),o.csr){const k=Array.from(g,q=>O$1(q)).filter(q=>c.preload({type:"js",path:q}));for(const q of k)y$1.add(`<${encodeURI(q)}>; rel="modulepreload"; nopush`),r.preload_strategy!=="modulepreload"?w+=`
		<link rel="preload" as="script" crossorigin="anonymous" href="${q}">`:s.prerendering&&(w+=`
		<link rel="modulepreload" href="${q}">`);const E=[],R=[`env: ${I(b)}`,y&&`assets: ${I(y)}`,`base: ${x}`,"element: document.currentScript.parentElement"].filter(Boolean);B&&(E.push("const deferred = new Map();"),R.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`),R.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`)),E.push(`${L} = {
						${R.join(`,
						`)}
					};`);const S=["app",`${L}.element`];if(o.ssr){const q={form:"null",error:"null"};E.push(`const data = ${J};`),b$1&&(q.form=qt(b$1,i.route.id)),l&&(q.error=uneval(l));const Y=[`node_ids: [${e.map(({node:at})=>at.index).join(", ")}]`,"data",`form: ${q.form}`,`error: ${q.error}`];a!==200&&Y.push(`status: ${a}`),r.embedded&&Y.push(`params: ${uneval(i.params)}`,`route: ${I(i.route)}`),S.push(`{
							${Y.join(`,
							`)}
						}`);}if(E.push(`Promise.all([
						import(${I(O$1(f$1.start.file))}),
						import(${I(O$1(f$1.app.file))})
					]).then(([kit, app]) => {
						kit.start(${S.join(", ")});
					});`),r.service_worker){const q="";E.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${O$1("service-worker.js")}'${q});
						});
					}`);}const V=`
				{
					${E.join(`

					`)}
				}
			`;v.add_script(V),j+=`
			<script${v.script_needs_nonce?` nonce="${v.nonce}"`:""}>${V}<\/script>
		`;}const F=new Headers({"x-sveltekit-page":"true","content-type":"text/html"});if(s.prerendering){const k=[],E=v.csp_provider.get_meta();E&&k.push(E),s.prerendering.cache&&k.push(`<meta http-equiv="cache-control" content="${s.prerendering.cache}">`),k.length>0&&(w=k.join(`
`)+w);}else {const k=v.csp_provider.get_header();k&&F.set("content-security-policy",k);const E=v.report_only_provider.get_header();E&&F.set("content-security-policy-report-only",E),y$1.size&&F.set("link",Array.from(y$1).join(", "));}w+=_.head;const ot=r.templates.app({head:w,body:j,assets:$,nonce:v.nonce,env:b}),Q=await c.transformPageChunk({html:ot,done:!0})||"";return B||F.set("etag",`"${Fe(Q)}"`),B?new Response(new ReadableStream({async start(k){k.enqueue(je.encode(Q+`
`));for await(const E of B)k.enqueue(je.encode(E));k.close();},type:"bytes"}),{headers:{"content-type":"text/html"}}):f(Q,{status:a,headers:F})}function Bt(e,t,r,n){let s=1,o=0;const{iterator:a,push:l,done:i}=Ye();function c(d){if(typeof d?.then=="function"){const f=s++;return o+=1,d.then(g=>({data:g})).catch(async g=>({error:await T(e,t,g)})).then(async({data:g,error:u})=>{o-=1;let p;try{p=uneval({id:f,data:g,error:u},c);}catch{u=await T(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`)),g=void 0,p=uneval({id:f,data:g,error:u},c);}l(`<script>${n}.resolve(${p})<\/script>
`),o===0&&i();}),`${n}.defer(${f})`}}try{return {data:`[${r.map(f=>f?`{"type":"data","data":${uneval(f.data,c)},${ze(f)}${f.slash?`,"slash":${JSON.stringify(f.slash)}`:""}}`:"null").join(",")}]`,chunks:o>0?a:null}}catch(d){throw new Error(Ue(e,d))}}function z(e,t){return e.reduce((r,n)=>n?.universal?.[t]??n?.server?.[t]??r,void 0)}async function Ze({event:e,options:t,manifest:r,state:n,status:s,error:o$1,resolve_opts:a}){const l=[];try{const i=[],c=await r._.nodes[0](),d=z([c],"ssr")??!0,f=z([c],"csr")??!0;if(d){n.error=!0;const g=pe({event:e,state:n,node:c,parent:async()=>({})}),u=await g,p=await Je({event:e,fetched:l,node:c,parent:async()=>({}),resolve_opts:a,server_data_promise:g,state:n,csr:f});i.push({node:c,server_data:u,data:p},{node:await r._.nodes[1](),data:null,server_data:null});}return await G({options:t,manifest:r,state:n,page_config:{ssr:d,csr:z([c],"csr")??!0},status:s,error:await T(e,t,o$1),branch:i,fetched:l,event:e,resolve_opts:a})}catch(i){return i instanceof c?K(i.status,i.location):le(t,i instanceof o?i.status:500,(await T(e,t,i)).message)}}function Vt(e){let t=!1,r;return ()=>t?r:(t=!0,r=e())}const ve="x-sveltekit-invalidated",Re=new TextEncoder;async function Xt(e,t,r,n,s,o$1,a){if(!t.page)return new Response(void 0,{status:404});try{const l=[...t.page.layouts,t.page.leaf],i=o$1??l.map(()=>!0);let c$1=!1;const d=new URL(e.url);d.pathname=de(d.pathname,a);const f={...e,url:d},g=l.map((b,h)=>Vt(async()=>{try{if(c$1)return {type:"skip"};const $=b==null?b:await n._.nodes[b]();return pe({event:f,state:s,node:$,parent:async()=>{const x={};for(let w=0;w<h;w+=1){const j=await g[w]();j&&Object.assign(x,j.data);}return x}})}catch($){throw c$1=!0,$}})),u=g.map(async(b,h)=>i[h]?b():{type:"skip"});let p=u.length;const y=await Promise.all(u.map((b,h)=>b.catch(async $=>{if($ instanceof c)throw $;return p=Math.min(p,h+1),{type:"error",error:await T(e,r,$),status:$ instanceof o?$.status:void 0}}))),{data:m,chunks:_}=et(e,r,y);return _?new Response(new ReadableStream({async start(b){b.enqueue(Re.encode(m));for await(const h of _)b.enqueue(Re.encode(h));b.close();},type:"bytes"}),{headers:{"content-type":"text/sveltekit-data","cache-control":"private, no-store"}}):se(m)}catch(l){const i=l;return i instanceof c?oe(i):se(await T(e,r,i),500)}}function se(e,t=200){return f(typeof e=="string"?e:JSON.stringify(e),{status:t,headers:{"content-type":"application/json","cache-control":"private, no-store"}})}function oe(e){return se({type:"redirect",location:e.location})}function et(e,t,r){let n=1,s=0;const{iterator:o,push:a,done:l}=Ye(),i={Promise:c=>{if(typeof c?.then=="function"){const d=n++;s+=1;let f="data";return c.catch(async g=>(f="error",T(e,t,g))).then(async g=>{let u;try{u=stringify(g,i);}catch{const y=await T(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`));f="error",u=stringify(y,i);}s-=1,a(`{"type":"chunk","id":${d},"${f}":${u}}
`),s===0&&l();}),d}}};try{return {data:`{"type":"data","nodes":[${r.map(d=>d?d.type==="error"||d.type==="skip"?JSON.stringify(d):`{"type":"data","data":${stringify(d.data,i)},${ze(d)}${d.slash?`,"slash":${JSON.stringify(d.slash)}`:""}}`:"null").join(",")}]}
`,chunks:s>0?o:null}}catch(c){throw new Error(Ue(e,c))}}const Kt=10;async function Qt(e,t,r,n,s,o$1){if(s.depth>Kt)return f(`Not found: ${e.url.pathname}`,{status:404});if(jt(e)){const a=await n._.nodes[t.leaf]();return vt(e,r,a?.server)}try{const a=await Promise.all([...t.layouts.map(h=>h==null?h:n._.nodes[h]()),n._.nodes[t.leaf]()]),l=a.at(-1);let i=200,c$1;if(Rt(e)){if(c$1=await St(e,l.server),c$1?.type==="redirect")return K(c$1.status,c$1.location);if(c$1?.type==="error"){const h=c$1.error;i=h instanceof o?h.status:500;}c$1?.type==="failure"&&(i=c$1.status);}const d=a.some(h=>h?.server),f$1=Et(e.url.pathname),g=z(a,"prerender")??!1;if(g){if(l.server?.actions)throw new Error("Cannot prerender pages with actions")}else if(s.prerendering)return new Response(void 0,{status:204});s.prerender_default=g;const u=[];if(z(a,"ssr")===!1)return await G({branch:[],fetched:u,page_config:{ssr:!1,csr:z(a,"csr")??!0},status:i,error:null,event:e,options:r,manifest:n,state:s,resolve_opts:o$1});let p=[],y=null;const m=a.map((h,$)=>{if(y)throw y;return Promise.resolve().then(async()=>{try{if(h===l&&c$1?.type==="error")throw c$1.error;return await pe({event:e,state:s,node:h,parent:async()=>{const x={};for(let w=0;w<$;w+=1){const j=await m[w];j&&Object.assign(x,await j.data);}return x}})}catch(x){throw y=x,y}})}),_=z(a,"csr")??!0,b=a.map((h,$)=>{if(y)throw y;return Promise.resolve().then(async()=>{try{return await Je({event:e,fetched:u,node:h,parent:async()=>{const x={};for(let w=0;w<$;w+=1)Object.assign(x,await b[w]);return x},resolve_opts:o$1,server_data_promise:m[$],state:s,csr:_})}catch(x){throw y=x,y}})});for(const h of m)h.catch(()=>{});for(const h of b)h.catch(()=>{});for(let h=0;h<a.length;h+=1){const $=a[h];if($)try{const x=await m[h],w=await b[h];p.push({node:$,server_data:x,data:w});}catch(x){const w=x;if(w instanceof c){if(s.prerendering&&d){const O=JSON.stringify({type:"redirect",location:w.location});s.prerendering.dependencies.set(f$1,{response:f(O),body:O});}return K(w.status,w.location)}const j=w instanceof o?w.status:500,v=await T(e,r,w);for(;h--;)if(t.errors[h]){const O=t.errors[h],L=await n._.nodes[O]();let J=h;for(;!p[J];)J-=1;return await G({event:e,options:r,manifest:n,state:s,resolve_opts:o$1,page_config:{ssr:!0,csr:!0},status:j,error:v,branch:we(p.slice(0,J+1)).concat({node:L,data:null,server_data:null}),fetched:u})}return le(r,j,v.message)}else p.push(null);}if(s.prerendering&&d){let{data:h,chunks:$}=et(e,r,p.map(x=>x?.server_data));if($)for await(const x of $)h+=x;s.prerendering.dependencies.set(f$1,{response:f(h),body:h});}return await G({event:e,options:r,manifest:n,state:s,resolve_opts:o$1,page_config:{csr:z(a,"csr")??!0,ssr:!0},status:i,error:null,branch:we(p),action_result:c$1,fetched:u})}catch(a){return await Ze({event:e,options:r,manifest:n,state:s,status:500,error:a,resolve_opts:o$1})}}function Yt(e,t,r){const n={},s=e.slice(1);let o=0;for(let a=0;a<t.length;a+=1){const l=t[a],i=s[a-o];if(l.chained&&l.rest&&o){n[l.name]=s.slice(a-o,a+1).filter(c=>c).join("/"),o=0;continue}if(i===void 0){l.rest&&(n[l.name]="");continue}if(!l.matcher||r[l.matcher](i)){n[l.name]=i;const c=t[a+1],d=s[a+1];c&&!c.rest&&c.optional&&d&&(o=0);continue}if(l.optional&&l.chained){o++;continue}return}if(!o)return n}function Zt(e,t,r){const n=e.headers.get("cookie")??"",s=cookieExports.parse(n,{decode:f=>f}),a=de(t.pathname,r).split("/").slice(0,-1).join("/")||"/",l={},i={httpOnly:!0,sameSite:"lax",secure:!(t.hostname==="localhost"&&t.protocol==="http:")},c={get(f,g){const u=l[f];if(u&&ee(t.hostname,u.options.domain)&&te(t.pathname,u.options.path))return u.value;const p=g?.decode||decodeURIComponent;return cookieExports.parse(n,{decode:p})[f]},getAll(f){const g=f?.decode||decodeURIComponent,u=cookieExports.parse(n,{decode:g});for(const p of Object.values(l))ee(t.hostname,p.options.domain)&&te(t.pathname,p.options.path)&&(u[p.name]=p.value);return Object.entries(u).map(([p,y])=>({name:p,value:y}))},set(f,g,u={}){let p=u.path??a;l[f]={name:f,value:g,options:{...i,...u,path:p}};},delete(f,g={}){c.set(f,"",{...g,maxAge:0});},serialize(f,g,u){return cookieExports.serialize(f,g,{...i,...u})}};function d(f,g){const u={...s};for(const p in l){const y=l[p];if(!ee(f.hostname,y.options.domain)||!te(f.pathname,y.options.path))continue;const m=y.options.encode||encodeURIComponent;u[y.name]=m(y.value);}if(g){const p=cookieExports.parse(g,{decode:y=>y});for(const y in p)u[y]=p[y];}return Object.entries(u).map(([p,y])=>`${p}=${y}`).join("; ")}return {cookies:c,new_cookies:l,get_cookie_header:d}}function ee(e,t){if(!t)return !0;const r=t[0]==="."?t.slice(1):t;return e===r?!0:e.endsWith("."+r)}function te(e,t){if(!t)return !0;const r=t.endsWith("/")?t.slice(0,-1):t;return e===r?!0:e.startsWith(r+"/")}function Se(e,t){for(const r of t){const{name:n,value:s,options:o}=r;e.append("set-cookie",cookieExports.serialize(n,s,o));}}function er({event:e,options:t,manifest:r,state:n,get_cookie_header:s}){return async(o,a)=>{const l=qe(o,a,e.url),i=a?.body;let c=(o instanceof Request?o.mode:a?.mode)??"cors",d=(o instanceof Request?o.credentials:a?.credentials)??"same-origin";return await t.hooks.handleFetch({event:e,request:l,fetch:async(f,g)=>{const u=qe(f,g,e.url),p$1=new URL(u.url);if(u.headers.has("origin")||u.headers.set("origin",e.url.origin),f!==l&&(c=(f instanceof Request?f.mode:g?.mode)??"cors",d=(f instanceof Request?f.credentials:g?.credentials)??"same-origin"),(u.method==="GET"||u.method==="HEAD")&&(c==="no-cors"&&p$1.origin!==e.url.origin||p$1.origin===e.url.origin)&&u.headers.delete("origin"),p$1.origin!==e.url.origin){if(`.${p$1.hostname}`.endsWith(`.${e.url.hostname}`)&&d!=="omit"){const j=s(p$1,u.headers.get("cookie"));j&&u.headers.set("cookie",j);}return fetch(u)}let y$1;const m=y||p,_=decodeURIComponent(p$1.pathname),b=(_.startsWith(m)?_.slice(m.length):_).slice(1),h=`${b}/index.html`,$=r.assets.has(b),x=r.assets.has(h);if($||x){const j=$?b:h;if(n.read){const v=$?r.mimeTypes[b.slice(b.lastIndexOf("."))]:"text/html";return new Response(n.read(j),{headers:v?{"content-type":v}:{}})}return await fetch(u)}if(d!=="omit"){const j=s(p$1,u.headers.get("cookie"));j&&u.headers.set("cookie",j);const v=e.request.headers.get("authorization");v&&!u.headers.has("authorization")&&u.headers.set("authorization",v);}if(i&&typeof i!="string"&&!ArrayBuffer.isView(i))throw new Error("Request body must be a string or TypedArray");u.headers.has("accept")||u.headers.set("accept","*/*"),u.headers.has("accept-language")||u.headers.set("accept-language",e.request.headers.get("accept-language")),y$1=await st(u,t,r,{...n,depth:n.depth+1});const w=y$1.headers.get("set-cookie");if(w)for(const j of setCookieExports.splitCookiesString(w)){const{name:v,value:O,...L}=setCookieExports.parseString(j);e.cookies.set(v,O,L);}return y$1}})}}function qe(e,t,r){return e instanceof Request?e:new Request(typeof e=="string"?new URL(e,r):e,t)}const Oe=({html:e})=>e,Pe=()=>!1,Te=({type:e})=>e==="js"||e==="css";async function st(e,t,r,n){let s=new URL(e.url);if(t.csrf_check_origin&&Ce(e)&&(e.method==="POST"||e.method==="PUT"||e.method==="PATCH"||e.method==="DELETE")&&e.headers.get("origin")!==s.origin){const _=l(403,`Cross-site ${e.method} form submissions are forbidden`);return e.headers.get("accept")==="application/json"?g(_.body,{status:_.status}):f(_.body.message,{status:_.status})}let o;try{o=gt(s.pathname);}catch{return f("Malformed URI",{status:400})}let a=null,l$1={};if(p&&!n.prerendering?.fallback){if(!o.startsWith(p))return f("Not found",{status:404});o=o.slice(p.length)||"/";}const i=xt(o);let c$1;if(i&&(o=be(o)||"/",s.pathname=be(s.pathname)||"/",c$1=s.searchParams.get(ve)?.split("_").map(Boolean),s.searchParams.delete(ve)),!n.prerendering?.fallback){const m=await r._.matchers();for(const _ of r._.routes){const b=_.pattern.exec(o);if(!b)continue;const h=Yt(b,_.params,m);if(h){a=_,l$1=wt(h);break}}}let d;const f$1={};let g$1={};const u={cookies:null,fetch:null,getClientAddress:n.getClientAddress||(()=>{throw new Error("@sveltejs/adapter-node does not specify getClientAddress. Please raise an issue")}),locals:{},params:l$1,platform:n.platform,request:e,route:{id:a?.id??null},setHeaders:m=>{for(const _ in m){const b=_.toLowerCase(),h=m[_];if(b==="set-cookie")throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");if(b in f$1)throw new Error(`"${_}" header is already set`);f$1[b]=h,n.prerendering&&b==="cache-control"&&(n.prerendering.cache=h);}},url:s,isDataRequest:i};let p$1={transformPageChunk:Oe,filterSerializedResponseHeaders:Pe,preload:Te};try{if(a&&!i){if(a.page){const x=await Promise.all([...a.page.layouts.map(w=>w==null?w:r._.nodes[w]()),r._.nodes[a.page.leaf]()]);d=z(x,"trailingSlash");}else a.endpoint&&(d=(await a.endpoint()).trailingSlash);const $=de(s.pathname,d??"never");if($!==s.pathname&&!n.prerendering?.fallback)return new Response(void 0,{status:308,headers:{"x-sveltekit-normalize":"1",location:($.startsWith("//")?s.origin+$:$)+(s.search==="?"?"":s.search)}})}const{cookies:m,new_cookies:_,get_cookie_header:b}=Zt(e,s,d??"never");g$1=_,u.cookies=m,u.fetch=er({event:u,options:t,manifest:r,state:n,get_cookie_header:b}),n.prerendering&&!n.prerendering.fallback&&He(s);const h=await t.hooks.handle({event:u,resolve:($,x)=>y($,x).then(w=>{for(const j in f$1){const v=f$1[j];w.headers.set(j,v);}return Se(w.headers,Object.values(g$1)),n.prerendering&&$.route.id!==null&&w.headers.set("x-sveltekit-routeid",encodeURI($.route.id)),w})});if(h.status===200&&h.headers.has("etag")){let $=e.headers.get("if-none-match");$?.startsWith('W/"')&&($=$.substring(2));const x=h.headers.get("etag");if($===x){const w=new Headers({etag:x});for(const j of ["cache-control","content-location","date","expires","vary","set-cookie"]){const v=h.headers.get(j);v&&w.set(j,v);}return new Response(void 0,{status:304,headers:w})}}if(i&&h.status>=300&&h.status<=308){const $=h.headers.get("location");if($)return oe(new c(h.status,$))}return h}catch(m){if(m instanceof c){const _=i?oe(m):K(m.status,m.location);return Se(_.headers,Object.values(g$1)),_}return await ge(u,t,m)}async function y(m,_){try{if(_){if("ssr"in _)throw new Error("ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197");p$1={transformPageChunk:_.transformPageChunk||Oe,filterSerializedResponseHeaders:_.filterSerializedResponseHeaders||Pe,preload:_.preload||Te};}if(n.prerendering?.fallback)return await G({event:m,options:t,manifest:r,state:n,page_config:{ssr:!1,csr:!0},status:200,error:null,branch:[],fetched:[],resolve_opts:p$1});if(a){let b;if(i)b=await Xt(m,a,t,r,n,c$1,d??"never");else if(a.endpoint&&(!a.page||yt(m)))b=await mt(m,await a.endpoint(),n);else if(a.page)b=await Qt(m,a.page,t,r,n,p$1);else throw new Error("This should never happen");return b}return n.error?f("Internal Server Error",{status:500}):n.depth===0?await Ze({event:m,options:t,manifest:r,state:n,status:404,error:new Error(`Not found: ${m.url.pathname}`),resolve_opts:p$1}):n.prerendering?f("not found",{status:404}):await fetch(e)}catch(b){return await ge(m,t,b)}finally{m.cookies.set=()=>{throw new Error("Cannot use `cookies.set(...)` after the response has been generated")},m.setHeaders=()=>{throw new Error("Cannot use `setHeaders(...)` after the response has been generated")};}}}class ur{#e;#t;constructor(t){this.#e=q,this.#t=t;}async init({env:t}){const r=Object.entries(t),n=this.#e.env_public_prefix;Object.fromEntries(r.filter(([o])=>!o.startsWith(n)));const s=Object.fromEntries(r.filter(([o])=>o.startsWith(n)));if(P(s),!this.#e.hooks)try{const o=await z$1();this.#e.hooks={handle:o.handle||(({event:a,resolve:l})=>l(a)),handleError:o.handleError||(({error:a})=>console.error(a?.stack)),handleFetch:o.handleFetch||(({request:a,fetch:l})=>l(a))};}catch(o){throw o}}async respond(t,r){if(!(t instanceof Request))throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");return st(t,this.#e,this.#t,{...r,error:!1,depth:0})}}

export { ur as Server };
//# sourceMappingURL=index.js.map
