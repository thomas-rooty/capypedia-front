'use client'
import styles from './OneObservation.module.css'
import { getObservation, checkRole, deleteObservation } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import { Observation } from '@/utils/types/Observation'
import { getUserData } from '@/utils/mutations/storageMutations'

interface OneObservationProps {
  id: string
}

const OneObservation = ({ id }: OneObservationProps) => {
  const [userId, setUserId] = useState<string | null>('')
  const [token, setToken] = useState<string | null>('')
  const [observation, setObservation] = useState<Observation>()
  const [loading, setLoading] = useState<boolean>(true)
  const [role, setRole] = useState<string>('')

  // Get user info
  useEffect(() => {
    const fetchUser = async () => {
      if (!observation) return
      const { data, token } = await getUserData()
      setUserId(data?.id as unknown as string)
      setToken(token)
      setLoading(false)
    }
    fetchUser()
  }, [observation])

  // Get user role
  useEffect(() => {
    const fetchRole = async () => {
      const res = await checkRole(token)
      if (res.status === 401) {
        setRole('user')
      }
      if (res.status === 200) {
        setRole('admin')
      }
    }
    fetchRole()
  }, [token])

  // Get observation details
  useEffect(() => {
    const fetchObservation = async () => {
      const observation = await getObservation(id)
      setObservation(observation.data)
      setLoading(false)
    }
    fetchObservation()
  }, [id])

  // Delete observation
  const handleDelete = async () => {
    await deleteObservation(id, token)
    window.location.href = '/observations'
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        observation && (
          <div>
            <h1>{observation.title}</h1>
            <img src={observation.image} className={styles.image} alt={observation.title} />
            <p>{observation.behaviour}</p>
            <div className={styles.observationContainer}>
              <p>Observé à {observation.place}</p>
            </div>
            {userId === observation?.idUser || role === 'admin' ? (
              <img src="/icons/close.png" alt="delete" className={styles.deleteButton} onClick={handleDelete} />
            ) : null}
          </div>
        )
      )}
    </div>
  )
}

export default OneObservation
