import { ActiveRaffleEventResponse, CommunityGoalResults, RaffleWinnersResponse } from "@/types/raffle";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";

export async function getCommunityGoals(cookie?: RequestCookie[]): Promise<CommunityGoalResults | null> {
  return await fetcher<CommunityGoalResults>({
    url: `/raffle/community-goals-progress`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getActiveRaffles(cookie?: RequestCookie[]): Promise<ActiveRaffleEventResponse[] | null> {
  return await fetcher<ActiveRaffleEventResponse[]>({
    url: `/raffle/active-timed-raffles`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getRaffleWinners(cookie?: RequestCookie[]): Promise<RaffleWinnersResponse[] | null> {
  return await fetcher<RaffleWinnersResponse[]>({
    url: `/raffle/winner-reports`,
    method: "GET",
    cookie: cookie,
  });
}
