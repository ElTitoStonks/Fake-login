import { HeaderLogin } from "../../public/Icons"

export function Header() {
    return (
        <>
        <h1>APP fake login</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Nuestros servicios</li>
                    <li>Sobre nosotros</li>
                    <li>Contacto</li>
                    <li><HeaderLogin /></li>
                </ul>
            </nav>
        </>
    )
}