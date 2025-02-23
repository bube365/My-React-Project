import React, { Fragment, useState, useEffect } from "react";
import { Categories } from "./data/";
import { styles, layout } from "../../style";
import "./landingPage.css";
import heroImg from "../assets/heroImg.jpg";
import jackets from "../assets/jackets.jpg";
import sneaker from "../assets/sneakers.jpg";
import hat from "../assets/hat.jpg";

const backgrounds = ["#022030", "#857A7F", "#181510", "#A4673C"];
const images = [heroImg, sneaker, hat, jackets];

const landingPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      setImgIndex((prevImgIndex) => (prevImgIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [bgIndex]);

  return (
    <Fragment>
      <div
        style={{ background: `${backgrounds[bgIndex]}` }}
        className={`${styles.paddingX} flex items-center justify-between text-white w-[100%] h-[75svh] py-3`}
      >
        <div className="w-[100%] gap-[10%] flex ">
          <div className="w-[45%] flex flex-col ">
            <div className="w-full">
              <h2 className="text-[46px] font-bold mb-4 leading-[50px]">
                Crown Online Store
              </h2>
              <p className="font-[300]">
                Your number one best clothing online store
              </p>
            </div>

            <div className=" bg-orange py-3 px-8 rounded-[5px] w-[40%] mt-4 text-center">
              Get Started
            </div>
          </div>

          <div className="hidden sm:block w-[55%] h-[27rem]  ">
            <div className="mb-2 flex items-center gap-2 justify-end">
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
            </div>
            <div className="mb-2 flex items-center gap-2 justify-end">
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
            </div>
            <div className="w-full h-full bg-blur px-24 py-12 ">
              <img
                src={images[imgIndex]}
                alt=""
                className="w-full
               object-cover rounded-lg h-full "
              />

              <div className="mt-4 flex items-center gap-2 justify-center">
                <div
                  className={`${
                    bgIndex === 0
                      ? "bg-white w-8 h-2 rounded-full"
                      : `${backgrounds[bgIndex]} w-2 h-2 rounded-full border-[0.5px] border-white`
                  }   `}
                ></div>
                <div
                  className={`${
                    bgIndex === 1
                      ? "bg-white w-8 h-2 rounded-full"
                      : `${backgrounds[bgIndex]} w-2 h-2 rounded-full border-[0.5px] border-white`
                  }   `}
                ></div>{" "}
                <div
                  className={`${
                    bgIndex === 2
                      ? "bg-white w-8 h-2 rounded-full"
                      : `${backgrounds[bgIndex]} w-2 h-2 rounded-full border-[0.5px] border-white`
                  }   `}
                ></div>{" "}
                <div
                  className={`${
                    bgIndex === 3
                      ? "bg-white w-8 h-2 rounded-full"
                      : `${backgrounds[bgIndex]} w-2 h-2 rounded-full border-[0.5px] border-white`
                  }   `}
                ></div>{" "}
              </div>
            </div>

            <div className="my-2 flex items-center gap-2 justify-start">
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
            </div>
            <div className="mb-4 flex items-center gap-2 justify-start">
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
              <div className="bg-white w-[1px] h-[1px] rounded-full"></div>
            </div>
          </div>
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
