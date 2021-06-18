import React from 'react'
import { Box, Col, Row, Typography, down } from '@scaleway/ui'
import Image from 'next/image'
import styled from '@emotion/styled'

type CardProps = {
  title: string
  description: string
  icon: StaticImageData
}

const StyledBox = styled(Box)`
  ${down('large', `margin: 8px 16px`)};
`

const Card = ({ title, description, icon }: CardProps): JSX.Element => {
  return (
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
}

export default Card
