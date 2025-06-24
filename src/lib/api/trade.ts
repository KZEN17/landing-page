import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";
import { UserDegenPassHistory } from "@/types/trade";
import { PaginatedResponse } from "@/types";

export async function getPassTrades(
  username: string,
  cookie?: RequestCookie[],
): Promise<PaginatedResponse<UserDegenPassHistory> | null> {
  return await fetcher<PaginatedResponse<UserDegenPassHistory> | null>({
    url: `/trades/${username}/degen-pass-history`,
    method: "GET",
    cookie: cookie,
  });
}
