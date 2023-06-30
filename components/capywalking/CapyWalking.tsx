'use client'
import styles from './CapyWalking.module.css'

const CapyWalking = () => {
  // Play sound on click
  const playSound = () => {
    const audio = document.getElementById('lepain') as HTMLAudioElement
    audio.play()
  }

  return (
    <>
      <div className={styles.capyWalking}>
        <img className={styles.capyGif} src="/icons/capybara_walking.gif" alt="Capybara walking" onClick={playSound} />
      </div>
      <audio id="lepain" className={styles.capySound} src="/sounds/le_pain.mp3" />
    </>
  )
}

export default CapyWalking
