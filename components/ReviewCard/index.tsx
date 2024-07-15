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
    <div className="flex flex-col bg-white px-1w py-11 px-20 rounded-xl gap-8">
      <h1 className="text-[180px] text-primary-default">{quote}</h1>
      <p className="text-black-800 text-[28px] mt-[-120px]">{review.text}</p>

      <span className="flex items-center gap-6 ">
        <Image
          width={1000}
          height={1000}
          src={review.image}
          alt=""
          className="rounded-full h-[94px] w-[94px] object-cover"
        />
        <span className="flex flex-col gap-1">
          <p className="text-[30px] font-bold text-black-900">{review.name}</p>
          <p className="text-black-700 text-[18px]">{review.job}</p>
        </span>
      </span>
    </div>
  );
}

export default ReviewCard;
