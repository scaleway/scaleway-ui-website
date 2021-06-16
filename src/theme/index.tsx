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
    },
    logo: logoDark,
  },
}
