import React, { useState } from 'react'
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

type CopyCommandBoxProps = {
  commands: Array<{
    title: string
    command: string
  }>
}

const CopyCommandBox = ({
  commands = [
    {
      title: '',
      command: '',
    },
  ],
}: CopyCommandBoxProps): JSX.Element => {
  const [showCopyButton, setShowCopyButton] = useState(false)
  const [tab, setTab] = useState(commands?.[0]?.title)

  const currentCommand = commands.find(
    command => tab === command.title,
  )?.command

  return (
    <StyledDiv
      onMouseEnter={() => setShowCopyButton(true)}
      onMouseLeave={() => setShowCopyButton(false)}
    >
      {commands?.length > 1 && (
        <TabGroup selected={tab} onChange={setTab} mb={3}>
          {commands.map(({ title }) => (
            <TabGroup.Tab key={title} name={title}>
              {title}
            </TabGroup.Tab>
          ))}
        </TabGroup>
      )}
      <SyntaxHighlighter
        language="jsx"
        style={darcula}
        customStyle={{ background: 'none', fontSize: '14px', padding: 0 }}
        showLineNumbers
      >
        {currentCommand}
      </SyntaxHighlighter>
      <StyledCopyButton
        text={currentCommand || ''}
        showCopyButton={showCopyButton}
      />
    </StyledDiv>
  )
}

export default CopyCommandBox
