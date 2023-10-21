/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "media",
  theme: {
   
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    // borderColor: ({ theme }) => ({
    //   ...theme("colors"),
    //   DEFAULT: theme("colors.gray.200", "currentColor"),
    // }),
    container: {
      width: '100%'},  
    colors: {
      primary: "#373F41",
      secondary: "#34688F",
      yellow: "#F6CA07",
      orange_light: "#EFA007",
      orange: "#F38605",
      duna: "#C25D05",
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      sm: ["10px", { lineHeight: '1.2' }],
      base: ["14px", { lineHeight: '1.28' }],
      medium: ["16px", { lineHeight: '1.5' }],
      ml: ["30px", { lineHeight: '1.2' }],
      xl: ["40px", { lineHeight: '0.8' }],
    },
    // margin: ({ theme }) => ({
    //   auto: 'auto',
    //   ...theme('spacing'),
    // }),
    section: {
    },
    // screens: {
    //   sm: '320px',
    //   md: '768px',
    //   xl: '1280px',
    
    // },
    extend: {
      fontFamily: {
        general: ['Mulish', 'sans-serif'],
        text: ['Noto_Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
