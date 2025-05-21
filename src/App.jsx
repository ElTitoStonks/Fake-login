import { useContext, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { FilterContext } from './context/AuthProvider'
import users from './users/user.json'

function App() {
  const { user, login, logout } = useContext(FilterContext)

  const [formData, setFormData] = useState({ "email": "", "password": "" })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.placeholder]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const foundUser = users.find((u) => u.email === formData.email && u.password === formData.password)

    if (foundUser) {
      login(foundUser)
    } else {
      alert("Invalid credentials")
    }
  }
  return (
    <>
      <Header />
      <main>
        {user ? (
          <div>
            <h2>Welcome back, {user.name}</h2>
          </div>
        ) :
          (
            <div>
              <h2>Hey to see all information login in the platform</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" onChange={handleChange} value={formData.email} />
                <input type="password" placeholder="password" onChange={handleChange} value={formData.password} />
                <input type="submit" value="Login" />
              </form>
            </div>
          )}
      </main>
    </>
  )
}

export default App
