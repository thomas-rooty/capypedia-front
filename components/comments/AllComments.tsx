'use client'
import styles from './AllComments.module.css'
import { getComments } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import { Comment } from '@/utils/types/Comment'
import CommentComponent from '@/components/comments/Comment'

interface AllCommentsProps {
  id: string
}

const AllComments = ({ id }: AllCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(id)
      setComments(comments.data)
      setLoading(false)
    }
    fetchComments()
  }, [])

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.commentsContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>Commentaires</h2>
          </div>
          <hr className={styles.hr} />
          {comments.map((comment) => (
            <CommentComponent key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  )
}

export default AllComments
