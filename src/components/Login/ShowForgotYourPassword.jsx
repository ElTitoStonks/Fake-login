import { EmailIcon, HiddenPasswordIcon, PasswordIcon, ShowPasswordIcon } from "../../../public/Icons";

export function ShowForgotYourPassword({ handleClickPass, ShowPassword, handleForgotYourPass }) {

    return (
        <div className="fixed w-[92dvw] h-[82dvh] top-16 left-4 bg-[#FFFFFF] flex flex-col p-6">
            <h2 className="text-black font-bold text-3xl text-center py-2 mb-4">Reset your password</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <label id="emailveri">Correo de verificación</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><EmailIcon /></span>
                        <input
                            id="emailveri"
                            type="email"
                            placeholder="example@example.com"
                            name='emailveri'
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>

                    <label id="passwordveri">Nueva contraseña</label>
                    <div className="relative flex items-center">
                        <span className="absolute px-2"><PasswordIcon /></span>
                        <button onClick={handleClickPass} className="absolute right-0 flex justify-end px-4">
                            {ShowPassword ? <ShowPasswordIcon /> : <HiddenPasswordIcon />}
                        </button>

                        <input
                            type={ShowPassword ? "text" : "password"}
                            placeholder="Password"
                            name='passwordveri'
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
            </form>
        </div>
    )

}