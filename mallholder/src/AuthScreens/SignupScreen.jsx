import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../style/Singupform.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  const navgate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="container-fluid main_singUp_form ">
        <div className="row main_login d-flex justify-content-center align-items-center">
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <div className="login_content">
              <h4>
                <span style={{ color: "#007bff", fontWeight: "bold" }}>
                  Mallholder
                </span>{" "}
                is the distributor or retailer as retailer as well as the
                advertising agency
              </h4>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div class="singup_form">
              <div class="card">
                <h4>Sing Up</h4>
                <form>
                  <label for="email">Email Address*</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <label for="name">Name*</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                  <label for="username">User Name*</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your name"
                  />
                  <label for="password">Password*</label>
                  <div className="pass_visible">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                    />
                    <div
                      className="password_toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>

                  <button type="submit" className="login_btn">
                    Sing up
                  </button>
                  <Link to="/login" className="mt-md-2">
                    Already have an account
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupScreen;
