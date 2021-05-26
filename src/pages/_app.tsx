import Head from 'components/Head'
import TopBar from 'components/TopBar'
import { AppProps } from 'next/app'
import './index.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head />
      <TopBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
