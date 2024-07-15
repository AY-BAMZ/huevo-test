import TabItem from "@/components/TabItem";
import { cn } from "@/lib";
import React, { useState } from "react";
import Logo from "@/assets/logo.svg";
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
  return (
    <div className={cn("w-full bg-bg-light px-10 border-b")}>
      <span className="flex h-full justify-between">
        <Logo className={cn(" mt-3", {})} />
        <span className="flex items-center gap-4 px-16 bg-white">
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
        <Button>Contact</Button>
      </span>
    </div>
  );
}

export default Header;
