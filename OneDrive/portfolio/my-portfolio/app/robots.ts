import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://example.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
