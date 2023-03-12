import React from 'react';
import { Container } from 'react-bootstrap';
import img from "../assets/AboutIslam/prayer_islam.webp";
import { Link } from "react-router-dom";

const AboutIslam = () => {
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
                        <span>&nbsp;&nbsp;&nbsp;Prayer in Islam</span>
                    </div>
                    <div style={{
                        borderRadius: "12px",
                        backgroundColor: "gray",
                        padding: "16px",
                        textAlign: "justify",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }}>
                        <h1 style={{}}>Prayer in Islam</h1>
                        <p>Salah, the second pillar of Islam, is a form of prayer which must be performed in a prescribed manner, and at particular times. It takes the form of standing, bowing, prostrating and sitting in a given sequence, whilst reciting the words of the prayer in Arabic. Muslims must normally prayer at five specific times each day, preceded by a ritual washing known as Wudu.</p>
                        <p>People can prayer wherever is convenient, so long as it is clean. This can be at home, or where you work. For men, it is preferred they make the effort to pray in congregation at their local mosque. This is why most mosques are open for the five daily prayers – you can find out more about congregational prayers and facilities at the Suleymaniye Mosque London here.</p>
                        <p>The midday prayer on Friday is special, and follows a sermon given by the Imam. It is compulsory for men to attend, but optional for women.
                            There are special prayers at other times, like on each of the two Eid mornings, when the whole family is encouraged to go to prayer.
                            Prayers more familiar to other religions are the supplications a Muslim makes to God – known as Dua. These can be your own words, or some of the beautiful supplications mentioned in the Qur'an or made by Prophet Muhammad (Peace be upon him).</p>
                        <p>There are so many benefits in performing regular prayers. Prophet Muhammad (Peace be upon him) said, “If there was a river at your door and you took a bath in it five times a day, would you notice any dirt on you?” They said, “Not a trace of dirt would be left.” The Prophet said, “That is the parable of the five prayers by which Allah removes sins.”</p>
                        <br /><br />
                        <h1 style={{}}>Prayers</h1>
                        <p>The Suleymaniye Mosque Mosque is open every day of the year for people to use our prayer facilities, including all five daily prayers, and the special prayers for Ramadan and Eid. The prayer halls are accessible from 10am, and close about half an hour after the last prayer of the day, ‘Isha. The main prayer hall is also open for Fajr, the morning prayer.
                            Congregational prayers
                            We hold congregational prayers at specific times, which you can find in our prayer timetable. There’s a more detailed explanation of our prayer times here. These prayers typically take 10–15 minutes.</p>
                        <p>For Fajr, we open the main prayer hall half an hour before the time set for the congregational prayer, and close again about 15 minutes after the prayer finishes.</p>
                        <p>Once the halls open at 10am, they are available for the rest of the day.</p>
                        <p>On Fridays, the special Jumuah prayer (which replaces the Zuhr prayer) is preceded by a sermon (khutbah), which takes about half an hour. .
                            Facilities
                            There are separate prayer facilities for men and women: men pray in the first floor hall, and women in the second floor hall accessed through the second entrance labelled ladies entrance.</p>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default AboutIslam;