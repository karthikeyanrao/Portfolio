/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep space backgrounds
        background: '#0a0a0f',
        'background-secondary': '#0f0f14',
        'background-tertiary': '#14141a',

        // Refined neon accents
        'neon-cyan': '#00d9ff',
        'neon-purple': '#a855f7',
        'neon-green': '#00ff88',

        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#e5e7eb',
        'text-muted': '#9ca3af',
        'text-dim': '#6b7280',

        // Legacy support (keeping old names for compatibility)
        'neon-blue': '#00d9ff',
        secondary: '#0f0f14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
