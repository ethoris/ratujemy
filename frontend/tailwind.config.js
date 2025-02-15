// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'brand-blue': '#1fb6ff',
        'brand-dark': '#1a202c',
        'bg-brand-blue': '#1fb6ff',
      },
    },
  },
  plugins: [],
}
