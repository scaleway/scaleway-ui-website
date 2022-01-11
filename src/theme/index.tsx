import { createTheme, theme as scwTheme } from '@scaleway/ui'

const light = scwTheme

const dark = createTheme({
  contrasts: {
    neutral: {
      100: '#14192E',
      200: '#494F64',
      300: '#494F64',
      400: '#494F64',
      500: '#494F64',
      600: '#F6F5F7',
      700: '#F6F5F7',
      800: '#F6F5F7',
      900: '#F6F5F7',
      1000: '#FFFFFF',
    },
    primary: {
      800: '#FFFFFF',
    },
  },
})

export { light, dark }
