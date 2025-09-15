import { BreadCrumb } from "@/app/components/BreadCrumb";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { gql } from "@apollo/client";
import client from "@/app/lib/apollo-client";
import Link from "next/link";
import Image from "next/image";

import { getSEOConfig } from "@/app/lib/seo-config";
import { generatePageMetadata } from "@/app/lib/seo-utils";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const seoConfig = getSEOConfig("blogs", params.lang);
  return generatePageMetadata("blogs", params.lang, seoConfig);
}

// GraphQL query to fetch posts
const GET_POSTS = gql`
  query GetPosts($language: LanguageCodeFilterEnum!, $first: Int) {
    posts(where: { language: $language }, first: $first) {
      nodes {
        id
        excerpt
        title
        slug
        date
        featuredImageDatabaseId
        language {
          code
          locale
        }
        featuredImage {
          node {
            mediaDetails {
              file
            }
            mediaItemUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const revalidate = 60;

export default async function Blogs({
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams: { after?: string; first?: string };
}) {
  const dict = await getDictionary(params.lang);

  const first = searchParams.first ? parseInt(searchParams.first) : 12; // Default first value to 1

  // Fetch posts using GraphQL query
  const { data } = await client.query({
    query: GET_POSTS,
    variables: {
      language: params.lang.toUpperCase(),
      first,
    },
  });

  const posts = data.posts.nodes;
  const { hasNextPage } = data.posts.pageInfo;
  console.log(posts);

  return (
    <section className="content-wrapper">
      <BreadCrumb dict={dict} params={params} />
      <div>
        {posts
          .slice(0, 1)
          .map(
            (post: {
              id: string;
              title: string;
              slug: string;
              date: string;
              featuredImage?: { node: { mediaItemUrl: string } };
            }) => {
              const locale = params.lang === "ar" ? "ar-EG" : "en-US";
              const formattedDate = new Date(post.date).toLocaleDateString(
                locale,
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              );

              return (
                <div key={post?.id} className="relative">
                  {post?.featuredImage ? (
                    <Image
                      src={post?.featuredImage.node.mediaItemUrl}
                      alt=""
                      width={100}
                      height={100}
                      className="min-w-full h-[472px] rounded-xl"
                    />
                  ) : null}
                  <Link
                    href={`blogs/${post?.slug}`}
                    replace={false}
                    className="absolute rtl:sm:right-12 rtl:sm:left-auto rtl:md:right-20 left-4 right-4 sm:left-12 md:left-20 sm:right-auto -bottom-10 bg-white p-10 rounded-3xl"
                    style={{
                      boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
                    }}
                  >
                    <p className="text-primary font-medium md:font-semibold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4">
                      {post?.title}
                    </p>
                    <p className="text-[#97989F]">{formattedDate}</p>
                  </Link>
                </div>
              );
            }
          )}
      </div>

      <p className="text-primary font-bold text-2xl mb-4 sm:mb-6 md:mb-8 mt-32">
        {dict.blogs.latest_blogs}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
        {posts
          .slice(1)
          .map(
            (post: {
              id: string;
              title: string;
              slug: string;
              date: string;
              featuredImage?: { node: { mediaItemUrl: string } };
            }) => {
              const locale = params.lang === "ar" ? "ar-EG" : "en-US";
              const formattedDate = new Date(post.date).toLocaleDateString(
                locale,
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              );

              return (
                <Link
                  href={`blogs/${post?.slug}`}
                  key={post?.id}
                  replace={false}
                  className="rounded-xl border border-[#E8E8EA] bg-white p-4"
                >
                  {post?.featuredImage ? (
                    <Image
                      src={post?.featuredImage.node.mediaItemUrl}
                      alt=""
                      width={100}
                      height={100}
                      className="size-full rounded-md h-[240px] object-fill"
                    />
                  ) : null}
                  <div className="p-0.5 sm:p-1 md:p-2 mt-2 md:mt-4">
                    <p className="text-primary font-medium md:font-semibold text-xl sm:text-2xl mb-2 sm:mb-3 md:mb-4">
                      {post?.title}
                    </p>
                    <p className="text-[#97989F]">{formattedDate}</p>
                  </div>
                </Link>
              );
            }
          )}
      </div>
      {hasNextPage && (
        <div className="mt-8 text-center">
          <Link
            href={`?first=${first + 12}`} // Update query params
            className="px-5 py-3 rounded-md border border-[rgba(105, 106, 117, 0.30)] text-[#696A75]"
          >
            {dict.blogs.view_more}
          </Link>
        </div>
      )}
    </section>
  );
}
