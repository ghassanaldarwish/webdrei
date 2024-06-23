"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card-effect";
import Link from "next/link";
import { ArrowDownUp } from "lucide-react";
import USCD from "../ui/crepto-icons/usdc";
import { Skeleton } from "../ui/skeleton";
import Kuji from "../ui/crepto-icons/kuji";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="relative group/card  dark:hover:shadow-2xl    w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold ">
          Trade On Web Drei
        </CardItem>
        <CardItem as="p" translateZ="60" className=" text-sm max-w-sm mt-2 ">
          Strategic Problem-Solver in Decentralized Crypto Exchange.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="h-60 w-full   relative flex flex-col gap-2">
            <div className="h-1/2 w-full flex justify-between items-center px-4 rounded-xl bg-background/80  group-hover/card:shadow-xl  border">
              <div className="flex gap-2 items-center font-bold">
                <USCD /> USCD
              </div>

              <div className="font-bold">$1.0000</div>
            </div>
            <div className=" absolute w-16 z-10 h-16 flex justify-center items-center rounded-full bg-background  border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ArrowDownUp />
            </div>
            <div className="h-1/2 w-full flex justify-between items-center px-4  rounded-xl bg-background/80  group-hover/card:shadow-xl  border">
              <div className="flex gap-2 items-center font-bold">
                <Kuji />
                Kuji
              </div>

              <div className="grid grid-cols-4 gap-1 w-28 h-8">
                <Skeleton className="col-span-4 " />
                <Skeleton className="col-start-2 col-span-3 " />
              </div>
            </div>
          </div>
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
