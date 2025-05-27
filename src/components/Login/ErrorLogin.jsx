import { FormLogicRegister } from "../../hooks/FormLogic"
// Use this component for ErrorLogin and newAccount
export function ErrorLogin({ error }) {
    const { errorR, formDataR, handleChangeR, handleSubmitR, sucessR } = FormLogicRegister()

    return (
        <div className="fixed w-[92dvw] h-[82dvh] top-16 left-4 bg-[#FFFFFF] flex flex-col p-6">
            <p className="text-red-500 text-sm">{error}</p>
            <h2 className="text-2xl">You're new here?</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmitR}>
                <div className="flex flex-col w-full">
                    <label id="email">Introduce tu email</label>
                    <div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChangeR}
                            value={formDataR.email}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <label id="password">Introduce tu contraseña</label>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChangeR}
                            value={formDataR.password}
                            className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>
                </div>

                <div>
                    <label id="name">Introduce tu nombre</label>
                    <input type="text" name="name" placeholder="Pedro" onChange={handleChangeR} value={formDataR.name}
                        className="text-gray-600 border border-gray-300 w-full h-10 px-2 pl-7 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input type="submit" value="Register" />
                </div>
            </form>
            {/* Error */}
            <span className={`w-full  text-white font-bold p-2 rounded-xl mt-4 transition-all ease-in-out transform
                ${errorR || sucessR ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 "}
                ${errorR ? "bg-red-600" : "bg-green-600"}
            `}>
                <p>{errorR || sucessR}</p>
            </span>
        </div>
    )
}