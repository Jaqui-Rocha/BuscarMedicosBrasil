import { AxiosResponse, isAxiosError } from 'axios'
import api from '../api'
import { instancia } from '../api'
import {
  PropsDashbord,
  PropsSpecialties,
  PropsUsers,
  Pagination
} from './types'

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
export const getUsers1 = async () => {
  try {
    const result = await instancia.get<PropsUsers>(`users/`, {
      params: {
        page: '',
        size: 6,
        search: ''
      }
    })

    return result.data.content
  } catch (error) {
    console.log('Erro', error)
    return null
  }
}
export const getUsers = async (page?: number) => {
  try {
    const result = await instancia.get<PropsUsers>(`users/profile?`, {
      params: {
        page,
        size: 6
      }
    })

    return result.data
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}
export const getSpecialties = async () => {
  try {
    const result = await instancia.get<PropsSpecialties | null>('specialties')
    return result.data
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}
export const getSpecialtiesId = async (id: number) => {
  try {
    const result = await instancia.get<PropsSpecialties>(`specialties/${id}`, {
      params: {
        id
      }
    })
    return result.data.content
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}
export const postSpecialties = async (name: string, enabled: boolean) => {
  try {
    const result = await instancia.post<PropsSpecialties>(
      'specialties',
      {},
      {
        params: {
          name,
          enabled
        }
      }
    )
    console.log(result)
    return result.data.content
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}
export const deleteSpecialties = async (id: number) => {
  try {
    const result = await instancia.delete(`specialties/${id}`)
    return result.data.content
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}
export const putSpecialties = async (name: string, enabled: boolean) => {
  try {
    const result = await instancia.put<PropsSpecialties>(
      'specialties/{id}',
      {},
      {
        params: {
          name,
          enabled
        }
      }
    )
    return result.data.content
  } catch (error) {
    console.log('Algo deu errado, tente novamente', error)
    return null
  }
}
