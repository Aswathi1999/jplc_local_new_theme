/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // New brand colors
        primary: '#2F43B7',
        secondary: '#4056D6',
        'brand-blue': '#2F43B7',
        'secondary-blue': '#4056D6',
        'dark-navy': '#0F172A',
        'light-gray': '#E5E7EB',
        'soft-bg': '#F8FAFC',
        // Legacy (kept for backward compat)
        'matte-black': '#0D0D0D',
        maroon: '#0F172A',
        'warm-beige': '#F8FAFC',
      },
      fontFamily: {
        serif: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
