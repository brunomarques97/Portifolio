import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './home.css';
import foto from '../assets/foto.png';

function Home() {
  const [showName, setShowName] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handlePortfolioClick = () => {
    navigate('/portifolio');
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Bruno Marques.pdf';
    link.download = 'Bruno_Marques.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container
      fluid
      className="home-bg d-flex align-items-center justify-content-center p-0"
    >
      <Row className="align-items-center w-100 mx-0 gx-4" style={{ maxWidth: '1400px' }}>


        <Col xs={12} className="d-lg-none text-center mb-3">
          <img src={foto} alt="Bruno Marques" className="foto-oval-desktop" />
        </Col>

        <Col xs={12} lg={7} className="text-center text-lg-start px-4 px-lg-7 content-wrapper">

          <h1 className="responsive-title fw-semibold mb-0 text-white" style={{ letterSpacing: '0.5px', lineHeight: '1.2' }}>
            Olá, sou
          </h1>
          {showName && (
            <h1 className="responsive-name fw-bold text-white mb-3 typing-text" style={{ letterSpacing: '-0.5px', lineHeight: '1' }}>
              Bruno Marques.
            </h1>)}

          <p className="text-info mb-4 fade-in-subtitle" style={{ fontWeight: '500' }}>
            Desenvolvedor Full Stack.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center mt-4 gap-3">
            <Button
              size="lg"
              onClick={handlePortfolioClick}
              className="btn-portfolio px-4"
            >
              Veja meu portfólio
            </Button>

            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="btn-cv px-4"
            >
              Baixar CV
            </Button>
          </div>
        </Col>

        <Col lg={5} className="d-none d-lg-flex foto-container">
          <img src={foto} alt="Bruno Marques" className="foto-oval-desktop" />
        </Col>

      </Row>
    </Container>
  );
}

export default Home;