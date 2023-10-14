import { AxiosResponse, isAxiosError } from 'axios'
import api from '../api'
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

export const getDashboard = async (token: string) =>
  await api.get('users/dashboard', {
    headers: { Authorization: `Bearer ${token}` }
  })
