import * as z from 'zod'
export const formSchema = z.object({
  name: z.string().min(2, 'Required'),
  email: z.email('Required')
})