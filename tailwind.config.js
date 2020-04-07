// import "./node_modules/tailwindcss/stubs/defaultConfig.stub.js"

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'IBM Plex Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        mono: ['IBM Plex Mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        black: '#171513',
        white: '#E6E0D7',
        gray: {
          '500': '#807C76',
          '800': '#3E3B38',
          '900': '#2B2826'
        }
      },
      maxWidth: {
        'logomark': '11.25rem',
        'wordmark': '16rem'
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
      },
      container: false
    },
  },
  variants: {},
  plugins: [],
}
