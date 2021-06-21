import { Separator } from '@scaleway/ui'
import React from 'react'
import Introduction from './Introduction'

const Home = (): JSX.Element => {
  return (
    <>
      <Introduction />
      <Separator my={80} />
    </>
  )
}

export default Home
