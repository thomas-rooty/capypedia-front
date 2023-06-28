'use client'
import styles from './page.module.css'
import Login from '@/components/forms/login/Login'

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  )
}

export default LoginPage
