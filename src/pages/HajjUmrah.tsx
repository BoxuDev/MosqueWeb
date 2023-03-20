import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from "../assets/AboutIslam/hajj_umreh.webp";

const HajjUmrah = () => {
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
                        backgroundColor: "#008696",
                        padding: "30px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 #008696"
                    }}>
                        <Link to="/AboutIslam">About Islam&nbsp;&nbsp;&nbsp;</Link>{">"}
                        <span>&nbsp;&nbsp;&nbsp;Hajj & Umrah</span>
                    </div>
                    <div style={{
                        borderRadius: "12px",
                        backgroundColor: "aliceblue",
                        padding: "20px",
                        textAlign: "justify",
                        fontSize: "16px",
                        marginTop: "20px",
                        boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 #008696",
                        marginBottom: "20px"
                    }}>
                        <h1 style={{}}>Hajj & Umrah</h1>
                        <p>The fifth pillar of Islâm is Hajj. Hajj is to dress in Ihrâm (special garment for Hajj) in the month of Dhul-Hijjah, to make Waqaf (pause) on the day of Arafah (9th of DhulHijjah) at Arafat and to make Tawâf around the Holy Ka’bah. It is Fardh (obligatory) for all Muslims to make Hajj once in their lives, who are able to do so.</p>
                        <p>The rites of Hajj, which we learn from the pilgrimage of Prophet Muhammad (peace be upon him), commemorate some of the actions of Prophet Ibrahim (Abraham) and his family (peace be upon them).</p>
                        <p>On the first day of Hajj, the pilgrims assemble in Mina (just outside Makkah), staying in tents or in the open. The next day they all go to the plain of Arafat, where they listen to the Hajj sermon and pray together. That night, they sleep in the open in nearby Muzdalifah, before returning to Mina in the morning.</p>
                        <p>The third day of Hajj is the busiest for pilgrims: they throw small pebbles at columns of stone, symbolising the rejection of Satan and all evil; they arrange for the sacrifice of an animal, recalling Ibrahim's submission to the Will of God when he was commanded to sacrifice his son, Ismail, only for him to be reprieved at the last minute; they go to Makkah to circle the Ka'bah and walk between Safa and Marwa; and they shave or cut their hair.</p>
                        <p>After this, men can change out of the two white sheets they have been wearing into their normal clothes, then all the pilgrims stay in Mina for up to three further days.</p>
                        <p>Hajj is a unique experience. Just as the five daily prayers give a spiritual boost each day, and fasting in Ramadan gives an extra spiritual boost each year, so the Hajj can be such a profound once-in-a-lifetime spiritual experience that for the most sincere who perform it correctly, it changes them to be a better person, less absorbed in their own material needs, and more considerate of the needs of others and of the life-hereafter. It brings together before God, standing equally side by side, people from every part of the world, from every walk of life.</p>
                        <p>Pilgrimage outside the season of Hajj is called Umrah, and is only to the Ka'bah in Makkah, without many of the rites of Hajj.
                            Many pilgrims make the journey from the Ka'bah in Makkah (the holiest place in Islam) to visit the mosque of Prophet Muhammad in Madinah (the second most holy place in Islam).</p>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default HajjUmrah;