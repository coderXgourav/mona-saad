"use client";
import { FC, JSX, RefAttributes, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/app/constants/sideLinks";
import FacebookIcon from "/public/icons/facebook.svg";
import TwitterIcon from "/public/icons/twitter.svg";
import InstagramIcon from "/public/icons/instagram.svg";
import YoutubeIcon from "/public/icons/youTube.svg";
import { Dictionary } from "@/dictionaries";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";
import TranslateIcon from "/public/icons/translate.svg";
import { motion, SVGMotionProps } from "framer-motion";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

interface Props {
  dict: Dictionary;
  params: { lang: Locale };
}
const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#022144"
    strokeLinecap="round"
    {...props}
  />
);

export const NavbarToggle: FC<Props> = ({ dict, params }) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = () => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("trackCustom", "WhatsappChat", {
        link: "https://wa.me/971505104889",
      });
    } else {
      console.warn("Meta Pixel not initialized");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="nav-break-point:hidden"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            initial={false}
            d="M 2 9.423 L 20 9.423"
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>

      {/* Animated Menu */}
      <motion.div
        ref={menuRef}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { height: 0, opacity: 0 },
          open: { height: "480px", opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="flex-col gap-5 absolute top-[80px] content-wrapper text-primary left-0 bg-white z-50 py-6 w-full nav-break-point:hidden list-none overflow-hidden"
        style={{
          boxShadow: "0px 4px 8px rgba(150, 31, 95, 0.15)",
        }}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map(({ name, path }, index) => (
            <motion.li
              key={path}
              className="capitalize flex"
              onClick={() => setIsOpen(false)}
              initial={{
                opacity: 0,
                y: 0,
                x: params.lang === "en" ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                transition: { delay: 0.1 * (index + 1), duration: 0.5 },
              }}
            >
              <Link
                href={`/${params.lang}${path}`}
                className={`hover:text-[#961F5F] w-full ${
                  pathName.replace(/^\/(ar|en)/, "") === path
                    ? "text-[#961F5F]"
                    : "text-primary"
                }`}
              >
                {dict.navbar[name as keyof typeof dict.navbar]}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 0, x: params.lang === "en" ? -100 : 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          className="flex items-center gap-5 my-4 flex-wrap"
        >
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
            onClick={handleLinkClick}
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.me/971505104889"
            className="bg-[#961F5F] text-center text-white rounded-full px-6 py-2 w-fit shadow-md"
          >
            {dict.navbar.book_now}
          </a>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 0, x: params.lang === "en" ? -100 : 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { delay: 0.7, duration: 0.5 },
          }}
          className="flex items-center gap-5"
        >
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
              className=""
            >
              <YoutubeIcon className="size-5 fill-primary" />
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </>
  );
};
