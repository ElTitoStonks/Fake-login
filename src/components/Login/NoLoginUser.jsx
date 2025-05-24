import { useState } from "react"
import { EmailIcon, HiddenPasswordIcon, PasswordIcon, ShowPasswordIcon } from "../../../public/Icons"
import { ShowForgotYourPassword } from "./ShowForgotYourPassword"

export function NoLoginUser({ handleSubmit, handleChange, formData, error }) {
    const [ShowPassword, SetShowPassword] = useState(false)
    const [HiddenForgotPass, ShowHiddenForgotPass] = useState(false)

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
                <input type="submit" value="Login" />
            </form >

            {HiddenForgotPass &&
                <ShowForgotYourPassword
                    ShowPassword={ShowPassword}
                    handleClickPass={handleClickPass}
                    HiddenForgotPass={HiddenForgotPass}
                    handleForgotYourPass={handleForgotYourPass} />
            }
            {/* {error && <ErrorLogin error={error} /> */}

        </div >
    )
}
