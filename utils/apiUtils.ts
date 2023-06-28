import { User } from '@/utils/types/User'

const apiUrl = 'http://localhost:8000'

/**
 * Register a new user
 * @param user
 * @returns {Promise<User>}
  */
export const register = async (user: User) => {
  const response = await fetch(`${apiUrl}/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
  return response.json()
}
