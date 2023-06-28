import styles from './page.module.css'
import AllObservations from '@/components/observations/AllObservations'

const ObservationsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Observations</h1>
      <AllObservations />
    </div>
  )
}

export default ObservationsPage
