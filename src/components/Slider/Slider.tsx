import React, { useEffect, useState } from "react";
import { Button, Carousel, Row } from "antd";
import { Container } from "react-bootstrap";
import "./Slider.css";
import marr from "../../assets/Files/marr.jpg";
import croke from "../../assets/Slider/croke.jpeg";
import dscie from "../../assets/Slider/dscie.webp";
import prisoner from "../../assets/Files/prisoner.jpeg";
import otto from "../../assets/Slider/otto-human.jpg";
import { getSliderData } from "../../firebase";

export const Slider = () => {
    const [sliders, setSliders] = useState<any>();

    useEffect(() => {
        const getSliders = async () => {
            const data = await getSliderData();
            setSliders(data);
        };
        getSliders();
    }, []);

    const isValidUrl = (string: string) => {
        try {
            new URL(string);
            return true;
        } catch (e) {
            return false;
        }
    }

    return (
        <Container>
            <Carousel
                //autoplay
                //autoplaySpeed={3000}
                arrows
                draggable
                className="cont"
                effect="scrollx"
            >
                {sliders &&
                    sliders.map((slider: any) => (
                        <>
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${slider.background})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: "500px",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        borderRadius: "18px",
                                    }}
                                >
                                    <br />
                                    <Row
                                        style={{
                                            color: "#136833",
                                            fontSize: "36px",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            backgroundColor: "white",
                                            marginLeft: "12px",
                                            padding: "16px",
                                            marginTop: "36px",
                                            fontFamily:
                                                "helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif",
                                            fontWeight: "700",
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {slider.title}
                                    </Row>
                                    <Row
                                        style={{
                                            fontSize: "16px",
                                            marginTop: "20px",
                                            fontWeight: "550",
                                            backgroundColor: "#136833",
                                            padding: "8px",
                                            color: "white",
                                        }}
                                    >
                                        {slider.info}
                                    </Row>
                                    <br />
                                    <br />
                                    <a
                                        style={{
                                            marginTop: "10px",
                                            backgroundColor: "#136833",
                                            border: "1px solid green",
                                            borderRadius: "16px",
                                            height: "50px",
                                            width: "250px",
                                            fontWeight: "600",
                                            fontSize: "16px",
                                            color: "white",
                                            display: "flex",
                                            placeContent: "center",
                                            alignItems: "center"
                                        }}
                                        href={isValidUrl(slider.link) ? slider.link : "Not valid URL"}
                                    >
                                        {slider.bname === "" ? "Go to page" : slider.bname}
                                    </a>
                                </div>
                            </div>
                        </>
                    ))}
                <div>
                    <div
                        style={{ backgroundImage: `url(${otto})` }}
                        className="slider-content-main"
                    >
                        <Row
                            className="row-title"
                            style={{ backgroundColor: "white", padding: "8px" }}
                        >
                            Turkish Irısh Relations
                        </Row>
                        <Row>
                            <Button
                                style={{
                                    marginTop: "10px",
                                    backgroundColor: "#136833",
                                    border: "1px solid green",
                                    borderRadius: "16px",
                                    height: "50px",
                                    width: "250px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    color: "white",
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://en.m.wikipedia.org/wiki/Ireland–Turkey_relations",
                                        "_blank"
                                    )
                                }
                            >
                                Go Wiki
                            </Button>
                        </Row>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage: `url(${prisoner})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            height: "500px",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            flexDirection: "column",
                            borderRadius: "18px",
                        }}
                    >
                        <br />
                        <Row
                            style={{
                                color: "#136833",
                                fontSize: "36px",
                                display: "flex",
                                justifyContent: "flex-start",
                                backgroundColor: "white",
                                marginLeft: "12px",
                                padding: "16px",
                                marginTop: "36px",
                                fontFamily:
                                    "helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif",
                                fontWeight: "700",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Chaplaincy
                        </Row>
                        <Row
                            style={{
                                fontSize: "16px",
                                marginTop: "20px",
                                fontWeight: "550",
                                backgroundColor: "#136833",
                                padding: "8px",
                                color: "white",
                            }}
                        >
                            We provide Imam for religious ceremonies, patients at hospitals,
                            or prison etc…
                        </Row>
                        <br />
                        <br />
                        <Button className="callBtn">
                            +353 (87) 406 6894
                            <i>
                                <svg
                                    data-bbox="-0.001 -0.824 512.001 513.653"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    viewBox="0 0 512 512"
                                    height="20"
                                    data-type="shape"
                                >
                                    <g>
                                        <path d="M114.1 133.956a16 16 0 0 0 14.5 9.231h77.8v27.481a16 16 0 0 0 32 0v-27.481h7.37a16 16 0 1 0 0-32h-7.37V15.172A16 16 0 0 0 210.136 4.9L116.33 116.915a16 16 0 0 0-2.23 17.041zM206.4 59.2v51.989h-43.535zm80.97 339.867L371.192 268.2h-61.718a16 16 0 0 1 0-32h90.967a16 16 0 0 1 13.473 24.63l-99.6 155.5a16 16 0 1 1-26.946-17.26zm83.76-294.007a16 16 0 0 1 0 22.627L135.272 363.546a16 16 0 0 1-22.627-22.627L348.5 105.06a16 16 0 0 1 22.63 0zM90.5 71.538c4.05-14.83 1.483-26-7.629-33.215-10.2-8.07-27.183-9.5-38.664-3.246-8.722 4.75-12.587 12.957-11.487 24.4A16 16 0 1 1 .865 62.536C-1.476 38.2 8.743 17.951 28.9 6.974c22.625-12.32 53.672-9.69 73.824 6.254 19.268 15.245 26.062 39.571 18.642 66.74-5.008 18.338-22.15 31.714-42 47.205-10.716 8.362-22.274 17.381-31.965 27.5h66.279a16 16 0 0 1 0 32H16.335a16 16 0 0 1-14.4-22.985c13.025-26.844 36.781-45.382 57.74-61.738C73.746 90.969 88.29 79.619 90.5 71.538zM512 256.828a256 256 0 0 1-437.02 181.02A254.327 254.327 0 0 1 0 256.828a16 16 0 0 1 32 0c0 123.514 100.486 224 224 224s224-100.486 224-224c0-112.136-83.714-207.617-194.726-222.1A16 16 0 1 1 289.414 3 256.04 256.04 0 0 1 512 256.828z"></path>
                                    </g>
                                </svg>
                            </i>
                        </Button>
                    </div>
                </div>
                <div>
                    <div
                        style={{ backgroundImage: `url(${croke})` }}
                        className="slider-content-main"
                    >
                        <Row
                            className="row-title"
                            style={{
                                backgroundColor: "#136833",
                                padding: "8px",
                                color: "white",
                            }}
                        >
                            Croke Park Muslim Eid
                        </Row>
                        <Row>
                            <Button
                                style={{
                                    marginTop: "10px",
                                    backgroundColor: "#136833",
                                    border: "1px solid green",
                                    borderRadius: "16px",
                                    height: "50px",
                                    width: "250px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    color: "white",
                                }}
                                onClick={() =>
                                    window.open(
                                        "https://www.irishtimes.com/ireland/2022/07/09/eid-celebrations-at-croke-park-we-can-celebrate-our-irish-muslim-identity-in-the-most-iconic-irish-venue/",
                                        "_blank"
                                    )
                                }
                            >
                                Go News
                            </Button>
                        </Row>
                    </div>
                </div>
                <div>
                    <div
                        style={{ backgroundImage: `url(${dscie})` }}
                        className="slider-content-main"
                    >
                        <Row
                            className="row-title"
                            style={{
                                backgroundColor: "#136833",
                                padding: "8px",
                                color: "white",
                            }}
                        >
                            Discover Ireland
                        </Row>
                        <Row>
                            <Button
                                style={{
                                    marginTop: "10px",
                                    backgroundColor: "#136833",
                                    border: "1px solid green",
                                    borderRadius: "16px",
                                    height: "50px",
                                    width: "250px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    color: "white",
                                }}
                                onClick={() =>
                                    window.open("https://www.discoverireland.ie/", "_blank")
                                }
                            >
                                Discover Ireland
                            </Button>
                        </Row>
                    </div>
                </div>
                <div>
                    <div
                        style={{ backgroundImage: `url(${marr})` }}
                        className="slider-content-main"
                    >
                        <Row className="row-title">Islamic Marriage</Row>
                        <Row className="row-content-main">
                            For details of the Nikah process at the Sultan Mecid Masjid,
                            Dublin, including how to apply. +353 (87) 406 6894.
                        </Row>
                    </div>
                </div>
            </Carousel>
        </Container>
    );
};

export default Slider;
