import React from 'react';
import { Container } from 'react-bootstrap';
import img from "../assets/AboutIslam/fasting_ramadan.webp";
import { Link } from "react-router-dom";

const FastingRamadan = () => {
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
                        <span>&nbsp;&nbsp;&nbsp;Fasting & Ramadan</span>
                    </div>
                    <div style={{
                        borderRadius: "12px",
                        backgroundColor: "gray",
                        padding: "16px",
                        textAlign: "justify",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }}>
                        <h1 style={{}}>Fasting & Ramadan</h1>
                        <p>“O you who believe! Fasting is prescribed for you, even as it was prescribed for those before you, that you may become righteous.

                            (Fast) a certain number of days; and (for) him who is sick among you, or on a journey, (the same) number of other days; and for those who can afford it there is a ransom: the feeding of a poor person – but whoever does good of his own accord, it is better for him: and that you fast is better for you if you did but know.</p>
                        <p>The month of Ramadan in which was revealed the Qur’an, a guidance for mankind, and clear proofs of the guidance, and the criterion between right and wrong). And whosoever of you is present, let him fast the month, and whosoever of you is sick or on a journey, (let him fast the same) number of other days. Allah intends for you ease, He intends not hardship for you; and (wants) that you should complete the period, and to glorify Allah for having guided you, and that perhaps you may be grateful.”</p>
                        <p>The midday prayer on Friday is special, and follows a sermon given by the Imam. It is compulsory for men to attend, but optional for women.
                            There are special prayers at other times, like on each of the two Eid mornings, when the whole family is encouraged to go to prayer.
                            Prayers more familiar to other religions are the supplications a Muslim makes to God – known as Dua. These can be your own words, or some of the beautiful supplications mentioned in the Qur'an or made by Prophet Muhammad (Peace be upon him).</p>
                        <br />
                        <span>"The Qur’an, chapter 2, verses 183–185"</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>Fasting is a virtuous act of worship, compulsory (with some exceptions) during the month of Ramadan, and optional at other times. Muslims fast by abstaining from food, drink and sexual relations from dawn to sunset.</p>
                        <p>There are many benefits to fasting, as it also requires us to make the effort to give up bad habits, such as harsh speech, and to think about the food we eat. It is a time to become more conscious of our Creator, and to try and become a better person.</p>
                        <p>In Ramadan, our sense of community increases, as does our attention to worship. Here at the Suleymaniye Mosque London, congregations increase during this month. Every day over 300 people come to the mosque to break fast together.</p>
                        <p>There is more to the month of Ramadan than fasting. There a special, optional prayers in the evening after the last of the compulsory prayers, known as Tarawih. In our mosque they last about two hours, and are led by Imams who recite the Qur’an very beautifully. Yet even though they are not compulsory, and come at the end of a long day of fasting, still thousands attend our mosque, and other mosques, every single night.</p>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default FastingRamadan;