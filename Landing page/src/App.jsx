import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Create Account</h1>
        <p>Register to continue</p>

        <form>
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="gender">
            <label>
              <input type="radio" name="gender" />
              Male
            </label>

            <label>
              <input type="radio" name="gender" />
              Female
            </label>
          </div>

          <select>
            <option>Select Course</option>
            <option>B.Tech</option>
            <option>BCA</option>
            <option>MCA</option>
          </select>

          <div className="check">
            <input type="checkbox" />
            <span>I agree to Terms & Conditions</span>
          </div>

          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;