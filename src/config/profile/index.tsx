import { AxiosResponse, isAxiosError } from 'axios'
import api from '../api'
export const Profile = async () => {
  try {
    const result: AxiosResponse<profileProps> = await api.get('me')
    console.log(result)
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.code)
    }
  }
}
