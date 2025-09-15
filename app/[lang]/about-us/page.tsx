import { BreadCrumb } from "@/app/components/BreadCrumb";
import { AboutOne } from "@/app/components/aboutUs/AboutOne";
import AboutTwo from "@/app/components/aboutUs/AboutTwo";
import { AboutThree } from "@/app/components/aboutUs/AboutThree";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('about-us', params.lang);
  return generatePageMetadata('about-us', params.lang, seoConfig);
}

export default async function AboutUs({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper">
      <BreadCrumb dict={dict} params={params} />
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 xl:gap-36">
        <AboutOne dict={dict} />
        <AboutTwo dict={dict} params={params} />
        <AboutThree dict={dict} />
      </div>
    </section>
  );
}
