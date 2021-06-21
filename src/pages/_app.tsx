import { css, ThemeProvider } from '@emotion/react'
import Head from 'components/Head'
import Footer from 'components/Footer'
import TopBar from 'components/TopBar'
import { AppProps } from 'next/app'
import { GlobalStyle } from '@scaleway/ui'
import { useCallback, useEffect, useState } from 'react'
import { theme as localTheme } from 'theme'

const customBody = css`
  body {
    overflow-y: auto;
  }
`

const App = ({ Component, pageProps }: AppProps): JSX.Element | null => {
  const [isLightMode, setIsLightMode] = useState(true)
  const [showChild, setShowChild] = useState(false)

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

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

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
