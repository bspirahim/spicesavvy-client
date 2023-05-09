import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGofore } from 'react-icons/fa';
import app from '../../firebase/firebse.config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = ({ from }) => {
    const auth = getAuth(app)
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Logged in')
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const githubProvider = new GithubAuthProvider()
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Logged in')
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div>
            <nav className="nav social justify-content-center text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-lg"><FaGofore></FaGofore> </button>
                <button onClick={handleGithubLogin} className="btn btn-circle btn-lg "><FaGithub></FaGithub> </button>

            </nav>
        </div>
    );
};

export default SocialLogin;