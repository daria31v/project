/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src//**/*.{js,ts,jsx,tsx,mdx}'],
  // darkMode: "class",
  theme: {
    colors: {
      primary: '#373F41',
      secondary: '#265539',
      green_light: '#2655398C',
      yellow: '#F6CA07',
      yellow_light: '#F7C86F',
      orange: '#F38605',
      orange_light: '#EFA0077E',
      duna: '#C25D05',
      nude: '#ECAE81',
      white: '#fff',
      main_title: '#f2f2f2d1',
      main_text: '#F0E3D2',
      peach: '#FFE9D9B0',
      peach_light: '#FFE9D9AB',
      pink: '#ECAE81',
      grey: '#E7EFFD',
      grey_text: '#808080',
      error: '#ff2424',

    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extra_bold: '800',
    },
    fontSize: {
      xs: ['10px', { lineHeight: '1.2' }],
      small: ['11px', { lineHeight: '3.2' }],
      base: ['14px', { lineHeight: '1.28' }],
      medium: ['16px', { lineHeight: '1.5' }],
      sm: ['20px', { lineHeight: '1' }],
      md: ['28px', { lineHeight: '1.28' }],
      ml: ['30px', { lineHeight: '1.2' }],
      l: ['36px', { lineHeight: '1.28' }],
      xl: ['40px', { lineHeight: '0.8' }],
      xxl: ['60px', { lineHeight: '0.8' }],
      extra: ['95px', { lineHeight: '0.8' }],
    },
    fontFamily: {
      main: ['Mulish', 'sans-serif'],
      extra: ['Belleza', 'sans-serif']
    },
    letterSpacing: {
      tightest: '-1.2px',
      tighter: '-0.8px',
      tight: '-0.4px',
      normal: '0',
      wide: '0.4px',
      wider: '0.7px',
      widest: '1.6px',
      widester: '4px',
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.webp')",
        'section-texture': "url('/images/texture.webp')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        
      }
    },
  },
  plugins: [],
}
