"use client";

import { usePathname } from "next/navigation";

export function useVersion() {
  const pathname = usePathname();

  return {
    isAI: !pathname.startsWith("/cs2"),
  };
}
