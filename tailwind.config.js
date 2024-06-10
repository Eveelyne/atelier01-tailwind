/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#4f46e5',
      'pink': '#ff49db',
      'rouille': '#ff7849',
      'white': '#fff',
      'bleu-fonce': '#111827'
    },
    fontFamily: {
      'sans' : ['Poppins', 'sans-serif', ],
      'serif' : ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

