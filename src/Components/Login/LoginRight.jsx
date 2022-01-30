import "./LoginRight.css";

function LoginRight() {
  return (
    <>
      <div className="loginRight">
        <div className="loginRight__details">
          <input
            placeholder="Email address"
            type="email"
            className="loginRight__email"
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            className="loginRight__password"
          />
          <br />
          <button className="loginRight__loginbutton">Log In</button>
          <hr />
          <button className="loginRight__signupbutton">
            Create New Account
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginRight;
