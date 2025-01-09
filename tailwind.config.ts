import type { Config } from "tailwindcss";

export default {
 darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sidebar': '1190px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom: {
          dark: "#2a2b32",      // Dark background
          gray: "#76777a",      // Medium gray
          blue: "#00d0eb",      // Bright blue
          lightGray: "#b9b9b9", // Light gray
          dullGray: "#dedede", // Light gray
        }
      },
      fontSize: {
        'stat-title-sm': '10px',
        'stat-title-lg': '16px',
        'stat-value-sm': '56px',
        'stat-value-lg': '96px',
      },
    },
  },
  plugins: [],
} satisfies Config;
