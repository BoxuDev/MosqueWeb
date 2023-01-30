import { Layout } from 'antd';
import "./header.css";
import { Link } from "react-router-dom";

const { Header } = Layout;

export const HeaderComp = () => {
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

                        <ul className={"nav-menu active nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <p>
                                    About
                                </p>
                            </li>
                            <li className="nav-item">
                                <Link to="/Blog" style={{ textDecoration: 'none' }}>
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <p>
                                    Contact Us
                                </p>
                            </li>
                        </ul>
                        <div className="nav-icon">
                            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
                        </div>
                    </div>
                </nav>
            </Header>
        </>
    );
}