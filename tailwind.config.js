module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-red-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-gray-500",
      "bg-purple-500",
      "bg-indigo-500",
      "bg-blue-500",
      "bg-pink-500",
      "bg-red-400",
      "bg-green-400",
      "bg-yellow-400",
      "bg-gray-400",
      "bg-purple-400",
      "bg-indigo-400",
      "bg-blue-400",
      "bg-pink-400",
      "bg-red-100",
      "bg-green-100",
      "bg-yellow-100",
      "bg-gray-100",
      "bg-purple-100",
      "bg-indigo-100",
      "bg-blue-100",
      "bg-pink-100",
      "bg-red-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-gray-200",
      "bg-purple-200",
      "bg-indigo-200",
      "bg-blue-200",
      "bg-pink-200",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
