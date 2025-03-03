import { MetadataRoute } from 'next';

const siteUrl = 'https://www.faststeplaundry.online';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/donate`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
    },
  ];
}
