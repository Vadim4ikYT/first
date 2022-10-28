/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xl2: '1536px'
      },
      colors: {
        inherit: 'inherit',
        'dodger-blue': '#49B9FF',
        'onahau': '#CCEBFF',
        'gray-sec': '#F3F4F7',
        'd-gray-sec': '#15181E',
        'gray-high': '#F1F6F9',
        'gray-dusty': '#999999',
        'gray-dove': '#666666',
        'gray-santas': '#959DAE',
        'gray-river': '#444B59',
        'd-gray-high': '#222630',
        'red': '#DD4333',
        'd-red': '#DD3929',
        'yellow-light': '#f3da6c',
        'yellow': '#FFDC49',
        'green': '#15A250',
        'green-light': '#a3eec2',
        'd-green': '#159846',
        'alto': '#D3D3D3',
        'mercury': '#E5E5E5',
        'alabaster': '#FAFAFA',
        'gallery': '#F0F0F0',
        'silver': '#C4C4C4',
        'silverdark': '#AAAAAA',
        'wildsand': '#F4F4F4',
        'mineshaft': '#333333',
        'red-tw': colors.red,
        'yellow-tw': colors.amber,
        'green-tw': colors.emerald,
        'beige': '#F4F1D9',
        'spring-wood': '#f2f4e8',
        'violet': '#8b5cf6',
        'violet-light': '#c4b5fd',
        'danger': '#de7a71',
        'success': '#42b983',
        'secondary': '#a2abb3',
        'default': '#c7cbce',
      },
      gridTemplateColumns: {
        'a1': 'auto minmax(auto, 1fr)',
        '1a': 'minmax(auto, 1fr) auto',
        'a1a': 'auto minmax(auto, 1fr) auto',
        '1a1': 'minmax(auto, 1fr) auto minmax(auto, 1fr)',
        'aa1': 'repeat(2,auto) minmax(auto, 1fr)',
        '1aa': 'minmax(auto, 1fr) repeat(2,auto)',
        full: '100%'
      },
      gridTemplateRows: {
        'a1': 'auto minmax(auto, 1fr)',
        '1a': 'minmax(auto, 1fr) auto',
        'a1a': 'auto minmax(auto, 1fr) auto',
        '1a1': 'minmax(auto, 1fr) auto minmax(auto, 1fr)',
        'aa1': 'repeat(2,auto) minmax(auto, 1fr)',
        '1aa': 'minmax(auto, 1fr) repeat(2,auto)',
        full: '100%'
      },
      fontSize: {
        xxs: ['8px', {
          letterSpacing: '0.2px',
          lineHeight: '12px',
        }],
        xs: ['12px', {
          letterSpacing: '-0.2px',
          lineHeight: '16px',
        }],
        sm: ['14px', {
          letterSpacing: '-0.2px',
          lineHeight: '20px',
        }],
        base: ['16px', {
          letterSpacing: '-0.2px',
          lineHeight: '24px',
        }],
        'h-sm': ['14px', {
          letterSpacing: '-0.1px',
          lineHeight: '16px',
        }],
        'h-base': ['16px', {
          letterSpacing: '-0.1px',
          lineHeight: '20px',
        }],
        'h-lg': ['22px', {
          letterSpacing: '-0.2px',
          lineHeight: '28px',
        }],
        'h-xl': ['28px', {
          letterSpacing: '-0.2px',
          lineHeight: '32px',
        }],
        'b-xxs': ['10px', {
          letterSpacing: '0.4px',
          lineHeight: '12px',
        }],
        'b-xs': ['12px', {
          letterSpacing: '-0.3px',
          lineHeight: '1',
        }],
        'b-sm': ['14px', {
          letterSpacing: '-0.3px',
          lineHeight: '1',
        }],
        'b-base': ['16px', {
          letterSpacing: '-0.3px',
          lineHeight: '1',
        }],
      },
      fontFamily: {
        'body': 'Gilroy, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
    },
  },
  plugins: [],
}
