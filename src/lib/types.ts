import { ConnectionProviderProps } from '@/providers/connection-providers'
import * as z from 'zod'
export const formSchema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.email('Required')
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