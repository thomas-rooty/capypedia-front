'use client'
import styles from './page.module.css'
import Register from '@/components/forms/register/Register'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <Register />
    </div>
  )
}

export default RegisterPage
