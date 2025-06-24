// import { SeasonProgress, Tokens, TokenTypes } from "@/types";
// import { formatUnits } from "viem";

// export const parseFaceItUrl = (faceitUrl: string, lang: string = "en"): string => {
//   return faceitUrl.replace("{lang}", lang);
// };

// export const fromAvaxWeiGetHuman = (entryFeeAvaxWei: bigint) => {
//   return Number(formatUnits(entryFeeAvaxWei, Tokens[TokenTypes.AVAX].decimals));
// };

// export const fromAvaxWeigetUsdHuman = (entryFeeAvaxWei: bigint, avaxPrice: number) => {
//   return Math.round(Number(formatUnits(entryFeeAvaxWei, Tokens[TokenTypes.AVAX].decimals)) * avaxPrice * 100) / 100;
// };

// export const getProgress = (progress: SeasonProgress) => {
//   if (progress.currentLevel == 1 && progress.currentXP == 0) return 0;
//   const res = ((progress.currentXP - progress?.xpToNextLevel) / progress?.currentLevelTotalXp) * 100;
//   return isNaN(res) ? 0 : res;
// };

// export const shortenText = (text: string, charsToShow: number = 6): string => {
//   if (text.length <= charsToShow * 2) {
//     return text; // No need to shorten if the text is already short
//   }
//   const start = text.slice(0, charsToShow);
//   const end = text.slice(-charsToShow);
//   return `${start}...${end}`;
// };

// export function formatUnitsUsd(value: number, decimals: number = 0): string {
//   const ABS_VALUE = Math.abs(value);

//   // Define thresholds and suffixes in descending order
//   const thresholds = [
//     { limit: 1e9, suffix: "B" },
//     { limit: 1e6, suffix: "M" },
//     { limit: 1e3, suffix: "k" },
//   ];

//   let formattedValue: number;
//   let suffix = "";

//   // Find the largest threshold the value meets or exceeds
//   for (const { limit, suffix: sfx } of thresholds) {
//     if (ABS_VALUE >= limit) {
//       const scale = limit;
//       // Truncate the value: e.g., for decimals = 1 and value = 10100, we do:
//       // truncatedVal = Math.floor(10100 / 1000 * 10) / 10 = Math.floor(10.1 * 10)/10 = 10.1
//       const factor = Math.pow(10, decimals);
//       formattedValue = Math.floor((value / scale) * factor) / factor;
//       suffix = sfx;
//       return `$${formattedValue}${suffix}`;
//     }
//   }

//   // If no threshold was met (i.e., value < 1000)
//   // Just truncate to the given decimals
//   const factor = Math.pow(10, decimals);
//   formattedValue = Math.floor(value * factor) / factor;

//   return `$${formattedValue}`;
// }
