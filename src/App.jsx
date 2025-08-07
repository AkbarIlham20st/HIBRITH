import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './components/DashboardLayout'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Auth pages */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <DashboardLayout user={user} setUser={setUser}>
                <Dashboard />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}