import LoginLeft from "../../Components/Login/LoginLeft";
import SignupRight from "../../Components/Signup/SignupRight";
import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="signup__left col-md-12 col-lg-7">
              <LoginLeft />
            </div>
            <div className="signup__right col-md-12 col-lg-5">
              <SignupRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
