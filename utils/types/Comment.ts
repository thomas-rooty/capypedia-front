export type Comment = {
  id?: string
  title: string
  date: string
  content: string
  createdDate?: string
  idUser: number | null
  idObservation: number | null
}
