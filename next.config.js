const withTM = require('next-transpile-modules')([
  '@scaleway/ui',
  '@scaleway/random-name',
])

module.exports = withTM({
  poweredByHeader: false,
})
