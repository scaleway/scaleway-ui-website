import React from 'react'
import { Box, Col, Row, Typography } from '@scaleway/ui'
import Image from 'next/image'

type CardProps = {
  title: string
  description: string
  icon: StaticImageData
}

const Card = ({ title, description, icon }: CardProps): JSX.Element => {
  return (
    <Box bordered>
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
    </Box>
  )
}

export default Card
