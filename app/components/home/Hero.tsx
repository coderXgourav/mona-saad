import Image from "next/image";
import HeroImage from "/public/home/hero.webp";
import PersonIcon from "/public/icons/person.svg";
import HomeWorkIcon from "/public/icons/home_work.svg";
import Link from "next/link";
import { FC } from "react";
import { Locale } from "@/i18n-config";
import { Dictionary } from "@/dictionaries";
import TrophyIcon from "/public/icons/trophy.svg";
import MarkIcon from "/public/icons/mark.svg";
import HeroVectorImage from "/public/hero-vector.png";

interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}
export const Hero: FC<Props> = ({ dict, params }) => {
  return (
    <section
      className="pt-10 pb-32 mb-52 md:mb-60 lg:mb-48 xl:mb-44 2xl:mb-48  relative"
      style={{
        boxShadow: " 0px 0px 8px 0px rgba(150, 31, 95, 0.15)",
        background:
          "linear-gradient(106deg, rgba(150, 31, 95, 0.10) 0.42%, rgba(255, 251, 253, 0.25) 11.05%, rgba(255, 251, 253, 0.25) 83.35%), linear-gradient(71deg, rgba(150, 31, 95, 0.10) 0%, rgba(255, 251, 253, 0.25) 10.58%, rgba(255, 251, 253, 0.25) 82.53%, rgba(150, 31, 95, 0.10) 103.16%)",
      }}
    >
      <div className="grid grid-cols-6 gap-y-10 content-wrapper">
        <div
          // initialY={0}
          className="col-span-6 lg:col-span-4 flex flex-col gap-4 xl:gap-10 justify-center"
        >
          <div className="flex flex-col items-center lg:items-start gap-1 xl:gap-4  text-center lg:text-start">
            {/* <p className="text-primary font-medium text-base sm:text-lg md:text-xl xl:text-3xl">
              {dict.home.hero.helper_text}
            </p> */}
            <h1 className="text-primary font-bold text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
              {dict.home.hero.dr_mona}
            </h1>
            <p className="text-primary text-sm sm:text-base md:text-lg xl:text-xl">
              {dict.home.hero.second_helper_text}
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start flex-wrap gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://wa.me/+971505104889`}
              className="rounded-full text-sm sm:text-base border border-[#961F5F] bg-[#961F5F] text-white px-4 py-2"
            >
              {dict.home.hero.book_an_appointment}
            </a>
            <Link
              href={`${params.lang}/contact-us/#working-hours`}
              className="rounded-full text-sm sm:text-base border border-[#961F5F] bg-transparent text-[#961F5F] px-4 py-2"
            >
              {dict.home.hero.our_schedule}
            </Link>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 flex items-center justify-center">
          <div className="relative">
            <Image
              priority
              quality={100}
              src={HeroImage}
              alt="Dr Mona Saad"
              className={`max-w-[373px] max-h-[430px] lg:max-w-full lg:max-h-full w-full ${
                params.lang === "ar" ? "-scale-x-100" : ""
              }`}
            />
            <div
              className="absolute text-primary flex items-center gap-2 z-40 left-8 top-1/2 bg-[#ffffff66] rounded-2xl xl:rounded-3xl border border-white p-2 xl:p-3"
              style={{
                backdropFilter: "blur(20px)",
              }}
            >
              <span className="bg-[#DFFE0F] size-8 xl:size-10 flex items-center justify-center rounded-full">
                <TrophyIcon className="size-5 xl:size-6" />
              </span>
              <div>
                <p className="text-sm xl:text-base font-medium">
                  {dict.home.hero.certificates}
                </p>
                <p className="text-xs xl:text-sm">
                  {dict.home.hero.in_surgeries}
                </p>
              </div>
            </div>
            <div
              className="absolute text-primary flex items-center gap-2 z-40 right-20 top-3/4 bg-[#ffffff66] rounded-2xl xl:rounded-3xl border border-white p-2 xl:p-3"
              style={{
                backdropFilter: "blur(20px)",
              }}
            >
              <span className="bg-[#DFFE0F] size-8 xl:size-10 flex items-center justify-center rounded-full">
                <MarkIcon className="size-5 xl:size-6" />
              </span>
              <div>
                <p className="text-sm xl:text-base font-medium">
                  {" "}
                  {dict.home.hero.years}
                </p>
                <p className="text-xs xl:text-sm">
                  {" "}
                  {dict.home.hero.of_experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-wrapper absolute mytestclass"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%", // Make sure it takes full width of its parent container
          // Optional: Set a max-width to prevent it from growing too large
        }}
      >
        <div className="mx-0 md:mx-10 relative">
          <div className="absolute max-w-full left-0  rtl:right-0 rtl:left-auto rtl:-scale-x-100 bottom-0 overflow-hidden">
            <Image src={HeroVectorImage} className="w-full" alt="" />
          </div>
          <div
            style={{
              background: "linear-gradient(270deg, #961F5F 0%, #4E1835 100%)",
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 lg:gap-40 xl:gap-52 text-white px-5 md:px-10 py-4 md:py-7 rounded-3xl"
          >
            <div>
              <p className="text-lg md:text-xl mb-2 md:mb-4">
                {dict.home.hero.who_we_are}
              </p>
              <h3 className="font-semibold md:font-bold text-xl lg:text-3xl xl:text-4xl 2xl:leading-[42px]">
                {dict.home.hero.your_journey}
              </h3>
            </div>
            <div className="flex flex-col justify-center">
              <p className="leading-6 mb-8">{dict.home.hero.at_kliniku}</p>
              <div className="flex justify-between items-center flex-wrap gap-5">
                <div className="flex gap-3 items-start">
                  <div className="bg-white size-9 min-w-9 min-h-9 rounded-full flex items-center justify-center">
                    <PersonIcon className="size-6" />
                  </div>
                  <div>
                    <p className="font-semibold md:font-bold text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                      {dict.home.hero.patients_count}
                    </p>
                    <p className="text-sm md:text-base">
                      {dict.home.hero.happy_patients}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-white size-9 min-w-9 min-h-9 rounded-full flex items-center justify-center">
                    <HomeWorkIcon className="size-6" />
                  </div>
                  <div>
                    <p className="font-semibold md:font-bold text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                      {dict.home.hero.clinics_count}
                    </p>
                    <p className="text-sm md:text-base">
                      {dict.home.hero.clinics}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
