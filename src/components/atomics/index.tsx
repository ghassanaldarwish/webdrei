import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Logo from "../logo";
import USDC from "../ui/crepto-icons/usdc";
import { cn } from "@/lib/utils";
import Kuji from "../ui/crepto-icons/kuji";
import Atom from "../ui/crepto-icons/atom";
import { WandSparkles } from "lucide-react";

export default function Atomics() {
  // Array to store the components
  const components = [
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <Atom key="logo12" className="w-[80%] h-[80%]"></Atom>,
    <USDC key="logo4" className="w-[100%] h-[100%]" />,
    <Atom key="logo5" className="w-[100%] h-[100%]" />,
    <Kuji key="logo6" className="w-[100%] h-[100%]" />,
    <USDC key="logo12" className="w-[80%] h-[80%]"></USDC>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,

    <USDC key="logo11" className="w-[100%] h-[100%]" />,
    <Atom key="logo12" className="w-[100%] h-[100%]" />,
    <USDC key="logo13" className="w-[100%] h-[100%]" />,
    <Kuji key="logo14" className="w-[100%] h-[100%]" />,
    <USDC key="logo15" className="w-[100%] h-[100%]" />,
    <Atom key="logo16" className="w-[100%] h-[100%]" />,
    <USDC key="logo1" className="w-[100%] h-[100%]" />,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <USDC key="logo3" className="w-[100%] h-[100%]" />,
    <Kuji key="logo4" className="w-[100%] h-[100%]" />,
    <USDC key="logo5" className="w-[100%] h-[100%]" />,
    <Atom key="logo7" className="w-[100%] h-[100%]" />,
    <Kuji key="logo6" className="w-[100%] h-[100%]" />,

    <USDC key="logo8" className="w-[100%] h-[100%]" />,
    <USDC key="logo9" className="w-[100%] h-[100%]" />,
    <Kuji key="logo10" className="w-[100%] h-[100%]" />,
    <USDC key="logo11" className="w-[100%] h-[100%]" />,
    <Atom key="logo12" className="w-[100%] h-[100%]" />,
    <USDC key="logo13" className="w-[100%] h-[100%]" />,
    <USDC key="logo14" className="w-[100%] h-[100%]" />,
    <div key="logo15" className="w-[100%] h-[100%]" />,
    <div key="logo16" className="w-[100%] h-[100%]" />,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <USDC key="logo7" className="w-[100%] h-[100%]" />,

    <USDC key="logo9" className="w-[100%] h-[100%]" />,
    <Atom key="logo10" className="w-[100%] h-[100%]" />,
    <Kuji key="logo11" className="w-[100%] h-[100%]" />,
    <USDC key="logo12" className="w-[100%] h-[100%]" />,

    <USDC key="logo12" className="w-[80%] h-[80%]"></USDC>,

    <div key="logo12" className="w-[80%] h-[80%]"></div>,

    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo13" className="w-[100%] h-[100%]" />,
    <Atom key="logo13" className="w-[100%] h-[100%]" />,
    <Atom key="logo12" className="w-[80%] h-[80%]"></Atom>,
    <Atom key="logo12" className="w-[80%] h-[80%]"></Atom>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,

    <div key="logo12" className="w-[80%] h-[80%]"></div>,

    <USDC key="logo12" className="w-[80%] h-[80%]"></USDC>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,

    <div key="logo12" className="w-[80%] h-[80%]"></div>,
    <Atom key="logo12" className="w-[80%] h-[80%]"></Atom>,
    <div key="logo12" className="w-[80%] h-[80%]"></div>,
  ];

  const isInclude = (number: number, numbers: number[]) => {
    return numbers.includes(number);
  };

  return (
    <div className="bg-background z-10 ">
      <HeroHighlight className="w-screen">
        <div className="container max-w-6xl min-h-[100vh]   grid grid-cols-9 gap-4  ">
          {components.map((component, index) => {
            return (
              <div
                key={index}
                className={cn(
                  " w-12 h-12 place-items-center place-self-center",

                  {
                    " w-20 h-20": isInclude(index, [22, 6, 2]),
                  },
                  {
                    " w-16 h-16": isInclude(index, [13]),
                  },
                  {
                    " justify-self-center w-16 h-16 self-end": isInclude(
                      index,
                      [23]
                    ),
                  },
                  {
                    " justify-self-center w-16 h-16 self-end": isInclude(
                      index,
                      [23, 21]
                    ),
                  },
                  {
                    " justify-self-end  self-end": isInclude(
                      index,
                      [12, 3, 12, 11, 10, 19, 18, 2]
                    ),
                  },
                  {
                    " justify-self-start  self-end": isInclude(
                      index,
                      [14, 5, 15, 16, 25, 26, 6]
                    ),
                  },

                  {
                    "justify-self-end": isInclude(index, [27]),
                  },
                  {
                    "justify-self-start": isInclude(index, [32, 35]),
                  },

                  {
                    "w-20 h-20 ": isInclude(
                      index,
                      [
                        58,

                        49,
                      ]
                    ),
                  }
                )}
              >
                {component}
              </div>
            );
          })}
          <div className="row-start-4 w-26 h-26 absolute top-[53%] left-1/2 -translate-x-1/2   col-start-4 col-span-3 row-span-3 flex items-center justify-center">
            <Logo className="w-[40%] h-[40%]" />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}
