import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";
import { ShopItem, ShopTx } from "@/types/marketplace";

export async function getShopItems(cookie?: RequestCookie[]) {
  return await fetcher<ShopItem[]>({
    url: `/marketplace`,
    method: "GET",
    cookie: cookie,
  });
}

export async function isAlive(itemId: string) {
  return await fetcher<{ isAlive: boolean }>({
    url: `/marketplace/is-alive/${itemId}`,
    method: "GET",
  });
}

export async function purchaseItem(itemId: string) {
  return await fetcher({
    url: `/marketplace/purchase`,
    method: "POST",
    body: JSON.stringify({ itemId }),
  });
}

export async function getPurchaseHistory(cookie?: RequestCookie[]) {
  return await fetcher<ShopTx[]>({
    url: `/marketplace/purchase-history`,
    method: "GET",
    cookie: cookie,
  });
}
