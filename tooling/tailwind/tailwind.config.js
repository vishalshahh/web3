/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // your content globs here
    './apps/**/*.{ts,tsx,js,jsx}',
    './packages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [],
}
