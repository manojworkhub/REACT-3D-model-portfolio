/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xxxs: "320px",
        landscapeS: "360px",
        xxs: "375px",
        xsx: "414px",
        xs: "450px",
        s: "480px",
        landscapeXM: "533px",
        landscapeM: "568px",
        xxxmd: "667px",
        xxmd: "684px",
        xmd: "734px",
        landscapeL: "896px",
        xlg: "991px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
