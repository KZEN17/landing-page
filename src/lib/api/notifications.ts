import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";
import { NotificationData } from "@/types";

export async function getUserNotifications(cookie?: RequestCookie[]): Promise<NotificationData[] | null> {
  return await fetcher<NotificationData[]>({
    url: "/notifications",
    method: "GET",
    cookie: cookie,
  });
}

export async function patchNotificationRead(id: string, cookie?: RequestCookie[]): Promise<void> {
  await fetcher({
    url: `/notifications/${id}/read`,
    method: "PATCH",
    cookie,
  });
}

export async function postAllNotificationsRead(cookie?: RequestCookie[]): Promise<void> {
  await fetcher({
    url: `/notifications/read/all`,
    method: "POST",
    cookie,
  });
}
