
import { env } from "@/env";
import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isProd() {
  return env.NEXT_PUBLIC_ENVIRONMENT === "production";
}

export const formatDollars = (amount: number) => {
  amount = Number(amount);
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

/**
 * Formats a crypto number with appropriate decimal places based on token price.
 * Examples:
 * - formatCryptoNumber("1500", "2.5") => "1,500"  (high value, no decimals)
 * - formatCryptoNumber("0.5", "2.5") => "0.5"  (token price > $1, 2 decimals)
 * - formatCryptoNumber("0.12345", "0.001") => "0.123456"  (low-value token, 6 decimals)
 */
export const formatCryptoNumber = (value: string, tokenPriceUsdString: string) => {
  if (!value || !tokenPriceUsdString) {
    return "-";
  }

  const num = Number(value);
  const tokenPriceUsd = Number(tokenPriceUsdString);

  let decimalPlaces;

  if (tokenPriceUsd >= 1) {
    decimalPlaces = 2;
  } else if (tokenPriceUsd >= 0.01) {
    decimalPlaces = 4;
  } else if (tokenPriceUsd >= 0.0001) {
    decimalPlaces = 6;
  } else {
    decimalPlaces = 8;
  }

  if (num >= 1000) {
    decimalPlaces = 0;
  }

  // Truncate the number instead of rounding
  const factor = Math.pow(10, decimalPlaces);
  const truncatedNum = Math.floor(num * factor) / factor;

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalPlaces,
  }).format(truncatedNum);
};

export const formatPosition = (position: number): string => {
  if (position <= 0 || !Number.isInteger(position)) {
    return "-";
  }

  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = position % 10;
  const lastTwoDigits = position % 100;

  // Handle special cases for 11th, 12th, 13th
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${position}th`;
  }

  const suffix = suffixes[lastDigit] || suffixes[0];
  return `${position}${suffix}`;
};

export function sanitizeNumericInput(value: string): string {
  // Remove any non-numeric or non-decimal characters
  const sanitizedValue = value.replace(/[^0-9.]/g, "");

  // If there are multiple decimal points, keep only the first one
  const firstDecimalIndex = sanitizedValue.indexOf(".");
  if (firstDecimalIndex !== -1) {
    const stringWithoutExtraDecimal =
      sanitizedValue.substring(0, firstDecimalIndex + 1) +
      sanitizedValue.substring(firstDecimalIndex + 1).replace(/\./g, "");
    return stringWithoutExtraDecimal;
  }

  return sanitizedValue;
}

export const formatBalance = (input: number | string | undefined, decimals: number = 6): string => {
  return (Math.floor(+(input ?? 0) * 10 ** decimals) / 10 ** decimals)?.toString();
};
