import LoginLeft from "../../Components/Login/LoginLeft";
import LoginRight from "../../Components/Login/LoginRight";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="login__left col-md-12 col-lg-7">
              <LoginLeft />
            </div>
            <div className="login__right col-md-12 col-lg-5">
              <LoginRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
