import { use, useState } from "react"
import { FormLogicRegister } from "../../hooks/FormLogicRegister"
import { EmailIcon, HiddenPasswordIcon, PasswordIcon, PersonIcon, ShowPasswordIcon } from "../../../public/Icons"
// Use this component for ErrorLogin and newAccount
export function ErrorLogin({ error, setRegister, register }) {
    const { errorR, formDataR, handleChangeR, handleSubmitR, sucessR } = FormLogicRegister()
    const [ShowPassword, setShowPassword] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        setShowPassword(!ShowPassword)
    }

    const handleCancel = () => {
        setRegister(!register)
    }
    return (
        <div className="fixed w-[92dvw] h-[82dvh] top-16 left-4 bg-[#FFFFFF] flex flex-col p-6  rounded-xl">
            <p className="text-red-500 text-sm">{error}</p>
            <h2 className="text-2xl font-bold text-center">You're new here?</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmitR}>
                <div className="flex flex-col w-full ">
                    <label id="email">Enter your email</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><EmailIcon /></span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChangeR}
                            value={formDataR.email}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <label id="password">Enter your password</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><PasswordIcon /></span>
                        <button onClick={handleChange} className="absolute right-0 flex justify-end px-4">
                            {ShowPassword ? <ShowPasswordIcon /> : <HiddenPasswordIcon />}
                        </button>
                        <input
                            type={ShowPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={handleChangeR}
                            value={formDataR.password}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <label id="name">Enter your name</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><PersonIcon /></span>
                        <input type="text" name="name" placeholder="Pedro" onChange={handleChangeR} value={formDataR.name}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                </div>



                <div className="flex justify-center gap-6">
                    <input
                        type="submit"
                        value="Register"
                        className="bg-blue-300 w-24 h-10 rounded-xl text-sm border hover:bg-[#FFF] transition-all duration-500 ease-in-out"
                    />

                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-24 h-10 rounded-xl font-bold text-sm border hover:bg-blue-400 hover:text-white transition-all duration-500 ease-in-out"
                    >Cancel</button></div>
            </form >
            {/* Error */}
            < span className={`w-full  text-white font-bold p-2 rounded-xl mt-4 transition-all ease-in-out transform
                ${errorR || sucessR ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 "}
                ${errorR ? "bg-red-600" : "bg-green-600"}
            `}>
                <p>{errorR || sucessR}</p>
            </span >
        </div >
    )
}