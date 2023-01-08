import { Layout } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

const { Header } = Layout;

export const HeaderComp = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <Header style={{
                height: "80px",
                // backgroundColor: "rgb(70, 130, 180)",
                // color: "white",
                // display: "flex",
                // justifyContent: "center"
            }}>
                <nav className="navbar">
                    <div className="nav-container">
                        <p className="nav-logo">
                            Suleymaniye {"   "}   
                            <i className="fas fa-mosque"></i>
                        </p>

                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <p
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Home
                                </p>
                            </li>
                            <li className="nav-item">
                                <p
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    About
                                </p>
                            </li>
                            <li className="nav-item">
                                <p
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Blog
                                </p>
                            </li>
                            <li className="nav-item">
                                <p
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Contact Us
                                </p>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </div>
                </nav>
            </Header>
        </>
    );
}