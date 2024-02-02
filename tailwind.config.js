module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_90": "#00000090",
          "900_87": "#00000087",
          "900_0f": "#0000000f",
          "900_ab": "#000000ab",
          "900_99": "#00000099",
        },
        red: { 200: "#f28f8f", 300: "#b16668" },
        light_blue: {
          A700_6c: "#058aff6c",
          A700_63_01: "#0082f463",
          A700: "#0082f4",
          A700_04: "#058aff",
          A700_03: "#0086fc",
          A700_63: "#0283f563",
          A700_02: "#0187fd",
          A700_01: "#0080fd",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#e0e0e0",
          400: "#c4c4c4",
          600: "#9e6767",
          700: "#874c4c",
          "200_01": "#f0f0f0",
          "400_01": "#c3c3c3",
        },
        blue_gray: { 700: "#455a64", 800: "#37474f", 900: "#263238" },
        indigo: { "500_dd": "#3936cedd", A400: "#3c61e1" },
        deep_orange: { 200: "#ffa8a7" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
      boxShadow: { bs: "0px 0px  7px 4px #0000000f" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#058aff,#3936cedd)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
