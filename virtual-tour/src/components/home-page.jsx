import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'; // Assuming CSS is saved in App.css
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 150,
        });
    }, []);

    const navigateToSample = () => {
        navigate('/panorama-viewer');
    };

    return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg fixed-top py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#" style={{ color: "var(--primary-color)" }}>
                        <i className="fas fa-water me-2"></i>VT of Southern Leyte
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#destinations">Destinations</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="btn btn-primary ms-2" href="#tours">Book Tour</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section" id="home" data-aos="fade-up">
                <div className="container text-white text-center">
                    <h1 className="display-4 mb-4">Explore Southern Leyte's Hidden Paradise</h1>
                    <p className="lead mb-4">Virtual tours of pristine beaches, majestic islands, and rich marine life</p>
                    <a href="#tours" className="btn btn-primary btn-lg px-5">Start Exploring</a>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="py-5 leyte-bg-pattern" id="destinations">
                <div className="container py-5">
                    <h2 className="section-title text-center mb-5" data-aos="fade-up">Featured Destinations</h2>

                    <div className="row g-4">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="destination-card">
                                <img src="" className="img-fluid" alt="Sogod Bay" />
                                <div className="p-3 bg-white">
                                    <h4>Sogod Bay</h4>
                                    <p>Dive into the whale shark capital of Southern Leyte</p>
                                    <button className="btn btn-primary" onClick={navigateToSample}>Virtual Tour</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="destination-card">
                                <img src="" className="img-fluid" alt="Tangkaan Beach" />
                                <div className="p-3 bg-white">
                                    <h4>Tangkaan Beach</h4>
                                    <p>White sand beach with stunning sunset views</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="destination-card">
                                <img src="" className="img-fluid" alt="Napantao Marine Sanctuary" />
                                <div className="p-3 bg-white">
                                    <h4>Napantao Marine Sanctuary</h4>
                                    <p>Protected coral reef ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-5 bg-light" id="about">
                <div className="container py-5">
                    <h2 className="section-title text-center mb-5" data-aos="fade-up">Why Choose Us</h2>

                    <div className="row g-4 text-center">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <i className="fas fa-map-marked-alt feature-icon mb-3"></i>
                            <h4>Local Expertise</h4>
                            <p>Guided by Southern Leyte natives with deep cultural knowledge</p>
                        </div>

                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <i className="fas fa-vr-cardboard feature-icon mb-3"></i>
                            <h4>360° Experience</h4>
                            <p>Immersive virtual tours of our province's best spots</p>
                        </div>

                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <i className="fas fa-fish feature-icon mb-3"></i>
                            <h4>Marine Conservation</h4>
                            <p>Supporting local conservation efforts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4" data-aos="fade-up">
                            <h4>Southern Leyte Virtual Tours</h4>
                            <p>Maasin City, Southern Leyte<br />Philippines</p>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <h4>Contact Us</h4>
                            <p>Email: visit@southernleyte.ph<br />Phone: +63 912 345 6789</p>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
