import styled from '@emotion/styled'
import { Col, Grid, Row, Typography } from '@scaleway/ui'
import React from 'react'
import CopyBox from '../../components/CopyBoxCommand'
import GithubAndDocumentationButtons from '../../components/GithubAndDocumentationButtons'

const install = `yarn add @scaleway/ui @emotion/react @emotion/styled`

const command = `import { theme, Button } from "@scaleway/ui"
import { ThemeProvider } from "@emotion/react"

const App = () => (
    <ThemeProvider theme={theme}>
        <Button variant="primary" onClick={() => console.log("clicked")}>
          Click Me
        </Button>
    </ThemeProvider>
)`

const RelativeDiv = styled.div`
  position: relative;
`

const GettingStarted = (): JSX.Element => (
  <Grid mb={9}>
    <Row textAlign="center" justifyContent="center">
      <Col xsmall={10}>
        <Typography variant="hero" mb={5}>
          Getting Started
        </Typography>
        <Typography textAlign="justify" mb={5}>
          Inside your react project start using Scaleway UI by running:
        </Typography>
        <RelativeDiv>
          <CopyBox>
            <CopyBox.Command title="Install" command={install} />
          </CopyBox>
        </RelativeDiv>
        <Typography textAlign="justify" mt={5} mb={5}>
          You can then simply integrate theme into your project and start using
          components:
        </Typography>
        <CopyBox>
          <CopyBox.Command title="Use Case 1" command={command} />
        </CopyBox>
      </Col>
    </Row>
    <Row textAlign="center" mt={4}>
      <Col>
        <GithubAndDocumentationButtons />
      </Col>
    </Row>
  </Grid>
)

export default GettingStarted
