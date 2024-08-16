import Head from 'next/head'
import { siteConfig } from '@/config/site'

interface SeoProps {
  title?: string
  description?: string
  canonical?: string
  ogType?: string
  ogImage?: string
}

export default function Seo({
  title,
  description,
  canonical,
  ogType,
  ogImage,
}: SeoProps) {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const seoDescription = description || siteConfig.description
  const seoCanonical = canonical ? `${siteConfig.siteUrl}${canonical}` : siteConfig.siteUrl
  const seoOgType = ogType || 'website'
  const seoOgImage = ogImage || siteConfig.openGraph.images[0].url

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoCanonical} />
      <meta property="og:type" content={seoOgType} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
    </Head>
  )
}