/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",'./app/**/*.{js,ts,jsx,tsx}',],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      lg_992: "992px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "1rem",
        lg: "45px",
        xl: "5rem",
        "2xl": "13rem",
      },
    },
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        alex: ['var(--font-alex)'],
        kaushan: ['var(--font-kaushan)'],
        pacifico: ['var(--font-pacifico)'],
        eb_garamond: ['var(--font-eb-garamond)'],
        workSans: ['var(--font-workSans)'],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        dark: "#3c4858",
        black: "#161c2d",
        "dark-footer": "#192132",
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        rose: {
          600: "#FF0077",
        },
      },

      boxShadow: {
        sm: "0 2px 4px 0 rgb(60 72 88 / 0.15)",
        DEFAULT: "0 0 3px rgb(60 72 88 / 0.15)",
        md: "0 5px 13px rgb(60 72 88 / 0.20)",
        lg: "0 10px 25px -3px rgb(60 72 88 / 0.15)",
        xl: "0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(60 72 88 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(60 72 88 / 0.05)",
        testi: "2px 2px 2px -1px rgb(60 72 88 / 0.15)",
      },

      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },

      maxWidth: ({ theme, breakpoints }) => ({
        1200: "71.25rem",
        992: "60rem",
        768: "45rem",
      }),

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
