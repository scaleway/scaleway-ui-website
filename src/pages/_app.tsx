import { ThemeProvider } from '@emotion/react'
import Head from 'components/Head'
import Footer from 'components/Footer'
import TopBar from 'components/TopBar'
import { AppProps } from 'next/app'
import { GlobalStyle, theme } from '@scaleway/ui'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
