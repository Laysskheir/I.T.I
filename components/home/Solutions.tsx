"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Solutions() {
  const t = useTranslations("home.solutions");

  const solutionsData = [
    {
      id: "01",
      title: t("solutions.webDevelopment.title"),
      description: t("solutions.webDevelopment.description"),
    },
    {
      id: "02",
      title: t("solutions.eCommerce.title"),
      description: t("solutions.eCommerce.description"),
    },
    {
      id: "03",
      title: t("solutions.uiUxDesign.title"),
      description: t("solutions.uiUxDesign.description"),
    },
    {
      id: "04",
      title: t("solutions.seoContent.title"),
      description: t("solutions.seoContent.description"),
    },
    {
      id: "05",
      title: t("solutions.socialMedia.title"),
      description: t("solutions.socialMedia.description"),
    },
    {
      id: "06",
      title: t("solutions.webHosting.title"),
      description: t("solutions.webHosting.description"),
    },
  ];
  const locale = useLocale();

  return (
    <section className="bg-muted p-4 sm:p-8 md:p-12 lg:p-14 py-8 sm:py-12 md:py-14 lg:py-16 container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-0">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg md:text-xl">{t("description")}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionsData.map((solution) => (
          <Card
            key={solution.id}
            className="flex flex-col rounded-none cursor-pointer pt-6 sm:pt-8 group border-t border-primary border-x-0 border-b-0"
          >
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">
                <div className="group-hover:bg-primary p-2 px-3 bg-background transition-all duration-200 text-primary group-hover:text-primary-foreground inline-block">
                  {solution.id}
                </div>
              </CardTitle>
            </CardHeader>
            <div className="flex-grow">
              <CardContent>
                <h3 className="font-semibold mb-2 text-lg sm:text-xl">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {solution.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end mt-auto">
                <div className="transition-all duration-300 ease-in-out relative">
                  <span className="relative z-10 text-sm sm:text-base">
                    {t("readMore")} →
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      <Card className="mt-8 sm:mt-10 rounded-lg sm:rounded-2xl flex flex-col sm:flex-row justify-between items-center p-4 sm:p-5 py-6">
        <p className="mb-4 sm:mb-0 text-center sm:text-left">{t("cta.text")}</p>
        <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href={`/${locale}/contact`}> {t("cta.button1")}</Link>
          </Button>
          <Button variant="default" className="w-full sm:w-auto" asChild>
            <Link href={`/${locale}/about`}> {t("cta.button2")}</Link>
          </Button>
        </div>
      </Card>
    </section>
  );
}
