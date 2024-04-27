import defaultConfig from 'tailwindcss/defaultConfig';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik Variable', 'sans-serif', ...defaultConfig.theme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
