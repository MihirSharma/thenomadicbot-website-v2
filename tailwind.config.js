/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				"3xscreen": "300vw",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1 },
				},
				fadeInLeft: {
					"0%": { opacity: 0, transform: "translateX(-100%)" },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				fadeInRight: {
					"0%": { opacity: 0, transform: "translateX(100%)" },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				fadeInTop: {
					"0%": { opacity: 0, transform: "translateY(-100%)" },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				fadeInBottom: {
					"0%": { opacity: 0, transform: "translateY(100%)" },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				carouselLeft: {
					"0%": { opacity: 1, transform: "translateX(0)" },
					"32%": { opacity: 1, transform: "translateX(0)" },
					"33%": { opacity: 1, transform: "translateX(-33%)" },
					"65%": { opacity: 1, transform: "translateX(-33%)" },
					"66%": { opacity: 1, transform: "translateX(-66%)" },
					"99%": { opacity: 1, transform: "translateX(-66%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				flyRightSend: {
					// "0%": { transform: "translateX(0) translateY(0)" },
					"49%": {
						transform: "translateX(2000%) translateY(-2000%)",
					},
					"50%": {
						opacity: 0,
						transform: "translateX(2000%) translateY(-2000%)",
					},
					"51%": {
						opacity: 0,
						transform: "translateX(-2000%) translateY(2000%)",
					},
					"52%": {
						opacity: 1,
						transform: "translateX(-2000%) translateY(2000%)",
					},
					"100%": {
						opacity: 1,
						transform: "translateX(0) translateY(0)",
					},
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out forwards",
				fadeInLeft: "fadeInLeft 1s ease-in-out forwards",
				fadeInRight: "fadeInRight 1s ease-in-out forwards",
				fadeInTop: "fadeInTop 1s ease-in-out forwards",
				fadeInTopNavbar: "fadeInTop 0.5s ease-in-out forwards",
				fadeInBottom: "fadeInBottom 1s ease-in-out forwards",
				carouselLeft: "carouselLeft 60s ease-in-out infinite forwards",
				fadeInCalendly: "fadeInLeft 1s ease-in-out 5s forwards",
				flyRightSend: "flyRightSend 2s ease-in-out 1s forwards",
			},
		},
	},
	variants: {
		animation: ["motion-safe"],
	},
	plugins: [],
});
