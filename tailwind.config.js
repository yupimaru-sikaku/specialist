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
