/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#DEE8E0',
        periwinkle: '#757BC0',
        plum: '#462F64',
        aubergine: '#2C1E28',
        silverpine: '#A2AAA9',
        'custom-purple-600': '#D7D4DF',
        'custom-purple-800': '#4D386A',
        'collection-btn-grey': '#89898B',
        orange: '#FF6C19',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(to bottom, #462F64, #757BC0, #DEE8E0)',
        'btn-gradient': 'linear-gradient(to bottom, #462F64, #757BC0, #DEE8E0)',
        'active-card-btn-gradient':
          'linear-gradient(to bottom, #E0EFF2, #9EA2AA, #322929)',
        'inactive-card-btn-gradient':
          'linear-gradient(to bottom, #E0EFF2, #5C5663, #322929)',

        'site-gradient': 'linear-gradient(to bottom, #2C1E28, #A2AAA9)',
        'profile-content': 'linear-gradient(to bottom, #5C5663, #120A19)',
        filter: 'rgba(50, 41, 41, 0.8)',
        'collection-btn':
          'linear-gradient(to bottom, #FF9A61, rgba(86, 87, 108, 0.8))',
        'profile-background': "url('./assets/profile-background-img.png')",
        'profile-background-desktop':
          "url('./assets/profile-background-imgDesktop.webp')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
