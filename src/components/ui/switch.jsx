"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 md:h-7 w-10.5 md:w-14.5 rounded-[50px] shrink-0 cursor-pointer  items-center p-1 border-1 border-[#6B7B93] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed  disabled:opacity-50 data-[state=checked]:bg-gray-200 data-[state=unchecked]:bg-[#EFF2F4]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-black shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3.5 md:data-[state=checked]:translate-x-7 data-[state=unchecked]:-translate-x-0.5 data-[state=unchecked]:bg-[#6B7B93]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
