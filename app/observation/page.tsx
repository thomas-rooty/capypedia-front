'use client'
import styles from './page.module.css'
import { useSearchParams } from 'next/navigation'
import OneObservation from '@/components/observations/OneObservation'
import AllComments from '@/components/comments/AllComments'
import AddComment from '@/components/forms/comment/AddComment'

const ObservationDetails = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  return (
    <main className={styles.main}>
      {id && (
        <>
          <OneObservation id={id} />
          <AddComment idObservation={Number(id)} />
          <AllComments id={id} />
        </>
      )}
    </main>
  )
}

export default ObservationDetails
