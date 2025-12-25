/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#111111',
        accent: '#64ffda',
        'text-primary': '#e6e6e6',
        'text-secondary': '#a8b2d1',
        gray: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#1f1f1f",
          700: "#2d2d2d",
          600: "#4a4a4a",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        blink: 'blink 1s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */

//   module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",       // All app directory files
//     "./app/components/**/*.{js,ts,jsx,tsx}", // Components
//     "./app/(sections)/**/*.{js,ts,jsx,tsx}", // Optional nested sections/folders
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#0a0a0a',
//         secondary: '#111111',
//         accent: '#64ffda',
//         'text-primary': '#e6e6e6',
//         'text-secondary': '#a8b2d1',
//         gray: {
//           950: "#0a0a0a",
//           900: "#111111",
//           800: "#1f1f1f",
//           700: "#2d2d2d",
//           600: "#4a4a4a",
//           500: "#6b7280",
//           400: "#9ca3af",
//           300: "#d1d5db",
//         },
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         mono: ['Space Grotesk', 'monospace'],
//       },
//       animation: {
//         blink: 'blink 1s infinite',
//         float: 'float 3s ease-in-out infinite',
//       },
//       keyframes: {
//         blink: {
//           '0%, 100%': { opacity: '1' },
//           '50%': { opacity: '0' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
