'use server'

import { db } from "@/lib/db"

export const onCreateNodeEdges = async (
    flowId: string,
    nodes: string,
    edges: string,
    flowPath: string,
) => {
    const flow = await db.workflows.update({
        where: {
            id: flowId,
        },
        data: {
            nodes,
            edges,
            flowPath: flowPath
        }
    })

    if (flow) return {message: 'flow saved'}
}

export const onFlowPublish = async (
    flowId: string,
    isPublished: boolean
) => {
    const flow = await db.workflows.update({
        where: {
            id: flowId,
        },
        data: {
            publish: isPublished
        }
    })
    
    if (flow) return 'Workflow Published'
    return 'Unable to publish workflow'
}