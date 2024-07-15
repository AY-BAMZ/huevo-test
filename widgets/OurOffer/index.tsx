import React from "react";
import OfferCard from "@/components/OfferCard";
import { cn } from "@/lib";
import Line from "@/assets/line.svg";
import { useGeneralContext } from "@/context/GeneralContext";

function OurOffer() {
  const { offerList }: any = useGeneralContext();
  return (
    <div className="bg-white px-6 py-[80px]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col">
        <h2 className="lg:text-[44px] text-[32px] text-black-900 text-center font-extrabold max-w-[1311px]">
          What We Offer
        </h2>
        <span className="relative mt-16">
          <Line
            className={
              "absolute right-[calc(50%-100px)] top-[170px] z-0 lg:block hidden"
            }
          />

          <span className="grid grid-cols-2 gap-x-[130px] z-10">
            {offerList.map((item: any, index: number) => (
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
