import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

type Props = {
    icon: string,
    title: string,
    description: string
}

const ConnectionCard = ({icon, title, description}: Props) => {
  return (
    <Card className='mx-10'>
        <CardHeader className='flex flex-col gap-4'>
            <div className="flex flex-row gap-2">
                <Image src = {icon} alt = {title} height = {30} width = {30} className = 'object-contain'/>                
            </div>
            <div>
                <CardTitle className='text-lg'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </div>
        </CardHeader>
    </Card>
  )
}

export default ConnectionCard