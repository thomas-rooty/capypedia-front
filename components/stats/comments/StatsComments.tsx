import styles from './StatsComments.module.css'
import { getCommentStats } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'

const StatsComments = () => {
  const [stats, setStats] = useState<any>(null)

  const fetchStats = async () => {
    const res = await getCommentStats()
    if (res.status !== 200) return
    setStats(res.data)

    const commentsData = res.data.map((entry: any) => entry.nbComments)
    const usernames = res.data.map((entry: any) => entry.username)

    const observationsChartCanvas = document.getElementById('commentsChart') as HTMLCanvasElement
    if (observationsChartCanvas) {
      const ctx = observationsChartCanvas.getContext('2d')
      if (ctx) {
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: usernames,
            datasets: [
              {
                data: commentsData,
                backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
              },
            ],
          },
        })
      }
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <div className={styles.stats}>
      <h2 className={styles.title}>Nombre de commentaires / utilisateurs</h2>
      <canvas id="commentsChart" width="400" height="400"></canvas>
    </div>
  )
}

export default StatsComments
