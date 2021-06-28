const withTM = require('next-transpile-modules')([
  '@scaleway/ui',
  '@scaleway/random-name',
  'react-syntax-highlighter',
])

const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = withTM({
  poweredByHeader: false,
  // Next is kinda buggy and don't want to export into static if this is not set even if its empty and we don't use it
  images: {
    loader: 'imgix',
    path: '',
  },
  compress: true,
})

const SentryWebpackPluginOptions = {
  authToken: process.env.SENTRY_AUTH_TOKEN,
  dryRun: !!process.env.SENTRY_DRY_RUN,
  ignore: ['node_modules'],
  include: '.',
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: true,
  url: process.env.SENTRY_URL,
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
