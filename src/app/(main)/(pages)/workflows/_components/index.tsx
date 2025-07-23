import React from 'react'
import WorkflowCard from './workflowCard'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4 h-full'>
        <section className='flex flex-col gap-4 p-6 overflow-y-auto max-h-[calc(100vh-200px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <WorkflowCard name = 'Automation Workflow' description='Creating a workflow' id = 'cd568723orI' publish = {true}/>
            <WorkflowCard name = 'Automation Workflow' description='Creating a workflow' id = 'cd568723orI' publish = {true}/>
            <WorkflowCard name = 'Automation Workflow' description='Creating a workflow' id = 'cd568723orI' publish = {true}/>
            <WorkflowCard name = 'Automation Workflow' description='Creating a workflow' id = 'cd568723orI' publish = {true}/>
        </section>
    </div>
  )
}

export default Workflows