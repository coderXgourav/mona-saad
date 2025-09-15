import { workingHours } from "@/app/constants/sideLinks";
import Image from "next/image";
import Clinic from "/public/contact-us/clinic.webp";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";

interface Props {
  dict: Dictionary;
}
export const WorkingHours: FC<Props> = ({ dict }) => {
  return (
    <AnimationWrapper
      id="working-hours"
      className="scroll-mt-36 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-5 md:px-8 py-5 sm:py-7 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 rounded-3xl bg-white"
      style={{ boxShadow: "0px 0px 8px 0px rgba(150, 31, 95, 0.15)" }}
    >
      <div className="flex flex-col justify-center">
        <p className="flex items-center gap-2 text-[#961F5F] mb-4">
          <span className="inline-block h-[1px] w-8 bg-[#961F5F]"></span>{" "}
          {dict.contact_us.our_schedule}
        </p>
        <h3 className="text-primary  mb-11 font-extrabold text-3xl sm:text-4xl lg:text-5xl">
          {dict.contact_us.working_hours}
        </h3>
        <ul>
          {workingHours.map(({ day, from, to }, index) => (
            <li
              key={day}
              className={`capitalize text-primary py-3 md:py-4 flex justify-between text-sm sm:text-lg md:text-xl lg:text-2xl ${
                index !== workingHours.length - 1 ? "border-b" : "border-0"
              }  border-[#961F5F]`}
            >
              <span>
                {dict.contact_us[day as keyof typeof dict.contact_us]}
              </span>{" "}
              <span>
                {dict.contact_us[from as keyof typeof dict.contact_us]} -{" "}
                {dict.contact_us[to as keyof typeof dict.contact_us]}
              </span>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="border-[3px] sm:border-[4px] md:border-[5px] lg:border-[6px] xl:border-[7px] border-[#F6A2A3] rounded-3xl h-[300px] sm:h-[400px] md:h-full w-full">
          <Image
            src={Clinic}
            width={608}
            height={561}
            alt="Map"
            className="rounded-3xl p-2 size-full object-cover"
          />
        </div>
      </div>
    </AnimationWrapper>
  );
};
