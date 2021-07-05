// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require('@sentry/nextjs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@scaleway/ui',
  '@scaleway/random-name',
  'react-syntax-highlighter',
])

const nextConfig = withTM({
  compress: true,
  // Next is kinda buggy and don't want to export into static if this is not set even if its empty and we don't use it
  images: {
    loader: 'imgix',
    path: '',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
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

const moduleExports = process.env.SENTRY_AUTH_TOKEN
  ? withSentryConfig(nextConfig, SentryWebpackPluginOptions)
  : nextConfig

module.exports = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})(moduleExports)
