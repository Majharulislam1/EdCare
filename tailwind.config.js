/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',


        'md': '768px',


        'lg': '1024px',


        'xl': '1280px',

    },
    colors: {
      primary: '#07a698',
      secondary: '#f2f3f5',
      title:'#3e425c',
      paragraph:'#6c706f'
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}