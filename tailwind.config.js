/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },
        "free-plan": {
          primary: "var(--free-plan-primary)",
          secondary: "var(--free-plan-secondary)",
          dark: "var(--free-plan-dark)",
        },
        "basic-plan": {
          primary: "var(--basic-plan-primary)",
          secondary: "var(--basic-plan-secondary)",
          dark: "var(--basic-plan-dark)",
        },
        "pro-plan": {
          primary: "var(--pro-plan-primary)",
          secondary: "var(--pro-plan-secondary)",
          dark: "var(--pro-plan-dark)",
        },
        "growth-plan": {
          primary: "var(--growth-plan-primary)",
          secondary: "var(--growth-plan-secondary)",
          dark: "var(--growth-plan-dark)",
        },
        muted: {
          light: "var(--muted-light)",
          dark: "var(--muted-dark)",
        },
      },
      screens: {
        "2lg": "1100px",
      },
    },
  },
  plugins: [],
};
