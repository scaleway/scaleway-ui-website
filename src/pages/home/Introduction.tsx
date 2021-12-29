import styled from '@emotion/styled'
import { Box, Breakpoint, Col, Grid, Row, Typography, up } from '@scaleway/ui'
import React from 'react'
import Image from 'components/Image'
import swA11y from '../../assets/icons/icon-scaleway-a11y.svg'
import swCustom from '../../assets/icons/icon-scaleway-custom.svg'
import swDx from '../../assets/icons/icon-scaleway-dx.svg'
import swUI from '../../assets/icons/icon-scaleway-ui.svg'
import introductionIllustration from '../../assets/illustrations/introduction.svg'
import Card from '../../components/Card'
import GithubAndDocumentationButtons from '../../components/GithubAndDocumentationButtons'

const StyledTitleCol = styled(Col)`
  ${up('xsmall', `order: 2`)};
  ${up('medium', `order: 1;`)};
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

const Introduction = (): JSX.Element => (
  <Grid mt={4}>
    <Row alignItems="center">
      <StyledTitleCol xsmall={12} medium={6}>
        <Image src={swUI} alt="icon" width={128} height={128} />
        <StyledTitle color="primary">
          Scaleway <b>UI</b>
        </StyledTitle>
        <StyledSubTitle color="lightViolet" lineHeight={1.2}>
          Open Source <br />
          Component Library
        </StyledSubTitle>
      </StyledTitleCol>
      <StyledIllustrationCol xsmall={12} medium={6}>
        <StyledImageBox>
          <Image src={introductionIllustration} alt="logo" priority />
        </StyledImageBox>
      </StyledIllustrationCol>
    </Row>
    <Breakpoint down="medium">
      <Row justifyContent="center" mt={4}>
        <GithubAndDocumentationButtons />
      </Row>
    </Breakpoint>

    <Row mt={7} alignItems="stretch">
      <Col xsmall={12} large={4}>
        <Card
          title="Accessibility"
          description="We tend to follow WAI-ARIA standards for each components."
          icon={swA11y}
        />
      </Col>
      <Col xsmall={12} large={4}>
        <Card
          title="Customizable"
          description="Easily define dark and light theme along with many different colors."
          icon={swCustom}
        />
      </Col>
      <Col xsmall={12} large={4}>
        <Card
          title="Developer XP"
          description="Open source and continually maintained, Scaleway UI is our main library in Scaleway environment."
          icon={swDx}
        />
      </Col>
    </Row>
  </Grid>
)

export default Introduction
