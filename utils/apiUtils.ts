import { User } from '@/utils/types/User'
import { Observation } from '@/utils/types/Observation'
import { Comment } from '@/utils/types/Comment'

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
 * Get a user by its id
 * @param {string} id
 * @returns {Promise<User>}
 */
export const getUser = async (id: number | null) => {
  if (!id) return null
  const response = await fetch(`${apiUrl}/user/${id}`)
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
 * Get one observation
 * @param {string} id
 * @returns {Promise<Observation>}
 */
export const getObservation = async (id: string) => {
  const response = await fetch(`${apiUrl}/observations/${id}`)
  return response.json()
}

/**
 * Add a new observation
 * @param {Observation} observation
 * @param token
 * @returns {Promise<Observation>}
 */
export const addObservation = async (observation: Observation, token: string | null) => {
  const response = await fetch(`${apiUrl}/observations/changes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(observation),
  })
  return response.json()
}

/**
 * Edit an observation
 * @param {Observation} observation
 * @param token
 * @returns {Promise<Observation>}
 */
export const editObservation = async (observation: Observation, token: string | null) => {
  const response = await fetch(`${apiUrl}/observations/changes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(observation),
  })
  return response.json()
}

/**
 * Get all comments of an observation
 * @param {string} id
 * @returns {Promise<Comment[]>}
 */
export const getComments = async (id: string) => {
  const response = await fetch(`${apiUrl}/observations/${id}/comments`)
  return response.json()
}

/**
 * Add a new comment
 * @param {Comment} comment
 * @param token
 */
export const addComment = async (comment: Comment, token: string | null) => {
  const response = await fetch(`${apiUrl}/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(comment),
  })
  return response.json()
}

/**
 * Check a user role
 * @param token
 * @returns {Promise<status>}
 */
export const checkRole = async (token: string | null) => {
  const response = await fetch(`${apiUrl}/user/role`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
  })
  return response.json()
}

/**
 * Edit a user
 * @param {} user
 * @param token
 * @returns {Promise<User>}
 */
export const editUser = async (user: {}, token: string | null) => {
  const response = await fetch(`${apiUrl}/user/changes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(user),
  })
  return response.json()
}

/**
 * Delete a comment
 * @param {string} id
 * @param token
 * @returns {Promise<void>}
 */
export const deleteComment = async (id: string, token: string | null) => {
  const response = await fetch(`${apiUrl}/comments`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify({ id }),
  })
  return response.json()
}

/**
 * Edit a comment
 * @param {Comment} comment
 * @param token
 * @param {string} id
 * @returns {Promise<void>}
 */
export const editComment = async (comment: Comment, token: string | null, id: string) => {
  const response = await fetch(`${apiUrl}/comments/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(comment),
  })
  return response.json()
}

/**
 * Get observations stats
 * @returns {Promise<any>}
 */
export const getObservationStats = async () => {
  const response = await fetch(`${apiUrl}/stats/observations`)
  return response.json()
}

/**
 * Delete an observation
 * @param {string} id
 * @param token
 */
export const deleteObservation = async (id: string, token: string | null) => {
  const response = await fetch(`${apiUrl}/observations/changes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify({ id }),
  })
  return response.json()
}

/**
 * Get comments stats
 * @returns {Promise<any>}
 */
export const getCommentStats = async () => {
  const response = await fetch(`${apiUrl}/stats/comments`)
  return response.json()
}

/**
 * Get approved stats
 * @returns {Promise<any>}
 */
export const getApprovedStats = async () => {
  const response = await fetch(`${apiUrl}/stats/approved`)
  return response.json()
}
