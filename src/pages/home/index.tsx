import styled from '@emotion/styled'
import {
  Box,
  Button,
  Col,
  Row,
  Separator,
  Typography,
  down,
  up,
} from '@scaleway/ui'
import React from 'react'
import Image from 'components/Image'
import slackLogo from '../../assets/icons/icon-slack.svg'
import AdvancedUseCases from './AdvancedUseCases'
import GettingStarted from './GettingStarted'
import Introduction from './Introduction'
import OpenSource from './OpenSource'

const StyledSeparator = styled(Separator)`
  ${up('small', `margin: 80px 0`)};
  ${down('small', `margin: 47px 0`)};
`

const StyledGroup = styled.g`
  fill: ${({ theme: styledTheme }): string => styledTheme.colors.warning};

  svg {
    width: 100%;
  }
`

const StyledCommunityContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 56px 0 72px;
  padding: 24px;
  background-color: ${({ theme: styledTheme }): string =>
    styledTheme.colors.lightViolet};
`

const StyledTypographyContainer = styled.div`
  margin-left: 24px;
  text-align: left;
`

const StyledCommunityLeft = styled.div`
  display: flex;
`

const Home = (): JSX.Element => (
  <>
    <Introduction />
    <StyledSeparator />
    <GettingStarted />
    <AdvancedUseCases />
    <StyledSeparator />
    <OpenSource />
    <StyledCommunityContainer>
      <StyledCommunityLeft>
        <Image src={slackLogo} width="48" height="48" alt="Slack logo" />
        <StyledTypographyContainer>
          <Typography variant="title">Connect with the community</Typography>
          <Typography variant="description">
            Feel free to ask questions, report issues, and meet new people.
          </Typography>
        </StyledTypographyContainer>
      </StyledCommunityLeft>
      <Button
        title="Join the Community Slack"
        to="https://scaleway-community.slack.com/archives/C02M4HDPGB0"
        size="large"
      >
        Join the Community Slack
      </Button>
    </StyledCommunityContainer>
    <Row textAlign="center">
      <Col>
        <Typography
          variant="hero"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Built with
          <Box width={35} height={35} display="flex" alignItems="middle" mx={1}>
            <svg viewBox="0 0 24 24">
              <StyledGroup>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </StyledGroup>
            </svg>
          </Box>
          in France
        </Typography>
      </Col>
    </Row>
  </>
)

export default Home
