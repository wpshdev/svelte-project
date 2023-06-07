const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","FooterLogo.svg","favicon.png","flickity/flickity.min.css","flickity/flickity.pkgd.min.js","fonts/Cormorant-Bold.woff2","fonts/Cormorant-Regular.woff2","fonts/Cormorant-SemiBold.woff2","fonts/Raleway-Black.ttf","fonts/Raleway-BlackItalic.ttf","fonts/Raleway-Bold.ttf","fonts/Raleway-BoldItalic.ttf","fonts/Raleway-ExtraBold.ttf","fonts/Raleway-ExtraBoldItalic.ttf","fonts/Raleway-ExtraLight.ttf","fonts/Raleway-ExtraLightItalic.ttf","fonts/Raleway-Italic.ttf","fonts/Raleway-Light.ttf","fonts/Raleway-LightItalic.ttf","fonts/Raleway-Medium.ttf","fonts/Raleway-MediumItalic.ttf","fonts/Raleway-Regular.ttf","fonts/Raleway-SemiBold.ttf","fonts/Raleway-SemiBoldItalic.ttf","fonts/Raleway-Thin.ttf","fonts/Raleway-ThinItalic.ttf","fonts/Roboto-Black.woff","fonts/Roboto-BlackItalic.woff","fonts/Roboto-Bold.woff","fonts/Roboto-BoldItalic.woff","fonts/Roboto-Italic.woff","fonts/Roboto-Light.woff","fonts/Roboto-LightItalic.woff","fonts/Roboto-Medium.woff","fonts/Roboto-MediumItalic.woff","fonts/Roboto-Regular.woff","fonts/Roboto-Thin.woff","fonts/Roboto-ThinItalic.woff","fonts/TimesNewRoman.woff2","fonts/TimesNewRomanBold.woff2","fonts/TimesNewRomanBoldItalic.woff2","fonts/TimesNewRomanItalic.woff2","left-quote.png","right-quote.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".js":"application/javascript",".woff2":"font/woff2",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e1aba164.js","imports":["_app/immutable/entry/start.e1aba164.js","_app/immutable/chunks/index.b4b99831.js","_app/immutable/chunks/singletons.56c7a29b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.50142460.js","imports":["_app/immutable/entry/app.50142460.js","_app/immutable/chunks/index.b4b99831.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-1d0b5615.js'),
			() => import('./chunks/1-953c720f.js'),
			() => import('./chunks/2-c212352b.js'),
			() => import('./chunks/3-e4ca8a52.js'),
			() => import('./chunks/4-8d1e491f.js'),
			() => import('./chunks/5-8e5b8f67.js'),
			() => import('./chunks/6-a3f95744.js'),
			() => import('./chunks/7-e254cb5f.js'),
			() => import('./chunks/8-5951f908.js'),
			() => import('./chunks/9-9cecebcf.js'),
			() => import('./chunks/10-101a5547.js'),
			() => import('./chunks/11-44764454.js'),
			() => import('./chunks/12-0163efc9.js'),
			() => import('./chunks/13-b0d3a1ba.js'),
			() => import('./chunks/14-b5e50244.js'),
			() => import('./chunks/15-271f25d2.js'),
			() => import('./chunks/16-59f1bedc.js'),
			() => import('./chunks/17-fc3e5874.js'),
			() => import('./chunks/18-7a724054.js'),
			() => import('./chunks/19-19416f14.js'),
			() => import('./chunks/20-d3e34170.js'),
			() => import('./chunks/21-57b0d366.js'),
			() => import('./chunks/22-544c5b54.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/articles/[slug]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/clear",
				pattern: /^\/clear\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/our-process",
				pattern: /^\/our-process\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/our-team",
				pattern: /^\/our-team\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/our-team/[slug]",
				pattern: /^\/our-team\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/page",
				pattern: /^\/page\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/page/[slug]",
				pattern: /^\/page\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,6], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/portfolio/[slug]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,7], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 22 },
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
