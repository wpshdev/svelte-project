import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const filePath = dirname(fileURLToPath(import.meta.url))
const sassPath = `${filePath}/src/styles/`

const config: UserConfig = {
	plugins: [sveltekit()],
	// test: {
	// 	include: ['src/**/*.{test,spec}.{js,ts}']
	// },
	css: {
		preprocessorOptions: {
		  scss: {
			additionalData: `
				@import '${sassPath}_mixins.scss';
				@import '${sassPath}_vars.scss';
			`,
		  }
		},
	},	
	
	build:{
		sourcemap: true, // Config vite to generate sourcemap when bundling.
		minify: true
	},
};

export default config;
