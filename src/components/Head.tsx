import React from 'react'
import NextHead from 'next/head'
import { Library } from 'schema-dts'
import { jsonLdScriptProps } from 'react-schemaorg'

const Head = (): JSX.Element => {
  return (
    <NextHead>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <script
        {...jsonLdScriptProps<Library>({
          '@context': {
            dc11: 'http://ui.scaleway.com/',
            ex: 'http://ui.scaleway.com#',
            'ex:contains': {
              '@type': '@id',
            },
          },
          '@graph': [
            {
              '@id': 'http://ui.scaleway.com',
              '@type': 'ex:getting_started',
              'dc11:title': 'Getting Started',
              'dc11:description': 'Get started with Scaleway UI Library.',
              'ex:getting_started': 'http://ui.scaleway.com#getting_started',
            },
          ],
        })}
      />
    </NextHead>
  )
}

export default Head
