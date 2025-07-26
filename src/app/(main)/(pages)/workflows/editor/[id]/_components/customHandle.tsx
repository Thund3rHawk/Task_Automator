import { useEditor } from '@/providers/editor-provider'
import React, { CSSProperties } from 'react'
import {Handle, HandleProps, useStore} from 'reactflow'

type Props = HandleProps & {style?: CSSProperties}

// const selector = (s:any) => ({
//     nodeInternals: s.nodeInternals,
//     edges: s.edges,
// })

const CustomHandle = (props: Props) => {

    const {state} = useEditor()

  return (
    <Handle
        {...props}
        isValidConnection={(e)=>{
            const sourceFromHandleInState = state.editor.edges.filter(
                (edge)=>edge.source === e.source
            ).length
            const sourceNode = state.editor.elements.find(
                (node)=> node.id === e.source
            )
            // target node
            const targetFromHandleInState = state.editor.edges.filter(
                (edge)=> edge.target === e.target
            ).length

            if (sourceFromHandleInState < 1) return true;
            if (sourceNode?.type === 'Condition') return true;
            if (targetFromHandleInState === 1) return false;
            return false;
        }}
        className='!-bottom-1.2 dark:bg-neutral-800'
        style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '2px solid #888',
            background: 'white',
            bottom: -2, // Fix 2px gap for bottom handle
            ...props.style,
        }}
    />
  )
}

export default CustomHandle