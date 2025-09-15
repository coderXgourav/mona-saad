import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constants/sideLinks";
import FacebookIcon from "/public/icons/facebook.svg";
import TwitterIcon from "/public/icons/twitter.svg";
import InstagramIcon from "/public/icons/instagram.svg";
import YoutubeIcon from "/public/icons/youTube.svg";
import Logo from "/public/logo.webp";
import { Locale } from "@/i18n-config";
import { FC } from "react";
import TranslateIcon from "/public/icons/translate.svg";
import { Dictionary } from "@/dictionaries";
import { AnimationWrapper } from "./AnimationWrapper";
interface Props {
  params: { lang: Locale };
  dict: Dictionary;
}
export const Footer: FC<Props> = ({ params, dict }) => {
  return (
    <section
      className="py-5 md:py-10 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-36 text-primary"
      style={{
        boxShadow: "0px -15px 40px 0px rgba(255, 204, 229, 0.40)",
      }}
    >
      <AnimationWrapper className="border-b">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-5 md:mb-10 content-wrapper">
          <Image src={Logo} alt="Dr Mona Saad" className="w-36 md:w-[176px]" />
          <Link
            href={params.lang === "en" ? "/ar" : "/en"}
            className="flex items-center gap-2 border border-[#EAEBEC] rounded-xl px-4 py-2 font-light"
          >
            {params.lang === "en" ? (
              <>
                <TranslateIcon className="size-6" /> العربية
              </>
            ) : (
              <>
                English <TranslateIcon className="size-6" />
              </>
            )}
          </Link>
        </div>
      </AnimationWrapper>
      <div className="content-wrapper">
        <AnimationWrapper className="py-10 border-b grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h6 className="font-medium text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-10">
              {dict.footer.clinic}
            </h6>
            <ul className="flex flex-col flex-wrap gap-2 lg:gap-4">
              {navLinks.map(({ name, path }) => (
                <li
                  key={path}
                  className="font-light capitalize text-sm sm:text-base"
                >
                  <Link href={`/${params.lang}${path}`}>
                    {dict.navbar[name as keyof typeof dict.navbar]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-10">
              {dict.footer.locations}
            </h6>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://maps.app.goo.gl/3ASp4wMEqSQAa68SA"
              className="font-light capitalize text-sm sm:text-base"
            >
              {dict.footer.location_one}
            </a>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h6 className="font-medium text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-10">
              {dict.footer.contact_us}
            </h6>
            <a
              href={`tel:${dict.footer.number.replace(/\s+/g, "")}`}
              className="font-light mb-4 sm:mb-6 block"
            >
              {dict.footer.number}
            </a>
            <a
              href="mailto:Dr.monaa.info@gmail.com"
              className="font-light mb-4 sm:mb-6 block"
            >
              Dr.monaa.info@gmail.com
            </a>
            <ul className="flex items-center gap-5">
              <li>
                <a
                  href={"https://www.facebook.com/dmona.saad?mibextid=ZbWKwL"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FacebookIcon className="size-5 fill-primary" />
                </a>
              </li>
              <li>
                <a
                  href={"https://twitter.com/drmonamsaad"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TwitterIcon className="size-5 fill-primary" />
                </a>
              </li>
              <li>
                <a
                  href={"https://www.instagram.com/drmona.saad"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <InstagramIcon className="size-5 fill-primary" />
                </a>
              </li>
              <li>
                <a
                  href={"https://www.youtube.com/@drmonasaad1961"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <YoutubeIcon className="size-5 fill-primary" />
                </a>
              </li>
            </ul>
          </div>
        </AnimationWrapper>
        <AnimationWrapper className="pt-5 md:pt-10 text-center">
          <p className="text-sm sm:text-base md:text-lg">
            {dict.footer.copyright}
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
};
