const SignUp = () => {
  return (
    <div className="container">
      <div className="sign-up-page">
        <form id="survey-form">
          <div class="form-group">
            <label id="name-label" for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="form-group">
            <label id="email-label" for="email">
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

          <div class="form-group">
            <label for="dropdown">Favourite Genres</label>
            <select
              id="dropdown"
              name="fav-genres"
              class="form-control"
              required
            >
              <option value="genre">genre</option>
            </select>
          </div>

          <div class="form-group">
            <button type="submit" id="submit" class="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
