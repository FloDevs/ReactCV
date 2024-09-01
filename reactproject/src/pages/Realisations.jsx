import Header from "../Header";
import Footer from "../Footer";
import Intro from "../Intro";
import "../style/realisation.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { RealisationContext } from "../Portfolio";

function Realisation() {
  const { realisations } = useContext(RealisationContext);

  return (
    <>
      <Header />
      <Intro
        title="PORTFOLIO"
        subtitle="Voici quelques-unes de mes réalisations."
      />
      <div className="container-fluid my-5 cadre">
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">
          {realisations.map((realisation) => (
            <Col key={realisation.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={realisation.image}
                  alt={realisation.title}
                />
                <Card.Body>
                  <Card.Title>{realisation.title}</Card.Title>
                  <Card.Text>{realisation.excerpt}</Card.Text>
                  <Button variant="outline-primary" href={realisation.link}>
                    Voir
                  </Button>
                </Card.Body>
                <div className="techno-rectangle">
                  <p className="techno">{realisation.techno}</p>
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

export default Realisation;
