import { theme as scwTheme } from '@scaleway/ui'

const dark: UITheme = {
  ...scwTheme,
  colors: {
    ...scwTheme.colors,
    black: '#FFFFFF',
    gray100: '#494F64',
    gray200: '#494F64',
    gray350: '#494F64',
    gray700: '#F6F5F7',
    gray950: '#F6F5F7',
    primary: '#FFFFFF',
    pureDark: '#0E1120',
    pureWhite: '#FFFFFF',
    white: '#14192E',
  },
}

const light: UITheme = {
  ...scwTheme,
  colors: { ...scwTheme.colors, pureDark: '#0E1120', pureWhite: '#FFFFFF' },
}

export { light, dark }
