import { FormLogicRegister } from "../../hooks/FormLogic"

export function ErrorLogin({ error }) {
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