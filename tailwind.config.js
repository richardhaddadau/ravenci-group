/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["abril-display", "serif"],
        sans: ["europa", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1e1e1e",
        },
        secondary: {
          DEFAULT: "#dbdbdb",
        },
      },
      width: {
        windowed: "1200px",
      },
    },
  },
  plugins: [],
};