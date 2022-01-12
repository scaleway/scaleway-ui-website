import '@emotion/react'

declare global {
  declare module '*.svg' {
    const content: StaticImageData
    export default content
  }

  interface ApplicationSettings {
    isLightMode: boolean
  }
}

declare module '@emotion/react' {
  import type { SCWUITheme } from '@scaleway/ui'

  export interface Theme extends SCWUITheme {}
}
