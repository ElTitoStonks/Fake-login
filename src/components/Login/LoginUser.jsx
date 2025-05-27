import { useContext } from "react";
import { FilterContext } from "../../context/AuthProvider";


export function LoginUser({ handleLogout }) {
    const { user } = useContext(FilterContext)
    return (
        <div>
            <h2>Welcome back, {user.name}</h2>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}