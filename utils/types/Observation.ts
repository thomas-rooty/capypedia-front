export type Observation = {
  id?: number
  title: string
  date: string
  place: string
  behaviour: string
  image: string
  approved: boolean
  createdAt?: string
  idUser: number | null
}
