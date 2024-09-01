import Banner from "./assets/banner.jpg";
import PropTypes from "prop-types";
import "./style/intro.css";
function Intro({ title, subtitle, hideBanner }) {
  return (
    <section className="intro">
      {!hideBanner && (
        <img
          className="bleu"
          src={Banner}
          alt="photo de l'espace avec du bleu"
        />
      )}
      <h1 className="title-intro">{title}</h1>
      <h2 className="subtitle-intro">{subtitle}</h2>
      <div className="blue-line"></div>
    </section>
  );
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  hideBanner: PropTypes.bool, // Ajout de la prop pour vérifier son type
};

export default Intro;
