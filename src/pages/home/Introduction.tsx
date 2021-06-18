import { Col, Grid, Row, Typography } from '@scaleway/ui'
import Image from 'next/image'
import introductionIllustration from '../../assets/illustrations/introduction.png'
import Card from '../../components/Card'
import icon from '../../assets/icons/icon-scaleway-ui.svg'
import React from 'react'

const Introduction = (): JSX.Element => {
  return (
    <Grid mt={4}>
      <Row alignItems="center">
        <Col>
          <Typography fontSize={75} color="primary">
            Scaleway UI
          </Typography>
          <Typography fontSize={45} color="lightViolet" lineHeight={1.2}>
            Open Source <br />
            Component Library
          </Typography>
        </Col>
        <Col>
          <Image
            src={introductionIllustration}
            alt="logo"
            width={470}
            height={374}
          />
        </Col>
      </Row>
      <Row mt={7}>
        <Col>
          <Card
            title="Accessibility"
            description="Check out our tutorials to learn more about our products and the endless possibilities you can achieve with Scaleway."
            icon={icon}
          />
        </Col>
        <Col>
          <Card
            title="Composable"
            description="Check out our tutorials to learn more about our products and the endless possibilities you can achieve with Scaleway."
            icon={icon}
          />
        </Col>
        <Col>
          <Card
            title="Customizable"
            description="Check out our tutorials to learn more about our products and the endless possibilities you can achieve with Scaleway."
            icon={icon}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default Introduction
