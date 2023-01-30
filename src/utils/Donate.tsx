import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Col, Row } from "antd";
import { useEffect } from "react";

function Donate() {
    return (
        <section>
            <p>
                Your contribution will help us to maintain and develop the wide range of services we offer.
                قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: كُلُّ امْرِئٍ فِي ظِلِّ صَدَقَتِهِ حَتَّى يُقْضَى بَيْنَ النَّاسِ. (الجامع الصغير)
                Rasulullah (Sallalahu Alayhi Wa Sallam) said: “Everyone will be under the shade of his Sadaqah (charity) in the Day of Qiyamah until judgments are passed among the people.” (Al-Jami’ Al-Saghir)
            </p>
            <h2>Make a donation now</h2>
            <Row>

                <Col>

                </Col>

                <Col>

                </Col>

                <Col>
                    <PayPalScriptProvider options={{
                        "client-id": "SULTANMECID",
                        components: "buttons",
                        currency: "EUR"
                    }}>
                        <ButtonWrapper currency={"EUR"} />
                    </PayPalScriptProvider>
                </Col>

            </Row>
        </section>
    );
}

const ButtonWrapper = ({ currency }: any) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);


    return (
        <PayPalButtons
            fundingSource="paypal"
            style={{ "layout": "vertical", "label": "donate" }}
            disabled={false}
            createOrder={(data: any, actions: any) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1",
                                    breakdown: {
                                        item_total: {
                                            currency_code: "EUR",
                                            value: "1",
                                        },
                                    },
                                },
                                items: [
                                    {
                                        name: "donation-example",
                                        quantity: "1",
                                        unit_amount: {
                                            currency_code: "EUR",
                                            value: "1",
                                        },
                                        category: "DONATION",
                                    },
                                ],
                            },
                        ],
                    })
                    .then((orderId: any) => {
                        // Your code here after create the donation
                        return orderId;
                    });
            }}
        />
    );
}

export default Donate;