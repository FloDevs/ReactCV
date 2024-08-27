import Banner from './assets/banner.jpg'
import PropTypes from 'prop-types';
import './style/intro.css'
function Intro({title , subtitle}) {
  

    return (
      <>
    
      <section className="intro">
       <img className="bleu" src={Banner} alt="photo de l'espace avec du bleu" />
       <h1 className="title-intro">{title}</h1> 
       <h2 className="subtitle-intro">{subtitle}</h2>
       <div className="blue-line"></div>
      </section> 
     
      </>
    )
  }
  Intro.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };
  
  export default Intro
  