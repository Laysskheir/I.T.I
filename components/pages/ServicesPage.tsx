"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Solutions from "@/components/home/Solutions";

const ServicesPage = () => {
  const t = useTranslations("services");

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 sm:mb-24 md:mb-32 text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl my-6 sm:my-8 md:my-12 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <motion.div
          className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden mx-auto"
          initial={{ width: "80%" }}
          whileInView={{ width: ["80%", "100%"] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1],
            repeatType: "reverse",
          }}
        >
          <Image
            src="/images/hero4.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover rounded-2xl sm:rounded-3xl"
          />
        </motion.div>
      </motion.section>

      <Solutions />
    </div>
  );
};

export default ServicesPage;
