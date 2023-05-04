import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#"> <img height={30} src="/public/images/logo/logo-1.png" alt="" /> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav m-auto my-2 my-lg-0 " >
                            <Link to='/' className='text-decoration-none text-dark fs-5 ms-3'>Home</Link>
                            <Link to='blog' className='text-decoration-none text-dark fs-5 ms-3'>Blog</Link>
                        </ul>
                        <div>
                            <Link><Button variant="primary">Login / Sign Up</Button></Link>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;