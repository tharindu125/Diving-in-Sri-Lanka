// import React, { useState } from 'react';
import Hero from '../components/Hero'
import Gallery from '../components/Gallery';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt, FaWater } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa';

import Image from '../assets/fun-diving-4.jpg';

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
                <h2 className="text-center mb-4 fw-bold" data-aos="zoom-in" style={{color: '#0bd3d4'}}>Explore Diving in Sri Lanka</h2>
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

                <div className="mt-5" data-aos="fade-up" id='when_to_dive_where'>
                    <h3 className="text-center mb-3 fw-bold" style={{color: '#0bd3d4'}}>When to Dive Where?</h3>
                    <Tab.Container defaultActiveKey="west">
                        <Nav variant="pills" className="justify-content-center mb-3 gap-3">
                            <Nav.Item>
                                <Nav.Link eventKey="west">South Coast</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="east">East Coast</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            {/* WEST */}
                            <Tab.Pane eventKey="west" id='south_coast'>
                                <p className="text-center mb-4">
                                    From <strong>November to April</strong>, the west and south coasts (Hikkaduwa, Unawatuna, Mirissa) offer the best diving due to calm seas.
                                </p>

                                <Card className="shadow border-0 rounded-4 mb-4 p-3" data-aos="fade-up">
                                    <Row className="align-items-start g-3">
                                        <Col md={4}>
                                            <img
                                                src={Image}
                                                alt="Diving Mirissa"
                                                className="img-fluid rounded-3"
                                            />
                                            <div className="mt-3">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d992.1042948617126!2d80.479899!3d5.937093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fdd8ea6306f%3A0xbe2c68b941a47aff!2sDiving%20Mirissa!5e0!3m2!1sen!2slk!4v1748949904391!5m2!1sen!2slk"
                                                    width="100%"
                                                    height="230"
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
                                            <ul className="mb-4">
                                                <li>PADI Certification Courses</li>
                                                <li>Snorkeling & Reef Diving</li>
                                                <li>Located near Mirissa Beach</li>
                                            </ul>
                                            <p className="mb-1 ms-3">
                                                🔗 <a href="https://www.divingmirissa.com/" target="_blank" rel="noopener noreferrer">www.divingmirissa.com</a>
                                            </p>
                                            <p className='ms-3'>📞 +94 71 031 0253 | 📧 info@divingmirissa.com</p>

                                            <div className="d-flex gap-3 mb-4 ms-3">
                                                <a
                                                    href="https://www.facebook.com/divingmirissa"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#3b5998', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaFacebookF />
                                                </a>

                                                <a
                                                    href="https://www.instagram.com/divingmirissa/"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#C13584', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaInstagram />
                                                </a>

                                                <a
                                                    href="https://www.youtube.com/@divingmirissa"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#FF0000', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaYoutube />
                                                </a>

                                                <a
                                                    href="https://www.tiktok.com/@divingmirissa"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#000000', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaTiktok />
                                                </a>

                                                <a
                                                    href="https://wa.me/+94710310253"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#25D366', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaWhatsapp />
                                                </a>
                                            </div>

                                            <a
                                                href="https://www.divingmirissa.com/#contact_form"
                                                className="btn btn-outline-light mt-2 ms-3"
                                                style={{background: '#0bd3d4', color: '#ffffff'}}
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
                                                            <p>We offer a wide range of exciting ocean adventures and diving experiences for all skill levels:</p>
                                                            <ul className="mb-2 list-unstyled">
                                                                <li><strong>Fun Diving</strong> – Enjoy relaxing dives guided by professionals</li>
                                                                <li><strong>Night Diving</strong> – Discover the magic of the reef after sunset</li>
                                                                <li><strong>Discover Scuba Diving</strong> – Beginner-friendly diving introduction program</li>
                                                                <li><strong>Snorkeling With Turtles</strong> – Swim alongside gentle sea turtles in their natural habitat</li>
                                                                <li><strong>Whales & Dolphins Watching Tours</strong> – See majestic whales and playful dolphins up close</li>
                                                                <li><strong>Sunset Boat Tours</strong> – Unwind with breathtaking views of the tropical sunset</li>
                                                                <li><strong>Kayak Tours</strong> – Paddle through serene waters and coastal beauty</li>
                                                                <li><strong>Fishing & Dolphin Watching Tours</strong> – Combine thrilling fishing with dolphin spotting</li>
                                                                <li><strong>PADI Courses</strong> – Get certified with globally recognized dive programs</li>
                                                                <li><strong>Night Snorkeling</strong> – Explore glowing reefs and marine life after dark</li>
                                                            </ul>
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
                                                            Yes! We offer snorkeling tours in turtle beach and nearby reefs, perfect for families and beginners.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>

                            </Tab.Pane>

                            {/* EAST */}
                            <Tab.Pane eventKey="east" id='east_coast'>
                                <p className="text-center mb-4">
                                    From <strong>May to October</strong>, the east coast (Trincomalee, Batticaloa, Nilaveli) becomes ideal for clear-water diving.
                                </p>

                                <Card className="shadow border-0 rounded-4 mb-4 p-3" data-aos="fade-up">
                                    <Row className="align-items-start g-3">
                                        <Col md={4}>
                                            <img
                                                src={Image}
                                                alt="Diving in Nilaveli"
                                                className="img-fluid rounded-3"
                                            />
                                            <div className="mt-3">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7888.016861288978!2d81.191155!3d8.690747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbf000ab4ca19%3A0xd0ed0b4b52bc4d90!2sNilaveli%20diving%20and%20snorkeling%20tours!5e0!3m2!1sen!2slk!4v1748950009434!5m2!1sen!2slk"
                                                    width="100%"
                                                    height="250"
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
                                            <ul className="mb-4">
                                                <li>Daily Dive Trips & PADI Courses</li>
                                                <li>Coral Reefs, Turtles, Shipwrecks</li>
                                                <li>Near Pigeon Island Marine Sanctuary</li>
                                            </ul>
                                            <p className="mb-1 ms-3">
                                                🔗 <a href="https://www.nilavelidivingandsnorkelingtours.com/" target="_blank" rel="noopener noreferrer">www.nilavelidivingandsnorkelingtours.com</a>
                                            </p>
                                            <p className='mb-1 ms-3'>📞 +94 76 030 5657</p>
                                            <p className='ms-3'>📧 info@nilavelidivingandsnorkelingtours.com</p>

                                            <div className="d-flex gap-3 mb-4 ms-3">
                                                <a
                                                    href="https://www.facebook.com/divingmirissa"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#3b5998', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaFacebookF />
                                                </a>

                                                <a
                                                    href="https://www.instagram.com/divingmirissa/"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#C13584', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaInstagram />
                                                </a>

                                                <a
                                                    href="https://www.youtube.com/@divingmirissa"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#FF0000', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaYoutube />
                                                </a>

                                                <a
                                                    href="https://www.tiktok.com/@divingmirissa"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#000000', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaTiktok />
                                                </a>

                                                <a
                                                    href="https://wa.me/+94760305657"
                                                    className="icon-link"
                                                    style={{ backgroundColor: '#25D366', color: '#fff', padding: '10px', borderRadius: '50%' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaWhatsapp />
                                                </a>
                                            </div>

                                            <a
                                                href="https://www.nilavelidivingandsnorkelingtours.com/contact.html#contact_form"
                                                className="btn btn-outline-light mt-2 ms-3"
                                                style={{background: '#0bd3d4', color: '#ffffff'}}
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
                                                            <p>We offer a variety of exciting snorkeling and diving experiences for all levels:</p>
                                                            <ul className="mb-2">
                                                                <li><strong>Pigeon Island Snorkeling Tour</strong> – Explore vibrant coral reefs and marine life</li>
                                                                <li><strong>White Rock Snorkeling Tour</strong> – A scenic underwater adventure for all ages</li>
                                                                <li><strong>Fun Diving</strong> – Enjoy relaxed dives guided by certified instructors</li>
                                                                <li><strong>Night Diving</strong> – Witness the magical transformation of the reef after dark</li>
                                                                <li><strong>Discover Scuba Diving</strong> – Perfect for beginners to try diving for the first time</li>
                                                                <li><strong>Whales & Dolphins Watching Tours</strong> – Catch a glimpse of majestic marine giants</li>
                                                                <li><strong>PADI Courses</strong> – From beginner to pro-level certification programs</li>
                                                                <li><strong>Night Snorkeling</strong> – A unique nighttime reef experience under the stars</li>
                                                            </ul>
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
            
            <Gallery />
        </>
    )
}

export default Home;