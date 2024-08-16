import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";


const teamMembers = [
  {
    name: "Anna Johnson",
    role: "CEO",
    image:
      "https://framerusercontent.com/images/lCDNLZd1sSMabjZPgob2SiXcI4g.png?scale-down-to=512",
  },
  {
    name: "Mark Thompson",
    role: "CTO",
    image:
      "https://framerusercontent.com/images/DqlCOuEt50xoB9OtRSkK9tDWTjQ.png?scale-down-to=512",
  },
  {
    name: "Emily Davis",
    role: "Lead Designer",
    image:
      "https://framerusercontent.com/images/Mp7qaShG98j2qmmBNdftQVFjYag.png?scale-down-to=512",
  },
  {
    name: "James Lee",
    role: "Marketing Director",
    image:
      "https://framerusercontent.com/images/MlkB8xZzBt2nrKMk9gnXsVZKNQ.png?scale-down-to=512",
  },
];

const AboutPage = () => {
  const t = useTranslations("about");
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-20">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6 lg:mb-8">
        {t("title")}
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12">
        {t("description")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {["websites", "traffic", "ecommerce", "reviews"].map((stat) => (
          <div key={stat} className="mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl mb-2">
              {t(`stats.${stat}.number`)}
            </h2>
            <p className="text-base sm:text-lg">{t(`stats.${stat}.title`)}</p>
            <p className="text-sm sm:text-base mt-2 text-muted-foreground">
              {t(`stats.${stat}.description`)}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 bg-muted p-6 sm:p-10 lg:p-14 py-10 sm:py-12 lg:py-16 mb-12 sm:mb-16">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-3 sm:mb-4">
            {t("whoWeAre.title")}
          </h2>
          <p className="text-base sm:text-lg">{t("whoWeAre.description")}</p>
        </div>
        <div className="mt-6 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-3 sm:mb-4">
            {t("ourStory.title")}
          </h2>
          <p className="text-base sm:text-lg">{t("ourStory.description")}</p>
        </div>
      </div>

      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8">
          {t("coreValues.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {["innovation", "quality", "clientSuccess"].map((value) => (
            <div key={value} className="mb-6 sm:mb-0">
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">
                {t(`coreValues.${value}.title`)}
              </h3>
              <p className="text-base sm:text-lg">
                {t(`coreValues.${value}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8">
          {t("team.title")}
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          {t("team.description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 border-2 border-primary"
              />
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;