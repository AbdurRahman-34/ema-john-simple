import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/';

    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }

    const handelPasswordBlur = e => {
        setPassword(e.target.value)
    }

    if(user){
        navigate(from, {replace : true})
    }

    const handelUserSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-titel'>Login</h2>
            <form onSubmit={handelUserSignIn}>
                 
            <div className="input-group">
                <label htmlFor="email"> Email</label>
                <input onBlur={handelEmailBlur} type="email" name="email" placeholder='Enter Your Email 📧' id="" required/>
            </div>



            <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input onBlur={handelPasswordBlur} type="password" name="" placeholder='Enter Your Password 🔒' id="" required/>
            </div>


            <p style={{color: 'red'}}>{error?.message}</p>
            {
                loading && <p>Lodding .....</p>
            }
            <input onSubmit={handelUserSignIn} className='form-submit' type="submit" value="Login" />
            </form>
            <p>
                New To Ema-John? <Link className='form-link' to='/signup'>Create a new account</Link>
            </p>
           </div>
        </div>
    );
};

export default Login;