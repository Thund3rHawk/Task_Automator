import React from 'react'

type Props = {children: React.ReactNode}

const FlowInstance = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default FlowInstance