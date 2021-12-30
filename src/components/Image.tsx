import { ImageLoaderProps, ImageProps } from 'next/dist/client/image'
import NextImage from 'next/image'
import React from 'react'

const loader = ({ src, width }: ImageLoaderProps): string =>
  src.endsWith('.svg') ? src : `${src}?w=${width}`

const Image = (props: ImageProps): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NextImage loader={loader} {...props} />
)

export default Image
