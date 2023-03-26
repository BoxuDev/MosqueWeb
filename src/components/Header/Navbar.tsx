import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png'

function MyNavbar() {
    const donateLink: string = 'https://www.paypal.com/donate/?hosted_button_id=G9CAQRRMGDQGN';
    const Icon: ReactNode = <img src={logo} width={128}/>;

    return (
        <Navbar bg="#4398c7" className='navbar-settings' expand="lg">
            <Container>
                <Navbar.Brand>{Icon}</Navbar.Brand>
                <Navbar.Toggle><MenuIcon className='navIcon'/></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/Ramadan">Ramadan</Link></Nav.Link>
                        <Nav.Link><Link to="/PrayerTime">PrayerTime</Link></Nav.Link>
                        <NavDropdown title="Imam Services">
                            <NavDropdown.Item><Link to="/Chaplaincy">Chaplaincy</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Merriage">Marriage</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/HelalFood">Helal Food</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/HajjUmrah">Hajj & Umrah</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Education">Education</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Donate">
                            <NavDropdown.Item><Link to="/Donate/Zekah">Zekah</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Donate/Charity">Sadaqa</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Donate/Iftar">Iftar</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Donate/Qurbani">Qurbani</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Donate/Other">Other</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About Islam">
                            <NavDropdown.Item><Link to="/AboutIslam">Islam</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/BriefIntroduction">Brief Introduction</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/PrayerIslam">Prayer Islam</Link></NavDropdown.Item>
                            {/* <NavDropdown.Item><Link to="/ZekahCharity">Zekah & Charity</Link></NavDropdown.Item> */}
                            {/* <NavDropdown.Item><Link to="/HajjUmrah">Hajj & Umrah</Link></NavDropdown.Item> */}
                            {/* <NavDropdown.Item><Link to="/FastingRamadan">Fasting & Ramadan</Link></NavDropdown.Item> */}
                            {/* <NavDropdown.Item><Link to="/Contact">Contact</Link></NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;