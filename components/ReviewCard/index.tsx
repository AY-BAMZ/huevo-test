import Image from "next/image";
import React from "react";

interface ReviewProps {
  image?: any;
  text?: string;
  name?: string;
  job?: string;
}

function ReviewCard({ review }: { review: ReviewProps }) {
  const quote = '"';
  return (
    <div className="flex flex-col bg-white lg:py-11 py-6 lg:px-20 px-8 rounded-xl gap-8">
      <h1 className="text-[180px] text-primary-default">{quote}</h1>
      <p className="text-black-800 lg:text-[18px] text-[16px] mt-[-118px]">
        {review.text}
      </p>

      <span className="flex items-center gap-6 ">
        <Image
          width={1000}
          height={1000}
          src={review.image}
          alt=""
          className="rounded-full lg:h-[94px] h-[60px] lg:w-[94px] w-[60px] object-cover"
        />
        <span className="flex flex-col gap-1">
          <p className="lg:text-[24px] text-[20px] font-bold text-black-900">
            {review.name}
          </p>
          <p className="text-black-700 lg:text-[16px] text-[14px]">
            {review.job}
          </p>
        </span>
      </span>
    </div>
  );
}

export default ReviewCard;
