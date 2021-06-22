import { Button } from '@scaleway/ui'
import React from 'react'

const GithubAndDocumentationButtons = (): JSX.Element => {
  return (
    <>
      <Button
        variant="secondary"
        icon="github"
        iconSize={40}
        size="medium"
        to="https://github.com/scaleway/scaleway-ui"
        target="_blank"
        p={0}
      />
      <Button
        to="https://react.ui.scaleway.com/"
        target="_blank"
        mx={2}
        size="medium"
      >
        Documentation
      </Button>
    </>
  )
}

export default GithubAndDocumentationButtons
