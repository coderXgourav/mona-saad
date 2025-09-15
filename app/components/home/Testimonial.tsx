"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ArrowRight from "/public/icons/arrow-right.svg";
import ArrowLeft from "/public/icons/arrow-left.svg";
import StarIcon from "/public/icons/star.svg";
import { Dictionary } from "@/dictionaries";
import { FC } from "react";
import { Locale } from "@/i18n-config";
import { AnimationWrapper } from "../AnimationWrapper";
interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}
export const Testimonial: FC<Props> = ({ dict, params }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  return (
    <div>
      <AnimationWrapper className="flex justify-between items-center mb-4 sm:mb-6 md:mb-10 lg:mb-14 flex-wrap gap-x-10 gap-y-3">
        <div>
          <p className="flex text-lg md:text-xl font-medium items-center gap-2 text-[#961F5F]">
            <span className="inline-block h-[1px] w-8 bg-[#961F5F]"></span>
            {dict.home.testimonial.testimonial}
          </p>
          <h3 className="text-primary font-semibold md:font-bold text-3xl sm:text-4xl lg:text-5xl">
            {dict.home.testimonial.happy_patients}
          </h3>
        </div>
        <p className="text-primary max-w-[474px]">
          {dict.home.testimonial.description}
        </p>
      </AnimationWrapper>
      <div className="overflow-hidden  p-1.5" dir="ltr" ref={emblaRef}>
        <div className="flex -ml-4">
          <a
            href="https://maps.app.goo.gl/zZvTHz9Ke5hFjCvZ7"
            rel="noopener noreferrer"
            target="_blank"
            dir={params.lang === "en" ? "ltr" : "rtl"}
            className={`flex-[0_0_100%] me-4 sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(100%/3-1rem)] min-w-0 pl-4`}
          >
            <AnimationWrapper
              initialY={0}
              className=" bg-white p-5 flex flex-col gap-4 rounded-3xl h-full"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
              }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-4" />
                ))}
              </div>
              <p className="text-sm font-medium">
                {dict.home.testimonial.message_five}
              </p>
              <div className="flex flex-row items-center gap-3 mt-auto">
                <Image
                  src={
                    "https://lh3.googleusercontent.com/a-/ALV-UjX7nSZekGLFqBGFfxKlAy2lCqplx5hR4gaxBLT08E7Ounj_hsHL=w36-h36-p-rp-mo-br100"
                  }
                  alt=""
                  width={32}
                  height={32}
                  className="size-8"
                />
                <div>
                  <p className="font-medium text-sm">
                    {dict.home.testimonial.reviewer_five}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </a>

          <a
            href="https://maps.app.goo.gl/WdXjS6Ud2uWvgnHH8"
            rel="noopener noreferrer"
            target="_blank"
            dir={params.lang === "en" ? "ltr" : "rtl"}
            className={`flex-[0_0_100%] me-4 sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(100%/3-1rem)] min-w-0 pl-4`}
          >
            <AnimationWrapper
              initialY={0}
              className=" bg-white p-5 flex flex-col gap-4 rounded-3xl h-full"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
              }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-4" />
                ))}
              </div>
              <p className="text-sm font-medium">
                {dict.home.testimonial.message_two}
              </p>
              <div className="flex flex-row items-center gap-3 mt-auto">
                <Image
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocJX_KKHbnjNWRasqOf32L41_DrzsbtwLmx4AepjEsikyf4FyA=w36-h36-p-rp-mo-br100"
                  }
                  width={32}
                  height={32}
                  alt=""
                  className="size-8"
                />
                <div>
                  <p className="font-medium text-sm">
                    {dict.home.testimonial.reviewer_two}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </a>
          <a
            href="https://maps.app.goo.gl/UVWwFF4yCbzTbSah8"
            rel="noopener noreferrer"
            target="_blank"
            dir={params.lang === "en" ? "ltr" : "rtl"}
            className={`flex-[0_0_100%] me-4 sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(100%/3-1rem)] min-w-0 pl-4`}
          >
            <AnimationWrapper
              initialY={0}
              className=" bg-white p-5 flex flex-col gap-4 rounded-3xl h-full"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
              }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-4" />
                ))}
              </div>
              <p className="text-sm font-medium">
                {dict.home.testimonial.message_four}
              </p>
              <div className="flex flex-row items-center gap-3 mt-auto">
                <Image
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocJ5mMjomJpazgz_zphlc5IwFvG42sYTF5aAj43HANyJYvKSeg=w36-h36-p-rp-mo-br100"
                  }
                  width={32}
                  height={32}
                  alt=""
                  className="size-8"
                />
                <div>
                  <p className="font-medium text-sm">
                    {dict.home.testimonial.reviewer_four}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </a>
          <a
            href="https://maps.app.goo.gl/nwjb5kTUN6jUrVri8"
            target="_blank"
            rel="noopener noreferrer"
            dir={params.lang === "en" ? "ltr" : "rtl"}
            className={`flex-[0_0_100%] me-4 sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(100%/3-1rem)] min-w-0 pl-4`}
          >
            <AnimationWrapper
              initialY={0}
              className=" bg-white p-5 flex flex-col gap-4 rounded-3xl h-full"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
              }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-4" />
                ))}
              </div>
              <p className="text-sm font-medium">
                {dict.home.testimonial.message_three}
              </p>
              <div className="flex flex-row items-center gap-3 mt-auto">
                <Image
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocIiojZh691WxkPdCkqXQ-6ZhTiPlfhdXVbAXRxy0UTdZY0M9A=w36-h36-p-rp-mo-br100"
                  }
                  width={32}
                  height={32}
                  alt=""
                  className="size-8"
                />
                <div>
                  <p className="font-medium text-sm">
                    {dict.home.testimonial.reviewer_three}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </a>

          <a
            href="https://maps.app.goo.gl/KzZhGgyiP2orbUFDA"
            rel="noopener noreferrer"
            target="_blank"
            dir={params.lang === "en" ? "ltr" : "rtl"}
            className={`flex-[0_0_100%] me-4 sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(100%/3-1rem)] min-w-0 pl-4`}
          >
            <AnimationWrapper
              initialY={0}
              className=" bg-white p-5 flex flex-col gap-4 rounded-3xl h-full"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
              }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-4" />
                ))}
              </div>
              <p className="text-sm font-medium">
                {dict.home.testimonial.message_one}
              </p>
              <div className="flex flex-row items-center gap-3 mt-auto">
                <Image
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocJgtbleamBbQ_XTouZrHlr-GrS8zlaP9nXjtGECfBEBljSIlw=w36-h36-p-rp-mo-br100"
                  }
                  width={32}
                  height={32}
                  alt=""
                  className="size-8"
                />
                <div>
                  <p className="font-medium text-sm">
                    {dict.home.testimonial.reviewer_one}
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </a>
        </div>
      </div>
      <AnimationWrapper
        className="flex items-center justify-center gap-4 mt-6"
        dir="ltr"
      >
        <button
          onClick={scrollPrev}
          className={`bg-white size-10 rounded-full flex items-center justify-center p-2`}
          style={{
            boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
          }}
        >
          <ArrowLeft className="size-4 md:size-6" />
        </button>
        <button
          onClick={scrollNext}
          className={`bg-white size-10 rounded-full flex items-center justify-center p-2`}
          style={{
            boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.10)",
          }}
        >
          <ArrowRight className="size-4 md:size-6" />
        </button>
      </AnimationWrapper>
    </div>
  );
};
