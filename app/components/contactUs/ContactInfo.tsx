import CallIcon from "/public/icons/call.svg";
import SmsIcon from "/public/icons/sms.svg";
import LocationIcon from "/public/icons/location.svg";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";

interface Props {
  dict: Dictionary;
}
export const ContactInfo: FC<Props> = ({ dict }) => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-6 gap-6 lg:gap-8">
      <AnimationWrapper
        style={{
          boxShadow: "0px 0px 8px 0px rgba(150, 31, 95, 0.15)",
        }}
        className="col-span-6 sm:col-span-3 lg:col-span-2 text-center text-lg sm:text-xl xl:text-2xl text-primary w-full flex flex-col items-center justify-center gap-3 lg:gap-6 p-6 md:p-8 rounded-3xl flex-1"
      >
        <CallIcon className="fill-[#961F5F] size-8 sm:size-10 lg:size-12" />
        <p>{dict.contact_us.phone}</p>
        <p className="font-medium" dir="ltr">
          <a href={`tel:${dict.contact_us.number}`} className="hover:underline">
            {dict.contact_us.number}
          </a>
        </p>
      </AnimationWrapper>
      <AnimationWrapper
        style={{
          boxShadow: "0px 0px 8px 0px rgba(150, 31, 95, 0.15)",
        }}
        className="col-span-6 sm:col-span-3 lg:col-span-2 text-center text-lg sm:text-xl xl:text-2xl text-primary w-full flex flex-col items-center justify-center gap-3 lg:gap-6 p-6 md:p-8 rounded-3xl flex-1"
      >
        <SmsIcon className="size-8 sm:size-10 lg:size-12" />
        <p>{dict.contact_us.email}</p>
        <p className="font-medium">
          <a href="mailto:Dr.monaa.info@gmail.com" className="hover:underline">
            Dr.monaa.info@gmail.com
          </a>
        </p>
      </AnimationWrapper>
      <AnimationWrapper
        style={{
          boxShadow: "0px 0px 8px 0px rgba(150, 31, 95, 0.15)",
        }}
        className="col-span-6 sm:col-span-6 lg:col-span-2 text-center text-lg sm:text-xl xl:text-2xl text-primary w-full flex flex-col items-center justify-center gap-3 lg:gap-6 p-6 md:p-8 rounded-3xl flex-1"
      >
        <LocationIcon className="size-8 sm:size-10 lg:size-12" />
        <p>{dict.contact_us.address}</p>
        <p className="font-medium">{dict.contact_us.address_description}</p>
      </AnimationWrapper>
    </div>
  );
};
