import Link from "next/link";
import "./main.css";

export default function Home(): JSX.Element {
  return (
    <main className="main">
      <section className="section-main">
        <section>
          <div className="cont-title-main">
            <p className="title-main">Crea tus propias</p>
            <p className="title-main">
              <b className="t-color">notas</b>
            </p>
            <p className="title-main">personalizadas con IA</p>
            <p className="title-main">para ti</p>
          </div>

          <div className="links-main">
            <Link href="/crear-nota" className="link-main start-link">
              Comenzar
            </Link>
            <Link href="/notas" className="link-main link-main-notes">
              Notas
            </Link>
          </div>
        </section>
        
          <div className="box-gr b-1"></div>
        
      </section>
    </main>
  );
}
