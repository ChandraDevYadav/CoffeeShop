/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caudex: ['Caudex', 'serif'],
      },
      keyframes: {
        // Custom fade-in animation
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Custom bounce animation
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // Marquee animation moving from right to left and back
        marqueeAlternate: {
          '0%': { transform: 'translateX(100%)' },    // Start from the right
          '50%': { transform: 'translateX(-100%)' },   // Move all the way to the left
          '100%': { transform: 'translateX(100%)' },   // Move back to the right
        },
      },
      animation: {
        // Using the defined keyframes
        'fade-in': 'fadeIn 2s ease-in-out',
        'bounce': 'bounce 2s infinite',
        // Alternating marquee animation
        'marquee-alternate': 'marqueeAlternate 15s linear infinite',  // Alternating movement
      },
    },
  },
  plugins: [],
}
