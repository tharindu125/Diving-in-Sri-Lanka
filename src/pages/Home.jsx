// import React, { useState } from 'react';
import Hero from '../components/Hero'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt, FaWater } from 'react-icons/fa';


function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const locations = [
        {
            name: 'Mirissa',
            season: 'November - April',
            description: 'Coral reefs & shipwrecks.',
            aos: 'fade-up',
            image: '/src/assets/react.svg'
        },
        {
            name: 'Trincomalee',
            season: 'May - October',
            description: 'Clear waters, marine life.',
            aos: 'fade-left',
            image: '/src/assets/react.svg'
        }
    ];


    return (
        <>
            <Hero />

            <Container className="py-5">
                <h2 className="text-center mb-4" data-aos="zoom-in">Explore Diving in Sri Lanka</h2>
                <p className="text-center mb-5" data-aos="fade-up">
                    Discover world-class dive sites, shipwrecks, coral reefs, and vibrant marine life in different coastal regions.
                </p>

                {/* <Row className="g-4">
                    {locations.map((loc, idx) => (
                        <Col key={idx} md={6}>
                            <Card className="shadow-lg border-0 rounded-4" data-aos={loc.aos}>
                                <Card.Body className="d-flex align-items-center gap-3">

                                    <div className='col-md-6'>
                                        <Card.Title className="text-primary fs-5 mb-2">
                                            <FaMapMarkerAlt className="me-2" />
                                            {loc.name}
                                        </Card.Title>
                                        <Card.Text className="mb-1">{loc.description}</Card.Text>
                                        <div className="text-muted small">
                                            <FaCalendarAlt className="me-2" />
                                            Best Time: {loc.season}
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <img
                                            src={loc.image} 
                                            alt={loc.name}
                                            className="rounded-3 m-3"
                                            style={{ width: '150px', height: '150px', objectFit: 'cover', float: 'right' }}
                                        />
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> */}

                <Row className="g-4">
                    {locations.map((loc, idx) => (
                        <Col key={idx} md={6}>
                            <Card className="shadow-lg border-0 rounded-4" data-aos={loc.aos}>
                                <Card.Body>
                                    <Card.Title className="text-primary fs-4">
                                        <FaMapMarkerAlt className="me-2" />
                                        {loc.name}
                                    </Card.Title>
                                    <Card.Text>{loc.description}</Card.Text>
                                    <div className="text-muted">
                                        <FaCalendarAlt className="me-2" />
                                        Best Time: {loc.season}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="mt-5" data-aos="fade-up">
                    <h4 className="text-center mb-3">When to Dive Where?</h4>
                    <Tab.Container defaultActiveKey="west">
                        <Nav variant="pills" className="justify-content-center mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="west">South Coast</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="east">East Coast</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            {/* WEST */}
                            <Tab.Pane eventKey="west">
                                <p className="text-center mb-4">
                                    From <strong>November to April</strong>, the west and south coasts (Hikkaduwa, Unawatuna, Mirissa) offer the best diving due to calm seas.
                                </p>

                                <Card className="shadow border-0 rounded-4 mb-4 p-3" data-aos="fade-up">
                                    <Row className="align-items-start g-3">
                                        <Col md={4}>
                                            <img
                                                src="/src/assets/fun-diving-4.jpg"
                                                alt="Diving Mirissa"
                                                className="img-fluid rounded-3"
                                            />
                                            <div className="mt-3">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d992.1042948617126!2d80.479899!3d5.937093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fdd8ea6306f%3A0xbe2c68b941a47aff!2sDiving%20Mirissa!5e0!3m2!1sen!2slk!4v1748949904391!5m2!1sen!2slk"
                                                    width="100%"
                                                    height="180"
                                                    style={{ border: 0 }}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    title="Diving Mirissa Map"
                                                ></iframe>
                                            </div>
                                        </Col>

                                        <Col md={8}>
                                            <h5 className="text-primary">🌊 Diving Mirissa</h5>
                                            <div className="mb-2 text-warning fs-5">
                                                ⭐⭐⭐⭐⭐
                                            </div>
                                            <p>
                                                Explore the beautiful underwater world of Mirissa with experienced instructors and a variety of dive packages.
                                            </p>
                                            <ul className="mb-2">
                                                <li>💼 PADI Certification Courses</li>
                                                <li>🚤 Snorkeling & Reef Diving</li>
                                                <li>🌴 Located near Mirissa Beach</li>
                                            </ul>
                                            <p className="mb-1">
                                                🔗 <a href="https://www.divingmirissa.com/" target="_blank" rel="noopener noreferrer">www.divingmirissa.com</a>
                                            </p>
                                            <p>📞 +94 71 031 0253 | 📧 info@divingmirissa.com</p>

                                            <a
                                                href="https://www.divingmirissa.com/#contact_form"
                                                className="btn btn-outline-primary mt-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Book Now
                                            </a>

                                            <div className="accordion mt-4" id="faqMirissa">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                        >
                                                            What diving packages do you offer?
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="collapseOne"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#faqMirissa"
                                                    >
                                                        <div className="accordion-body">
                                                            We offer beginner-friendly fun dives, reef dives, wreck dives, and full PADI certification programs.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo"
                                                        >
                                                            Do you provide equipment?
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="collapseTwo"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#faqMirissa"
                                                    >
                                                        <div className="accordion-body">
                                                            Yes! We provide full equipment including wetsuits, fins, masks, tanks, and regulators.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>

                            </Tab.Pane>

                            {/* EAST */}
                            <Tab.Pane eventKey="east">
                                <p className="text-center mb-4">
                                    From <strong>May to October</strong>, the east coast (Trincomalee, Batticaloa, Nilaveli) becomes ideal for clear-water diving.
                                </p>

                                <Card className="shadow border-0 rounded-4 mb-4 p-3" data-aos="fade-up">
                                    <Row className="align-items-start g-3">
                                        <Col md={4}>
                                            <img
                                                src="/src/assets/fun-diving-4.jpg"
                                                alt="Diving in Nilaveli"
                                                className="img-fluid rounded-3"
                                            />
                                            <div className="mt-3">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7888.016861288978!2d81.191155!3d8.690747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbf000ab4ca19%3A0xd0ed0b4b52bc4d90!2sNilaveli%20diving%20and%20snorkeling%20tours!5e0!3m2!1sen!2slk!4v1748950009434!5m2!1sen!2slk"
                                                    width="100%"
                                                    height="180"
                                                    style={{ border: 0 }}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    title="Diving in Nilaveli Map"
                                                ></iframe>
                                            </div>
                                        </Col>

                                        <Col md={8}>
                                            <h5 className="text-primary">🌊 Diving in Nilaveli</h5>
                                            <div className="mb-2 text-warning fs-5">
                                                ⭐⭐⭐⭐⭐
                                            </div>
                                            <p>
                                                Experience stunning marine biodiversity, crystal-clear waters, and unforgettable dives at Nilaveli — ideal from May to October.
                                            </p>
                                            <ul className="mb-2">
                                                <li>💼 Daily Dive Trips & PADI Courses</li>
                                                <li>🐠 Coral Reefs, Turtles, Shipwrecks</li>
                                                <li>📍 Near Pigeon Island Marine Sanctuary</li>
                                            </ul>
                                            <p className="mb-1">
                                                🔗 <a href="https://www.nilavelidivingandsnorkelingtours.com/" target="_blank" rel="noopener noreferrer">www.nilavelidivingandsnorkelingtours.com</a>
                                            </p>
                                            <p className='mb-1'>📞 +94 76 030 5657</p>
                                            <p>📧 info@nilavelidivingandsnorkelingtours.com</p>

                                            <a
                                                href="https://www.nilavelidivingandsnorkelingtours.com/contact.html#contact_form"
                                                className="btn btn-outline-primary mt-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Book Now
                                            </a>

                                            <div className="accordion mt-4" id="faqNilaveli">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="nilaveliQ1">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#nilaveliA1"
                                                        >
                                                            What marine life can I see?
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="nilaveliA1"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#faqNilaveli"
                                                    >
                                                        <div className="accordion-body">
                                                            Expect to see colorful coral reefs, reef fish, turtles, and occasional blacktip reef sharks around Pigeon Island.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="nilaveliQ2">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#nilaveliA2"
                                                        >
                                                            Do you offer snorkeling?
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="nilaveliA2"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#faqNilaveli"
                                                    >
                                                        <div className="accordion-body">
                                                            Yes! We offer snorkeling tours to Pigeon Island and nearby reefs, perfect for families and beginners.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>

                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>

            </Container>

        </>
    )
}

export default Home;