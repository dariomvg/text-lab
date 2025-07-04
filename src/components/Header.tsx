import Link from "next/link"
import "../styles/header.css"; 
import iconGithub from "@/assets/github_dark.svg"

export const Header = (): JSX.Element => {
  return (
    <header className="header">
        <nav className="nav">
            <Link href="/" className="logo-nav">TextLab</Link>
            <div className="links-nav">
                <Link href="/crear-nota" className="link-nav">Nueva nota</Link>
                <Link href="/notas" className="link-nav">Tus notas</Link>
                <a href="https://github.com/dariomvg/text-lab" target="_blank" rel="noreferrer" className="link-nav">
                  <img src={iconGithub.src} alt="icon github" width={25} height={25} />
                </a>
            </div>
        </nav>
    </header>
  )
}
