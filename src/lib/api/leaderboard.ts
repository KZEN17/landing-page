import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";
import { GrindLeaderboard, PaginatedResponse, TournamentLeaderboard, TraderLeaderboard } from "@/types";

export async function getTournamentLeaderboard(
  query: string,
  cookie?: RequestCookie[],
): Promise<PaginatedResponse<TournamentLeaderboard> | null> {
  return await fetcher<PaginatedResponse<TournamentLeaderboard>>({
    url: `/leaderboard/tournament${query}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getTradeLeaderboard(
  query: string,
  cookie?: RequestCookie[],
): Promise<TraderLeaderboard[] | null> {
  return await fetcher<TraderLeaderboard[]>({
    url: `/leaderboard/trade${query}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getGrindLeaderboard(query: string, cookie?: RequestCookie[]): Promise<GrindLeaderboard[] | null> {
  return await fetcher<GrindLeaderboard[]>({
    url: `/leaderboard/grind${query}`,
    method: "GET",
    cookie: cookie,
  });
}
