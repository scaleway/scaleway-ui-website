import styled from '@emotion/styled'
import { Breakpoint, Col, Grid, Icon, Row, Switch } from '@scaleway/ui'
import React, { useEffect } from 'react'
import GithubAndDocumentationButtons from './GithubAndDocumentationButtons'
import Logo from './Logo'

const Header = styled.header`
  min-height: 60px;
  height: 60px;
  top: 0;
  background-color: ${({ theme }): string => theme.colors.white};
  box-shadow: 0 0 8px 2px rgba(178, 182, 195, 0.37);
  display: flex;
  align-items: center;
  min-width: 10px;
  padding: 8px 10px;
`

type TopBarProps = {
  isLightMode: boolean
  setIsLightMode: (isLight: boolean) => void
}

const TopBar = ({ isLightMode, setIsLightMode }: TopBarProps): JSX.Element => {
  useEffect(() => {
    const localStorageSettings = localStorage.getItem('settings') ?? '{}'
    const settings = JSON.parse(localStorageSettings) as ApplicationSettings
    if (settings) {
      setIsLightMode(settings.isLightMode)
    } else {
      const isNavigatorLightTheme = window.matchMedia(
        '(prefers-color-scheme: light)',
      ).matches
      setIsLightMode(isNavigatorLightTheme)
    }
  }, [setIsLightMode])

  return (
    <Header>
      <Grid>
        <Row>
          <Col display="flex" justifyContent="flex-start" alignItems="center">
            <Logo width={124} height={24} />
          </Col>
          <Col display="flex" justifyContent="flex-end">
            <Breakpoint up="medium">
              <GithubAndDocumentationButtons />
            </Breakpoint>
            <Switch
              name="darkMode"
              size="small"
              width={54}
              checked={isLightMode}
              onChange={(event) =>
                setIsLightMode(event.target.checked)
              }
              labeled
              onLabel={<Icon size={20} name="sun" />}
              offLabel={<Icon size={20} name="moon" />}
            />
          </Col>
        </Row>
      </Grid>
    </Header>
  )
}

export default TopBar
