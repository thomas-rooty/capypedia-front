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
            <p>Behaviour : {observation.behaviour}</p>
            <p>Approved : {observation.approved.toString()}</p>
            <p>Created : {observation.createdAt}</p>
            <p>place : {observation.place}</p>
            <p>image : {observation.image}</p>
          </div>
        )
      )}
    </div>
  )
}

export default OneObservation
