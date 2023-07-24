/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3d996e",
				secondary: "#5faa"
			}
		}
	},
	plugins: [require("daisyui")]
};
