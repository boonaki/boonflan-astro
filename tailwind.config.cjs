/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
         keyframes: {
            slideIn: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(0%)' },
            },
            slideOut: {
               "0%": { transform: 'translateX(0%)' },
               "100%": { transform: "translateX(100%)"}
            }
         },
         animation: {
            slideIn: "slideIn 0.3s ease-in-out",
            slideOut: "slideOut 0.3s ease-in-out"
         },
         fontFamily: {
            'mansalva': ["Mansalva", "cursive"]
         }
      },
	},
	plugins: [],
}
