import styles from './ObservationForm.module.css'
import { useState, useEffect } from 'react'
import { Observation } from '@/utils/types/Observation'
import { addObservation } from '@/utils/apiUtils'
import { getUserData } from '@/utils/mutations/storageMutations'
import { User } from '@/utils/types/User'

const ObservationForm = () => {
  // Get user
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  // Get user data from local storage and append idUser to observation
  useEffect(() => {
    const { data, token } = getUserData()
    setUser(data as User)
    setToken(token)
    setObservation({
      ...observation,
      idUser: user?.id as number,
    })
  }, [])

  const [observation, setObservation] = useState<Observation>({
    title: '',
    date: '',
    place: '',
    behaviour: '',
    image: '',
    approved: false,
    idUser: user?.id as number,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObservation({
      ...observation,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await addObservation(observation, token)
    if (res.status === 200) {
      alert('Observation ajoutée !')
      window.location.href = '/observations'
    } else {
      alert('Une erreur est survenue')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Ajouter une observation</h1>
      <input
        className={styles.input}
        required
        type="text"
        name="title"
        placeholder="Title"
        value={observation.title}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        required
        type="date"
        name="date"
        placeholder="Date"
        value={observation.date}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        required
        type="text"
        name="place"
        placeholder="Place"
        value={observation.place}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        required
        type="text"
        name="behaviour"
        placeholder="Behaviour"
        value={observation.behaviour}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        required
        type="text"
        name="image"
        placeholder="Image"
        value={observation.image}
        onChange={handleChange}
      />
      <button className={styles.submitBtn} type="submit">
        Ajouter
      </button>
    </form>
  )
}

export default ObservationForm
