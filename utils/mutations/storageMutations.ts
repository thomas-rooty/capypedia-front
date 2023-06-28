import { User } from '@/utils/types/User'

interface UserObjectProps {
  data: User | null
  token: string | null
}

// Store user data in local storage
export const setUserData = ({ data, token }: UserObjectProps): void => {
  localStorage.setItem('user', JSON.stringify(data))
  localStorage.setItem('token', token as string)
}

// Get user data from local storage
export const getUserData = (): UserObjectProps => {
  const data = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  if (!data || !token) {
    return { data: null, token: null }
  }

  return { data: JSON.parse(data), token }
}

// Disconnect user
export const disconnectUser = (): void => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}
