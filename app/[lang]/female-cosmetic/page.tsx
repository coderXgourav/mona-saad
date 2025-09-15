import { BreadCrumb } from "@/app/components/BreadCrumb";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import { FemaleCosmeticsComponent } from "@/app/components/female-cosmetic/FemaleCosmeticsComponent";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('female-cosmetic', params.lang);
  return generatePageMetadata('female-cosmetic', params.lang, seoConfig);
}

export default async function FemaleCosmetic({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper">
      <BreadCrumb dict={dict} params={params} />
      <FemaleCosmeticsComponent dict={dict} params={params} />
    </section>
  );
}
