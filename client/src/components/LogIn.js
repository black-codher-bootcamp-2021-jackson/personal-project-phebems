import Nav from "./Nav";

const LogIn = () => {
  return (
    <div className="log-in-container">
      <h1>please log in</h1>
      <form id="log-in-form">
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

export default LogIn;
