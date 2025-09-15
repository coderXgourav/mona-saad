import { Dictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
import Image from "next/image";
import ArrowRightIcon from "/public/icons/pink-arrow-right.svg";
import PictureOne from "/public/rare/one.webp";
import PictureTwo from "/public/rare/two.webp";
import PictureThree from "/public/rare/three.webp";
import PictureFour from "/public/rare/four.webp";
import PictureFive from "/public/rare/five.webp";
import PictureRareCaseOne from "/public/rare/rare-case-one.webp";
import PictureRareCaseTwo from "/public/rare/rare-case-two.webp";
import PictureRareCaseThree from "/public/rare/rare-case-three.webp";
import PictureRareCaseFour from "/public/rare/rare-case-four.webp";

interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}

export const AllRareConditions: FC<Props> = ({ dict }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={PictureOne}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.rare.one}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/reel/C3u7dixxP15/?igsh=bHBocXJyYW1kejB2`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={PictureTwo}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.rare.two}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/reel/C4AdVS9R_HL/?igsh=ZHYxbHR3NjdoeWMz`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={PictureThree}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.rare.three}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/reel/Cs1emUIRlHq/?igsh=a2loc2VzbXVsdm1x`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>

        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={PictureFour}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.rare.four}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/p/CsOldjNsAk9/?igsh=ZXlhaXprOGtkdGU%3D`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={PictureFive}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.rare.five}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/p/Cp73NN1MvAF/?igsh=d2dtMDIxd243NDFr`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
      </div>
      <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col mt-10">
        <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary  mb-4">
          {dict.rare.rare_case}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <div>
            <Image
              src={PictureRareCaseOne}
              alt=""
              width={360}
              height={360}
              className="h-[258px] w-full rounded-md"
            />
          </div>
          <div>
            <Image
              src={PictureRareCaseTwo}
              alt=""
              width={360}
              height={360}
              className="h-[258px] w-full rounded-md"
            />
          </div>
          <div>
            <Image
              src={PictureRareCaseThree}
              alt=""
              width={360}
              height={360}
              className="h-[258px] w-full rounded-md"
            />
          </div>
          <div>
            {" "}
            <Image
              src={PictureRareCaseFour}
              alt=""
              width={360}
              height={360}
              className="h-[258px] w-full rounded-md"
            />
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};
