import { ThemeProvider } from '@emotion/react'
import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { theme } from '@scaleway/ui'
import Footer from 'components/Footer'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <NextScript />
          <ThemeProvider theme={theme}>
            <main>
              <Main />
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </Html>
    )
  }
}

export default MyDocument
