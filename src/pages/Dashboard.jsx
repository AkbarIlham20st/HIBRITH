import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import LineChart from '../components/Charts/LineChart'
import PieChart from '../components/Charts/PieChart'
import RecentActivity from '../components/RecentActivity'
import StatsCard from '../components/StatsCard'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    completed: 0,
    productivity: 0
  })

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true)
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
        
        // Simulate fetching stats (replace with real API calls)
        setTimeout(() => {
          setStats({
            projects: 12,
            tasks: 34,
            completed: 28,
            productivity: 82
          })
          setLoading(false)
        }, 800)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
        <h1 className="text-2xl font-bold">Welcome back, {user?.user_metadata?.name || 'User'}!</h1>
        <p className="opacity-90">Here's what's happening with your projects today</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Projects" 
          value={stats.projects} 
          change="+2 this week" 
          icon={<ProjectIcon />}
          color="blue"
        />
        <StatsCard 
          title="Tasks" 
          value={stats.tasks} 
          change="+5 today" 
          icon={<TaskIcon />}
          color="green"
        />
        <StatsCard 
          title="Completed" 
          value={stats.completed} 
          change="82% rate" 
          icon={<CheckIcon />}
          color="purple"
        />
        <StatsCard 
          title="Productivity" 
          value={`${stats.productivity}%`} 
          change="+3% from last week" 
          icon={<TrendUpIcon />}
          color="orange"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Task Completion Trend</h2>
          <div className="h-80">
            <LineChart />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Project Distribution</h2>
          <div className="h-80">
            <PieChart />
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <RecentActivity />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center space-x-3 p-4 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
              <PlusIcon />
              <span>New Project</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
              <TaskAddIcon />
              <span>Add Task</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors">
              <ReportIcon />
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Icon Components (can be moved to separate file)
const ProjectIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </svg>
)

const TaskIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const TrendUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)

const TaskAddIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
)

const ReportIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)