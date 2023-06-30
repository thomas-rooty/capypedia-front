import styles from './StatsApproved.module.css'
import { getApprovedStats } from '@/utils/apiUtils'
import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'

const StatsApproved = () => {
  const [stats, setStats] = useState<any>(null)

  const fetchStats = async () => {
    const res = await getApprovedStats()
    if (res.status !== 200) return
    setStats(res.data)
    console.log(res.data)
    // I get nbApproved and nbNotApproved from the API which are the number of approved and not approved observations
    // Make a chart with Chart.js
    const ctx = document.getElementById('myChart') as HTMLCanvasElement

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Approuvées', 'Non approuvées'],
        datasets: [
          {
            label: 'Observations',
            data: [res.data.nbApproved, res.data.nbNotApproved],
            backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'],
            hoverOffset: 4,
          },
        ],
      },
    })
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <div className={styles.stats}>
      <h2 className={styles.title}>Observations approuvées / non approuvées</h2>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  )
}

export default StatsApproved
