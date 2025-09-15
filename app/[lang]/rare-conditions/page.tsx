import { BreadCrumb } from "@/app/components/BreadCrumb";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import { AllRareConditions } from "@/app/components/rare-conditions/AllRareConditions";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('rare-conditions', params.lang);
  return generatePageMetadata('rare-conditions', params.lang, seoConfig);
}

export default async function RareConditions({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper">
      <BreadCrumb dict={dict} params={params} />
      <AllRareConditions dict={dict} params={params} />
    </section>
  );
}
