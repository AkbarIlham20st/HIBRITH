import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function BarChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Productivity',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(79, 70, 229, 0.7)',
        borderRadius: 4
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return <Bar data={data} options={options} />
}