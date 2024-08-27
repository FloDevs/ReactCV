import  { createContext, useState } from 'react';
import image1 from "./assets/coder.jpg";
import image2 from "./assets/croissance.jpg";
import image3 from "./assets/google.jpg";
import image4 from "./assets/screens.jpg";
import image5 from "./assets/seo.jpg";
import image6 from "./assets/technos.png";
import PropTypes from 'prop-types';

export const ArticleContext = createContext();

const phrase = "Some quick example to build on the card title and make up the bulk of the card's content"

export const ArticleProvider = ({ children }) => {
    const [articles] = useState([
        {
            id: 1,
            title: 'Coder son site en HTML/CSS',
            image: image1,
            excerpt: phrase,
            link: '#',
          },
          {
            id: 2,
            title: 'Vendre ses produits sur le web',
            image: image2,
            excerpt: phrase,
            link: '#',
          },
          {
            id: 3,
            title: 'Se positionner sur Google',
            image: image3,
            excerpt: phrase,
            link: '#',
          },
          {
            id: 4,
            title: 'Coder en responsive design',
            image: image4,
            excerpt: phrase,
            link: '#',
          },
          {
            id: 5,
            title: 'Technique de referencement',
            image: image5,
            excerpt: phrase,
            link: '#',
          },
          {
            id: 6,
            title: 'Apprendre à coder',
            image: image6,
            excerpt: phrase,
            link: '#',
          },
    ]);

    return (
        <ArticleContext.Provider value={{ articles }}>
            {children}
        </ArticleContext.Provider>
    );
};

ArticleProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validation de children
};