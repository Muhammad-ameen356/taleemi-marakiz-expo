/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        urdu: ["NotoNastaliqUrdu"],
      },
      colors: {
        colorLowBasic: "#e1e2e2",
        colorBasic: "#1d9fa3",
        colorPrimary: "#01696C",
        white: "white",
        black: "black",
        platinum: "#A9FEEC",
        gray: "gray",
        grayLow: "#d5d5d5",
        red: "red",
        lightRed: "#ffa8a8",
      },
    },
  },
  plugins: [],
};
