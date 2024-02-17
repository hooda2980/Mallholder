import React from "react";
import Navbar from "../HomeScreens/Navbar";
import RightSidebar from "../HomeScreens/RightSidebar";
import LeftSideBar from "../HomeScreens/LeftSideBar";
import CenterBar from "../HomeScreens/CenterBar";
function HomeMain() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 p-0 ">
            <LeftSideBar />
          </div>
          
          <div className="col-lg-7">
            <CenterBar />
            <CenterBar />
          </div>
          <div className="col-lg-3 rightbar_main ">
            <RightSidebar />
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
