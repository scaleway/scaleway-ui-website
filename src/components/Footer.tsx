import React from 'react'
import { Grid, Row, Col, Typography, Button, up, down } from '@scaleway/ui'
import Image from 'next/image'
import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { x } from '@xstyled/emotion'

const StyledFooter = styled(x.footer)`
  box-shadow: 0 0 8px 2px rgba(178, 182, 195, 0.37);
`

const Footer = (): JSX.Element => {
  const theme = useTheme()

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
        <Row
          css={css`
            ${up('medium', `margin-top: 40px`)} ${down(
              'medium',
              `margin-top: 24px`,
            )}
          `}
        >
          <Col
            xsmall={12}
            medium="auto"
            display="flex"
            css={css`
              ${up('medium', `order: 2`)} ${down(
                'medium',
                `order: 1; margin-left: 0`,
              )}
            `}
          >
            <Button variant="secondary" icon="github" />
            <Button to="https://react.ui.scaleway.com/" mx={1}>
              Documentation
            </Button>
          </Col>
          <Col
            xsmall={12}
            medium="auto"
            display="flex"
            css={css`
              ${up('medium', `order: 1`)} ${down(
                'medium',
                `order: 2; margin-top: 24px`,
              )}
            `}
          >
            <Image src={theme.logo} alt="logo" width={124} height={24} />
          </Col>
        </Row>
      </Grid>
    </StyledFooter>
  )
}

export default Footer
