import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function DashboardLayout({ children, user, setUser }) {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      setUser(null)
      navigate('/login')
    }
  }

  return (
    <div>
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hello, {user?.email}</span>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}