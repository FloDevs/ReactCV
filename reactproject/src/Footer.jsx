import { NavLink } from "react-router-dom";
import "./style/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Twitter from "./assets/twitter.png";
import Github from "./assets/signe-github.png";
import Linkedin from "./assets/linkedin.png";

import { useContext } from 'react';
import { ArticleContext } from './Article';



function Footer() {
  const { articles } = useContext(ArticleContext);

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
              <a href="#">
                <img src={Twitter} />
              </a>
              <a href="#">
                <img src={Github} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="LinkedIn" />
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
              <li>
                <a href="#realisation1">
                  <i className="fas fa-arrow-right me-2"></i>Réalisation 1
                </a>
              </li>
              <li>
                <a href="#realisation2">
                  <i className="fas fa-arrow-right me-2"></i>Réalisation 2
                </a>
              </li>
              <li>
                <a href="#realisation3">
                  <i className="fas fa-arrow-right me-2"></i>Réalisation 3
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Mes derniers articles</h4>
            <ul className="nav-list">
              {articles.slice(0, 3).map(article => (
                <li  key={article.id}>
                  <a className="nav-link" href={article.link}>
                    <i className="fas fa-arrow-right me-2"></i>{article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright">
          <small>© Designed by John Doe</small>
        </div>
      </footer>
    </>
  );
  
}


export default Footer;
