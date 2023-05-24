const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["FooterLogo.svg","favicon.png","flickity/flickity.min.css","flickity/flickity.pkgd.min.js","fonts/Cormorant-Bold.woff2","fonts/Cormorant-Regular.woff2","fonts/Cormorant-SemiBold.woff2","fonts/Raleway-Black.ttf","fonts/Raleway-BlackItalic.ttf","fonts/Raleway-Bold.ttf","fonts/Raleway-BoldItalic.ttf","fonts/Raleway-ExtraBold.ttf","fonts/Raleway-ExtraBoldItalic.ttf","fonts/Raleway-ExtraLight.ttf","fonts/Raleway-ExtraLightItalic.ttf","fonts/Raleway-Italic.ttf","fonts/Raleway-Light.ttf","fonts/Raleway-LightItalic.ttf","fonts/Raleway-Medium.ttf","fonts/Raleway-MediumItalic.ttf","fonts/Raleway-Regular.ttf","fonts/Raleway-SemiBold.ttf","fonts/Raleway-SemiBoldItalic.ttf","fonts/Raleway-Thin.ttf","fonts/Raleway-ThinItalic.ttf","fonts/Roboto-Black.woff","fonts/Roboto-BlackItalic.woff","fonts/Roboto-Bold.woff","fonts/Roboto-BoldItalic.woff","fonts/Roboto-Italic.woff","fonts/Roboto-Light.woff","fonts/Roboto-LightItalic.woff","fonts/Roboto-Medium.woff","fonts/Roboto-MediumItalic.woff","fonts/Roboto-Regular.woff","fonts/Roboto-Thin.woff","fonts/Roboto-ThinItalic.woff","fonts/ShipporiMincho-Bold.woff","fonts/ShipporiMincho-ExtraBold.woff","fonts/ShipporiMincho-Medium.woff","fonts/ShipporiMincho-Regular.woff","fonts/ShipporiMincho-SemiBold.woff","left-quote.png","right-quote.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".js":"application/javascript",".woff2":"font/woff2",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":"_app/immutable/entry/start.1b32e6d5.js","app":"_app/immutable/entry/app.9fd0fb39.js","imports":["_app/immutable/entry/start.1b32e6d5.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/singletons.e1bb1bad.js","_app/immutable/entry/app.9fd0fb39.js","_app/immutable/chunks/index.eceac6f7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-ee26692b.js'),
			() => import('./chunks/1-420465bd.js'),
			() => import('./chunks/2-37ac5a73.js'),
			() => import('./chunks/3-24601e8c.js'),
			() => import('./chunks/4-e1921fb5.js'),
			() => import('./chunks/5-e255586b.js'),
			() => import('./chunks/6-7335dbf5.js'),
			() => import('./chunks/7-4712d50e.js'),
			() => import('./chunks/9-ca5e240a.js'),
			() => import('./chunks/10-0b5249d8.js'),
			() => import('./chunks/11-00cf4471.js'),
			() => import('./chunks/12-7a060581.js'),
			() => import('./chunks/13-22c88ed5.js'),
			() => import('./chunks/14-d0806d14.js'),
			() => import('./chunks/15-c6d01114.js'),
			() => import('./chunks/16-abd5beab.js'),
			() => import('./chunks/17-d779d88b.js'),
			() => import('./chunks/18-1833e075.js'),
			() => import('./chunks/19-081e173e.js'),
			() => import('./chunks/20-5e20e862.js'),
			() => import('./chunks/21-48e0ffe5.js'),
			() => import('./chunks/22-d8a6ede6.js')
		],
		routes: [
			{
				id: "/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/articles/[slug]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/clear",
				pattern: /^\/clear\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/our-process",
				pattern: /^\/our-process\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/our-team",
				pattern: /^\/our-team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/our-team/[slug]",
				pattern: /^\/our-team\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/page",
				pattern: /^\/page\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/page/[slug]",
				pattern: /^\/page\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,6,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/portfolio/[slug]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/","/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
