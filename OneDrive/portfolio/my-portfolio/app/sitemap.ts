import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://example.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
