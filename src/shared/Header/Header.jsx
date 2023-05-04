import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Food-Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            
                        <Link className='me-3 text-decoration-none text-black fs-5' to="/">Home</Link>
                            <Link className='me-3 text-decoration-none text-black fs-5' to="blog">Blog</Link>
                            <Link className='me-3 text-decoration-none text-black fs-5' to="about">About Us</Link>
                            
                        </Nav>
                        <Nav>
                        <Link className='me-3 text-decoration-none text-black fs-5' to="login">Login</Link><Link className='me-3 text-decoration-none text-black fs-5' to="register">Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;