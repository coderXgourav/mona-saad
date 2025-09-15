"use client";
import { NavbarToggle } from "./NavbarToggle";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constants/sideLinks";
import SmallLogo from "/public/small-logo.webp";
import Logo from "/public/logo.webp";
import TranslateIcon from "/public/icons/translate.svg";
import { Locale } from "@/i18n-config";
import { FC } from "react";
import { Dictionary } from "@/dictionaries";
import { usePathname } from "next/navigation";

interface Props {
  params: { lang: Locale };
  dict: Dictionary;
}

export const Navbar: FC<Props> = ({ params, dict }) => {
  const pathName = usePathname();

  return (
    <nav
      className="sticky top-0 bg-white z-50 border-t border-t-[#f6eaef73]"
      style={{
        boxShadow: " 0px 8px 8px 0px rgba(150, 31, 95, 0.05)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between h-20 nav-break-point:h-[87px] content-wrapper">
        <div className="flex items-center gap-4">
          <Link
            href={`/${params.lang}`}
            className="hidden nav-break-point:block"
          >
            <Image src={SmallLogo} quality={100} className="w-12" alt="" />
          </Link>
          <Link
            href={`/${params.lang}`}
            className="block nav-break-point:hidden"
          >
            <Image
              src={Logo}
              priority
              quality={100}
              alt="Dr Mona Saad"
              className="w-[116px] h-[43px]"
            />
          </Link>

          <ul className="hidden nav-break-point:flex items-center md:gap-4 lg:gap-6 text-primary">
            {navLinks.map(({ name, path }) => (
              <li key={path} className="capitalize">
                <Link
                  className={`hover:text-[#961F5F] ${
                    pathName.replace(/^\/(ar|en)/, "") === path
                      ? "text-[#961F5F]"
                      : "text-primary"
                  }`}
                  href={`/${params.lang}${path}`}
                >
                  {dict.navbar[name as keyof typeof dict.navbar]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <NavbarToggle dict={dict} params={params} />
        <div className="hidden nav-break-point:flex items-center gap-4  ">
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
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://wa.me/+971505104889`}
            className=" bg-[#961F5F] text-white rounded-full px-6 py-2 shadow-md"
          >
            {dict.navbar.book_now}
          </a>
        </div>
      </div>
    </nav>
  );
};
