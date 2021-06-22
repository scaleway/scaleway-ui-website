const withTM = require('next-transpile-modules')([
  '@scaleway/ui',
  '@scaleway/random-name',
  'react-syntax-highlighter',
])

module.exports = withTM({
  poweredByHeader: false,
  // Next is kinda buggy and don't want to export into static if this is not set even if its empty and we don't use it
  images: {
    loader: 'imgix',
    path: '',
  },
  compress: true,
})
