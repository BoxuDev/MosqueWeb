import React from 'react';
import { Container } from 'react-bootstrap';
import img from "../assets/AboutIslam/brief_info.webp";
import { Link } from "react-router-dom";

const BriefIntroduction = () => {
    return (
        <section>
            <div style={{ marginBottom: "30px" }}>
                <div style={{
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={img} style={{ width: "1920px", borderRadius: "16px" }} />
                </div>
                <Container>
                    <div style={{
                        fontSize: "24px",
                        marginBottom: "16px",
                        marginTop: "20px",
                        borderRadius: "12px",
                        height: "32px",
                        backgroundColor: "gray",
                        padding: "30px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}>
                        <Link to="/AboutIslam">About Islam&nbsp;&nbsp;&nbsp;</Link>{">"}
                        <span>&nbsp;&nbsp;&nbsp;Brief Introduction</span>
                    </div>
                    <div style={{
                        borderRadius: "12px",
                        backgroundColor: "gray",
                        padding: "16px",
                        textAlign: "justify",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }}>
                        <h1 style={{}}>Islam</h1>
                        <p>The only and true religion that has been revealed and sent to all prophets is Islam. In the 19th Ayah of Sûrah Âli-Imrân, Allâh Ta'âlâ says: “Verily, the only true religion in the sight of Allâh is Islam.”​</p>
                        <p>Islam was first revealed to Âdam (alayhis salâm) and all the prophets one after the other, and finally, it was revealed to our Prophet Muhammad Mustafâ (sallallâhu alayhi wa sallam) to reach perfection.</p>
                        <p>Our Nabî, Muhammad (sallallâhu alayhi wa sallam) was sent as a prophet to the entire mankind and the Jinn to convey this true religion. For this reason, he is the last prophet, and his Shari‘ah (religion) is the final Shari‘ah.</p>
                        <p>The points which all the prophets commonly conveyed are as follows:</p>
                        <p>Allâh Ta‘âlâ is one. He is described with perfect attributes and free from all faults and defects.</p>
                        <p>Offering Ibâdahs (acts of worship) to Allâh Ta‘âlâ with Ikhlâs (sincerity), and striving to attain closeness to His Rahmah (mercy) through righteous deeds.</p>
                        <p>Believing that Allâh Ta‘âlâ’s angels, His prophets, scriptures that He revealed to His prophets, Qadar and Qadhâ (The Divine Decree and Will), the Day of Qiyâmah, resurrection, Jannah, Jahannam, and other facts about the Hereafter are all Haqq (true).</p>
                        <p>Obeying the commands and prohibitions of Allâh, Believing that obedience to the prophets, Kalimah Shahâdah, Salâh, fasting, Hajj and Zakât are Fard and they need to be practised.</p>
                        <p>Reciting the Book of Allâh, seeking closeness to Him through Du‘âs (supplication), Dhikr (remembrance of Allâh) and other Nâfilah (supererogatory) Ibâdahs.</p>
                        <p>Abstaining from bad Akhlâq (character), and adorning oneself with good Akhlâq. Knowing that Nikâh (wedlock) is Halal (lawful) and Zinâ (adultery) is Haram (prohibited) and acting accordingly.</p>
                        <p>Knowing that Nikâh (wedlock) is Halal (lawful) and Zinâ (adultery) is Haram (prohibited) and acting accordingly. Enjoining people with justice, generosity, Sidq (truthfulness), Istiqâmah (steadfastness), loyalty and fulfilment of trust. Forbidding lies, abusing people and violating their rights.</p>
                        <p>‘Îlâ al-Kalimatullâh: Striving to spread the Exalted Speech of Allâh and the Sunnah of His Prophet (sallallâhu alayhi wa sallam). Islâm is to obey Allâh تعالــى by acknowledging the messages communicated by Rasûlullâh, the Prophet of Allâh صلى الله عليه وسلم with the tongue and confirming them in the heart.</p>
                        <div>
                            <p>The essential articles of Islâm are fıve. In other words, Islâm is based upon five pillars:</p>
                            <li>To pronounce Kalimah Al-Shahâdah, the first essential article of Islâm, reads as follows: ُ ه ُ ُ ول َس َر و ُ ه ُ ْد ب َ ً ا ع َّ د َ م ح ُ ن م َّ َ ُ ا َد اَ ْشه َ و ُ ل ّٰ الل َّ ِ ا َ ٰله ِ َ ْن ٰ ل ا ُ ا َد َ ْشه ا “Ash-hadu an lâ ilâha illallâh, wa ash-hadu anna Muhammadan ‘abduhû wa Rasûluhû”. Translation: I bear witness that there is none worthy of worship except Allâh and I bear witness that Muhammad صلى الله عليه وسلم is His servant and prophet.</li>
                            <li>To perform Salâh,</li>
                            <li> To give Zakâh,</li>
                            <li>To fast in the month of Ramadhân,</li>
                            <li>To go for Hajj. One who fulfills the conditions of Islâm is called a Mu’min or Muslim. Whoever denies any one of these articles goes out of the fold of Islâm.</li>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default BriefIntroduction;