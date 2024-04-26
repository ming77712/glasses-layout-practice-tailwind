/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '992px',
      'xl': '1320px',
    },
    container: {
      center: true,
      padding: '0.75rem',
    },
    fontFamily: {
      sans: ['Roboto', 'Noto Sans TC', 'sans-serif'],
    },
    fontSize: {
      'sm': ['0.875rem', {
        lineHeight: '1.3125rem',
      }],
      'xl': ['1.25rem', {
        lineHeight: '1.875rem',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2.25rem',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '3.375rem',
      }],
      '5xl': ['3rem', {
        lineHeight: '4.5rem',
      }],
    },
    extend: {
      colors: {
        'primary': '#AA0601',
        'secondary': '#650300',
        'red': '#9F1213',
        'pink': '#FBF2F2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
