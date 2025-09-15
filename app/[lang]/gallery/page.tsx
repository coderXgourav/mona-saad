import { BreadCrumb } from "@/app/components/BreadCrumb";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import { GalleryComponent } from "@/app/components/gallery/GalleryComponent";
import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const seoConfig = getSEOConfig("gallery", params.lang);
  return generatePageMetadata("gallery", params.lang, seoConfig);
}

export default async function Gallery({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper">
      <BreadCrumb dict={dict} params={params} />
      <GalleryComponent />
    </section>
  );
}
