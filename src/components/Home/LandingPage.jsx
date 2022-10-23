import React, { Fragment } from "react";
import { Categories } from "./Home.data/";
import { styles, layout } from "../../style";
import "./landingPage.css";
import heroImg from "../assets/heroImg.jpg";

const landingPage = () => {
  return (
    <Fragment>
      <div
        className={`${styles.paddingX} nav flex justify-between text-white w-[100%] h-[450px] py-3`}
      >
        <div className="w-[100%] flex">
          <div className="w-[45%] ">
            <h2 className="text-[42px] font-bold">Crown Clothing Store</h2>
            <button className="bg-nav py-1 px-4 rounded-[5px]">
              Get Started
            </button>
          </div>
          <img
            src={heroImg}
            alt=""
            className="hidden sm:flex w-[55%] h-[27rem] object-cover rounded-lg bg-blur px-24 py-12  "
          />
        </div>
      </div>

      <section className={`${layout.section} w-[100%] `}>
        <div className={`${styles.flexBetween} gap-3`}>
          {Categories.map(({ id, title }) => {
            if (id <= 3) {
              return (
                <div
                  key={id}
                  className={`category${id} h-[13rem] w-[30%] relative rounded-[12px]`}
                >
                  <h2
                    key={id}
                    className="category-title p-[0.5rem] sm:px-[1.5rem] sm:py-3 text-[14px] sm:text-[17px] text-center"
                  >
                    {title}
                  </h2>
                </div>
              );
            }
          })}
        </div>

        <div
          className={`${styles.flexBetween} flex-col md:flex-row gap-3 mt-6`}
        >
          {Categories.map(({ id, title }) => {
            if (id > 3) {
              return (
                <div
                  key={id}
                  className={`category${id} h-[20rem] md:w-[50%] w-[100%] text-center relative rounded-[8px]`}
                >
                  <h2
                    key={id}
                    className="category-title p-[0.5rem] sm:p-[1.5rem] text-[17px]"
                  >
                    {title}
                  </h2>
                </div>
              );
            }
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default landingPage;
