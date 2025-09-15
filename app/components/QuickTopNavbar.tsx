import { FC } from "react";
import { Dictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import FacebookIcon from "/public/icons/facebook.svg";
import TwitterIcon from "/public/icons/twitter.svg";
import InstagramIcon from "/public/icons/instagram.svg";
import YoutubeIcon from "/public/icons/youTube.svg";
import CallIcon from "/public/icons/call.svg";
import MapPincon from "/public/icons/map-pin.svg";
import Calendarcon from "/public/icons/calendar.svg";
import Link from "next/link";

interface Props {
  params: { lang: Locale };
  dict: Dictionary;
}

export const QuickTopNavbar: FC<Props> = ({ dict, params }) => {
  return (
    <nav className="bg-white">
      <div className="hidden nav-break-point:flex items-center justify-between h-14 content-wrapper">
        <div className="flex items-center gap-2 text-sm">
          <p
            className="text-primary flex items-center gap-1 border-e border-primary/50 pe-2 rtl:ps-2 rtl:border-s rtl:pe-0 rtl:border-e-0 rtl:flex-row-reverse"
            dir="ltr"
          >
            <CallIcon className="size-5 fill-primary  rtl:-scale-x-100" />{" "}
            <a
              href={`tel:${dict.contact_us.number}`}
              className="hover:text-[#961F5F] transition-all ease-in-out"
            >
              {dict.contact_us.number}
            </a>
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://maps.app.goo.gl/3ASp4wMEqSQAa68SA"
            className="text-primary flex items-center gap-1 hover:text-[#961F5F] transition-all ease-in-out"
          >
            <MapPincon className="size-4" />{" "}
            {dict.contact_us.address_description}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Link
            href={`/${params.lang}/contact-us/#working-hours`}
            className="text-primary flex items-center gap-1 hover:text-[#961F5F] transition-all ease-in-out border-e border-primary/50 pe-2"
          >
            <Calendarcon className="size-4 " /> {dict.home.hero.our_schedule}
          </Link>
          <ul className="flex rtl:flex-row-reverse items-center gap-5">
            <li>
              <a
                href={"https://www.facebook.com/dmona.saad?mibextid=ZbWKwL"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookIcon className="size-4 fill-primary hover:fill-[#961F5F] transition-all ease-in-out" />
              </a>
            </li>
            <li>
              <a
                href={"https://twitter.com/drmonamsaad"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterIcon className="size-4 fill-primary hover:fill-[#961F5F] transition-all ease-in-out" />
              </a>
            </li>
            <li>
              <a
                href={"https://www.instagram.com/drmona.saad"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon className="size-4 fill-primary hover:fill-[#961F5F] transition-all ease-in-out" />
              </a>
            </li>
            <li>
              <a
                href={"https://www.youtube.com/@drmonasaad1961"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <YoutubeIcon className="size-4 fill-primary hover:fill-[#961F5F] transition-all ease-in-out " />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
