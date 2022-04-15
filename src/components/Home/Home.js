import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth= getAuth(app);


const Home = () => {
    const [user]= useAuthState(auth);
    return (
        <div>
            <h2>This is home</h2>
            <p>current user is {user ? user.displayName : ''}</p>
        </div>
    );
};

export default Home;