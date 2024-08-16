"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

import { Icons } from "../Icons";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isFirstCard?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  isFirstCard,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className={`p-4 sm:p-6 ${
      isFirstCard ? "bg-white shadow-lg" : ""
    } rounded-lg`}
  >
    <div className="mb-3 sm:mb-4">
      <div className="text-2xl sm:text-3xl mb-2 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    </div>
    <div>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default function ComparisonSection() {
  const t = useTranslations("home.comparison");
  const locale = useLocale();
  const [showPositive, setShowPositive] = useState(true);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const features = [
    {
      positive: {
        icon: <Icons.creativeExpertise className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("creative.title"),
        description: t("creative.description"),
      },
      negative: {
        icon: <Icons.genericDesigns className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("generic.title"),
        description: t("generic.description"),
      },
    },
    {
      positive: {
        icon: <Icons.responsiveDesigns className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("responsive.title"),
        description: t("responsive.description"),
      },
      negative: {
        icon: <Icons.poorUserExperience className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("poorUX.title"),
        description: t("poorUX.description"),
      },
    },
    {
      positive: {
        icon: <Icons.seoOptimization className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("seo.title"),
        description: t("seo.description"),
      },
      negative: {
        icon: <Icons.lowVisibility className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("lowVisibility.title"),
        description: t("lowVisibility.description"),
      },
    },
    {
      positive: {
        icon: <Icons.customSolutions className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("custom.title"),
        description: t("custom.description"),
      },
      negative: {
        icon: <Icons.limitedFunctionality className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("limited.title"),
        description: t("limited.description"),
      },
    },
    {
      positive: {
        icon: <Icons.stars className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("turnaround.title"),
        description: t("turnaround.description"),
      },
      negative: {
        icon: <Icons.missedDeadlines className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("missed.title"),
        description: t("missed.description"),
      },
    },
    {
      positive: {
        icon: <Icons.exceptionalSupport className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("support.title"),
        description: t("support.description"),
      },
      negative: {
        icon: <Icons.inadequateSupport className="w-6 h-6 sm:w-8 sm:h-8" />,
        title: t("inadequate.title"),
        description: t("inadequate.description"),
      },
    },
  ];

  return (
    <section className="py-8 sm:py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-0 text-center sm:text-left">
            {t("title")} <br className="hidden sm:inline" />
            <AnimatePresence mode="wait">
              <motion.span
                key={showPositive ? "do" : "dont"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`mx-2 inline-block ${
                  showPositive ? "text-blue-500" : "text-red-500"
                }`}
              >
                {showPositive ? t("do") : t("dont")}
              </motion.span>
            </AnimatePresence>
            <Switch
              checked={showPositive}
              onCheckedChange={setShowPositive}
              className="mr-2 sm:mr-4 align-middle"
              size={isDesktop ? "lg" : "sm"}
            />
            {t("workWithUs")}
          </h2>
          <div className="flex items-center mt-4 sm:mt-0">
            <Button size="lg" className="text-sm sm:text-base" asChild>
              <Link href={`/${locale}/contact`}>
                <Icons.stars className="w-3 h-3 sm:w-4 sm:h-4 mx-1" />
                {t("buildButton")}
              </Link>
            </Button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={showPositive ? "positive" : "negative"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  {...(showPositive ? feature.positive : feature.negative)}
                  isFirstCard={index === 0}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
