import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    name: string
    description: string
    id: string
    publish: boolean | null
}

const WorkflowCard = ({name, description, id, publish}: Props) => {
  return (
    <Card>
        <CardHeader>
            <Link href = {`/workflows/editor/${id}`}>
            <div className='flex flex-row gap-2'>
                <Image src = '/icons/discord.png' alt = 'discord' height={30} width={30} className='object-contain'/>
                <Image src = '/icons/slack.png' alt = 'discord' height={30} width={30} className='object-contain'/>
                <Image src = '/icons/notion.png' alt = 'discord' height={30} width={30} className='object-contain'/>
            </div>
            <div>
                <CardTitle className='text-lg'>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
            </Link>
        </CardHeader>
    </Card>
  )
}

export default WorkflowCard