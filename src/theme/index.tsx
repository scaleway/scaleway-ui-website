import { theme as scwTheme } from '@scaleway/ui'
import logoLight from 'assets/logos/logo-light.svg'
import logoDark from 'assets/logos/logo-dark.svg'

export const theme = {
  light: {
    ...scwTheme,
    logo: logoLight,
  },

  dark: {
    ...scwTheme,
    colors: {
      ...scwTheme.colors,
      white: '#14192E',
      primary: '#FFFFFF',
      gray100: '#494F64',
      gray700: '#F6F5F7',
    },
    logo: logoDark,
  },
}
