import styles from './page.module.css'
import AllObservations from '@/components/observations/AllObservations'
import HeaderContent from '@/components/header/HeaderContent'

const ObservationsPage = () => {

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderContent />
      </header>
      <AllObservations />
    </main>
  )
}

export default ObservationsPage
