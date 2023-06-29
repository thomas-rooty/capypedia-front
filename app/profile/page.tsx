'use client'
import styles from './page.module.css'
import CapyWalking from '@/components/capywalking/CapyWalking'
import CardProfile from '@/components/cards/CardProfile'

const ProfilePage = () => {
  return (
    <main className={styles.main}>
      <CardProfile />
      <CapyWalking />
    </main>
  )
}

export default ProfilePage
