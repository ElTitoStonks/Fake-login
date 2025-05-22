import { useState } from "react"
import users from '../users/user.json'
export function FormLogic({ login, logout }) {
    const [formData, setFormData] = useState({ "email": "", "password": "" })
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLogout = () => {
        logout()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const foundUser = users.find((u) => u.email === formData.email && u.password === formData.password)

        if (!formData.email) {
            setError("Email is required")
            return
        } else if (!formData.password) {
            setError("Password is required")
            return
        }

        if (foundUser) {
            login(foundUser)
        } else {
            setError("Invalid email or password")
        }
    }

    return { handleChange, handleSubmit, handleLogout, formData, error }
}
