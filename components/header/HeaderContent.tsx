import styles from './Header.module.css'
import ReportCapy from '@/components/cards/ReportCapy'

const HeaderContent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>
          Bienvenue sur Capypedia, <br />l'encyclopédie des capybaras.
        </h1>
        <p className={styles.headerDescription}>
          Vous trouverez ici toutes les informations nécessaires pour tout savoir sur ces adorables rongeurs.
        </p>
      </div>
      <ReportCapy />
    </div>
  )
}

export default HeaderContent
