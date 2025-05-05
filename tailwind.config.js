/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        furia: {
          black: '#000000',
          gray: '#1A1A1A',
          lightgray: '#333333',
          white: '#FFFFFF',
        },
        chart: {
          blue: '#3B82F6',
          green: '#10B981',
          purple: '#8B5CF6',
          orange: '#F59E0B',
          red: '#EF4444',
          pink: '#EC4899',
          teal: '#14B8A6',
          yellow: '#FBBF24',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};