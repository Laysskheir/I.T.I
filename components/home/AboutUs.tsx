"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("home.aboutUs");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-muted p-4 sm:p-8 md:p-12 lg:p-14 py-8 sm:py-12 md:py-14 lg:py-16"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 max-w-4xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl"
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        ></motion.div>
      </div>
    </motion.section>
  );
}
