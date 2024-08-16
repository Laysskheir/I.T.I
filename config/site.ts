import { env } from "@/env.mjs";

export const siteConfig = {
  name: "I.T.I",
  fullName: "Improve to Impressive",
  title: "ITI - Improve to Impressive | Web & SEO Solutions",
  description:
    "ITI (Improve to Impressive) provides innovative web development, SEO, and digital marketing solutions to transform businesses from ordinary to extraordinary online.",
  keywords: [
    "ITI",
    "Improve to Impressive",
    "Web Development",
    "SEO",
    "Digital Marketing",
    "Web Solutions",
    "Online Business",
    "Digital Transformation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: env.NEXT_PUBLIC_APP_URL,
    siteName: "ITI - Improve to Impressive",
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ITI - Improve to Impressive",
      },
    ],
  },
  siteUrl: env.NEXT_PUBLIC_APP_URL,
  creator: {
    name: "ITI",
    url: env.NEXT_PUBLIC_APP_URL,
  },
  links: {
    x: "https://x.com/LayssKheir",
    github: "https://github.com/Laysskheir",
    instagram: "https://instagram.com/your-instagram-handle",
    whatsapp: "https://wa.me/your-whatsapp-number",
    facebook: "https://facebook.com/your-facebook-page",
  },
};
