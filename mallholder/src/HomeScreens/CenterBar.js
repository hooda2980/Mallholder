import React from "react";
import Card from "react-bootstrap/Card";
import "../style/Centerbar.css";
import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import SliderImage from "react-zoom-slider";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";

const CenterBar = () => {
  const data = [
    {
      image: "../images/centerCard_image_one.png",
    },

    {
      image: "../images/centerCard_image_two.png",
    },
    {
      image: "../images/centerCard_image_three.png",
    },
    {
      image: "../images/centerCard_image_four.png",
    },
    {
      image: "../images/centerCard_image_five.png",
    },
  ];
  return (
    <>
      <div className="center_main_sec">
        <Card className="center_card">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/images/img_avatar2.png"
                alt="image"
                className="center_bar "
              />
              <div className="d-flex flex-column align-items-start  p-md-3 p-2 ">
                <p className="fw-bold mb-1">
                  <span>Marvin McKinney </span>changed their profile picture
                </p>
                <p className="m-0 hey_there">hey There</p>
              </div>
            </div>
            <Dropdown>
              <MenuButton className="card_three_dots">
                <i class="fa-regular fa-ellipsis-stroke-vertical "></i>
              </MenuButton>
              <Menu>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Dropdown>
          </div>
          <p className="m-0 card_top_content text-left mt-md-3">
            Some quick example text to build on the card title
          </p>

          <SliderImage data={data} width="100%" showDescription={true} />

          <hr className="bottom_hr_line"></hr>

          <div className="card_buttons d-flex  align-items-center ">
            <div className="d-flex align-items-center card_like_btn d-flex justify-content-center align-items-center">
              <i class="fa-light fa-thumbs-up"></i>
              <p className="m-0">like</p>
            </div>
            <div className="d-flex align-items-center card_like_btn d-flex justify-content-center align-items-center">
              <i class="fa-light fa-comment-dots"></i>
              <p className="m-0">Comment</p>
            </div>
            <div className="d-flex align-items-center card_like_btn d-flex justify-content-center align-items-center">
              <i class="fa-light fa-share-nodes"></i>
              <p className="m-0">Share</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CenterBar;
