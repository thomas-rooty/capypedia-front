import styles from './CardObservation.module.css'
import { Observation } from '@/utils/types/Observation'
import Link from 'next/link'

interface CardObservationProps {
  observation: Observation
}

const CardObservation = ({ observation }: CardObservationProps) => {
  return (
    <div className={styles.card}>
      <Link className={styles.link} href={`/observation?id=${observation.id}`} passHref>
        <img src={observation.image} className={styles.cardImage} alt={observation.title} />
        <div className={styles.cardInfo}>
          <h1 className={styles.title}>{observation.title}</h1>
          <p className={styles.desc}>{observation.behaviour}</p>
        </div>
      </Link>
    </div>
  )
}

export default CardObservation
