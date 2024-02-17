import React, { useState } from "react";
import "../style/LoginScreeen.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginScreeen = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="container-fluid  ">
        <div className="row main_login d-flex justify-content-center align-items-center">
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <div className="login_content">
              <h4>
                <span style={{ color: "#007bff",fontWeight:"bold"  }}>Mallholder</span> is the
                distributor or retailer as retailer as well as the advertising
                agency
              </h4>
            </div>
          </div>
          <div className="col-md-6 d-flex  align-items-center">
            <div class="login_form">
              <div class="card">
                <h4>Login Form</h4>
                <form>
                  <label for="email">Email address*</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <label for="password">Password*</label>
                  <div className="pass_visible">
                    <input
                     type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                    />
                    <div className="password_toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                  <button type="submit" className="login_btn">
                    Login
                  </button>
                  <p className="m-0 mt-md-3">
                    Don’t have an account?{" "}
                    <span>
                     <Link to="/signup">Sign Up</Link>
                    </span>
                  </p>
                </form>
                <p className="text-center mt-md-2 mb-md-2 fw-bolder">
                  continue with social media
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="social_media d-flex justify-content-between align-items-center">
                    <div className="google d-flex justify-content-around align-items-center">
                      <FcGoogle className="icon" />
                      <p className="m-0">Google</p>
                    </div>
                    <div className="google d-flex justify-content-around align-items-center ">
                      <FaFacebookF className="icon" />
                      <p className="m-0">Facebook</p>
                    </div>
                  </div>
                </div>
                <div class="switch">
                  <a href="#">Forget password</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreeen;
