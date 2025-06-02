import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-karla)', 'sans-serif'],
      },
       colors: {
        'eucalipto': '#BFD8D2',
        'beige': '#F7F3EF',
        'crema': '#FCFAF7',
        'gris': '#817C77',
        'rosa': '#E4CFCB',
      },
    },
  },
  plugins: [],
};

export default config;
