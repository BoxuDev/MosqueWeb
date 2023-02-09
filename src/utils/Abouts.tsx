import React from 'react';
import './styles/templatemo-style.css';

function Abouts() {
    return (
        <section className="tm-contact tm-mb-50 tm-bgcolor-3 tm-border-rounded">
            <div className="tm-contact-header tm-flex-center">
                <i className="fas fa-map-pin fa-3x"></i>
                <h2>Contact</h2>
            </div>
            <div className="tm-contact-info">
                <address className="tm-mb-30">
                    120 Curabitur sed tortor ultrices,
                    congue odio eget, posuere urna.
                    Praesent at rhoncus 10680
                </address>
                <div className="tm-text-white tm-mb-40">Tel: <a href="tel:0100200340" className="tm-link-white">010-020-0340</a></div>
                <div className="tm-flex">
                    <a href="https://facebook.com" className="tm-social-link"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="tm-contact-form-container">
                <form id="contact-form" action="" method="POST" className="tm-contact-form">
                    <input type="text" name="name" placeholder="name" required />
                    <input type="email" name="email" placeholder="email" required />
                    <textarea rows={5} name="message" className="tm-mb-30" placeholder="message" required></textarea>
                    <button type="submit" className="tm-right tm-btn-submit">send</button>
                </form>
            </div>
        </section>
    );
}

export default Abouts;