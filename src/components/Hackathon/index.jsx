import React, { Fragment, useState, useEffect } from "react";
import { Categories } from "../Home/data";
import { styles, layout } from "../../style";
import "../Home/landingPage.css";
import heroImg from "../assets/heroImg.jpg";
import jackets from "../assets/jackets.jpg";
import sneaker from "../assets/sneakers.jpg";
import logo from "../assets/hackathonLogo.svg";
import { Link } from "react-router-dom";

const backgrounds = ["#022030", "#857A7F", "#181510", "#A4673C"];
// const images = [heroImg, sneaker, hat, jackets];

export const HackathonHome = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  //       setImgIndex((prevImgIndex) => (prevImgIndex + 1) % images.length);
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }, [bgIndex]);

  return (
    <div className="bg-[#E6F1F8] w-full h-screen flex flex-col justify-between items-center py-4">
      <div className="h-full flex flex-col justify-center">
        <img src={logo} alt="" className="w-[20rem] h-[20rem]" />
      </div>

      <div>
        <Link to={"/register"}>
          <div className="bg-[#006BA4] cursor-pointer text-white text-center text-sm font-bold w-[20rem] px-20 py-3 rounded-[12px] ">
            Get started
          </div>
        </Link>

        <p className="text-black text-[12px] mt-2 w-[20rem] text-center font-[500]">
          Already have an account?<span className="text-[#006BA4]"> Login</span>
        </p>
      </div>
    </div>
  );
};
