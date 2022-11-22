import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-titel">Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email 📧"
              id=""
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              placeholder="Enter Your Password 🔒"
              id=""
            />
          </div>

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
