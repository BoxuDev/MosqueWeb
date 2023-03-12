import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

function MyNavbar() {
    const donateLink: string = 'https://www.paypal.com/donate/?hosted_button_id=G9CAQRRMGDQGN';
    const Icon: ReactNode = <img src="https://static.wixstatic.com/media/9be301_e949f111d61b49eea05d8aa924d41b73~mv2.png/v1/fill/w_150,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/beyaz%20yatay%20logo%20suleymaniye.png" />;

    return (
        <Navbar bg="#4398c7" className='navbar-settings' expand="lg">
            <Container>
                <Navbar.Brand>{Icon}</Navbar.Brand>
                <Navbar.Toggle>
                    <MenuIcon className='navIcon' />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/EarthQuake">Earth Quake</Link></Nav.Link>
                        <Nav.Link><Link to="/Blogs">Blogs</Link></Nav.Link>
                        <Nav.Link><Link to="/Abouts">About</Link></Nav.Link>
                        <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
                        <Nav.Link><Link to="/PrayerTime">PrayerTime</Link></Nav.Link>
                        <NavDropdown title="Services">
                            <NavDropdown.Item><Link to="/Funeral">Funeral</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Merriage">Merriage</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/HelalFood">Helal Food</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/HajjUmrah">Hajj & Umrah</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Education">Education</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Donate">
                            <NavDropdown.Item href={donateLink}>Zekah</NavDropdown.Item>
                            <NavDropdown.Item href={donateLink}>Charity</NavDropdown.Item>
                            <NavDropdown.Item href={donateLink}>Iftar</NavDropdown.Item>
                            <NavDropdown.Item href={donateLink}>Sacrifice</NavDropdown.Item>
                            <NavDropdown.Item href={donateLink}>Other</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="More">
                            <NavDropdown.Item><Link to="/AboutIslam">About Islam</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/BriefIntroduction">Brief Introduction</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/PrayerIslam">Prayer Islam</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/FastingRamadan">Fasting & Ramadan</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/ZekahCharity">Zekah & Charity</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/HajjUmrah">Hajj & Umrah</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/FastingRamadan">Fasting & Ramadan</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Contact">Contact</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;