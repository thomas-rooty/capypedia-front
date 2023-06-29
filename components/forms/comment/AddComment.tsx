import styles from './AddComment.module.css'
import { useState, useEffect } from 'react'
import { Comment } from '@/utils/types/Comment'
import { addComment } from '@/utils/apiUtils'
import { getUserData } from '@/utils/mutations/storageMutations'
import { User } from '@/utils/types/User'

interface AddCommentProps {
  idObservation: number
}

const AddComment = ({ idObservation }: AddCommentProps) => {
  // Get user and token
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const { data, token } = getUserData()
    setUser(data as User)
    setToken(token)
  }, [])

  const [comment, setComment] = useState<Comment>({
    title: '',
    content: '',
    idUser: null,
    idObservation: null,
  })

  const [shown, setShown] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      setComment({
        ...comment,
        idUser: user.id as number,
        idObservation: idObservation,
      })
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await addComment(comment, token)
    if (res.status === 200) {
      alert('Commentaire ajouté!')
      window.location.href = '/observation?id=' + idObservation
    } else {
      alert('An error occurred')
    }
  }

  return (
    <>
      {shown ? (
        <div className={styles.container}>
          <h2 className={styles.title}>Ajouter un commentaire</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="title">Titre</label>
              <input type="text" name="title" id="title" value={comment.title} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="content">Commentaire</label>
              <textarea name="content" id="content" value={comment.content} onChange={handleChange} required />
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.btn} type="submit">
                Partager votre capyavis !
              </button>
              <button className={styles.btn} onClick={() => setShown(false)}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.container2}>
          <button className={styles.btn} onClick={() => setShown(true)}>
            Ajouter un commentaire
          </button>
        </div>
      )}
    </>
  )
}

export default AddComment
