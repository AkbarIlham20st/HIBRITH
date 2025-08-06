import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import { authService } from '../services/auth'

export default function Register({ onRegister }) {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    const formData = new FormData(e.target)
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    
    try {
      const user = await authService.register(
        userData.name,
        userData.email,
        userData.password
      )
      onRegister(user)
      navigate('/dashboard', { replace: true })
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <AuthForm 
        type="register" 
        onSubmit={handleSubmit} 
        error={error}
        isLoading={isLoading}
      />
    </div>
  )
}