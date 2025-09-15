import { FC } from "react";
import { Dictionary } from "@/dictionaries";
import VectoreImage from "/public/services/vector-right.png";
import Image from "next/image";
import { AnimationWrapper } from "../AnimationWrapper";

interface Props {
  dict: Dictionary;
}

export const WaitingFor: FC<Props> = ({ dict }) => {
  return (
    <AnimationWrapper
      className="py-16 px-2 flex flex-col gap-10 items-center rounded-3xl text-white text-center relative"
      style={{
        background:
          " linear-gradient(270deg, #961F5F 0%, #4E1835 100%), linear-gradient(93deg, #0066AD 3.92%, #499DD8 111.8%)",
      }}
    >
      <div className="absolute right-0 bottom-0">
        <Image src={VectoreImage} alt="" />
      </div>
      <div className="absolute hidden md:block -scale-x-100 left-0 bottom-0">
        <Image src={VectoreImage} alt="" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-lg sm:text-xl md:text-2xl font-medium md:font-semibold">
          {dict.services.what_are_you}
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {dict.services.we_are_waiting}
        </p>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://wa.me/+971505104889`}
        className="bg-white text-[#961F5F] px-6 py-2 rounded-full sm:text-lg md:text-xl"
      >
        {dict.services.book_an_appointment}
      </a>
    </AnimationWrapper>
  );
};
