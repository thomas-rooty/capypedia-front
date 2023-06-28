'use client'
import styles from './page.module.css'
import ObservationForm from '@/components/forms/observation/ObservationForm'
import CapyWalking from '@/components/capywalking/CapyWalking'

const AddObservationsPage = () => {
  return (
    <main className={styles.main}>
      <ObservationForm />
      <CapyWalking />
    </main>
  )
}

export default AddObservationsPage
