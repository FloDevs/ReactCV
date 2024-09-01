import Header from "../Header";
import Footer from "../Footer";
import Intro from "../Intro";
import "../style/blog.css";
import { useContext } from "react";
import { ArticleContext } from "../Article";

import { Card, Button, Row, Col } from "react-bootstrap";

function Blog() {
  const { articles } = useContext(ArticleContext);
  return (
    <>
      <Header />
      <Intro
        title="BLOG"
        subtitle="Retrouvez ici quelques articles sur le développement web."
      />
      <div className="container-fluid my-5">
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">
          {articles.map((article) => (
            <Col key={article.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={article.image}
                  alt={article.title}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.excerpt}</Card.Text>
                  <Button variant="primary" href={article.link}>
                    Lire la suite
                  </Button>
                </Card.Body>
                <div className="date-rectangle">
                  <time dateTime={article.dateTime}>{article.date}</time>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
