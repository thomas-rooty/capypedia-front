import styles from './page.module.css'
import AllObservations from '@/components/observations/AllObservations'
import Link from 'next/link'

const ObservationsPage = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Observations</h1>
            <div className={styles.buttonContainer}>
              <Link href="/observations/new" className={styles.buttonLink}>
                <span className={styles.button}>Ajouter une observation</span>
              </Link>
            </div>
          </div>
          <img src={'/images/header_blurred.png'} className={styles.headerImage} alt="Header background image" />
        </header>
      </div>
      <AllObservations />
    </>
  )
}

export default ObservationsPage
