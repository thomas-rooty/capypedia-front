'use client'
import styles from './page.module.css'
import Register from '@/components/forms/register/Register'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <Register />
      <header className={styles.header}>
        <img src={'/images/header_blurred.png'} className={styles.headerImage} alt="Header background image" />
      </header>
    </div>
  )
}

export default RegisterPage
