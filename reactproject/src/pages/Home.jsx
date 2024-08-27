import Header from "../Header";
import "../style/home.css";
import JohnDoeImage from "../assets/john-doe-about.jpg";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Header />

      <section className="title">
      <h1 className = "name" style={{ color: '#EEE' }}>Bonjour, je suis John Doe</h1>
      <h2 className = "work" style={{ color: '#EEE' }}>Développeur web full stack</h2>
        <button
          className="btn btn-primary custom-button"
          onClick={() =>
            document
              .querySelector(".encadre")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          En savoir plus
        </button>
      </section>

      <section className="encadre">
        <div className="row">
          <div className="col-md-6 a-propos">
            <h3 className="about" >À propos</h3>
            
            <p>
              Passioné par l&apos;informatique et les nouvelles technologies,
              j&apos;ai suivi une formation{" "}
              <strong>d&apos;intégrateur-développeur web</strong> au CEF. Au
              cours de cette formation,j&apos;ai pu acquérir des bases solides
              pour travailler dans le domaine du{" "}
              <strong>développement web</strong>.
            </p>
            <p>
              Basé à Lyon, je suis en recherche d&apos;une alternance au sein
              d&apos;une agence digitale pour consolider ma formation de{" "}
              <strong>dévelopeur web full stack</strong>.
            </p>
            <p>
              J&apos;accorde une attention particulière à la qualité du code que
              j&apos;écris et je respecte les bonnes pratiques du web.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={JohnDoeImage}
              alt="Photo de profil"
              className="photo-profil"
            />
            <h3>Mes compétences</h3>
            <div className="progress-bars mt-3">
              <span>HTML5 90%</span>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>CSS3 80%</span>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>JAVASCRIPT 70%</span>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>PHP 60%</span>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>REACT 50%</span>
              <div className="progress mb-2">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
