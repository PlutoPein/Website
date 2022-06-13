/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        head: '#ACACAC',
        prp: '#844AFF',
        babe: '#4FACFE',
        tsuma: '#00F2FE',
        down: '#3C53F4',
        bbg: '#333333',
        bbs: '#F6F6F6',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Daughter: ["Architects Daughter", "cursive"],
        Roboto: ["Roboto", "sans-serif"]
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(3.5deg)' },
          '20%': { transform: 'rotate(-2deg)' },
          '30%': { transform: 'rotate(3.5deg)' },
          '40%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
       
        
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      
      
    },
    
    
    
  },
  plugins: [],
}