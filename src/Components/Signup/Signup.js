import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()


    const [createUserWithEmailAndPassword, user]  = useCreateUserWithEmailAndPassword(auth)

    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }

    const handelPasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handelCpassword = e => {
        setConfirmpass(e.target.value)
    }
    
    // jodi user agei account take tahole onno jaygay chole jabe
    if(user){
        navigate('/shop')
    }
    
    const handelCreateUser = e => {
        e.preventDefault()
        if(password !== confirmpass){
            setError("You two password did't Match")
            return;
        }
        if(password < 6) {
            setError("Password Must be 6 Creacters")
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-titel">Sign Up</h2>
        <form onSubmit={handelCreateUser}>

          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input onBlur={handelEmailBlur} type="email"name="email"placeholder="Enter Your Email 📧"requiredid=""/>
          </div>



          <div className="input-group"> 
          <label htmlFor="password">Password</label>
          <input onClick={handelPasswordBlur} type="password" name="" placeholder="Enter Your Password 🔒" required id="" />
          </div>




          <div className="input-group"> 
          <label htmlFor="confirm-password">Confirm Password</label>
          <input onClick={handelCpassword} type="password" name="" placeholder="Enter Your Confirm Password 🔒" required id="" />
          </div>


          <p style={{color: 'red'}}> {error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already Have a Account{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
