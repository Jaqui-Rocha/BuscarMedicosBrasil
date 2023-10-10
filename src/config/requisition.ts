import api from './api'

export const login = async (email: string, password: string) => {
  const response = await api.post('public/register/login', {
    email: 'admin@email.com',
    password: 'Teste@123'
  })
}
export const getDashboard = async (token: string) =>
  await api.get('users/dashboard', {
    headers: { Authorization: `Bearer ${token}` }
  })
