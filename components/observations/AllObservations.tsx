'use client'
import styles from './AllObservations.module.css'
import { getObservations, checkRole } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import { Observation } from '@/utils/types/Observation'
import { getUserData } from '@/utils/mutations/storageMutations'
import CardObservation from '@/components/cards/CardObservation'

const AllObservations = () => {
  const [role, setRole] = useState<string>('')
  const [observations, setObservations] = useState<Observation[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // Check user role
  useEffect(() => {
    const fetchRole = async () => {
      const { token } = await getUserData()
      const res = await checkRole(token)
      if (res.status === 401) {
        setRole('user')
      }
      if (res.status === 200) {
        setRole('admin')
      }
    }
    fetchRole()
  }, [])

  // Get observations
  useEffect(() => {
    const fetchObservations = async () => {
      const fetchedObservations = await getObservations()
      console.log(fetchedObservations)
      if (role === 'admin') {
        setObservations(fetchedObservations.data)
      } else {
        const userObservations = fetchedObservations.data.filter((observation: Observation) => observation.approved)
        setObservations(userObservations)
      }
      setLoading(false)
    }
    fetchObservations()
  }, [role])

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
