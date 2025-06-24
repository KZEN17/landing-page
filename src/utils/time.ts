import dayjs from "dayjs";
import("dayjs/locale/es");
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";

// TODO update https://next-intl-docs.vercel.app/docs/usage/dates-times#dates-times
// i18n.on("languageChanged", () => dayjs.locale(i18n.language));
// i18n.on("loaded", () => dayjs.locale(i18n.language));

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(updateLocale);

export const fromDateGetTime24h = (date: string) => {
  return dayjs(date).format("HH:mm");
};

export const fromDateGetYear = (date: string) => {
  return dayjs(date).format("YYYY");
};
export const fromDateGetMonthShort = (date: string) => {
  return dayjs(date).format("MMM");
};

export const fromDateGetWeekDayShort = (date: string) => {
  return dayjs(date).format("ddd");
};

export const fromDateGetDay = (date: string) => {
  return dayjs(date).format("DD");
};

export const getTimezone = () => dayjs.tz.guess();

// December 11, 2024
export const formatDate = (date?: Date, format?: string) => {
  const timezone = getTimezone();
  return dayjs(date)
    .tz(timezone)
    .format(format || "MMMM D, YYYY");
};

export const formatDateTime = (date?: Date, format?: string) => {
  const timezone = getTimezone();
  return dayjs(date)
    .tz(timezone)
    .format(format || "MMM D YYYY - h:mm A");
};

export const getMidnightNextDay = (date: Date) => {
  return dayjs(date).utc().add(1, "day").startOf("day").toDate();
};
// Handles both future and past dates (e.g. "in 5 minutes", "5 minutes ago")
export const timeFromNow = (date: Date) => {
  const customLocale = {
    ...dayjs.Ls.en,
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  };
  return dayjs(date).locale(customLocale).fromNow();
};

export const timeFromNowShort = (date: Date) => {
  const customLocale = {
    ...dayjs.Ls.en,
    relativeTime: {
      future: "%s",
      past: "%s",
      s: "1s", // seconds
      ss: "%ds",
      m: "1m", // 1 minute
      mm: "%dm", // minutes
      h: "1h", // 1 hour
      hh: "%dh", // hours
      d: "1d", // 1 day
      dd: "%dd", // days
      M: "1mo", // 1 month
      MM: "%dmo", // months
      y: "1y", // 1 year
      yy: "%dy", // years
    },
  };
  return dayjs(date).locale(customLocale).fromNow();
};
