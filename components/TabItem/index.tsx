import { cn } from "@/lib";
import React, { ReactNode } from "react";

interface TabProps {
  className?: ReactNode;
  children: ReactNode;
  active?: boolean;
  onClick?: any;
}

function TabItem({ className, active, children, onClick }: TabProps) {
  return (
    <span
      className="flex flex-col items-center  px-7 cursor-pointer h-full"
      onClick={onClick}
    >
      <span
        className={cn("w-1 h-5 bg-transparent", {
          "bg-primary-default": active,
        })}
      ></span>
      <li
        className={cn(
          "list-none text-black-800 capitalize flex-grow flex items-center justify-center",
          { "text-primary-default font-bold": active },
          className
        )}
      >
        {children}
      </li>
    </span>
  );
}

export default TabItem;
