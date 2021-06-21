import React from 'react'
import { Grid, Row, Col, Typography, Button, up, down } from '@scaleway/ui'
import styled from '@emotion/styled'
import Logo from './Logo'

const StyledFooter = styled.footer`
  box-shadow: 0 0 8px 2px rgba(178, 182, 195, 0.37);
`

const StyledButtonsCol = styled(Col)`
  ${up('medium', `order: 2`)} ${down('medium', `order: 1; margin-left: 0`)};
  display: flex;
`

const StyledLogoCol = styled(Col)`
  ${up('medium', `order: 1`)} ${down('medium', `order: 2; margin-top: 24px`)}
  display: flex;
  align-items: center;
`

const StyledRow = styled(Row)`
  ${up('medium', `margin-top: 40px`)} ${down('medium', `margin-top: 24px`)}
`

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <Grid py={5} px={4}>
        <Row>
          <Col>
            <Typography variant="bodyA">
              Hosted in french green datacenters
            </Typography>
            <Typography variant="bodyB">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </Typography>
          </Col>
        </Row>
        <StyledRow>
          <StyledButtonsCol xsmall={12} medium="auto">
            <Button
              variant="secondary"
              icon="github"
              iconSize={40}
              size="medium"
              to="https://github.com/scaleway/scaleway-ui"
              target="_blank"
              p={0}
            />
            <Button
              to="https://react.ui.scaleway.com/"
              target="_blank"
              mx={2}
              size="medium"
            >
              Documentation
            </Button>
          </StyledButtonsCol>
          <StyledLogoCol xsmall={12} medium="auto">
            <Logo width={124} height={24} />
          </StyledLogoCol>
        </StyledRow>
      </Grid>
    </StyledFooter>
  )
}

export default Footer
