import React, { useState } from "react";
import "../style/Home.css";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [color, setColor] = useState(false);


  return (
    <>
      <div className="container-fliud nav_bar">
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#">
            MallHolder
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="row w-100 d-flex justify-content-between">
              {/*left====================================================== */}

              <div className="col-lg-3 col-md-12 d-flex align-items-center menu_logo"></div>

              {/* center======================================================= */}

              <div className="col-lg-5  ">
                <ul class="navbar-nav m-lg-auto d-flex align-items-center justify-content-center">
                  <li class="nav-item active">
                    <a class="nav-link ani_border" href="#">
                      <i class="fa-light fa-list nav_bar_icon"></i>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link ani_border" href="#">
                      <i class="fa-light fa-video  nav_bar_icon"></i>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link ani_border" href="#">
                      <i class="fa-light fa-inbox-in nav_bar_icon "></i>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link ani_border" href="#">
                      <i class="bi-gear nav_bar_icon"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* right============================================================================= */}

              <div className="col-lg-4 right">
                <ul class="navbar-nav d-flex align-items-center justify-content-between ">
                  <form class="form-inline my-2 my-lg-0">
                    <li className="search_bar w-100">
                      <input
                        class="form-control mr-sm-2"
                        type="text"
                        placeholder="Search..."
                        aria-label="Search"
                        onClick={() => setColor(true)}
                      />
                      {color ? (
                        <AiOutlineSearch
                          className="search_icon"
                          style={{ color: "black" }}
                        />
                      ) : (
                        <AiOutlineSearch className="search_icon" />
                      )}
                    </li>
                  </form>
                  <li class="nav-item dropdown active">
                    <a
                      class="nav-link"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fa fa-bell">
                        <span class="badge badge-danger">17</span>
                      </i>
                    </a>
                    <li class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <li class="dropdown-divider"></li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </li>

                  <li class="nav-item dropdown  icon_dropdown active p-0">
                    <img
                      src="/images/img_avatar2.png"
                      alt="image"
                      className="avatar nav-link dropdown-toggle p-0 "
                      id="navbarDropdown "
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    />
                    <li class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li className="profile_dropdown d-flex align-items-center justify-content-around p-xl-2">
                        <img src="/images/img_avatar2.png" alt=" img" />
                        <a class="dropdown-item" href="#">
                          Rahul Sharma
                        </a>
                      </li>
                      <li class="dropdown-divider"></li>
                      <a class="dropdown-item" href="#">
                        <li className="left_mail_box d-flex align-items-center">
                        <i class="fa-regular fa-g"></i>
                          <p className="m-0">Google Account</p>
                        </li>
                      </a>
                      <li class="dropdown-divider"></li>
                      <a class="dropdown-item" href="#">
                        <li className="left_mail_box d-flex align-items-center">
                          <i class="fa-light fa-user"></i>
                          <p className="m-0">Profile Info</p>
                        </li>
                      </a>
                      <li class="dropdown-divider"></li>
                      <a class="dropdown-item" href="#">
                        <li className="left_mail_box d-flex align-items-center">
                          <i class="bi-gear"></i>
                          <p className="m-0">Settings</p>
                        </li>
                      </a>
                      <li class="dropdown-divider"></li>
                      <a class="dropdown-item" href="#">
                        <li className="left_mail_box d-flex align-items-center">
                          <i class="fa-light fa-right-from-bracket"></i>
                          <p className="m-0">Logout</p>
                        </li>
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
