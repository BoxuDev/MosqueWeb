import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png'

function MyNavbar() {
    const Icon: ReactNode = <img src={logo} width={128} />;

    return (
        <Navbar bg="#4398c7" className='navbar-settings' expand="lg">
            <Container>
                <Navbar.Brand>{Icon}</Navbar.Brand>
                <Navbar.Toggle><MenuIcon className='navIcon' /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Ramadan">Ramadan</Nav.Link>
                        {/* <Nav.Link><Link to="/PrayerTime">PrayerTime</Link></Nav.Link> */}
                        <NavDropdown title="Imam Services">
                            <NavDropdown.Item href="/Chaplaincy">Chaplaincy</NavDropdown.Item>
                            <NavDropdown.Item href="/Merriage">Marriage</NavDropdown.Item>
                            <NavDropdown.Item href="/HelalFood">Helal Food</NavDropdown.Item>
                            <NavDropdown.Item href="/HajjUmrah">Hajj & Umrah</NavDropdown.Item>
                            <NavDropdown.Item href="/Education">Education</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Donate">
                            <NavDropdown.Item href="/Donate/Zakah">Zakah</NavDropdown.Item>
                            <NavDropdown.Item href="/Donate/Sadaqa">Sadaqa</NavDropdown.Item>
                            <NavDropdown.Item href="/Donate/Iftar">Iftar</NavDropdown.Item>
                            <NavDropdown.Item href="/Donate/Qurbani">Qurbani</NavDropdown.Item>
                            <NavDropdown.Item href="/Donate/Other">Other</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About Islam">
                            <NavDropdown.Item href="/AboutIslam">Islam</NavDropdown.Item>
                            <NavDropdown.Item href="/BriefIntroduction">Brief Introduction</NavDropdown.Item>
                            <NavDropdown.Item href="/PrayerIslam">Prayer Islam</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;