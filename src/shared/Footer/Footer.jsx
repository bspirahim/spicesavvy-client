import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-dark'>
            <Container>
                <div className='row py-5'>
                    <div className="col-12 col-md-3">
                        <h4 className='text-light'>Explore</h4>
                        <p className='text-light mb-0'>Recipe</p>
                        <p className='text-light mb-0'>Fitnase</p>
                        <p className='text-light mb-0'>Healthy Living</p>
                        <p className='text-light mb-0'>Blog</p>
                    </div>
                    <div className="col-12 col-md-6 text-center my-4">
                        <h4 className='text-light pb-2'>Join Our Mailing List</h4>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email Address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button className='text-light' variant="outline-secondary" id="button-addon2">
                                Sign Up
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="col-12 col-md-3 text-center my-4">
                        <h4 className='text-light'>Follow Us</h4>
                        <div className='text-light fs-4'>
                            <span> <FaFacebookF></FaFacebookF> </span>
                            <span> <FaTwitter></FaTwitter> </span>
                            <span> <FaInstagramSquare></FaInstagramSquare> </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;