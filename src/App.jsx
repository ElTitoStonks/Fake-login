import { useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { FilterContext } from './context/AuthProvider'
import { FormLogicLogin, FormLogicRegister } from './hooks/FormLogic'
import { LoginUser, NoLoginUser, RegisterUser } from './components/LoginUser'

function App() {
  const { user, login, logout } = useContext(FilterContext)
  const { handleChange, handleSubmit, handleLogout, formData, error } = FormLogicLogin({ login, logout })
  const { errorR, formDataR, handleChangeR, handleSubmitR } = FormLogicRegister()

  return (
    <>
      <Header />
      <main>
        {user ? (
          <LoginUser handleLogout={handleLogout} />
        ) :
          (
            <>
              <NoLoginUser error={error} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
              <RegisterUser errorR={errorR} formDataR={formDataR} handleChangeR={handleChangeR} handleSubmitR={handleSubmitR} />
            </>
          )}
      </main>
    </>
  )
}

export default App
