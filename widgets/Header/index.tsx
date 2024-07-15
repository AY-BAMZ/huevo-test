import TabItem from "@/components/TabItem";
import { cn } from "@/lib";
import React, { useState } from "react";
import Logo from "@/assets/logo.svg";
import Menu from "@/assets/menu.svg";
import Button from "@/components/Button";

interface Tab {
  link: string;
  text: string;
}

function Header() {
  const menuList = [
    { link: "/", text: "home" },
    { link: "/about", text: "about" },
    { link: "/blog", text: "blog" },
    { link: "/development", text: "development" },
  ];
  const [current, setCurrent] = useState<Tab>(menuList[0]);

  const handleClick = (value: Tab) => {
    setCurrent(value);
  };
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={cn("w-full bg-bg-light lg:px-10 px-5 border-b")}>
      <span className="flex h-full justify-between">
        <Logo className={cn(" mt-3", {})} />
        <span className="lg:flex hidden items-center gap-4 px-16 bg-white">
          {menuList.map((item, index) => (
            <TabItem
              key={index}
              active={current.text === item.text}
              onClick={() => handleClick(item)}
            >
              {item.text}
            </TabItem>
          ))}
        </span>
        <Button className={"lg:flex hidden"}>Contact</Button>
        <span className="lg:hidden flex my-auto">
          <Menu onClick={() => setOpenMenu(true)} className="cursor-pointer" />
        </span>
        {openMenu && (
          <span className="lg:hidden flex flex-col fixed z-20 bg-white h-screen w-screen gap-7">
            <span className="flex justify-between pr-9 pt-5">
              <p className="text-black-800 lg:text-[18px] text-[20px] ">Menu</p>
              <p
                className="text-black-800 lg:text-[18px] text-[26px] font-bold cursor-pointer"
                onClick={() => setOpenMenu(false)}
              >
                X
              </p>
            </span>
            <ul>
              {menuList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(item)}
                  className={cn(
                    "py-4 list-none cursor-pointer text-black-800 capitalize",
                    {
                      "text-primary-default font-bold":
                        current.text === item.text,
                    }
                  )}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <Button>Contact</Button>
          </span>
        )}
      </span>
    </div>
  );
}

export default Header;
