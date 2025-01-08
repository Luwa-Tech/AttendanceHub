/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../packages/*/src/**/*.{vue,js,ts,jsx,tsx}",
    "../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FFFFFF',
          600: '#000000',
          700: '#E6E6FA'
        },
        secondary: {
          400: '#2A2AD1',
          500: '#4D4DDB',
          600: '#17175cb3',
          700: '#0000007d',
        },
        button: {
          400: "#1E1E1E"
        },
      },
    },
  },
  plugins: [],
})