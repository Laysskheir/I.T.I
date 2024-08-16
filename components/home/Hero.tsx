"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 max-w-4xl"
      >
        {t("title")}
      </motion.h1>
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden mt-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex overflow-hidden"
        >
          <div className="w-full h-full relative">
            <motion.div
              animate={locale === "en" ? { x: ["0%", "-50%"] } : { x: ["50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="w-[200%] h-full absolute"
            >
              <Image
                src="/images/hero3.jpg"
                alt="AI-Powered Web Development"
                fill
                className="object-cover object-left"
                quality={100}
                sizes="300vw"
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="relative z-10 space-y-3 text-primary-foreground max-w-lg flex flex-col items-start justify-center h-full p-4 sm:p-6 md:p-8 lg:p-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8"
          >
            {t("subtitle")}
          </motion.h2>
          <motion.p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80">
            {t("description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto text-primary"
              asChild
            >
              <Link href={`/${locale}/portfolio`}>{t("exploreButton")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
