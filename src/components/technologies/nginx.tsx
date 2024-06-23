import React from "react";
import { cn } from "@/lib/utils";

export default function Nginx({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className={cn("w-14 h-14 md:w-24 md:h-24", className)}
      viewBox="0 0 48 48"
    >
      <polygon
        fill="#43a047"
        points="43,35.112 43,13.336 24,2.447 5,13.336 5,35.112 24,46"
      ></polygon>
      <path
        fill="#fff"
        d="M32.5,13c-1.381,0-2.5,1.119-2.5,2.5v11.276L18.984,14.453l-0.131-0.152 C17.609,12.938,16.187,13,15.5,13c-1.381,0-2.5,1.119-2.5,2.5v17c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5V21.141 l11.278,12.627l0.11,0.142C30.62,35.133,32.295,35,32.5,35c1.381,0,2.5-1.119,2.5-2.5v-17C35,14.119,33.881,13,32.5,13z"
      ></path>
    </svg>
  );
}
