import React, { useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import Arrow from "@/assets/arrow_down2.svg";
import Arrow2 from "@/assets/down_arrow.svg";
import { useGeneralContext } from "@/context/GeneralContext";

function ClientSays() {
  const { reviews }: any = useGeneralContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="w-full py-16 mx-auto flex flex-col">
      <span className="max-w-[1400px] flex items-center lg:mx-auto lg:px-0 px-6 justify-between w-full flex-wrap gap-5 ">
        <h2 className="lg:text-[44px] text-[32px] text-black-900  font-extrabold max-w-[1311px]">
          What our Client Says
        </h2>
        <span className="w-[160px] h-[6px] bg-primary-900  rounded-full"></span>
      </span>
      <span className="flex items-center w-full justify-end pl-0">
        <span className=" right-0 bg-bg-light flex w-full mt-16 body1">
          <span className="lg:px-14 px-8 py-20 flex lg:flex-row flex-col gap-6 max-w-[1400px]">
            <ReviewCard review={reviews[currentIndex]} />
            <span className="flex lg:flex-col flex-row gap-3">
              <span
                onClick={prevReview}
                className="w-[48px] lg:text-black-800 text-white lg:bg-transparent bg-primary-default hover:bg-primary-default hover:text-white h-12 flex justify-center items-end p-3 pb-0 cursor-pointer"
              >
                <Arrow />
              </span>
              <span
                onClick={nextReview}
                className="w-[48px] lg:text-black-800 text-white lg:bg-transparent bg-primary-default hover:bg-primary-default hover:text-white h-12 flex justify-center items-end p-3 pt-0 cursor-pointer"
              >
                <Arrow2 />
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default ClientSays;
