import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/camera.png'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className='me-auto'>
                            <Nav.Link href="home#services" className='text-white'>Services</Nav.Link>
                            <Nav.Link as={Link} to="about" className='text-white'>About</Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link as={Link} to="login" className='text-white'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;