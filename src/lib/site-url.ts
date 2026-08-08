const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stavya-web-portfolio.vercel.app";

export const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`;