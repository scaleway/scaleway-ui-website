import { ImageLoaderProps, ImageProps } from 'next/dist/client/image'
import NextImage from 'next/image'
import React from 'react'

const loader = ({ src }: ImageLoaderProps): string => src

const Image = (props: ImageProps): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NextImage loader={loader} {...props} />
)

export default Image
