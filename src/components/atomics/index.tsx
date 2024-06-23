import React from "react";
import { Separator } from "@/components/ui/separator";
import { Server, Layers, Figma, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import StructureImage from "./structure-image";
import useTextDirection from "@/hooks/useTextDirection";
import { cn } from "@/lib/utils";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import Logo from "../logo";

export default function Atomics() {
  const t = useTranslations("Index");
  const direction = useTextDirection();
  return (
    <div className="bg-background z-10">
      <HeroHighlight className="min-h-screen w-screen">
        <div className="container  min-h-screen py-4">
          <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            Atomics
          </h2>

          <div className="flex mt-4  h-[90vh] justify-center items-center">
            <Logo className="scale-150" />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}
