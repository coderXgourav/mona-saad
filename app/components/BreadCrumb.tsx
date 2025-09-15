"use client";
import { FC, Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "/public/icons/home.svg";
import ArrowIcon from "/public/icons/arrow.svg";
import { Dictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { AnimationWrapper } from "./AnimationWrapper";

interface Props {
  dict: Dictionary;
  params: { lang: Locale };
  blogTitle?: string;
  serviceTitle?: string;
}
export const BreadCrumb: FC<Props> = ({
  dict,
  params,
  blogTitle,
  serviceTitle,
}) => {
  const paths = usePathname();

  // Split paths, filter out empty strings and remove "en" or "ar"
  const pathNames = paths
    .split("/")
    .filter((path) => path && path !== "en" && path !== "ar");

  const formatPathName = (name: string) => {
    return name.replace(/-/g, " ").split(" ").join("_");
  };

  return (
    <div
      style={{
        background: "linear-gradient(270deg, #961F5F 0%, #4E1835 100%)",
      }}
      className="my-5 sm:my-7 md:my-10 rounded-xl sm:rounded-2xl md:rounded-3xl text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-7"
    >
      <AnimationWrapper
        initialX={params.lang === "en" ? -100 : 100}
        initialY={0}
      >
        {serviceTitle ? (
          <h1 className="font-semibold capitalize text-3xl md:text-4xl mb-2 md:mb-4">
            {serviceTitle}
          </h1>
        ) : null}
        {blogTitle ? (
          <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl mb-2 md:mb-4">
            {blogTitle}
          </h1>
        ) : null}
        <ul
          className={
            "flex items-center flex-wrap gap-2 font-medium text-sm md:text-base"
          }
        >
          <li>
            <Link href={"/"} className="flex items-center gap-1">
              <HomeIcon className="size-4" /> {dict.breadcrumb.home}
            </Link>
          </li>
          {pathNames.length > 0 && (
            <ArrowIcon className="w-1.5 h-3 rtl:-scale-x-100" />
          )}
          {pathNames.map((link, index) => {
            const href = `/${params.lang}/${pathNames
              .slice(0, index + 1)
              .join("/")}`;
            const itemClasses =
              paths === href
                ? `${"listClasses"} ${"activeClasses"}`
                : "listClasses";
            return (
              <Fragment key={index}>
                <li className={itemClasses}>
                  <Link href={href} className="capitalize">
                    {
                      dict.breadcrumb[
                        formatPathName(link) as keyof typeof dict.breadcrumb
                      ]
                    }
                  </Link>
                </li>
                {pathNames.length !== index + 1 && (
                  <ArrowIcon className="w-1.5 h-3  rtl:-scale-x-100" />
                )}
              </Fragment>
            );
          })}
          {blogTitle ? (
            <li className="capitalize -ml-2 rtl:-mr-2">
              <Link href={""} className="capitalize">
                {blogTitle}
              </Link>
            </li>
          ) : null}
        </ul>
      </AnimationWrapper>
    </div>
  );
};
