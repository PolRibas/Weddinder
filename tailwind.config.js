/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    variants: {
      extend: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        display: ['responsive', 'group-hover'],
      },
    },
    // screens: {
    //   tablet: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   laptop: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      keyframes: {
        "collapse-open": {
          "0%": { height: "0px" },
          "100%": { height: "var(--radix-collapsible-content-height)" },
        },
        "collapse-close": {
          "0%": { height: "var(--radix-collapsible-content-height)" },
          "100%": { height: "0px" },
        },
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        "collapse-open": "collapse-open 0.7s cubic-bezier(0.77, 0, 0.175, 1)",
        "collapse-close": "collapse-close 0.7s cubic-bezier(0.77, 0, 0.175, 1)",
        scaleIn: "scaleIn 200ms cubic-bezier(0.77, 0, 0.175, 1)",
        scaleOut: "scaleOut 200ms cubic-bezier(0.77, 0, 0.175, 1)",
        fadeIn: "fadeIn 200ms cubic-bezier(0.77, 0, 0.175, 1)",
        fadeOut: "fadeOut 200ms cubic-bezier(0.77, 0, 0.175, 1)",
        enterFromLeft: "enterFromLeft 250ms cubic-bezier(0.77, 0, 0.175, 1)",
        enterFromRight: "enterFromRight 250ms cubic-bezier(0.77, 0, 0.175, 1)",
        exitToLeft: "exitToLeft 250ms cubic-bezier(0.77, 0, 0.175, 1)",
        exitToRight: "exitToRight 250ms cubic-bezier(0.77, 0, 0.175, 1)",
      },
      fontFamily: {
        sans: ["var(--montserrat-font)"],
      },
      colors: {
        primary: "#FF855F",
        secondary: "#5B4B9D",
        tertiary: "#E6F0AC",
        black: "#282828",
        light: "#9A9A9A",
        medium: "#818181",
        feedback: {
          error: "#B64D34",
          warning: "#C9A81C",
          info: "#56C0ED",
          success: "#459A33",
        },
        corporateOrange: {
          100: "#FFECDA",
          150: "#FFD4AD",
          200: "#FFC692",
          250: "#FFB774",
          300: "#FFA756",
          350: "#FF9533",
          400: "#F9811E",
          500: "#DB6603",
          600: "#DB6504",
          700: "#AD5300",
          800: "#7B4201",
          900: "#1A0E00",
        },
        corporateGreen: {
          50: "#E4FFF2",
          100: "#C9F2DE",
          150: "#ABEDCD",
          200: "#85DFB4",
          250: "#47C98B",
          300: "#25AC6B",
          350: "#139556",
          400: "#027C41",
          450: "#006334",
          500: "#004725",
        },
        corporateBlue: {
          50: "#EEF2FF",
          100: "#BACAFF",
          150: "#85A1FF",
          200: "#5177FF",
          250: "#1C4DFF",
          300: "#0626DE",
          350: "#000EBD",
          400: "#00019C",
          450: "#08007A",
          500: "#0C0059",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "0px 14.9238px 20.7275px rgba(143, 168, 191, 0.3)",
        images: "0px 2px 7px 13px rgba(143, 168, 191, 0.1)",
        content: "0px 18px 25px 0px rgba(143, 168, 191, 0.3)",
      },
      maxWidth: {
        container: "100vw",
      },
    },
  },
  plugins: [],
};
