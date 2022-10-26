module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    extend: {
      // 色を独自設定したいならここ
      colors: {
        navy: {
          900: '#123159',
        },
        yellow: {
          900: '#FCD400',
        },
        ash: {
          100: '#EEEEEE',
          500: '#D7D8D8',
          900: '#4F4F4F',
        },
      },
      animation: {
        'tracking-in-expand':
          'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
      },
      keyframes: {
        'tracking-in-expand': {
          '0%': {
            'letter-spacing': '-.5em',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-fluid-spacing'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    // MantineUIとTailwindCSSを一緒に使うとコンポーネントがうまく表示されない。その対策
    preflight: false,
  },
  darkMode: 'class',
};
