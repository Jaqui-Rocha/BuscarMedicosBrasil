import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev/'
})
const token = localStorage.getItem('token')
export const instancia = axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev/',
  headers: { Authorization: `Bearer ${token}` }
})
