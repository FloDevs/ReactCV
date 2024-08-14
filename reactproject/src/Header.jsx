import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style/header.css'


function Header() {
  

    return (
      <>
    <header>
      <nav className="navbar navbar-expand-xl ">
            <NavLink className="navbar-brand ms-5" to="/">JOHN DOE</NavLink>
            <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarNav">
              <ul className="navbar-nav ms-auto ms-5">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/réalisations">Réalisations</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/mentions">Mentions Légales</NavLink>
                </li>
              </ul>
            </div>
          </nav>
      </header>
      </>
    )
  }
  
  export default Header
  