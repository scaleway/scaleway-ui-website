declare module '@scaleway/ui' {
  const Box: any
  const Col: any
  const Row: any
  const Typography: any
  const TabGroup: any
  const Button: any
  const Icon: any
  const Grid: any
  const Breakpoint: any
  const Tooltip: any
  const Switch: any
  const GlobalStyle: any
  const Separator: any

  const theme: UITheme

  const down: (size: string, rules: string) => string
  const up: (size: string, rules: string) => string
}
