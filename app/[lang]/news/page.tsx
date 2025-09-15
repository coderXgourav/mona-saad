import { BreadCrumb } from "@/app/components/BreadCrumb";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import { AllNews } from "@/app/components/news/AllNews";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const seoConfig = getSEOConfig("news", params.lang);
  return generatePageMetadata("news", params.lang, seoConfig);
}

export default async function News({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper">
      <BreadCrumb dict={dict} params={params} />
      <AllNews dict={dict} params={params} />
    </section>
  );
}
