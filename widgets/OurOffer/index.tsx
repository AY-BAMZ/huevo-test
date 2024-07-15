import React from "react";
import Offer1 from "@/assets/offer1.png";
import Offer2 from "@/assets/offer2.png";
import Offer3 from "@/assets/offer3.png";
import Offer4 from "@/assets/offer4.png";
import Offer5 from "@/assets/offer5.png";
import Offer6 from "@/assets/offer6.png";
import OfferCard from "@/components/OfferCard";
import { cn } from "@/lib";
import Line from "@/assets/line.svg";

function OurOffer() {
  const offerList = [
    {
      image: Offer1,
      text: "Continuous delivery with dedicated UX/UI designers and exceptional software developers",
    },
    {
      image: Offer2,
      text: "Free consultation with our CTO",
    },
    {
      image: Offer3,
      text: "Result-driven attitude",
    },
    {
      image: Offer4,
      text: "Investing in Your Startup's Success",
    },
    {
      image: Offer5,
      text: "Solid Infrastructure & Robust Backend",
    },
    {
      image: Offer6,
      text: "Dedicated new technologies like Generative AI, Machine Learning, and Blockchain",
    },
  ];
  return (
    <div className="bg-white px-6 py-[80px]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col">
        <h2 className="lg:text-[44px] text-[36px] text-black-900 text-center font-extrabold max-w-[1311px]">
          What We Offer
        </h2>
        <span className="relative mt-16">
          <Line
            className={
              "absolute right-[calc(50%-100px)] top-[170px] z-0 lg:block hidden"
            }
          />

          <span className="grid grid-cols-2 gap-x-[130px] z-10">
            {offerList.map((item, index) => (
              <OfferCard
                data={item}
                key={index}
                className={cn("lg:col-span-1 col-span-2 lg:my-0 my-8", {
                  "lg:pb-[140px] ": index % 2 === 0,
                  "lg:pt-[140px] ": index % 2 === 1,
                })}
              />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}

export default OurOffer;
