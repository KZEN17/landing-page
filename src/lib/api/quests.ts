import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";
import { QuestsResponse, RepeatableTask, UserRepeatableTaskView } from "@/types/quest";
import { QuestTaskType } from "@/types/quest";
import { RepeatableTaskType } from "@/types/repeatableTasks";

export async function getRepeatableTasks(cookie?: RequestCookie[]) {
  return await fetcher<RepeatableTask[]>({
    url: `/progression/repeatable-tasks`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getUserRepeatableTaskStatus(cookie?: RequestCookie[]) {
  return await fetcher<UserRepeatableTaskView[]>({
    url: `/progression/repeatable-tasks/user-counts`,
    method: "GET",
    cookie: cookie,
  });
}

export async function getQuests(cookie?: RequestCookie[]) {
  return await fetcher<QuestsResponse>({
    url: `/progression/quests`,
    method: "GET",
    cookie: cookie,
  });
}

export async function checkTask(
  taskType: QuestTaskType | RepeatableTaskType,
  metadata?: { tweetUrl: string },
  cookie?: RequestCookie[],
) {
  let body;
  if (metadata) {
    body = JSON.stringify({ tweetUrl: metadata.tweetUrl });
  }
  return await fetcher({
    url: `/progression/${taskType}/process-task-status`,
    method: "POST",
    body,
    cookie: cookie,
  });
}

export async function initQuesting(cookie?: RequestCookie[]): Promise<null> {
  return await fetcher({
    url: `/progression/quests/init`,
    method: "POST",
    cookie: cookie,
  });
}
