import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/dictionaries";
import WhatsappIcon from "/public/icons/whatsapp.svg";
import { QuickTopNavbar } from "@/app/components/QuickTopNavbar";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";

const montserratArabic = localFont({
  src: [
    { path: "../fonts/Montserrat-Arabic-Black.ttf", weight: "900" },
    { path: "../fonts/Montserrat-Arabic-Bold.ttf", weight: "700" },
    { path: "../fonts/Montserrat-Arabic-ExtraBold.ttf", weight: "800" },
    { path: "../fonts/Montserrat-Arabic-ExtraLight.ttf", weight: "275" },
    { path: "../fonts/Montserrat-Arabic-Light.ttf", weight: "300" },
    { path: "../fonts/Montserrat-Arabic-Medium.ttf", weight: "500" },
    { path: "../fonts/Montserrat-Arabic-Regular.ttf", weight: "400" },
    { path: "../fonts/Montserrat-Arabic-SemiBold.ttf", weight: "600" },
    { path: "../fonts/Montserrat-Arabic-Thin.ttf", weight: "250" },
  ],
});

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata { 
  const seoConfig = getSEOConfig('home', params.lang);
  return generatePageMetadata('home', params.lang, seoConfig);
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dict = await getDictionary(params.lang);
  return (
    <html id="123" lang="en" dir={params.lang === "en" ? "ltr" : "rtl"}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(
            function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-59C2VNK5');
          `
        }} />
        {/* End Google Tag Manager */}
        <meta name="google-site-verification" content="TQsKZPQ2SlPngTH_jt-a_DC3-HC5Of85TOdc-oFso_Q" />
        {/* hotjar : need to change Tracking  Code for Site 5209695 */}
        {/* <Script
          id="hotjar-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5209864,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        /> */}
        {/* meta pxiel : need to change pixel id  */}
        {/* <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '596116742863895');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=596116742863895&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript> */}
      </head>
      <body className={`${montserratArabic.className} antialiased`}>
        <QuickTopNavbar params={params} dict={dict} />
        <Navbar params={params} dict={dict} />
        {children}
        <Footer params={params} dict={dict} />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://wa.me/+971505104889`}
          className="fixed left-5 bottom-5 rtl:right-5 rtl:left-auto shadow-lg bg-[#5FFC7B] p-3 sm:p-3.5 md:p-4 rounded-full flex items-center justify-center"
        >
          <WhatsappIcon className="size-8 sm:size-9 md:size-10" />
        </a>
      </body>
    </html>
  );
}
