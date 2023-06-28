import { User } from '@/utils/types/User'

const apiUrl = 'http://localhost:8000'

/**
 * Login a new user
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

/**
 * Login a user
 * @param username
 * @param password
 * @returns {Promise<User>}
 */
export const login = async (username: string, password: string) => {
  const response = await fetch(`${apiUrl}/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  return response.json()
}
