import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE_URL = "https://infotech.osut.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localeEntries = locales.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/${locale}#about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/${locale}#events`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/${locale}#team`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/${locale}#sponsors`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  const rootEntry = {
    url: BASE_URL,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  };

  return [rootEntry, ...localeEntries];
}
