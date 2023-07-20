/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        '3xl': '1600px'
      },
      colors: {
        primary: '#0F0D0D',
        secondary: '#fdfdfd',
        tertiary: '#50A584',
        quaternary: '#1e90ff'
      },
      fontFamily: {
        sans: ['Monument Extended', 'sans-serif']
      },
      animation: {
        vibration: 'vibration 8s steps(10) infinite'
      },
      keyframes: {
        vibration: {
          '0%, 100%': { transform: 'translateX(1px, 1px)' },
          '10%': { transform: 'translateY(1px)' },
          '20%': { transform: 'translateY(-2px)' },
          '30%': { transform: 'translateY(1px)' },
          '40%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(1px)' },
          '60%': { transform: 'translateY(-2px)' },
          '70%': { transform: 'translateY(1px)' },
          '80%': { transform: 'translateY(-2px)' },
          '90%': { transform: 'translateY(1 px)' }
        }
      }
    },
    plugins: []
  }
}
