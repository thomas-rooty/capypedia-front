'use client'
import styles from './Comment.module.css'
import { useState, useEffect } from 'react'
import { Comment } from '@/utils/types/Comment'
import { getUser } from '@/utils/apiUtils'

interface CommentProps {
  comment: Comment
}

const CommentComponent = ({ comment }: CommentProps) => {
  // Date to locale format
  const formattedDate = comment.createdDate ? new Date(comment.createdDate).toLocaleDateString() : ''

  // Get user info from comment
  const [user, setUser] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(comment.idUser)
      setUser(user.data)
      setLoading(false)
    }
    fetchUser()
  }, [])

  return (
    <div className={styles.card}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.left}>
            <p>{user}</p>
            <p>{formattedDate}</p>
          </div>
          <div className={styles.right}>
            <p>{comment.content}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default CommentComponent
