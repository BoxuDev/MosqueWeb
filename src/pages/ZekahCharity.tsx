import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from "../assets/AboutIslam/zekah_charity.webp";

const ZekahCharity = () => {
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
                        boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 #008696",

                    }}>
                        <Link to="/AboutIslam">About Islam&nbsp;&nbsp;&nbsp;</Link>{">"}
                        <span>&nbsp;&nbsp;&nbsp;Zakah & Charity</span>
                    </div>
                    <div style={{
                        borderRadius: "12px",
                        backgroundColor: "aliceblue",
                        padding: "20px",
                        fontSize: "16px",
                        textAlign: "justify",
                        boxShadow: "0 1px 20px 0 gray, 0 1px 20px 0 #008696",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }}>
                        <h1 style={{}}>Zakah & Charity</h1>
                        <p>“The alms [Zakah] are only for the poor and the needy, and those who collect them, and those whose hearts are to be reconciled, and to free the captives and the debtors, and for the cause of Allah, and (for) the wayfarer; a duty imposed by Allah. Allah is Knower, Wise.”</p>
                        <span>The Qur'an, chapter 9, verse 60</span>
                        <p>At the core of Islam is the duty to look after the poor and needy. Zakah is a compulsory act or worship, the giving of a portion of one's wealth to those in the greatest need. It can only be spent on those mentioned in the above verse of the Qur'an; it cannot, for example, be used for other virtuous causes, such as building mosques.</p>
                        <p>The paying of Zakah is not seen as a burden, rather a blessing because it means Allah has been generous in giving us enough wealth; people below a certain level of wealth do not pay Zakah.</p>
                        <p>The Suleymaniye Mosque London can collect and distribute Zakah.</p>
                        <p>Zakah is not charity; charity (also known as Sadaqah in Islam) is the voluntary giving of one's wealth, but this so greatly recommended in Islam, and so highly rewarded, that Muslims have a very strong sense of the need to give charity. The Suleymaniye Mosque London collects charity to help deliver its services. It also hosts dozens of collections for UK charities every year, raising hundreds of thousand of pounds for charitable causes.</p>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default ZekahCharity;