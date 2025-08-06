// Mock user database
const users = [
  {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    password: 'password' // In real app, this would be hashed
  }
]

// Simulate API delay
const delay = () => new Promise(resolve => setTimeout(resolve, 500))

export const authService = {
  async login(email, password) {
    await delay()
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) throw new Error('Invalid email or password')
    return { ...user, password: undefined } // Don't return password
  },

  async register(name, email, password) {
    await delay()
    const exists = users.some(u => u.email === email)
    if (exists) throw new Error('Email already exists')
    
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password // In real app, you would hash this
    }
    users.push(newUser)
    return { ...newUser, password: undefined } // Don't return password
  },

  async getCurrentUser() {
    await delay()
    // In real app, this would check session/token
    return users[0] ? { ...users[0], password: undefined } : null
  }
}