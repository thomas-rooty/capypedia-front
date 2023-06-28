import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { User } from '@/utils/types/User'
import { register } from '@/utils/apiUtils'
import { setUserData } from '@/utils/mutations/storageMutations'

const Register = () => {
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
    email: '',
  })

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await register(user)
    if (res.status === 200) {
      setSuccess(true)
      console.log(res)
      setUserData(res)
    } else {
      setError(res.message)
    }
  }

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false)
      }, 2000)
    }
  }, [success])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>S'enregistrer</h1>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>Successfully registered!</p>}
      <input
        className={styles.input}
        required
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        required
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        required
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <button className={styles.submitBtn} type="submit">
        S'enregistrer
      </button>
      <div className={styles.subtitle}>
        <p>Vous avez déjà un compte ?</p>
        <a href="/login">Se connecter</a>
      </div>
    </form>
  )
}

export default Register
