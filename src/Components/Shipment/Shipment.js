import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    // const navigate = useNavigate()

    const handelNamelBlur = (e) => {
        setName(e.target.value)
    }

    const handelAddressBlur = e => {
        setAddress(e.target.value)
    }

    const handelPhBlue = e => {
        setPhone(e.target.value)
    }
    const handelCreateUser = e => {
        e.preventDefault()
        const shipping = {name, email, address, phone}
        console.log(shipping)
    }
    return (
        <div className="form-container">
        <div>
          <h2 className="form-titel">Shipping Information</h2>
          <form onSubmit={handelCreateUser}>
  
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input onBlur={handelNamelBlur} type="text"name="name"placeholder="Enter Your Name"requiredid=""/>
            </div>
  

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input value={user?.email} readOnly type="email" name="email"placeholder="Enter Your Email"requiredid=""/>
            </div>
  
  
  
            <div className="input-group"> 
            <label htmlFor="password">Your Address</label>
            <input onClick={handelAddressBlur} type="text" name="address" placeholder="Enter Your Password" required id="" />
            </div>
  

  
            <div className="input-group"> 
            <label htmlFor="phone">Your Phone Number</label>
            <input onClick={handelPhBlue} type="number" name="phone" placeholder="Enter Your Phone Number" required id="" />
            </div>
  
  
            <p style={{color: 'red'}}> {error}</p>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </form>
        </div>
      </div>
    );
};

export default Shipment;