import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import PainlessDeliveryImage from "/public/services/painlessDelivery.webp";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('services/painless-delivery', params.lang);
  return generatePageMetadata('services/painless-delivery', params.lang, seoConfig);
}

export default async function PainlessDelivery({
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
        serviceTitle={dict.breadcrumb.painless_delivery}
      />
      <Image
        src={PainlessDeliveryImage}
        alt="Painless Delivery Services by Dr. Mona Saad in Sharjah & Dubai"
        className="max-h-[620px] w-full rounded-xl object-cover"
        priority
      />
      <div className="flex flex-col gap-12 mt-12">
        {/* Section 1: Introduction */}
        <AnimationWrapper>
          <h3 className="text-3xl font-bold mb-4 text-[#961F5F] md:text-4xl">
            {dict.services.painless_delivery_details.title_one}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.painless_delivery_details.description_one}
          </p>
          <p className="text-lg leading-relaxed mt-4">
            {dict.services.painless_delivery_details.description_two.one}
          </p>
        </AnimationWrapper>

        {/* Section 2: Modern Way */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.painless_delivery_details.title_three}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.painless_delivery_details.description_three}
          </p>
        </AnimationWrapper>

        {/* Section 3: Key Benefits */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-6 text-[#961F5F] md:text-3xl">
            {dict.services.painless_delivery_details.title_four}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            {dict.services.painless_delivery_details.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">•</span>
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            {dict.services.painless_delivery_details.description_four}
          </p>
        </AnimationWrapper>

        {/* Section 4: Suitability */}
        <AnimationWrapper>
          <h3 className="text-xl font-bold mb-4 text-[#961F5F] md:text-2xl">
            {dict.services.painless_delivery_details.title_five}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.painless_delivery_details.description_five}
          </p>
          <h4 className="text-lg font-semibold mb-3 text-[#961F5F]">Assessment Criteria:</h4>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            {dict.services.painless_delivery_details.assessment_criteria.map((criterion, index) => (
              <li key={index} className="leading-relaxed">{criterion}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            {dict.services.painless_delivery_details.customized_note}
          </p>
        </AnimationWrapper>

        {/* Section 5: Birth Options */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.painless_delivery_details.title_six}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {dict.services.painless_delivery_details.description_six}
          </p>
          <h3 className="text-xl font-bold mb-4 text-[#961F5F]">Pain Management Options:</h3>
          <div className="space-y-4">
            {dict.services.painless_delivery_details.pain_management_options.map((option, index) => (
              <div key={index} className="border-l-4 border-[#961F5F] pl-4">
                <h4 className="text-lg font-semibold">{option.name}</h4>
                <p className="text-lg leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed mt-6">
            {dict.services.painless_delivery_details.support_note}
          </p>
        </AnimationWrapper>

        {/* Section 6: Preferred Choice */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.painless_delivery_details.title_seven}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {dict.services.painless_delivery_details.description_seven}
          </p>
          <h3 className="text-xl font-bold mb-4 text-[#961F5F]">Advantages:</h3>
          <ul className="space-y-3 text-lg">
            {dict.services.painless_delivery_details.advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <span className="leading-relaxed">{advantage}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            {dict.services.painless_delivery_details.team_note}
          </p>
        </AnimationWrapper>

        {/* Section 7: Trusted Partner */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.painless_delivery_details.title_eight}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            {dict.services.painless_delivery_details.description_eight}
          </p>
          <h3 className="text-xl font-bold mb-4 text-[#961F5F]">What Dr. Mona Saad Offers:</h3>
          <ul className="space-y-3 text-lg">
            {dict.services.painless_delivery_details.offerings.map((offering, index) => (
              <li key={index} className="leading-relaxed">{offering}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed mt-6 italic">
            {dict.services.painless_delivery_details.partner_note}
          </p>
        </AnimationWrapper>

        {/* Section 8: FAQs */}
        <AnimationWrapper>
          <h3 className="text-xl font-bold mb-6 text-[#961F5F] md:text-2xl">
            {dict.services.painless_delivery_details.title_nine}
          </h3>
          <div className="space-y-6">
            {dict.services.painless_delivery_details.faqs.map((faq, index) => (
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