import Image from "next/image";
import Map from "/public/map.webp";
import EmailIcon from "/public/icons/email.svg";
import PhoneIcon from "/public/icons/phone.svg";
import BuildingIcon from "/public/icons/building.svg";
import { FC } from "react";
import { Dictionary } from "@/dictionaries";
import { AnimationWrapper } from "../AnimationWrapper";
import HeroVectorTwoImage from "/public/hero-vector-two.png";

interface Props {
  dict: Dictionary;
}
export const GetInTouch: FC<Props> = ({ dict }) => {
  return (
    <AnimationWrapper
      className="px-6 sm:px-10 lg:px-16 xl:px-24 py-6 sm:py-8 lg:py-10 xl:py-12 rounded-3xl relative"
      style={{
        background: "linear-gradient(270deg, #961F5F 0%, #4E1835 100%)",
      }}
    >
      <div className="absolute max-w-full right-0 rtl:left-0 rtl:right-auto rtl:-scale-x-100 bottom-0 overflow-hidden z-10">
        <Image src={HeroVectorTwoImage} className="w-full" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-10">
        <div className="text-white flex justify-center flex-col">
          <p className="flex text-lg md:text-xl font-medium items-center gap-2 mb-4">
            <span className="inline-block h-[1px] w-8 bg-white"></span>
            {dict.home.get_in_touch.contact_us}
          </p>
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-6">
            {dict.home.get_in_touch.get_in_touch}
          </h3>
          <p className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            {dict.home.get_in_touch.description}
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-white rounded-full min-w-10 min-h-10 size-10 flex items-center justify-center">
                <EmailIcon className="size-6" />
              </div>
              <div className="flex flex-col justify-between">
                <p className="font-medium md:font-bold">
                  {" "}
                  {dict.home.get_in_touch.email}
                </p>
                <a
                  href="mailto:Dr.monaa.info@gmail.com"
                  className="text-sm underline"
                >
                  Dr.monaa.info@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-white rounded-full min-w-10 min-h-10 size-10 flex items-center justify-center">
                <PhoneIcon className="size-6" />
              </div>
              <div className="flex flex-col justify-between">
                <p className="font-medium md:font-bold">
                  {" "}
                  {dict.home.get_in_touch.phone}
                </p>
                <a
                  href={`tel:${dict.home.get_in_touch.number}`}
                  className="text-sm underline"
                  dir="ltr"
                >
                  {dict.home.get_in_touch.number}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-white rounded-full min-w-10 min-h-10 size-10 flex items-center justify-center">
                <BuildingIcon className="size-6" />
              </div>
              <div className="flex flex-col justify-between">
                <p className="font-medium md:font-bold">
                  {" "}
                  {dict.home.get_in_touch.clinic}
                </p>
                <p className="text-sm ">{dict.home.get_in_touch.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-center lg:justify-end items-center z-30">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://maps.app.goo.gl/3ASp4wMEqSQAa68SA"
          >
            <Image
              src={Map}
              alt="Map"
              // width={497}
              // height={380}
              className="rounded-xl max-w-[497px] max-h-[380px]  w-full"
            />
          </a>
        </div>
      </div>
    </AnimationWrapper>
  );
};
