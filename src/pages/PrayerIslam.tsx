import React from 'react';
import { Container } from 'react-bootstrap';
import '../utils/styles/bootstrap.min.css';
import '../styles/AboutIslam.css';
import ab_pray from '../assets/AboutIslam/About/ab_pray.webp';
import ab_brief from '../assets/AboutIslam/About/ab_brief.webp';
import ab_zekah from '../assets/AboutIslam/About/ab_zekah.webp';

const PrayerIslam = () => {
    return (
        <Container style={{ marginBottom: "30px" }}>
            <section className="row tm-section">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h">
                        <h1 className="tm-text-color-white tm-site-name">Islam</h1>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <q className="tm-quote tm-text-color-gray">The religion of the Muslims, a monotheistic faith regarded as revealed through Muhammad as the Prophet of Allah.</q>
                    </div>
                </div>
            </section>

            <section className="row tm-section tm-col-md-reverse">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <div className="tm-md-flex-center">
                            <h2 className="tm-text-color-primary mb-4">Kelime-i Şehadet</h2>
                            <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">namaz</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary">
                        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                            <img src={ab_pray} alt="Image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="row tm-section">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h">
                        <img src={ab_pray} alt="Image" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <h2 className="tm-text-color-primary mb-4">Kelime-i Şehadet</h2>
                        <br /><br />
                        <a href="#" className="btn btn-primary float-lg-right tm-md-align-center"></a>
                    </div>
                </div>
            </section>

            <section className="row tm-section tm-col-md-reverse">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <div className="tm-md-flex-center">
                            <h2 className="tm-text-color-primary mb-4">Fusce ac enim at justo</h2>
                            <p className="mb-4">Pellentesque sagittis feugiat massa, vitae blandit elit dictum in. Nam eleifend nunc dui, sed cusus justo molestie id. Vestibulum vel sagittis justo.</p>
                            <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary">
                        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                            <img src={ab_pray} alt="Image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="row tm-section">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h">
                        <img src={ab_pray} alt="Image" />

                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <q className="tm-quote tm-text-color-gray">Ut sit amet augue elit. Vivamus eget tortor in ante scelerisque gravida. Vestibulum auctor condimentum sem.</q>
                        <br /><br />
                        <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">Read more</a>
                    </div>
                </div>
            </section>

            <section className="row tm-section tm-col-md-reverse">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <div className="tm-md-flex-center">
                            <h2 className="tm-text-color-primary mb-4">Fusce ac enim at justo</h2>
                            <p className="mb-4">Pellentesque sagittis feugiat massa, vitae blandit elit dictum in. Nam eleifend nunc dui, sed cusus justo molestie id. Vestibulum vel sagittis justo.</p>
                            <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">Hajj</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary">
                        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                            <img src={ab_pray} alt="Image" />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default PrayerIslam;