import Header from "../Header";
import Footer from "../Footer";
import Intro from "../Intro";
import { Accordion, Card, Button } from "react-bootstrap";
import { useState } from "react";
import "../style/mention.css";
import phone from "../assets/logo/phone.png";
import mail from "../assets/logo/mail.png";
import epingle from "../assets/logo/epingle.png";
import globe from "../assets/logo/globe.png";

function Mentions() {
  const [activeKey, setActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <>
      <Header />
      <Intro title="MENTIONS LÉGALES" />

      <section className="mention">
        <div className="content">
          <Accordion activeKey={activeKey}>
            <Card>
              <Card.Header className={activeKey === "0" ? "blue-back" : ""}>
                <Button
                  variant="link"
                  onClick={() => toggleActiveKey("0")}
                  aria-controls="collapse-0"
                  aria-expanded={activeKey === "0"}
                  className="d-flex align-items-center justify-content-between w-100 buttoncard"
                >
                  <h3
                    className={`mr-auto ${
                      activeKey === "0" ? "blue-mention" : ""
                    }`}
                  >
                    Éditeur du site
                  </h3>
                  <i
                    className={`fas fa-chevron-${
                      activeKey === "0" ? "up" : "down"
                    }`}
                  ></i>
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>John Doe</h4>
                  <address>
                    <a
                      className="lien-mentions adresse"
                      href="https://www.google.com/maps/search/?api=1&query=40+Rue+Laure+Diebold,+69009+Lyon,+France"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo"
                        src={epingle}
                        alt="logo d'une epingle pour indiquer un emplacement sur une carte"
                      />
                      <span className="city">
                        40 Rue Laure Diebold <br /> 69009 Lyon, France
                      </span>
                    </a>
                    <br />
                    <a className="lien-mentions" href="tel:+33612345678">
                      <img
                        className="logo"
                        src={phone}
                        alt="logo d'un telephone portable"
                      />
                      06 20 30 40 50
                    </a>
                    <br />
                    <a
                      className="lien-mentions"
                      href="mailto:johndoe@example.com"
                    >
                      <img
                        src={mail}
                        alt="logo d'un courriel"
                        className="mail"
                      />
                      john.doe@gmail.com
                    </a>
                  </address>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className={activeKey === "1" ? "blue-back" : ""}>
                <Button
                  variant="link"
                  onClick={() => toggleActiveKey("1")}
                  aria-controls="collapse-1"
                  aria-expanded={activeKey === "1"}
                  className="d-flex align-items-center justify-content-between w-100 buttoncard"
                >
                  <h3
                    className={`mr-auto ${
                      activeKey === "1" ? "blue-mention" : ""
                    }`}
                  >
                    Hébergeur
                  </h3>
                  <i
                    className={`fas fa-chevron-${
                      activeKey === "1" ? "up" : "down"
                    }`}
                  ></i>
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <h4>Always Data</h4>
                  <address>
                    91 Rue du Faubourg Saint-Honoré <br />
                    75008 Paris <br />
                    <img
                      className="logo"
                      src={globe}
                      alt="logo de globe internet"
                    />{" "}
                    <a href="https://www.alwaysdata.com/fr/">
                      www.alwaysdata.com
                    </a>
                  </address>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className={activeKey === "2" ? "blue-back" : ""}>
                <Button
                  variant="link"
                  onClick={() => toggleActiveKey("2")}
                  aria-controls="collapse-2"
                  aria-expanded={activeKey === "2"}
                  className="d-flex align-items-center justify-content-between w-100 buttoncard"
                >
                  <h3
                    className={`mr-auto ${
                      activeKey === "2" ? "blue-mention" : ""
                    }`}
                  >
                    Crédits
                  </h3>
                  <i
                    className={`fas fa-chevron-${
                      activeKey === "2" ? "up" : "down"
                    }`}
                  ></i>
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <h4>Crédits</h4>
                  <p className="credit-mentions">
                    Site développé par John Doe étudiant du CEF. <br />
                    Les images libre de droit sont issues du site{" "}
                    <a className="site" href="https://pixabay.com/fr/">
                      Pixabay.
                    </a>
                    <br />
                    Les icônes libre de droit sont issues du site{" "}
                    <a className="site" href="https://www.flaticon.com/fr/">
                      Flaticon.
                    </a>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Mentions;
