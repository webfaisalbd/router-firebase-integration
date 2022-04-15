import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form >
                <input type="text" placeholder='Enter your name' name="" id="" />
                <br />
                <input type="email" placeholder='Enter your email' name="" id="" />
                <br />
                <input type="password" placeholder='Enter your password' name="" id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;