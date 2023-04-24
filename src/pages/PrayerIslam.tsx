import React from 'react';
import { Container } from 'react-bootstrap';
import '../utils/styles/bootstrap.min.css';
import '../styles/AboutIslam.css';
import ab_pray from '../assets/AboutIslam/About/ab_pray.webp';
import ab_brief from '../assets/AboutIslam/About/ab_brief.webp';
import ab_zekah from '../assets/AboutIslam/About/ab_zekah.webp';
import fasting from '../assets/AboutIslam/About/fasting.png';
import haj from '../assets/AboutIslam/About/haj.jpg';
import { Link } from "react-router-dom";

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
                            <h2 className="tm-text-color-primary mb-4">To pronounce Kalimah Al-Shahâdah</h2>
                            <br />
                            <p>To pronounce Kalimah Al-Shahâdah, the first essential article of Islâm, reads as follows: ُ اَشْهَدُ اَنْ لَّآ اِلٰهَ اِلَّا اللهُ وَحْدَہٗ لَاشَرِيْكَ لَہٗ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهٗ وَرَسُولُہٗ Ash-hadu an lâ ilâha illallâh, wa ash-hadu anna Muhammadan ‘abduhû wa Rasûluhû”. Translation: I bear witness that there is none worthy of worship except Allâh and I bear witness that Muhammad صلى الله عليه وسلم is His servant and prophet.</p>
                            <Link to="/BriefIntroduction" className="btn btn-primary float-lg-right tm-md-align-center">Brief Introduction</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary">
                        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                            <img src={ab_brief} alt="Image" />
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
                        <h2 className="tm-text-color-primary mb-4">To perform Salâh</h2>
                        <br />
                        <p>Salah, also called namaz, is the second pillar of Islam and a daily obligation upon all Muslims above baligh (mature) age. Salah plays a fundamental role in the Islamic faith and in this guide, we will explore the most important facets of the second pillar of Islam, including the meaning of salah, when you should be performing salah and what benefits salah can provide.</p>
                        <Link to="/PrayerIslam" className="btn btn-primary float-lg-right tm-md-align-center">Salah</Link>
                    </div>
                </div>
            </section>

            <section className="row tm-section tm-col-md-reverse">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <div className="tm-md-flex-center">
                            <h2 className="tm-text-color-primary mb-4">Fasting</h2>
                            <p className="mb-4">Ramadan (Arabic: رَمَضَان, romanized: Ramaḍān [ra.ma.dˤaːn]; also spelled Ramazan, Ramzan, Ramadhan or Ramathan) is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month of fasting (sawm), prayer, reflection and community. A commemoration of Muhammad's first revelation, the annual observance of Ramadan is regarded as one of the Five Pillars of Islam and lasts twenty-nine to thirty days, from one sighting of the crescent moon to the next.</p>
                            <Link to="/FastingRamadan" className="btn btn-primary float-lg-right tm-md-align-center">Fasting</Link>

                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary">
                        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                            <img src={fasting} alt="Image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="row tm-section">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h">
                        <img src={ab_zekah} alt="Image" />

                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <h2 className="tm-text-color-primary mb-4">Zekah</h2>
                        <p>At the core of Islam is the duty to look after the poor and needy. Zakah is a compulsory act or worship, the giving of a portion of one's wealth to those in the greatest need. It can only be spent on those mentioned in the above verse of the Qur'an; it cannot, for example, be used for other virtuous causes, such as building mosques.</p>
                        <br />
                        <Link to="/ZekahCharity" className="btn btn-primary float-lg-right tm-md-align-center">Zekah</Link>
                    </div>
                </div>
            </section>

            <section className="row tm-section tm-col-md-reverse">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="tm-flex-center p-5">
                        <div className="tm-md-flex-center">
                            <h2 className="tm-text-color-primary mb-4">To Go For Hajj</h2>
                            <p className="mb-4">the greater Muslim pilgrimage to Mecca, which takes place in the last month of the year and which all Muslims are expected to make at least once during their lifetime if they can afford to do so. It is one of the Five Pillars of Islam</p>
                            <Link to="/HajjUmrah" className="btn btn-primary float-lg-right tm-md-align-center">Hajj</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="tm-flex-center p-5 tm-bg-color-primary">
                        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
                            <img src={haj} alt="Image" />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default PrayerIslam;