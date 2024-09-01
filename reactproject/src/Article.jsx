import { createContext, useState } from "react";
import image1 from "./assets/blog/coder.jpg";
import image2 from "./assets/blog/croissance.jpg";
import image3 from "./assets/blog/google.jpg";
import image4 from "./assets/blog/screens.jpg";
import image5 from "./assets/blog/seo.jpg";
import image6 from "./assets/blog/technos.png";
import PropTypes from "prop-types";

export const ArticleContext = createContext();

const phrase =
  "Some quick example to build on the card title and make up the bulk of the card's content";

export const ArticleProvider = ({ children }) => {
  const [articles] = useState([
    {
      id: 6,
      title: "Coder son site en HTML/CSS",
      image: image1,
      excerpt: phrase,
      link: "#",
      date: "Publié le 21 août 2022",
      dateTime: "2022-08-21",
    },
    {
      id: 5,
      title: "Vendre ses produits sur le web",
      image: image2,
      excerpt: phrase,
      link: "#",
      date: "Publié le 20 août 2022",
      dateTime: "2022-08-20",
    },
    {
      id: 4,
      title: "Se positionner sur Google",
      image: image3,
      excerpt: phrase,
      link: "#",
      date: "Publié le 1 août 2022",
      dateTime: "2022-08-01",
    },
    {
      id: 3,
      title: "Coder en responsive design",
      image: image4,
      excerpt: phrase,
      link: "#",
      date: "Publié le 31 Juillet 2022",
      dateTime: "2022-07-31",
    },
    {
      id: 2,
      title: "Technique de referencement",
      image: image5,
      excerpt: phrase,
      link: "#",
      date: "Publié le 30 Juillet 2022",
      dateTime: "2022-07-30",
    },
    {
      id: 1,
      title: "Apprendre à coder",
      image: image6,
      excerpt: phrase,
      link: "#",
      date: "Publié le 12 Juillet 2022",
      dateTime: "2022-07-12",
    },
  ]);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
};

ArticleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
