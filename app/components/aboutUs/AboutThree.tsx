import Image from "next/image";
import AboutThreeImage from "/public/about-us/about-three.webp";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
interface Props {
  dict: Dictionary;
}
export const AboutThree: FC<Props> = ({ dict }) => {
  return (
    <AnimationWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
      <div className="flex items-center justify-center">
        <Image
          className="rtl:-scale-x-100 w-full max-w-[525px] max-h-[447px] lg:max-h-full lg:max-w-full"
          src={AboutThreeImage}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="flex items-center gap-2 text-[#961F5F] mb-2 md:mb-3 xl:mb-4">
          <span className="inline-block h-[1px] w-8 bg-[#961F5F]"></span>
          {dict.about.about_three.small_title}
        </p>
        <h3 className="text-primary mb-4 sm:mb-6 xl:mb-11 font-semibold xl:font-extrabold text-3xl sm:text-4xl xl:text-5xl">
          {dict.about.about_three.title}
        </h3>
        <p className="text-primary text-base md:text-lg xl:text-xl leading-8 font-light">
          <span className="font-medium xl:font-semibold me-1">
            {dict.about.about_three.dr_mona_saad}
          </span>{" "}
          {dict.about.about_three.description}
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://wa.me/+971505104889`}
          style={{ boxShadow: "0px 2px 10px 0px rgba(150, 31, 95, 0.20)" }}
          className="mt-4 sm:mt-6 xl:mt-10 w-fit rounded-full bg-[#961F5F] text-white px-8 py-3 xl:py-4 text-center"
        >
          {dict.about.about_three.book_an_appointment}
        </a>
      </div>
    </AnimationWrapper>
  );
};
