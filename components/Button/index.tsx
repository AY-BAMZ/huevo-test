import { cn } from "@/lib";
import React from "react";

function Button({ children, className, disabled = false, ...otherProps }: any) {
  return (
    <button
      className={cn(
        "h-[100px]  px-9 border-none flex items-center cursor-pointer justify-center gap-2 w-fit bg-primary-default text-white font-semibold text-[16px]",

        className
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
