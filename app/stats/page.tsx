'use client'
import styles from './page.module.css'
import StatsObservations from '@/components/stats/StatsObservations'

const StatsPage = () => {
  return (
    <main className={styles.main}>
      <StatsObservations />
    </main>
  )
}

export default StatsPage
