const colors = {
	blue: "#33a6ba",
	"blue-dark": "#313e4f",
	gray: "#989ea7",
	"gray-light": "#e8edf3",
	red: "#ff7b92"
};

module.exports = {
	purge: [
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}"
	],
	theme: {
		boxShadow: {
			DEFAULT:
				"0px 10px 15px -5px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
			input:
				"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)"
		},
		extend: {
			colors,
			margin: {
				"2px": "2px"
			},
			borderWidth: {
				"1": "1px"
			},
			fontFamily: {
				"proxima-nova": ["'Proxima Nova'", "Sans-Serif"]
			},
			fontSize: {
				xs: ["0.75rem", "0.75rem"],
				sm: ["0.75rem", "1.125rem"],
				xl: ["1.25rem", "1.875rem"],
				"2xl": ["1.5rem", "2.25rem"],
				header: ["4rem", "4rem"]
			},
			stroke: theme => ({
				white: theme('colors["white"]'),
				blue: theme("colors.blue"),
				"blue-dark": theme('colors["blue-dark"]'),
				gray: theme('colors["gray"]'),
				"gray-light": theme('colors["gray-light"]'),
				red: theme('colors["red"]')
			}),
			fill: theme => ({
				white: theme('colors["white"]'),
				blue: theme("colors.blue"),
				"blue-dark": theme('colors["blue-dark"]'),
				gray: theme('colors["gray"]'),
				"gray-light": theme('colors["gray-light"]'),
				red: theme('colors["red"]')
			}),
			transitionProperty: {
				height: "height",
				"max-height": "max-height"
			}
		}
	},
	variants: {
		extend: {
			borderColor: ["active"]
		}
	},
	plugins: [
		require("postcss"),
		require("tailwindcss"),
		require("autoprefixer")
	]
};
