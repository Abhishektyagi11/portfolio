/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f8fafc",     // soft light background
          foreground: "#1f2937",     // dark gray text
          accent: "#3b82f6",         // blue-500
          card: "#ffffff",           // white card
          border: "#e5e7eb",         // gray-200
          primary: "#1DB954",
          'light-primary': '#22c55e', // Tailwind green-500
          'dark-primary': '#16a34a',  // Tailwind green-600
        },
        dark: {
          background: "#0f172a",     // dark slate
          foreground: "#f1f5f9",     // light text
          accent: "#60a5fa",         // blue-400
          card: "#1e293b",           // dark card
          border: "#334155",         // dark gray border
          primary: "#1DB954",
          'light-primary': '#22c55e', // Tailwind green-500
          'dark-primary': '#16a34a',  // Tailwind green-600
        },
      },
    },
  },
  plugins: [],
}
