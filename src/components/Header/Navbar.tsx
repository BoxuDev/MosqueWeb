import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function MyNavbar() {
    const Icon: ReactNode = <Link to="/"><img src={logo} width={212} alt="" /></Link>;

    return (
        <Navbar bg="#4398c7" className='navbar-settings' expand="lg">
            <Container>
                <Navbar.Brand>{Icon}</Navbar.Brand>
                <Navbar.Toggle><MenuIcon className='navIcon' /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link><Link to="/Home" >Home</Link></Nav.Link>
                        <Nav.Link><Link to="/Donate/Sadaqa" >Quick Donate</Link></Nav.Link>
                        <NavDropdown title="Services">
                            <Nav.Link><Link to="/Chaplaincy" >Chaplaincy</Link></Nav.Link>
                            <Nav.Link><Link to="/Marriage" >Marriage</Link></Nav.Link>
                            <Nav.Link><Link to="/HelalFood" >Helal Food</Link></Nav.Link>
                            <Nav.Link><Link to="/HajjUmrah" >Hajj & Umrah</Link></Nav.Link>
                            <Nav.Link><Link to="/Education" >Education</Link></Nav.Link>
                        </NavDropdown>
                        <Nav.Link><Link to="/Gallery" >Photo Gallery</Link></Nav.Link>
                        <NavDropdown title="Donate">
                            <Nav.Link><Link to="/Donate/Zakah" >Zakah</Link></Nav.Link>
                            <Nav.Link><Link to="/Donate/Sadaqa" >Sadaqa</Link></Nav.Link>
                            <Nav.Link><Link to="/Donate/Iftar" >Iftar</Link></Nav.Link>
                            <Nav.Link><Link to="/Donate/Qurbani" >Qurbani</Link></Nav.Link>
                            <Nav.Link><Link to="/Donate/Other" >Other</Link></Nav.Link>
                        </NavDropdown>
                        <Nav.Link target='_blank' rel='noopener' href='https://en.wikipedia.org/wiki/Ireland%E2%80%93Turkey_relations'>Turkish Irish Relations</Nav.Link>
                        <NavDropdown title="About Us">
                            <Nav.Link><Link to="/AboutIslam" >Islam</Link></Nav.Link>
                            <Nav.Link><Link to="/BriefIntroduction" >Brief Introduction</Link></Nav.Link>
                            <Nav.Link><Link to="/PrayerIslam" >Prayer Islam</Link></Nav.Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;