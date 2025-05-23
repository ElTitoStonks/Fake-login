import { useContext } from "react";
import { FilterContext } from "../context/AuthProvider";

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
        <div>
            <h2>Hey! to see all information login in the platform</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name='email' onChange={handleChange} value={formData.email} />
                <input type="password" placeholder="Password" name='password' onChange={handleChange} value={formData.password} />
                <input type="submit" value="Login" />
            </form>
            <ErrorLogin error={error} />
        </div>
    )
}

function ErrorLogin({ error }) {
    return (
        <div>
            <p>{error}</p>
        </div>
    )
}

export function RegisterUser({ handleSubmitR, handleChangeR, formDataR, errorR }) {
    return (
        <div>
            <h2>You're new here?</h2>
            <form onSubmit={handleSubmitR}>
                <input type="email" name="email" placeholder="Email" onChange={handleChangeR} value={formDataR.email} />
                <input type="password" name="password" placeholder="Password" onChange={handleChangeR} value={formDataR.password} />
                <input type="text" name="name" placeholder="Name" onChange={handleChangeR} value={formDataR.name} />
                <input type="submit" value="Register" />
            </form>
            <ErrorRegister errorR={errorR} />
        </div>
    )
}

function ErrorRegister({ errorR }) {
    return (
        <div>
            <p>{errorR}</p>
        </div>
    )
}