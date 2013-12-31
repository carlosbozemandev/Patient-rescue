/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      base: "240px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
  // this Preflight False because we want ant base style
  corePlugins: {
    preflight: false,
  },
};
