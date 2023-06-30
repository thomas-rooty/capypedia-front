import styles from './Login.module.css'
import { useState } from 'react'
import { User } from '@/utils/types/User'
import { login } from '@/utils/apiUtils'
import { setUserData } from '@/utils/mutations/storageMutations'

const Login = () => {
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
    email: '',
  })

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await login(user.username, user.password)
    if (res.status !== 200) {
      setError(res.message)
      alert('Mauvais identifiants')
      return
    }

    // Save user data to local storage
    setUserData(res)
    window.location.href = '/'
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Se connecter</h1>
      {error && <p className={styles.error}>{error}</p>}
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
      <button className={styles.submitBtn} type="submit">
        Se connecter
      </button>
      <div className={styles.subtitle}>
        <p>Tu n'as pas de compte ?</p>
        <a href="/register">Créer un compte</a>
      </div>
    </form>
  )
}

export default Login
