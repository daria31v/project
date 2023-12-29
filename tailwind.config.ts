/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src//**/*.{js,ts,jsx,tsx,mdx}'],
  // darkMode: "class",
  theme: {
    colors: {
      primary: '#373F41',
      secondary: '#265539',
      yellow: '#F6CA07',
      yellow_light: '#F7C86F',
      orange_light: '#EFA007',
      orange: '#F38605',  
      nude: '#ECAE81',
      white: '#fff',
      main_title: 'text-slate-300',
      blue: '#3C64B1',
      blue_light: '#DBEAE7',
      blue_text: '#87A4DC',
      grey_text: '#9BADCE',
      error: '#C24141',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700',
      extra_bold:'800'
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
      xxl: ['95px', {lineHeight: '0.36'}]
    },
    fontFamily: {
      main: ['Mulish', 'sans-serif'],
      extra: ['Belleza', 'sans-serif'],

      // main_title: ['Raluka', 'sans-serif']
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
    extend: {},
  },
  plugins: [],
}
