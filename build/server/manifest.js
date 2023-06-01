const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","FooterLogo.svg","favicon.png","flickity/flickity.min.css","flickity/flickity.pkgd.min.js","fonts/.DS_Store","fonts/Cormorant-Bold.woff2","fonts/Cormorant-Regular.woff2","fonts/Cormorant-SemiBold.woff2","fonts/Raleway-Black.ttf","fonts/Raleway-BlackItalic.ttf","fonts/Raleway-Bold.ttf","fonts/Raleway-BoldItalic.ttf","fonts/Raleway-ExtraBold.ttf","fonts/Raleway-ExtraBoldItalic.ttf","fonts/Raleway-ExtraLight.ttf","fonts/Raleway-ExtraLightItalic.ttf","fonts/Raleway-Italic.ttf","fonts/Raleway-Light.ttf","fonts/Raleway-LightItalic.ttf","fonts/Raleway-Medium.ttf","fonts/Raleway-MediumItalic.ttf","fonts/Raleway-Regular.ttf","fonts/Raleway-SemiBold.ttf","fonts/Raleway-SemiBoldItalic.ttf","fonts/Raleway-Thin.ttf","fonts/Raleway-ThinItalic.ttf","fonts/Roboto-Black.woff","fonts/Roboto-BlackItalic.woff","fonts/Roboto-Bold.woff","fonts/Roboto-BoldItalic.woff","fonts/Roboto-Italic.woff","fonts/Roboto-Light.woff","fonts/Roboto-LightItalic.woff","fonts/Roboto-Medium.woff","fonts/Roboto-MediumItalic.woff","fonts/Roboto-Regular.woff","fonts/Roboto-Thin.woff","fonts/Roboto-ThinItalic.woff","fonts/TimesNewRoman.woff2","fonts/TimesNewRomanBold.woff2","fonts/TimesNewRomanBoldItalic.woff2","fonts/TimesNewRomanItalic.woff2","left-quote.png","right-quote.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".js":"application/javascript",".woff2":"font/woff2",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":"_app/immutable/entry/start.d7fb8ec3.js","app":"_app/immutable/entry/app.43ea1c0f.js","imports":["_app/immutable/entry/start.d7fb8ec3.js","_app/immutable/chunks/index.d0f96b4d.js","_app/immutable/chunks/singletons.ec6cd3f4.js","_app/immutable/entry/app.43ea1c0f.js","_app/immutable/chunks/index.d0f96b4d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-92e15b59.js'),
			() => import('./chunks/1-98e67f41.js'),
			() => import('./chunks/2-3bf82d6d.js'),
			() => import('./chunks/3-f960ef4b.js'),
			() => import('./chunks/4-9a9bfc7e.js'),
			() => import('./chunks/5-69759985.js'),
			() => import('./chunks/6-f02284c1.js'),
			() => import('./chunks/7-cedb53fa.js'),
			() => import('./chunks/8-dc0f9554.js'),
			() => import('./chunks/9-288b9c06.js'),
			() => import('./chunks/10-da708e4a.js'),
			() => import('./chunks/11-9d7a2f6b.js'),
			() => import('./chunks/12-7781688d.js'),
			() => import('./chunks/13-a201070a.js'),
			() => import('./chunks/14-9646a9ea.js'),
			() => import('./chunks/15-45a9903d.js'),
			() => import('./chunks/16-3b5aae21.js'),
			() => import('./chunks/17-27b2f9a9.js'),
			() => import('./chunks/18-6f69e7bc.js'),
			() => import('./chunks/19-925e7ce4.js'),
			() => import('./chunks/20-f91e185f.js'),
			() => import('./chunks/21-60345a7e.js'),
			() => import('./chunks/22-1bbf0ba4.js')
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
