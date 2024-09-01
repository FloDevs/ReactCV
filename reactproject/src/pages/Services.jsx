import Header from "../Header";
import Footer from "../Footer";
import Intro from "../Intro";
import "../style/service.css";
import ordi from "../assets/logo/ordinateur.png";
import loupe from "../assets/logo/loupe.png";
import html from "../assets/logo/html.png";

function Services() {
  return (
    <>
      <Header />

      <Intro
        title="MON OFFRE DE SERVICES"
        subtitle="Voici les prestations sur lesquelles je peux intervenir."
      />
      <section className="service">
        <div className="cadre-service">
          <img className="icone" src={ordi} alt="icone d'ordinateur" />
          <h3 className="title-service">UX DESIGN</h3>
          <p className="p-service">
            L&apos;<strong>UX Design</strong> est une méthode de conception
            centrée sur l&apos;utilisateur. Son but est d&apos;offrir une
            expérience de navigation optimale à l&apos;internaute.
          </p>
        </div>
        <div className="cadre-service">
          <img
            className="icone"
            src={html}
            alt="icone d'un ordinateur avec un symbole html"
          />
          <h3 className="title-service">DÉVELOPPEMENT WEB</h3>
          <p className="p-service">
            Le <strong>développement de sites web</strong> repose sur
            l&apos;utilisation des langages HTML,CSS,Javascript et PHP.
          </p>
        </div>
        <div className="cadre-service">
          <img
            className="icone"
            src={loupe}
            alt="icone de loupe avec un dollar"
          />
          <h3 className="title-service">RÉFÉRENCEMENT</h3>
          <p className="p-service">
            Le <strong>référencement naturel d&apos;un site,</strong> aussi
            appelé SEO, consiste à mettre des techniques en oeuvre pour{" "}
            <i>
              améliorer sa position dans les résultats des moteurs de recherche.
            </i>
          </p>{" "}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
