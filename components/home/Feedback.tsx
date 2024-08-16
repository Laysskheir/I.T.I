"use client";
import Image from "next/image";
import { Reviews } from "./Reviews";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Feedback() {
  const t = useTranslations('home.feedback');
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-muted p-4 sm:p-8 md:p-14 py-8 sm:py-12 md:py-16 text-center"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
            {t('title')}
          </h2>
          <p className="max-w-md">
            {t('description')}
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-4 sm:p-6 md:p-8 rounded-lg max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl italic mb-4 sm:mb-6"
          >
            "{t('testimonial.quote')}"
          </motion.p>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center"
          >
            <Image
              src="https://framerusercontent.com/images/Rc7nZU7BNuq1WpB5gN8azS34.jpg"
              alt={t('testimonial.author')}
              width={32}
              height={32}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-bold">{t('testimonial.author')}</p>
              <p className="text-sm">{t('testimonial.company')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Reviews />
      </motion.div>
    </motion.section>
  );
}