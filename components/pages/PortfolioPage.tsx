import React from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const PortfolioPage = () => {
  const t = useTranslations("portfolio");
  const locale = useLocale();

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 max-w-5xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-12 text-center tracking-tight">
        {t("title")}
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-12 sm:mb-20 text-center max-w-2xl mx-auto">
        {t("description")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        {projects.map((project, index) => (
          <section key={index} className="space-y-3 sm:space-y-4">
            <Image
              src={project.img}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
            />
            <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {project.description[locale as keyof typeof project.description]}
            </p>
            <Button variant="link" asChild>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewProject")}
              </Link>
            </Button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;