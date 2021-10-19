const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  theme: {
    extend: {
      screens: {
        'xs': '360px',
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        rose: colors.rose,
        lime: colors.lime,
        amber: colors.amber,
        orange: colors.orange,
        violet: colors.violet,
        emerald: colors.emerald,
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        fuchsia: colors.fuchsia,
      },
      lineHeight: {
        'extra-loose': '2.5rem',
        '12': '3rem',
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
