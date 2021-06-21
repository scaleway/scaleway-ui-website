import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { CreativeWork } from 'schema-dts'
import { jsonLdScriptProps } from 'react-schemaorg'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <script
            {...jsonLdScriptProps<CreativeWork>({
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: 'Scaleway UI',
              author: {
                '@type': 'Organization',
                name: 'Scaleway',
              },
              url: 'https://ui.scaleway.com',
              dateCreated: '2020-12-10',
              description: 'A beautiful React UI library created by Scaleway.',
              keywords:
                'react, ui, styled-components, ui-components, scaleway, ui-library, reakit, xstyled',
            })}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
