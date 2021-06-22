import { theme as scwTheme } from '@scaleway/ui'

export const theme = {
  light: {
    ...scwTheme,
    colors: {
      ...scwTheme.colors,
      pureWhite: '#FFFFFF',
      pureDark: '#0E1120',
    },
  },

  dark: {
    ...scwTheme,
    colors: {
      ...scwTheme.colors,
      pureWhite: '#FFFFFF',
      pureDark: '#0E1120',
      white: '#14192E',
      black: '#FFFFFF',
      primary: '#FFFFFF',
      gray100: '#494F64',
      gray200: '#494F64',
      gray350: '#494F64',
      gray700: '#F6F5F7',
      gray950: '#F6F5F7',
    },
  },
}
