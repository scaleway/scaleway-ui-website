import React, { ReactNode, useState } from 'react'
import styled from '@emotion/styled'
import CopyButton from './CopyButton'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { TabGroup } from '@scaleway/ui'

const StyledDiv = styled.div`
  box-shadow: 0 0 8px 2px rgba(178, 182, 195, 0.37);
  background-color: ${({ theme }) => theme.colors.pureDark};
  padding: 16px 24px;
  border-radius: 4px;
`

const StyledCopyButton = styled(CopyButton, {
  shouldForwardProp: prop => !['showCopyButton'].includes(prop as string),
})`
  position: absolute;
  right: 16px;
  bottom: 8px;
  opacity: ${({ showCopyButton }) => (showCopyButton ? '1' : '0')};
  transition: opacity 200ms ease;
`

type CopyBoxProps = {
  children: ReactNode
}

const CopyBox = ({ children }: CopyBoxProps): JSX.Element => {
  const flatChild = (
    React.Children.map(children, child =>
      React.isValidElement(child) ? child : undefined,
    ) || []
  ).filter(child => !!child)
  const [showCopyButton, setShowCopyButton] = useState(false)
  const [tab, setTab] = useState(0)

  return (
    <StyledDiv
      onMouseEnter={() => setShowCopyButton(true)}
      onMouseLeave={() => setShowCopyButton(false)}
    >
      {flatChild.length > 1 && (
        <TabGroup selected={tab} onChange={setTab} mb={3}>
          {flatChild.map(({ props: { title } }) => (
            <TabGroup.Tab key={`tab-${title}`}>{title}</TabGroup.Tab>
          ))}
        </TabGroup>
      )}
      {React.cloneElement(flatChild[tab], {
        showCopyButton,
      })}
    </StyledDiv>
  )
}

type CommandProps = {
  command: string
  title: string
  showCopyButton?: boolean
}

const Command = ({ command, showCopyButton }: CommandProps): JSX.Element => {
  return (
    <>
      <SyntaxHighlighter
        language="jsx"
        style={darcula}
        customStyle={{ background: 'none', fontSize: '14px', padding: 0 }}
        showLineNumbers
      >
        {command}
      </SyntaxHighlighter>
      <StyledCopyButton text={command || ''} showCopyButton={showCopyButton} />
    </>
  )
}

CopyBox.Command = Command

export default CopyBox
