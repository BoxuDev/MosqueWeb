import "./ContentSection.css";
import React from 'react';
import { Container } from "react-bootstrap";

export const ContentSection = () => {
    return (
        <Container>
            <Container className="cont" style={{ marginBottom: "50px" }}>
                <div className="container" style={{
                    borderRadius: "36px",
                    overflow: "hidden",
                    backgroundColor: "#008696",
                    marginBottom: "15px",
                    marginTop: "15px",
                    minHeight: "350px"
                }}>
                    <div className="row">
                        <div className="col-lg-6" style={{ marginTop: "24px" }}>
                            <div className="tm-intro-text-container">
                                <h2 className="tm-text-primary mb-4 tm-section-title">Introduction</h2>
                                <p className="mb-4 tm-intro-text">
                                    The Town is <strong>simple CSS template</strong> built on Bootstrap v4.1.3
                                    and this is a little parallax layout that you can use for your websites.
                                </p>
                                <p className="mb-5 tm-intro-text">
                                    Please tell your friends about our site. Thank you.
                                    Curabitur dapibus tristique enim a imperdiet. Etiam
                                    tristique sem sed condimentum posuere.
                                </p>
                                <div className="tm-next" style={{ marginBottom: "8px" }}>
                                    <a href="#work" className="tm-intro-text tm-btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="" alt="Image" className="img-fluid tm-intro-img" style={{
                                padding: "20px",
                                borderRadius: "36px"
                            }} />
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    );
}