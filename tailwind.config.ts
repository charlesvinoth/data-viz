import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F8FF',
          100: '#DBEEFF',
          200: '#B3DAFF',
          300: '#80C1FF',
          400: '#3DA1FF',
          500: '#0072DE',
          600: '#0067C7',
          700: '#005AAD',
          800: '#004A8F',
          900: '#003261',
          950: '#00284D',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          150: '#ECEDF0',
          200: '#E5E7EB',
          250: '#DBDEE3',
          300: '#D1D5DB',
          350: '#B6BCC5',
          400: '#9CA3AF',
          450: '#838A97',
          500: '#6B7280',
          550: '#5B6371',
          600: '#4B5563',
          650: '#414b5A',
          700: '#374151',
          750: '#2B3544',
          800: '#1F2937',
          850: '#18202F',
          900: '#111827',
          950: '#030712',
        },
        success: colors.green,
        warning: colors.amber,
        error: colors.red,
      },
      fontFamily: {
        bungee: ['Bungee', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
} satisfies Config
