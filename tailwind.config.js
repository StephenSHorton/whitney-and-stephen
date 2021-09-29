module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        bold: "0 0 4px 4px rgba(0, 0, 0, 0.2)",
        "inner-lg": "inset 0 0 4px 4px rgba(0, 0, 0, 0.2)",
      },
      scale: {
        80: ".80",
        85: ".85",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
