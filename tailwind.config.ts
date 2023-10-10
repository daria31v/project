
import type { Config } from 'tailwindcss'
// module.exports = {
//   darkMode: '',
//   // ...
// }
const config: Config = {
  content: [
    './src/blog/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/gallery/**/*.{js,ts,jsx,tsx,mdx}',
    './src/partners/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
