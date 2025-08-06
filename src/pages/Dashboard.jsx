import { Routes, Route, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      {/* Outlet akan menampilkan konten nested route */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  )
}

// Buat komponen untuk sub-halaman dashboard
export function DashboardHome() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-lg text-gray-600">Welcome to your dashboard!</p>
    </>
  )
}

export function DashboardProfile() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile</h1>
      <p className="text-lg text-gray-600">Your profile information.</p>
    </>
  )
}

export function DashboardSettings() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Settings</h1>
      <p className="text-lg text-gray-600">Account settings.</p>
    </>
  )
}