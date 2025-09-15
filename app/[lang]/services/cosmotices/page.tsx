import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import CosmeticsImage from "/public/services/cosmetics.webp";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('services/cosmotices', params.lang);
  return generatePageMetadata('services/cosmotices', params.lang, seoConfig);
}

export default async function Cosmotices({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <section className="content-wrapper text-primary">
      <BreadCrumb
        dict={dict}
        params={params}
        serviceTitle={dict.breadcrumb.cosmotices}
      />
      <Image
        src={CosmeticsImage}
        alt="Cosmetic Gynecology Services by Dr. Mona Saad in Sharjah & Dubai"
        className="max-h-[620px] w-full rounded-xl object-cover"
        priority
      />
      <div className="flex flex-col gap-12 mt-12">
        {/* Section 1: Introduction */}
        <AnimationWrapper>
          <h2 className="text-3xl font-bold mb-4 text-[#961F5F] md:text-4xl">
            {dict.services.cosmotics_details.title_one}
          </h2>
          <p className="text-lg leading-relaxed">
            {dict.services.cosmotics_details.description_one}
          </p>
        </AnimationWrapper>

        {/* Section 2: Overview */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.cosmotics_details.title_two}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.cosmotics_details.description_two}
          </p>
        </AnimationWrapper>

        {/* Section 3: Specialized Procedures */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-6 text-[#961F5F] md:text-3xl">
            {dict.services.cosmotics_details.title_three}
          </h3>
          <div className="space-y-6">
            {dict.services.cosmotics_details.procedures.map((procedure, index) => (
              <div key={index} className="border-l-4 border-[#961F5F] pl-4">
                <h3 className="text-xl font-semibold mb-2 text-[#961F5F]">{procedure.name}</h3>
                <p className="text-lg leading-relaxed">{procedure.description}</p>
              </div>
            ))}
          </div>
        </AnimationWrapper>

        {/* Section 4: Candidacy */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.cosmotics_details.title_four}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.cosmotics_details.description_four}
          </p>
          <h3 className="text-xl font-semibold mb-3 text-[#961F5F]">Common Reasons for Treatment:</h3>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            {dict.services.cosmotics_details.candidacy_reasons.map((reason, index) => (
              <li key={index} className="leading-relaxed">{reason}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            {dict.services.cosmotics_details.privacy_note}
          </p>
        </AnimationWrapper>

        {/* Section 5: Why Choose Dr. Mona Saad */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.cosmotics_details.title_five}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {dict.services.cosmotics_details.description_five}
          </p>
          <h3 className="text-xl font-semibold mb-3 text-[#961F5F]">What You Can Expect:</h3>
          <ul className="space-y-3 text-lg">
            {dict.services.cosmotics_details.offerings.map((offering, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <span className="leading-relaxed">{offering}</span>
              </li>
            ))}
          </ul>
        </AnimationWrapper>

        {/* Section 6: FAQs */}
        <AnimationWrapper>
          <h3 className="text-xl font-bold mb-6 text-[#961F5F] md:text-2xl">
            {dict.services.cosmotics_details.title_six}
          </h3>
          <div className="space-y-6">
            {dict.services.cosmotics_details.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2 text-[#961F5F]">{faq.question}</h4>
                <p className="text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}