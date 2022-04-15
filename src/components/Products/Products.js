import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user}=useFirebase();
    return (
        <div>
            <h3>This is Products</h3>
            <p>User name is {user ? user.displayName : ''}</p>
        </div>
    );
};

export default Products;