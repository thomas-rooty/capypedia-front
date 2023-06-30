'use client'
import styles from './CardProfile.module.css'
import { useState, useEffect } from 'react'
import { getUserData, disconnectUser } from '@/utils/mutations/storageMutations'
import { User } from '@/utils/types/User'
import { editUser } from '@/utils/apiUtils'

const CardProfile = () => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const formattedDate = user?.date_joined ? new Date(user.date_joined).toLocaleDateString() : ''

  useEffect(() => {
    const { token, data } = getUserData()
    console.log(data)
    setToken(token)
    setUser(data as User)
  }, [])

  const handleEditUser = async () => {
    const updatedUser = { ...user }

    if (newUsername) {
      updatedUser.username = newUsername
    }

    if (newEmail) {
      updatedUser.email = newEmail
    }

    if (newPassword) {
      updatedUser.password = newPassword
    }

    try {
      const editedUser = await editUser(updatedUser, token)
      setUser(editedUser)
      alert('Votre profil a bien été modifié ! Reconnectez-vous pour voir les changements.')
      disconnectUser()
      window.location.href = '/login'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.avatar} src="/icons/capybara.png" alt="Capybara walking" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyItem}>
          <span className={styles.cardBodyItemTitle}>Pseudonyme: </span>
          <span className={styles.cardBodyItemValue}>
            <b>{user?.username}</b>
          </span>
        </div>
        <div className={styles.cardBodyItem}>
          <span className={styles.cardBodyItemTitle}>Email: </span>
          <span className={styles.cardBodyItemValue}>
            <b>{user?.email}</b>
          </span>
        </div>
        <div className={styles.cardBodyItem}>
          <span className={styles.cardBodyItemTitle}>Date d'inscription: </span>
          <span className={styles.cardBodyItemValue}>
            <b>{formattedDate}</b>
          </span>
        </div>
        <div className={styles.cardBodyItem}>
          <span className={styles.cardBodyItemTitle}>Profil: </span>
          <span className={styles.cardBodyItemValue}>
            {user?.is_staff ? <b>Administrateur</b> : <b>Utilisateur</b>}
          </span>
        </div>
        <div className={styles.cardBodyItemInputs}>
          <div className={styles.cardBodyItem}>
            <label className={styles.cardBodyItemTitle}>Nouveau pseudo:</label>
            <input
              className={styles.cardBodyItemInput}
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              autoComplete='none'
            />
          </div>
          <div className={styles.cardBodyItem}>
            <label className={styles.cardBodyItemTitle}>Nouvel email:</label>
            <input
              className={styles.cardBodyItemInput}
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              autoComplete='none'
            />
          </div>
          <label className={styles.cardBodyItemTitle}>Nouveau mot de passe:</label>
          <input
            className={styles.cardBodyItemInput}
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete='none'
          />
        </div>
        <button className={styles.submitBtn} onClick={handleEditUser}>Modifier</button>
      </div>
    </div>
  )
}

export default CardProfile
