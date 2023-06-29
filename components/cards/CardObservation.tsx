import styles from './CardObservation.module.css'
import { Observation } from '@/utils/types/Observation'
import { editObservation } from '@/utils/apiUtils'
import Link from 'next/link'

interface CardObservationProps {
  observation: Observation
  isAdmin: boolean
  token: string | null
}

const CardObservation = ({ observation, isAdmin, token }: CardObservationProps) => {
  const handleApprove = async () => {
    const updatedObservation = { ...observation, approved: true }
    await editObservation(updatedObservation, token)
    window.location.reload()
  }
  return (
    <div className={styles.card}>
      <Link className={styles.link} href={`/observation?id=${observation.id}`} passHref>
        <img src={observation.image} className={styles.cardImage} alt={observation.title} />
        <div className={styles.cardInfo}>
          <h1 className={styles.title}>{observation.title}</h1>
          <p className={styles.desc}>{observation.behaviour}</p>
        </div>
      </Link>
      {isAdmin && !observation.approved && (
        <button className={styles.approveBtn} onClick={handleApprove}>Approuver</button>
      )}
    </div>
  )
}

export default CardObservation
