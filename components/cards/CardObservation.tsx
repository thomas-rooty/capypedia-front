import styles from './CardObservation.module.css'
import { Observation } from '@/utils/types/Observation'

interface CardObservationProps {
  observation: Observation
}

const CardObservation = ({ observation }: CardObservationProps) => {
  return (
    <div className={styles.card}>
      <img src={observation.image} className={styles.cardImage} alt={observation.title} />
      <div className={styles.cardInfo}>
        <h1 className={styles.title}>{observation.title}</h1>
        <p className={styles.desc}>{observation.behaviour}</p>
      </div>
    </div>
  )
}

export default CardObservation
