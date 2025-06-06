// import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import 'aos/dist/aos.css';

function Hero() {
//   const [showHero, setShowHero] = useState(true);

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;

//     if (scrollTop === 0) {
//       setShowHero(true);
//     } else if (scrollTop > 0) {
//       setShowHero(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  return (
    <section className="hero-section bg-light py-0 min-vh-100 d-flex align-items-center transition-hero">
      <Container>
          <Row className="align-items-center gy-4">
            {/* Left text content */}
            <Col md={6} className="text-center text-md-start">
                {/* <P></P> */}
                <p className="d-md-flex gap-3 position-absolute top-0 ms-4 hero_subtitle-1" data-aos="fade-right" data-aos-delay="200">
                    Sri Lanka is home to two breathtaking<br />diving locations that every<br />underwater enthusiast must explore!
                </p>

                {/* Desktop social icons */}
                <div className="d-md-flex gap-3 position-absolute bottom-0 start-0 mb-4 ms-4 fs-5">
                    {/* <div className="d-none d-md-flex gap-3 fade-in-load delay-1">
                        <a href="#" className="social-icon bg-facebook text-white"><FaFacebookF /></a>
                        <a href="#" className="social-icon bg-instagram text-white"><FaInstagram /></a>
                        <a href="#" className="social-icon bg-twitter text-white"><FaTwitter /></a>
                        <a href="#" className="social-icon bg-whatsapp text-white"><FaWhatsapp /></a>
                    </div> */}

                    {/* Button */}
                    <Button as={Link} to="https://www.divingmirissa.com/" className="fw-bold text-dark hero-button fade-in-load delay-2 ">
                        Diving In Mirissa
                    </Button>
                    <Button as={Link} to="https://www.nilavelidivingandsnorkelingtours.com/" className="fw-bold text-dark hero-button fade-in-load delay-2 ">
                        Diving In Nilaveli
                    </Button>
                </div>
            </Col>

            <Col md={6} className="test-md-end" >
              <h1 className="top-50 end-0 fw-bold hero-title"  data-aos="zoom-out" data-aos-delay="200">
                Diving In Sri Lanka
              </h1>

              <div className="d-md-flex bottom-0 end-0 me-4 fs-5 fade-in-load delay-1 hero_subtitle-2">
                <p className="mb-0">Explore the amazing memories for life</p>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default Hero;
