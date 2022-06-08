const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit", // this will enable Tailwind JIT compiler to make the build faster
  purge: ["./app/**/*.{ts,tsx}"], // Here we are going to tell Tailwind to use any .ts or .tsx file to purge the CSS
  darkMode: "media", // Use media queries for dark mode, customize it as you want
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      violet: colors.violet,
      orange: colors.orange,
      red: colors.red,
      rose: colors.rose,
      text: "hsl(0, 0%, 7%)",
    },
    extend: {
      scale: {
        101: "1.01",
      },
    },
  }, // customize the theme however you want here
  variants: {}, // activate any variant you want here
  plugins: [], // add any plugin you need here
};
