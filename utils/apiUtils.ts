import { User } from '@/utils/types/User'
import { Observation } from '@/utils/types/Observation'

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

/**
 * Get all observations
 * @returns {Promise<Observation[]>}
 */
export const getObservations = async () => {
  const response = await fetch(`${apiUrl}/observations/`)
  return response.json()
}

/**
 * Add a new observation
 * @param {Observation} observation
 * @param token
 * @returns {Promise<Observation>}
 */
export const addObservation = async (observation: Observation, token: string | null) => {
  const response = await fetch(`${apiUrl}/observations/changes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${token}`,
    },
    body: JSON.stringify(observation),
  })
  return response.json()
}
