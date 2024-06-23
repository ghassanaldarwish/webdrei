"use client";

import * as React from "react";
import { Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function ConnectWallet() {
  return (
    <Button variant="outline" className={cn("flex gap-2")}>
      <Wallet /> Connect a wallet
    </Button>
  );
}
