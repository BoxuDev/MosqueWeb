import React from 'react';
import { Container } from 'react-bootstrap';
import "../utils/styles/IslamicEbook.css";

function IslamicEbook() {
    return (
        <Container style={{ marginBottom: "30px" }}>
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center hero-text">
                                <h1 data-aos="fade-up" data-aos-delay="">Chrome now alerts you when someone steals your password</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="row tm-section tm-mb-30">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <div className="tm-flex-center pl-5 pr-5 pt-5 pb-5">
                            <div className="tm-md-flex-center">
                                <h2 className="mb-4 tm-text-color-primary">Nullam auctor ornare finibus</h2>
                                <p>Cras eu dolor lorem. Cras justo mauris, rhoncus in mauris ac, pellentesque pulvinar metus. Suspendisse consectetur consequat diam, ac dignissim mauris gravida vitae. Vestibulum blandit vestibulum mi a viverra.</p>
                                <p className="mb-4">Fusce porta lectus vel elit condimentum porttitor. Maecenas at quam congue, sollicitudin risus quis, ultricies enim. Vivamus sodales, tellus ac quismod dignissim, metus ligula porttitor enim.</p>
                                <p className="mb-4">Sed fermentum odio mollis libero iaculis ultrices. Mauris et nibh mi. Nullam vel sapien dolor. Vestibulum ipsum quam, aliquet ac pharetra in, suscipit eu risus. Etiam rutrum eros ultrices, consectetur felis ultrices, vehicula purus.</p>
                                <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 text-xl-right text-md-center text-center mt-5 mt-lg-0 pr-lg-0">
                          </div>
                </section>


            </div>
        </Container>
    );
}

export default IslamicEbook;