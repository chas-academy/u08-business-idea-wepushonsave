/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        footer: '#21162F',
        mint: '#DEE8E0',
        periwinkle: '#757BC0',
        plum: '#462F64',
        aubergine: '#2C1E28',
        silverpine: '#A2AAA9',
        textcommon: '#000000',
        textuncommon: '#5BB1F1',
        textrare: '#E3B217',
        textmythic: '#E86100',
        'custom-purple-600': '#D7D4DF',
        'custom-purple-800': '#4D386A',
        'collection-btn-grey': '#89898B',
        orange: '#FF6C19',
      },
      backgroundImage: {
        'search-gradient': 'linear-gradient(to bottom, #322929, #51435E)',
        'nav-gradient': 'linear-gradient(to bottom, #462F64, #757BC0, #DEE8E0)',
        'btn-gradient': 'linear-gradient(to bottom, #462F64, #757BC0, #DEE8E0)',
        'active-card-btn-gradient':
          'linear-gradient(to bottom, #E0EFF2, #9EA2AA, #322929)',
        'inactive-card-btn-gradient':
          'linear-gradient(to bottom, #E0EFF2, #5C5663, #322929)',
        'profile-background': "url('./assets/profile-background-img.png')",
        'profile-background-desktop':
          "url('./assets/profile-background-imgDesktop.webp')",
        'list-card-background':
          'linear-gradient(180deg, rgba(50,41,41,1) 14%, rgba(81,67,94,1) 100%)',
        'site-gradient': 'linear-gradient(to bottom,  #462F64, #21162F)',
        'profile-content': 'linear-gradient(to bottom, #5C5663, #120A19)',
        'mobile-search': "url('/src/assets/mobile-hero.png')",
        'desktop-search': "url('/src/assets/desktop-hero.png')",
        filter: 'rgba(50, 41, 41, 0.8)',
      },
      fill: {
        common: '#000000',
        uncommon: '#5BB1F1',
        rare: '#E3B217',
        mythic: '#E86100',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollSnapType: true,
    scrollSnapAlign: true,
    scrollSnapStop: true,
  },
};
