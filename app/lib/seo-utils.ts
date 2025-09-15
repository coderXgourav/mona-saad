import { Metadata } from "next";
import { Locale } from "@/i18n-config";

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  robots: string;
  canonical: string;
  og_title: string;
  og_description: string;
  og_type: string;
  og_image: string;
}

export function generatePageMetadata(
  pageKey: string, 
  lang: Locale, 
  seoConfig: SEOConfig | null,
  dynamicData?: {
    title?: string;
    description?: string;
    canonical?: string;
  }
): Metadata {
  // Use dynamic data if provided, otherwise fall back to SEO config
  const title = dynamicData?.title || seoConfig?.title || (lang === "en" ? "Dr/ Mona Saad" : "د/ منى سعد");
  const description = dynamicData?.description || seoConfig?.description || (lang === "en" ? "Doctor Mona Saad" : "دكتورة منى سعد");
  const canonical = dynamicData?.canonical || seoConfig?.canonical;

  return {
    title,
    description,
    keywords: seoConfig?.keywords,
    robots: seoConfig?.robots,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: seoConfig?.og_title || title,
      description: seoConfig?.og_description || description,
      type: (seoConfig?.og_type as "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other") || 'website',
      images: seoConfig?.og_image ? [
        {
          url: seoConfig.og_image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoConfig?.og_title || title,
      description: seoConfig?.og_description || description,
      images: seoConfig?.og_image ? [seoConfig.og_image] : undefined,
    },
  };
}

// Helper function to get page key from pathname
export function getPageKeyFromPath(pathname: string): string {
  // Remove language prefix and leading slash
  const pathWithoutLang = pathname.replace(/^\/(en|ar)/, '').replace(/^\//, '');
  
  if (!pathWithoutLang) return 'home';
  
  // Handle nested service pages
  if (pathWithoutLang.startsWith('services/')) {
    return pathWithoutLang;
  }
  
  return pathWithoutLang;
} 