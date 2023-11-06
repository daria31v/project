/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//**/*.{js,ts,jsx,tsx,mdx}"],
  // darkMode: "class",
  theme: {
    colors: {
      'primary': "#373F41",
      'secondary': "#34688F",
      'yellow': "#F6CA07",
      'orange_light': "#EFA007",
      'orange': "#F38605",
      'duna': "#C25D05",
      'white': "#fff",
      'bg-white': "#F3F6FA"
    },
    fontWeight: {
      'normal': '400',
      'semibold': '600',
      'bold': '700',
    },
    fontSize: {
      'sm': ["10px", { lineHeight: '1.2' }],
      'base': ["14px", { lineHeight: '1.28' }],
      'medium': ["16px", { lineHeight: '1.5' }],
      'ml': ["30px", { lineHeight: '1.2' }],
      'xl': ["40px", { lineHeight: '0.8' }],
    },
    extend: {
      fontFamily: {
        'main': ['Mulish', 'sans-serif'],
        'extra': ['Noto_Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
