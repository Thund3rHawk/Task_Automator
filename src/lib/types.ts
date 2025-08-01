import { ConnectionProviderProps } from '@/providers/connection-providers'
import * as z from 'zod'
export const formSchema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.email('Required')
})

export const workflowFormSchema = z.object({
  name: z.string().min(2, 'Required'),
  description: z.string().min(5)
})

export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connection = {
  title: ConnectionTypes
  description: string
  image: string
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}

export type EditorCanvasTypes = 
  | 'Email'
  | 'Condition'
  | 'AI'
  | 'Slack'
  | 'Google Drive'
  | 'Notion'
  | 'Discord'
  | 'Custom Webhook'
  | 'Google Calendar'
  | 'Trigger'
  | 'Action'
  | 'Wait'

export type EditorCanvasCardType = {
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
  metadata: any;
  type: EditorCanvasTypes
}

export type EditorNodeType = {
  id: string
  type: EditorCanvasCardType['type']
  position:{
    x:number;
    y:number;
  }
  data: EditorCanvasCardType
}

export type EditorNode = EditorNodeType;

export type EditorActions = 
  | {
    type: 'LOAD_DATA';
    payload: {
      elements: EditorNode[]
      edges: {
        id: string,
        source: string,
        target: string
      }[]
    }
  }
  | {
    type: 'UPDATE_NODE'
    payload: {
      elements: EditorNode[]
    }
  }
  | {type: 'REDO'}
  | {type: 'UNDO'}
  | {
    type: 'SELECTED_ELEMENT'
    payload: {
      elements: EditorNode
    }
  }


