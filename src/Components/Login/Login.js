import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-titel'>Login</h2>
            <form>
                 
            <div className="input-group">
                <label htmlFor="email"> Email</label>
                <input type="email" name="email" placeholder='Enter Your Email 📧' id="" />
            </div>



            <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input type="password" name="" placeholder='Enter Your Password 🔒' id="" />
            </div>

            <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>
                New To Ema-John? <Link className='form-link' to='/signup'>Create a new account</Link>
            </p>
           </div>
        </div>
    );
};

export default Login;