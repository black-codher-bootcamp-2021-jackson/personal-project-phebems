const SignUp = () => {
  return (
    <div className="sign-up-page">
      <form id="sign-up-form">
        <div classname="form-group">
          <label id="name-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
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
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropdown">Favourite Genres</label>
          <select id="dropdown" name="fav-genres" class="form-control" required>
            <option value="genre">genre</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit" id="submit" class="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
