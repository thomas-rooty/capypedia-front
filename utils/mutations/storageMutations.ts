import { User } from '@/utils/types/User'

interface UserObjectProps {
  data: User
  token: string
}

// Store user data in local storage
export const setUserData = ({ data, token }: UserObjectProps): void => {
  localStorage.setItem('user', JSON.stringify(data))
  localStorage.setItem('token', token)
}
