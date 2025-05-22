import { HeaderLogin } from "../../public/Icons"

export function Header() {
    return (
        <>
            <h1>APP fake login</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Our services</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li><HeaderLogin /></li>
                </ul>
            </nav>
        </>
    )
}