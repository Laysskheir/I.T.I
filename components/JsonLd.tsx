"use client";

import { siteConfig } from "@/config/site";

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/logo.png`,
          sameAs: [
            siteConfig.links.facebook,
            siteConfig.links.instagram,
            siteConfig.links.x,
          ],
        }),
      }}
    />
  );
}