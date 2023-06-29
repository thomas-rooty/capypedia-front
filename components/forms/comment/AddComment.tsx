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
    console.log(comment)
    console.log(token)
    const res = await addComment(comment, token)
    console.log(res)
    if (res.status === 200) {
      alert('Commentaire ajouté!')
      window.location.href = '/observation?id=' + idObservation
    } else {
      alert('An error occurred')
    }
  }

  return (
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
        <button className={styles.submitBtn} type="submit">
          Partager votre capyavis !
        </button>
      </form>
    </div>
  )
}

export default AddComment
