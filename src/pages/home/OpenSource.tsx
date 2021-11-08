import { Col, Grid, Row, Typography } from '@scaleway/ui'
import React from 'react'
import icon from '../../assets/icons/icon-scaleway-ui.svg'
import Card from '../../components/Card'

const OpenSource = (): JSX.Element => (
  <Grid mt={4}>
    <Row textAlign="center" justifyContent="center">
      <Col xsmall={10}>
        <Typography variant="hero" mb={5}>
          Open Source
        </Typography>
        <Typography textAlign="justify">
          Many others open source projects are available and might interest you
        </Typography>
      </Col>
    </Row>

    <Row mt={5}>
      <Col xsmall={12} large={6}>
        <Card title="Scaleway Lib" description="Lorem Ipsum..." icon={icon} />
      </Col>
      <Col xsmall={12} large={6}>
        <Card title="Scaleway Form" description="Lorem Ipsum..." icon={icon} />
      </Col>
    </Row>
  </Grid>
)

export default OpenSource
