import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={'/images/header.png'} className={styles.headerImage} alt="Header background image" />
    </header>
  )
}

export default Header
