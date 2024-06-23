import React from "react";
import { Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import footerData from "./data";
import { useTranslations } from "next-intl";
import Logo from "../logo";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="border-t  px-8 py-20 bg-background ">
      <div className="max-w-7xl mx-auto text-sm  flex sm:flex-row flex-col justify-between items-start">
        <div>
          <div className="mr-4 md:flex mb-4">
            <a
              className="flex scale-75 -translate-x-2 gap-4 items-center justify-center space-x-2 text-2xl font-bold text-center  mr-10 py-0"
              href="/"
            >
              <div className="relative h-8 w-8 md:h-6 md:w-6  border  flex items-center justify-center rounded-md text-sm antialiased">
                <div className="absolute h-10 w-full  -top-10 inset-x-0 rounded-full blur-xl"></div>
                <div className="text-sm  relative z-20">
                  <Logo />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-black dark:text-white font-sans">
                  Web Drei
                </h1>
              </div>
            </a>
          </div>
          <div>
            A product by{" "}
            <a
              target="__blank"
              className="  font-bold text-foreground/60 hover:text-foreground/80"
              href="https://aceternity.com"
            >
              Web Drei team
            </a>
          </div>
          <div className="mt-2">
            <p>© Web Drei 2024</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/pricing"
            >
              Atomics
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/components"
            >
              Assets
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/templates"
            >
              Swap
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/categories"
            >
              Our Vision
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/blog"
            >
              Team
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/tools/box-shadows"
            >
              Whitepaper
            </a>
          </div>
          <div className="flex justify-center space-y-2 flex-col mt-4">
            <h5 className="transition-colors font-bold text-center">
              Official Social
            </h5>
            <div className="flex gap-2 items-center">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://twitter.com/webdrei"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  style={{ fill: "currentColor" }}
                  className="w-8 h-8 "
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                </svg>
              </a>

              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://twitter.com/webdrei"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 72 72"
                  style={{ fill: "currentColor" }}
                  className="w-10 h-10 "
                >
                  <path d="M36,12c13.255,0,24,10.745,24,24S49.255,60,36,60S12,49.255,12,36S22.745,12,36,12z M44.279,45.783	c0.441-1.354,2.51-14.853,2.765-17.513c0.077-0.806-0.177-1.341-0.676-1.58c-0.603-0.29-1.496-0.145-2.533,0.229	c-1.421,0.512-19.59,8.227-20.64,8.673c-0.995,0.423-1.937,0.884-1.937,1.552c0,0.47,0.279,0.734,1.047,1.008	c0.799,0.285,2.812,0.895,4.001,1.223c1.145,0.316,2.448,0.042,3.178-0.412c0.774-0.481,9.71-6.46,10.351-6.984	c0.641-0.524,1.152,0.147,0.628,0.672c-0.524,0.524-6.657,6.477-7.466,7.301c-0.982,1.001-0.285,2.038,0.374,2.453	c0.752,0.474,6.163,4.103,6.978,4.685c0.815,0.582,1.641,0.846,2.398,0.846S43.902,46.94,44.279,45.783z" />
                </svg>
              </a>

              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://twitter.com/webdrei"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  style={{ fill: "currentColor" }}
                  className="w-8 h-8 "
                >
                  <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
