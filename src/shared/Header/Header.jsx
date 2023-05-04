import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='fs-4'>Food-Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">

                            <Link className='me-3 text-decoration-none text-light fs-5' to="/">Home</Link>
                            <Link className='me-3 text-decoration-none text-light fs-5' to="blog">Blog</Link>
                            <Link className='me-3 text-decoration-none text-light fs-5' to="about">About Us</Link>

                        </Nav>
                        <Nav>
                            <Link className='me-3 text-decoration-none text-light fs-5' to="login">Login</Link><Link className='me-3 text-decoration-none text-light fs-5' to="register">Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='position-relative text-center'>
                <img className='banner w-100' src="../../../public/images/cover/cover-2.jpg" class="img-fluid" alt="Responsive image" />
                <div className='text-light position-absolute bottom-50 end-50'>
                    <p className='fs-1 fw-bold '>Nature Has Always <br /> Care For Us</p>
                    <Button variant="light">Get More</Button>
                </div>
                
            </div>
        </div>
    );
};

export default Header;