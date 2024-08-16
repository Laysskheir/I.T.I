import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Logo: React.FC = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <Link
      href={`/${locale}/`}
      className="group relative flex items-center"
    >
      <motion.svg
        width="200"
        height="60"
        viewBox="0 0 200 60"
        initial="hidden"
        animate="visible"
        style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
      >
        <motion.path
          d="M10 30 Q 95 50 190 30"
          fill="transparent"
          stroke="#000"
          strokeWidth="2"
          variants={pathVariants}
        />
        <motion.path
          d="M185 25 L 190 30 L 185 35"
          fill="transparent"
          stroke="#000"
          strokeWidth="2"
          variants={pathVariants}
        />
      </motion.svg>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} text-3xl font-bold text-primary ${dancingScript.className}`}
      >
        {siteConfig.name}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`absolute top-0 italic ${isRTL ? "-left-12" : "-right-12"} text-sm text-gray-600 group-hover:text-primary transition-colors duration-300`}
      >
        {siteConfig.fullName}
      </motion.span>
    </Link>
  );
};

export default Logo;