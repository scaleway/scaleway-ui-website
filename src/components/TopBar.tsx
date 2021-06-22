import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styled from '@emotion/styled'
import { Col, Grid, Row, Switch, Icon, Breakpoint } from '@scaleway/ui'
import Logo from './Logo'
import GithubAndDocumentationButtons from './GithubAndDocumentationButtons'

const Header = styled.header`
  min-height: 60px;
  height: 60px;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 8px 2px rgba(178, 182, 195, 0.37);
  display: flex;
  align-items: center;
  min-width: 10px;
  padding: 8px 10px;
`

type TopBarProps = {
  isLightMode: boolean
  setIsLightMode: Dispatch<SetStateAction<boolean>>
}

const TopBar = ({ isLightMode, setIsLightMode }: TopBarProps): JSX.Element => {
  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('settings') as string)
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
              onChange={(event: { target: { checked: boolean } }) =>
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
