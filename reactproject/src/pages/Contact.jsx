import Header from "../Header";
import Footer from "../Footer";
import Intro from "../Intro";
import "../style/contact.css";
import { Button } from "react-bootstrap";
import phone from "../assets/logo/phone.png";
import epingle from "../assets/logo/epingle.png";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Envoyé!");
  };

  return (
    <>
      <Header />

      <div className="contact-wrapper">
        <div className="contact-code">
          <Intro
            title="ME CONTACTER"
            subtitle="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
            hideBanner={true}
          />

          <section className="contact-page">
            <section className="contact-section">
              <h3 className="title-contact">Formulaire de contact</h3>

              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre Nom"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                <Button
                  className="button-contact"
                  variant="primary"
                  type="submit"
                >
                  Envoyer
                </Button>
              </form>
            </section>
            <section className="contact-section">
              <h3 className="title-contact">Mes coordonnées</h3>
              <address className="adress-contact">
                <img
                  className="logo-contact"
                  src={epingle}
                  alt="logo d'une epingle pour indiquer un emplacement sur une carte"
                />{" "}
                40 Rue Laure Diebold, 69009 <br /> Lyon, France <br />
                <img
                  className="logo-contact"
                  src={phone}
                  alt="logo d'un telephone portable"
                />
                06 20 30 40 50
              </address>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.281022134231!2d4.799131049352103!3d45.77839428613809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1725193244548!5m2!1sfr!2sfr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="John Doe Location"
                ></iframe>
              </div>
            </section>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
