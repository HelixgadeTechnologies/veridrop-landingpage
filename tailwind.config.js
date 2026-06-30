/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0A63A6', // Main Brand
          400: '#0786DA', // Hover & Gradient
          dark: '#111827', // Black - Primary Text
          DEFAULT: '#0A63A6',
        },
        secondary: {
          500: '#1BAFA8', // Success & Tracking
          300: '#7EBCCD', // Light UI
          DEFAULT: '#1BAFA8',
        },
        accent: {
          DEFAULT: '#1BAFA8',
          hover: '#0A63A6',
          light: '#7EBCCD',
        },
        danger: {
          DEFAULT: '#EF4444',
          light: 'rgba(239, 68, 68, 0.1)',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC', // keeping an off-white just in case
        },
        black: '#111827',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #0786DA 0%, #0A63A6 55%, #1BAFA8 100%)',
        'logo-gradient': 'linear-gradient(to right, #0786DA 0%, #1BAFA8 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 4px 12px rgba(27, 175, 168, 0.3)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-danger': 'pulseDanger 2s infinite',
        'pulse-primary': 'pulsePrimary 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDanger: {
          '0%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(239, 68, 68, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0)' },
        },
        pulsePrimary: {
          '0%': { boxShadow: '0 0 0 0 rgba(10, 99, 166, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(10, 99, 166, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(10, 99, 166, 0)' },
        }
      }
    },
  },
  plugins: [],
}
