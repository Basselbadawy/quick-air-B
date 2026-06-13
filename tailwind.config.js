/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep Ocean Blue — primary text & buttons
        ocean:  { DEFAULT: '#0C4A6E', dark: '#082F49', soft: '#0369A1' },
        // Sky Blue — accents & light backgrounds
        sky2:   { DEFAULT: '#38BDF8', light: '#E0F2FE', soft: 'rgba(56,189,248,0.12)' },
        // Sunset Orange / Golden Yellow — prices, highlights, CTAs
        sunset: { DEFAULT: '#F97316', light: '#FB923C', gold: '#F59E0B', soft: 'rgba(249,115,22,0.12)' },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      animation: {
        'fade-down': 'fadeDown 0.55s ease both',
        'fade-up':   'fadeUp 0.5s ease both',
        shimmer:     'shimmer 1.5s infinite',
        float:       'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeDown: { from: { opacity: 0, transform: 'translateY(-16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeUp:   { from: { opacity: 0, transform: 'translateY(16px)'  }, to: { opacity: 1, transform: 'translateY(0)' } },
        shimmer:  { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
      },
    },
  },
  plugins: [],
}
