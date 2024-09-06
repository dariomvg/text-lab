import Link from "next/link"
import "../styles/header.css"; 

export const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
            <Link href="/" className="logo-nav">TextLab</Link>
            <div className="links-nav">
                <Link href="/crear-nota" className="link-nav">Crear</Link>
                <Link href="/notas" className="link-nav">Notas</Link>
                <a href="https://github.com/dariomvg/text-lab" target="_blank" rel="noreferrer" className="link-nav">Github</a>
            </div>
        </nav>
    </header>
  )
}
