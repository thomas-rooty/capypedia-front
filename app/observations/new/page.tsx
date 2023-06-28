'use client'
import styles from './page.module.css'
import ObservationForm from '@/components/forms/observation/ObservationForm'

const AddObservationsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <ObservationForm />
          </div>
          <img src={'/images/header_blurred.png'} className={styles.headerImage} alt="Header background image" />
        </header>
      </div>
    </div>
  )
}

export default AddObservationsPage
