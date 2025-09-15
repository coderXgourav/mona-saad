import { MetadataRoute } from 'next';

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = [
    {
      url: 'https://www.drmonasaad.com/en',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/en/contact-us',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar/contact-us',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/en/about-us',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar/about-us',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/en/blogs',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar/blogs',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/en/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/en/services/surgeries',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar/services/surgeries',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/en/services/care',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar/services/care',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/en/services/professional',
      lastModified: new Date(),
    },
    {
      url: 'https://www.drmonasaad.com/ar/services/professional',
      lastModified: new Date(),
    },
  ];

  let dynamicUrls: { url: string; lastModified: Date; }[] = [];
  try {
    const response = await fetch('https://monasaad.com/wp-json/sitemap/v1/posts', {
      headers: {'Cache-Control': 'no-store'}
    });
    const dynamicPosts = await response.json(); 
    console.log(dynamicPosts);
     
    
    if (Array.isArray(dynamicPosts)) {
      dynamicUrls = dynamicPosts.map((post: { url: string; post_modified_date: string }) => {
        const modifiedUrl = post.url.replace(/^\/(en|ar)\/([^\/]+)\//, '/$1/blogs/$2/'); 
        
        return {
          url: `https://www.drmonasaad.com${modifiedUrl}`,
          lastModified: new Date(post.post_modified_date),
        };
      });
    } else {
      console.warn('Unexpected API response format:', dynamicPosts);
    }
  } catch (error) {
    console.error('Failed to fetch dynamic sitemap data:', error);
  }

  return [...staticUrls, ...dynamicUrls];
}
