import Tabs from "./Tabs";
import Image from "next/image";
import AboutImage from "/public/home/about.webp";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../../AnimationWrapper";
interface Props {
  dict: Dictionary;
}
export const AboutDrMona: FC<Props> = ({ dict }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 xl:gap-32">
      <AnimationWrapper className="flex items-center justify-center">
        <Image
          src={AboutImage}
          alt="Dr Mona Saad"
          className="max-w-[373px] max-h-[430px] lg:max-w-full lg:max-h-full w-full rtl:-scale-x-100"
        />
      </AnimationWrapper>
      <AnimationWrapper className="flex flex-col justify-center">
        <p className="flex items-center gap-2 text-[#961F5F] mb-2 md:mb-3 lg:mb-4">
          <span className="inline-block h-[1px] w-8 bg-[#961F5F]"></span>{" "}
          {dict.home.about.about_dr_mona}
        </p>
        <h2 className="text-primary font-medium text-3xl mb-6">
          {dict.home.about.title}
        </h2>
        <p className="text-primary text-sm mb-6">
          {dict.home.about.description}
        </p>
        <Tabs dict={dict} />
      </AnimationWrapper>
    </section>
  );
};
