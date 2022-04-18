import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/camera.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <div className='d-flex  justify-content-center bg-success'>
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className='me-auto'>
                            <Nav.Link href="home#services" className='text-white'>Services</Nav.Link>
                            <Nav.Link as={Link} to="about" className='text-white'>About</Nav.Link>
                            <Nav.Link as={Link} to="blogs" className='text-white'>Blogs</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link className='text-white' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;