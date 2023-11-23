/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd",
      ],
      borderColor: [
        "dark",
        "dark-focus",
        "dark-focus-within",
        "dark-hover",
        "dark-group-hover",
        "dark-focus-within",
        "dark-odd",
      ],
      textColor: ["dark", "dark-hover", "dark-active"],
    },
  },
  plugins: [],
};
