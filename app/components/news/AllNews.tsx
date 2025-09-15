import { FC } from "react";
import { AnimationWrapper } from "../AnimationWrapper";
import Image from "next/image";
import { Dictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import ArrowRightIcon from "/public/icons/pink-arrow-right.svg";
import DoctorImage from "/public/news/doctor-news.webp";
import DoctorImageTwo from "/public/news/doctor-news-two.webp";
import Link from "next/link";

interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}

export const AllNews: FC<Props> = ({ dict }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={
              "https://www.emaratalyoum.com/polopoly_fs/1.1671460.1664197551!/image/image.jpg"
            }
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.gallery.seven}
            </p>
            <Link
              href={`news/rare-birth-of-no-identical-triplets`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </Link>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={
              "https://imagevars.gulfnews.com/2021/07/12/Dr.-Mona-is-interacting-with-the-patient-and-checking-on-her-health-conditions-1626068068747_17a9935a98c_large.jpg"
            }
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.gallery.three}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://gulfnews.com/uae/health/video-obese-and-diabetic-woman-in-uae-delivers-baby-after-five-miscarriages-1.80580772?fbclid=IwY2xjawG8GR9leHRuA2FlbQIxMQABHVtm0heL1NAMvT3nFJ31V6Y1e_x6Mksxlq_cpKCzeR509pjmxND4saiqwg_aem_LOxlgvG3Hzwl2RJeaizthw`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={
              "https://image.khaleejtimes.com/?uuid=0f0e982c-bbc8-51f4-b70f-daeef452c734&function=cropresize&type=preview&source=false&q=75&crop_w=0.99771&crop_h=0.99999&x=0.00114&y=0&width=1500&height=844"
            }
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.gallery.four}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.khaleejtimes.com/news/uae-doctors-remove-23-tumours-from-womans-uterus`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={
              "https://mededgemea.com/wp-content/uploads/2024/06/8-2-jpg.avif"
            }
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.gallery.five}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://mededgemea.com/uae-rare-heterotopic-pregnancy/?amp=1`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={"https://img.youtube.com/vi/PnoxJEu8UK0/maxresdefault.jpg"}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.gallery.six}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.youtube.com/watch?v=PnoxJEu8UK0`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>

        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={DoctorImage}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md object-cover"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.gallery.eight}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.alkhaleej.ae/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA/%D8%A7%D8%B3%D8%AA%D8%A6%D8%B5%D8%A7%D9%84-%D9%88%D8%B1%D9%85-%D9%85%D9%86-%D8%B1%D8%AD%D9%85-%D8%AE%D9%85%D8%B3%D9%8A%D9%86%D9%8A%D8%A9`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="bg-white border border-[#E8E8EA] rounded-xl p-4 flex flex-col">
          <Image
            src={DoctorImageTwo}
            alt=""
            width={360}
            height={360}
            className="h-[258px] w-full rounded-md object-cover"
          />
          <div className="flex flex-col gap-4 p-2 flex-1">
            <p className="font-medium md:font-semibold text-xl sm:text-2xl text-primary truncate">
              {dict.gallery.nine}
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/tv/CK83DO7JUOV/?igshid=8x6dxvui74n9`}
              className="text-xl sm:text-2xl text-[#961F5F] font-semibold flex items-center gap-2 mt-auto"
            >
              {dict.services.learn_more}
              <ArrowRightIcon className="size-7 stroke-[2] rtl:-scale-x-100" />
            </a>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
