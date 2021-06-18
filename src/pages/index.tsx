import { Grid, Row, Col, Typography } from '@scaleway/ui'
import Image from 'next/image'
import React from 'react'
import introductionIllustration from 'assets/illustrations/introduction.png'

const Home = (): JSX.Element => {
  return (
    <Grid mt={4}>
      <Row>
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
    </Grid>
  )
}

export default Home
