import styles from './ReportCapy.module.css'
import Link from 'next/link'

const ReportCapy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Signaler un capybara !</h1>
        <p className={styles.description}>
          Vous avez vu un capybara dans la nature ? Signalez-le nous afin que nous puissions l'ajouter à notre base de données.
        </p>
      </div>
      <img src={'/icons/arrow-right-thin.svg'} className={styles.arrow} alt="Arrow right thin" />
      <Link href='/observations/new'>
        <button className={styles.reportCapyBtn}>
          <span className={styles.reportCapyBtnText}>Signaler un capybara</span>
        </button>
      </Link>
    </div>
  )
}

export default ReportCapy
