import {
  Col,
  Box,
  Grid,
  Row,
  Typography,
  up,
  Button,
  Breakpoint,
} from '@scaleway/ui'
import introductionIllustration from '../../assets/illustrations/introduction.png'
import Card from '../../components/Card'
import icon from '../../assets/icons/icon-scaleway-ui.svg'
import React from 'react'
import styled from '@emotion/styled'
import Image from 'components/Image'

const StyledTitleCol = styled(Col)`
  ${up('xsmall', `order: 2`)} ${up('medium', `order: 1;`)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledTitle = styled(Typography)`
  ${up(
    'xsmall',
    `font-size: 40px; margin-top: 8px; width: 100%; text-align: center;`,
  )};
  ${up('medium', `font-size: 58px`)};
  ${up('large', `font-size: 75px;`)};
`

const StyledSubTitle = styled(Typography)`
  ${up('xsmall', `font-size: 24px; text-align: center;`)};
  ${up('medium', `font-size: 35px; text-align: left;`)};
  ${up('large', `font-size: 45px; text-align: left;`)};
`

const StyledIllustrationCol = styled(Col)`
  ${up('xsmall', `order: 1;`)};
  ${up('medium', `order: 2;`)}
  display: flex;
  justify-content: center;
`

const StyledImageBox = styled(Box)`
  ${up('xsmall', `width: 65vw; max-width: 350px`)};
  ${up(
    'large',
    `width: 470px;
    max-width: none;
    height: 374px`,
  )};
`

const Introduction = (): JSX.Element => {
  return (
    <Grid mt={4}>
      <Row alignItems="center">
        <StyledTitleCol xsmall={12} medium={6}>
          <StyledTitle color="primary">
            Scaleway <b>UI</b>
          </StyledTitle>
          <StyledSubTitle color="lightViolet" lineHeight={1.2}>
            Open Source <br />
            Component Library
          </StyledSubTitle>
        </StyledTitleCol>
        <StyledIllustrationCol xmsall={12} medium={6}>
          <StyledImageBox>
            <Image src={introductionIllustration} alt="logo" />
          </StyledImageBox>
        </StyledIllustrationCol>
      </Row>
      <Breakpoint down="medium">
        <Row justifyContent="center" mt={4}>
          <Button
            name="github"
            variant="secondary"
            icon="github"
            iconSize={40}
            size="medium"
            p={0}
            to="https://github.com/scaleway/scaleway-ui"
            target="_blank"
          />
          <Button
            name="documentation"
            to="https://react.ui.scaleway.com/"
            target="_blank"
            size="medium"
            mx={2}
          >
            Documentation
          </Button>
        </Row>
      </Breakpoint>

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
