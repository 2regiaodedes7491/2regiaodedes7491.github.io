const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stavyas.vercel.app";

export const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`;