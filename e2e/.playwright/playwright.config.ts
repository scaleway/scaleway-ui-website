import { PlaywrightTestConfig } from '@playwright/test'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'

const config: PlaywrightTestConfig = {
  testDir: '../',
  testMatch: /.*.ts$/,
  timeout: 60000,
  expect: {
    toMatchSnapshot: {
      threshold: 0.99,
    },
  },
  use: {
    contextOptions: {
      baseURL: BASE_URL,
      locale: 'en-GB',
      storageState: {
        cookies: [],
        origins: [
          {
            localStorage: [
              {
                name: 'settings',
                value: JSON.stringify({
                  isLightMode: true,
                }),
              },
            ],
            origin: BASE_URL,
          },
        ],
      },
      viewport: { height: 960, width: 1480 },
    },
    launchOptions: {
      args: ['--disable-gpu', '--ignore-certificate-errors'],
    },
    trace: 'retain-on-failure',
  },
}

export default config
