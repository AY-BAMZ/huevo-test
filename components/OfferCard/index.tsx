import { cn } from "@/lib";
import Image from "next/image";
import React from "react";

interface OfferProps {
  image: any;
  text: string;
}

function OfferCard({ data, className }: { data: OfferProps; className?: any }) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      <span className="flex items-center">
        <span className="w-[40%]">
          <Image width={1000} height={1000} src={data.image} alt="" />
        </span>
        <p className="text-[20px] font-semibold max-w-[400px] text-black-800 flex-grow w-[60%] pl-7">
          {data.text}
        </p>
      </span>
    </div>
  );
}

export default OfferCard;
