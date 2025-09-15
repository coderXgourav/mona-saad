import Image from "next/image";
import Map from "/public/map.webp";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
import { ContactForm } from "./ContactForm";

interface Props {
  dict: Dictionary;
}
export const ContactUsComponent: FC<Props> = ({ dict }) => {
  return (
    <AnimationWrapper
      id="contact-form"
      className="scroll-mt-36 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-5 md:px-8 py-5 sm:py-7 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 rounded-3xl bg-white"
      style={{ boxShadow: "0px 0px 8px 0px rgba(150, 31, 95, 0.15)" }}
    >
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://maps.app.goo.gl/3ASp4wMEqSQAa68SA"
        className="border-[3px] sm:border-[4px] md:border-[5px] lg:border-[6px] xl:border-[7px] border-[#F6A2A3] rounded-3xl relative h-[300px] sm:h-[400px] md:h-full w-full md:flex-1"
      >
        <Image
          src={Map}
          width={608}
          height={561}
          alt="Map"
          className="rounded-3xl p-2 size-full object-cover"
        />
      </a>
      <div className="flex flex-col justify-between flex-1 w-full">
        <ContactForm dict={dict} />
      </div>
    </AnimationWrapper>
  );
};
