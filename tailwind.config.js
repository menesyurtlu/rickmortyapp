import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mirage': {
          '50': '#f4f6fb',
          '100': '#e8ecf6',
          '200': '#ccd8eb',
          '300': '#9fb7da',
          '400': '#6c92c4',
          '500': '#4974ae',
          '600': '#375b92',
          '700': '#2e4a76',
          '800': '#294063',
          '900': '#273753',
          '950': '#121927',
        },
      },
    },
  },
  plugins: [],
}

