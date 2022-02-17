import React, { useState } from "react";
import { userSignUp } from "../services/userService";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [genres, setGenres] = useState();

  async function registerUser(e) {
    e.preventDefault();
    const response = await userSignUp({
      name,
      email,
      password,
      genres,
    });

    const data = await response;
    console.log(data);
  }

  return (
    <div className="sign-up-page">
      <form id="sign-up-form" onSubmit={registerUser}>
        <div className="form-group">
          <label id="name-label" htmlFor="name">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label id="email-label" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label id="password-label" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter a password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropdown">Favourite Genres</label>
          <select
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            id="dropdown"
            name="genres"
            className="form-control"
            required
          >
            <option value="genre">genre</option>
          </select>
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

export default SignUp;
