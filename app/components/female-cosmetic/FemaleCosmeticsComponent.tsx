import React, { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
import Image from "next/image";
import FirstImage from "/public/female-cosmetics/before-after-one.webp";
import SecondImage from "/public/female-cosmetics/before-after-two.webp";
import ThirdImage from "/public/female-cosmetics/before-after-three.webp";
import FourthImage from "/public/female-cosmetics/before-after-four.webp";
import { Dictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import CutImage from "/public/cosmetics/cut.webp";
import ArrowRightIcon from "/public/icons/pink-arrow-right.svg";

interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}

export const FemaleCosmeticsComponent: FC<Props> = ({ dict }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="flex flex-col col-span-3 xl:col-span-2 gap-10 mt-10 mb-6">
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_one}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_one}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_two}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_two}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_three}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_three}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_four}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_four}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_five}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_five}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_six}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_six}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_seven}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_seven}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_eight}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_eight.one}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_eight.two}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_eight.three}
          </p>
          <p className="text-lg">
            {dict.services.cosmotics_details.description_eight.four}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className="font-semibold text-xl mb-2 text-[#961F5F]">
            {dict.services.cosmotics_details.title_nine}
          </p>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col w-full md:w-1/2 xl:w-3/4">
          <Image
            src={CutImage}
            alt=""
            width={360}
            height={360}
            className="max-h-[600px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.cosmetics.cut}
            </p>
          </div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.instagram.com/p/ClgaVNcsKD-/?igsh=bXUyeTJ6MDU4bmF5`}
            className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
          >
            {dict.services.learn_more}
            <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
          </a>
        </AnimationWrapper>
      </div>
      <div className="col-span-3 xl:col-span-1">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
          <Image src={FirstImage} alt="" className="rounded-md" />

          <Image src={SecondImage} alt="" className="rounded-md" />

          <Image src={ThirdImage} alt="" className="rounded-md" />

          <Image src={FourthImage} alt="" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};
