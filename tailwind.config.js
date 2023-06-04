/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.75rem /*12px*/", //12px
        xs: "0.875rem /*14px*/", //14px
        s: "1rem /*16px*/", //16px
        m: "1.125rem /*18px*/", //18px
        l: "1.25rem /*20px*/", //20px
        xl: "1.375rem /*22px*/", //22px
        xxl: "1.5rem /*24px*/", //24px
        "2l": "1.625rem /*26px*/", //26px
        "3l": "1.75rem /*28px*/", //28px
        "4l": "1.875rem /*30px*/", //30px
        "5l": "2rem /*32px*/", //32px
        "6l": "2.125rem /*34px*/", //34px
        "7l": "2.25rem /*36px*/", //36px
        "8l": "2.5rem /*40px*/", //40px
        "9l": "2.625rem /*42px*/", //42px
        "10l": "2.875rem /*46px*/", //46px
        "11l": "3rem /*48px*/", //48px
      },
      boxShadow: {
        custom: "0px 3px 6px #AEAEAE29",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: {
          DEFAULT: "#55588B",
          90: "#666CFF",
          80: "#2A7AE9",
          70: "#6EABFF",
          60: "#B4D3FF",
          50: "#F1F4FF",
        },
        secondary: {
          DEFAULT: "#000C1C",
          80: "#505050",
          70: "#6B7280",
          60: "#E6E6E6",
          50: "#F6F6F6",
          40: "#ABABAB",
        },
        green: {
          DEFAULT: "#00B10C",
          20: "#F2FFF3",
        },
        orange: {
          DEFAULT: "#FF9900",
          20: "#FFF7EC",
        },
        red: {
          DEFAULT: "#EC0048",
          20: "#FFEBF1",
        },
        blue: {
          DEFAULT: "#00C1C8",
          20: "#EFFEFF",
        },
        purple: {
          DEFAULT: "#8332F5",
          20: "#3374EA",
        },
      },
    },
  },
  plugins: [],
};
