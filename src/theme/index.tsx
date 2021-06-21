import { theme as scwTheme } from '@scaleway/ui'

export const theme = {
  light: {
    ...scwTheme,
  },

  dark: {
    ...scwTheme,
    colors: {
      ...scwTheme.colors,
      white: '#14192E',
      primary: '#FFFFFF',
      gray100: '#494F64',
      gray200: '#494F64',
      gray350: '#494F64',
      gray700: '#F6F5F7',
    },
  },
}
