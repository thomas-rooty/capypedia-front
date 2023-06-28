'use client'
import styles from './ReportCapy.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { User } from '@/utils/types/User'
import { getUserData } from '@/utils/mutations/storageMutations'

const ReportCapy = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const { data } = getUserData()
    console.log(data)
    setUser(data as User)
  }, [])

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <div className={styles.content}>
            <h1 className={styles.title}>Signaler un capybara !</h1>
            <p className={styles.description}>
              Vous avez vu un capybara dans la nature ? Signalez-le nous afin que nous puissions l'ajouter à notre base de données.
            </p>
          </div>
          <img src={'/icons/arrow-right-thin.svg'} className={styles.arrow} alt='Arrow right thin' />
          <Link href='/observations/new'>
            <button className={styles.reportCapyBtn}>
              <span className={styles.reportCapyBtnText}>Signaler un capybara</span>
            </button>
          </Link>
        </>
      ) : (
        <>
          <div className={styles.content}>
            <h1 className={styles.title}>Signaler un capybara !</h1>
            <p className={styles.description}>
              Vous avez vu un capybara dans la nature ? Signalez-le nous afin que nous puissions l'ajouter à notre base de données.
            </p>
          </div>
          <Link href='/login'>
            <button className={styles.reportCapyBtn}>
              <span className={styles.reportCapyBtnText}>Connectez-vous</span>
            </button>
          </Link>
        </>
      )}
    </div>
  )
}

export default ReportCapy
