import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import OncologyImage from "/public/services/oncology.webp";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";

import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig('services/oncology-surgery', params.lang);
  return generatePageMetadata('services/oncology-surgery', params.lang, seoConfig);
}

export default async function OncologySurgery({
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
        serviceTitle={dict.breadcrumb.oncology_surgery}
      />
      <Image
        src={OncologyImage}
        alt="Oncology Surgery Services by Dr. Mona Saad in Dubai & Sharjah"
        className="max-h-[620px] w-full rounded-xl object-cover"
        priority
      />
      <div className="flex flex-col gap-12 mt-12">
        {/* Section 1: Introduction */}
        <AnimationWrapper>
          <h2 className="text-3xl font-bold mb-4 text-[#961F5F] md:text-4xl">
            {dict.services.oncology_surgery_details.title_one}
          </h2>
          <p className="text-lg leading-relaxed">
            {dict.services.oncology_surgery_details.description_one}
          </p>
        </AnimationWrapper>

        {/* Section 2: Patient-Centered Care */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.oncology_surgery_details.title_two}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.oncology_surgery_details.description_two}
          </p>
          <h3 className="text-xl font-semibold mb-3 text-[#961F5F]">Surgical Specialties:</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {dict.services.oncology_surgery_details.surgical_specialties.map((specialty, index) => (
              <li key={index} className="leading-relaxed">{specialty}</li>
            ))}
          </ul>
        </AnimationWrapper>

        {/* Section 3: When Surgery is Recommended */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.oncology_surgery_details.title_three}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.oncology_surgery_details.description_three}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            {dict.services.oncology_surgery_details.conditions.map((condition, index) => (
              <li key={index} className="leading-relaxed">{condition}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            {dict.services.oncology_surgery_details.approach_note}
          </p>
        </AnimationWrapper>

        {/* Section 4: Why Choose Dr. Mona Saad */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.oncology_surgery_details.title_four}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.oncology_surgery_details.description_four}
          </p>
          <ul className="space-y-3 text-lg">
            {dict.services.oncology_surgery_details.reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </AnimationWrapper>

        {/* Section 5: Expanding Care */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.oncology_surgery_details.title_five}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.oncology_surgery_details.description_five}
          </p>
        </AnimationWrapper>

        {/* Section 6: Call to Action */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.oncology_surgery_details.title_six}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.oncology_surgery_details.description_six}
          </p>
        </AnimationWrapper>

        {/* Section 7: FAQs */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-6 text-[#961F5F] md:text-3xl">
            {dict.services.oncology_surgery_details.title_seven}
          </h3>
          <div className="space-y-6">
            {dict.services.oncology_surgery_details.faqs.map((faq, index) => (
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