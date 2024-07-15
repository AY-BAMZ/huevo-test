import { useRouter } from "next/router";
import React from "react";
import Logo from "@/assets/logo2.svg";
import Facebook from "@/assets/facebook.svg";
import Twitter from "@/assets/twitter.svg";
import Instagram from "@/assets/instagram.svg";
import YouTube from "@/assets/youtube.svg";
import { cn } from "@/lib";
import Arrow from "@/assets/arrow-left.svg";
import Search from "@/assets/search.svg";

function Footer() {
  const router = useRouter();
  const footerData = {
    heading: "Subscribe for Exclusive offers",
    list1: {
      title: "Services",
      items: [
        { text: "about", link: "/" },
        { text: "What we offer", link: "/" },
        { text: "Blog", link: "/" },
        { text: "Development", link: "/" },
      ],
    },
    list2: {
      title: "About",
      items: [
        { text: "careers", link: "/" },
        { text: "privacy policy", link: "/" },
        { text: "Blog", link: "/" },
        { text: "terms of service", link: "/" },
      ],
    },
    socials: [
      { icon: <Facebook />, link: "/" },
      { icon: <Twitter />, link: "/" },
      { icon: <Instagram />, link: "/" },
      { icon: <YouTube />, link: "/" },
    ],
  };
  return (
    <div className="px-6 bg-black-1000 flex flex-col pt-[100px] text-white">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 max-w-[1440px] mx-auto">
        <span className="col-span-2 flex flex-col gap-[100px]">
          <h3 className="text-[46px] leading-[74px] font-semibold">
            Subscribe for Exclusive offers
          </h3>
          <span className="flex w-full gap-3 items-center py-3 border-b border-b-black-800">
            <Search />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow py-3 text-[24px] bg-transparent outline-none"
              name=""
              id=""
            />
            <Arrow />
          </span>
        </span>
        <span className="col-span-1 flex justify-center lg:pt-[500px] pt-0">
          <Logo className={cn(" mt-3", {})} />
        </span>
        <span className="col-span-1 flex flex-col gap-10">
          <h3 className="text-[26px] font-semibold text-black-200">
            {footerData.list1.title}
          </h3>
          <ul className="flex flex-col gap-4">
            {footerData.list1.items.map((item, index) => (
              <li
                key={index}
                onClick={() => router.push(`${item.link}`)}
                className="text-black-300 cursor-pointer py-4 capitalize"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </span>
        <span className="col-span-1 flex flex-col gap-10">
          <h3 className="text-[26px] font-semibold text-black-200">
            {footerData.list2.title}
          </h3>
          <ul className="flex flex-col gap-4">
            {footerData.list2.items.map((item, index) => (
              <li
                key={index}
                onClick={() => router.push(`${item.link}`)}
                className="text-black-300 cursor-pointer py-4 capitalize"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </span>
      </div>
      <div className="flex lg:flex-row flex-col gap-12 justify-between max-w-[1440px] w-full mt-20 mx-auto border-t border-t-white py-10">
        <p className="text-[18px] text-[#D7D7D7]">
          © 2024 Logo. All right reserved.
        </p>
        <span className="flex gap-[14px]">
          {footerData.socials.map((item, index) => (
            <span
              key={index}
              className="flex items-center justify-center border rounded-full border-black-800 w-11 h-11"
            >
              {item.icon}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default Footer;
