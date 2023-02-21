import React from 'react';
import { Container } from 'react-bootstrap';
import '../utils/styles/Template.css';

const frameSource: string = "https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed";

export default function Abouts() {
    return (
        <Container>
            <section className="tm-contact tm-mb-50 tm-bgcolor-3 tm-border-rounded">
                <div className="tm-contact-header tm-flex-center">
                    <i className="fas fa-map-pin fa-3x" />
                    <h2 style={{ color: "#f4eaca" }}>Contact</h2>
                </div>
                <div className="tm-contact-info">
                    <address className="tm-mb-30" style={{ textAlign: "justify", color: "#f4eaca" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean posuere eleifend feugiat.
                        Ut porta at felis rutrum congue.
                        Nullam nulla arcu, pellentesque quis elit nec, efficitur sagittis massa
                    </address>
                    <div className="tm-text-white tm-mb-40">Tel: <a href="tel:0100200340" className="tm-link-white">010-020-0340</a></div>
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
    return (
        <Container>
            <section className="tm-contact tm-mb-50 tm-bgcolor-3 tm-border-rounded">
                <div className="embed-responsive embed-responsive-21by9">
                    <iframe title="embedsPage"
                        className="embed-responsive-item"
                        src={frameSource}
                        allowFullScreen
                        style={{ zIndex: 1 }}
                    />
                </div>
            </section>
        </Container>
    );
}