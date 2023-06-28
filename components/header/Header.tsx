import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={'/images/header_blurred.png'} className={styles.headerImage} alt="Header background image" />
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>
          Bienvenue sur Capypedia, l'encyclopédie des capybaras.
        </h1>
        <p className={styles.headerDescription}>
          Vous trouverez ici toutes les informations nécessaires pour tout savoir sur ces adorables rongeurs.
        </p>
      </div>
    </header>
  )
}

export default Header
