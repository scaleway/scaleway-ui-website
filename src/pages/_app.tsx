import { css, ThemeProvider } from '@emotion/react'
import Head from 'components/Head'
import Footer from 'components/Footer'
import TopBar from 'components/TopBar'
import { AppProps } from 'next/app'
import { GlobalStyle } from '@scaleway/ui'
import { useCallback, useLayoutEffect, useState } from 'react'
import { theme as localTheme } from 'theme'

const customBody = css`
  body {
    overflow-y: auto;
  }
`

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [isLightMode, setIsLightMode] = useState(true)

  const setLightModeCallBack = useCallback(
    isLightMode => {
      setIsLightMode(isLightMode)
      localStorage.setItem(
        'settings',
        JSON.stringify({ isLightMode: isLightMode }),
      )
    },
    [setIsLightMode],
  )

  useLayoutEffect(() => {
    const settings = JSON.parse(localStorage.getItem('settings') as string)
    if (settings) {
      setLightModeCallBack(settings.isLightMode)
    } else {
      const isNavigatorLightTheme = window.matchMedia(
        '(prefers-color-scheme: light)',
      ).matches
      setLightModeCallBack(isNavigatorLightTheme)
    }
  })

  return (
    <ThemeProvider theme={isLightMode ? localTheme.light : localTheme.dark}>
      <GlobalStyle additionalStyles={[customBody]} />
      <Head />
      <TopBar isLightMode={isLightMode} setIsLightMode={setLightModeCallBack} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
