/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: {
          light: '#303C99',
        },
        secondaryText: {
          light: '#101433B2',
        },
        secondaryActiveText: {
          light: '#101433',
        },
        secondaryIncctiveText: {
          light: '#10143380',
        },
      },
      fontSize: {
        '8': ['8px', { lineHeight: '12px' }],
        '12': ['12px', { lineHeight: '18px' }],
        '16': ['16px', { lineHeight: '24px' }],
        '18': ['18px', { lineHeight: '27px' }],
        '20': ['20px', { lineHeight: '30px' }],
      },
      backgroundImage: {
        'hero-image': "url('/heroSection.png')",
      },
      backdropSaturate: {
        'hero-image': ".99",
      },
      backdropBrightness: {
        'hero-image': "0.8",
      },
      backdropOpacity: {
        'hero-image': "0.2",
      }
    },
  },
  plugins: [],
}