/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/layout/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      primary: "'Roboto Slab', serif",
      secondary: "'Mali', cursive",
    },
    extend: {
      colors: {
        'clr-1': '#AC3E31',
        'clr-2': '#DBAE58',
        'clr-3': '#20283E',
        'clr-4': '#488A99',
        'clr-5': '#484848 ',
        'clr-6': '#ACE',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
