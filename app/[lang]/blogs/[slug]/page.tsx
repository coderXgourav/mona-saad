import { BlogContent } from "@/app/components/blogs/BlogContent";
import { BreadCrumb } from "@/app/components/BreadCrumb";
import client from "@/app/lib/apollo-client";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { gql } from "@apollo/client";
import Image from "next/image";
import { generatePageMetadata } from "@/app/lib/seo-utils";
import { getSEOConfig } from "@/app/lib/seo-config";
import type { Metadata } from "next";

const GET_POST_BY_SLUG = gql`
  query GetPosts($slug: String!, $language: LanguageCodeEnum!) {
    postBy(slug: $slug) {
      content
      title
      slug
      date
      seo {
        canonical
        metaDesc
        title
        fullHead
      }
      featuredImageDatabaseId
      featuredImage {
        node {
          mediaDetails {
            file
          }
          mediaItemUrl
        }
      }
      translation(language: $language) {
        id
        slug
        content
        title
        language {
          locale
          slug
        }
      }
    }
  }
`;
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string; lang: Locale };
}): Promise<Metadata> {
  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: {
        slug: decodeURIComponent(params.slug),
        language: params.lang.toUpperCase(),
      },
    });

    const post = data.postBy;
    
    // Use dynamic blog data if available, otherwise fall back to default blog SEO
    const seoConfig = getSEOConfig('blogs', params.lang);
    
    return generatePageMetadata('blogs', params.lang, seoConfig, {
      title: post?.seo?.title || post?.title,
      description: post?.seo?.metaDesc || post?.excerpt,
      canonical: post?.seo?.canonical || `https://www.drmonasaad.com/${params.lang}/blogs/${params.slug}`,
    });
  } catch {
    // Fallback to default blog SEO if there's an error
    const seoConfig = getSEOConfig('blogs', params.lang);
    return generatePageMetadata('blogs', params.lang, seoConfig);
  }
}

export default async function Blog({
  params,
}: {
  params: { slug: string; lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: {
      slug: decodeURIComponent(params.slug),
      language: params.lang.toUpperCase(),
    },
  });

  const post = data.postBy;

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    const locale = params.lang === "ar" ? "ar-EG" : "en-US";
    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    })?.format(date);
  };

  const formattedDate = formatDate(post?.date);
  console.log(post);

  return (
    <section className="content-wrapper">
      <BreadCrumb blogTitle={post?.title} dict={dict} params={params} />
      <Image
        src={post?.featuredImage?.node?.mediaItemUrl}
        alt=""
        width={100}
        height={100}
        className="min-w-full h-[472px] rounded-xl"
      />
      <div className="my-4 sm:my-6 lg:my-8 flex justify-center gap-x-4 gap-y-2 flex-wrap text-lg md:text-2xl font-semibold text-primary">
        <span className=" text-[#961F5F]">{dict.blogs.written_by}</span>{" "}
        {dict.blogs.dr_mona} . {formattedDate}
      </div>
      <BlogContent post={post} />
    </section>
  );
}
