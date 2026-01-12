/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'noto-bold': ['NotoSerif-Bold', 'serif'],
        'noto-semibold': ['NotoSerif-SemiBold', 'serif'],
        'noto-medium': ['NotoSerif-Medium', 'serif'],
        'noto-regular': ['NotoSerif-Regular', 'serif'],
        'noto-light': ['NotoSerif-Light', 'serif'],
      },
    },
  },
  plugins: [],
}
