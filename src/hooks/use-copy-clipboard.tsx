"use client";

import { toast } from "sonner";

/**
 * Custom hook to copy text to the clipboard.
 * @returns A tuple with the copy function, success message, and reset function.
 */
export const useCopyToClipboard = (): [(text: string) => void] => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return [copyToClipboard];
};
