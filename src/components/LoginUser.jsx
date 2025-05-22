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
            <Error error={error} />
        </div>
    )
}

function Error({ error }) {
    return (
        <div>
            <p>{error}</p>
        </div>
    )
}