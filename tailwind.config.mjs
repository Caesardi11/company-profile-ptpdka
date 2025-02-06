/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				primary : ['Monsterrat', 'sans-serif'],
				secondary : ['Oswald', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				coolWhite: '#F8F9FA',
				warmWhite1: '#FDFCFB',
				warmWhite2: '#FAF9F6',
				smokyWhite: '#F5F5F5'
			}
		},
	},
	darkMode: false,
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
