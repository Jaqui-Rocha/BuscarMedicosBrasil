export interface ProfileProps {
  id: number
  email: string
  firstName: string
  lastName: string
  profiles: Profile[]
  enabled: boolean
}

export interface Profile {
  id: number
  name: string
  authority: string
}
