import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";
import { PaginatedResponse, StakesResponse, TournamentFaceItSub, Tournament } from "@/types";

export async function getTournamentById(id: string, cookie?: RequestCookie[]): Promise<Tournament | null> {
  return await fetcher<Tournament>({
    url: `/tournaments/${id}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getStakerDashboard(cookie?: RequestCookie[]): Promise<StakesResponse | null> {
  return await fetcher<StakesResponse>({
    url: `/tournaments/staker-dashboard`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getTournaments(
  query: string,
  cookie?: RequestCookie[],
): Promise<PaginatedResponse<Tournament> | null> {
  return await fetcher<PaginatedResponse<Tournament>>({
    url: `/tournaments${query}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function registerTournament(
  id: string,
  sponsorEnabled: boolean,
  cookie?: RequestCookie[],
): Promise<Tournament | null> {
  return await fetcher<Tournament>({
    url: `/tournaments/register/${id}`,
    method: "POST",
    cookie: cookie,
    body: JSON.stringify({ sponsorEnabled }),
  });
}

export async function unregisterTournament(id: string) {
  return await fetcher<Tournament>({
    url: `/tournaments/unregister/${id}`,
    method: "DELETE",
  });
}

export async function getUsersRegisteredOnFaceItForFreeTournament(tournamentId: string, cookie?: RequestCookie[]) {
  return await fetcher<TournamentFaceItSub[]>({
    url: `/tournaments/subscriptions/${tournamentId}`,
    method: "GET",
    cookie: cookie,
  });
}

export interface TournamentResponse {
  pagination: TPagination;
  data: Tournament[];
}

export interface TPagination {
  page: number;
  size: number;
  lastPage: number;
  totalCount: number;
}
