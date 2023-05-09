import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOut = () =>{
        signOutUser()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    console.log(user?.email)
    return (
        <div>

            <nav className ="navbar navbar-expand-lg">
                <div className ="container">
                    <a className ="navbar-brand" href="#"> <img height={30} src="/images/logo/logo-1.png" alt="" /> </a>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarScroll">
                        <ul className ="navbar-nav m-auto my-2 my-lg-0 " >
                            <Link to='/' className='text-decoration-none text-dark fs-5 ms-3'>Home</Link>
                            <Link to='blog' className='text-decoration-none text-dark fs-5 ms-3'>Blog</Link>
                        </ul>
                        <div className='d-flex align-items-center'>
                         <p>{user?.email}</p>
                             { user ?(<button onClick={handleSignOut} className='primary-btn'>logout</button>)
                             : 
                             (<Link to='login'><Button className='primary-btn'>login</Button></Link>) }
                             
                             
                           
                            
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;