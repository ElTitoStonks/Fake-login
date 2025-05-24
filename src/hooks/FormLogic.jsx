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
        }
    }

    return { handleChange, handleSubmit, handleLogout, formData, error }
}

export function FormLogicRegister() {
    const [formDataR, setFormDataR] = useState({ "email": "", "password": "", "name": "" })
    const [errorR, setErrorR] = useState("")

    const handleChangeR = (e) => {
        const { name, value } = e.target
        setFormDataR(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmitR = (e) => {
        e.preventDefault()

        if (!formDataR.email) {
            setErrorR("Email is required")
            return
        } else if (!formDataR.password) {
            setErrorR("Password is required")
            return
        } else if (!formDataR.name) {
            setErrorR("Name is required")
            return
        } else {
            setErrorR("")
        }

        const storeUser = JSON.parse(localStorage.getItem("users")) || []

        const userExists = storeUser.find(u => u.email === formDataR.email)

        if (!userExists) {
            setErrorR("")
        } else {
            setErrorR("User already exists")
            return
        }

        const newUser = {
            email: formDataR.email,
            password: formDataR.password,
            name: formDataR.name
        }

        localStorage.setItem("users", JSON.stringify([...storeUser, newUser]))

        setFormDataR({ email: "", password: "", name: "" })
        setErrorR("")

    }

    return { handleChangeR, handleSubmitR, formDataR, errorR }
}
