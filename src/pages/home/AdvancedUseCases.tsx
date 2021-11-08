import { Col, Grid, Row, Typography } from '@scaleway/ui'
import React, { useState } from 'react'
import CopyBox from '../../components/CopyBoxCommand'

const useCase1 = `import { ThemeProvider, css } from '@emotion/react'
import { theme as scwTheme, Button } from '@scaleway/ui'
import React, { useCallback, useState } from 'react'

const darkTheme = {
  ...scwTheme,
  colors: {
    ...scwTheme.colors,
    // Your dark colors
  },
}

const lightTheme = {
  ...scwTheme,
  colors: {
    ...scwTheme.colors,
    // Your light colors
  },
}

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true)

  const setLightModeCallBack = useCallback(
    isLight => {
      setIsLightMode(isLight)
    },
    [setIsLightMode],
  )

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <Typography variant="bodyC">
        This could be a very cool introduction text.
      </Typography>
      <Switch
        name="darkMode"
        size="small"
        width={54}
        checked={isLightMode}
        onChange={(event) => {
          setLightModeCallBack(event.target.checked)
        }}
        labeled
        onLabel={<Icon size={20} name="sun" />}
        offLabel={<Icon size={20} name="moon" />}
      />
    </ThemeProvider>
  )
}

export default App
`

const useCase2 = `// TODO`

const AdvancedUseCases = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  const tabDescription = [
    'If you want to change the theme or even to create a dark theme, Scaleway UI allows you to do it easily',
    'Lorem ipsum...',
  ]

  return (
    <Grid mb={9}>
      <Row textAlign="center" justifyContent="center">
        <Col xsmall={10}>
          <Typography variant="hero" mb={5}>
            Advanced Use Cases
          </Typography>
          <Typography textAlign="justify" mb={5}>
            {tabDescription[selectedTab]}
          </Typography>
          <CopyBox
            onChange={(value: unknown) => setSelectedTab(value as number)}
          >
            <CopyBox.Command title="Dark theme" command={useCase1} />
            <CopyBox.Command title="Simple Form" command={useCase2} />
          </CopyBox>
        </Col>
      </Row>
    </Grid>
  )
}

export default AdvancedUseCases
