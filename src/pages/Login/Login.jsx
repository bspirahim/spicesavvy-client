import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const {signinUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signinUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast.success('Logged in')
            form.reset()
            navigate(from, {replace : true})
        })
        .catch(error =>{
            toast.error(error.message)
        })
        
    }

    return (
        <section className ="wrapper  my-5">
            <div className ="container pb-14 pb-md-16">
                <div className ="row">
                    <div className ="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
                        <div className ="card">
                            <div className ="card-body p-11 text-center">
                                <h2 className ="mb-3 text-start">Welcome Back</h2>
                                <p className ="lead mb-6 text-start">Fill your email and password to sign in.</p>
                                <Form onSubmit={handleLogin} className ="text-start mb-3">
                                    <div className ="form-floating mb-4">
                                        <input type="email" name='email' className ="form-control" placeholder="Email" id="loginEmail" />
                                        <label htmlFor="loginEmail">Email</label>
                                    </div>
                                    <div className ="form-floating password-field mb-4">
                                        <input type="password" name='password' className ="form-control" placeholder="Password" id="loginPassword" />
                                        <span className ="password-toggle"><i className ="uil uil-eye"></i></span>
                                        <label htmlFor="loginPassword">Password</label>
                                    </div>
                                    <button className ="btn btn-primary primary-btn rounded-pill btn-login w-100 mb-2">login</button>
                                </Form>
                                <p className ="mb-0">Don't have an account? <Link to="/register" className ="hover">Register</Link></p>
                                <div className ="divider-icon my-4">or</div>
                                <SocialLogin from={from}></SocialLogin>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;