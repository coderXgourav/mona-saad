import { Locale } from "@/i18n-config";

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  robots: string;
  canonical: string;
  og_title: string;
  og_description: string;
  og_type: string;
  og_image: string;
}

interface SEOConfigFile {
  [pageKey: string]: {
    [lang: string]: SEOConfig;
  };
}

// Static SEO configuration
export const seoConfig: SEOConfigFile = {
  "home": {
    "en": {
      "title": "Dr. Mona Saad - Best Obstetrician & Gynecologist in Sharjah & Dubai",
      "description": "Dr. Mona Saad - best female obstetrician & gynecologist in Sharjah & Dubai, specializes in painless delivery, high-risk pregnancy, laparoscopic surgery & more. Consult Today!",
      "keywords": "best gynecologist in dubai, gynecologist in dubai, best gynaecologist in sharjah,best obgyn in dubai, best obstetrician in dubai, female gynecologist in dubai, ob gyn, obstetrics and gynecology, best female gynecologist in dubai", 
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en",
      "og_title": "Dr. Mona Saad - gynecologist in sharjah",
      "og_description": "Dr. Mona Saad - best female obstetrician & gynecologist in Sharjah & Dubai, specializes in painless delivery, high-risk pregnancy, laparoscopic surgery & more. Consult Today!",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/logo.979d9fca.webp"
    },
    "ar": {
      "title": "الدكتورة منى سعد - أفضل طبيبة نساء وتوليد في الشارقة ودبي",
      "description": "الدكتورة منى سعد - أفضل طبيبة نساء وتوليد في الشارقة ودبي، متخصصة في الولادة بدون ألم، الحمل عالي الخطورة، الجراحة بالمنظار والمزيد. احجزي الآن!",
      "keywords": "الدكتورة منى سعد، طبيبة نساء وتوليد، أفضل طبيبة نساء في الشارقة ودبي، خبيرة في متابعة الحمل والولادة، وأفضل طبيبة توليد في دبي والشارقة.",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar",
      "og_title": "الدكتورة منى سعد - أفضل طبيبة نساء وتوليد في الشارقة ودبي",
      "og_description": "الدكتورة منى سعد - أفضل طبيبة نساء وتوليد في الشارقة ودبي، متخصصة في الولادة بدون ألم، الحمل عالي الخطورة، الجراحة بالمنظار والمزيد. احجزي الآن!",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/logo.979d9fca.webp"
    }
  },
  "about-us": {
    "en": {
      "title": "About Dr. Mona Saad - Expert Obstetrician & Gynecologist",
      "description": "Meet Dr. Mona Saad, trusted Obstetrician & Gynecologist Sharjah & Dubai.  Learn about her experience, mission, and dedication to women's health.",
      "keywords": "Dr Mona Saad about, Doctor Mona Saad",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/about-us",
      "og_title": "About Dr. Mona Saad - Expert Obstetrician & Gynecologist",
      "og_description": "Meet Dr. Mona Saad, trusted Obstetrician & Gynecologist Sharjah & Dubai.  Learn about her experience, mission, and dedication to women's health.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    },
    "ar": {
      "title": "عن الدكتورة منى سعد - خبيرة في أمراض النساء والتوليد",
      "description": "تعرفي على الدكتورة منى سعد، طبيبة نساء وتوليد موثوقة في الشارقة ودبي. تعرفي على خبرتها ورسالتها والتزامها بصحة المرأة.",
      "keywords": "عن الدكتورة منى سعد، الدكتورة منى سعد",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/about-us",
      "og_title": "عن الدكتورة منى سعد - خبيرة في أمراض النساء والتوليد",
      "og_description": "تعرفي على الدكتورة منى سعد، طبيبة نساء وتوليد موثوقة في الشارقة ودبي. تعرفي على خبرتها ورسالتها والتزامها بصحة المرأة.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    }
  },
  "contact-us": {
    "en": {
      "title": "Contact Dr. Mona Saad – Book a Consultation Today",
      "description": "Reach out to Dr. Mona Saad’s clinic for appointments, inquiries, or support. We’re here to guide you on your health journey. Call or message us today.",
      "keywords": "Contact Dr. Mona Saad",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/contact-us",
      "og_title": "Contact Dr. Mona Saad – Book a Consultation Today",
      "og_description": "Reach out to Dr. Mona Saad’s clinic for appointments, inquiries, or support. We’re here to guide you on your health journey. Call or message us today.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    },
    "ar": {
      "title": "تواصلي مع الدكتورة منى سعد – احجزي استشارتك اليوم",
      "description": "تواصلي مع عيادة الدكتورة منى سعد لحجز المواعيد أو الاستفسارات أو الدعم. نحن هنا لمرافقتك في رحلتك الصحية. اتصلي بنا أو أرسلي رسالة اليوم.",
      "keywords": "عن د منى سعد, خبرة طبيبة نساء, مؤهلات طبيبة توليد, خبيرة صحة المرأة, طبيبة الإمارات",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/contact-us",
      "og_title": "تواصلي مع الدكتورة منى سعد – احجزي استشارتك اليوم",
      "og_description": "تواصلي مع عيادة الدكتورة منى سعد لحجز المواعيد أو الاستفسارات أو الدعم. نحن هنا لمرافقتك في رحلتك الصحية. اتصلي بنا أو أرسلي رسالة اليوم.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    }
  },
  "blogs": {
    "en": {
      "title": "Blog – Dr. Mona Saad | Insights on Women’s Health",
      "description": "Read informative articles on women’s health, pregnancy care, gynecology, fertility, and more from Dr. Mona Saad. Stay informed and empowered.",
      "keywords": "Dr. Mona Saad Blogs",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/blogs",
      "og_title": "Blog – Dr. Mona Saad | Insights on Women’s Health",
      "og_description": "Read informative articles on women’s health, pregnancy care, gynecology, fertility, and more from Dr. Mona Saad. Stay informed and empowered.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    },
    "ar": {
      "title": "المدونة – د. منى سعد | مقالات حول صحة المرأة",
      "description": "اقرئي مقالات مفيدة حول صحة المرأة، رعاية الحمل، أمراض النساء، الخصوبة والمزيد من الدكتورة منى سعد. كوني على دراية وتمتعي بالقوة.",
      "keywords": "مدونة الدكتورة منى سعد",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/blogs",
      "og_title": "المدونة – د. منى سعد | مقالات حول صحة المرأة",
      "og_description": "اقرئي مقالات مفيدة حول صحة المرأة، رعاية الحمل، أمراض النساء، الخصوبة والمزيد من الدكتورة منى سعد. كوني على دراية وتمتعي بالقوة.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    }
  },
  "gallery": {
    "en": {
      "title": "Gallery – Dr. Mona Saad’s Clinic Highlights",
      "description": "Explore photos from Dr. Mona Saad’s clinic, events, procedures, and patient care moments.",
      "keywords": "Dr. Mona Saad’s clinic photos",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/gallery",
      "og_title": "Gallery – Dr. Mona Saad’s Clinic Highlights",
      "og_description": "Explore photos from Dr. Mona Saad’s clinic, events, procedures, and patient care moments.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    },
    "ar": {
      "title": "المعرض – لمحات من عيادة الدكتورة منى سعد",
      "description": "تصفحي صوراً من عيادة الدكتورة منى سعد، من الفعاليات والإجراءات الطبية ولحظات العناية بالمرضى.",
      "keywords": "صور عيادة الدكتورة منى سعد",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/gallery",
      "og_title": "المعرض – لمحات من عيادة الدكتورة منى سعد",
      "og_description": "تصفحي صوراً من عيادة الدكتورة منى سعد، من الفعاليات والإجراءات الطبية ولحظات العناية بالمرضى.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    }
  },
  "news": {
    "en": {
      "title": "News & Updates – Dr. Mona Saad",
      "description": "Stay updated with the latest news, events, and achievements from Dr. Mona Saad.",
      "keywords": "Dr. Mona Saad’s clinic photos",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/news",
      "og_title": "News & Updates – Dr. Mona Saad",
      "og_description": "Stay updated with the latest news, events, and achievements from Dr. Mona Saad.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    },
    "ar": {
      "title": "الأخبار والتحديثات – الدكتورة منى سعد",
      "description": "تابعي آخر الأخبار والفعاليات والإنجازات من الدكتورة منى سعد.",
      "keywords": "صور عيادة الدكتورة منى سعد",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/news",
      "og_title": "الأخبار والتحديثات – الدكتورة منى سعد",
      "og_description": "تابعي آخر الأخبار والفعاليات والإنجازات من الدكتورة منى سعد.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    }
  },
  "services": {
    "en": {
      "title": "Gynaecology Services in Sharjah & Dubai | Women's Health Expert",
      "description": "Trusted gynaecology services in Sharjah & Dubai, including painless delivery, laparoscopic surgery, fertility care, and high-risk pregnancy support. Contact Us Today!",
      "keywords": "Gynaecology Services in Sharjah, Gynaecology Services in Dubai, Best Gynaecology Services",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/services",
      "og_title": "Gynaecology Services in Sharjah & Dubai | Women's Health Expert",
      "og_description": "Trusted gynaecology services in Sharjah & Dubai, including painless delivery, laparoscopic surgery, fertility care, and high-risk pregnancy support. Contact Us Today!",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    },
    "ar": {
      "title": "خدمات طب النساء في الشارقة ودبي | خبيرة صحة المرأة",
      "description": "خدمات موثوقة في طب النساء في الشارقة ودبي، تشمل الولادة بدون ألم، الجراحة بالمنظار، علاج الخصوبة، ودعم الحمل عالي الخطورة. تواصلي معنا اليوم!",
      "keywords": "خدمات طب النساء في الشارقة، خدمات طب النساء في دبي، أفضل خدمات طب النساء",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/services",
      "og_title": "خدمات طب النساء في الشارقة ودبي | خبيرة صحة المرأة",
      "og_description": "خدمات موثوقة في طب النساء في الشارقة ودبي، تشمل الولادة بدون ألم، الجراحة بالمنظار، علاج الخصوبة، ودعم الحمل عالي الخطورة. تواصلي معنا اليوم!",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/about-one.db89fc8e.webp"
    }
  },
  "female-cosmetic": {
    "en": {
      "title": "Cosmetic Gynecology in Sharjah & Dubai | Cosmetic Gynecology Services",
      "description": "Advanced cosmetic gynecology services in Sharjah & Dubai, including O-Shot, PRP, labiaplasty, tightening & more. Feel confident & rejuvenated today.",
      "keywords": "Cosmetic Gynecology in Sharjah & Dubai, Cosmetic Gynecology in Dubai, Cosmetic Gynecology, Cosmetic Gynecology Service",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/female-cosmetic",
      "og_title": "Cosmetic Gynecology in Sharjah & Dubai | Cosmetic Gynecology Services",
      "og_description": "Advanced cosmetic gynecology services in Sharjah & Dubai, including O-Shot, PRP, labiaplasty, tightening & more. Feel confident & rejuvenated today.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/before-after-four.d70c3b7c.webp"
    },
    "ar": {
      "title": "تجميل النساء في الشارقة ودبي | خدمات تجميل النساء",
      "description": "خدمات تجميل النساء المتقدمة في الشارقة ودبي، تشمل O-Shot، وPRP، وتجميل الشفرتين، وشد المنطقة الحساسة والمزيد. اشعري بالثقة والتجدد اليوم.",
      "keywords": "تجميل النساء في الشارقة ودبي، تجميل النساء في دبي، تجميل النساء، خدمات تجميل النساء",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/female-cosmetic",
      "og_title": "تجميل النساء في الشارقة ودبي | خدمات تجميل النساء",
      "og_description": "خدمات تجميل النساء المتقدمة في الشارقة ودبي، تشمل O-Shot، وPRP، وتجميل الشفرتين، وشد المنطقة الحساسة والمزيد. اشعري بالثقة والتجدد اليوم.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/before-after-four.d70c3b7c.webp"
    }
  },
  "rare-conditions": {
    "en": {
      "title": "Rare Gynaecological Treatment in Sharjah & Dubai",
      "description": "Specialized care for rare gynaecological conditions in Sharjah & Dubai. Get expert treatment for pelvic pain, endometriosis, and more. Book a consult today.",
      "keywords": "Rare Gynaecological Conditions, Rare Gynaecological Treatment, Treatment for Uncommon Gynaecological Disorders, High-Risk and Rare Women’s Health Conditions",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/rare-conditions",
      "og_title": "Rare Gynaecological Treatment in Sharjah & Dubai",
      "og_description": "Specialized care for rare gynaecological conditions in Sharjah & Dubai. Get expert treatment for pelvic pain, endometriosis, and more. Book a consult today.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/before-after-four.d70c3b7c.webp"
    },
    "ar": {
      "title": "علاج الحالات النسائية النادرة في الشارقة ودبي",
      "description": "رعاية متخصصة للحالات النسائية النادرة في الشارقة ودبي. احصلي على علاج متخصص لآلام الحوض، والانتباذ البطاني الرحمي، والمزيد. احجزي استشارتك اليوم.",
      "keywords": "الحالات النسائية النادرة، علاج الحالات النسائية النادرة، علاج الاضطرابات النسائية غير الشائعة، الحالات الصحية النسائية النادرة وعالية الخطورة",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/rare-conditions",
      "og_title": "تجميل النساء في الشارقة ودبي | خدمات تجميل النساء",
      "og_description": "رعاية متخصصة للحالات النسائية النادرة في الشارقة ودبي. احصلي على علاج متخصص لآلام الحوض، والانتباذ البطاني الرحمي، والمزيد. احجزي استشارتك اليوم.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/before-after-four.d70c3b7c.webp"
    }
  },
  "services/painless-delivery": {
    "en": {
      "title": "Painless Delivery in Dubai | Pain-Free Childbirth | Dr. Mona Saad ",
      "description": "Expert painless delivery in Sharjah & Dubai. Dr Mona Saad offers safe, pain-free childbirth options with advanced techniques for comfortable normal delivery.",
      "keywords": "painless delivery in uae, Painless Delivery in Dubai, Painless normal delivery doctor in Dubai, Pain-free childbirth options Dubai",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/services/painless-delivery",
      "og_title": "Painless Delivery in Dubai | Pain-Free Childbirth | Dr. Mona Saad",
      "og_description": "Expert painless delivery in Sharjah & Dubai. Dr Mona Saad offers safe, pain-free childbirth options with advanced techniques for comfortable normal delivery.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/painlessDelivery.0f8fd191.webp"
    },
    "ar": {
      "title": "الولادة الطبيعية بدون ألم في الشارقة ودبي | ولادة آمنة",
      "description": "اختبري تجربة الولادة الطبيعية بدون ألم في الشارقة ودبي باستخدام أحدث الأساليب. ولادة آمنة ومريحة بإشراف خبراء. احجزي استشارتك اليوم.",
      "keywords": "الولادة الطبيعية بدون ألم في الشارقة، الولادة الطبيعية بدون ألم في دبي، الولادة الطبيعية بدون ألم، الولادة بدون ألم في الشارقة",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/services/painless-delivery",
      "og_title": "تجميل النساء في الشارقة ودبي | خدمات تجميل النساء",
      "og_description": "اختبري تجربة الولادة الطبيعية بدون ألم في الشارقة ودبي باستخدام أحدث الأساليب. ولادة آمنة ومريحة بإشراف خبراء. احجزي استشارتك اليوم.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/painlessDelivery.0f8fd191.webp"
    }
  },
  "services/cosmotices": {
    "en": {
      "title": "Cosmetic Gynaecology in Sharjah & Dubai | Aesthetic Gynecologist | Dr. Mona",
      "description": "Dr. Mona Saad, an aesthetic gynecologist in Dubai, specializing in cosmetic gynecology in Sharjah & Dubai, Labiaplasty, PRP treatment, j-spot treatment and O-Shot treatment.",
      "keywords": "Labiaplasty specialist in Dubai, prp treatment dubai, j-spot treatment dubai, O-Shot treatment in dubai, O Shot in Dubai, aesthetic gynecology in dubai, Best Aesthetic Gynecologist in Sharjah",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/services/cosmotices",
      "og_title": "Cosmetic Gynaecology in Sharjah & Dubai | Aesthetic Gynecologist | Dr. Mona",
      "og_description": "Dr. Mona Saad, an aesthetic gynecologist in Dubai, specializing in cosmetic gynecology in Sharjah & Dubai, Labiaplasty, PRP treatment, j-spot treatment and O-Shot treatment.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/cosmetics.c3063c03.webp"
    },
    "ar": {
      "title": "خدمات التجميل والعلاجات التجميلية النسائية في الشارقة ودبي",
      "description": "خدمات التجميل والعلاجات التجميلية النسائية المتقدمة تشمل O-Shot، وPRP، وتجميل الشفرتين والمزيد. علاجات آمنة وخاصة في الشارقة ودبي. احجزي الآن!",
      "keywords": "خدمات تجميل النساء في الشارقة، علاجات التجميل النسائي، خدمات تجميل النساء في دبي",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/services/cosmotices",
      "og_title": "خدمات التجميل والعلاجات التجميلية النسائية في الشارقة ودبي",
      "og_description": "خدمات التجميل والعلاجات التجميلية النسائية المتقدمة تشمل O-Shot، وPRP، وتجميل الشفرتين والمزيد. علاجات آمنة وخاصة في الشارقة ودبي. احجزي الآن!",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/cosmetics.c3063c03.webp"
    }
  },
  "services/laparoscopic-surgery": {
    "en": {
      "title": "Laparoscopic Surgery in Sharjah & Dubai | laparoscopic Gynecologist",
      "description": "Trusted Laparoscopic Gynecologist in Sharjah & Dubai offering advanced minimally invasive surgery. Dr. Mona Saad delivers expert laparoscopic surgery in Sharjah & Dubai, UAE.",
      "keywords": "laparoscopic gynecologic surgery in dubai, laparoscopic gynaecologist in sharjah, laparoscopic gynae surgeon in sharjah, laparoscopic surgery in uae, laparoscopic surgery in dubai",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/services/laparoscopic-surgery",
      "og_title": "Laparoscopic Surgery in Sharjah & Dubai | laparoscopic Gynecologist",
      "og_description": "Trusted Laparoscopic Gynecologist in Sharjah & Dubai offering advanced minimally invasive surgery. Dr. Mona Saad delivers expert laparoscopic surgery in Sharjah & Dubai, UAE.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/laproscopic.9e434e34.webp"
    },
    "ar": {
      "title": "الجراحة بالمنظار في الشارقة ودبي | أفضل طبيبة نساء وتوليد بالمنظار",
      "description": "طبيبة نساء وتوليد موثوقة متخصصة في الجراحة بالمنظار في الشارقة ودبي، تقدم جراحات متقدمة طفيفة التوغل. الدكتورة منى سعد تقدم خبرتها في الجراحة بالمنظار في الشارقة ودبي، الإمارات.",
      "keywords": "الجراحة بالمنظار في الشارقة، الجراحة بالمنظار في دبي، طبيبة نساء وتوليد متخصصة في المنظار، جراحة نسائية بالمنظار، الجراحة بالمنظار في الإمارات",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/services/laparoscopic-surgery",
      "og_title": "الجراحة بالمنظار في الشارقة ودبي | أفضل طبيبة نساء وتوليد بالمنظار",
      "og_description": "طبيبة نساء وتوليد موثوقة متخصصة في الجراحة بالمنظار في الشارقة ودبي، تقدم جراحات متقدمة طفيفة التوغل. الدكتورة منى سعد تقدم خبرتها في الجراحة بالمنظار في الشارقة ودبي، الإمارات.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/laproscopic.9e434e34.webp"
    }
  },
  "services/oncology-surgery": {
    "en": {
      "title": "Oncology Surgery in Sharjah & Dubai | Best Oncologist in UAE ",
      "description": "Meet Dr. Mona Saad for advanced gynecologic oncology surgery in Sharjah & Dubai. Expert care for uterine, ovarian & cervical cancer. Book your consult today.",
      "keywords": "Oncology surgeon in Dubai, Sharjah Oncologist, Sharjah Best Oncologist, Best Oncologist in UAE",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/services/oncology-surgery",
      "og_title": "Oncology Surgery in Sharjah & Dubai | Best Oncologist in UAE ",
      "og_description": "Meet Dr. Mona Saad for advanced gynecologic oncology surgery in Sharjah & Dubai. Expert care for uterine, ovarian & cervical cancer. Book your consult today.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/oncology.3a24f39e.webp"
    },
    "ar": {
      "title": "جراحة الأورام في الشارقة ودبي | أفضل طبيبة أورام في الإمارات",
      "description": "قابلي الدكتورة منى سعد لإجراء جراحات الأورام النسائية المتقدمة في الشارقة ودبي. رعاية متخصصة لسرطان الرحم والمبيض وعنق الرحم في جميع أنحاء الإمارات. احجزي استشارتك اليوم.",
      "keywords": "جراحة الأورام في الشارقة، جراحة الأورام في دبي، طبيبة أورام في الشارقة، أفضل طبيبة أورام في الشارقة، أفضل طبيبة أورام في الإمارات",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/services/oncology-surgery",
      "og_title": "جراحة الأورام في الشارقة ودبي | أفضل طبيبة أورام في الإمارات",
      "og_description": "قابلي الدكتورة منى سعد لإجراء جراحات الأورام النسائية المتقدمة في الشارقة ودبي. رعاية متخصصة لسرطان الرحم والمبيض وعنق الرحم في جميع أنحاء الإمارات. احجزي استشارتك اليوم.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/oncology.3a24f39e.webp"
    }
  },
  "services/botox": {
    "en": {
      "title": "Botox for Vaginal Muscles in Sharjah & Dubai | Pelvic Floor Botox Injections",
      "description": "Leading vaginismus treatment in Sharjah & Dubai. Dr. Mona Saad offers botox for vaginal muscles in sharjah and pelvic floor botox injections for effective muscle relaxation.",
      "keywords": "Botox for Vaginismus Treatment,Vaginismus Treatment,Vaginismus Treatment in dubai,vaginal botox,pelvic floor botox recovery,pelvic floor botox injections dubai",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/services/botox",
      "og_title": "Botox for Vaginal Muscles in Sharjah & Dubai | Pelvic Floor Botox Injections",
      "og_description": "Leading vaginismus treatment in Sharjah & Dubai. Dr. Mona Saad offers botox for vaginal muscles in sharjah and pelvic floor botox injections for effective muscle relaxation.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/botox.ec7cddb2.webp"
    },
    "ar": {
      "title": "علاج التشنج المهبلي باستخدام البوتوكس في الشارقة ودبي | حقن البوتوكس",
      "description": "علاج آمن وفعال للتشنج المهبلي باستخدام البوتوكس في الشارقة ودبي. راحة سريعة من الألم والتشنج. احجزي استشارتك الخاصة اليوم.",
      "keywords": "علاج التشنج المهبلي، علاج التشنج المهبلي في الشارقة، علاج التشنج المهبلي باستخدام البوتوكس في الشارقة، علاج التشنج المهبلي باستخدام البوتوكس في دبي، البوتوكس لعلاج التشنج المهبلي",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/services/botox",
      "og_title": "علاج التشنج المهبلي باستخدام البوتوكس في الشارقة ودبي | حقن البوتوكس",
      "og_description": "علاج آمن وفعال للتشنج المهبلي باستخدام البوتوكس في الشارقة ودبي. راحة سريعة من الألم والتشنج. احجزي استشارتك الخاصة اليوم.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/botox.ec7cddb2.webp"
    }
  },
  "services/high-risk-pregnancy": {
    "en": {
      "title": "High-Risk Pregnancy in Sharjah & Dubai | Dr. Mona Saad",
      "description": "As a specialist for high-risk pregnancy in Sharjah & Dubai, Dr. Mona Saad provides high-risk prenatal care for a safe journey. Consult for high risk of pregnancy.",
      "keywords": "High-Risk Pregnancy Doctor in Dubai, sharjah,Specialist for High-Risk Pregnancy Dubai,high risk of pregnancy,Best obstetrician for high-risk pregnancy in Dubai,High-risk prenatal care Dubai,High-Risk Pregnancy center", 
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/en/services/high-risk-pregnancy",
      "og_title": "High-Risk Pregnancy in Sharjah & Dubai | Dr. Mona Saad",
      "og_description": "As a specialist for high-risk pregnancy in Sharjah & Dubai, Dr. Mona Saad provides high-risk prenatal care for a safe journey. Consult for high risk of pregnancy.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/highRiskPregnancy.d8513f53.webp"
    },
    "ar": {
      "title": "رعاية الحمل عالي الخطورة في الشارقة ودبي | أفضل طبيبة نساء وتوليد",
      "description": "رعاية متخصصة للحمل عالي الخطورة في الشارقة ودبي. متابعة دقيقة، فحوصات متقدمة، ودعم شامل لضمان حمل وولادة آمنة. احجزي الآن.",
      "keywords": "رعاية الحمل عالي الخطورة، الحمل عالي الخطورة في الشارقة، الحمل عالي الخطورة في دبي، أخصائية في الحمل عالي الخطورة، خدمات الأمومة للحمل عالي الخطورة، طبيبة نساء وتوليد خبيرة في الحمل عالي الخطورة",
      "robots": "index, follow",
      "canonical": "https://www.drmonasaad.com/ar/services/high-risk-pregnancy",
      "og_title": "رعاية الحمل عالي الخطورة في الشارقة ودبي | أفضل طبيبة نساء وتوليد",
      "og_description": "رعاية متخصصة للحمل عالي الخطورة في الشارقة ودبي. متابعة دقيقة، فحوصات متقدمة، ودعم شامل لضمان حمل وولادة آمنة. احجزي الآن.",
      "og_type": "website",
      "og_image": "https://www.drmonasaad.com/_next/static/media/highRiskPregnancy.d8513f53.webp"
    }
  }
};

export function getSEOConfig(pageKey: string, lang: Locale): SEOConfig | null {
  console.log("SEO pageKey:", pageKey, "lang:", lang);
  return seoConfig[pageKey]?.[lang] || null;
}