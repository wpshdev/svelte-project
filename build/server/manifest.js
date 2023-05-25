const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","FooterLogo.svg","favicon.png","flickity/flickity.min.css","flickity/flickity.pkgd.min.js","fonts/Cormorant-Bold.woff2","fonts/Cormorant-Regular.woff2","fonts/Cormorant-SemiBold.woff2","fonts/Raleway-Black.ttf","fonts/Raleway-BlackItalic.ttf","fonts/Raleway-Bold.ttf","fonts/Raleway-BoldItalic.ttf","fonts/Raleway-ExtraBold.ttf","fonts/Raleway-ExtraBoldItalic.ttf","fonts/Raleway-ExtraLight.ttf","fonts/Raleway-ExtraLightItalic.ttf","fonts/Raleway-Italic.ttf","fonts/Raleway-Light.ttf","fonts/Raleway-LightItalic.ttf","fonts/Raleway-Medium.ttf","fonts/Raleway-MediumItalic.ttf","fonts/Raleway-Regular.ttf","fonts/Raleway-SemiBold.ttf","fonts/Raleway-SemiBoldItalic.ttf","fonts/Raleway-Thin.ttf","fonts/Raleway-ThinItalic.ttf","fonts/Roboto-Black.woff","fonts/Roboto-BlackItalic.woff","fonts/Roboto-Bold.woff","fonts/Roboto-BoldItalic.woff","fonts/Roboto-Italic.woff","fonts/Roboto-Light.woff","fonts/Roboto-LightItalic.woff","fonts/Roboto-Medium.woff","fonts/Roboto-MediumItalic.woff","fonts/Roboto-Regular.woff","fonts/Roboto-Thin.woff","fonts/Roboto-ThinItalic.woff","fonts/ShipporiMincho-Bold.woff","fonts/ShipporiMincho-ExtraBold.woff","fonts/ShipporiMincho-Medium.woff","fonts/ShipporiMincho-Regular.woff","fonts/ShipporiMincho-SemiBold.woff","left-quote.png","right-quote.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".js":"application/javascript",".woff2":"font/woff2",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":"_app/immutable/entry/start.193a5862.js","app":"_app/immutable/entry/app.e99e86a2.js","imports":["_app/immutable/entry/start.193a5862.js","_app/immutable/chunks/index.eceac6f7.js","_app/immutable/chunks/singletons.99c99a1a.js","_app/immutable/entry/app.e99e86a2.js","_app/immutable/chunks/index.eceac6f7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-493ec17e.js'),
			() => import('./chunks/1-f5c09607.js'),
			() => import('./chunks/2-37ac5a73.js'),
			() => import('./chunks/3-24601e8c.js'),
			() => import('./chunks/4-e1921fb5.js'),
			() => import('./chunks/5-e255586b.js'),
			() => import('./chunks/6-7335dbf5.js'),
			() => import('./chunks/7-4712d50e.js'),
			() => import('./chunks/8-6eefd075.js'),
			() => import('./chunks/9-3cec46ba.js'),
			() => import('./chunks/10-cbeabe40.js'),
			() => import('./chunks/11-422cf0b9.js'),
			() => import('./chunks/12-ca0c4d7e.js'),
			() => import('./chunks/13-d13a74bc.js'),
			() => import('./chunks/14-4fffd2b4.js'),
			() => import('./chunks/15-20a808e8.js'),
			() => import('./chunks/16-abd5beab.js'),
			() => import('./chunks/17-d779d88b.js'),
			() => import('./chunks/18-1833e075.js'),
			() => import('./chunks/19-c83bfb15.js'),
			() => import('./chunks/20-828f9d23.js'),
			() => import('./chunks/21-c5d49f38.js'),
			() => import('./chunks/22-82959013.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/articles/[slug]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/clear",
				pattern: /^\/clear\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/our-process",
				pattern: /^\/our-process\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/our-team",
				pattern: /^\/our-team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/our-team/[slug]",
				pattern: /^\/our-team\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/page",
				pattern: /^\/page\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/page/[slug]",
				pattern: /^\/page\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,6,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/portfolio/[slug]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
