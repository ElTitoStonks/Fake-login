import { FormLogicRegister } from "../../hooks/FormLogic"
// Use this component for ErrorLogin and newAccount
export function ErrorLogin({ error }) {
    const { errorR, formDataR, handleChangeR, handleSubmitR } = FormLogicRegister()

    return (
        <div className="fixed w-[92dvw] h-[82dvh] top-16 left-4 bg-[#FFFFFF] flex flex-col p-6">
            <p className="text-red-500 text-sm">{error}</p>
            <h2 className="text-2xl">You're new here?</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmitR}>
                <div>
                    <label id="emailrestore">Introduce tu email</label>
                    <input type="email" name="emailrestore" placeholder="Email" onChange={handleChangeR} value={formDataR.email} />

                    <label id="passwordrestore">Introduce tu contraseña</label>
                    <input type="password" name="passwordrestore" placeholder="Password" onChange={handleChangeR} value={formDataR.password} />
                </div>

                <div>
                    <input type="text" name="name" placeholder="Name" onChange={handleChangeR} value={formDataR.name} />
                    <input type="submit" value="Register" />
                </div>
            </form>
            {errorR && <p style={{ color: 'red' }}>{errorR}</p>}

        </div>
    )
}