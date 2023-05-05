import React, { createContext, useContext } from 'react';
import { FaFacebookF, FaGithub, FaGofore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Form } from 'react-bootstrap';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo)

        createUser(email, password)

        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error =>{
            console.log(error)
        })
       
        
    }

    return (
        <section className ="wrapper  my-5">
        <div className ="container pb-14 pb-md-16">
            <div className ="row">
                <div className ="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
                    <div className ="card">
                        <div className ="card-body p-11 text-center">
                            <h2 className ="mb-3 text-start">Register to Sandbox</h2>
                            <p className ="lead mb-6 text-start">Registration takes less than a minute.</p>
                            <Form onSubmit={handleRegister} className ="text-start mb-3">
                            <div className ="form-floating mb-4">
                                    <input type="text" className ="form-control" placeholder="Name" name='name' id="name" />
                                    <label htmlFor="loginName">Name</label>
                                </div>
                                <div className ="form-floating mb-4">
                                    <input type="email" name='email' className ="form-control" placeholder="Email" id="email" />
                                    <label htmlFor="loginEmail">Email</label>
                                </div>
                                <div className ="form-floating password-field mb-4">
                                    <input type="password" name='password' className ="form-control" placeholder="Password" id="password" />
                                    <span className ="password-toggle"><i className ="uil uil-eye"></i></span>
                                    <label htmlFor="loginPassword">Password</label>
                                </div>
                                <div className ="form-floating mb-4">
                                    <input type="text" name='photo' className ="form-control" placeholder="Name" id="photoUrl" />
                                    <label htmlFor="loginName">Photo Url</label>
                                </div>
                                <button type='submit' className ="btn btn-primary primary-btn rounded-pill btn-login w-100 mb-2">Register</button>
                            </Form>
                            <p className ="mb-0">Already have an account? <Link to="/login" className ="hover">Login</Link></p>
                            <div className ="divider-icon my-4">or</div>
                            <nav className ="nav social justify-content-center text-center">
                                <a href="#" className ="btn btn-circle btn-sm btn-facebook-f"><FaGofore></FaGofore> </a>
                                <a href="#" className ="btn btn-circle btn-sm btn-twitter"><FaGithub></FaGithub> </a>
                                <a href="#" className ="btn btn-circle btn-sm btn-google"><FaFacebookF></FaFacebookF> </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Register;