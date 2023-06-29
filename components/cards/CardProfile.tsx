'use client'
import styles from './CardProfile.module.css'
import { useState, useEffect } from 'react'
import { getUserData } from '@/utils/mutations/storageMutations'
import { User } from '@/utils/types/User'

const CardProfile = () => {
  const [user, setUser] = useState<User | null>(null)
  const formattedDate = user?.date_joined ? new Date(user.date_joined).toLocaleDateString() : ''

  useEffect(() => {
    const { data } = getUserData()
    console.log(data)
    setUser(data as User)
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.avatar} src="/icons/capybara.png" alt="Capybara walking" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyItem}>
          <span className={styles.cardBodyItemTitle}>Pseudonyme: </span>
          <span className={styles.cardBodyItemValue}><b>{user?.username}</b></span>
        </div>
        <div className={styles.cardBodyItem}>
          <span className={styles.cardBodyItemTitle}>Email: </span>
          <span className={styles.cardBodyItemValue}><b>{user?.email}</b></span>
        </div>
        <div className={styles.cardBodyItem}>
          <span className={styles.cardBodyItemTitle}>Date d'inscription: </span>
          <span className={styles.cardBodyItemValue}><b>{formattedDate}</b></span>
        </div>
      </div>
    </div>
  )
}

export default CardProfile
