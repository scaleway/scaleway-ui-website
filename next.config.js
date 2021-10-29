// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require('@sentry/nextjs')

const SentryWebpackPluginOptions = {
  authToken: process.env.SENTRY_AUTH_TOKEN,
  dryRun: !!process.env.SENTRY_DRY_RUN,
  ignore: ['node_modules'],
  include: '.',
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  url: process.env.SENTRY_URL,
}

const withSentry = (nextConfig) => process.env.SENTRY_AUTH_TOKEN ? withSentryConfig(nextConfig, SentryWebpackPluginOptions) : nextConfig

const nextConfig = () => {
  const plugins = [
    require('next-transpile-modules')([
      '@scaleway/ui',
      '@scaleway/random-name',
      'react-syntax-highlighter',
    ]),
    require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    }),
  ].filter(Boolean);

  /** @type {import('next/dist/server/config').NextConfig} */
  const config = {
    compress: true,
    images: {
      loader: 'imgix',
      path:  'https://ui.scaleway.com',
      formats: ['image/avif', 'image/webp']
    },
    swcMinify: true,
    poweredByHeader: false,
    reactStrictMode: true,
    sentry: {
      disableServerWebpackPlugin: true,
    },
  }

  return plugins.reduce((acc, next) => next(acc), config);
}

module.exports = withSentry(nextConfig())
