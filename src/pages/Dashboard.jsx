export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-lg text-gray-600">
        Welcome to your dashboard! You're successfully logged in.
      </p>
      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Content</h2>
        <p className="text-gray-600">
          This is where your protected content would go. Only authenticated users can see this page.
        </p>
      </div>
    </div>
  )
}