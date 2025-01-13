/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'recent-cascad': "url('https://static.canva.com/web/images/e733916c4616f5baa19098cc2844369b.jpg')",
      },
      colors: {
        primary: {
          a:"#161D6F",
          b:"#0B2F9F",
          c: "#0B4DC9",
        },
        secondary: "#1E38A9",
        tertiary: {
          a: "#FFFFFF",
          b: "#EDECEC",
          c: "#A5A5A5",
        }
      },
      fontFamily: {
        DynaPuff: ["DynaPuff", "serif"],
        sourGummy: ["Sour Gummy", "sans-serif"]
      },
      letterSpacing: {
        widest: '0.2em',
        widesest:'2rem' // Adjust this value to make it wider
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        swipe: {
          '0%,100%':{transform:'translateX(0)'},
          '50%': { transform: 'translateX(-70%)' },
        },
        stretch: {
          '0%, 100%': { letterSpacing: '0rem' },
          '50%': { letterSpacing: '0.2rem' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        swipe: 'swipe 10s linear infinite',
        stretch: 'stretch 5s infinite',
      },
    },
  },
  plugins: [],
};
