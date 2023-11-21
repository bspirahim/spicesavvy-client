import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Image, Nav, Navbar, Tooltip } from 'react-bootstrap';
import './Header.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!menu);
    const show = "collapse navbar-collapse show";
    const close = "collapse navbar-collapse";
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast('Logout success');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand"> <img height={30} src="/images/logo/logo-1.png" alt="" /> </Link>
                    <button onClick={handleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={menu ? show : close} id="navbarScroll">
                        <ul className="navbar-nav m-auto my-2 my-lg-0 " >
                            <NavLink to='/' className='text-decoration-none menu-color fs-5 ms-3'>Home</NavLink>
                            <NavLink to='blog' className='text-decoration-none fs-5 ms-3 menu-color'>Blog</NavLink>
                        </ul>
                        <div className='d-flex align-items-center'>
                            {user ?
                                <>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">{user.displayName}</Tooltip>}
                                    >

                                        {({ ref, ...triggerHandler }) => (
                                            <Image
                                                {...triggerHandler}
                                                ref={ref}
                                                roundedCircle
                                                height={40} width={40} className='mx-2'

                                                src={user.photoURL ? user.photoURL : "/images/profile.png"}
                                            />

                                        )}
                                    </OverlayTrigger>

                                    <button onClick={handleSignOut} className='primary-btn'>Logout</button>
                                </>
                                :
                                (<Link to='/login'><Button className='primary-btn'>Login</Button></Link>)}

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;