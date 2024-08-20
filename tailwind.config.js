/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#6366F1',
          50: '#FFFFFF',
          100: '#F9F9FE',
          200: '#D3D4FB',
          300: '#AEAFF8',
          400: '#888BF4',
          500: '#6366F1',
          600: '#3034EC',
          700: '#1317D1',
          800: '#0E119E',
          900: '#0A0C6A',
          950: '#070950'
        },
        'secondary': {
          DEFAULT: '#374151',
          50: '#8E9CB2',
          100: '#8191AA',
          200: '#697C99',
          300: '#586882',
          400: '#485569',
          500: '#374151',
          600: '#202630',
          700: '#0A0B0E',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
      }
    },
  },
  plugins: [],
}
