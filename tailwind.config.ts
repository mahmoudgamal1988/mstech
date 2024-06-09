import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    // backgroundColor:"black",
    fontSize: {
      xxs: ['0.45rem', { lineHeight: '.8rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      colors: {
        backgroundColor: "#e7edf4",
        darkBg: "#030814",
        lightBg: "#197DB7",
        grayBg: "#f9fafc",
        primary: '#1E96C7',
        ooo: "#2DB2F9",
        secondary: '#777777',
        "color1": "#2DB2F9",
        "color2": "#28A8E8",
        "color3": "#239FD7",
        "color4": "#1E96C7",
        "color5": "#197DB7",
        "color6": "#1464A6",
        "color7": "#115396",
        "color8": "#0E4286",
        "color9": "#0B3175",
        "color10": "#082065",
        "color11": "#145B93"
      },
    },
  },
  plugins: [],
} satisfies Config
