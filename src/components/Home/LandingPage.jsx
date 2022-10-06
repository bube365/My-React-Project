import React from "react";
import { Categories } from "./assets/";
import { styles, layout } from "../../style";
import "./landingPage.css";

const landingPage = () => {
  return (
    <section className={`${layout.section}  w-[100%]`}>
      <div className={`${styles.flexBetween} gap-3`}>
        {Categories.map(({ id, title }) => {
          if (id <= 3) {
            return (
              <div
                key={id}
                className={`category${id} h-[12rem] w-[33%] relative`}
              >
                <h2
                  key={id}
                  className="category-title p-[0.5rem] sm:p-[1.5rem] text-[14px] sm:text-[17px]"
                >
                  {title}
                </h2>
              </div>
            );
          }
        })}
      </div>

      <div className={`${styles.flexBetween} flex-col md:flex-row gap-3 mt-6`}>
        {Categories.map(({ id, title }) => {
          if (id > 3) {
            return (
              <div
                key={id}
                className={`category${id} h-[17rem] md:w-[50%] w-[100%] text-center relative`}
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
  );
};

export default landingPage;
