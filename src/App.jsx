import { useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { FilterContext } from './context/AuthProvider'
import { FormLogic } from './hooks/FormLogic'
import { LoginUser, NoLoginUser } from './components/LoginUser'

function App() {
  const { user, login, logout } = useContext(FilterContext)
  const { handleChange, handleSubmit, handleLogout, formData, error } = FormLogic({ login, logout })

  return (
    <>
      <Header />
      <main>
        {user ? (
          <LoginUser handleLogout={handleLogout} />
        ) :
          (
            <NoLoginUser error={error} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          )}
      </main>
    </>
  )
}

export default App
