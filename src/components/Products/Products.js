import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init'
const auth =getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h3>This is Products</h3>
            <p>User name is {user ? user.displayName : ''}</p>
        </div>
    );
};

export default Products;