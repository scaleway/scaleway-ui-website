import styled from '@emotion/styled'
import { BorderedBox, Col, Row, Typography, down, up } from '@scaleway/ui'
import React from 'react'
import Image from 'components/Image'

type CardProps = {
  title: string
  description: string | JSX.Element
  icon: StaticImageData
}

const StyledBorderedBox = styled(BorderedBox)`
  ${down('large', `margin: 8px 16px`)}
  ${up('large', `height: 100%;`)}
`

const Card = ({ title, description, icon }: CardProps): JSX.Element => (
  <StyledBorderedBox>
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
  </StyledBorderedBox>
)

export default Card
