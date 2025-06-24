import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";
import {
  Agent,
  AgentBattleResponse,
  AgentRewards,
  AgentStakes,
  BracketInfo,
  StatsResponse,
  UserLeaderboard,
} from "@/types/agents";
import { PaginatedResponse } from "@/types";
import { DexscreenerPairProfile } from "@/types/dexscreener";

// TODO: DELETE
export async function createAgent(body: any, cookie?: RequestCookie[]) {
  return await fetcher<any>({
    url: `/agents/launch`,
    method: "POST",
    body: JSON.stringify(body),
    cookie: cookie,
  });
}

export async function getAgents(cookie?: RequestCookie[], req: string = "") {
  return await fetcher<PaginatedResponse<Agent>>({
    url: `/agents?${req}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getAgent(address: string, cookie?: RequestCookie[]) {
  if (!address) {
    return null;
  }
  return await fetcher<Agent>({
    url: `/agents/${address}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getAgentLazyImport(address: string, cookie?: RequestCookie[]) {
  const searchResult = await searchProfiles(address);
  if (searchResult.pairs.length > 0) {
    return await getOrCreateAgent(address);
  }
  return null;
}

export async function getBattles(cookie?: RequestCookie[], req: string = "") {
  return await fetcher<PaginatedResponse<AgentBattleResponse>>({
    url: `/agents/battles?${req}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getAgentBattles(address: string, cookie?: RequestCookie[], req: string = "") {
  return await fetcher<PaginatedResponse<AgentBattleResponse>>({
    url: `/agents/${address}/battles${req ? `?${req}` : ""}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getStats(cookie?: RequestCookie[]) {
  return await fetcher<StatsResponse>({
    url: `/agents/battles/stats`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getStakedAgents(cookie?: RequestCookie[]) {
  return await fetcher<AgentStakes[]>({
    url: `/users/me/agent-stakes`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getOrCreateAgent(address: string) {
  return await fetcher<Agent | { error: string }>({
    url: `/agents/create/${address}`,
    method: "POST",
  });
}

export async function rewardsToken() {
  return await fetcher<PaginatedResponse<AgentRewards>>({
    url: `/agents/rewards-activity`,
    method: "GET",
  });
}

export async function usersLeaderboard() {
  return await fetcher<PaginatedResponse<UserLeaderboard>>({
    url: `/agents/user-leaderboard`,
    method: "GET",
  });
}

export async function rewardsByToken(address: string) {
  return await fetcher<PaginatedResponse<AgentRewards>>({
    url: `/agents/${address}/rewards-activity`,
    method: "GET",
  });
}

async function searchProfiles(term: string) {
  try {
    const url = `https://api.dexscreener.com/latest/dex/search?q=${term}`;
    const response = await fetch(url);
    const data = await response.json();
    return data as DexscreenerPairProfile;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getAgentBrackets() {
  return await fetcher<BracketInfo[]>({
    url: `/agents/brackets`,
    method: "GET",
  });
}
