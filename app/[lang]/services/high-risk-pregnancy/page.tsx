import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import HighRiskPregnancyImage from "@/public/services/highRiskPregnancy.webp";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('services/high-risk-pregnancy', params.lang);
  return generatePageMetadata('services/high-risk-pregnancy', params.lang, seoConfig);
}

export default async function HighRiskPregnancy({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  type Faq = { question: string; answer: string };
  return (
    <section className="content-wrapper text-primary">
      <BreadCrumb
        dict={dict}
        params={params}
        serviceTitle={dict.breadcrumb.high_risk}
      />
      <Image
        src={HighRiskPregnancyImage}
        alt="High-Risk Pregnancy Care by Dr. Mona Saad in Dubai & Sharjah"
        className="max-h-[620px] w-full rounded-xl object-cover"
        priority
      />
      <div className="flex flex-col gap-12 mt-12">
        {/* Section 1: Introduction */}
        <AnimationWrapper>
          <h2 className="text-3xl font-bold mb-4 text-[#961F5F] md:text-4xl">
            {dict.services.high_risk_pregnancy_details.title_one}
          </h2>
          <p className="text-lg leading-relaxed">
            {dict.services.high_risk_pregnancy_details.description_one}
          </p>
        </AnimationWrapper>

        {/* Section 2: Dr. Mona Saad's Approach */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_two}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.high_risk_pregnancy_details.description_two}
          </p>
        </AnimationWrapper>

        {/* Section 3: Understanding High-Risk Pregnancy */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_three}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.high_risk_pregnancy_details.description_three}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            {dict.services.high_risk_pregnancy_details.risk_factors.map((factor: string, index: number) => (
              <li key={index} className="leading-relaxed">{factor}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            {dict.services.high_risk_pregnancy_details.risk_note}
          </p>
        </AnimationWrapper>

        {/* Section 4: Comprehensive Care */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_four}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.high_risk_pregnancy_details.description_four}
          </p>
          <ul className="space-y-3 text-lg">
            {dict.services.high_risk_pregnancy_details.care_services.map((service: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <span className="leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
        </AnimationWrapper>

        {/* Section 5: When to Visit a Specialist */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_five}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.high_risk_pregnancy_details.description_five}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            {dict.services.high_risk_pregnancy_details.visit_indicators.map((indicator: string, index: number) => (
              <li key={index} className="leading-relaxed">{indicator}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            {dict.services.high_risk_pregnancy_details.visit_note}
          </p>
        </AnimationWrapper>

        {/* Section 6: Why Choose Dr. Mona Saad */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_six}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.high_risk_pregnancy_details.description_six}
          </p>
          <ul className="space-y-3 text-lg">
            {dict.services.high_risk_pregnancy_details.reasons.map((reason: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed mt-4 italic">
            {dict.services.high_risk_pregnancy_details.choice_note}
          </p>
        </AnimationWrapper>

        {/* Section 7: High-Risk Pregnancy Centre */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_seven}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.high_risk_pregnancy_details.description_seven}
          </p>
        </AnimationWrapper>

        {/* Section 8: Call to Action */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_eight}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.high_risk_pregnancy_details.description_eight}
          </p>
        </AnimationWrapper>

        {/* Section 9: FAQs */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-6 text-[#961F5F] md:text-3xl">
            {dict.services.high_risk_pregnancy_details.title_nine}
          </h3>
          <div className="space-y-6">
            {dict.services.high_risk_pregnancy_details.faqs.map((faq: Faq, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-[#961F5F]">{faq.question}</h3>
                <p className="text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
} 