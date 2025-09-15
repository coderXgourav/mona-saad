import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import LaproscopicImage from "/public/services/laproscopic.webp";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('services/laparoscopic-surgery', params.lang);
  return generatePageMetadata('services/laparoscopic-surgery', params.lang, seoConfig);
}

export default async function LaparoscopicSurgery({
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
        serviceTitle={dict.breadcrumb.laparoscopic_surgery}
      />
      <Image
        src={LaproscopicImage}
        alt="Laparoscopic Surgery Services by Dr. Mona Saad in Dubai & Sharjah"
        className="max-h-[620px] w-full rounded-xl object-cover"
        priority
      />
      <div className="flex flex-col gap-12 mt-12">
        {/* Section 1: Introduction */}
        <AnimationWrapper>
          <h2 className="text-3xl font-bold mb-4 text-[#961F5F] md:text-4xl">
            {dict.services.laparoscopic_surgery_details.title_one}
          </h2>
          <p className="text-lg leading-relaxed">
            {dict.services.laparoscopic_surgery_details.description_one}
          </p>
        </AnimationWrapper>

        {/* Section 2: Why Choose Laparoscopic Surgery */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.laparoscopic_surgery_details.title_two}
          </h3>
          <div className="space-y-4">
            {dict.services.laparoscopic_surgery_details.description_two.map((item, index) => (
              <div key={index} className="border-l-4 border-[#961F5F] pl-4">
                <h3 className="text-lg font-semibold mb-2">{item.point}</h3>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimationWrapper>

        {/* Section 3: Conditions Treated */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.laparoscopic_surgery_details.title_three}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {dict.services.laparoscopic_surgery_details.conditions.map((condition, index) => (
              <li key={index} className="leading-relaxed">{condition}</li>
            ))}
          </ul>
        </AnimationWrapper>

        {/* Section 4: Benefits */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.laparoscopic_surgery_details.title_four}
          </h3>
          <div className="space-y-4">
            {dict.services.laparoscopic_surgery_details.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <div>
                  <h3 className="text-lg font-semibold">{benefit.point}</h3>
                  <p className="text-lg leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimationWrapper>

        {/* Section 5: Suitability */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.laparoscopic_surgery_details.title_five}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.laparoscopic_surgery_details.description_five}
          </p>
        </AnimationWrapper>

        {/* Section 6: FAQs */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-6 text-[#961F5F] md:text-3xl">
            {dict.services.laparoscopic_surgery_details.title_six}
          </h3>
          <div className="space-y-6">
            {dict.services.laparoscopic_surgery_details.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-[#961F5F]">{faq.question}</h3>
                <p className="text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </AnimationWrapper>

        {/* Section 7: Call to Action */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.laparoscopic_surgery_details.title_seven}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.laparoscopic_surgery_details.description_seven}
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
}