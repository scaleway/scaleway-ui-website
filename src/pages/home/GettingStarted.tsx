import { Col, Grid, Row, Typography } from '@scaleway/ui'
import React from 'react'
import CopyBox from '../../components/CopyBoxCommand'
import GithubAndDocumentationButtons from '../../components/GithubAndDocumentationButtons'

const command = `import { theme, Button } from "@scaleway/ui";
import { ThemeProvider } from "@emotion/react";

const App = () => (
    <ThemeProvider theme={theme}>
        <Button variant="primary" onClick={() => console.log("clicked")}>
          Click Me
        </Button>
    </ThemeProvider>
);`

const GettingStarted = (): JSX.Element => (
  <Grid mb={9}>
    <Row textAlign="center" justifyContent="center">
      <Col xsmall={10}>
        <Typography variant="hero" mb={5}>
          Getting Started
        </Typography>
        <Typography textAlign="justify" mb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
