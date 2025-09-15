import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import React from "react";

export default async function RareBirthOfNonIdenticalTriplets({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <section className="content-wrapper text-primary">
      <BreadCrumb dict={dict} params={params} />
      <Image
        src={
          "https://www.emaratalyoum.com/polopoly_fs/1.1671460.1664197551!/image/image.jpg"
        }
        alt=""
        width={360}
        height={360}
        className=" w-full rounded-md"
      />
      <div className="mt-10">
        <p className="text-lg">{dict.gallery.seven_details}</p>
        <br />
        <p>
          {dict.gallery.seven_details_one}{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://bit.ly/3rhT5Fj`}
            className=" text-[#961F5F]"
          >
            https://bit.ly/3rhT5Fj
          </a>
        </p>
        <br />
        <p>
          {dict.gallery.seven_details_two}{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={` https://bit.ly/3LNSg0C`}
            className=" text-[#961F5F]"
          >
            https://bit.ly/3LNSg0C
          </a>
        </p>
        <br />
        <p>
          {dict.gallery.seven_details_three}{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={` https://bit.ly/3E2LKRX`}
            className=" text-[#961F5F]"
          >
            https://bit.ly/3E2LKRX
          </a>
        </p>
        <br />
        <p>
            {dict.gallery.seven_details_four}{" "}
            <a href={`tel:${dict.contact_us.number}`} className="text-[#961F5F]">
            {dict.contact_us.number}
            </a>
        </p>
      </div>
    </section>
  );
}
