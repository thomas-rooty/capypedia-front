'use client'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img src="/brand_icon.svg" className={styles.logo} alt="logo" />
        </Link>
        <span className={styles.title}>Capypedia</span>
      </div>
      <ul className={styles.navlinks}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/">Accueil</Link>
        </li>
        <li className={pathname === '/capybara' ? styles.active : ''}>
          <Link href="https://fr.wikipedia.org/wiki/Hydrochoerus_hydrochaeris">Qu'est-ce qu'un capybara ?</Link>
        </li>
        <li className={pathname === '/alimentation' ? styles.active : ''}>
          <Link href="/alimentation">Alimentation</Link>
        </li>
        <li className={pathname === '/education' ? styles.active : ''}>
          <Link href="/education">Education</Link>
        </li>
        <li className={pathname === '/register' ? styles.active : ''}>
          <Link href="/register">S'enregistrer</Link>
        </li>
        <li className={`${styles.login} ${pathname === '/login' ? styles.activeLogin : ''}`}>
          <Link href="/login">Se connecter</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
