import Link from "next/link";
import "./main.css";

export default function Home() {
  return (
    <main className="main">
      <section className="section-main">
        <div className="cont-title-main">
          <p className="title-main">Crea tus propias</p>
          <p className="title-main"><b className="t-color">notas</b></p>
          <p className="title-main">personalizadas</p>
          <p className="title-main">para ti</p>
        </div>

        <div className="links-main">
          <Link href="/crear-nota" className="link-main">Crear nota</Link>
          <Link href="/notas" className="link-main">Tus notas</Link>
        </div>
      </section>
      <div className="logo-main">
        <div className="box b-1"></div>
        <div className="box b-2"></div>
      </div>
    </main>
  );
}
