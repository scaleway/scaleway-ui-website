import { ThemeProvider } from '@emotion/react'
import React from 'react'

type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>
}

export default Main
