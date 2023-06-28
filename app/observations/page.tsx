'use client'
import styles from './page.module.css'
import AllObservations from '@/components/observations/AllObservations'
import Link from 'next/link'
import { getUserData } from '@/utils/mutations/storageMutations'
import { useEffect, useState } from 'react'
import { User } from '@/utils/types/User'

const ObservationsPage = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const { data } = getUserData()
    console.log(data)
    setUser(data as User)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Observations</h1>
            {user && (
              <div className={styles.buttonContainer}>
                <Link href="/observations/new" className={styles.buttonLink}>
                  <span className={styles.button}>Ajouter une observation</span>
                </Link>
              </div>
            )}
          </div>
          <img src={'/images/header_blurred.png'} className={styles.headerImage} alt="Header background image" />
        </header>
      </div>
      <AllObservations />
    </>
  )
}

export default ObservationsPage
