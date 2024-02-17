import React from "react";
import "../style/LeftSideBar.css";

function LeftSideBar() {
  return (
    <>
      <div className="header_left">
        <div className="left_mail_box d-flex align-items-center ">
          <i class="fa-regular fa-wallet "></i>
          <p className="m-0">Wallet</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-inbox-in"></i>
          <p className="m-0">Inbox</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-envelope"></i>
          <p className="m-0">Mail</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="bi-star"></i>
          <p className="m-0">Starred</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-bookmark"></i>
          <p className="m-0">Important</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-paper-plane"></i>
          <p className="m-0">Sent email</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-page"></i>
          <p className="m-0">Drafts</p>
        </div>
        <hr className="bottom_hr_line"></hr>

        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-trash"></i>
          <p className="m-0">Trash</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-circle-exclamation"></i>
          <p className="m-0">Spam</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-calendar-days"></i>
          <p className="m-0">Calender</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-circle-user"></i>
          <p className="m-0">Contact</p>
        </div>
        <div className="left_mail_box d-flex align-items-center">
          <i class="bi-gear"></i>
          <p className="m-0">Settings</p>
        </div>

        <div className="left_mail_box d-flex align-items-center">
          <i class="fa-light fa-square-question"></i>
          <p className="m-0">Help $ feedback</p>
        </div>
      </div>
      
    </>
  );
}

export default LeftSideBar;
