import { AppProps } from 'next/app'
import Main from 'components/Main'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
