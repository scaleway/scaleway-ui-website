declare module '@scaleway/ui' {
  const theme: UITheme

  const down: (size: string, rules: string) => string
  const up: (size: string, rules: string) => string
}
