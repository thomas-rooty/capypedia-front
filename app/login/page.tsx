'use client'
import styles from './page.module.css'
import Login from '@/components/forms/login/Login'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  )
}

export default LoginPage
