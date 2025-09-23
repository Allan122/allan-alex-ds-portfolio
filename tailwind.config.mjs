/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
theme: {
    extend: {
        fontFamily: {
            // This adds our custom fonts so we can use them with Tailwind classes like `font-sans`
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [],
}