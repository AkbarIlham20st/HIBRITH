import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function PieChart() {
  const data = {
    labels: ['Design', 'Development', 'Marketing', 'Support', 'Other'],
    datasets: [
      {
        data: [15, 25, 20, 15, 25],
        backgroundColor: [
          'rgba(79, 70, 229, 0.7)',
          'rgba(99, 102, 241, 0.7)',
          'rgba(129, 140, 248, 0.7)',
          'rgba(165, 180, 252, 0.7)',
          'rgba(199, 210, 254, 0.7)'
        ],
        borderWidth: 0
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right'
      }
    }
  }

  return <Pie data={data} options={options} />
}