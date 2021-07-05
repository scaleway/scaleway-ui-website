import { ThemeProvider, css } from '@emotion/react'
import { GlobalStyle } from '@scaleway/ui'
import { AppProps } from 'next/app'
import React, { useCallback, useState } from 'react'
import Footer from 'components/Footer'
import Head from 'components/Head'
import TopBar from 'components/TopBar'
import { dark, light } from 'theme'

const customBody = css`
  body {
    overflow-y: auto;
  }
`

const customTransitionAnimation = css`
  * {
    transition: background-color 500ms ease;
  }
`

const App = ({ Component, pageProps }: AppProps): JSX.Element | null => {
  const [isLightMode, setIsLightMode] = useState<boolean>(true)

  const setLightModeCallBack = useCallback(
    (isLight: boolean) => {
      setIsLightMode(isLight)
      localStorage.setItem('settings', JSON.stringify({ isLightMode: isLight }))
    },
    [setIsLightMode],
  )

  return (
    <ThemeProvider theme={isLightMode ? light : dark}>
      <GlobalStyle additionalStyles={[customBody, customTransitionAnimation]} />
      <Head />
      <TopBar isLightMode={isLightMode} setIsLightMode={setLightModeCallBack} />
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
      <Footer />
    </ThemeProvider>
  )
}

export default App
