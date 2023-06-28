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
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/about' ? styles.active : ''}>
          <Link href="/register">S'enregistrer</Link>
        </li>
        <li className={`${styles.login} ${pathname === '/login' ? styles.active : ''}`}>
          <Link href="/login">Se connecter</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
