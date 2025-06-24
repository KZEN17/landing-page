import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { BASE_URL, fetcher } from "./fetcher";
import { PaginatedResponse, PlayerSearch, RewardActivityResult, User } from "@/types";

type AuthResponse = {
  data: User;
  newUser: boolean;
};

export async function auth(token: string | null): Promise<AuthResponse> {
  const res = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    credentials: token ? "omit" : "include",
    headers: {
      "public-request": "true",
      ...(token && { "privy-token": token }),
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        return undefined;
      }

      return res.json();
    })
    .catch((e) => console.error(e));

  const data = res as AuthResponse;
  return data;
}

export async function me(cookie?: RequestCookie[]): Promise<User | null> {
  try {
    return await fetcher<User>({
      url: "/users/me",
      method: "GET",
      cookie: cookie,
    });
  } catch (e) {
    return null;
  }
}

export async function userDetails(id: string, cookie?: RequestCookie[]): Promise<User | null> {
  return await fetcher<User>({
    url: `/users/profile/${id}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function updateAvatar(url: string): Promise<User | null> {
  return await fetcher<User>({
    url: `/users/update`,
    method: "POST",
    body: JSON.stringify({ avatar: url }),
  });
}

export async function setReffer(reffer: string, cookie?: RequestCookie[]): Promise<User | null> {
  return await fetcher<User>({
    url: `/users/set-referrer`,
    method: "POST",
    cookie: cookie,
    body: JSON.stringify({ referrer: reffer }),
  });
}

export async function connectSteam() {
  return await fetcher<{ token: string }>({
    url: `/users/me/steam-connect-token`,
    method: "GET",
  });
}

export async function disconnectSteam() {
  return await fetcher({
    url: `/users/me/disconnect-steam`,
    method: "GET",
  });
}

export async function changeUsername(username: string) {
  return await fetcher({
    url: `/users/change-username`,
    method: "POST",
    body: JSON.stringify({ newUsername: username }),
  });
}

export async function setSteamTradeLink(tradeLink: string) {
  return await fetcher({
    url: `/users/me/set-steam-trade-link`,
    method: "POST",
    body: JSON.stringify({ tradeLink }),
  });
}

export async function getUserByWalletAddress(walletAddress: string) {
  return await fetcher<User>({
    url: `/users/wallet/${walletAddress}`,
    method: "GET",
  });
}
export async function searchPlayers(query: string, cookie?: RequestCookie[]) {
  return await fetcher<PaginatedResponse<PlayerSearch>>({
    url: `/users/player-search-cs2${query}`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getUserRewardActivity(username: string, cookie?: RequestCookie[]) {
  return await fetcher<PaginatedResponse<RewardActivityResult>>({
    url: `/users/${username}/reward-activity`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getAllUsersRewardActivity(cookie?: RequestCookie[]) {
  return await fetcher<PaginatedResponse<RewardActivityResult>>({
    url: `/users/reward-activity`,
    method: "GET",
    cookie: cookie,
  });
}

export async function genReferralCode(referee?: string) {
  return await fetcher({
    url: `/users/referral`,
    method: "POST",
    body: JSON.stringify({ refereeCode: referee }),
  });
}

type ReferralStatus = {
  referralCode: string;
  referralsCount: number;
  rank: number;
};

export async function referralStatus(cookie?: RequestCookie[]) {
  return await fetcher<ReferralStatus>({
    url: `/users/referralStatus`,
    method: "GET",
  });
}
