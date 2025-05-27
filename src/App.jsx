import { useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { FilterContext } from './context/AuthProvider'
import { FormLogicLogin, } from './hooks/FormLogicLogin'
import { LoginUser } from './components/Login/LoginUser'
import { NoLoginUser } from './components/Login/NoLoginUser'

function App() {
  const { user, login, logout } = useContext(FilterContext)
  const { handleChange, handleSubmit, handleLogout, formData, error } = FormLogicLogin({ login, logout })


  return (
    <>
      {/* <Header /> */}
      <main>
        {user ? (
          <LoginUser handleLogout={handleLogout} />
        ) :
          (
            <div className='w-full h-dvh mx-auto flex justify-center items-center bg-[#CCC]'>
              <NoLoginUser
                error={error}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          )}
      </main>
    </>
  )
}

export default App
