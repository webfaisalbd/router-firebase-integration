import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth= getAuth(app);
 
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location= useLocation();
    const navigate =useNavigate();

    const from= location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(()=> {
            navigate(from, {replace:true } )
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'20px'}}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form >
                <input type="email" placeholder='Enter your email' name="" id="" />
                <br />
                <input type="password" placeholder='Enter your password' name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;