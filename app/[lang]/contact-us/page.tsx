import { BreadCrumb } from "@/app/components/BreadCrumb";
import { ContactUsComponent } from "@/app/components/contactUs/ContactUs";
import { ContactInfo } from "@/app/components/contactUs/ContactInfo";
import { WorkingHours } from "@/app/components/contactUs/WorkingHours";
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
  const seoConfig = getSEOConfig('contact-us', params.lang);
  return generatePageMetadata('contact-us', params.lang, seoConfig);
}

export default async function ContactUs({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper">
      <BreadCrumb dict={dict} params={params} />
      <ContactUsComponent dict={dict} />
      <ContactInfo dict={dict} />
      <WorkingHours dict={dict} />
    </section>
  );
}
