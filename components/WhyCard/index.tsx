import React from "react";

function WhyCard({ data }: any) {
  return (
    <div className="flex flex-col gap-[90px] items-center col-span-1 p-16 border rounded-md">
      {data.icon}
      <p>{data.text}</p>
    </div>
  );
}

export default WhyCard;
