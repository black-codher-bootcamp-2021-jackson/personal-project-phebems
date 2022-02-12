const SignUp = () => {
    return (
        <div className="container">
            <form id="survey-form">
    <div class="form-group">
      <label id="name-label" for="name">Name</label>
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
      <label id="email-label" for="email">Email</label>
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
      <label id="number-label"
for="age">Age<span class="clue"> (optional)</span></label>
      <input
             type="number"
             name="age"
             id="number"
             min="7"
             max="120"
             class="form-control"
             placeholder="Age"
             />
  </div>
  
  <div class="form-group">
    <label for="dropdown">Where do you live?</label>
    <select id="dropdown"
            name="country" class="form-control" required>
      <option value="europe">Europe</option>
      <option value="africa">Africa</option>
      <option value="asia">Asia</option>
      <option value="america">America</option>
      <option value="oceania">Oceania</option>
      </select>
  </div>
    
    
    <div class="form-group">
      <p>How often do you listen to music daily?</p>
      
      <input
          name="music-hours"
          value="never"
          type="radio"
          class="input-radio"/><label>Never</label>
      <br/>
      <input
          name="music-hours"
          value="less-hour"
          type="radio"
          class="input-radio"/><label>Less than 1 hour</label>
      <br/>
      <input
          name="music-hours"
          value="two-three"
          type="radio"
          class="input-radio"/><label>1 - 3 hours</label>
      <br/>
      <input
          name="music-hours"
          value="three-five"
          type="radio"
          class="input-radio"/><label>3 - 5 hours</label>
      <br/>
      <input
          name="music-hours"
          value="five-plus"
          type="radio"
          class="input-radio"/><label>More than 5 hours</label>
    </div>
  
  <div class="form-group">
    <p>Which streaming platform(s) do you use to listen to music?</p>
  <input 
           name="platform"
           value="none"
           type="checkbox"
           class="input-checkbox"/><label>None</label>
    <br/>
    <input 
           name="platform"
           value="spotify"
           type="checkbox"
           class="input-checkbox"/><label>Spotify</label>
  <br/>
  <input 
         name="platform"
         value="soundcloud"
         type="checkbox"
         class="input-checkbox"/><label>Soundcloud</label>
    <br/>
  <input 
         name="platform"
         value="apple-music"
         type="checkbox"
         class="input-checkbox"/><label>Apple Music</label>
    <br/>
  <input 
           name="platform"
           value="youtube"
           type="checkbox"
           class="input-checkbox"/><label>YouTube</label>
    <br/>
  <input 
           name="platform"
           value="other"
           type="checkbox"
           class="input-checkbox"/><label>Other</label>
  </div>
  <div class="form-group">
    <p>Who is your favourite artist and why?</p>
    <textarea
        id="comments"
        class="input-textarea"
        name="comment"
        placeholder="Enter your comment"></textarea>
  </div>
  
  <div class="form-group">
    <button type="submit" id="submit" class="submit-button">
        Submit
      </button>
      </div>
  
    
    
  </form>
        </div>
    );
}
 
export default SignUp