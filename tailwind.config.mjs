/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"primary": "#FEC9FF",
				secondary: "#C0FF80"
			}
		},
	},
	plugins: [],
}
