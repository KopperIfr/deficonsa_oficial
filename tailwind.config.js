/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        "tiny-460" : '460px',
        "tiny" : "500px",
        "tiny-525" : "525px",
        "tiny-570" : '570px',
        "md-2" : "900px",
        "md-3" : "992px",
        "nav-lg": '1068px',
        "bg-home-1104" : '1104px',
        "lg-2" : "1220px",
        "lg-1230" : "1230px",
        'projects-xl' : '1377px',
        "services-bp" : "1426px",
        "xl-1470" : "1470px",
        "3xl": '2000px',
        "4k" : '2400px'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "nav-down": {
          "0%": {
            top: "-10rem",
          },
          "100%": {
            top: "0",
          },
        },
        "nav-up": {
          "0%": {
            top: "20rem",
          },
          "100%": {
            top: "0rem",
          },
        },
        "spin-close": {
          "0%": {
            rotate: "180deg",
          },
          "100%": {
            rotate: "0deg",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "nav-down" : "nav-down .5s ease-in-out",
        "nav-up" : "nav-up .4s ease-in-out",
        "spin-close" : "spin-close ease-in-out 1s"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}