import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/connectionCard'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'> 
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground ">
          Connect all apps directly from here. You may need to connect these apps regularly to refresh verification
        </section>
        {CONNECTIONS.map((item, index)=>{
          return (
            <ConnectionCard key = {index} icon={item.image} title= {item.title} description = {item.description} />
          )
        })}
      </div>
    </div>
  )
}

export default Page