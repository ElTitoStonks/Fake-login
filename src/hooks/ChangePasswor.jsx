export function ChangePassword() {
    const [formData, setFormData] = useState({ "email": "", "password": "" })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChangePassword = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    let getEmails = JSON.parse(localStorage.getItem("email")) || []



    return (

    )
}