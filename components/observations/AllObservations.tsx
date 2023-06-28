'use client'
import styles from './AllObservations.module.css'
import { getObservations } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import { Observation } from '@/utils/types/Observation'
import CardObservation from '@/components/cards/CardObservation'

const AllObservations = () => {
  const [observations, setObservations] = useState<Observation[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchObservations = async () => {
      const observations = await getObservations()
      setObservations(observations.data)
      setLoading(false)
    }
    fetchObservations()
  }, [])

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {observations.map((observation) => (
              <CardObservation observation={observation} key={observation.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default AllObservations
