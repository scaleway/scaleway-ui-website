import { ThemeProvider } from '@emotion/react'
import Head from 'components/Head'
import TopBar from 'components/TopBar'
import { AppProps } from 'next/app'
import { Button, GlobalStyle, theme } from '@scaleway/ui'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button>Hello</Button>
      <Head />
      <TopBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
