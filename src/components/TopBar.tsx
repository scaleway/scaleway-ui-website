import { Box } from '@scaleway/ui'
import React from 'react'

const TopBar = (): JSX.Element => {
  return (
    <Box as="header" display="fixed" top={0} left={0} width="100%">
      Hello Scaleway
    </Box>
  )
}

export default TopBar
