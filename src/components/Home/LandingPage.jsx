import React from "react";
import { Categories } from "./Home.data/";
import { styles, layout } from "../../style";
import "./landingPage.css";

const landingPage = () => {
  return (
    <section className={`${layout.section}  w-[100%] `}>
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

      <div className={`${styles.flexBetween} flex-col md:flex-row gap-3 mt-6`}>
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
  );
};

export default landingPage;
