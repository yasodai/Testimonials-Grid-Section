// const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "barlow-semi-condensed": ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        violet: {
          Moderate: `hsl(263, 55%, 52%)`,
        },
        gray: {
          Light: `hsl(0, 0%, 81%)`,
        },
        blue: {
          "dark-grayish": `hsl(217, 19%, 35%)`,
          "dark-blackish": `hsl(219, 29%, 14%)`,
          "Light-grayish": `hsl(210, 46%, 95%)`,
        },
      },
    },
  },
  plugins: [],
};
