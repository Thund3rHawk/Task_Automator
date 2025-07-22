import React from 'react'
import WorkflowBtn from './_components/workflowBtn'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 relative'>
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Workflows
        <WorkflowBtn/>
      </h1>
    </div>
  )
}

export default Page