"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card-effect";
import Link from "next/link";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="relative group/card  dark:hover:shadow-2xl    w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold ">
          Trade On Web Drei
        </CardItem>
        <CardItem as="p" translateZ="60" className=" text-sm max-w-sm mt-2 ">
          Strategic Problem-Solver in Decentralized Crypto Exchange
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xl font-normal dark:text-white"
          >
            Assets →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2   text-xl   w-36 h-12  rounded-xl bg-black dark:bg-white dark:text-black text-white  font-bold"
          >
            Swap
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
