import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { getAccessToken } from "./trick";
import { env } from "@/env";

export const BASE_URL = env.NEXT_PUBLIC_API_URL;

type ServerFetchPrarams = {
  url: string;
  method: string;
  cookie?: RequestCookie[];
  body?: any;
};

export async function fetcher<T>(params: ServerFetchPrarams): Promise<T | null> {
  let cookiesString: string | undefined = undefined;

  if (params.cookie) {
    cookiesString = params.cookie.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
  }

  let requestBody: string | undefined = undefined;
  if (params.body) {
    requestBody = typeof params.body === "string" ? params.body : JSON.stringify(params.body);
  }

  const token = env.NEXT_PUBLIC_ENVIRONMENT !== "production" ? getAccessToken() : null;

  let cfg: RequestInit;
  if (token) {
    cfg = {
      method: params.method,
      cache: "no-store",
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
        "privy-token": token,
        Cookie: cookiesString ?? "",
      },
    };
  } else {
    cfg = {
      method: params.method,
      credentials: "include",
      cache: "no-store",
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
        Cookie: cookiesString ?? "",
      },
    };
  }

  const res = await fetch(`${BASE_URL}${params.url}`, cfg);

  if (!res.ok) {
    const json = await res.json();
    const message = json.error || res.statusText;
    throw new Error(`Error: ${message}`);
  }
  const data = await res.json();

  return data;
}
