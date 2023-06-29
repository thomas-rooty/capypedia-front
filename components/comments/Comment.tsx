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
  const [username, setUsername] = useState<string>('')
  const [userId, setUserId] = useState<string | null>('')
  const [token, setToken] = useState<string | null>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [role, setRole] = useState<string>('')

  // Get user info
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(comment.idUser)
      const { data, token } = await getUserData()
      setUsername(user.data)
      setUserId(data?.id as unknown as string)
      setToken(token)
      setLoading(false)
    }
    fetchUser()
  }, [])

  // Get user role
  useEffect(() => {
    const fetchRole = async () => {
      const res = await checkRole(token)
      if (res.status === 401) {
        setRole('user')
      }
      if (res.status === 200) {
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
            <p className={styles.pseudo}>{username}</p>
            <p className={styles.date}>{formattedDate}</p>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>{comment.title}</p>
            <p>{comment.content}</p>
          </div>
          {userId === comment.idUser || role === 'admin' ? (
            <img src="/icons/close.png" alt="delete" className={styles.delete} onClick={handleDelete} />
          ) : null}
        </>
      )}
    </div>
  )
}

export default CommentComponent
