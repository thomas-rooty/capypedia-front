'use client'
import styles from './Comment.module.css'
import { useState, useEffect } from 'react'
import { Comment } from '@/utils/types/Comment'
import { getUser, checkRole, deleteComment } from '@/utils/apiUtils'
import { getUserData } from '@/utils/mutations/storageMutations'

interface CommentProps {
  comment: Comment
}

const CommentComponent = ({ comment }: CommentProps) => {
  // Date to locale format
  const formattedDate = comment.createdDate ? new Date(comment.createdDate).toLocaleDateString() : ''

  // Get user info from comment
  const [user, setUser] = useState<string>('')
  const [token, setToken] = useState<string | null>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [role, setRole] = useState<string>('')

  // Get user info
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(comment.idUser)
      const { token } = await getUserData()
      setUser(user.data)
      setToken(token)
      setLoading(false)
    }
    fetchUser()
  }, [])

  // Get user role
  useEffect(() => {
    const fetchRole = async () => {
      const res = await checkRole(token)
      console.log(res)
      if (res.status === 401) {
        console.log(res)
        setRole('user')
      }
      if (res.status === 200) {
        console.log(res)
        setRole('admin')
      }
    }
    fetchRole()
  }, [token])

  // Delete comment
  const handleDelete = async () => {
    await deleteComment(comment.id as string, token)
    window.location.reload()
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.left}>
            <img src="/icons/capybara.png" alt="avatar" className={styles.avatar} />
            <p className={styles.pseudo}>{user}</p>
            <p className={styles.date}>{formattedDate}</p>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>{comment.title}</p>
            <p>{comment.content}</p>
          </div>
          {role === 'admin' && (
            <img src="/icons/close.png" alt="delete" className={styles.delete} onClick={handleDelete} />
          )}
        </>
      )}
    </div>
  )
}

export default CommentComponent
