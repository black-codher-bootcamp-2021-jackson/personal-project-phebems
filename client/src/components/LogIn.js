import React, { useState } from "react";
import PropTypes from 'prop-types';
import { userLogin } from "../services/userService";

const LogIn = ({setUserToken}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    try {const token = await userLogin({
      email,
      password
    });
    setUserToken(token)} catch(err) {
      console.log(err)
    }
    
  }


  return (
    <div className="log-in-container">
      <h1>please log in</h1>
      <form id="log-in-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label id="email-label" htmlFor="email">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label id="password-label" htmlFor="password">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

LogIn.propTypes = {
  setUserToken: PropTypes.func.isRequired
}

export default LogIn;
