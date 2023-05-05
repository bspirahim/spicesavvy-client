import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebse.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = null;

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser,
        signinUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;