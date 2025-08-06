import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import { authService } from '../services/auth'

export default function Login({ onLogin }) {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  const from = location.state?.from?.pathname || '/dashboard'
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
    
    try {
      const user = await authService.login(email, password)
      onLogin(user)
      navigate(from, { replace: true })
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <AuthForm 
        type="login" 
        onSubmit={handleSubmit} 
        error={error}
        isLoading={isLoading}
      />
    </div>
  )
}