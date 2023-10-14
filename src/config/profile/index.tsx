import api from '../api'

import { ProfileProps } from './types'

export const Profile = async () => {
  const token = localStorage.getItem('token')
  try {
    const result = await api.get<ProfileProps>('me', {
      headers: { Authorization: `Bearer ${token}` }
    })

    const userData = result.data

    return userData
  } catch (error) {
    console.error('Não deu certo', error)
    return null
  }
}
