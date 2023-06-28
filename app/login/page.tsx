'use client'
import styles from './page.module.css'
import Login from '@/components/forms/login/Login'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Login />
      <header className={styles.header}>
        <img src={'/images/header_blurred.png'} className={styles.headerImage} alt="Header background image" />
      </header>
    </div>
  )
}

export default LoginPage
