import React, { Fragment } from "react";
import Logo from "./crown.svg";
import { styles } from "../../style";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div
        className={`${styles.paddingX} py-3 bg-nav flex items-center justify-between`}
      >
        <Link to={"/"}>
          <img src={Logo} alt="" className={` w-10 h-10 `} />
        </Link>

        <div className="text-white hidden sm:flex gap-5 md:text-[14px]">
          <Link to={"/sign-in"}>
            <button className=" ">Sign In</button>
          </Link>
          <Link to={"/sign-up"}>
            <button className="bg-orange py-1 px-2 rounded-[5px]">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
