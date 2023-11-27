/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        josefin: "Josefin Sans",
        lexend: "Lexend",
        assistant: "Assistant",
        cabin: "Cabin",
        comfortaa: "Comfortaa",
        khula: "Khula",
        varela: "Varela Round",
      },
      backgroundImage: {
        escola: {
          url: "screen1.jpg",
        },
      },
    },
  },
  plugins: [],
};
