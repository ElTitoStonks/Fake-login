import { useState } from "react"

export function FormLogicLogin({ login, logout }) {
    const [formData, setFormData] = useState({ "email": "", "password": "", "name": "" })
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

        const userFound = JSON.parse(localStorage.getItem("users")) || []

        const foundUser = userFound.find(u => u.email === formData.email && u.password === formData.password)

        if (foundUser) {
            login(foundUser)
        } else {
            setError("Ups...Invalid email or password")
            setTimeout(() => {
                setError("")
            }, 3000);
        }

        setFormData({ "email": "", "password": "", "name": "" })
    }

    return { handleChange, handleSubmit, handleLogout, formData, error }
}
