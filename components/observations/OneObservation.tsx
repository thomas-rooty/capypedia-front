'use client'
import styles from './OneObservation.module.css'
import { getObservation } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import { Observation } from '@/utils/types/Observation'

interface OneObservationProps {
  id: string
}

const OneObservation = ({ id }: OneObservationProps) => {
  const [observation, setObservation] = useState<Observation>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchObservation = async () => {
      const observation = await getObservation(id)
      setObservation(observation.data)
      setLoading(false)
    }
    fetchObservation()
  }, [id])

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
          </div>
        )
      )}
    </div>
  )
}

export default OneObservation
