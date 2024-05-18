/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray-800': '#51435E',
        'custom-gray-600': '#827C81',
        'custom-purple-600': '#D7D4DF',
        'custom-purple-800': '#4D386A',
        customGradientStart: '#462F64',
        customGradientMiddle: '#757BC0',
        customGradientEnd: '#DEE8E0',
      },
      theme: {
        'custom-gradient':
          'linear-gradient(to bottom, #462F64, #757BC0, #DEE8E0)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
