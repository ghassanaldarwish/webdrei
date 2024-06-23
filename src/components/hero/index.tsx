import React from "react";
import Image from "next/image";
import Technologies from "@/components/technologies";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import useTextDirection from "@/hooks/useTextDirection";
import Logo from "../logo";
import View from "./view";
import { WavyBackground } from "../wavy-background";

export default function Hero() {
  const t = useTranslations("Index");
  const direction = useTextDirection();

  return (
    <WavyBackground backgroundFill="#1F221C" className="container  ">
      <div className="flex relative     flex-col lg:flex-row  items-center justify-between py-6 ">
        <div className="basis-1/2 flex flex-col gap-6 lg:gap-10">
          <h1
            style={{ lineHeight: "1.3 !important" }}
            className="text-3xl  font-medium tracking-tight md:text-7xl  text-center lg:text-left "
          >
            On <Logo className="inline-flex align-middle scale-150 mx-2" />{" "}
            <span className="font-bold ">Web Drei</span> {t("hero.title")}.
          </h1>
          {/* <p className="font-extralight leading-loose text-base md:text-4xl text-center lg:text-left relative">
            {t("hero.description")}
            <Highlight>{t("hero.description-highlight")}</Highlight>
          </p> */}
          <div
            className={cn("flex justify-center lg:justify-start", {
              "lg:justify-center": direction === "rtl",
            })}
          >
            <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "w-64 h-16 text-2xl font-bold"
              )}
              href="/contact"
            >
              {t("hero.contact.button")}
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center  basis-1/2  relative">
          <View />
        </div>
      </div>
    </WavyBackground>
  );
}
