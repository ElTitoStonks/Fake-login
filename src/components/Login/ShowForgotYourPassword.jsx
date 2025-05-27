import { EmailIcon, HiddenPasswordIcon, PasswordIcon, ShowPasswordIcon } from "../../../public/Icons";
import { ChangePassword } from "../../hooks/ChangePasswor";

export function ShowForgotYourPassword({ handleClickPass, ShowPassword, handleForgotYourPass }) {
    const { handleChangePassword, handleSubmitChangePassword, formDataChange, errorChange, successChange } = ChangePassword()

    return (
        <div className="fixed w-[92dvw] h-[82dvh] top-16 left-4 bg-[#FFFFFF] flex flex-col p-6">
            <h2 className="text-black font-bold text-3xl text-center py-2 mb-4">Reset your password</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmitChangePassword}>
                <div>
                    <label id="email">Correo de verificación</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><EmailIcon /></span>
                        <input
                            id="email"
                            type="email"
                            placeholder="example@example.com"
                            name='email'
                            onChange={handleChangePassword}
                            value={formDataChange.email}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>

                    <label id="password">Nueva contraseña</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><PasswordIcon /></span>
                        <button onClick={handleClickPass} className="absolute right-0 flex justify-end px-4">
                            {ShowPassword ? <ShowPasswordIcon /> : <HiddenPasswordIcon />}
                        </button>

                        <input
                            type={ShowPassword ? "text" : "password"}
                            placeholder="Password"
                            name='password'
                            onChange={handleChangePassword}
                            value={formDataChange.password}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-6">
                    <input
                        className="bg-blue-400 w-24 h-10 rounded-xl font-bold text-sm border hover:bg-[#FFF] transition-all duration-500 ease-in-out"
                        type="submit"
                        value="Change" />

                    <button
                        type="button"
                        className="w-24 h-10 rounded-xl font-bold text-sm border hover:bg-blue-400 hover:text-white transition-all duration-500 ease-in-out"
                        onClick={handleForgotYourPass}
                    >Cancel</button>
                </div>
                <span className={`w-full  text-white font-bold p-2 rounded-xl mt-4 transition-all ease-in-out transform
                ${errorChange || successChange ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 "}
                ${errorChange ? "bg-red-600" : "bg-green-600"}
            `}>
                    <p>{errorChange || successChange}</p>
                </span>
            </form>
        </div>
    )

}