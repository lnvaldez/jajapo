/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // This tells Tailwind to look for classes in your EJS files
    "./public/**/*.{js,css}", // And in your public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
