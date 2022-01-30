import "./SignupRight.css";

function SignupRight() {
  return (
    <>
      <div className="signupRight">
        <div className="signupRight__details">
          <input placeholder="Username" className="signupRight__username" />
          <br />
          <input
            placeholder="Email address"
            type="email"
            className="signupRight__email"
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            className="signupRight__password"
          />
          <br />
          <input
            placeholder="Confirm Password"
            type="password"
            className="signupRight__password"
          />
          <br />
          <button className="signupRight__loginbutton">Sign Up</button>
          <hr />
          <button className="signupRight__signupbutton">Log In</button>
        </div>
      </div>
    </>
  );
}

export default SignupRight;
