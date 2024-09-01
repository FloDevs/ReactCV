import { NavLink } from "react-router-dom";
import "./style/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Twitter from "./assets/twitter.png";
import Github from "./assets/signe-github.png";
import Linkedin from "./assets/linkedin.png";

import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "./Article";
import { RealisationContext } from "./Portfolio";

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const responsive = window.innerWidth <= 768 ? 150 : 300;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > responsive) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // L'effet s'exécute uniquement lors du montage du composant

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { articles } = useContext(ArticleContext);
  const { realisations } = useContext(RealisationContext);

  return (
    <>
      <footer className="footer">
        <div className="all-list">
          <div className="footer-column">
            <h4>John Doe</h4>
            <address>
              40 Rue Laure Diebot <br />
              69009 Lyon, France <br />
              Téléphone : 06 20 30 40 50
            </address>
            <div className="social-icons">
              <a
                href="https://x.com/johndoefromx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Twitter}
                  alt="Logo de Twitter qui represente un oiseau blanc sur fond bleu "
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <NavLink to="/github">
                  <img
                    src={Github}
                    alt="Logo de Github qui represente un chat blanc sur fond noir"
                  />
                </NavLink>
              </a>
              <a
                href="https://www.linkedin.com/in/john-doe-94a6941a1/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Linkedin}
                  alt="Logo de LinkedIn qui represente un I et un N blanc sur fond bleu "
                />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Liens utiles</h4>
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                  <i className="fas fa-arrow-right me-2"></i>Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  <i className="fas fa-arrow-right me-2"></i>Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i className="fas fa-arrow-right me-2"></i>Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mentions">
                  <i className="fas fa-arrow-right me-2"></i>Mentions Légales
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Mes dernières réalisations</h4>
            <ul className="nav-list">
              {realisations.slice(0, 3).map((realisation) => (
                <li key={realisation.id}>
                  <a className="nav-link" href={realisation.link}>
                    <i className="fas fa-arrow-right me-2"></i>
                    {realisation.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Mes derniers articles</h4>
            <ul className="nav-list">
              {articles.slice(0, 3).map((article) => (
                <li key={article.id}>
                  <a className="nav-link" href={article.link}>
                    <i className="fas fa-arrow-right me-2"></i>
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright">
          <small>© Designed by John Doe</small>
          {showBackToTop && (
            <button
              className="scroll-top"
              onClick={scrollToTop}
              title="Remonter en haut"
            >
              ↑
            </button>
          )}
        </div>
      </footer>
    </>
  );
}

export default Footer;
