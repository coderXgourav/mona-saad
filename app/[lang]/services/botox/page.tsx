
import BotoxImage from "@/public/services/botox.webp"; 
import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";
import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

// Use the shared Dictionary type from the central definitions

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const seoConfig = await getSEOConfig("services/botox", params.lang);
  return generatePageMetadata("services/botox", params.lang, seoConfig);
}

// Main page component
export default async function Botox({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  // Local types for structured data used by this page
  type Reason = { point: string; description: string };
  type Faq = { question: string; answer: string };

  return (
    <section className="content-wrapper text-primary">
      <BreadCrumb
        dict={dict}
        params={params}
        serviceTitle={dict.breadcrumb.botox}
      />
      <Image
        src={BotoxImage}
        alt="Botox for Vaginismus Treatment by Dr. Mona Saad in Dubai & Sharjah"
        className="max-h-[620px] w-full rounded-xl object-cover"
        priority
      />
      <div className="flex flex-col gap-12 mt-12">
        {/* Section 1: Introduction */}
        <AnimationWrapper>
          <h2 className="text-3xl font-bold mb-4 text-[#961F5F] md:text-4xl">
            {dict.services.botox_details.title_one}
          </h2>
          <p className="text-lg leading-relaxed">
            {dict.services.botox_details.description_one}
          </p>
        </AnimationWrapper>

        {/* Section 2: What is Vaginismus */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.botox_details.title_two}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.botox_details.description_two}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            {dict.services.botox_details.symptoms.map((symptom: string, index: number) => (
              <li key={index} className="leading-relaxed">{symptom}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            {dict.services.botox_details.approach_note}
          </p>
        </AnimationWrapper>

        {/* Section 3: How Botox Works */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.botox_details.title_three}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.botox_details.description_three}
          </p>
          <ul className="space-y-3 text-lg">
            {dict.services.botox_details.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed mt-4 italic">
            {dict.services.botox_details.results_note}
          </p>
        </AnimationWrapper>

        {/* Section 4: Who Should Consider Botox */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.botox_details.title_four}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.botox_details.description_four}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            {dict.services.botox_details.candidates.map((candidate: string, index: number) => (
              <li key={index} className="leading-relaxed">{candidate}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            {dict.services.botox_details.privacy_note}
          </p>
        </AnimationWrapper>

        {/* Section 5: Recovery Expectations */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.botox_details.title_five}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.botox_details.description_five}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {dict.services.botox_details.recovery_details.map((detail: string, index: number) => (
              <li key={index} className="leading-relaxed">{detail}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed mt-4 italic">
            {dict.services.botox_details.support_note}
          </p>
        </AnimationWrapper>

        {/* Section 6: Why Choose Dr. Mona Saad */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.botox_details.title_six}
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            {dict.services.botox_details.description_six}
          </p>
          <h3 className="text-xl font-semibold mb-3 text-[#961F5F]">
            What Makes Her a Preferred Choice?
          </h3>
          <div className="space-y-4">
            {dict.services.botox_details.reasons.map((reason: Reason, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#961F5F] font-semibold mt-1">✓</span>
                <div>
                  <h4 className="text-lg font-semibold">{reason.point}</h4>
                  <p className="text-lg leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed mt-4 italic">
            {dict.services.botox_details.success_note}
          </p>
        </AnimationWrapper>

        {/* Section 7: Call to Action */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-4 text-[#961F5F] md:text-3xl">
            {dict.services.botox_details.title_seven}
          </h3>
          <p className="text-lg leading-relaxed">
            {dict.services.botox_details.description_seven}
          </p>
        </AnimationWrapper>

        {/* Section 8: FAQs */}
        <AnimationWrapper>
          <h3 className="text-2xl font-bold mb-6 text-[#961F5F] md:text-3xl">
            {dict.services.botox_details.title_eight}
          </h3>
          <div className="space-y-6">
            {dict.services.botox_details.faqs.map((faq: Faq, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-[#961F5F]">
                  {faq.question}
                </h3>
                <p className="text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}