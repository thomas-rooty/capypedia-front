'use client'
import styles from './page.module.css'
import { useSearchParams } from 'next/navigation'
import OneObservation from '@/components/observations/OneObservation'

const ObservationDetails = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  return (
    <main className={styles.main}>
      {id && <OneObservation id={id} />}
    </main>
  )
}

export default ObservationDetails
