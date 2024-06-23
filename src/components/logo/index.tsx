import { cn } from "@/lib/utils";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(" bg-zinc-700 text-3xl rounded-full w-12 h-12", className)}
    >
      <div className="  bg-gradient-to-r from-green-500  to-blue-500 bg-clip-text text-transparent w-full h-full text-black rounded-full flex justify-center items-center relative">
        D
        <span
          className="w-1 h-2  absolute
   
        bg-gradient-to-r from-green-500  to-blue-500
       top-2
        left-[20px]
        rotate-45

       
       "
        ></span>
        <span
          className="w-1 h-2  absolute
             bg-gradient-to-r from-green-500  to-blue-500
       top-2
        left-[15px]

       
       "
        ></span>
        <span
          className="w-1 h-2  absolute
             bg-gradient-to-r from-green-500  to-blue-500
       bottom-2
        left-[20px]
        -rotate-45
       
       "
        ></span>
        <span
          className="w-1 h-2  absolute
             bg-gradient-to-r from-green-500  to-blue-500
       bottom-2
        left-[15px]

   
       "
        ></span>
      </div>{" "}
    </div>
  );
}
