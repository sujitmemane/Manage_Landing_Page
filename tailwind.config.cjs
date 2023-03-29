/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        brightRed: "hsl(12, 88%, 59%)",
        veryLightGray: " hsl(0, 0%, 98%)",
        brightRedSupLight:'hsl(13, 100%, 96%)',
        veryDarkBlue:' hsl(233, 12%, 13%)',
        verySuperLightRed:'hsl(13, 100%, 96%)'
        
      },
    },
  },
  plugins: [],
};
