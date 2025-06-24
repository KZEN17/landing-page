export function getAccessToken() {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("privy:token")?.replace(/"/g, "");
    return token;
  } else {
    return null;
  }
}
