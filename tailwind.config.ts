import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-content': 'var(--primary-content)',
        'secondary-content': 'var(--secondary-content)',
      },
    },
  },
  plugins: [],
} satisfies Config
