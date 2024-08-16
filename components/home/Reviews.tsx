import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";

const reviewKeys = [
  {
    name: "Sarah Ahmed",
    img: "https://framerusercontent.com/images/NaMFnxck5mYWx8LFIWkmiYE5QZI.png",
  },
  {
    name: "Mohammed Al-Rashid",
    img: "https://framerusercontent.com/images/xbU0dlTG8tKq1ufOlf1afYPaMGU.png",
  },
  {
    name: "Layla Mahmoud",
    img: "https://framerusercontent.com/images/hkRsc6QP7t64gICnvVmZCy3WmA.png",
  },
  {
    name: "Karim Nour",
    img: "https://framerusercontent.com/images/sYVhbSG1ObYTBLF1vnv4TrN7ZU0.png",
  },
  {
    name: "Nadia El-Masri",
    img: "https://framerusercontent.com/images/uCkHop8U7nBPGNpn7NVbLzJELVg.png",
  },
  {
    name: "Hassan Zaki",
    img: "https://framerusercontent.com/images/pA2fIxVrWNrZbR6OE7OtjGfaEds.png",
  },
];

const ReviewCard = ({
  img,
  name,
  role,
  body,
}: {
  img: string;
  name: string;
  role: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col items-start p-8 bg-background border-t border-primary border-x-0 border-b-0 mx-4 my-3 w-[300px] h-[250px] overflow-hidden">
      <div className="flex items-center mb-4">
        <Image
          src={img}
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-base text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 line-clamp-5">{body}</p>
    </div>
  );
};

export function Reviews() {
  const t = useTranslations("home.feedback");

  const translatedReviews = reviewKeys.map((reviewer) => ({
    name: t(`reviews.${reviewer.name}.name`),
    role: t(`reviews.${reviewer.name}.role`),
    body: t(`reviews.${reviewer.name}.body`),
    img: reviewer.img,
  }));

  return (
    <div className="bg-muted relative py-12">
      <div className="overflow-hidden">
        <Marquee>
          {translatedReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse>
          {translatedReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-muted dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-muted dark:from-background"></div>
    </div>
  );
}
