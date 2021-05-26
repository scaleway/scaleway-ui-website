const withTM = require('next-transpile-modules')([
  '@scaleway/ui',
  '@scaleway/random-name',
])

module.exports = withTM({
  poweredByHeader: false,
  future: {
    webpack5: false, // you want to keep using Webpack 4
  },
})
