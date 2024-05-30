export interface ManaSymbol {
    symbol: string;
    imageUrl: string;
    description: string;
  }
  
  const manaSymbols: ManaSymbol[] = [
  // Tap and Untap
  {
    symbol: '{T}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/T.svg',
    description: 'Tap this permanent',
  },
  {
    symbol: '{Q}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/Q.svg',
    description: 'Untap this permanent',
  },
  // Counters
  {
    symbol: '{E}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/E.svg',
    description: 'An energy counter',
  },
  {
    symbol: '{PW}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/PW.svg',
    description: 'Planeswalker',
  },
  {
    symbol: '{CHAOS}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/CHAOS.svg',
    description: 'Chaos',
  },
  {
    symbol: '{A}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/A.svg',
    description: 'An acorn counter',
  },
  {
    symbol: '{TK}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/TK.svg',
    description: 'A ticket counter',
  },
  // Generic Mana
  {
    symbol: '{X}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/X.svg',
    description: 'X generic mana',
  },
  {
    symbol: '{Y}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/Y.svg',
    description: 'Y generic mana',
  },
  {
    symbol: '{Z}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/Z.svg',
    description: 'Z generic mana',
  },
  {
    symbol: '{0}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/0.svg',
    description: 'Zero mana',
  },
  {
    symbol: '{½}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/½.svg',
    description: 'One-half generic mana',
  },
  {
    symbol: '{1}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/1.svg',
    description: 'One generic mana',
  },
  {
    symbol: '{2}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/2.svg',
    description: 'Two generic mana',
  },
  {
    symbol: '{3}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/3.svg',
    description: 'Three generic mana',
  },
  {
    symbol: '{4}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/4.svg',
    description: 'Four generic mana',
  },
  {
    symbol: '{5}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/5.svg',
    description: 'Five generic mana',
  },
  {
    symbol: '{6}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/6.svg',
    description: 'Six generic mana',
  },
  {
    symbol: '{7}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/7.svg',
    description: 'Seven generic mana',
  },
  {
    symbol: '{8}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/8.svg',
    description: 'Eight generic mana',
  },
  {
    symbol: '{9}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/9.svg',
    description: 'Nine generic mana',
  },
  {
    symbol: '{10}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/10.svg',
    description: 'Ten generic mana',
  },
  {
    symbol: '{11}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/11.svg',
    description: 'Eleven generic mana',
  },
  {
    symbol: '{12}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/12.svg',
    description: 'Twelve generic mana',
  },
  {
    symbol: '{13}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/13.svg',
    description: 'Thirteen generic mana',
  },
  {
    symbol: '{14}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/14.svg',
    description: 'Fourteen generic mana',
  },
  {
    symbol: '{15}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/15.svg',
    description: 'Fifteen generic mana',
  },
  {
    symbol: '{16}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/16.svg',
    description: 'Sixteen generic mana',
  },
  {
    symbol: '{17}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/17.svg',
    description: 'Seventeen generic mana',
  },
  {
    symbol: '{18}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/18.svg',
    description: 'Eighteen generic mana',
  },
  {
    symbol: '{19}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/19.svg',
    description: 'Nineteen generic mana',
  },
  {
    symbol: '{20}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/20.svg',
    description: 'Twenty generic mana',
  },
  {
    symbol: '{100}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/100.svg',
    description: 'One hundred generic mana',
  },
  {
    symbol: '{1000000}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/1000000.svg',
    description: 'One million generic mana',
  },
  {
    symbol: '{∞}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/∞.svg',
    description: 'Infinite generic mana',
  },
  // Hybrid Mana
  {
    symbol: '{W/U}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/WU.svg',
    description: 'One white or blue mana',
  },
  {
    symbol: '{W/B}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/WB.svg',
    description: 'One white or black mana',
  },
  {
    symbol: '{B/R}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/BR.svg',
    description: 'One black or red mana',
  },
  {
    symbol: '{B/G}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/BG.svg',
    description: 'One black or green mana',
  },
  {
    symbol: '{U/B}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/UB.svg',
    description: 'One blue or black mana',
  },
  {
    symbol: '{U/R}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/UR.svg',
    description: 'One blue or red mana',
  },
  {
    symbol: '{R/G}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/RG.svg',
    description: 'One red or green mana',
  },
  {
    symbol: '{R/W}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/RW.svg',
    description: 'One red or white mana',
  },
  {
    symbol: '{G/W}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/GW.svg',
    description: 'One green or white mana',
  },
  {
    symbol: '{G/U}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/GU.svg',
    description: 'One green or blue mana',
  },
  // Phyrexian Mana
  {
    symbol: '{B/G/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/BGP.svg',
    description: 'One black mana, one green mana, or 2 life',
  },
  {
    symbol: '{B/R/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/BRP.svg',
    description: 'One black mana, one red mana, or 2 life',
  },
  {
    symbol: '{G/U/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/GUP.svg',
    description: 'One green mana, one blue mana, or 2 life',
  },
  {
    symbol: '{G/W/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/GWP.svg',
    description: 'One green mana, one white mana, or 2 life',
  },
  {
    symbol: '{R/G/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/RGP.svg',
    description: 'One red mana, one green mana, or 2 life',
  },
  {
    symbol: '{R/W/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/RWP.svg',
    description: 'One red mana, one white mana, or 2 life',
  },
  {
    symbol: '{U/B/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/UBP.svg',
    description: 'One blue mana, one black mana, or 2 life',
  },
  {
    symbol: '{U/R/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/URP.svg',
    description: 'One blue mana, one red mana, or 2 life',
  },
  {
    symbol: '{W/B/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/WBP.svg',
    description: 'One white mana, one black mana, or 2 life',
  },
  {
    symbol: '{W/U/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/WUP.svg',
    description: 'One white mana, one blue mana, or 2 life',
  },
  {
    symbol: '{C/W}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/CW.svg',
    description: 'One colorless mana or one white mana',
  },
  {
    symbol: '{C/U}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/CU.svg',
    description: 'One colorless mana or one blue mana',
  },
  {
    symbol: '{C/B}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/CB.svg',
    description: 'One colorless mana or one black mana',
  },
  {
    symbol: '{C/R}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/CR.svg',
    description: 'One colorless mana or one red mana',
  },
  {
    symbol: '{C/G}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/CG.svg',
    description: 'One colorless mana or one green mana',
  },
  {
    symbol: '{2/W}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/2W.svg',
    description: 'Two generic mana or one white mana',
  },
  {
    symbol: '{2/U}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/2U.svg',
    description: 'Two generic mana or one blue mana',
  },
  {
    symbol: '{2/B}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/2B.svg',
    description: 'Two generic mana or one black mana',
  },
  {
    symbol: '{2/R}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/2R.svg',
    description: 'Two generic mana or one red mana',
  },
  {
    symbol: '{2/G}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/2G.svg',
    description: 'Two generic mana or one green mana',
  },
  {
    symbol: '{P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/P.svg',
    description: 'One colored mana or two life',
  },
  {
    symbol: '{W/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/WP.svg',
    description: 'One white mana or two life',
  },
  {
    symbol: '{U/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/UP.svg',
    description: 'One blue mana or two life',
  },
  {
    symbol: '{B/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/BP.svg',
    description: 'One black mana or two life',
  },
  {
    symbol: '{R/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/RP.svg',
    description: 'One red mana or two life',
  },
  {
    symbol: '{G/P}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/GP.svg',
    description: 'One green mana or two life',
  },
  {
    symbol: '{HW}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/HW.svg',
    description: 'One-half white mana',
  },
  {
    symbol: '{HR}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/HR.svg',
    description: 'One-half red mana',
  },
  {
    symbol: '{W}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/W.svg',
    description: 'One white mana',
  },
  {
    symbol: '{U}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/U.svg',
    description: 'One blue mana',
  },
  {
    symbol: '{B}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/B.svg',
    description: 'One black mana',
  },
  {
    symbol: '{R}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/R.svg',
    description: 'One red mana',
  },
  {
    symbol: '{G}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/G.svg',
    description: 'One green mana',
  },
  {
    symbol: '{C}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/C.svg',
    description: 'One colorless mana',
  },
  {
    symbol: '{S}',
    imageUrl: 'https://svgs.scryfall.io/card-symbols/S.svg',
    description: 'One snow mana',
  },
];

export default manaSymbols;