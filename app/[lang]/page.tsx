import { AboutDrMona } from "@/app/components/home/AboutDrMona/AboutDrMona";
import { GetInTouch } from "@/app/components/home/GetInTouch";
import { Hero } from "@/app/components/home/Hero";
import { Offers } from "@/app/components/home/Offers";
import { Testimonial } from "@/app/components/home/Testimonial";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Hero dict={dict} params={params} />
      <section className="content-wrapper flex flex-col gap-16 sm:gap-20 md:gap-28 lg:gap-36 xl:gap-40">
        <Offers dict={dict} />
        <AboutDrMona dict={dict} />
        <Testimonial dict={dict} params={params} />
        <GetInTouch dict={dict} />
      </section>
    </>
  );
}
