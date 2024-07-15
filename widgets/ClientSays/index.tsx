import React, { useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import User from "@/assets/user.png";
import Arrow from "@/assets/arrow_down2.svg";
import Arrow2 from "@/assets/down_arrow.svg";

function ClientSays() {
  const reviews = [
    {
      name: "Joan Jacob",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
    {
      name: "Michael Jordan",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
    {
      name: "Lebron james",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
    {
      name: "Anthony joshua",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
  ];
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
      <span className="max-w-[1400px] flex items-center mx-auto justify-between w-full">
        <h2 className="text-[56px] text-black-900 text-center font-extrabold max-w-[1311px]">
          What our Client Says
        </h2>
        <span className="w-[160px] h-[6px] bg-primary-900  rounded-full"></span>
      </span>
      <span className="flex items-center w-full justify-end">
        <span className="max-w-[1600px] right-0 bg-bg-light flex w-full mt-16">
          <span className="px-14 py-20 flex gap-6">
            <ReviewCard review={reviews[currentIndex]} />
            <span className="flex flex-col gap-3">
              <span
                onClick={prevReview}
                className="w-[48px] text-black-800 hover:bg-primary-default hover:text-white h-12 flex justify-center items-end p-3 pb-0 cursor-pointer"
              >
                <Arrow />
              </span>
              <span
                onClick={nextReview}
                className="w-[48px] text-black-800 hover:bg-primary-default hover:text-white h-12 flex justify-center items-end p-3 pt-0 cursor-pointer"
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
