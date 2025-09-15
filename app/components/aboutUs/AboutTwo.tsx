import Image from "next/image";
import AboutTwoImage from "/public/about-us/about-two.webp";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
import Link from "next/link";
import { Locale } from "@/i18n-config";
interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}
const AboutTwo: FC<Props> = ({ dict, params }) => {
  return (
    <AnimationWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-20">
      <div className="flex items-center justify-center lg:order-last">
        <Image
          className="rtl:-scale-x-100 w-full max-w-[525px] max-h-[447px] lg:max-h-full lg:max-w-full"
          src={AboutTwoImage}
          alt=""
        />
      </div>{" "}
      <div className="flex flex-col justify-center">
        <p className="flex items-center gap-2 text-[#961F5F] mb-2 md:mb-3 xl:mb-4">
          <span className="inline-block h-[1px] w-8 bg-[#961F5F]"></span>
          {dict.about.about_two.small_title}
        </p>
        <h3 className="text-primary mb-4 sm:mb-6 xl:mb-11 font-semibold xl:font-extrabold text-3xl sm:text-4xl xl:text-5xl">
          {dict.about.about_two.title}
        </h3>
        <p className="text-primary text-base md:text-lg xl:text-xl leading-8 font-light">
          <span className="font-medium xl:font-semibold me-1">
            {" "}
            {dict.about.about_two.dr_mona_saad}
          </span>{" "}
          {dict.about.about_two.description}
        </p>
        <Link
          href={`/${params.lang}/contact-us/#contact-form`}
          style={{ boxShadow: "0px 2px 10px 0px rgba(150, 31, 95, 0.20)" }}
          className="mt-4 sm:mt-6 xl:mt-10 w-fit rounded-full bg-[#961F5F] text-white px-8 py-3 xl:py-4 text-center"
        >
          {dict.about.about_two.contact_us}
        </Link>
      </div>
    </AnimationWrapper>
  );
};

export default AboutTwo;
