import { useContext } from "react";
import { FilterContext } from "../context/AuthProvider";
import { FormLogicRegister } from "../hooks/FormLogic";
import { EmailIcon, PasswordIcon } from "../../public/Icons"

export function LoginUser({ handleLogout }) {
    const { user } = useContext(FilterContext)
    return (
        <div>
            <h2>Welcome back, {user.name}</h2>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export function NoLoginUser({ handleSubmit, handleChange, formData, error }) {
    return (
        <div className="h-[80dvh] w-[90dvw] bg-[#FFFFFF] py-6">
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
                        <input
                            type="password"
                            placeholder="Password"
                            name='password'
                            onChange={handleChange}
                            value={formData.password}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <button>
                        <p>Forgot your password?</p>
                    </button>

                </div>
                <input type="submit" value="Login" />
            </form>
            {error && <ErrorLogin error={error} />}
        </div>
    )
}

function ErrorLogin({ error }) {
    const { errorR, formDataR, handleChangeR, handleSubmitR } = FormLogicRegister()

    return (
        <div>
            <p>{error}</p>
            <h2>You're new here?</h2>
            <form onSubmit={handleSubmitR}>
                <input type="email" name="email" placeholder="Email" onChange={handleChangeR} value={formDataR.email} />
                <input type="password" name="password" placeholder="Password" onChange={handleChangeR} value={formDataR.password} />
                <input type="text" name="name" placeholder="Name" onChange={handleChangeR} value={formDataR.name} />
                <input type="submit" value="Register" />
            </form>
            {errorR && <p style={{ color: 'red' }}>{errorR}</p>}

        </div>
    )
}