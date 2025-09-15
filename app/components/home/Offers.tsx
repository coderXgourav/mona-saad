import SignatureIcon from "/public/icons/signature.svg";
import HeartIcon from "/public/icons/heart.svg";
import BadgeIcon from "/public/icons/badge.svg";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
interface Props {
  dict: Dictionary;
}
export const Offers: FC<Props> = ({ dict }) => {
  return (
    <section>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 text-center">
        <AnimationWrapper
          className="bg-white text-primary p-6 rounded-xl flex flex-col items-center justify-center gap-4"
          style={{
            boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
          }}
        >
          <SignatureIcon className="size-10 sm:size-12 lg:size-14" />
          <p className="text-lg sm:text-xl lg:text-2xl font-medium">
            {dict.home.offers.surgeries}
          </p>
          <p> {dict.home.offers.surgeries_description}</p>
        </AnimationWrapper>
        <AnimationWrapper
          className="bg-white text-primary p-6 rounded-xl flex flex-col items-center justify-center gap-4"
          style={{
            boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
          }}
        >
          <HeartIcon className="size-10 sm:size-12 lg:size-14" />
          <p className="text-lg sm:text-xl lg:text-2xl font-medium">
            {" "}
            {dict.home.offers.care}
          </p>
          <p> {dict.home.offers.care_description}</p>
        </AnimationWrapper>
        <AnimationWrapper
          className="bg-white text-primary p-6 rounded-xl flex flex-col items-center justify-center gap-4"
          style={{
            boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
          }}
        >
          <BadgeIcon className="size-10 sm:size-12 lg:size-14" />
          <p className="text-lg sm:text-xl lg:text-2xl font-medium">
            {dict.home.offers.professional}
          </p>
          <p> {dict.home.offers.professional_description}</p>
        </AnimationWrapper>
      </div>
    </section>
  );
};
