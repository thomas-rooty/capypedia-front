'use client'
import styles from './page.module.css'
import Login from '@/components/forms/login/Login'
import CapyWalking from '@/components/capywalking/CapyWalking'

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <Login />
      <CapyWalking />
    </main>
  )
}

export default LoginPage
