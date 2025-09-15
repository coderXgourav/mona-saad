import { BreadCrumb } from "@/app/components/BreadCrumb";
import { Testimonial } from "@/app/components/home/Testimonial";
import { ServicesGrid } from "@/app/components/services/ServicesGrid";
import { WaitingFor } from "@/app/components/services/WaitingFor";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const seoConfig = getSEOConfig("services", params.lang);
  return generatePageMetadata("services", params.lang, seoConfig);
}

export default async function Services({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper ">
      <BreadCrumb dict={dict} params={params} />
      <div className="flex flex-col gap-16 sm:gap-20 md:gap-28 lg:gap-36 xl:gap-40">
        <ServicesGrid dict={dict} params={params} />
        <WaitingFor dict={dict} />
        <Testimonial dict={dict} params={params} />
      </div>
    </section>
  );
}
