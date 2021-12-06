import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('Desktop', async ({ page }, { title }) => {
    const path = `home-page-${title}.png`
    await page.setViewportSize({ height: 900, width: 1480 })
    await page.goto('/', { waitUntil: 'networkidle' })
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(path)
  })

  test('Mobile', async ({ page }, { title }) => {
    const path = `home-page-${title}.png`
    await page.setViewportSize({ height: 300, width: 400 })
    await page.goto('/', { waitUntil: 'networkidle' })
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(path)
  })
})
