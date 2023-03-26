import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from "../assets/Files/imsak.jpg"

const Ramadan = () => {
    return (
        <>
            <Container>
                <Container className="cont-another" style={{ marginBottom: "50px" }}>
                    <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                        <Col className="left">
                            <img src={img} alt="" />
                        </Col>
                        <Col className="right">
                            <Container>
                                <Row>
                                    <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                                        <i>
                                            <svg
                                                height={64}
                                                width={64}
                                                id="_x32_"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                            >
                                                <style>{".st0{fill:#fff}"}</style>
                                                <path
                                                    className="st0"
                                                    d="M378.413 0H195.115L185.8 9.314 57.02 138.102l-9.314 9.314v278.69c0 47.36 38.528 85.895 85.896 85.895h244.811c47.353 0 85.881-38.535 85.881-85.895V85.896C464.294 38.528 425.766 0 378.413 0zm54.084 426.105c0 29.877-24.214 54.091-54.084 54.091H133.602c-29.884 0-54.098-24.214-54.098-54.091V160.591h83.716c24.885 0 45.077-20.178 45.077-45.07V31.804h170.116c29.87 0 54.084 24.214 54.084 54.092v340.209z"
                                                />
                                                <path
                                                    className="st0"
                                                    d="M171.947 252.785h-28.529c-5.432 0-8.686 3.533-8.686 8.825v73.754c0 6.388 4.204 10.599 10.041 10.599 5.711 0 9.914-4.21 9.914-10.599v-22.406c0-.545.279-.817.824-.817h16.436c20.095 0 32.188-12.226 32.188-29.612.001-17.658-11.953-29.744-32.188-29.744zm-1.228 42.103h-15.208c-.545 0-.824-.272-.824-.81v-23.23c0-.545.279-.816.824-.816h15.208c8.42 0 13.447 5.027 13.447 12.498.001 7.47-5.027 12.358-13.447 12.358zM250.191 252.785h-21.868c-5.432 0-8.686 3.533-8.686 8.825v74.843c0 5.3 3.253 8.693 8.686 8.693h21.868c19.69 0 31.923-6.249 36.81-21.324 1.76-5.3 2.723-11.681 2.723-24.857 0-13.175-.964-19.557-2.723-24.856-4.888-15.075-17.12-21.324-36.81-21.324zm17.665 64.111c-2.318 7.331-8.965 10.459-18.21 10.459h-9.23c-.545 0-.824-.272-.824-.816v-55.146c0-.545.279-.817.824-.817h9.23c9.245 0 15.892 3.128 18.21 10.46.95 3.128 1.62 8.56 1.62 17.93s-.671 14.802-1.62 17.93zM361.167 252.785h-44.812c-5.432 0-8.7 3.533-8.7 8.825v73.754c0 6.388 4.218 10.599 10.055 10.599 5.697 0 9.914-4.21 9.914-10.599v-26.351c0-.538.265-.81.81-.81h26.086c5.837 0 9.23-3.532 9.23-8.56 0-5.028-3.393-8.553-9.23-8.553h-26.086c-.545 0-.81-.272-.81-.817v-19.425c0-.545.265-.816.81-.816h32.733c5.572 0 9.245-3.666 9.245-8.553-.001-5.029-3.674-8.694-9.245-8.694z"
                                                />
                                            </svg>
                                        </i>
                                        <Link to="../assets/Files/imsakiye.pdf" target="_blank" style={{ fontSize: "16px" }} download>Download Imsakiye PDF</Link>
                                    </div>
                                </Row>
                                <br /><br /><br />
                                <Row>
                                    <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                                        <i>
                                            <svg
                                                height={64}
                                                width={64}
                                                id="_x32_"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                            >
                                                <style>{".st0{fill:#fff}"}</style>
                                                <path
                                                    className="st0"
                                                    d="M378.413 0H195.115L185.8 9.314 57.02 138.102l-9.314 9.314v278.69c0 47.36 38.528 85.895 85.896 85.895h244.811c47.353 0 85.881-38.535 85.881-85.895V85.896C464.294 38.528 425.766 0 378.413 0zm54.084 426.105c0 29.877-24.214 54.091-54.084 54.091H133.602c-29.884 0-54.098-24.214-54.098-54.091V160.591h83.716c24.885 0 45.077-20.178 45.077-45.07V31.804h170.116c29.87 0 54.084 24.214 54.084 54.092v340.209z"
                                                />
                                                <path
                                                    className="st0"
                                                    d="M165.287 252.785h-28.515c-5.432 0-8.7 3.533-8.7 8.825v73.754c0 6.388 4.218 10.599 10.055 10.599 5.697 0 9.914-4.21 9.914-10.599v-22.406c0-.545.265-.817.81-.817h16.436c20.109 0 32.188-12.226 32.188-29.612 0-17.658-11.954-29.744-32.188-29.744zm-1.215 42.103h-15.221c-.545 0-.81-.272-.81-.81v-23.23c0-.545.265-.816.81-.816h15.221c8.42 0 13.448 5.027 13.448 12.498-.001 7.47-5.028 12.358-13.448 12.358zM275.187 251.968c-5.432 0-9.104 3.532-9.104 9.642v50.531h-.545l-28.25-50.39c-3.658-6.389-7.471-9.782-13.168-9.782-6.801 0-11.144 4.622-11.144 11.954v72.398c0 6.109 3.673 9.643 9.105 9.643s9.09-3.534 9.09-9.643v-50.398h.545l28.25 50.258c3.673 6.382 7.471 9.782 13.182 9.782 6.787 0 11.144-4.622 11.144-11.954V261.61c0-6.11-3.673-9.642-9.105-9.642zM366.878 293.806h-19.019c-5.153 0-8.421 3.121-8.421 7.876 0 4.755 3.268 7.876 8.421 7.876h6.256c.544 0 .809.272.809.816 0 3.533-.265 6.654-1.089 9.098-1.899 5.844-7.736 9.51-14.802 9.51-8.016 0-13.043-3.938-15.068-10.187-1.09-3.393-1.494-7.876-1.494-19.83 0-11.953.405-16.296 1.494-19.696 2.025-6.382 6.926-10.32 14.802-10.32 5.976 0 10.459 1.899 13.992 6.786 2.709 3.805 5.432 4.895 8.826 4.895 5.027 0 9.091-3.666 9.091-8.965 0-2.171-.671-4.078-1.76-5.977-4.888-8.287-15.208-14.397-30.149-14.397-16.437 0-29.2 7.471-33.962 22.412-2.039 6.515-2.584 11.682-2.584 25.262 0 13.581.545 18.74 2.584 25.262 4.762 14.942 17.525 22.413 33.962 22.413 16.436 0 28.92-8.288 33.682-23.09 1.634-5.16 2.304-12.77 2.304-20.919v-.95c.001-5.027-2.848-7.875-7.875-7.875z"
                                                />
                                            </svg>
                                        </i>
                                        <Link to="..\assets\Files\imsakiye.pdf" target="_blank" download>Download Imsakiye JPG | For Mobile</Link>
                                    </div>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>




        </>
    );
}

export default Ramadan;