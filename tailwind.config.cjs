/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "8/10": "80%",
        "4/9": "47%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      colors: {
        customGreen: "rgb(181, 158, 34)",
        customGreen2: "rgb(212, 186, 39)",
        customYellow: "rgba(181, 141, 38, 0.733)",
        customBeige: "#f1f1e6",
      },
      width: {
        "5screen": "500vw",
      },
      left: {
        "100vw": "1536px",
      },
      backgroundImage: {
        star: "url('./assets/img/stars.png')",
        twinkling: "url('./assets/img/twinkling.png')",
        earth: "url('./assets/img/earth.png')",
        landingIntroImg: "url('./assets/img/landingIntro.jpg')",
        enrollImg: "url('./assets/img/enroll.png')",
        newsImg: "url('./assets/img/news.jpg')",
      },
      keyframes: {
        moveForwardRight: {
          "0%, 100%": { transform: "translateX(0) rotate(-45deg)" },
          "50%": { transform: "translateX(0) rotate(0deg)" },
          "100%": { transform: "translateX(8rem) rotate(0deg)" },
        },
        moveForwardLeft: {
          "0%, 100%": { transform: "translateX(0) rotate(45deg)" },
          "50%": { transform: "translateX(0) rotate(0deg)" },
          "100%": { transform: "translateX(-8rem) rotate(0deg)" },
        },
        rotateEarth1: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "719px 0",
          },
        },
        rotateEarth2: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "100%",
          },
        },
        moveTwinkBack: {},
        rotation: {
          "0%, 100%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
          },
        },
      },
      animation: {
        moveForwardRight: "moveForwardRight 3s ease-in-out forwards",
        moveForwardLeft: "moveForwardLeft 3s ease-in-out forwards",
        moveTwinkBack: "wiggle 1s ease-in-out infinite",
        rotateEarth1: "rotateEarth1 24s linear infinite",
        rotateEarth2: "rotateEarth2 24s linear infinite",
        rotation: "rotation 7s linear infinite ",
      },
    },
    boxShadow: {
      customShadow: "0 0 40px 0 rgba(255,255,255,0.5) inset",
    },
    plugins: [],
  },
};

/**  @keyframes anim1{
        0%{
          transform:rotateZ(0deg);
        }100%{
          transform:rotateZ(360deg);
        }
      }*/
