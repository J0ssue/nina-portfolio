module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx,}"],
  theme: {
    extend: {
      colors: {
        "n-cyan": "#5fb4a2",
        "n-dark-blue": "#203a4c",
        "n-grayish": "#33323d",
        "n-light-gray": "#fafafa",
        "n-gray": "#eaeaeb",
        "n-red": "#f43030",
      },
      fontFamily: {
        ninaBold: ["NinaBold"],
        ninaRegular: ["NinaMedium"],
        ninaSansRegular: ["NinaSansMedium"],
        ninaBrandRegular: ["NinaBrandRegular"],
        ninaPublicSans: ["NinaPublicSans"],
      },
      fontSize: {
        "large-title": "50px",
        "medium-title": "42px",
        "medium-title-sm": "40px",
        "small-title": "36px",
        "small-title-sm": "32px",
        "body-1": "30px",
        "body-2": "26px",
        "body-1-sm": "16px",
        "body-2-sm": "15px",
        brand: "28px",
      },
    },
  },
  plugins: [],
};
