import { Button, Col, Grid, Row, Typography } from '@scaleway/ui'
import React from 'react'
import CopyBox from '../../components/CopyBoxCommand'

const useCase1 = `import { Button } from "@scaleway/ui";

const MyBeautifulButton = () => (
    <Button variant="primary">
        I'm a button
    </Button>
);`

const useCase2 = `import { Typography } from "@scaleway/ui";

const MyBeautifulTypography = () => (
    <Typography variant="bodyC">
        This is a beautiful text scoped into a Typography component with bodyC variant.
        And this is another line with same Typography component.
    </Typography>
);`

const AdvancedUseCases = (): JSX.Element => (
  <Grid mb={9}>
    <Row textAlign="center" justifyContent="center">
      <Col xsmall={10}>
        <Typography variant="hero" mb={5}>
          Advanced Use Cases
        </Typography>
        <Typography textAlign="justify" mb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <CopyBox>
          <CopyBox.Command title="Use Case 1" command={useCase1} />
          <CopyBox.Command title="Use Case 2" command={useCase2} />
        </CopyBox>
      </Col>
    </Row>
    <Row textAlign="center">
      <Col>
        <Button variant="primary" size="medium" mt={4}>
          View full example
        </Button>
      </Col>
    </Row>
  </Grid>
)

export default AdvancedUseCases
