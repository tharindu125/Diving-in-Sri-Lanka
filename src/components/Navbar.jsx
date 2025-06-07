import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CustomNavbar() {
  const location = useLocation();

const getNavLinkClass = (path) => {
  const fullPath = location.pathname + location.hash;
  return fullPath === path ? 'fw-bold text-primary' : 'text-dark';
};


  return (
    <Navbar expand="lg" fixed="top" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 d-flex align-items-center gap-2">
          <span style={{color: '#0bd3d4'}}>Diving In</span>  <span style={{color: '#f890e8'}}>Sri Lanka</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-3">
            {/* <Nav.Link as={Link} to="/" className={getNavLinkClass('/')}>Home</Nav.Link> */}
            <Nav.Link as={Link} to="/#gallery" className={getNavLinkClass('/#gallery')}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/#when_to_dive_where" className={getNavLinkClass('/#when_to_dive_where')}>When to Dive Where?</Nav.Link>

            {/* <Nav.Link as={Link} to="/#about" className={getNavLinkClass('/about')}>About Us</Nav.Link> */}

            {/* <Nav.Item className="ms-3">
              <Link to="https://www.divingmirissa.com/" className="btn btn-outline-primary fw-semibold">
                Diving In Mirissa
              </Link>
            </Nav.Item>

            <Nav.Item className="ms-3">
              <Link to="https://www.nilavelidivingandsnorkelingtours.com/" className="btn btn-outline-primary fw-semibold">
                Diving In Nilaveli
              </Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
