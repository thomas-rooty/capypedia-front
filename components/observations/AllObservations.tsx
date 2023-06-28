'use client'
import styles from './AllObservations.module.css'
import { getObservations } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import { Observation } from '@/utils/types/Observation'

const AllObservations = () => {
  const [observations, setObservations] = useState<Observation[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchObservations = async () => {
      const observations = await getObservations()
      console.log('observations', observations)
      setObservations(observations.data)
      setLoading(false)
    }
    fetchObservations()
  }, [])

  return (
    <div className={styles.container}>
      <h1>All Observations</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {observations.map((observation) => (
            <li key={observation.id}>
              <a onClick={() => alert('TODO: show observation')}>{observation.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AllObservations
