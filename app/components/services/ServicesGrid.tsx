import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
import HighRiskPregnancyImage from "@/public/services/highRiskPregnancy.webp";
import PainlessDeliveryImage from "@/public/services/painlessDelivery.webp";
import CosmeticsImage from "@/public/services/cosmetics.webp";
import LaproscopicImage from "@/public/services/laproscopic.webp";
import OncologyImage from "@/public/services/oncology.webp";
import BotoxImage from "@/public/services/botox.webp";
import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/public/icons/pink-arrow-right.svg";
import { Locale } from "@/i18n-config";

interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}

export const ServicesGrid: FC<Props> = ({ dict, params }) => {
  return (
    <div>
      <AnimationWrapper>
        <p className="flex items-center justify-center gap-2 text-[#961F5F] mb-2 lg:mb-6">
          <span className="inline-block h-[1px] w-8 bg-[#961F5F]"></span>{" "}
          {dict.home.offers.our_services}
          <span className="inline-block h-[1px] w-8 bg-[#961F5F]"></span>
        </p>
        <h3 className="text-primary font-bold text-3xl md:text-6xl text-center mb-5 md:mb-7 lg:mb-10">
          {dict.home.offers.what_we_offer}
        </h3>
      </AnimationWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={PainlessDeliveryImage}
            alt=""
            className="h-[258px] rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary">
              {dict.services.painless_delivery}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#59595B]">
              {dict.services.painless_delivery_description}
            </p>
            <Link
              href={`/${params.lang}/services/painless-delivery`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </Link>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image src={CosmeticsImage} alt="" className="h-[258px] rounded-md" />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary">
              {dict.services.cosmotics}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#59595B]">
              {dict.services.cosmotics_description}
            </p>
            <Link
              href={`/${params.lang}/services/cosmotices`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </Link>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={LaproscopicImage}
            alt=""
            className="h-[258px] rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary">
              {dict.services.laparoscopic_surgery}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#59595B]">
              {dict.services.laparoscopic_surgery_description}
            </p>
            <Link
              href={`/${params.lang}/services/laparoscopic-surgery`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </Link>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex-col flex">
          <Image src={OncologyImage} alt="" className="h-[258px] rounded-md" />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary">
              {dict.services.oncology_surgery}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#59595B]">
              {dict.services.oncology_surgery_description}
            </p>
            <Link
              href={`/${params.lang}/services/oncology-surgery`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </Link>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image src={BotoxImage} alt="" className="h-[258px] rounded-md" />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary">
              {dict.services.botox}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#59595B]">
              {dict.services.botox_description}
            </p>
            <Link
              href={`/${params.lang}/services/botox`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </Link>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={HighRiskPregnancyImage}
            alt=""
            className="h-[258px] rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary">
              {dict.services.high_risk}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#59595B]">
              {dict.services.high_risk_description}
            </p>
            <Link
              href={`/${params.lang}/services/high-risk-pregnancy`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </Link>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
