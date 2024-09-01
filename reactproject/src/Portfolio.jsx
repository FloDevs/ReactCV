import { createContext, useState } from "react";
import PropTypes from "prop-types";
import portfolio1 from "./assets/portfolio/fresh-food.jpg";
import portfolio2 from "./assets/portfolio/restaurant-japonais.jpg";
import portfolio3 from "./assets/portfolio/espace-bien-etre.jpg";

export const RealisationContext = createContext();

export const RealisationProvider = ({ children }) => {
  const [realisations] = useState([
    {
      id: 3,
      title: "Fresh food",
      image: portfolio1,
      excerpt: "Réalisation d'un site avec commande en ligne",
      link: "#",
      techno: "Site réalisé avec PHP et My SQL",
    },
    {
      id: 2,
      title: "Restaurant Akira",
      image: portfolio2,
      excerpt: "Réalisation d'un site vitrine",
      link: "#",
      techno: "Site réalisé avec WordPress",
    },
    {
      id: 1,
      title: "Espace bien être",
      image: portfolio3,
      excerpt: "Réalisation d'un site vitrine pour un practicien de bien-être",
      link: "#",
      techno: "Site réalisé en HTML/CSS",
    },
  ]);

  return (
    <RealisationContext.Provider value={{ realisations }}>
      {children}
    </RealisationContext.Provider>
  );
};

RealisationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
