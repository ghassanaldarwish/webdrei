import Benefits from "@/components/benefits";
import { Separator } from "@/components/ui/separator";

import Atomics from "@/components/atomics";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";
const CiCd = dynamic(() => import("@/components/ci-cd"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between">
      <Hero />
      <Atomics />
      {/* <Benefits />
      <Separator className="my-6  sm:mx-auto  lg:my-8 container" />
      <CiCd /> */}
    </main>
  );
}
