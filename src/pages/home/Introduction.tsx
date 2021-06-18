import { Col, Box, Grid, Row, Typography, up } from '@scaleway/ui'
import Image from 'next/image'
import introductionIllustration from '../../assets/illustrations/introduction.png'
import Card from '../../components/Card'
import icon from '../../assets/icons/icon-scaleway-ui.svg'
import React from 'react'
import styled from '@emotion/styled'

const StyledTitleCol = styled(Col)`
  ${up('xsmall', `order: 2`)} ${up('large', `order: 1;`)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledTitle = styled(Typography)`
  ${up(
    'xsmall',
    `font-size: 40px; margin-top: 8px; width: 100%; text-align: center;`,
  )};
  ${up('large', `font-size: 75px;`)};
`

const StyledSubTitle = styled(Typography)`
  ${up('xsmall', `font-size: 24px; text-align: center;`)};
  ${up('large', `font-size: 45px; text-align: left;`)};
`

const StyledIllustrationCol = styled(Col)`
  ${up('xsmall', `order: 1;`)};
  ${up('large', `order: 2;`)}
  display: flex;
  justify-content: center;
`

const StyledImageBox = styled(Box)`
  ${up('xsmall', `width: 65vw`)};
  ${up(
    'large',
    `width: 470px;
    height: 374px`,
  )};
`

const Introduction = (): JSX.Element => {
  return (
    <Grid mt={4}>
      <Row alignItems="center">
        <StyledTitleCol xsmall={12} large={6}>
          <StyledTitle color="primary">
            Scaleway <b>UI</b>
          </StyledTitle>
          <StyledSubTitle color="lightViolet" lineHeight={1.2}>
            Open Source <br />
            Component Library
          </StyledSubTitle>
        </StyledTitleCol>
        <StyledIllustrationCol xmsall={12} large={6}>
          <StyledImageBox>
            <Image
              src={introductionIllustration}
              alt="logo"
              layout="responsive"
            />
          </StyledImageBox>
        </StyledIllustrationCol>
      </Row>
      <Row mt={7}>
        <Col xsmall={12} large={4}>
          <Card
            title="Accessibility"
            description="Check out our tutorials to learn more about our products and the endless possibilities you can achieve with Scaleway."
            icon={icon}
          />
        </Col>
        <Col xsmall={12} large={4}>
          <Card
            title="Composable"
            description="Check out our tutorials to learn more about our products and the endless possibilities you can achieve with Scaleway."
            icon={icon}
          />
        </Col>
        <Col xsmall={12} large={4}>
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
