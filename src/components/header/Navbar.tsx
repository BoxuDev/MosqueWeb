import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function MyNavbar() {

    const donateLink: string = 'https://www.paypal.com/donate/?hosted_button_id=NF3J7FGFWSYLN';

    return (
        <Navbar bg="light" expand="lg" style={{ height: "auto" }}>
            <Container>
                <Navbar.Brand><img src="https://static.wixstatic.com/media/9be301_e949f111d61b49eea05d8aa924d41b73~mv2.png/v1/fill/w_120,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/beyaz%20yatay%20logo%20suleymaniye.png" alt="" /> Suleymaniye</Navbar.Brand>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle><MenuIcon /></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href={donateLink} style={{ textDecoration: "none" }}>Donate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;