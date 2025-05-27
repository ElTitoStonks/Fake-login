import { useState } from "react"

export function ChangePassword() {
    const [formDataChange, setFormDataChange] = useState({ "email": "", "password": "" })
    const [errorChange, setErrorChange] = useState("")
    const [successChange, setSuccessChange] = useState("")

    const handleChangePassword = (e) => {
        const { name, value } = e.target
        setFormDataChange(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmitChangePassword = (e) => {
        e.preventDefault()

        let getEmails = JSON.parse(localStorage.getItem("users")) || []

        // let getPasswords = JSON.parse(localStorage.getItem("password")) || []

        const checkEmailExists = getEmails.find(email => email.email === formDataChange.email)

        if (!checkEmailExists) {
            setErrorChange("This email does not exist")
            return
        }

        if (!formDataChange.email) {
            setErrorChange("Email is required")
            setTimeout(() => {
                setErrorChange("")
            }, 3000)
            return
        } else if (!formDataChange.password) {
            setErrorChange("Password is required")
            setTimeout(() => {
                setErrorChange("")
            }, 3000)
            return
        } else {
            setErrorChange("")
            setSuccessChange("Password changed successfully")
            setTimeout(() => {
                setSuccessChange("")
            }, 3000)
        }

        const updateUser = getEmails.map(user =>
            user.email === formDataChange.email
                ? { ...user, password: formDataChange.password }
                : user
        )

        localStorage.setItem("users", JSON.stringify(updateUser))

        setFormDataChange({ email: "", password: "" })

    }

    return { handleChangePassword, handleSubmitChangePassword, formDataChange, setFormDataChange, errorChange, setErrorChange, successChange, setSuccessChange }

}