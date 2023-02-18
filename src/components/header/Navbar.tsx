import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { Link } from "react-router-dom";

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
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to="/Home" className='navvLink' >Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Blogs" className='navvLink' >Blogs</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Abouts" className='navvLink' >About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Contacts" className='navvLink' >Contact</Link>
                        </Nav.Link>
                        <Nav.Link className='linkStyleDonate'>
                            <a href={donateLink} target="_self" rel="noopener noreferrer" className='private-link' >Donate</a>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;