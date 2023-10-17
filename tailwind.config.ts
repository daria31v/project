
import type { Config } from 'tailwindcss'
// module.exports = {
//   darkMode: '',
//   // ...
// }
const config: Config = {
  content: [
    './src//**/*.{js,ts,jsx,tsx,mdx}'   
  ],
  
  theme: {
    screens: {},
    colors: {
      blue: '#34688F',
      yellow: '#F6CA07',
      ligth_orange: '#EFA007',
      orange: '#F38605',
      duna: '#C25D05',
      black: '#373F41'
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',      
    },
    fontSize: {
      sm: ['10px', '12px'],
      base: ['14px', '18px'],
      medium: ['16px', '24px'],
      ml: ['30px', '36px'],
      xl: ['40px', '32px']      
    },
    extend: {
      fontFamily: {
      sans: ['Mulish', 'sans'],
      mono: ['News Cycle', 'mono'],
    },
    },
  },
  plugins: [],
}
export default config
