export type Project = {
  title: string;
  description: {
    en: string;
    ar: string;
  };
  img: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "WaitArt",
    description: {
      en: "A tool for creating custom waitlist forms to capture and manage leads effectively. Streamline your pre-launch strategy.",
      ar: "أداة لإنشاء نماذج قوائم انتظار مخصصة لالتقاط وإدارة العملاء المحتملين بفعالية. قم بتبسيط استراتيجية ما قبل الإطلاق الخاصة بك."
    },
    img: "/images/waitart.png",
    link: "https://wait-art.vercel.app",
  },
  {
    title: "Vestige",
    description: {
      en: "An e-commerce platform for high-quality clothing products. Offers a seamless shopping experience with a focus on style.",
      ar: "منصة تجارة إلكترونية لمنتجات الملابس عالية الجودة. توفر تجربة تسوق سلسة مع التركيز على الأناقة."
    },
    img: "/images/vestige.png",
    link: "https://vestige-store.vercel.app",
  },
  {
    title: "ReveUI",
    description: {
      en: "A platform for exploring web interfaces with NextUI. Empowers developers to create stunning, responsive designs.",
      ar: "منصة لاستكشاف واجهات الويب باستخدام NextUI. تمكّن المطورين من إنشاء تصاميم مذهلة وسريعة الاستجابة."
    },
    img: "/images/reveui.png",
    link: "https://reveui.vercel.app",
  },
  {
    title: "StormKit",
    description: {
      en: "A collection of modern web templates for developers. Accelerate project development with ready-to-use components.",
      ar: "مجموعة من قوالب الويب الحديثة للمطورين. تسريع تطوير المشاريع باستخدام مكونات جاهزة للاستخدام."
    },
    img: "/images/stormkit.png",
    link: "https://stormkit.vercel.app",
  },
];