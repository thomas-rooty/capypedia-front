'use client'
import styles from './page.module.css'
import Register from '@/components/forms/register/Register'
import CapyWalking from '@/components/capywalking/CapyWalking'

const RegisterPage = () => {
  return (
    <main className={styles.main}>
      <Register />
      <CapyWalking />
    </main>
  )
}

export default RegisterPage
