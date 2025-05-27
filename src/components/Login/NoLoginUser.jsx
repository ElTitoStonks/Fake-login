import { useState } from "react"
import { EmailIcon, HiddenPasswordIcon, PasswordIcon, ShowPasswordIcon } from "../../../public/Icons"
import { ShowForgotYourPassword } from "./ShowForgotYourPassword"
import { ErrorLogin } from "./ErrorLogin"

export function NoLoginUser({ formData, error, handleChange, handleSubmit }) {
    const [ShowPassword, SetShowPassword] = useState(false)
    const [HiddenForgotPass, ShowHiddenForgotPass] = useState(false)
    const [Register, SetRegister] = useState(true)

    const handleClickPass = (e) => {
        e.preventDefault()
        SetShowPassword(!ShowPassword)
    }

    const handleForgotYourPass = (e) => {
        e.preventDefault()
        ShowHiddenForgotPass(!HiddenForgotPass)
    }


    return (
        <div className="h-[80dvh] w-[90dvw] bg-[#FFFFFF] py-6 ">
            <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-black font-bold text-4xl text-center">Welcome back</h2>
                <p className="text-gray-600">Please sing in to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6">
                <div className=" flex flex-col w-full">
                    <label className="text-black" id="email">Email address</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><EmailIcon /></span>
                        <input
                            id="email"
                            type="email"
                            placeholder="example@example.com"
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label id="password">Password</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><PasswordIcon /></span>
                        <button onClick={handleClickPass} className="absolute right-0 flex justify-end px-4">
                            {ShowPassword ? <ShowPasswordIcon /> : <HiddenPasswordIcon />}
                        </button>

                        <input
                            type={ShowPassword ? "text" : "password"}
                            placeholder="Password"
                            name='password'
                            onChange={handleChange}
                            value={formData.password}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <button onClick={handleForgotYourPass} >
                        <p className="text-sm text-blue-500 font-bold">Forgot your password?</p>
                    </button>
                </div>
                <div>
                    <input type="submit" value="Login" />
                    <button onClick={() => SetRegister(!Register)} type="button">
                        <p>Register</p>
                    </button>
                </div>
                <span className={`text-white px-6 w-full font-bold p-2 rounded-xl bg-red-600 transition-all ease-in-out transform
                ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}><p>{error}</p></span>
            </form >
            {Register ? null : <ErrorLogin setRegister={SetRegister} register={Register} />}


            {HiddenForgotPass &&
                <ShowForgotYourPassword
                    ShowPassword={ShowPassword}
                    handleClickPass={handleClickPass}
                    HiddenForgotPass={HiddenForgotPass}
                    handleForgotYourPass={handleForgotYourPass} />
            }

        </div >
    )
}
