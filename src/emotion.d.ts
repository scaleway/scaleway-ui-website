import '@emotion/react'
import { StaticImport } from './theme'

interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}
interface StaticRequire {
  default: StaticImageData
}

type StaticImport = StaticRequire | StaticImageData

declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {
    logo: string | StaticImport
  }
}
