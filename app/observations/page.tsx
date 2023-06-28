import styles from './page.module.css'
import AllObservations from '@/components/observations/AllObservations'

const ObservationsPage = () => {
  return (
    <div className={styles.container}>
      <AllObservations />
      <header className={styles.header}>
        <img src={'/images/header_blurred.png'} className={styles.headerImage} alt="Header background image" />
      </header>
    </div>
  )
}

export default ObservationsPage
