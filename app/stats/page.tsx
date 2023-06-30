'use client'
import styles from './page.module.css'
import StatsObservations from '@/components/stats/observations/StatsObservations'
import StatsComments from '@/components/stats/comments/StatsComments'
import StatsApproved from '@/components/stats/approved/StatsApproved'

const StatsPage = () => {
  return (
    <main className={styles.main}>
      <StatsObservations />
      <StatsComments />
      <StatsApproved />
    </main>
  )
}

export default StatsPage
