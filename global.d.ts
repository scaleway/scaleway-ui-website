import '@emotion/react'

declare global {
  declare module '*.svg' {
    const content: StaticImageData
    export default content
  }

  interface UITheme {
    colors: {
      warning: string
      primary: string
      black: string
      gray100: string
      gray200: string
      gray350: string
      gray700: string
      gray950: string
      primary: string
      pureDark: string
      pureWhite: string
      white: string
      blue: string
      darkBlue: string
      lightViolet: string
    }
    fonts: {
      sansSerif: string
    }
  }

  interface ApplicationSettings {
    isLightMode: boolean
  }
}

declare module '@emotion/react' {
  export interface Theme extends UITheme {}
}
