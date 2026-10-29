/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#102B46',
          'navy-dark': '#0A1E32',
          'navy-light': '#1C3B5E',
          blue: '#0C5BAA',
          'blue-royal': '#1769AA',
          'blue-light': '#EAF3FB',
          'blue-soft': '#F0F6FC',
          orange: '#EC853B',
          'orange-warm': '#F27A1A',
          'orange-light': '#FFF7ED',
          gold: '#F4B942',
          'gold-amber': '#F59E0B',
          dark: '#203047',
          charcoal: '#1E293B',
          surface: '#F7F9FC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 43, 70, 0.07), 0 2px 6px -2px rgba(16, 43, 70, 0.04)',
        'card-hover': '0 16px 36px -4px rgba(16, 43, 70, 0.14), 0 4px 12px -2px rgba(16, 43, 70, 0.06)',
        'cta-blue': '0 10px 25px -4px rgba(12, 91, 170, 0.35)',
        'cta-orange': '0 10px 25px -4px rgba(236, 133, 59, 0.4)',
      },
      backgroundImage: {
        'gradient-logo': 'linear-gradient(135deg, #0C5BAA 0%, #1769AA 50%, #EC853B 100%)',
        'gradient-road': 'linear-gradient(180deg, #0C5BAA 0%, #1769AA 60%, #EC853B 100%)',
        'gradient-navy': 'linear-gradient(145deg, #102B46 0%, #0A1E32 100%)',
        'gradient-warm': 'linear-gradient(135deg, #EC853B 0%, #F59E0B 100%)',
      },
    },
  },
  plugins: [],
}
