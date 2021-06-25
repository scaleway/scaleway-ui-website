import { default as NextImage } from 'next/image'
import { ImageLoaderProps, ImageProps } from 'next/dist/client/image'

const loader = ({ src }: ImageLoaderProps): string => {
  return src
}

const Image = (props: ImageProps): JSX.Element => {
  return <NextImage loader={loader} {...props} />
}

export default Image
