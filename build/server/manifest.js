const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","FooterLogo.svg","favicon.png","flickity/flickity.min.css","flickity/flickity.pkgd.min.js","fonts/Cormorant-Bold.woff2","fonts/Cormorant-Regular.woff2","fonts/Cormorant-SemiBold.woff2","fonts/Raleway-Black.ttf","fonts/Raleway-BlackItalic.ttf","fonts/Raleway-Bold.ttf","fonts/Raleway-BoldItalic.ttf","fonts/Raleway-ExtraBold.ttf","fonts/Raleway-ExtraBoldItalic.ttf","fonts/Raleway-ExtraLight.ttf","fonts/Raleway-ExtraLightItalic.ttf","fonts/Raleway-Italic.ttf","fonts/Raleway-Light.ttf","fonts/Raleway-LightItalic.ttf","fonts/Raleway-Medium.ttf","fonts/Raleway-MediumItalic.ttf","fonts/Raleway-Regular.ttf","fonts/Raleway-SemiBold.ttf","fonts/Raleway-SemiBoldItalic.ttf","fonts/Raleway-Thin.ttf","fonts/Raleway-ThinItalic.ttf","fonts/Roboto-Black.woff","fonts/Roboto-BlackItalic.woff","fonts/Roboto-Bold.woff","fonts/Roboto-BoldItalic.woff","fonts/Roboto-Italic.woff","fonts/Roboto-Light.woff","fonts/Roboto-LightItalic.woff","fonts/Roboto-Medium.woff","fonts/Roboto-MediumItalic.woff","fonts/Roboto-Regular.woff","fonts/Roboto-Thin.woff","fonts/Roboto-ThinItalic.woff","fonts/ShipporiMincho-Bold.woff","fonts/ShipporiMincho-ExtraBold.woff","fonts/ShipporiMincho-Medium.woff","fonts/ShipporiMincho-Regular.woff","fonts/ShipporiMincho-SemiBold.woff","left-quote.png","right-quote.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".js":"application/javascript",".woff2":"font/woff2",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.40dd95fe.js","imports":["_app/immutable/entry/start.40dd95fe.js","_app/immutable/chunks/index.8c538c3a.js","_app/immutable/chunks/singletons.8fd813c8.js","_app/immutable/chunks/paths.29b6cca4.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.54f6d7d7.js","imports":["_app/immutable/entry/app.54f6d7d7.js","_app/immutable/chunks/index.8c538c3a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-0ac5d554.js'),
			() => import('./chunks/1-f9a03f49.js'),
			() => import('./chunks/2-6293724f.js'),
			() => import('./chunks/3-d567bc21.js'),
			() => import('./chunks/4-1065193f.js'),
			() => import('./chunks/5-bd9d6f4a.js'),
			() => import('./chunks/6-781cc65f.js'),
			() => import('./chunks/7-23e2e82e.js'),
			() => import('./chunks/8-effd79fd.js'),
			() => import('./chunks/9-f34e9496.js'),
			() => import('./chunks/10-98599afe.js'),
			() => import('./chunks/11-8a8293bb.js'),
			() => import('./chunks/12-e1353514.js'),
			() => import('./chunks/13-55dde994.js'),
			() => import('./chunks/14-2429c053.js'),
			() => import('./chunks/15-b65e569b.js'),
			() => import('./chunks/16-f1266ea6.js'),
			() => import('./chunks/17-e208dbcf.js'),
			() => import('./chunks/18-acd37a27.js'),
			() => import('./chunks/19-45a3b319.js'),
			() => import('./chunks/20-b0ae4791.js'),
			() => import('./chunks/21-f655b0fa.js')
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
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/our-process",
				pattern: /^\/our-process\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/our-team",
				pattern: /^\/our-team\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/our-team/[slug]",
				pattern: /^\/our-team\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/page",
				pattern: /^\/page\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/page/[slug]",
				pattern: /^\/page\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,6], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/portfolio/[slug]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,7], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
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
