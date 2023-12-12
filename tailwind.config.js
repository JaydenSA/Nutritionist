/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green-70': '#CBEA7B',
        'green-75': '#D3EE91',
        'green-80': '#DCF1A7',
        'green-85': '#E5F5BD',
        'green-90': '#EEF8D3',
        'green-95': '#F6FBE9',
        'green-97': '#FAFDF2',
        'green-99': '#FDFEFB',

        'dark-green-15': '#1A3129',
        'dark-green-20': '#234338',
        'dark-green-25': '#2C5446',
        'dark-green-30': '#346454',
        'dark-green-40': '#468671',
        'dark-green-60': '#79B9A4',
        'dark-green-80': '#BCDCD1',
        'dark-green-90': '#DDEDE8',

        'gray-10': '#191919',
        'gray-15': '#262626',
        'gray-20': '#333333',
        'gray-30': '#4C4C4D',
        'gray-35': '#59595A',
        'gray-40': '#656567',
        'gray-60': '#98989A',
        'gray-90': '#E6E6E6',
        'gray-95': '#F2F2F2',
        'gray-97': '#F7F7F7',
        'gray-99': '#FCFCFC',
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      screens: {
        'mobile': '390px',  
        'laptop': '1440px',  
        'desktop': '1920px',
      },
    },
  },
  plugins: [],
}
