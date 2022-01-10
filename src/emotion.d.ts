import '@emotion/react'
import type { SCWUITheme } from '@scaleway/ui'

declare module '@emotion/react' {
  export interface Theme extends SCWUITheme {}
}
