import styled from '@emotion/styled'
import { Box, Col, Row, Typography, down } from '@scaleway/ui'
import React from 'react'
import Image from 'components/Image'

type CardProps = {
  title: string
  description: string | JSX.Element
  icon: StaticImageData
}

const StyledBox = styled(Box)`
  ${down('large', `margin: 8px 16px`)}
`

const Card = ({ title, description, icon }: CardProps): JSX.Element => (
  <StyledBox bordered>
    <Row>
      <Col xsmall="auto">
        <Image src={icon} alt="icon" width={64} height={64} />
      </Col>
      <Col>
        <Typography variant="lead" mb={1} color="primary">
          {title}
        </Typography>
        <Typography variant="bodyD">{description}</Typography>
      </Col>
    </Row>
  </StyledBox>
)

export default Card
