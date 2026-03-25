/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        prixClipFix: {
          '0%': {
            clipPath: 'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)',
          },
          '25%': {
            clipPath: 'polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)',
          },
          '50%': {
            clipPath:
              'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)',
          },
          '75%': {
            clipPath:
              'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)',
          },
          '100%': {
            clipPath:
              'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)',
          },
        },
      },
      animation: {
        rotate: 'rotate 1s linear infinite',
        rotateReverse: 'rotate 0.5s linear infinite reverse',
        prixClipFix: 'prixClipFix 2s linear infinite',
      },
    },
  },
  plugins: [],
};