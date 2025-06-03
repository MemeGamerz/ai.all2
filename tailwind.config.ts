import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
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
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1"},
        },
        "slide-out-to-bottom": {
          from: { transform: "translateY(0)", opacity: "1" },
          to: { transform: "translateY(20px)", opacity: "0"},
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1"},
        },
        "slide-out-to-top": {
          from: { transform: "translateY(0)", opacity: "1" },
          to: { transform: "translateY(-20px)", opacity: "0"},
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1"},
        },
        "slide-out-to-left": {
          from: { transform: "translateX(0)", opacity: "1" },
          to: { transform: "translateX(-20px)", opacity: "0"},
        },
        "slide-in-from-right": {
          from: { transform: "translateX(20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1"},
        },
        "slide-out-to-right": {
          from: { transform: "translateX(0)", opacity: "1" },
          to: { transform: "translateX(20px)", opacity: "0"},
        },
        "subtle-beat": {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out forwards',
        'accordion-up': 'accordion-up 0.2s ease-out forwards',
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.3s ease-out forwards",
        "slide-in-from-bottom": "slide-in-from-bottom 0.5s ease-out forwards",
        "slide-out-to-bottom": "slide-out-to-bottom 0.3s ease-out forwards",
        "slide-in-from-top": "slide-in-from-top 0.5s ease-out forwards",
        "slide-out-to-top": "slide-out-to-top 0.3s ease-out forwards",
        "slide-in-from-left": "slide-in-from-left 0.5s ease-out forwards",
        "slide-out-to-left": "slide-out-to-left 0.3s ease-out forwards",
        "slide-in-from-right": "slide-in-from-right 0.5s ease-out forwards",
        "slide-out-to-right": "slide-out-to-right 0.3s ease-out forwards",
        "subtle-beat": "subtle-beat 1.5s ease-in-out 1s 1 forwards",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
