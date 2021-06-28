import { Separator, down, up, Typography, Col, Row, Box } from '@scaleway/ui'
import React from 'react'
import Introduction from './Introduction'
import GettingStarted from './GettingStarted'
import styled from '@emotion/styled'
import AdvancedUseCases from './AdvancedUseCases'

const StyledSeparator = styled(Separator)`
  ${up('small', `margin: 80px 0`)};
  ${down('small', `margin: 47px 0`)};
`

const StyledGroup = styled.g`
  fill: ${({ theme }) => theme.colors.warning};

  svg {
    width: 100%;
  }
`

const Home = (): JSX.Element => (
  <>
    <Introduction />
    <StyledSeparator />
    <GettingStarted />
    <AdvancedUseCases />
    <StyledSeparator />
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
