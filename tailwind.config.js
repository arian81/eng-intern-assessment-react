/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
