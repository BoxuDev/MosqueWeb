import React from 'react';
import { Container } from 'react-bootstrap';
import '../utils/styles/Template.css';

export default function Abouts() {
    return (
        <Container>
            <section className="tm-contact tm-mb-50 tm-bgcolor-3 tm-border-rounded">
                <div className="tm-contact-header tm-flex-center">
                    <i className="fas fa-map-pin fa-3x" />
                    <h2 style={{ color: "white" }}>Contact</h2>
                </div>
                <div className="tm-contact-info">
                    <address className="tm-mb-30" style={{ textAlign: "justify", color: "white" }}>
                        16 Hardwicke Lane, Hardwicke Street, Dublin 1, DO1 Y223
                    </address>
                    <div className="tm-text-white tm-mb-40">TEL&nbsp;&nbsp;{'=>'}&nbsp;&nbsp;<a href="tel:+353874066894" className="tm-link-white">+353 (87) 406 6894</a></div>
                    <div className="tm-flex">
                        <a href="https://facebook.com" className="tm-social-link"><i className="fab fa-facebook" /></a>
                        <a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter" /></a>
                        <a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram" /></a>
                    </div>
                </div>
                <div className="tm-contact-form-container">
                    <form id="contact-form" action="" method="POST" className="tm-contact-form">
                        <input type="text" name="name" placeholder="name" required />
                        <input type="email" name="email" placeholder="email" required />
                        <textarea rows={5} name="message" className="tm-mb-30" placeholder="message" required></textarea>
                        <button type="submit" className="tm-right tm-btn-submit">SEND</button>
                    </form>
                </div>
            </section>
        </Container>
    );
}

export function AboutWithMap() {
    const frameSource: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.290179637719!2d-6.264485899999999!3d53.3559615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80a8670e41%3A0xcbbf1b798e3f2e9c!2s16%20Hardwicke%20Ln%2C%20Rotunda%2C%20Dublin%201!5e0!3m2!1str!2sie!4v1679438764521!5m2!1str!2sie";
    return (
        <Container>
            <section className="tm-contact tm-mb-50 tm-bgcolor-3 tm-border-rounded">
                <div className="embed-responsive embed-responsive-21by9">
                    <iframe title="embedsPage"
                        className="embed-responsive-item"
                        src={frameSource}
                        allowFullScreen
                    />
                </div>
            </section>
        </Container>
    );
}