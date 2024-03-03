import React, { Fragment } from "react";
import Logo from "./crown.svg";
import { styles } from "../../style";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div
        className={`${styles.paddingX} py-3 bg-nav h-full flex items-center justify-between`}
      >
        <Link to={"/"}>
          <img src={Logo} alt="" className={` w-12 h-12 `} />
        </Link>

        <div className="text-white hidden sm:flex gap-5 md:text-[14px]">
          <Link to={"/sign-in"}>
            <button className="py-3 px-8 ">Sign In</button>
          </Link>
          <Link to={"/sign-up"}>
            <button className="bg-orange py-3 px-8 rounded-[5px]">
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
