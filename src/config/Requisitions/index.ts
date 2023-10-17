import { AxiosResponse, isAxiosError } from 'axios'
import api from '../api'
import { instancia } from '../api'
import { PropsDashbord, PropsUsers } from './types'
export const login = async (email: string, password: string) => {
  try {
    const result = await api.post(
      '/public/register/login',
      {},
      {
        params: {
          email,
          password
        }
      }
    )

    if (result.data.message === 'Successfully login') {
      localStorage.setItem('token', result.data.token)
      return true
    }

    return false
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.code)
    }
  }
}

export const getDashboard = async () => {
  try {
    const result = await instancia.get<PropsDashbord>('users/dashboard')
    console.log(result)
    return result
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}

export const getUsers = async () => {
  try {
    const result = await instancia.get<PropsUsers>('users/profile')
    console.log(result)
    return result
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}
